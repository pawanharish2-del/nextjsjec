import HomeContent from './HomeContent';
import { fetchCollectionREST } from '@/lib/firestoreRest';
export const metadata = {
    title: "JAIPUR ENGINEERING COLLEGE | TOP ENGINEERING COLLEGE IN JAIPUR ( JEC ) with Best Placements",
    description: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
    keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality",
    verification: {
    google: 'HR5aeJjG4TVkdSOm6_kKAInVVo0lwRDiueS22GYH3wU', 
  },
    alternates: {
        canonical: "https://www.jeckukas.org.in/",
    },
    openGraph: {
        title: "JAIPUR ENGINEERING COLLEGE | TOP ENGINEERING COLLEGE IN JAIPUR ( JEC ) with Best Placements",
        description: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
        url: "https://www.jeckukas.org.in",
        siteName: "Jaipur Engineering College",
        type: "website",
    },
};

export const revalidate = 60; // Refresh data periodically

export default async function Page() {
    // Fetch all homepage data concurrently in the Server Component
    const [banners, team, videoTestimonials, campusGallery] = await Promise.all([
        fetchCollectionREST("home_banners"),
        fetchCollectionREST("faculty_home"),
        fetchCollectionREST("video_testimonials"),
        fetchCollectionREST("campus_gallery")
    ]);

    // Sort banners by order
    banners.sort((a, b) => (a.order !== undefined ? a.order : 999) - (b.order !== undefined ? b.order : 999));
    
    // Sort campus gallery by order
    campusGallery.sort((a, b) => (a.order !== undefined ? a.order : 999) - (b.order !== undefined ? b.order : 999));

    // Sort video testimonials by order
    videoTestimonials.sort((a, b) => (a.order !== undefined ? a.order : 999) - (b.order !== undefined ? b.order : 999));

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "url": "https://www.jeckukas.org.in/",
                        "name": "Jaipur Engineering College",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://www.jeckukas.org.in/search?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    })
                }}
            />
            <HomeContent 
                initialBanners={banners}
                initialTeam={team}
                initialVideoTestimonials={videoTestimonials}
                initialCampusGallery={campusGallery}
            />
        </>
    );
}
