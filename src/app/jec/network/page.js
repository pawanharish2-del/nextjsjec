import FacultyContent from './FacultyContent';
import { db } from '@/firebase';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
export const metadata = {
    title: "JAIPUR ENGINEERING COLLEGE | Human-Network",
    description: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
    keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
    openGraph: {
        title: "JAIPUR ENGINEERING COLLEGE | Human-Network",
        description: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
        url: "https://www.jeckukas.org.in/jec/network",
        siteName: "Jaipur Engineering College",
        type: "website",
    },
    alternates: {
        canonical: "https://www.jeckukas.org.in/jec/network",
    },
};

export default async function Page() {
    let initialFaculty = [];
    try {
        const facultyRef = collection(db, "faculty_members");
        const q = query(facultyRef, orderBy("order"));
        const querySnapshot = await getDocs(q);

        initialFaculty = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching faculty on server:", error);
    }

    return <FacultyContent initialFaculty={initialFaculty} />;
}
