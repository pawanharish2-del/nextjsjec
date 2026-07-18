import { fetchCollectionREST } from '@/lib/firestoreRest';
import SinglePostClient from './SinglePostClient';

// 1. THIS FUNCTION RUNS ON THE SERVER FOR GOOGLE SEO
export async function generateMetadata({ params }) {
    // --- NEXT.JS 15 FIX: We MUST await the params object before reading the slug ---
    const resolvedParams = await params;
    const slug = resolvedParams?.slug ? decodeURIComponent(resolvedParams.slug) : null;

    if (!slug) return { title: 'Article Not Found | JEC' };

    let postData = null;

    try {
        // Fetch using safe REST API to prevent Vercel 503 crash
        const allPosts = await fetchCollectionREST("blog_posts");
        
        // Find by exact slug
        postData = allPosts.find(p => p.slug === slug);
        
        // Fallback: Case-insensitive slug
        if (!postData) {
            postData = allPosts.find(p => p.slug?.toLowerCase() === slug.toLowerCase());
        }
        
        // Fallback: Document ID Match
        if (!postData) {
            postData = allPosts.find(p => p.id === slug);
        }

    } catch (error) {
        console.error("Error fetching metadata via REST:", error);
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
    
    let postData = null;
    let recentPosts = [];

    try {
        const allPosts = await fetchCollectionREST("blog_posts");
        allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

        postData = allPosts.find(p => p.slug === slug) 
                || allPosts.find(p => p.slug?.toLowerCase() === slug?.toLowerCase())
                || allPosts.find(p => p.id === slug);

        recentPosts = allPosts.filter(p => (p.slug || p.id) !== slug).slice(0, 3);
    } catch (e) {
        console.error(e);
    }

    return <SinglePostClient initialPost={postData} initialRecentPosts={recentPosts} />;
}