import VirtualTour from '@/components/VirtualTour';

export const metadata = {
    title: "JEC Virtual Tour | Jaipur Engineering College",
    description: "Take a virtual tour of Jaipur Engineering College (JEC) Kukas and explore our campus, labs, library, and other facilities from anywhere.",
    keywords: "JEC virtual tour, campus tour Jaipur Engineering College, JEC infrastructure virtual visit",
    alternates: {
        canonical: "https://www.jeckukas.org.in/virtual-tour",
    },
};

export default function VirtualTourPage() {
    return (
        <main>
            <VirtualTour />
        </main>
    );
}