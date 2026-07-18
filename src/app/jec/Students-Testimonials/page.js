import TestimonialsContent from './TestimonialsContent';
import { fetchCollectionREST } from '@/lib/firestoreRest';

export const metadata = {
    title: "Students Testimonials | JEC",
    description: "Read inspiring stories and experiences from Jaipur Engineering College students and alumni.",
    keywords: "JEC reviews, JEC student testimonials, Jaipur Engineering College feedback, JEC alumni stories",
    openGraph: {
        title: "Students Testimonials | JEC",
        description: "Read inspiring stories and experiences from JEC students and alumni.",
        url: "https://www.jeckukas.org.in/jec/Students-Testimonials",
        siteName: "Jaipur Engineering College",
        type: "website",
    },
    alternates: {
        canonical: "https://www.jeckukas.org.in/jec/Students-Testimonials",
    },
};

export const revalidate = 60; // Refresh data periodically

export default async function Page() {
    let testimonials = await fetchCollectionREST("student_testimonials");
    
    // Sort by order field
    testimonials.sort((a, b) => {
        const orderA = a.order !== undefined ? a.order : 999;
        const orderB = b.order !== undefined ? b.order : 999;
        return orderA - orderB;
    });

    return <TestimonialsContent initialTestimonials={testimonials} />;
}
