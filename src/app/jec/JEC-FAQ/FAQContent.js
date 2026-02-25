"use client";
import React, { useState, useRef } from 'react';
import '@/styles/Faq.css';
import LogoCarousel from '@/components/LogoCarousel';

// export const metadata = {
//   title: "JEC: FAQ– Jaipur Engineering College | Best Engineering College",
//   description: "Jaipur Engineering College , A best college where people and ideas come together in new ways, Illuminating turnarounds, igniting sparks that fuel new ventures.",
//   keywords: "About us, JEC, Jaipur, Engineering, College, Top, Rajasthan, JEC Group of Colleges",
// };


// Reusable Accordion Item Component
function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button
        className={`accordion-header ${isOpen ? 'active' : ''}`}
        onClick={toggleAccordion}
      >
        {title}
        <i className={`fas fa-chevron-down icon ${isOpen ? 'active' : ''}`}></i>
      </button>
      <div
        ref={panelRef}
        className="accordion-body"
        style={{ maxHeight: isOpen ? panelRef.current.scrollHeight + 'px' : '0' }}
      >
        <p>{children}</p>
      </div>
    </div>
  );
}

// Main FAQ Page Component
export default function Faq() {
  return (
    <div className="faq-page">

      {/* Updated Hero Section */}
      <section className="faq-hero">

        {/* --- CORRECTED IMAGE PATH --- */}
        <img src="/JECbuilding.jpg" alt="Campus Building" className="hero-bg-img" />

        {/* Overlay Content */}
        <div className="hero-overlay">
          <div className="max-width-container">
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about Admissions, Academics, Placements, and Campus Life at JEC.</p>
          </div>
        </div>
      </section>

      <div className="max-width-container">
        <div className="stats-bar">
          <div className="stat-item">
            <h3>94%+</h3>
            <p>Placements</p>
          </div>
          <div className="stat-item">
            <h3>13</h3>
            <p>Courses on Offer</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Companies Visited</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Sports Facilities</p>
          </div>
        </div>
      </div>

      <div className="max-width-container faq-section">

        <h2 className="faq-category-title">General & Academics</h2>

        <AccordionItem title="Is JEC affiliated to any Apex body or University for purpose of recognition of degrees?">
          Yes, Jaipur Engineering College (JEC) is a self-financed private engineering college approved by AICTE New Delhi and affiliated to Rajasthan Technical University, Kota. Since the university is recognized by UGC and the Ministry of HRD, Govt. of India, the courses offered are recognized everywhere.
        </AccordionItem>

        <AccordionItem title="How is the B.Tech Programme designed?">
          A Choice Based Credit System (CBCS) with continuous evaluation is followed in a semester pattern to ensure a comprehensive learning experience.
        </AccordionItem>

        <AccordionItem title="What is the faculty-student ratio?">
          As per AICTE Norms, the faculty-student ratio is 1:20. In our college, we strictly fulfill this requirement to ensure personal attention for every student.
        </AccordionItem>

        <AccordionItem title="Is campus transfer possible after joining?">
          No, there is no provision for campus transfer after joining the B.Tech programme in any of the JEC campuses.
        </AccordionItem>

        <h2 className="faq-category-title">Admission Process</h2>

        <AccordionItem title="What is the procedure to get admission for B.Tech in JEC?">
          The minimum academic qualification for admission to B.Tech/B.E. program in Rajasthan is a pass with at least 45% marks (40% for reserved category) in 10+2. Compulsory subjects are Physics and Mathematics along with one of Chemistry/Biotechnology/Biology/CS/IT/Agriculture/etc.
        </AccordionItem>

        <AccordionItem title="Can a candidate get direct admission via other entrance exams?">
          Yes, candidates can be admitted provisionally in JEE category seats, Management seats, or Direct category seats if they fulfill norms laid down by the Board of Technical Education, Rajasthan / RTU Kota.
        </AccordionItem>

        <AccordionItem title="What is the Branch-wise Cut-Off?">
          There is no strict branch-wise cut-off. Admission is done based on the merit list. If you have a high score, you have a good chance. If your rank is lower, you can apply for the waiting list by depositing Rs. 15,000. Vacant seats will be filled from the waiting list.
        </AccordionItem>

        <AccordionItem title="What is the procedure for Management Quota?">
          You must apply in the prescribed form. Admission is based on PCM marks in the qualifying exam. Minimum percentage required is as per AICTE rules (Refer to Approval Process Handbook on www.aicte-india.org).
        </AccordionItem>

        <h2 className="faq-category-title">Counseling & Documents</h2>

        <AccordionItem title="Where should I attend the counseling for B.Tech admission?">
          You can attend the counseling on campus at your convenience and opt for any branch according to seat availability at that time.
        </AccordionItem>

        <AccordionItem title="Is the presence of the candidate compulsory at counseling?">
          Yes, it is preferred. Although not strictly compulsory, the candidate along with a parent or guardian should be present at the counseling desk.
        </AccordionItem>

        <AccordionItem title="Are photocopies of certificates enough?">
          No. Original certificates must be produced. These certificates are returned after verification and confirmation of admission from the affiliating government bodies.
        </AccordionItem>

        <AccordionItem title="If I score less than 55% in Physics, can I attend counseling?">
          Yes, provided your aggregate is at least 45%. However, preference is given to candidates with higher scores (e.g., 60% or more aggregate in Physics, Math, and a third subject).
        </AccordionItem>

        <h2 className="faq-category-title">Fees, Refunds & Scholarships</h2>

        <AccordionItem title="Should I bring all fees at the time of counseling?">
          You may reserve your seat by paying a minimum of Rs. 15,000 via Cash, UPI & Net Banking drawn in favor of "Jaipur Engineering College", Kukas Jaipur. The remaining first-semester fee must be deposited by within 15 Days.
        </AccordionItem>

        <AccordionItem title="Can I confirm hostel admission on the same day?">
          Yes. You can confirm hostel accommodation by depositing Rs. 45,000 via Cash, UPI & Net Banking drawn in favor of "Jaipur Engineering College", Kukas Jaipur.
        </AccordionItem>

        <AccordionItem title="What is the refund policy if I withdraw?">
          Refunds follow AICTE regulations. Before Last Date of cancellation.
        </AccordionItem>

        <AccordionItem title="How can I avail scholarships?">
          Merit-based scholarships are available for limited students (details at www.asetmax.com). For government scholarships, details and advice will be provided by faculty coordinators once you are admitted.
        </AccordionItem>

        <AccordionItem title="Is accommodation available during counseling?">
          Candidates must make their own arrangements. We will, however, upload details of nearby hotels/accommodation on the website to assist you.
        </AccordionItem>

      </div>

      <LogoCarousel />
    </div>
  );
}