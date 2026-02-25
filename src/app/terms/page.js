import React from 'react';
import '@/styles/TermsAndConditions.css';
import LogoCarousel from '@/components/LogoCarousel';

export const metadata = {
    title: 'Terms & Conditions | JEC',
    description: 'Admission guidelines, refund policy, and privacy terms for Jaipur Engineering College.',
};

const TermsAndConditions = () => {
    return (
        <div className="terms-wrapper">
            
            {/* --- FIX START: Added a Wrapper Div to Stack Card & Carousel Vertically --- */}
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                width: '100%', 
                gap: '40px' /* Adds space between card and carousel */
            }}>

                <div className="terms-card">
                    <div className="terms-header">
                        <div className="header-accent"></div>
                        <h1 style={{ color: 'var(--jec-blue)', fontSize: '1.875rem', fontWeight: '700' }}>
                            Terms & Conditions
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '8px' }}>
                            Please carefully read the admission guidelines and privacy policy below.
                        </p>
                    </div>

                    <div className="terms-content">
                        {/* Non-refund section */}
                        <section className="terms-section">
                            <h2>
                                <svg style={{width: '20px', height: '20px', marginRight: '8px', color: 'var(--jec-gold)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Non-refund of Fees
                            </h2>
                            <p>
                                All fees, once paid, are <span style={{fontWeight: '600', color: 'var(--jec-red)'}}>non-refundable for any reason whatsoever</span>. However, the Security Deposit will be refunded after making necessary adjustments as required.
                            </p>
                        </section>

                        <hr style={{border: '0', borderBottom: '1px solid var(--border)', margin: '32px 0'}} />

                        {/* Cancellation section */}
                        <section className="terms-section">
                            <h2 style={{marginBottom: '16px'}}>
                                <svg style={{width: '20px', height: '20px', marginRight: '8px', color: 'var(--jec-red)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                Cancellation of Admission
                            </h2>
                            <p style={{marginBottom: '16px'}}>JEC reserves its right to cancel the admission of a successful candidate under any of the following circumstances:</p>
                            
                            <ul className="bullet-list">
                                {[
                                    { id: 'a', text: 'If the fee is not submitted by the stipulated date.' },
                                    { id: 'b', text: 'If the candidate does not join the course by the stipulated date even though the fee has been submitted.' },
                                    { id: 'c', text: 'If the candidate fails to furnish proof of the stipulated minimum qualifications.' },
                                    { id: 'd', text: 'If any instance of unfair means is found after admission.' },
                                    { id: 'e', text: 'If any of the document(s) submitted to JEC are found to be forged, fabricated, or false during the period of study, the admission shall be cancelled immediately, and fees shall be forfeited.' }
                                ].map(item => (
                                    <li key={item.id} className="bullet-item">
                                        <span className="bullet-icon">{item.id}</span>
                                        <span style={{fontSize: '0.875rem'}}>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <hr style={{border: '0', borderBottom: '1px solid var(--border)', margin: '32px 0'}} />

                        {/* Privacy section */}
                        <section className="terms-section">
                            <h2>
                                <svg style={{width: '20px', height: '20px', marginRight: '8px', color: 'var(--jec-blue)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                Privacy Policy & Data Use
                            </h2>
                            <p style={{textAlign: 'justify', fontSize: '0.875rem'}}>
                                When you voluntarily send us electronic mail or fill up the form, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form.
                            </p>
                            
                            <div className="note-box">
                                <svg style={{width: '20px', height: '20px', color: 'var(--jec-blue)', flexShrink: '0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <p style={{paddingLeft: '0', color: 'var(--text-main)'}}>
                                    <strong>Note:</strong> In case you have submitted your personal information, we reserve the right to call, SMS, Email or WhatsApp about our products and offers, even if your number has DND activated on it.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="terms-footer">
                        <p>© 2025 JEC Admission Cell. All rights reserved.</p>
                    </div>
                </div>

                {/* Carousel is now inside the flex column wrapper, at the bottom */}
                <LogoCarousel />
                
            </div>
            {/* --- FIX END --- */}

        </div>
    );
};

export default TermsAndConditions;