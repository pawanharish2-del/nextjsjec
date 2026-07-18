import TestimonialsContent from './TestimonialsContent';
import { db } from '@/firebase';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
export const metadata = {
    title: "Students Testimonials",
    description: "Students Testimonials",
    keywords: "Students Testimonials",
    openGraph: {
        title: "Students Testimonials",
        description: "Students Testimonials",
        url: "https://www.jeckukas.org.in/jec/Students-Testimonials",
        siteName: "Jaipur Engineering College",
        type: "website",
    },
    alternates: {
        canonical: "https://www.jeckukas.org.in/jec/Students-Testimonials",
    },
};

export default async function Page() {
    let initialTestimonials = [];
    try {
        const testimonialsRef = collection(db, "student_testimonials");
        const q = query(testimonialsRef, orderBy("order"));
        const querySnapshot = await getDocs(q);

        initialTestimonials = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching testimonials on server:", error);
    }

    return <TestimonialsContent initialTestimonials={initialTestimonials} />;
}
