// "use client";
import React from 'react';
import '@/styles/REAP.css';
import LogoCarousel from '@/components/LogoCarousel'; // 1. Import Added
import Link from 'next/link';
import ReapFAQ from './ReapFAQ';



export const metadata = {
    title: "REAP 2026: Rajasthan Engineering Admission Process | JEC Kukas (Code 1019)",
    description: "Looking for B.Tech Admissions via REAP Rajasthan 2026? Check the JEC Kukas REAP 2026 schedule, academic eligibility, fee structure, and seat allotment priority here.",
    keywords: "REAP 2026, REAP Rajasthan 2026, REAP counselling 2026, Rajasthan engineering admission process 2026, JEC Kukas REAP code 1019, BTech admission through REAP Rajasthan, REAP 2026 eligibility criteria, direct admission in engineering college Jaipur.",
    alternates: {
        canonical: "https://www.jeckukas.org.in/admission/reap-2026",
    },
};

function Reap2026() {
    return (
        <div className="reap-page">

            {/* Hero Section */}
            <section className="reap-hero">
                <div className="reap-badge">Session 2026-27</div>
                <h1>REAP 2026:Admission Process at JEC Kukas</h1>
                <p>Welcome to the definitive guide for <Link href="/admission/reap-2026" style={{ color: '#2563EB' }}>REAP</Link> 2026 at Jaipur Engineering College (JEC), Kukas.</p>

                <a href="tel:8440044826" className="reap-helpline-btn">
                    <i className="fas fa-phone-alt"></i>
                    <div className="reap-helpline-content">
                        <span className="reap-helpline-text">For REAP Guidance</span>
                        <span className="reap-helpline-number">Call Us: 8440044826</span>
                    </div>
                </a>

            </section>

            {/* Stats Container */}
            <div className="reap-stats-container">
                <div className="reap-stats-grid">
                    <div className="reap-stat-item">
                        <h3>1019</h3>
                        <p>JEC REAP Code</p>
                    </div>
                    <div className="reap-stat-item">
                        <h3>93%+</h3>
                        <p>University Results</p>
                    </div>
                    <div className="reap-stat-item">
                        <h3>13</h3>
                        <p>Courses Offered</p>
                    </div>
                    <div className="reap-stat-item">
                        <h3>08</h3>
                        <p>Departments</p>
                    </div>
                </div>
            </div>

            <div className="reap-container">

                {/* Alert Box */}

                <div className="reap-alert-box">
                    <h4 style={{ color: 'var(--reap-primary)', marginBottom: '0.5rem' }}>General Instructions session 2026-27</h4>
                    <p style={{ color: 'var(--reap-text-main)', fontSize: '0.95rem' }}>
                        Department of Technical Education, Rajasthan has appointed <strong>Centre for Electronic Governance (CEG), Jaipur</strong> to conduct the centralized admission process for the academic session 2026-27. Eligible candidates may apply for admission in B. Tech (I year).
                    </p>
                    <a 
                        href="/documents/Schedule_REAP_2026.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="reap-btn-blue"
                    >
                        REAP 2026 Counseling Schedule <i className="fas fa-download"></i>
                    </a>
                </div>


                {/* Admission Process Section */}
                <div className="reap-section-header">
                    <h2>REAP 2026 Centralized Counseling & Seat Matrix</h2>
                    <div className="reap-section-line"></div>
                </div>

                <div className="reap-card">
                    <h3 style={{ marginBottom: '1rem', color: 'var(--reap-text-main)' }}>1. Centralized Counseling Process</h3>
                    <p style={{ marginBottom: '1rem', color: 'var(--reap-text-main)' }}>The <Link href="/admission/reap-2026" style={{ color: '#2563EB' }}>REAP</Link> 2026 counseling distributes admission seats transparently across three major categories to accommodate both local and out-of-state engineering aspirants:</p>
                    <p style={{ marginBottom: '1rem', color: 'var(--reap-text-muted)' }}>Candidates are required to fill the Application-cum-Registration Form on the <Link href="/admission/reap-2026" style={{ color: '#2563EB' }}>REAP</Link> portal.</p>
                    <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--reap-text-main)' }}>
                        <li><strong>70% Seats:</strong> Candidates having Rajasthan State domicile.</li>
                        <li><strong>15% Seats:</strong> Candidates from Out of Rajasthan.</li>
                        <li><strong>5% Seats:</strong> Tuition Fee Waiver Scheme (TFWS) - Supernumerary.</li>
                        <li><strong>5% Seats:</strong> Kashmiri Migrants (KM) - Supernumerary.</li>
                    </ul>

                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--reap-primary)' }}>Priority for Seat Allotment</h4>
                    <p style={{ marginBottom: '1rem', color: 'var(--reap-text-muted)' }}>Seats during the Rajasthan engineering admission process 2026 are assigned strictly on merit based on the following prioritization levels:</p>
                    <div className="reap-table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Priority</th>
                                    <th>Basis of Admission</th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>1st</strong></td>
                                    <td>Rank in JEE (Mains) 2026</td>
                                    <td>Minimum 20 percentile required</td>
                                </tr>
                                <tr>
                                    <td><strong>2nd</strong></td>
                                    <td>Percentile in Class 12th</td>
                                    <td>Board Exams</td>
                                </tr>
                                <tr>
                                    <td><strong>3rd</strong></td>
                                    <td>Percentage in D. Voc</td>
                                    <td>Engineering & Technology (Approved by Govt)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="reap-card">
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--reap-text-main)' }}>2. Management Quota</h3>
                    <p style={{ color: 'var(--reap-text-muted)' }}>
                        <strong>15% seats</strong> of total intake are filled by candidates from all states of India at the Institute Level. Interested & eligible candidates may visit the institute premises physically for admission.
                    </p>
                </div>

                {/* Academic Qualification Section */}
                <div className="reap-section-header">
                    <h2>REAP Rajasthan 2026 Academic Eligibility Criteria</h2>
                    <div className="reap-section-line"></div>
                </div>

                <div className="reap-card">
                    <p style={{ marginBottom: '1.5rem', color: 'var(--reap-text-muted)' }}>
                        Before registering on the <Link href="/admission/reap-2026" style={{ color: '#2563EB' }}>REAP</Link> official website, candidates must ensure they satisfy the educational baselines outlined below.
                    </p>
                    <p style={{ marginBottom: '0.5rem' }}>
                        <strong>Minimum Marks:</strong> Must have cleared Class-12 (10+2) with a minimum of 45% marks (General category) or 40% marks (Reserved categories of Rajasthan).
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        <strong>Age Limit:</strong> There is no age limit for admission into B.Tech courses via REAP 2026.
                    </p>
                    <div className="reap-table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th width="30%">Branch</th>
                                    <th>Mandatory Subjects</th>
                                    <th>Optional (Any One)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>CE, ME</strong></td>
                                    <td>Physics, Chemistry, Mathematics</td>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <td><strong>CSE, EE, ECE, AI, IT</strong></td>
                                    <td>Physics, Mathematics</td>
                                    <td>
                                        <ul style={{ paddingLeft: '1rem', fontSize: '0.85rem' }}>
                                            <li>Chemistry / Computer Science</li>
                                            <li>Electronics / Info. Tech</li>
                                            <li>Biology / Informatics Practices</li>
                                            <li>Biotechnology / Agriculture</li>
                                            <li>Engineering Graphics / Business Studies</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3" style={{ background: '#F0F9FF', textAlign: 'center', color: 'var(--reap-primary)' }}>
                                        <strong>OR</strong> Passed min. 3 years Diploma examination with at least 45% marks (40% for reserved category).
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--reap-accent)', marginTop: '1rem', fontWeight: '600' }}>
                        * Note: There is no age limit for admission in B.Tech. or B. Arch. Courses.
                    </p>
                </div>

                {/* Reservation Section */}
                <div className="reap-section-header">
                    <h2>Category-Wise Seat Reservation Percentage</h2>
                    <div className="reap-section-line"></div>
                </div>
                <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--reap-text-muted)' }}>
                    JEC Kukas strictly complies with the reservation guidelines of the Government of Rajasthan during <Link href="/admission/reap-2026" style={{ color: '#2563EB' }}>REAP</Link> 2026 counseling:
                </p>
                <div className="reap-res-grid">
                    <div className="reap-res-card">
                        <span className="reap-res-percent">21%</span>
                        <span className="reap-res-label">OBC (NCL)</span>
                    </div>
                    <div className="reap-res-card">
                        <span className="reap-res-percent">16%</span>
                        <span className="reap-res-label">SC Category</span>
                    </div>
                    <div className="reap-res-card">
                        <span className="reap-res-percent">12%</span>
                        <span className="reap-res-label">ST Category</span>
                    </div>
                    <div className="reap-res-card">
                        <span className="reap-res-percent">10%</span>
                        <span className="reap-res-label">EWS</span>
                    </div>
                    <div className="reap-res-card">
                        <span className="reap-res-percent">5%</span>
                        <span className="reap-res-label">MBC (NCL)</span>
                    </div>
                </div>

                {/* Fees & Reporting Section */}
                <div className="reap-section-header">
                    <h2>Fees & Reporting</h2>
                    <div className="reap-section-line"></div>
                </div>

                <div className="reap-card">
                    <h3 style={{ marginBottom: '1rem' }}>Fee Structure (I Semester)</h3>
                    <div className="reap-fee-wrapper">
                        <div className="reap-fee-box">
                            <span className="reap-fee-amount">₹ 67,000</span>
                            <span className="reap-fee-label">Admission Fee</span>
                        </div>
                        <div className="reap-fee-box" style={{ background: '#ECFDF5', borderColor: '#6EE7B7' }}>
                            <span className="reap-fee-amount" style={{ color: '#047857' }}>₹ 50,000</span>
                            <span className="reap-fee-label">Hostel Fee (Optional)</span>
                        </div>
                    </div>

                    <h3 style={{ margin: '2rem 0 1rem 0' }}>Documents Required</h3>
                    <ul className="reap-checklist">
                        <li>Provisional Seat Allotment Letter </li>
                        <li>Aadhar Card / Receipt</li>
                        <li>Class X Mark sheet (DOB Proof)</li>
                        <li>Class XII Science Mark sheet or Diploma</li>
                        <li>Domicile Certificate</li>
                        <li>Category Certificate (SC/ST/OBC/MBC/EWS)</li>
                        <li>Medical Fitness Certificate</li>
                        <li>Income Certificate (For TFWS/EWS Only)</li>
                        <li>PWD / Ex-Servicemen Certificate (if applicable)</li>
                    </ul>
                </div>

                {/* Additional Schemes Section */}
                <div className="reap-section-header">
                    <h2>Special Academic Schemes at JEC</h2>
                    <div className="reap-section-line"></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <div className="reap-card">
                        <h4 style={{ color: 'var(--reap-primary)', marginBottom: '0.5rem' }}><i className="fas fa-exchange-alt"></i> Internal Sliding Option</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--reap-text-muted)' }}>
                            Students who have successfully registered and reported can opt for "Internal Sliding" at the institute level to change their engineering branch based on the vacant seats available. This process is governed strictly by REAP 2026 institutional guidelines.
                        </p>
                    </div>
                    <div className="reap-card">
                        <h4 style={{ color: 'var(--reap-primary)', marginBottom: '0.5rem' }}><i className="fas fa-graduation-cap"></i> Tuition Fee Waiver Scheme (TFWS)</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--reap-text-muted)' }}>
                            The TFWS scheme provides a massive financial relief for meritorious students whose parental income is less than ₹8.00 Lakhs per annum. Allotments for these competitive seats are executed directly through the centralized REAP Rajasthan 2026 portal.
                        </p>
                    </div>
                </div>

                <ReapFAQ />
            </div>

            {/* 2. LogoCarousel Added Here */}
            <LogoCarousel />

        </div>
    );
}

export default Reap2026;