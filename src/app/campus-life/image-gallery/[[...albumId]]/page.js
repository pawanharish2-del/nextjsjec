import GalleryContent from './GalleryContent';
import { fetchCollectionREST } from '@/lib/firestoreRest';

export const metadata = {
    title: "JEC: Photo Gallery",
    description: "Browse through JEC's photo gallery — classrooms, labs, library, auditorium, sports grounds, hostels, and campus events showcasing vibrant college life.",
    keywords: "JEC photo gallery, JEC campus photos, engineering college gallery Jaipur, JEC infrastructure images",
    openGraph: {
        title: "JEC: Photo Gallery",
        description: "Explore the vibrant campus life of JEC through our photo galleries.",
        url: "https://www.jeckukas.org.in/campus-life/image-gallery",
        siteName: "Jaipur Engineering College",
        type: "website",
    },
    alternates: {
        canonical: "https://www.jeckukas.org.in/campus-life/image-gallery",
    },
};

export const revalidate = 60; // Refresh data periodically

export default async function Page() {
    let albums = await fetchCollectionREST("albums");
    
    // Sort logic if needed, currently original just fetched them as is. Let's pass them as is.
    return <GalleryContent initialAlbums={albums} />;
}