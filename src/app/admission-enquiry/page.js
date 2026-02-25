"use client";
import React, { useEffect } from 'react';
import '@/styles/AdmissionEnquiry.css'; // Updated import path
import LogoCarousel from '@/components/LogoCarousel'; // Added LogoCarousel

const AdmissionEnquiry = () => {

  useEffect(() => {
    let retryTimer;
    let retryCount = 0;
    const MAX_RETRIES = 20;

    const initWidget = () => {
      if (window.npf_widget && typeof window.npf_widget.init === 'function') {
        window.npf_widget.init();
        return true;
      }
      return false;
    };

    const loadNpfWidget = () => {
      // Remove ANY existing NoPaperForms script so it re-scans the DOM fresh
      const existingScripts = document.querySelectorAll('script[src*="emwgts.js"]');
      existingScripts.forEach(s => s.remove());

      // Also clear any cached widget state so it re-initializes
      if (window.npf_widget) {
        delete window.npf_widget;
      }

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      // Cache-busting param forces a fresh execution
      script.src = "https://widgets.in4.nopaperforms.com/emwgts.js?t=" + Date.now();

      script.onload = () => {
        // Try immediately, then poll in case the widget isn't ready yet
        if (!initWidget()) {
          retryTimer = setInterval(() => {
            retryCount++;
            if (initWidget() || retryCount >= MAX_RETRIES) {
              clearInterval(retryTimer);
            }
          }, 300);
        }
      };

      document.body.appendChild(script);
    };

    // Small delay to ensure the .npf_wgts div is in the DOM before script runs
    const loadTimer = setTimeout(loadNpfWidget, 100);

    return () => {
      clearTimeout(loadTimer);
      if (retryTimer) clearInterval(retryTimer);
    };
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