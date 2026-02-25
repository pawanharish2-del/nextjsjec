"use client";
import React from 'react';
import '@/styles/LogoCarousel.css';

function LogoCarousel() {
    const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "12new.png", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "18.jpg"];

    return (
        <section className="logo-carousel-section">
            <div className="carousel-header">
                <h2>Affiliation & Accreditation</h2>
                <div className="carousel-divider"></div>
            </div>
            <div className="slider-container">
                <div className="logo-track">
                    {/* Render original list and a duplicate for infinite scroll effect */}
                    {[...images, ...images].map((img, index) => (
                        <div key={index} className="logo-slide">
                            <img src={`/images/${img}`} alt={`Partner ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LogoCarousel;