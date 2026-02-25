import React from 'react';
import '@/styles/Disclaimer.css';
import LogoCarousel from '@/components/LogoCarousel'; // Added LogoCarousel

export const metadata = {
  title: "Disclaimer | JEC",
  description: "Legal disclaimer for Jaipur Engineering College website usage.",
};

const Disclaimer = () => {
    const disclaimerPoints = [
        { id: 1, title: "Accuracy of Information", text: "The information provided on this college website is intended for general informational purposes only. While we strive to keep the content accurate and up-to-date, we make no warranties or representations regarding the completeness, reliability, or suitability of the information." },
        { id: 2, title: "Program and Course Changes", text: "The College reserves the right to make changes to programs, courses, schedules, fees, and any other aspect of the academic offerings without prior notice. It is advisable to contact the college directly for the most current and accurate information." },
        { id: 3, title: "Third-Party Links", text: "Our website may contain links to external websites and resources that are not owned or controlled by the college. These links are provided for convenience, and we do not endorse or take responsibility for the content, accuracy, or availability of those websites." },
        { id: 4, title: "Personal Information", text: "The College takes privacy and data protection seriously. While we strive to maintain the security of any personal information submitted through our website, we cannot guarantee the absolute security of such information." },
        { id: 5, title: "Disclaimer of Liability", text: "The college, its employees, or agents shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the website or any content or services provided." },
        { id: 6, title: "Endorsements", text: "Any mention of products, services, organizations, or individuals on the college website does not imply endorsement or recommendation unless explicitly stated." },
        { id: 7, title: "Intellectual Property", text: "All intellectual property rights, including text, graphics, logos, images, and software, are the property of the college. Unauthorized use or reproduction is strictly prohibited." },
        { id: 8, title: "Governing Law", text: "Any disputes arising from the use of this website shall be governed by and construed in accordance with the laws of Jaipur jurisdiction only.", highlighted: true },
        { id: 9, title: "Changes to Disclaimer", text: "The College reserves the right to modify or update this disclaimer at any time without prior notice. Any changes will be effective immediately upon posting." }
    ];

    return (
        <div className="legal-wrapper">
            {/* Wrapper Div: Added to stack the Card and Carousel vertically 
              without altering the 'legal-wrapper' CSS which uses Flex Row.
            */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
                
                <div className="legal-card">
                    <div className="legal-header">
                        <div className="header-accent"></div>
                        <h1 style={{ color: 'var(--jec-blue)', fontSize: '1.875rem', fontWeight: '700' }}>Disclaimer</h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '8px' }}>Please read the following disclaimer regarding the use of our website and services.</p>
                    </div>
                    <div className="legal-content">
                        <div className="disclaimer-grid">
                            {disclaimerPoints.map((item) => (
                                <div key={item.id} className={`disclaimer-item ${item.highlighted ? 'highlighted' : ''}`}>
                                    <div className={`number-badge ${item.highlighted ? 'white' : ''}`}>{item.id}</div>
                                    <div>
                                        <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '8px' }}>{item.title}</h3>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6', textAlign: 'justify' }}>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
                            <p style={{ fontSize: '0.875rem', fontStyle: 'italic', fontWeight: '500' }}>
                                "By using this college website, you agree to accept and comply with the terms and conditions of this disclaimer."
                            </p>
                        </div>
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

export default Disclaimer;