import DepartmentContent from './DepartmentClient.js';
import { db } from '@/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export async function generateMetadata({ params }) {
    const slug = (await params).slug || '';

    // Fallback: auto-generate name from slug
    const deptName = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    // Fetch custom SEO fields from Firestore (set via admin panel)
    let dept = null;
    try {
        const q = query(collection(db, "departments"), where("slug", "==", slug));
        const snap = await getDocs(q);
        if (!snap.empty) dept = snap.docs[0].data();
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