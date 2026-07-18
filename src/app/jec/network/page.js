import FacultyContent from './FacultyContent';
import { fetchCollectionREST } from '@/lib/firestoreRest';

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

export const revalidate = 60; // Refresh data periodically

export default async function Page() {
    let faculty = await fetchCollectionREST("faculty_members");
    
    // Default sorting based on 'order' field
    faculty.sort((a, b) => {
        const orderA = a.order !== undefined ? a.order : 999;
        const orderB = b.order !== undefined ? b.order : 999;
        return orderA - orderB;
    });

    return <FacultyContent initialFaculty={faculty} />;
}
