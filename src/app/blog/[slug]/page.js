import SinglePostClient from './SinglePostClient';

// 1. THIS FUNCTION RUNS ON THE SERVER FOR GOOGLE SEO
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug ? decodeURIComponent(resolvedParams.slug) : '';

    if (!slug) return { title: 'Article Not Found | JEC' };

    const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return {
        title: `${title} | JEC Blog`,
        description: `Read the latest article about ${title} on the Jaipur Engineering College Blog.`,
        alternates: {
            canonical: `https://www.jeckukas.org.in/blog/${slug}`,
        },
        openGraph: {
            title: `${title} | JEC Blog`,
            description: `Read the latest article about ${title} on the Jaipur Engineering College Blog.`,
            type: "article",
        }
    };
}

// 2. THIS RENDERS THE ACTUAL VISUAL PAGE FOR THE USER
export default function BlogPage() {
    return <SinglePostClient />;
}