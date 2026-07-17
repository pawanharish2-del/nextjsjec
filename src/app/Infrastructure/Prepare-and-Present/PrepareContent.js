"use client";
import React from 'react';
import '@/styles/PreparePresent.css';
import LogoCarousel from '@/components/LogoCarousel';


// export const metadata = {
//   title: "Library: Top Engineering College with Library in Jaipur | JEC Kukas",
//   description: "Jaipur Engineering College is best with its Library. The vast reservoir of knowledge at JEC Library is a source of constant value addition for the knowledge seekers.",
//   keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
// };

function PrepareAndPresent() {
    return (
        <div className="prepare-page">

            {/* Hero Section */}
            <header className="prepare-hero">
                <h1>Prepare & Present</h1>
                <p>The Knowledge Reservoir & The Stage of Expression</p>
            </header>

            {/* Stats Floating Container */}
            <div className="prepare-stats-container">
                <div className="prepare-stats-grid">
                    <div className="prepare-stat-card">
                        <div className="prepare-stat-value">1 lac+</div>
                        <div className="prepare-stat-label">Book Volumes</div>
                    </div>
                    <div className="prepare-stat-card">
                        <div className="prepare-stat-value">6000+</div>
                        <div className="prepare-stat-label">Book Titles</div>
                    </div>
                    <div className="prepare-stat-card">
                        <div className="prepare-stat-value">1,500+</div>
                        <div className="prepare-stat-label">E-Books</div>
                    </div>
                    <div className="prepare-stat-card">
                        <div className="prepare-stat-value">1000+</div>
                        <div className="prepare-stat-label">Computers</div>
                    </div>
                    <div className="prepare-stat-card">
                        <div className="prepare-stat-value">1,000+</div>
                        <div className="prepare-stat-label">Auditorium Seats</div>
                    </div>
                </div>
            </div>

            <div className="prepare-container">

                <div className="prepare-quote-banner">
                    “A library is not a luxury but one of the necessities of life.”
                </div>

                <div className="prepare-section-header">
                    <span>Prepare</span>
                    <h2>The Knowledge Reservoir</h2>
                    <p>JEC Library is a source of constant value addition for knowledge seekers.</p>
                </div>

                {/* Library Split Section */}
                <div className="prepare-section-split">
                    <div className="prepare-text-block">
                        <h3>A Wealth of Resources</h3>
                        <p>This quiet and well-furnished space is the preferred destination for the faculty and students alike. JEC library has a rich collection of books and journals that serve as the mental stimuli and offers the latest study material on technological upgradations.</p>

                        <p style={{ marginBottom: '1rem', fontWeight: '600', color: 'var(--prepare-primary)' }}>The Collection Includes:</p>
                        <ul className="prepare-feature-list">
                            <li>More than <strong>6000 titles</strong> and <strong>1 lac + books</strong> on Engineering, Science, Management and Humanities.</li>
                            <li>Subscription of online journals namely <strong>ASTM, J-GATE, ASME, IEEE, Springer, WILEY, McGraw Hill and Elsevier</strong>.</li>
                            <li>A wide collection of 65 International, 101 National print Journals, CD's, back-volumes, and e-books.</li>
                            <li>Text books and study material for students of all semesters under <strong>Book Bank scheme</strong>.</li>
                            <li>Library access to students after college hours.</li>
                        </ul>
                    </div>
                    <div className="prepare-img-block">
                        <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2Fbanner-06a7d03e-9f44-42f7-ab94-da203a539e24?alt=media&token=ecb13731-15f0-46f7-9e79-df6f5147e0b7" alt="JEC Library" />
                    </div>
                </div>

                <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--prepare-text-main)', fontFamily: 'var(--prepare-font-head)' }}>Main Objectives of the JEC Library</h3>

                <div className="prepare-obj-grid">
                    <div className="prepare-obj-card"><i className="fas fa-bullseye"></i><p>To support the Institute in imparting quality education in the field of engineering & technology, Humanities & Social Science, Management and other allied subjects.</p></div>
                    <div className="prepare-obj-card"><i className="fas fa-wifi"></i><p>To provide latest research information, electronically to various users community.</p></div>
                    <div className="prepare-obj-card"><i className="fas fa-tools"></i><p>To provide quality service to users, disseminate technical knowledge and offer modern tools for access of information.</p></div>
                    <div className="prepare-obj-card"><i className="fas fa-handshake"></i><p>Bring about cooperative working among the libraries & information centre in North West India through sharing of resources.</p></div>
                    <div className="prepare-obj-card"><i className="fas fa-link"></i><p>To develop inter-institute links within the country to facilitate effective exchange of information resources.</p></div>
                    <div className="prepare-obj-card"><i className="fas fa-network-wired"></i><p>To form a library consortia for libraries & information centre in North West India.</p></div>
                    <div className="prepare-obj-card"><i className="fas fa-globe"></i><p>To develop a digital library that collects information across the globe through internet for effective dissemination.</p></div>
                    <div className="prepare-obj-card"><i className="fas fa-compress-arrows-alt"></i><p>To integrate with other digital libraries in India and abroad to minimize the recurring cost of journals.</p></div>
                    <div className="prepare-obj-card"><i className="fas fa-chalkboard-teacher"></i><p>Organize conference, lectures, workshops and seminars in the field of interest.</p></div>
                </div>

                <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--prepare-text-main)', fontFamily: 'var(--prepare-font-head)' }}>Library Sections</h3>
                <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--prepare-text-muted)' }}>The Library has following sections for smooth functioning:</p>

                <div className="prepare-service-grid">
                    <div className="prepare-service-card">
                        <div className="prepare-svc-icon"><i className="fas fa-exchange-alt"></i></div>
                        <div className="prepare-svc-title">Circulation Section</div>
                        <div className="prepare-svc-desc">Located on the 4th Floor. The timings of Check-out and check-in of books is from 9.30 AM to 3.00 PM on weekdays.</div>
                    </div>
                    <div className="prepare-service-card">
                        <div className="prepare-svc-icon"><i className="fas fa-book"></i></div>
                        <div className="prepare-svc-title">Book Bank Section</div>
                        <div className="prepare-svc-desc">Books are issued to students for the whole semester. The timings of issue and return is from 9.30 AM to 5.00 PM on weekdays.</div>
                    </div>
                    <div className="prepare-service-card">
                        <div className="prepare-svc-icon"><i className="fas fa-search"></i></div>
                        <div className="prepare-svc-title">Reference & Advisory</div>
                        <div className="prepare-svc-desc">The Reference Desk is available in the Library for Reference and Readers' Advisory Service for all.</div>
                    </div>
                    <div className="prepare-service-card">
                        <div className="prepare-svc-icon"><i className="fas fa-dolly"></i></div>
                        <div className="prepare-svc-title">Acquisition & Technical</div>
                        <div className="prepare-svc-desc">Acquires and prepares books selected by faculty. Materials are technically processed and made available on the stacks.</div>
                    </div>
                    <div className="prepare-service-card">
                        <div className="prepare-svc-icon"><i className="fas fa-newspaper"></i></div>
                        <div className="prepare-svc-title">Periodical Section</div>
                        <div className="prepare-svc-desc">Provides current information and subscribes to journals, magazines and newspapers.</div>
                    </div>
                    <div className="prepare-service-card">
                        <div className="prepare-svc-icon"><i className="fas fa-server"></i></div>
                        <div className="prepare-svc-title">Computer Section</div>
                        <div className="prepare-svc-desc">Important servers for Koha, Digital Library, E-Learning, BIS, J-Gate. Manages the entire Computer System of the Library.</div>
                    </div>
                </div>

                {/* Auditorium Section */}
                {/* updated Auditorium Section */}
                <div className="prepare-auditorium-section">
                    <div className="prepare-audi-content-wrapper">
                        <div className="prepare-audi-content">
                            <span style={{ color: 'var(--prepare-primary)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>Present</span>
                            <h2>The Grand Auditorium</h2>
                            <p>Students must get to interact with the outer world. JEC houses a spacious auditorium with good seating and air conditioning. The ideal acoustic environment in JEC auditorium is one where the visual and auditory experiences are captivating, intimate, and efficient.</p>
                            <p>As such our auditorium has witnessed a large number of International and National Conferences, Cultural events and Technical Workshops hosted by Jaipur Engineering College.</p>
                            <p>There are seminar halls for each department as well. Departments use them for Guest Lectures, Inter-Department Events, and Presentations etc. to take students beyond curriculum and keep the spirit of learning alive.</p>

                            <div className="prepare-audi-features">
                                <div className="prepare-af-item">
                                    <i className="fas fa-chair"></i>
                                    <span>1000+ Seater</span>
                                </div>
                                <div className="prepare-af-item">
                                    <i className="fas fa-snowflake"></i>
                                    <span>Air Conditioned</span>
                                </div>
                                <div className="prepare-af-item">
                                    <i className="fas fa-microphone-alt"></i>
                                    <span>Advanced Acoustics</span>
                                </div>
                                <div className="prepare-af-item">
                                    <i className="fas fa-video"></i>
                                    <span>Conference Ready</span>
                                </div>
                            </div>
                        </div>

                        {/* NEW: Image Frame */}
                        <div className="prepare-audi-image">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/Untitled%20design.png?alt=media&token=e73a0858-28ce-476c-9a8f-a7c8b21054cd" alt="JEC Auditorium" />
                        </div>
                    </div>
                </div>

            </div>

            <LogoCarousel />
        </div>
    );
}

export default PrepareAndPresent;