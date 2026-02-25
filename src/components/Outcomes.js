"use client";
import React from 'react';
import '@/styles/Outcomes.css';

function Outcomes() {
  return (
    <section className="outcomes">
      <div className="outcomes-content">
        <h2 className="outcomes-title">Stories Of Excellence</h2>
        <p className="outcomes-subtitle">At JEC, we empower students to achieve their career goals through dedicated support, top-tier opportunities, and strong industry connections.</p>
        <div className="outcomes-grid">
          <div className="outcome-card" data-outcome="placement">
            <div className="outcome-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3>Placement Cell</h3>
            <p>Our dedicated Placement Cell offers personalized support, securing internships and job opportunities with leading companies for every student.</p>
          </div>
          <div className="outcome-card" data-outcome="recruiters">
            <div className="outcome-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <path d="M20 8v6M23 11h-6"></path>
              </svg>
            </div>
            <h3>Top Recruiters</h3>
            <p>Our 2021–25 placement sessions attracted top recruiters from IT, core engineering, and management, offering diverse career paths.</p>
          </div>
          <div className="outcome-card" data-outcome="careers">
            <div className="outcome-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                <path d="M12 20l9-5.5V7L12 2 3 7v7.5L12 20z"></path>
                <path d="M12 12l6-3.5M12 12v8"></path>
              </svg>
            </div>
            <h3>Career Outcomes</h3>
            <p>We collaborate with leading organizations to ensure exceptional career outcomes, preparing students for success in a competitive world.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Outcomes;