"use client";
import React from 'react';
import '@/styles/WhyJEC.css';

function WhyJEC() {
  return (
    <section className="why-jec-section">
      <div className="why-jec-content">
        <h2 className="why-jec-title">Why Choose JEC?</h2>
        <p className="why-jec-subtitle">Discover what sets JEC apart as a leading institution for engineering education, blending academic excellence with modern facilities.</p>

        <div className="why-jec-grid">
          {/* Card 1: AICTE Approved */}
          <div className="why-jec-card" data-feature="accreditation">
            <div className="why-jec-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>AICTE Approved</h3>
            <p>Affiliated with RTU, Kota, ensuring quality education.</p>
          </div>

          {/* Card 2: Modern Infrastructure */}
          <div className="why-jec-card" data-feature="infrastructure">
            <div className="why-jec-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h3>Modern Infrastructure</h3>
            <p>State-of-the-art laboratories and campus facilities.</p>
          </div>

          {/* Card 3: Experienced Faculty */}
          <div className="why-jec-card" data-feature="faculty">
            <div className="why-jec-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Experienced Faculty</h3>
            <p>Highly qualified and experienced teaching staff.</p>
          </div>

          {/* --- MISSING CARDS ADDED BELOW --- */}

          {/* Card 4: Strong Placements */}
          <div className="why-jec-card" data-feature="placements">
            <div className="why-jec-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0072C6" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3>Strong Placements</h3>
            <p>Robust placement cell with top-tier company tie-ups.</p>
          </div>

          {/* Card 5: Research Opportunities */}
          <div className="why-jec-card" data-feature="research">
            <div className="why-jec-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0072C6" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3>Research Opportunities</h3>
            <p>Access to cutting-edge research projects and labs.</p>
          </div>

          {/* Card 6: Vibrant Community */}
          <div className="why-jec-card" data-feature="community">
            <div className="why-jec-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0072C6" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Vibrant Community</h3>
            <p>Engaging student clubs and extracurricular activities.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyJEC;