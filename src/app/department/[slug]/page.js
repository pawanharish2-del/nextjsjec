import DepartmentContent from './DepartmentClient.js';
import { fetchCollectionREST } from '@/lib/firestoreRest';

export async function generateMetadata({ params }) {
    const slug = (await params).slug || '';

    // Fallback: auto-generate name from slug
    const deptName = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    // Fetch custom SEO fields from Firestore via REST API (set via admin panel)
    let dept = null;
    try {
        const departments = await fetchCollectionREST("departments");
        dept = departments.find(d => d.slug === slug);
    } catch (e) {
        console.error("generateMetadata fetch error:", e);
    }

    const title = dept?.metaTitle || `${deptName} Department | Jaipur Engineering College`;
    const description = dept?.metaDescription || `Explore the ${deptName} department at Jaipur Engineering College (JEC). Learn about our curriculum, faculty, research, labs, and placement records.`;
    const keywords = dept?.metaKeywords || `${deptName} JEC, ${deptName} engineering Jaipur, ${deptName} college Rajasthan, JEC ${deptName} faculty`;

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `https://www.jeckukas.org.in/department/${slug}`,
        },
        openGraph: {
            title,
            description,
            url: `https://www.jeckukas.org.in/department/${slug}`,
            siteName: "Jaipur Engineering College",
            type: "website",
        },
    };
}

export default function Page() {
    return <DepartmentContent />;
}