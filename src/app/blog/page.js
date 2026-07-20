import React from 'react';
import BlogClient from './BlogClient';
import { fetchCollectionREST } from '@/lib/firestoreRest';

// Define SEO metadata for the blog page
export const metadata = {
    title: "News & Articles | Jaipur Engineering College",
    description: "Read the latest news, articles, achievements, and educational insights from Jaipur Engineering College (JEC).",
    keywords: "JEC blog, Jaipur Engineering College news, engineering articles, JEC campus updates, student achievements",
    alternates: {
        canonical: "https://www.jeckukas.org.in/blog",
    },
    openGraph: {
        title: "News & Articles | Jaipur Engineering College",
        description: "Read the latest news, articles, achievements, and educational insights from JEC.",
        url: "https://www.jeckukas.org.in/blog",
        siteName: "Jaipur Engineering College",
        type: "website",
    },
};

// Revalidate the page periodically (e.g., every 60 seconds) or keep it dynamic
export const revalidate = 60;

export default async function BlogPage() {
    // Fetch data using the safe REST API to prevent Vercel 503 errors
    let postsData = await fetchCollectionREST("blog_posts", [
        "title",
        "excerpt",
        "date",
        "author",
        "category",
        "image",
        "slug",
        "isFeatured"
    ]);

    // Sort by Date (Newest first)
    postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Pass the safely serialized plain data to the Client Component
    return <BlogClient initialPosts={postsData} />;
}
