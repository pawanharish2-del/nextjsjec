"use client";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import dynamic from 'next/dynamic';

const Stats = dynamic(() => import("@/components/Stats"));
const Programs = dynamic(() => import("@/components/Programs"));
const Team = dynamic(() => import("@/components/Team"));
const WhyJEC = dynamic(() => import("@/components/WhyJEC"));
const Outcomes = dynamic(() => import("@/components/Outcomes"));
const VideoTestimonials = dynamic(() => import("@/components/VideoTestimonials"));
const CampusLife = dynamic(() => import("@/components/CampusLife"));
const VirtualTour = dynamic(() => import("@/components/VirtualTour"));
const LogoCarousel = dynamic(() => import("@/components/LogoCarousel"));

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