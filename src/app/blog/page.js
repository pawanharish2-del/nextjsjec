import { db } from '@/firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import BlogClient from './BlogClient';

export const metadata = {
    title: "Blog & News | Jaipur Engineering College",
    description: "Read the latest news, articles, insights, and updates from Jaipur Engineering College.",
    alternates: {
        canonical: "https://www.jeckukas.org.in/blog",
    }
};

export default async function BlogPage() {
    let initialPosts = [];

    try {
        const q = query(collection(db, "blog_posts"));
        const querySnapshot = await getDocs(q);

        initialPosts = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        // Sort by Date (Newest first)
        initialPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch (error) {
        console.error("Error fetching blog posts on server:", error);
    }

    return <BlogClient initialPosts={initialPosts} />;
}