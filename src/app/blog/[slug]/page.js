import { db } from '@/firebase';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import SinglePostClient from './SinglePostClient';

// 1. THIS FUNCTION RUNS ON THE SERVER FOR GOOGLE SEO
export async function generateMetadata({ params }) {
    // --- NEXT.JS 15 FIX: We MUST await the params object before reading the slug ---
    const resolvedParams = await params;
    const slug = resolvedParams?.slug ? decodeURIComponent(resolvedParams.slug) : null;

    if (!slug) return { title: 'Article Not Found | JEC' };

    let postData = null;

    try {
        // Strategy 1: Find the blog post by exact Slug
        const q = query(collection(db, "blog_posts"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            postData = querySnapshot.docs[0].data();
        } else {
            // Strategy 2: Fallback to Document ID Match
            const docRef = doc(db, "blog_posts", slug);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                postData = docSnap.data();
            }
        }
    } catch (error) {
        console.error("Error fetching metadata:", error);
    }

    // If we successfully found the post, generate perfect SEO Meta Tags!
    if (postData) {
        return {
            title: postData.metaTitle || postData.title,
            description: postData.metaDesc || postData.excerpt,
            keywords: postData.metaKeywords || '',
            alternates: {
                canonical: `https://www.jeckukas.org.in/blog/${slug}`,
            },
            openGraph: {
                title: postData.metaTitle || postData.title,
                description: postData.metaDesc || postData.excerpt,
                images: [postData.image || ''],
            }
        };
    }

    // Fallback if the URL actually doesn't exist in the database
    return { title: 'Article Not Found | JEC' };
}

// 2. THIS RENDERS THE ACTUAL VISUAL PAGE FOR THE USER
export default async function BlogPage({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug ? decodeURIComponent(resolvedParams.slug) : null;

    if (!slug) return <div>Article Not Found</div>;

    let postData = null;
    let recentPosts = [];

    try {
        // Fetch Single Post
        const q = query(collection(db, "blog_posts"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            postData = { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
        } else {
            const qLower = query(collection(db, "blog_posts"), where("slug", "==", slug.toLowerCase()));
            const querySnapshotLower = await getDocs(qLower);
            if (!querySnapshotLower.empty) {
                postData = { id: querySnapshotLower.docs[0].id, ...querySnapshotLower.docs[0].data() };
            } else {
                try {
                    const docRef = doc(db, "blog_posts", slug);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        postData = { id: docSnap.id, ...docSnap.data() };
                    }
                } catch (e) {}
            }
        }

        // Fetch Recent Posts
        const recentQ = query(collection(db, "blog_posts"));
        const recentSnap = await getDocs(recentQ);
        
        recentPosts = recentSnap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        recentPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        recentPosts = recentPosts.filter(p => (p.slug || p.id) !== slug).slice(0, 3);

    } catch (error) {
        console.error("Error fetching blog post on server:", error);
    }

    return <SinglePostClient initialPost={postData} initialRecentPosts={recentPosts} />;
}