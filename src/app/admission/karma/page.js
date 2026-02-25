// "use client";
import React from 'react';
import '@/styles/Skill.css'; 
import LogoCarousel from '@/components/LogoCarousel'; 



export const metadata = {
  title: "AICTE Karma Courses : Certificate / Diploma / B.Voc. programmes | Jaipur Engineering College",
  description: "Check details about AICTE Karma Scheme Certificate / Diploma / Bachelor of Vocation (B.Voc) programmes in Jaipur Engineering College. The AICTE has launched a scheme on skills development....",
  keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
};

function KarmaCourses() {
  return (
    <div className="karma-page">
      {/* --- HERO SECTION --- */}
      <section className="karma-hero">
        <div className="max-width-container">
          <h1>Skill Development Initiatives</h1>
          <p>Enabling Innovations. Impact Driven. Projects with Mind & Heart.</p>
          <div className="hero-badges">
            <span className="hero-badge">AICTE Approved</span>
            <span className="hero-badge">MNRE Sponsored</span>
          </div>
        </div>
      </section>

      {/* --- KARMA SECTION --- */}
      <section id="karma" className="karma-section-wrapper">
        <div className="max-width-container">
          <h2 className="karma-section-title text-center">KARMA (AICTE Initiative)</h2>
          <p className="karma-intro-text-center">
            <strong>Kaushal Augmentation and Restructuring Mission of AICTE (KARMA)</strong> is an initiative to overcome the dual challenge of scarcity of skilled manpower and low skill levels in the workforce.
          </p>

          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Vocational Training Laboratory" 
            className="karma-section-img" 
          />

          <div className="karma-stats-grid">
            <div className="k-stat-card">
              <h3>24</h3>
              <p>Karma Courses Offered</p>
            </div>
            <div className="k-stat-card">
              <h3>8</h3>
              <p>Participating Departments</p>
            </div>
            <div className="k-stat-card">
              <h3>30</h3>
              <p>Intake Per Course</p>
            </div>
            
          </div>

          <div className="karma-info-grid">
            <div className="karma-info-box">
              <h4 className="karma-sub-title">Objectives</h4>
              <ul>
                <li>Create a skilled and certified workforce to drive India towards becoming a global skills capital.</li>
                <li>Utilize higher education infrastructure during off-hours for skill training.</li>
                <li>Offer domain-specific, demand-led skill training in core engineering sectors leading to employment.</li>
              </ul>
            </div>
            <div className="karma-info-box">
              <h4 className="karma-sub-title">Target Beneficiaries</h4>
              <ul>
                <li>School dropouts after class 10th seeking higher order skills.</li>
                <li>Candidates passed at least 10th standard / ITIs.</li>
                <li>Fulfills job role criteria defined by NSQF.</li>
                <li>Possesses an Aadhaar card.</li>
              </ul>
            </div>
            <div className="karma-info-box">
              <h4 className="karma-sub-title">Admission Process</h4>
              <ul>
                <li>Any 10th pass and above may join. No age bar.</li>
                <li>Preference to learners from the local community.</li>
                <li>Admissions open round the year depending on course duration.</li>
                <li><strong>Training Modes:</strong> 100% Contact-based (Physical) or Blended Approach.</li>
              </ul>
            </div>
          </div>

          <h3 className="karma-sub-title text-center" style={{ marginTop: '40px' }}>Approved Certificate</h3>
          <div className="karma-table-container">
            <table className="karma-course-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Level</th>
                  <th>Program</th>
                  <th>Specialization</th>
                  <th>Eligibility</th>
                  <th>Duration</th>
                </tr>
              </thead>
               <tbody>
    
                <tr><td>1</td><td>KARMA 1</td><td>Automobile Engg</td><td>Maintenance Technician-Mech</td><td>ITI / Mech / Fitter</td><td>350 Hrs</td></tr>
                <tr><td>2</td><td>KARMA 1</td><td>CSE</td><td>Web Designing & Multimedia</td><td>10th</td><td>288 Hrs</td></tr>
                <tr><td>3</td><td>KARMA 1</td><td>CSE</td><td>CRM Domestic Voice</td><td>10th</td><td>518 Hrs</td></tr>
                <tr><td>4</td><td>KARMA 1</td><td>CSE</td><td>IT Network Support</td><td>10+2</td><td>120 Hrs</td></tr>
                <tr><td>5</td><td>KARMA 1</td><td>CSE</td><td>Certified Audio Visual Designer</td><td>10+2</td><td>80 Hrs</td></tr>
                <tr><td>6</td><td>KARMA 1</td><td>CSE</td><td>3D Animation & Special Effects</td><td>10th</td><td>500 Hrs</td></tr>
                <tr><td>7</td><td>KARMA 1</td><td>Mechanical</td><td>CNC Operator-Training</td><td>10th</td><td>300 Hrs</td></tr>
                <tr><td>8</td><td>KARMA 1</td><td>Mechanical</td><td>Fitter-Mechanical Assembly</td><td>10th</td><td>400 Hrs</td></tr>
                <tr><td>9</td><td>KARMA 1</td><td>Electronics</td><td>Installation Tech-Computing</td><td>10th</td><td>200 Hrs</td></tr>
                <tr><td>10</td><td>KARMA 2</td><td>CSE</td><td>Adv Diploma - PLC/SCADA/DCS</td><td>B.E./B.Tech/Dip</td><td>480 Hrs</td></tr>
                <tr><td>11</td><td>KARMA 2</td><td>CSE</td><td>App Developer - Web & Mobile</td><td>Graduate</td><td>440 Hrs</td></tr>
                <tr><td>12</td><td>KARMA 2</td><td>Mechanical</td><td>Adv Cert. Inspection & QC</td><td>10+2</td><td>780 Hrs</td></tr>
                <tr><td>13</td><td>KARMA 2</td><td>Electrical</td><td>Elec Assembly Operator</td><td>10th + ITI</td><td>200 Hrs</td></tr>
                <tr><td>14</td><td>KARMA 2</td><td>CSE</td><td>Associate - DTP</td><td>Graduate</td><td>400 Hrs</td></tr>
                <tr><td>15</td><td>KARMA 2</td><td>Electronics</td><td>Cert. Course in VLSI Design</td><td>Pursuing Degree</td><td>80 Hrs</td></tr>
                <tr><td>16</td><td>KARMA 2</td><td>Electrical</td><td>System Admin Using Linux</td><td>B.Sc/BCA/Dip</td><td>80 Hrs</td></tr>
                <tr><td>17</td><td>KARMA 2</td><td>CSE</td><td>Auto CAD Designer</td><td>10+2</td><td>120 Hrs</td></tr>
                <tr><td>18</td><td>KARMA 2</td><td>CSE</td><td>Web Developer</td><td>Grad / Diploma</td><td>400 Hrs</td></tr>
                <tr><td>19</td><td>KARMA 2</td><td>Electrical</td><td>DSP Using MATLAB</td><td>Pursuing Degree</td><td>80 Hrs</td></tr>
                <tr><td>20</td><td>KARMA 2</td><td>Electronics</td><td>CAD Using CREO</td><td>Pursuing Degree</td><td>100 Hrs</td></tr>
                <tr><td>21</td><td>KARMA 2</td><td>CSE</td><td>iOS Programming</td><td>Engg/Sci Grad</td><td>320 Hrs</td></tr>
                <tr><td>22</td><td>KARMA 2</td><td>CSE</td><td>Network Administration</td><td>Engg/Sci Grad</td><td>320 Hrs</td></tr>
                <tr><td>23</td><td>KARMA 2</td><td>CSE</td><td>IoT Applications</td><td>B.E./B.Tech/Dip</td><td>360 Hrs</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="karma-journey-footer">
            <h4>Start Your Skill Journey Today</h4>
            <p>Banking of credits for skill shall be permitted so as to enable mobility of learners (NHEQF).</p>
            <p><strong>Admission Helpline:</strong> 8875071333 (30 Lines) | <strong>Email:</strong> admissions.jec@gmail.com</p>
          </div>
        </div>
      </section>

      {/* --- SURYAMITRA SECTION --- */}
      <section id="suryamitra" className="karma-section-wrapper bg-light-gray">
        <div className="max-width-container">
          <h2 className="karma-section-title text-center">"SURYAMITRA" Skill Development Programme</h2>
          
          <div className="program-card">
            <div className="program-header">
              <span className="program-tag">Solar Energy</span>
              <h3>Solar PV Technician Course</h3>
              <p>Sponsored by MNRE (Ministry of New and Renewable Energy), Govt. of India in collaboration with NISE.</p>
            </div>
            <div className="program-body">
              <div className="program-content-wrapper">
                <div className="program-img-col">
                  <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Solar Technician Training" />
                </div>
                <div className="program-details-col">
                  <div className="program-details">
                    <div className="detail-item">
                      <strong>Overview</strong>
                      <p>Covers solar PV feasibility studies, basics of design, Installation, operation, and Maintenance of solar power plants. Prepares candidates to become new entrepreneurs in the Solar Sector.</p>
                    </div>
                    <div className="detail-item">
                      <strong>Essential Qualification</strong>
                      <p>ITI (Electrician, Wireman, Electronics) OR Diploma (Electrical, Electronics, Mechanical).</p>
                    </div>
                    <div className="detail-item">
                      <strong>Age Limit</strong>
                      <p>18 to 40 Years.</p>
                    </div>
                    <div className="detail-item">
                      <strong>Duration</strong>
                      <p>Residential programme of THREE MONTHS (600 HOURS).</p>
                    </div>
                    <div className="detail-item">
                      <strong>Medium</strong>
                      <p>Hindi and English Language.</p>
                    </div>
                  </div>

                  <div className="program-action-box">
                    <div className="free-badge red-badge">
                      FREE PROGRAM <br /> <span className="badge-subtext">NEED NOT TO PAY ANYTHING</span>
                    </div>
                    <div className="program-contact-box">
                      <h5>For Admission Contact:</h5>
                      <p><strong>"Suryamitra" Skill Development Center, JEC Group of Colleges</strong></p>
                      <p>SP-43 RIICO Industrial Area, Kukas- Jaipur (Rajasthan) - 302 028</p>
                      <p><i className="fas fa-phone"></i> +91 94148 57536, +91 84400 44825, +91 94132 06287</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VAYUMITRA SECTION --- */}
      <section id="vayumitra" className="karma-section-wrapper">
        <div className="max-width-container">
          <h2 className="karma-section-title text-center">"VAYUMITRA" Skill Development Program (VSDP)</h2>

          <div className="program-card blue-border">
            <div className="program-header">
              <span className="program-tag blue-tag">Wind Energy</span>
              <h3>Wind Farm Engineer</h3>
              <p>Sponsored by MNRE, Govt. of India in collaboration with NIWE (National Institute of Wind Energy) & NCVET.</p>
            </div>
            <div className="program-body">
              <div className="program-content-wrapper">
                <div className="program-img-col">
                  <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Wind Farm Engineering" />
                </div>
                <div className="program-details-col">
                  <div className="program-details">
                    <div className="detail-item">
                      <strong>Overview</strong>
                      <p>Complete overview of Wind Power: resource assessment, installation, commissioning, O&M of wind farms, financial and policy aspects. Covers mechanical, electrical, and hydraulic components.</p>
                    </div>
                    <div className="detail-item">
                      <strong>Essential Qualification</strong>
                      <p>ITI + Exp. / Diploma + Exp. / B.E./B. Tech (Electrical / Mechanical / Civil / Electronics & Instrumentation).</p>
                    </div>
                    <div className="detail-item">
                      <strong>Age Limit</strong>
                      <p>Minimum 22 Years.</p>
                    </div>
                    <div className="detail-item">
                      <strong>Duration</strong>
                      <p>Residential course of 81 Days.</p>
                    </div>
                    <div className="detail-item">
                      <strong>Certification</strong>
                      <p>Certificate from Govt. of India through NCVET/ NIWE /MNRE.</p>
                    </div>
                  </div>

                  <div className="program-action-box">
                    <div className="free-badge blue-badge">
                      NO COURSE FEE <br /> <span className="badge-subtext">30 Seats per Batch</span>
                    </div>
                    <div className="program-contact-box">
                      <h5>For Admission Contact:</h5>
                      <p><strong>"Vayumitra" Skill Development Center, All India Agrasen Technical Education & Research Foundation</strong></p>
                      <p>Jaipur Engineering College Campus, SP-43 RIICO Industrial Area, Kukas, Jaipur</p>
                      <p><i className="fas fa-phone"></i> 9414857536, 8440044825, 7891188636, 9116160495</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <LogoCarousel />
    </div>
  );
}

export default KarmaCourses;