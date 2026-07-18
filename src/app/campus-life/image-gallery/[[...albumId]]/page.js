import GalleryContent from './GalleryContent';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
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

export default async function Page() {
    let initialAlbums = [];
    try {
        const querySnapshot = await getDocs(collection(db, "albums"));
        initialAlbums = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching albums on server:", error);
    }

    return <GalleryContent initialAlbums={initialAlbums} />;
}