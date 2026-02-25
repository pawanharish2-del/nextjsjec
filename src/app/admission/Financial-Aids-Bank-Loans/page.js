// "use client";
import React from 'react';
import '@/styles/FinancialAids.css'; // Import the specific CSS file
import LogoCarousel from '@/components/LogoCarousel'; // Added for consistency across all pages

export const metadata = {
  title: "Jaipur Engineering College – Scholarships, Bank Loan, Financial Aids, Finance",
  description: "Know about available Scholarships, Bank Loan, Financial Aids options in Jaipur Engineering College (JEC Kukas).",
  keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
};

function FinancialAids() {
  return (
    <div className="finaid-page">
      
      {/* Hero Section */}
      <section className="finaid-hero">
        <div className="max-width-container">
            <h1>Financial Aids & Bank Loans</h1>
            <p>JEC strives to ensure that financial barriers do not deter outstanding academic potential. We are committed to providing support and guidance for all students.</p>
        </div>
      </section>

      {/* Quick Links Banner */}
      <div className="max-width-container">
        <div className="finaid-quick-links-bar">
            <div className="finaid-quick-link-item">
                <i className="fas fa-graduation-cap"></i>
                <h4>Govt. Scholarships</h4>
            </div>
            <div className="finaid-quick-link-item">
                <i className="fas fa-university"></i>
                <h4>Bank Loans</h4>
            </div>
            <div className="finaid-quick-link-item">
                <i className="fas fa-hand-holding-usd"></i>
                <h4>Fee Structure</h4>
            </div>
            <div className="finaid-quick-link-item">
                <i className="fas fa-chart-pie"></i>
                <h4>Budgeting Tips</h4>
            </div>
        </div>
      </div>

      {/* Intro & Objectives */}
      <section className="finaid-content-section">
        <div className="max-width-container">
            <div className="finaid-intro-text">
                <p>JEC's ambition is to ensure that no one with outstanding academic potential is deterred from studying here due to financial circumstances. We make a conscious effort to reach out to those with exceptional economic and educational needs. We are dedicated to providing high-quality service in a fair, sensitive, and confidential environment.</p>
            </div>

            <div className="finaid-objectives-grid">
                <div className="finaid-objective-card finaid-bg-red">
                    Provide quality advising services by addressing individual student needs and responding to inquiries timely.
                </div>
                <div className="finaid-objective-card finaid-bg-green">
                    Make available all documentary supports needed by the student from the institution in a single window system.
                </div>
                <div className="finaid-objective-card finaid-bg-purple">
                    Employ professional judgment to ensure access to financial aid in unusual cases.
                </div>
                <div className="finaid-objective-card finaid-bg-teal">
                    Comply with state and local regulations, laws, and policies in the government of financial aid programs.
                </div>
            </div>
        </div>
      </section>

      {/* Government Scholarships */}
      <section className="finaid-content-section" style={{ backgroundColor: 'var(--finaid-bg-medium)' }}>
        <div className="max-width-container">
            <h2 className="finaid-section-title">Government Scholarships</h2>
            <p style={{ marginBottom: '30px' }}>Scholarships are a boon for students belonging to weaker sections. Below are various government schemes available.</p>
            
            <div className="finaid-table-container">
                <table className="finaid-data-table">
                    <thead>
                        <tr>
                            <th>Scholarship / Office</th>
                            <th>Place</th>
                            <th>Additional Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chief Minister Scholarship Scheme (Samajik Nyay Vibhag)</td>
                            <td>Jaipur (Rajasthan)</td>
                            <td>Advertisement in leading dailies at academic year start. Visit <a href="https://sje.rajasthan.gov.in/Default.aspx?PageID=198" target="_blank" rel="noreferrer">Dept Website</a></td>
                        </tr>
                        <tr>
                            <td>District Minority Welfare Officer</td>
                            <td>All Districts, Rajasthan</td>
                            <td>Contact relevant office. Visit <a href="https://www.minorityaffairs.gov.in/show_content.php?lang=1&level=2&ls_id=661&lid=823" target="_blank" rel="noreferrer">SJE Website</a></td>
                        </tr>
                        <tr>
                            <td>Jharkhand State Tribal Coop. Dev. Corp.</td>
                            <td>Ranchi (Jharkhand)</td>
                            <td>Contact relevant office for details.</td>
                        </tr>
                        <tr>
                            <td>District Welfare Officers (Zila Kalyan)</td>
                            <td>All Bihar Districts</td>
                            <td>Contact relevant office. Visit <a href="https://sje.rajasthan.gov.in/" target="_blank" rel="noreferrer">Education Bihar</a></td>
                        </tr>
                        
                        <tr>
                            <td>NSP</td>
                            <td>All Districts</td>
                            <td>Contact relevant office. Visit <a href="https://scholarships.gov.in/" target="_blank" rel="noreferrer">NSP</a></td>
                        </tr>
                        <tr>
                            <td>Buddy4study</td>
                            <td>All Districts</td>
                            <td>Contact relevant office. Visit <a href="https://www.buddy4study.com/" target="_blank" rel="noreferrer">Buddy4study</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* Financial Aids & Bank Loans */}
      <section className="finaid-content-section">
        <div className="max-width-container">
            <h2 className="finaid-section-title">Financial Aids & Bank Loans</h2>
            <p style={{ marginBottom: '30px' }}>Education loans help you cover tuition and other expenses. Below is an indicative list of banks offering student loans.</p>
            
            <div className="finaid-table-container">
                <table className="finaid-data-table">
                    <thead>
                        <tr>
                            <th>Name of the Bank</th>
                            <th>Website / Link</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bank of India</td>
                            <td><a href="https://www.bankofindia.co.in" target="_blank" rel="noreferrer">www.bankofindia.co.in</a></td>
                            <td>Visit nearest branch for details</td>
                        </tr>
                        <tr>
                            <td>Punjab National Bank</td>
                            <td><a href="https://www.pnbindia.in" target="_blank" rel="noreferrer">www.pnbindia.in</a></td>
                            <td>Visit nearest branch for details</td>
                        </tr>
                        <tr>
                            <td>HDFC Bank</td>
                            <td><a href="https://www.hdfcbank.com" target="_blank" rel="noreferrer">www.hdfcbank.com</a></td>
                            <td>Visit nearest branch for details</td>
                        </tr>
                        <tr>
                            <td>ICICI Bank</td>
                            <td><a href="https://www.icicibank.com" target="_blank" rel="noreferrer">www.icicibank.com</a></td>
                            <td>Visit nearest branch for details</td>
                        </tr>
                        <tr>
                            <td>State Bank of India (SBI)</td>
                            <td><a href="https://onlinesbi.sbi.bank.in/" target="_blank" rel="noreferrer">www.sbi.co.in</a></td>
                            <td>Visit nearest branch for details</td>
                        </tr>
                        <tr>
                            <td>Canara Bank</td>
                            <td><a href="https://www.canarabank.com" target="_blank" rel="noreferrer">www.canarabank.com</a></td>
                            <td>Visit nearest branch for details</td>
                        </tr>
                        <tr>
                            <td>IDBI Bank</td>
                            <td><a href="https://www.idbi.com" target="_blank" rel="noreferrer">www.idbi.com</a></td>
                            <td>Visit nearest branch for details</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* Budgeting Section */}
      <section className="finaid-budget-section">
        <div className="max-width-container">
            <h2 className="finaid-section-title">Basic Budgeting for Students</h2>
            <p style={{ marginBottom: '30px' }}>Managing educational expenses is a crucial skill. Here are some tips to help you plan.</p>
            
            <div className="finaid-budget-grid">
                <div className="finaid-budget-card">
                    <h4><i className="fas fa-wallet"></i> Identify Your Resources</h4>
                    <p>Track all income sources: family support, financial aid refunds, or part-time jobs. Always budget on the minimum expected income, not the maximum.</p>
                </div>
                <div className="finaid-budget-card">
                    <h4><i className="fas fa-list-ul"></i> Identify Expenses</h4>
                    <p><strong>Fixed:</strong> Tuition, housing, utility bills.<br />
                    <strong>Flexible:</strong> Food, clothing, leisure. Use apps or a notebook to track flexible spending.</p>
                </div>
                <div className="finaid-budget-card">
                    <h4><i className="fas fa-piggy-bank"></i> Don't Forget Savings</h4>
                    <p>Even a small amount saved monthly adds up. It provides a sense of financial security and builds a lifelong habit.</p>
                </div>
                <div className="finaid-budget-card">
                    <h4><i className="fas fa-balance-scale"></i> Needs vs. Wants</h4>
                    <ul>
                        <li><strong>Needs:</strong> Essentials for daily life (food, housing, study materials).</li>
                        <li><strong>Wants:</strong> Things you can do without if necessary.</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* External Links Banner */}
      <section className="finaid-external-links">
        <div className="max-width-container">
            <p>Students are advised to regularly visit the National Scholarship Portal: <a href="https://www.scholarships.gov.in" target="_blank" rel="noreferrer">www.scholarships.gov.in</a></p>
        </div>
      </section>

      {/* Logo Carousel Added */}
      <LogoCarousel />

    </div>
  );
}

export default FinancialAids;