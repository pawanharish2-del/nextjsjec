// "use client";
import React from 'react';
import '@/styles/FeeStructure.css';
import LogoCarousel from '@/components/LogoCarousel'; // Added this import


export const metadata = {
    title: "Jaipur Engineering College Courses Fees Structure",
    description: "Check the available Courses with Fees Structure in Jaipur Engineering College (JEC Kukas).",
    keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
};

export default function FeeStructure() {
    return (
        <div className="fee-page">

            {/* Hero Section */}
            <section className="fee-hero">
                <div className="max-width-container">
                    <h1>Fee Structure & Scholarships</h1>
                    <p>Transparent, Government Approved Fees for Academic Session 2026-27.</p>
                </div>
            </section>

            {/* Stats Banner */}
            <div className="max-width-container">
                <div className="fee-stats-bar">
                    <div className="fee-stat-item">
                        <h3>Govt Approved</h3>
                        <p>Fee Structure</p>
                    </div>
                    <div className="fee-stat-item">
                        <h3>94%+</h3>
                        <p>Placement Rate</p>
                    </div>
                    <div className="fee-stat-item">
                        <h3>Available</h3>
                        <p>Govt. Scholarships</p>
                    </div>
                    <div className="fee-stat-item">
                        <h3>13</h3>
                        <p>Courses Offered</p>
                    </div>
                </div>
            </div>

            {/* Pricing Cards Section */}
            <section className="fee-section">
                <div className="max-width-container">
                    <div className="text-center" style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666' }}>Fees are applicable for all students as per rules of Government of Rajasthan / Rajasthan Technical University, Kota. Mode of payments can be Cash, Demand Drafts, or Online Transfer.</p>
                    </div>

                    <h2 className="fee-section-title">Fee Structure (Session 2026-27)</h2>

                    <div className="fee-pricing-grid">

                        {/* Academic Fee Card */}
                        <div className="fee-price-card fee-academic">
                            <div className="fee-price-header">
                                <div className="fee-price-title">Tuition Fee</div>
                                <div className="fee-price-amount">₹95,500*</div>
                                <div className="fee-price-unit">Per Annum</div>
                            </div>
                            <div className="fee-price-body">
                                <ul className="fee-price-list">
                                    <li><span className="fee-label">Tuition Fee</span> <span className="fee-value">₹95,500*</span></li>
                                    <li><span className="fee-label">Caution Money</span> <span className="fee-value">₹5,000</span></li>
                                    <li><span className="fee-label" style={{ color: '#777', fontSize: '12px' }}>(Refundable One Time)</span></li>
                                    <li style={{ borderTop: '2px solid #eee', paddingTop: '15px', marginTop: '10px' }}>
                                        {/* CHANGED TO GREY (#777) */}
                                        <span className="fee-label" style={{ color: '#777' }}>Total Fees</span>
                                        <span className="fee-value" style={{ fontSize: '20px' }}>₹1,00,500</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Hostel Fee Card */}
                        <div className="fee-price-card fee-hostel">
                            <div className="fee-price-header">
                                <div className="fee-price-title">Hostel Fee</div>
                                <div className="fee-price-amount">₹90,000</div>
                                <div className="fee-price-unit">Per Annum</div>
                            </div>
                            <div className="fee-price-body">
                                <ul className="fee-price-list">
                                    <li><span className="fee-label">Room Type</span> <span className="fee-value">Two Seater</span></li>
                                    <li><span className="fee-label">Hostel Fee</span> <span className="fee-value">₹90,000</span></li>
                                    <li><span className="fee-label">Security Deposit</span> <span className="fee-value">₹10,000</span></li>
                                    <li><span className="fee-label" style={{ color: '#777', fontSize: '12px' }}>(Refundable One Time)</span></li>
                                    <li style={{ borderTop: '2px solid #eee', paddingTop: '15px', marginTop: '10px' }}>
                                        {/* CHANGED TO GREY (#777) */}
                                        <span className="fee-label" style={{ color: '#777' }}>Total Fees</span>
                                        <span className="fee-value" style={{ fontSize: '20px' }}>₹1,00,000</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Transport Fee Card */}
                        <div className="fee-price-card fee-transport">
                            <div className="fee-price-header">
                                <div className="fee-price-title">Transport Fee</div>
                                <div className="fee-price-amount">₹38,000</div>
                                <div className="fee-price-unit">Per Annum</div>
                            </div>
                            <div className="fee-price-body">
                                <ul className="fee-price-list">
                                    <li><span className="fee-label">Mode</span> <span className="fee-value">College Bus</span></li>
                                    <li><span className="fee-label">Coverage</span> <span className="fee-value">Jaipur City</span></li>
                                    <li><span className="fee-label">Frequency</span> <span className="fee-value">Daily</span></li>
                                    <li style={{ borderTop: '2px solid #eee', paddingTop: '15px', marginTop: '10px' }}>
                                        {/* CHANGED TO GREY (#777) */}
                                        <span className="fee-label" style={{ color: '#777' }}>Total Fees</span>
                                        <span className="fee-value" style={{ fontSize: '20px' }}>₹38,000</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Payment Section (QR) */}
            <section className="fee-payment-section">
                <div className="max-width-container fee-payment-container">
                    <div className="fee-payment-info">
                        <h3>Easy Payment Options</h3>
                        <p>You can pay your fees securely using any UPI App (Google Pay, PhonePe, Paytm, BHIM) by scanning the QR code. Alternatively, you can use Net Banking or Demand Draft.</p>

                        <div className="fee-payment-methods">
                            <span className="fee-method-badge"><i className="fas fa-qrcode"></i> UPI / QR</span>
                            <span className="fee-method-badge"><i className="fas fa-money-check-alt"></i> Demand Draft</span>
                            <span className="fee-method-badge"><i className="fas fa-university"></i> Net Banking</span>
                        </div>

                        <p><strong>Note:</strong> Please save the transaction screenshot or receipt ID for verification at the accounts department.</p>
                    </div>

                    <div className="fee-qr-box">
                        <img src="/QR.jpg" alt="Scan to Pay - Indian Overseas Bank JEC" style={{ maxWidth: '200px' }} />
                        <div className="fee-qr-caption">Scan to Pay via UPI</div>
                        <div style={{ marginTop: '10px', fontWeight: 'bold', color: '#333' }}>UPI ID: 8058799029@IOB</div>
                    </div>
                </div>
            </section>

            {/* TFWS & Notes Section */}
            <section className="fee-info-section">
                <div className="max-width-container">

                    <div className="fee-notes-box">
                        <h4><i className="fas fa-clipboard-list"></i> Important Notes</h4>
                        <ul className="fee-notes-list">
                            <li>Fee structure is subject to change every academic year.</li>
                            <li>This fee structure is applicable for students admitted in Academic Year 2026-27 only.</li>
                            <li>REAP Charges, University Development Fee, Enrollment Fee & Examination Fee will be charged by Rajasthan Technical University, Kota, additionally as per norms.</li>
                            <li>Hostel security is to be deposited whenever a student opts for the hostel facility.</li>
                        </ul>
                    </div>

                    <div className="fee-tfws-box">
                        <h4><i className="fas fa-graduation-cap"></i> Tuition Fee Waiver Scheme (TFWS)</h4>
                        <p>JEC has adopted the Tuition Fees Waiver Scheme (TFWS) of AICTE. Under this scheme, <strong>100% tuition fee</strong> of meritorious students of each branch from the economically weak category is waived off for all four years. The number of benefited students may go up to 5% of total intake.</p>
                    </div>

                </div>
            </section>

            {/* Added LogoCarousel here */}
            <LogoCarousel />

        </div>
    );
}