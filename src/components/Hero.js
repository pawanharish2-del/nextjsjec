"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase";
import '@/styles/HeroSlider.css'; // Importing the CSS file

export default function Hero() {
    // 1. Define the hardcoded banner outside so we can easily use it
    const hardcodedBanner = {
        imageUrl: "/images/jec-banner-home.png",
        heading: "Jaipur’s best engineering college for your bright future.",
        subheading: "Empowering young minds through innovation.",
        altText: "JEC Main Campus"
    };

    // 2. Set the initial state to load this banner instantly
    const [banners, setBanners] = useState([hardcodedBanner]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const bannersRef = collection(db, "home_banners");
                const q = query(bannersRef, orderBy("order"));
                const querySnapshot = await getDocs(q);
                const bannerList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                
                // 3. COMBINE the hardcoded banner with the Firebase banners
                if (bannerList.length > 1) {
                    setBanners([hardcodedBanner, ...bannerList]);
                }
            } catch (error) { console.error("Error fetching banners:", error); }
        };
        fetchBanners();
    }, []);

    return (
        <section className="hero-slider">
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
                    // FIX: Use backgroundImage so text sits on top (Matches your CSS rules)
                    style={{ backgroundImage: `url(${banner.imageUrl})` }}
                >
                    {/* Removed the <img> tag because it was blocking the text */}

                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1>{banner.heading}</h1>
                        <div className="hero-underline"></div>
                        {banner.subheading && <p>{banner.subheading}</p>}

                        <Link href="https://admission.jeckukas.org.in/" className="apply-btn" target="_blank">Apply for Admission</Link>
                    </div>
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