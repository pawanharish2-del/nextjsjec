// "use client";
import React from 'react';
import '@/styles/AdmissionProcedure.css';
import LogoCarousel from '@/components/LogoCarousel'; // 1. IMPORT ADDED



export const metadata = {
    title: "Jaipur Engineering College Admission 2025 Procedure",
    description: "Know how to take admission in Jaipur Engineering College (JEC Kukas), the best engineering college in jaipur.",
    keywords: "Best engineering colleges in Jaipur, jec kukas, jec jaipur, b.tech admission, jaipur top engineering colleges",
};

export default function AdmissionProcedure() {
    return (
        <div className="ap-page">

            {/* Hero Section */}
            <section className="ap-hero">
                <div className="max-width-container">
                    <h1>Admission Procedure</h1>
                    <p>Join a dynamic community of learners. We combine rigorous academics with a learning-by-doing approach.</p>
                    <a href="https://admission.jeckukas.org.in/" target="_blank" rel="noopener noreferrer" className="ap-hero-btn">Apply Online</a>
                </div>
            </section>

            {/* Stats Banner */}
            <div className="max-width-container">
                <div className="ap-stats-bar">
                    <div className="ap-stat-item">
                        <h3>AICTE Approved</h3>
                        <p>Recognized Courses</p>
                    </div>
                    <div className="ap-stat-item">
                        <h3>Experienced Faculty</h3>
                        <p>Industry Experts</p>
                    </div>
                    <div className="ap-stat-item">
                        <h3>Value Addition</h3>
                        <p>Skill Courses</p>
                    </div>
                    <div className="ap-stat-item">
                        <h3>1019</h3>
                        <p>REAP Code</p>
                    </div>
                </div>
            </div>

            {/* Intro Section */}
            <section className="ap-intro-section">
                <div className="max-width-container">
                    <h2 className="ap-section-title">Let's Get Started!</h2>
                    <div className="ap-intro-text">
                        <p>JEC believes the best education occurs when students are self-motivated and engaged participants. Remember to check admission deadlines and document requirements as early as possible.</p>
                        <p style={{ marginTop: '15px' }}><strong>You can apply directly at our college campus or Online at <a href="http://www.jeckukas.org.in/apply/" style={{ color: 'var(--ap-logo-blue)' }}>www.jeckukas.org.in/apply/</a></strong></p>
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="ap-criteria-section">
                <div className="max-width-container">
                    <h2 className="ap-section-title" style={{ textAlign: 'center', width: '100%' }}>Eligibility Criteria</h2>
                    <div className="ap-criteria-grid">

                        <div className="ap-criteria-card">
                            <h3>B.Tech: 1st Year</h3>
                            <p><strong>Duration:</strong> 4 Years / 8 Semesters</p>
                            <ul>
                                <li>Based on AICTE norms.</li>
                                <li>Recognizes JEE-Main and REAP scores.</li>
                                <li><strong>Pre-requisite:</strong> Min 45% marks (40% for reserved category) in 10+2 / Class XII.</li>
                                <li><strong>Compulsory Subjects:</strong> Physics & Mathematics.</li>
                                <li><strong>Optional Subject (One of):</strong> Chemistry, Biotechnology, Biology, Computer Science, IT, etc.</li>
                            </ul>
                        </div>

                        <div className="ap-criteria-card">
                            <h3>Lateral Entry (2nd Year)</h3>
                            <p><strong>Duration:</strong> 3 Years / 6 Semesters</p>
                            <ul>
                                <li><strong>Diploma Holders:</strong> Admission via centralized counseling. Min 45% marks (40% reserved) in ANY branch of Engg/Tech.</li>
                                <li><strong>B.Sc. Graduates:</strong> Min 45% marks (40% reserved) and passed 10+2 with Mathematics. (Subject to clearing Engg Graphics/Mechanics).</li>
                                <li><strong>D.Voc Stream:</strong> Passed in same or allied sector.</li>
                            </ul>
                        </div>

                        <div className="ap-criteria-card">
                            <h3>M.Tech Program</h3>
                            <p><strong>Duration:</strong> 2 Years / 4 Semesters</p>
                            <ul>
                                <li>Purely on AICTE and Rajasthan Technical University norms.</li>
                                <li><strong>Qualification:</strong> Pass in B.Tech / BE with 50% marks (45% for reserved category).</li>
                                <li>Relevant discipline as per RTU guidelines.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Process Flow Images */}
            <section className="ap-process-flow-section">
                <div className="max-width-container">
                    <h2 className="ap-section-title">Admission Process Flow</h2>
                    <p>Visual guide to our Online and Offline admission procedures.</p>

                    <div className="ap-flow-grid">
                        <div className="ap-flow-img-container">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/hardcode%20images%2F1465974364_1463202244_DSC_2867.jpg?alt=media&token=01f14a04-3855-4180-8e68-d3ae0c8340f6" alt="Online Admission Process Flowchart" />
                            <div className="ap-flow-caption">Online Admission Process</div>
                        </div>

                        <div className="ap-flow-img-container">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/hardcode%20images%2F1465974385_1463202267_IMG_6993.jpg?alt=media&token=8a7cb908-de3d-4774-86d2-335a7699d1cc" alt="Offline Admission Process Flowchart" />
                            <div className="ap-flow-caption">Offline Admission Process</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documents Section */}
            <section className="ap-docs-section">
                <div className="max-width-container">
                    <h2 className="ap-section-title" style={{ textAlign: 'center', width: '100%' }}>Documents Required at Admission</h2>
                    <div className="ap-docs-list">
                        <div className="ap-doc-badge"><i className="fas fa-file-alt"></i> 10th Marksheet / Certificate (DOB Proof)</div>
                        <div className="ap-doc-badge"><i className="fas fa-file-alt"></i> 12th Marksheet</div>
                        <div className="ap-doc-badge"><i className="fas fa-id-card"></i> Caste Certificate (if applicable)</div>
                        <div className="ap-doc-badge"><i className="fas fa-map-marker-alt"></i> Domicile Certificate / Aadhar Card</div>
                        <div className="ap-doc-badge"><i className="fas fa-envelope-open-text"></i> REAP Allotment Letter</div>
                        <div className="ap-doc-badge"><i className="fas fa-rupee-sign"></i> Family Income Proof (TFWS only)</div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="ap-admissions-contact">
                <div className="max-width-container">
                    <div className="ap-contact-box">
                        <h3>Speak, Discuss & Meet Your Counselor!</h3>
                        <p>Don't miss out on your lifetime opportunity! Our admission counselors are affectionate to assist you in all respects and enable you to complete your admission formalities with ease.</p>

                        <div className="ap-contact-details">
                            <p><i className="fas fa-phone-alt"></i> 8875071333 (30 Lines)</p>
                            <p style={{ marginTop: '10px' }}><i className="fas fa-envelope"></i> <a href="mailto:director@jeckukas.org.in">director@jeckukas.org.in</a></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. LOGO CAROUSEL ADDED HERE */}
            <LogoCarousel />
        </div>
    );
}