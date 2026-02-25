import GalleryContent from './GalleryContent';

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
};

export default function Page() {
    return <GalleryContent />;
}