"use client";
import React, { useEffect } from 'react';
import '@/styles/AdmissionEnquiry.css'; // Updated import path
import LogoCarousel from '@/components/LogoCarousel'; // Added LogoCarousel

const AdmissionEnquiry = () => {
  
  useEffect(() => {
    const loadNpfWidget = () => {
      if (!document.querySelector('script[src*="emwgts.js"]')) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://widgets.in4.nopaperforms.com/emwgts.js";
        
        script.onload = () => {
          if (window.npf_widget && typeof window.npf_widget.init === 'function') {
            window.npf_widget.init();
          }
        };

        document.body.appendChild(script);
      } else {
        if (window.npf_widget && typeof window.npf_widget.init === 'function') {
          window.npf_widget.init();
        }
      }
    };

    loadNpfWidget();
  }, []);

  return (
    <div className="enquiry-page-wrapper">
      <section className="enquiry-header-section">
        <div className="max-width-container">
          <h1>Admission Enquiry 2026</h1>
          <p>Take the first step towards a bright future at JEC. Fill out the form below.</p>
        </div>
      </section>

      <div className="enquiry-form-container">
        <div className="enquiry-card">
          <h3 className="enquiry-card-title">Enquiry Form</h3>
          
          {/* Increased data-height to 650 to prevent desktop internal scroll */}
          <div 
            className="npf_wgts" 
            data-height="600" 
            data-w="c1073fe2350d112d90b129addc24e9ff"
          ></div>
        </div>
      </div>

      {/* Added LogoCarousel Here */}
      <LogoCarousel />

    </div>
  );
};

export default AdmissionEnquiry;