"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Next.js hook for URL params
import { db } from '@/firebase'; // Updated alias
import { collection, query, where, getDocs } from 'firebase/firestore';
import Link from 'next/link'; // Next.js Link
import LogoCarousel from '@/components/LogoCarousel'; // Assuming this component exists
import '@/styles/Department.css'; // Import the CSS file directly

function Department() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const params = useParams(); // Get slug from URL automatically

    useEffect(() => {
        const fetchDepartmentData = async () => {
            setLoading(true);
            try {
                // Next.js handles the slug extraction for us via params.slug
                const urlSlug = decodeURIComponent(params.slug);

                const q = query(collection(db, "departments"), where("slug", "==", urlSlug));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    setData(querySnapshot.docs[0].data());
                } else {
                    setData(null);
                }
            } catch (error) {
                console.error("Error fetching department:", error);
            } finally {
                setLoading(false);
            }
        };

        if (params.slug) {
            fetchDepartmentData();
        }
    }, [params.slug]);

    if (loading) return <div style={{ padding: "100px", textAlign: "center" }}>Loading...</div>;

    if (!data) return (
        <div style={{ padding: "100px", textAlign: "center" }}>
            <h2>Department Not Found</h2>
            <p>Please check the URL or contact the administrator.</p>
        </div>
    );

    return (
        <div className="dept-page-wrapper">
            {/* Note: In Next.js App Router, Head is handled via metadata, 
                but we keep the logic clean here. The content will render normally. */}
            
            {/* 1. HERO SECTION */}
            <header className="dept-hero" style={{ backgroundImage: `url(${data.bannerImage || '/images/hero.jpg'})` }}>
                <div className="dept-hero-content">
                    <h1 className="dept-animated-section">{data.title || data.name}</h1>
                    <p className="dept-animated-section" style={{ animationDelay: '0.1s' }}>
                        {data.subtitle}
                    </p>
                    <div className="badge dept-animated-section" style={{ animationDelay: '0.2s' }}>Approved by AICTE, New Delhi</div>
                </div>
            </header>

            {/* 2. MAIN FLEXIBLE CONTENT */}
            <div className="dept-container">
                <div className="dept-content-wrapper">
                    <div
                        className="dynamic-content"
                        dangerouslySetInnerHTML={{ __html: data.content || data.about || "<p>Content coming soon...</p>" }}
                    />
                </div>

                {/* 3. HOD SECTION (Displayed only if HOD Name exists) */}
                {data.hodName && (
                    <div className="dept-hod-box dept-animated-section">
                        <div className="hod-image-wrapper">
                            <img src={data.hodImage || "https://via.placeholder.com/150"} alt={data.hodName} />
                        </div>
                        <div className="hod-content">
                            <h3 className="hod-title">Message from HOD</h3>
                            <h4 className="hod-name">{data.hodName}</h4>
                            <p className="hod-message">
                                <i className="fas fa-quote-left" style={{ color: 'var(--jec-gold)', marginRight: '10px' }}></i>
                                {data.hodMessage}
                            </p>
                        </div>
                    </div>
                )}

                {/* 4. ELIGIBILITY & APPLY SECTION */}
                {data.eligibility && (
                    <div className="dept-eligibility-box dept-animated-section">
                        <div className="eligibility-header">
                            <h3><i className="fas fa-graduation-cap"></i> Eligibility & How to Apply</h3>
                        </div>
                        <div className="eligibility-body">
                            <div
                                className="eligibility-content"
                                dangerouslySetInnerHTML={{ __html: data.eligibility }}
                            />

                            <div className="eligibility-action">
                                <Link href="/admission-enquiry" className="dept-apply-btn">
                                    Apply Now <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Logo Carousel (Added as requested) */}
            <LogoCarousel />
        </div>
    );
}

export default Department;
