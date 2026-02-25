import VideoGalleryContent from './VideoGalleryContent';

export const metadata = {
    title: "JEC: Video Gallery",
    description: "Watch videos of JEC's campus life, events, student activities, faculty lectures, and college tours to get a feel of life at Jaipur Engineering College.",
    keywords: "JEC video gallery, JEC campus tour, engineering college videos Jaipur, JEC events videos",
    openGraph: {
        title: "JEC: Video Gallery",
        description: "Watch campus life, events, and student activities at Jaipur Engineering College.",
        url: "https://www.jeckukas.org.in/campus-life/video-gallery",
        siteName: "Jaipur Engineering College",
        type: "website",
    },
};

export default function Page() {
    return <VideoGalleryContent />;
}
