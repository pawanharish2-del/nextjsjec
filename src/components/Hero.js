"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Removed firebase imports to improve PageSpeed and eliminate client-side fetching
import '@/styles/HeroSlider.css'; // Importing the CSS file

export default function Hero({ initialBanners = [] }) {
    // 1. Define the hardcoded banner outside so we can easily use it
    const hardcodedBanner = {
        imageUrl: "/images/jec-banner-home.png",
        heading: "Admissions Open 2026",
        // subheading: "Empowering young minds through innovation.",
        altText: "JEC Main Campus"
    };

    // 2. Set the initial state to load this banner instantly
    const [banners, setBanners] = useState(initialBanners.length > 0 ? initialBanners : [hardcodedBanner]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // No client-side fetching needed

    useEffect(() => {
        if (banners.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, banners.length]);

    return (
        <section className="hero-slider">
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
                    // FIX: Remove background-image for the FIRST slide to fix LCP.
                    style={{ 
                        '--bg-desktop': index === 0 ? 'none' : `url('${banner.imageUrl}')`,
                        '--bg-mobile': index === 0 ? 'none' : `url('${banner.mobileImageUrl || banner.imageUrl}')` 
                    }}
                >
                    {/* OPTIMIZATION: LCP Image element for the FIRST banner to load immediately using Next.js Image for compression and preloading. */}
                    {index === 0 && (
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                            <Image
                                src={banner.imageUrl}
                                alt={banner.altText || banner.heading || "JEC Banner"}
                                fill
                                priority
                                style={{ objectFit: 'cover' }}
                                sizes="100vw"
                            />
                        </div>
                    )}

                    {banner.showOverlay !== true && (
                        <Link 
                            href="/admission-enquiry" 
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 10,
                                cursor: 'pointer'
                            }}
                        />
                    )}

                    {banner.showOverlay === true && (
                        <>
                            <div className="hero-overlay"></div>
                            <div className="hero-content">
                                <h1>{banner.heading}</h1>
                                <div className="hero-underline"></div>
                                {(banner.subheading || banner.description) && (
                                    <p>{banner.subheading || banner.description}</p>
                                )}
                                <Link href="https://admission.jeckukas.org.in/" className="apply-btn" target="_blank">Apply for Admission</Link>
                            </div>
                        </>
                    )}
                </div>
            ))}

            {/* Navigation Arrows */}
            {banners.length > 1 && (
                <>
                    <button className="slider-arrow prev" onClick={() => setCurrentIndex((currentIndex - 1 + banners.length) % banners.length)}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="slider-arrow next" onClick={() => setCurrentIndex((currentIndex + 1) % banners.length)}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </>
            )}
        </section>
    );
}