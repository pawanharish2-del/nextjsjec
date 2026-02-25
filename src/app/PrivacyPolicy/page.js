import React from 'react';
import '@/styles/Disclaimer.css'; // Reusing common layout styles
import '@/styles/PrivacyPolicy.css';
import LogoCarousel from '@/components/LogoCarousel'; // Added LogoCarousel

export const metadata = {
  title: "Privacy Policy | JEC",
  description: "JEC Privacy Policy and website linking terms.",
};

const PrivacyPolicy = () => {
    return (
        <div className="legal-wrapper">
            {/* Wrapper Div: Stacks the Card and Carousel vertically 
                while maintaining the 'legal-wrapper' Flex layout.
            */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
                
                <div className="legal-card">
                    <div className="legal-header">
                        <div className="header-accent"></div>
                        <h1 style={{ color: 'var(--jec-blue)', fontSize: '1.875rem', fontWeight: '700' }}>Privacy Policy</h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '8px' }}>Please review our policies regarding website linking, content accuracy, and data usage.</p>
                    </div>
                    <div className="legal-content">
                        <section className="policy-section">
                            <h2>
                                <svg style={{width: '20px', height: '20px', marginRight: '8px', color: 'var(--jec-gold)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                Reservation of Rights
                            </h2>
                            <div className="policy-text">
                                <p style={{marginBottom: '12px'}}>We reserve the right to request that the service provider remove all links or any particular link to our website. The service provider agrees to immediately remove all links to our website upon request.</p>
                                <p>We also reserve the right to amend these terms and conditions and our linking policy at any time. By continuously linking to our website, you agree to be bound by these terms.</p>
                            </div>
                        </section>

                        <div className="section-divider"></div>

                        <section className="policy-section">
                            <h2 style={{color: 'var(--text-main)'}}>
                                <svg style={{width: '20px', height: '20px', marginRight: '8px', color: 'var(--jec-red)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                                Removal of Links & Content Disclaimer
                            </h2>
                            <div className="policy-text">
                                <p>If any link on our website is found to be offensive, individuals are free to contact us. We will consider requests to remove links, but we are not obligated to do so.</p>
                                <div className="disclaimer-box">
                                    <p style={{fontStyle: 'italic', fontSize: '0.75rem'}}>
                                        <span style={{fontWeight: '700', fontStyle: 'normal'}}>Disclaimer:</span> We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="section-divider"></div>

                        <section className="policy-section">
                            <h2>
                                <svg style={{width: '20px', height: '20px', marginRight: '8px', color: 'var(--jec-blue)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                                Data Collection & Communication
                            </h2>
                            <div className="policy-text">
                                <p>When you voluntarily send us email or fill out a form, we keep a record of this information to respond to you. We only collect information like name, email, or phone number when you register or fill out a form.</p>
                                <div className="communication-note">
                                    <svg style={{width: '20px', height: '20px', color: 'var(--jec-blue)', flexShrink: '0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p style={{fontSize: '0.75rem', color: 'var(--text-main)', paddingLeft: '0'}}>
                                        <strong>Communication Policy:</strong> We reserve the right to call, SMS, Email or WhatsApp about our products, <span style={{textDecoration: 'underline', fontWeight: '500'}}>even if your number has DND activated.</span>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="legal-footer">
                        <p>© 2025 JEC. All rights reserved.</p>
                    </div>
                </div>

                {/* Added LogoCarousel Here */}
                <LogoCarousel />
                
            </div>
        </div>
    );
};

export default PrivacyPolicy;