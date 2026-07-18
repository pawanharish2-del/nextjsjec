"use client";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import Team from "@/components/Team";
import WhyJEC from "@/components/WhyJEC";
import Outcomes from "@/components/Outcomes";
import VideoTestimonials from "@/components/VideoTestimonials";
import CampusLife from "@/components/CampusLife";
import VirtualTour from "@/components/VirtualTour";
import LogoCarousel from "@/components/LogoCarousel";

export default function HomePage({ initialBanners, initialTeam, initialVideoTestimonials, initialCampusGallery }) {
  return (
    <>
      <Hero initialBanners={initialBanners} />
      <Highlights />
      <Stats />
      <Programs />
      <Team initialTeam={initialTeam} />
      <WhyJEC />
      <Outcomes />
      <VideoTestimonials initialTestimonials={initialVideoTestimonials} />
      <CampusLife initialGallery={initialCampusGallery} />
      <VirtualTour />
      <LogoCarousel />
    </>
  );
}