"use client";
import React from 'react';
import '@/styles/AntiRagging.css';
import LogoCarousel from '@/components/LogoCarousel';

export default function AntiRagging() {
  return (
    <div className="anti-ragging-page-new">

      <section className="anti-ragging-hero">
        <img
          src="https://images.unsplash.com/photo-1649389969653-5f46996ac5d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Anti-Ragging Banner"
        />
        <div className="hero-content">
          <h1>Anti-Ragging Committee</h1>
          <p>Committed to a Safe and Secure Environment for All Students at JEC Jaipur.</p>
        </div>
      </section>

      <div className="max-width-container main-content">

        <div className="objectives-card">
          <h2>Our Objectives</h2>
          <ul>
            <li><i className="fas fa-gavel"></i> To strictly prohibit and prevent ragging in the institution in any form.</li>
            <li><i className="fas fa-shield-alt"></i> To ensure that all students feel safe, supported, and respected on campus.</li>
            <li><i className="fas fa-exclamation-triangle"></i> To take immediate and decisive action in case of any ragging complaints, ensuring prompt justice.</li>
            <li><i className="fas fa-campground"></i> To foster a welcoming and inclusive campus culture for freshers and all students.</li>
            <li><i className="fas fa-bullhorn"></i> To educate students about the severe consequences of ragging and promote responsible behavior.</li>
            <li><i className="fas fa-user-friends"></i> To conduct regular meetings and counseling sessions to address student grievances proactively.</li>
            <li><i className="fas fa-eye"></i> To maintain constant vigil and monitoring at hostels, canteens, and common areas.</li>
            <li><i className="fas fa-hand-holding-heart"></i> To implement mentoring cells involving senior students to guide and support juniors.</li>
            <li><i className="fas fa-balance-scale"></i> To ensure compliance with AICTE and UGC regulations regarding anti-ragging measures.</li>
            <li><i className="fas fa-file-contract"></i> To obtain undertakings from students and parents regarding non-involvement in ragging activities.</li>
          </ul>
        </div>

        <div className="committee-contact-sidebar">
          <h3>Committee Head</h3>

          <div className="committee-member-card">
            <img
              src="/images/(Dr.) Sunita Goyal Rawat.jpg"
              alt="Prof. Sunita Rawat"
              className="member-photo"
              onError={(e) => e.target.src = "https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2F(Dr.)%20Sunita%20Goyal%20Rawat.jpg?alt=media&token=4c2571f6-5711-4c1a-95f8-3885907e22bc"}
            />
            <h4 className="member-name">Prof. Sunita Rawat</h4>
            <p className="member-title">Head, Anti-Ragging Committee</p>

            <div className="contact-item">
              <i className="fas fa-phone-alt contact-icon"></i>
              <a href="tel:+918058799002" className="contact-link">+91-8058799002</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <a href="mailto:anti.ragging@jeckukas.org.in" className="contact-link">anti.ragging@jeckukas.org.in</a>
            </div>
          </div>

          <h3>Report Ragging</h3>
          <p style={{ fontSize: '15px', color: '#555', marginBottom: '20px' }}>If you witness or experience ragging, please contact us immediately. Your identity will be protected.</p>

          <a href="tel:+918058799002" className="apply-btn btn-call">
            <i className="fas fa-phone-alt"></i> Call Helpline
          </a>
          <a href="mailto:anti.ragging@jeckukas.org.in" className="apply-btn btn-email">
            <i className="fas fa-envelope"></i> Email Us
          </a>
        </div>

      </div>

      <section className="committee-table-section">
        <div className="max-width-container">
          <h2>Anti-Ragging Committee Members</h2>
          <div className="committee-table-container">
            <table className="committee-table">
              <thead>
                <tr>
                  <th>Committee Type</th>
                  <th>Date of Appointment</th>
                  <th>Name of the Committee Member</th>
                  <th>Profession</th>
                  <th>Mobile Number</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Anti-ragging Committee</td><td>01/08/2024</td><td><strong>Mr. Sultan Singh Saini</strong></td><td>HOD CS</td><td>8058799049</td></tr>
                <tr><td>Anti-ragging Committee</td><td>01/08/2024</td><td><strong>Mr. Ankit Agarwal</strong></td><td>Asst. Prof. ME</td><td>9414987886</td></tr>
                <tr><td>Anti-ragging Committee</td><td>01/08/2024</td><td><strong>Ms. Priyanka Sharma</strong></td><td>Asst.Prof. Mathematics</td><td>9079330037</td></tr>
                <tr><td>Anti-ragging Committee</td><td>01/08/2024</td><td><strong>Mr. Deependra Khandelwal</strong></td><td>Asst.Prof.EC</td><td>9414857536</td></tr>
                <tr><td>Anti-ragging Committee</td><td>01/08/2024</td><td><strong>Prof. Sunita Rawat</strong></td><td>Professor</td><td>8058799002</td></tr>
                <tr><td>Anti-ragging Committee</td><td>01/08/2024</td><td><strong>Mr. Gori Shankar Sharma</strong></td><td>Assistant Professor</td><td>8875084185</td></tr>
                <tr><td>Anti-ragging Committee</td><td>01/08/2024</td><td><strong>Ms. Sonia Sharma</strong></td><td>Technical Assistant</td><td>8619038682</td></tr>
                <tr><td>Anti-ragging Committee</td><td>01/08/2024</td><td><strong>Mr. Darshan Singh</strong></td><td>Security Officer</td><td>8058799028</td></tr>
                <tr><td>Anti-ragging Committee</td><td>01/08/2024</td><td><strong>Mr. Vijendra Singh Jaduan</strong></td><td>Supervisor</td><td>8058799016</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <LogoCarousel />

    </div>
  );
}