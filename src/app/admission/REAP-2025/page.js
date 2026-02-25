// "use client";
import React from 'react';
import '@/styles/REAP.css'; 
import LogoCarousel from '@/components/LogoCarousel'; // 1. Import Added



export const metadata = {
  title: "Rajasthan Engineering Admission Process (REAP)-2021 | JEC Jaipur",
  description: "Know about Rajasthan Engineering Admission Process (REAP)-2021 with Jaipur Engineering College. Check details of taking admission in B.Tech courses and...",
  keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
};

function Reap2025() {
  return (
    <div className="reap-page">
      
      {/* Hero Section */}
      <section className="reap-hero">
        <div className="reap-badge">Session 2026-27</div>
        <h1>REAP-2025 Disclosure</h1>
        <p>Rajasthan Engineering Admission Process</p>
        <div style={{ marginTop: '1rem' }}>
            <span style={{ background: 'rgba(214, 40, 40, 0.9)', color: 'white', padding: '5px 15px', borderRadius: '5px', fontWeight: '600' }}>
                <i className="fas fa-phone-alt"></i> Helpline: 84400 44826
            </span>
        </div>
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
        </div>

        {/* Admission Process Section */}
        <div className="reap-section-header">
            <h2>Admission Process</h2>
            <div className="reap-section-line"></div>
        </div>

        <div className="reap-card">
            <h3 style={{ marginBottom: '1rem', color: 'var(--reap-text-main)' }}>1. Centralized Counseling Process</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--reap-text-muted)' }}>Candidates are required to fill the Application-cum-Registration Form on the REAP portal.</p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--reap-text-main)' }}>
                <li><strong>70% Seats:</strong> Candidates having Rajasthan State domicile.</li>
                <li><strong>15% Seats:</strong> Candidates from Out of Rajasthan.</li>
                <li><strong>5% Seats:</strong> Tuition Fee Waiver Scheme (TFWS) - Supernumerary.</li>
                <li><strong>5% Seats:</strong> Kashmiri Migrants (KM) - Supernumerary.</li>
            </ul>

            <h4 style={{ marginBottom: '0.5rem', color: 'var(--reap-primary)' }}>Priority for Seat Allotment</h4>
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
                            <td>Rank in JEE (Mains) 2025</td>
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
            <h2>Academic Qualification</h2>
            <div className="reap-section-line"></div>
        </div>

        <div className="reap-card">
            <p style={{ marginBottom: '1.5rem' }}>
                Candidate must have passed Class-12 exam from a recognized board with minimum <strong>45% marks</strong> (General) or <strong>40% marks</strong> (Reserved Category).
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
            <h2>Reservation of Seats</h2>
            <div className="reap-section-line"></div>
        </div>
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
            <h2>Additional Schemes</h2>
            <div className="reap-section-line"></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div className="reap-card">
                <h4 style={{ color: 'var(--reap-primary)', marginBottom: '0.5rem' }}><i className="fas fa-exchange-alt"></i> Internal Sliding</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--reap-text-muted)' }}>
                    Candidates can apply for Internal Sliding at the institute level as per the schedule. Lists will be displayed at the institute according to REAP-2025 rules.
                </p>
            </div>
            <div className="reap-card">
                <h4 style={{ color: 'var(--reap-primary)', marginBottom: '0.5rem' }}><i className="fas fa-graduation-cap"></i> TFWS Scheme</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--reap-text-muted)' }}>
                    Tuition Fee Waiver Scheme is applicable for students whose Parents’ Income is <strong>less than ₹8.00 Lacs per annum</strong>. Allotment is made through REAP only.
                </p>
            </div>
        </div>

      </div>

      {/* 2. LogoCarousel Added Here */}
      <LogoCarousel />

    </div>
  );
}

export default Reap2025;