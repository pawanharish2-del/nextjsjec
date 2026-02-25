// "use client";
import '@/styles/DocumentsRequired.css';
import React from 'react';
import LogoCarousel from '@/components/LogoCarousel';


export const metadata = {
    title: "Documents Required",
    description: "Documents Required",
    keywords: "Documents Required",
};

function DocumentsRequired() {
    return (
        // FIX: Added style={{ paddingBottom: 0 }} to remove gap before footer
        <div className="docs-page-container" style={{ paddingBottom: '0' }}>

            {/* Updated Hero Section with Image */}
            <section className="docs-hero-section">
                {/* Background Image */}
                <img src="/images/document-required.jpeg" alt="Campus Building" className="doc-hero-bg-img" />

                {/* Content Wrapper (Overlay) */}
                <div className="doc-hero-overlay">
                    <div className="docs-container-layout">
                        <div className="docs-hero-content">
                            <h1>Documents Required for Admission</h1>
                            <p>Essential checklist for B.Tech and M.Tech reporting candidates for Session 2026-27.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Wrapper */}
            <div className="docs-container-layout docs-content-wrapper">

                {/* Notice/Instruction Box */}
                <div className="docs-notice-box">
                    <div className="notice-icon">
                        <i className="fas fa-exclamation-circle"></i>
                    </div>
                    <div className="notice-text">
                        <strong>Instructions:</strong> Candidates reporting for admission are required to fill up the admission form available in the college. Please bring the <strong>Original copies</strong> for verification along with <strong>self-attested photocopies in Duplicate</strong> (2 Sets).
                    </div>
                </div>

                {/* B.Tech Section */}
                <section className="docs-card">
                    <div className="docs-card-header">
                        <div className="header-icon">
                            <i className="fas fa-user-graduate"></i>
                        </div>
                        <div className="header-title">
                            <h2>B.Tech (1st Year & 2nd Year)</h2>
                            <span className="docs-session-badge">Session: 2025-26</span>
                        </div>
                    </div>

                    <div className="docs-table-container">
                        <table className="docs-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '8%' }}>Sr. No.</th>
                                    <th style={{ width: '52%' }}>Name of Document</th>
                                    <th style={{ width: '20%' }}>Set No. 1</th>
                                    <th style={{ width: '20%' }}>Set No. 2</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>10+2 / 12th Mark sheet</td><td className="badge-original">Original</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>2</td><td>10th Certificate & Mark sheet</td><td className="badge-original">Original</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>3</td><td>Aadhaar Card</td><td className="badge-copy">Photocopy</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>4</td><td>Transfer Certificate (TC)</td><td className="badge-original">Original</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>5</td><td>Migration Certificate</td><td className="badge-original">Original</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>6</td><td>Affidavit for Gap Period (if applicable)</td><td className="badge-original">Original</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>7</td><td>Caste Certificate (OBC/SC/ST only)</td><td className="badge-copy">Photocopy</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>8</td><td>Character Certificate</td><td className="badge-original">Original</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>9</td><td>Medical Certificate (REAP Format)</td><td className="badge-original">Original</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>10</td><td>Domicile Certificate</td><td className="badge-copy">Photocopy</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>11</td><td>REAP Allotment Letter</td><td className="badge-original">Original</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>12</td><td>JEE (Mains) Score Card</td><td className="badge-copy">Photocopy</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>13</td><td>Passport size photographs</td><td colSpan="2" className="text-center font-bold">5 Nos. (Color)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Sub-section: TFWS */}
                    <div className="docs-subsection">
                        <div className="subsection-title">
                            <span className="dot"></span>
                            <h3>Additional for Fee Waiver Candidates (TFWS)</h3>
                        </div>
                        <div className="docs-table-container">
                            <table className="docs-table">
                                <tbody>
                                    <tr>
                                        <td style={{ width: '60%' }}>Income certificate of Parent</td>
                                        <td style={{ width: '20%' }} className="badge-original">Original</td>
                                        <td style={{ width: '20%' }} className="badge-copy">Photocopy</td>
                                    </tr>
                                    <tr>
                                        <td>Affidavit on Rs. 10/- stamp paper</td>
                                        <td className="badge-original">Original</td>
                                        <td className="text-muted">-</td>
                                    </tr>
                                    <tr>
                                        <td>REAP Allotment Letter</td>
                                        <td className="badge-original">Original</td>
                                        <td className="text-muted">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Sub-section: Lateral Entry */}
                    <div className="docs-subsection">
                        <div className="subsection-title">
                            <span className="dot"></span>
                            <h3>Additional for Lateral Entry (2nd Year) Candidates</h3>
                        </div>
                        <div className="docs-table-container">
                            <table className="docs-table">
                                <tbody>
                                    <tr>
                                        <td style={{ width: '60%' }}>Graduation / Diploma Mark sheets</td>
                                        <td style={{ width: '20%' }} className="badge-original">Original</td>
                                        <td style={{ width: '20%' }} className="badge-copy">Photocopy</td>
                                    </tr>
                                    <tr>
                                        <td>Migration (Graduation/ Diploma)</td>
                                        <td className="badge-original">Original</td>
                                        <td className="badge-copy">Photocopy</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* M.Tech Section */}
                <section className="docs-card mtech-card">
                    <div className="docs-card-header">
                        <div className="header-icon">
                            <i className="fas fa-award"></i>
                        </div>
                        <div className="header-title">
                            <h2>M.Tech (1st Year)</h2>
                            <span className="docs-session-badge badge-blue">Session: 2025-26</span>
                        </div>
                    </div>

                    <div className="docs-table-container">
                        <table className="docs-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '8%' }}>Sr. No.</th>
                                    <th style={{ width: '52%' }}>Name of Document</th>
                                    <th style={{ width: '20%' }}>Set No. 1</th>
                                    <th style={{ width: '20%' }}>Set No. 2</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>10+2 / 12th Mark sheet</td><td className="badge-original">Original</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>2</td><td>10th Certificate & Mark sheet</td><td className="badge-original">Original</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>3</td><td>B.Tech / B.E. Consolidated Mark sheet</td><td className="badge-original">Original</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>4</td><td>Aadhaar Card</td><td className="badge-copy">Photocopy</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>5</td><td>Migration Certificate</td><td className="badge-original">Original</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>6</td><td>GATE Score Card (If applicable)</td><td className="badge-copy">Photocopy</td><td className="badge-copy">Photocopy</td></tr>
                                <tr><td>7</td><td>Passport size photographs</td><td colSpan="2" className="text-center font-bold">4 Nos. (Color)</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Counselor / Contact Section */}
                <section className="docs-contact-section">
                    <div className="contact-content">
                        <h2>Speak, Discuss & Meet Your Counselor!</h2>
                        <p>Just ask! Get answers! Don't miss out on your lifetime opportunity. Your admission counselors are ready to assist you in your admission process and enable you to complete formalities with ease.</p>

                        <div className="contact-actions">
                            <a href="tel:+918875071333" className="contact-pill">
                                <i className="fas fa-phone-alt"></i>
                                <span>+91-8875071333</span>
                            </a>
                            <a href="mailto:admission@jeckukas.org.in" className="contact-pill">
                                <i className="fas fa-envelope"></i>
                                <span>admission@jeckukas.org.in</span>
                            </a>
                        </div>
                    </div>
                </section>

            </div>

            {/* LogoCarousel is now the last child. 
         The parent paddingBottom: 0 ensures it sits flush with the footer.
      */}
            <LogoCarousel />
        </div>
    );
}

export default DocumentsRequired;