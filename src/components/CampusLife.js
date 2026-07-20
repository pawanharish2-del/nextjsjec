"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
// Removed firebase imports as fetching is now done on the server
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/CampusLife.css'; // Ensure this file exists!

function CampusLife({ initialGallery = [] }) {
    // FALLBACK DATA: Shows images if Firebase is empty (Matches your screenshot)
    const fallbackGallery = [
        { id: 1, imageUrl: "https://picsum.photos/800/600?random=1", alt: "Library", linkedAlbumId: "" },
        { id: 2, imageUrl: "https://picsum.photos/800/600?random=2", alt: "Hostel Life", linkedAlbumId: "" },
        { id: 3, imageUrl: "https://picsum.photos/800/600?random=3", alt: "Sports", linkedAlbumId: "" },
        { id: 4, imageUrl: "https://picsum.photos/800/600?random=4", alt: "Campus View", linkedAlbumId: "" }
    ];

    const [galleryItems, setGalleryItems] = useState(initialGallery.length > 0 ? initialGallery : fallbackGallery);
    const [loading, setLoading] = useState(false); // Instantly loaded via SSR
    const router = useRouter(); 

    // No client-side fetching needed

    const handleCardClick = (item) => {
        const basePath = '/campus-life/image-gallery'; 
        if (item.linkedAlbumId) {
            router.push(`${basePath}?albumId=${item.linkedAlbumId}`);
        } else {
            router.push(basePath);
        }
    };

    return (
        <section className="campus-life">
            <div className="campus-life-content">
                
                <div className="header-group">
                    <h2 className="campus-life-title">Campus Life at JEC</h2>
                    <p className="campus-life-desc">
                        Experience the vibrant life at JEC, from our cozy hostels and hygienic mess to electrifying fests and academic infrastructure.
                    </p>
                </div>

                {loading ? (
                    <div className="loader-container"><p>Loading Vibrant Gallery...</p></div>
                ) : (
                    <>
                        <div className="campus-gallery">
                            {galleryItems.map((item, index) => (
                                <div key={item.id} className={`gallery-card ${index === 0 || index === 3 ? 'card-wide' : ''}`} onClick={() => handleCardClick(item)}>
                                    <div className="image-wrapper">
                                        <Image src={item.imageUrl} alt={item.alt || "Campus Life"} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw" />
                                        <div className="gallery-overlay">
                                            <div className="overlay-content">
                                                <span className="item-category">Gallery</span>
                                                <h3>{item.alt || "JEC Life"}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* VIEW MORE BUTTON */}
                        <Link href="/campus-life/image-gallery" className="view-more-btn">
                            View More
                        </Link>
                    </>
                )}
            </div>
        </section>
    );
}

export default CampusLife;