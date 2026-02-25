import React from 'react';
import '@/styles/About.css';
import LogoCarousel from '@/components/LogoCarousel'; // <--- 1. IMPORT ADDED

// Next.js Metadata
export const metadata = {
  title: "About – Jaipur Engineering College | Best Engineering College",
  description: "Jaipur Engineering College , A best college where people and ideas come together in new ways, Illuminating turnarounds, igniting sparks that fuel new ventures.",
  keywords:"About us, JEC, Jaipur, Engineering, College, Top, Rajasthan, JEC Group of Colleges",

};

export default function About() {
    return (
        <div className="about-page-new">
            
            {/* --- HERO SECTION --- */}
            <section className="hero">
                <div className="hero-content">
                    <h1>About JEC: Engineering <br/> Excellence</h1>
                    <p>Committed to creating the next generation of technologically superior and ethically strong professionals.</p>
                    <div className="hero-underline"></div>
                </div>
            </section>

            {/* --- MILESTONES SECTION --- */}
            <section className="milestones">
                <div className="max-width-container milestone-grid">
                    <div className="milestone-item">
                        <h3>2000</h3>
                        <p>ESTABLISHED YEAR</p>
                    </div>
                    <div className="milestone-item">
                        <h3>94%+</h3>
                        <p>PLACEMENT RATE</p>
                    </div>
                    <div className="milestone-item">
                        <h3>₹1.56 Cr</h3>
                        <p>HIGHEST PACKAGE</p>
                    </div>
                    <div className="milestone-item">
                        <h3>12,000+</h3>
                        <p>GLOBAL ALUMNI</p>
                    </div>
                </div>
            </section>

            {/* --- INTRODUCTION SECTION --- */}
            <section className="introduction" id="who-we-are">
                <div className="max-width-container">
                    <h2>The JEC Experience: Mind, Heart, and Innovation</h2>
                    <div className="intro-content-wrapper">
                        <p>Intellectual rigor, social upliftment, and self-reflection are knitted together in every facet of the JEC Experience. JEC is a leading engineering and technology institute where people and ideas come together in new ways, igniting sparks that fuel new ventures and foster intellectual breakthroughs.</p>
                        <p>Since its inception in 2000, Jaipur Engineering College (JEC) has consistently enabled students to carve a niche for themselves and develop a strong personality. The Institute is committed to advancing knowledge and educating students in various branches of engineering that will best serve the nation and the world in the 21st century.</p>
                        <p>Our community is driven by a shared purpose: to make a better world through education, research, and innovation. Our holistic approach, combined with state-of-the-art infrastructure on the serene outskirts of Jaipur, defines JEC as a unique force for positive transformation.</p>

                        <img
                            src="/images/campus-intro1.jpeg"
                            alt="Panoramic view of Jaipur Engineering College (JEC) campus lush green infrastructure in Kukas, Jaipur"
                            className="intro-image"
                        />
                    </div>
                </div>
            </section>

            {/* --- STRATEGIC PRINCIPLES --- */}
            <section className="strategic-section">
                <div className="max-width-container">
                    <div className="section-header">
                        <h2>Our Driving Principles</h2>
                        <p className="intro-text">
                            Our holistic approach to education and the rigorous spirit of knowledge dissemination defines human life, making JEC a unique force for transformation. Our commitment to social values underlies everything we do as an institution with a rich <span className="highlight-text">Agrasen heritage</span>. We are committed to helping you shape your future.
                        </p>
                    </div>

                    <div className="strategy-grid">
                        {/* CARD 1: VISION */}
                        <div className="strategy-card card-vision">
                            <div className="card-icon-wrapper icon-vision">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3 className="card-title">Our Vision</h3>
                            <p className="card-statement">
                                "To make students technologically superior & ethically strong and build them as professionals, who will become the trend setters in the industry."
                            </p>

                            <ul className="card-list">
                                <li>
                                    <i className="fas fa-star list-icon v-icon"></i>
                                    <div>
                                        <span className="list-header">Global Competence</span>
                                        Cultivating skills that meet international standards for a competitive edge.
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-chart-line list-icon v-icon"></i>
                                    <div>
                                        <span className="list-header">Industry Leadership</span>
                                        Grooming students to be pioneers and leaders, not just followers.
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-shield-alt list-icon v-icon"></i>
                                    <div>
                                        <span className="list-header">Ethical Fortitude</span>
                                        Building strong character and integrity alongside technical capability.
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-leaf list-icon v-icon"></i>
                                    <div>
                                        <span className="list-header">Sustainable Outlook</span>
                                        Encouraging engineering solutions that prioritize a greener future.
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-infinity list-icon v-icon"></i>
                                    <div>
                                        <span className="list-header">Lifelong Learning</span>
                                        Instilling a passion for continuous knowledge and adaptation.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* CARD 2: MISSION */}
                        <div className="strategy-card card-mission">
                            <div className="card-icon-wrapper icon-mission">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h3 className="card-title">Our Mission</h3>
                            <p className="card-statement plain-statement">
                                To be amongst the top engineering institutes and to establish itself as a Deemed University with a focus on excellence.
                            </p>
                            <ul className="card-list">
                                <li>
                                    <i className="fas fa-book-open list-icon mis-icon"></i>
                                    <div>
                                        <span className="list-header">Core Knowledge</span>
                                        Provide conceptual, basic & market-driven knowledge of Core Engineering.
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-rocket list-icon mis-icon"></i>
                                    <div>
                                        <span className="list-header">Innovation Hub</span>
                                        Extend academic & social environment for excellence in creative innovation.
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-handshake list-icon mis-icon"></i>
                                    <div>
                                        <span className="list-header">Industry Interaction</span>
                                        Platform for Industry Institute Interaction (IIC) & Entrepreneurship.
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-microscope list-icon mis-icon"></i>
                                    <div>
                                        <span className="list-header">Research Ecosystem</span>
                                        Eco-system for high-quality research, patents, and technical publication.
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-hands-helping list-icon mis-icon"></i>
                                    <div>
                                        <span className="list-header">Values Integration</span>
                                        Integrate the teaching-learning process with human values & professional ethics.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* CARD 3: CORE VALUES */}
                        <div className="strategy-card card-values">
                            <div className="card-icon-wrapper icon-values">
                                <i className="fas fa-hand-holding-heart"></i>
                            </div>
                            <h3 className="card-title">Core Values</h3>
                            <p className="card-statement plain-statement">
                                Rooted in our Agrasen heritage, our values define our transformation and commitment to society.
                            </p>
                            <ul className="card-list">
                                <li>
                                    <i className="fas fa-gavel list-icon val-icon"></i>
                                    <div>
                                        <span className="list-header">Ethical Integrity</span>
                                        Upholding high professional ethics and transparency in all endeavors.
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-globe-asia list-icon val-icon"></i>
                                    <div>
                                        <span className="list-header">Social Impact</span>
                                        Creating skilled manpower dedicated to a developed and just society.
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-lightbulb list-icon val-icon"></i>
                                    <div>
                                        <span className="list-header">Innovation Spirit</span>
                                        Fostering a culture of research, patents, and continuous improvement.
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-users-cog list-icon val-icon"></i>
                                    <div>
                                        <span className="list-header">Holistic Growth</span>
                                        Developing the mind, heart, and skills for complete personality growth.
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-balance-scale list-icon val-icon"></i>
                                    <div>
                                        <span className="list-header">Rich Heritage</span>
                                        Commitment to rich social values inspired by our founding principles.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ACCREDITATION SECTION --- */}
            <section className="card-section" id="credibility">
                <div className="max-width-container">
                    <h2>Academic Accreditation & Partnerships</h2>
                    <div className="card-grid">
                        <div className="core-card">
                            <i className="fas fa-stamp"></i>
                            <h3>AICTE Approved</h3>
                            <p>The institute is officially approved by the All India Council for Technical Education (AICTE), New Delhi, ensuring compliance with apex body standards and norms.</p>
                        </div>
                        <div className="core-card" style={{ borderTopColor: 'var(--logo-blue)' }}>
                            <i className="fas fa-university"></i>
                            <h3>Affiliated to RTU</h3>
                            <p>Affiliated with the Rajasthan Technical University (RTU), Kota, and actively associated with quality improvement initiatives under the TEQIP III program.</p>
                        </div>
                        <div className="core-card" style={{ borderTopColor: 'var(--logo-red)' }}>
                            <i className="fas fa-code"></i>
                            <h3>IIT Remote Center</h3>
                            <p>JEC is Rajasthan’s <strong>first remote center of IIT, Bombay & IIT, Kharagpur</strong>, and hosts a recognized NPTEL Local Chapter for advanced learning and certifications.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SALIENT FEATURES SECTION --- */}
            <section className="features card-section alt-background" id="features">
                <div className="max-width-container">
                    <h2>Salient Features: The JEC Advantage</h2>
                    <div className="features-list">
                        <div className="feature-item"><p>Well qualified and experienced faculty members.</p></div>
                        <div className="feature-item"><p>High-speed Wi-Fi enabled campus with <strong>110 mbps leased line</strong>.</p></div>
                        <div className="feature-item"><p>Library with <strong>100,000+ books</strong> and access to online journals (IEEE, ASME, J-Gate).</p></div>
                        <div className="feature-item"><p>Separate air-cooled hostels for boys & girls, with attached bathroom.</p></div>
                        <div className="feature-item"><p>Excellent campus placements, including the <strong>highest package in Rajasthan of 1.56 Cr</strong>.</p></div>
                        <div className="feature-item"><p>Rajasthan’s <strong>first nodal centre of NITTTR, Chandigarh</strong>.</p></div>
                        <div className="feature-item"><p>Campus Connect Programmes with MNCs like <strong>Infosys, CAD Desk & Oracle</strong>.</p></div>
                        <div className="feature-item"><p>Strong global alumni network exceeding <strong>12,000+ members</strong>.</p></div>
                    </div>
                </div>
            </section>

            {/* --- 2. AFFILIATION LOGO CAROUSEL ADDED HERE --- */}
            <LogoCarousel />

        </div>
    );
}