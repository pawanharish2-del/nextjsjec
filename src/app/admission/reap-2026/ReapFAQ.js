"use client";
import React, { useState } from 'react';

const faqs = [
    {
        question: "Q1: What is the REAP full form in engineering admissions?",
        answer: "Ans: REAP stands for Rajasthan Engineering Admission Process. It is a centralized state-level counseling system organized by the Centre for Electronic Governance (CEG), Rajasthan, for admissions to B.Tech/B.E./B.Arch courses."
    },
    {
        question: "Q2: Can I get admission in B.Tech without a JEE Main score through REAP 2026?",
        answer: "Ans: Yes. While the first priority is given to students with valid JEE Main 2026 ranks, the second and third priorities allow students to secure seats based on their Class 12th Merit or Diploma scores."
    },
    {
        question: "Q3: What is the REAP Code for Jaipur Engineering College, Kukas?",
        answer: "Ans: The official REAP code for Jaipur Engineering College (JEC), Kukas is 1019. Make sure to fill Code 1019 as your primary choice during online choice locking."
    },
    {
        question: "Q4: Is there an application correction window for the REAP Rajasthan 2026 form?",
        answer: "Ans: Generally, the REAP portal does not permit extensive corrections after final form submission. It is highly recommended to double-check all academic percentages, domicile claims, and category selections before locking."
    },
    {
        question: "Q5: What is the minimum eligibility criteria for the Tuition Fee Waiver Scheme (TFWS)?",
        answer: "Ans: To qualify for a TFWS seat during REAP 2026 counseling, the candidate’s annual family income must be under ₹8.00 Lakhs. A valid income certificate issued by a competent authority must be uploaded during registration."
    }
];

export default function ReapFAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div style={{ marginTop: '2.5rem' }}>
            <div className="reap-section-header">
                <h2>Frequently Asked Questions (FAQs) – REAP 2026</h2>
                <div className="reap-section-line"></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        style={{
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            backgroundColor: '#fff'
                        }}
                    >
                        <button 
                            onClick={() => toggleFAQ(index)}
                            style={{
                                width: '100%',
                                padding: '1.25rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                textAlign: 'left',
                                fontSize: '1rem',
                                fontWeight: '600',
                                color: 'var(--reap-primary)'
                            }}
                        >
                            {faq.question}
                            <span style={{ 
                                transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', 
                                transition: 'transform 0.3s ease',
                                color: '#2563EB',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <i className="fas fa-chevron-down"></i>
                            </span>
                        </button>
                        {activeIndex === index && (
                            <div style={{
                                padding: '0 1.25rem 1.25rem 1.25rem',
                                color: 'var(--reap-text-muted)',
                                fontSize: '0.95rem',
                                lineHeight: '1.6'
                            }}>
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
