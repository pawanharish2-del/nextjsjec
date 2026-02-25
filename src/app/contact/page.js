"use client";
import React from 'react';
import '@/styles/Contact.css'; // Import the CSS file
import LogoCarousel from '@/components/LogoCarousel'; // Import the Carousel

export default function Contact() {
  return (
    <div className="contact-page-v4">
      {/* Hero Section */}
      <section className="contact-header-section">
        <div className="max-width-container">
          <h1>Get In Touch with JEC</h1>
          <p>Thank you for exploring Jaipur Engineering College, Kukas. We would love to answer any questions you have, and be of service in any way we can.</p>
        </div>
      </section>
      
      {/* Address Bar */}
      <section className="address-bar">
        Jaipur Engineering College (JEC) Main Campus: SP - 43, RIICO Industrial Area, Delhi Road, Kukas, Jaipur - 302028, India
      </section>

      <div className="max-width-container main-contact-grid">
        
        {/* Professional Directory Box */}
        <div className="directory-box">
            <div className="directory-address">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                    <h3>Campus Address</h3>
                    <p>SP-43, RIICO Industrial Area, Delhi Road, Kukas, Jaipur - 302028, India</p>
                </div>
            </div>

            <div className="directory-list">
                {/* Admission Cell */}
                <div className="directory-item">
                    <span className="dept-title">Admission Cell</span>
                    <div className="dept-details">
                        <div className="dept-phone">
                            <i className="fas fa-phone-alt"></i> +91-88750 71333 (30 lines Admissions)
                        </div>
                        <a href="mailto:admission@jeckukas.org.in" className="dept-email">
                          <i className="fas fa-envelope"></i> admission@jeckukas.org.in
                        </a>
                    </div>
                </div>

                {/* General Enquiry */}
                <div className="directory-item">
                    <span className="dept-title">General Enquiry</span>
                    <div className="dept-details">
                        <div className="dept-phone">
                            <i className="fas fa-phone-alt"></i> +91-96940 98821
                        </div>
                        <a href="mailto:info@jeckukas.org.in" className="dept-email">
                          <i className="fas fa-envelope"></i> info@jeckukas.org.in
                        </a>
                    </div>
                </div>

                {/* Training & Placement */}
                <div className="directory-item">
                    <span className="dept-title">Training & Placement</span>
                    <div className="dept-details">
                        <div className="dept-phone">
                            <i className="fas fa-phone-alt"></i> +91-80587 99027
                        </div>
                        <a href="mailto:trainingandplacement@jeckukas.org.in" className="dept-email">
                          <i className="fas fa-envelope"></i> trainingandplacement@jeckukas.org.in
                        </a>
                    </div>
                </div>

                {/* Exam & Verification */}
                <div className="directory-item">
                    <span className="dept-title">Exam & Verification</span>
                    <div className="dept-details">
                        <div className="dept-phone">
                            <i className="fas fa-phone-alt"></i> +91-80587 99002
                        </div>
                        <a href="mailto:examinations.jec@gmail.com" className="dept-email">
                          <i className="fas fa-envelope"></i> examinations.jec@gmail.com
                        </a>
                    </div>
                </div>

                {/* Director's Office */}
                <div className="directory-item">
                    <span className="dept-title">Director's Office</span>
                    <div className="dept-details">
                        <div className="dept-phone">
                            <i className="fas fa-phone-alt"></i> +91-80587 99013
                        </div>
                        <a href="mailto:principal@jeckukas.org.in" className="dept-email">
                          <i className="fas fa-envelope"></i> principal@jeckukas.org.in
                        </a>
                    </div>
                </div>

                {/* Delhi Liaison Office */}
                <div className="directory-item">
                    <span className="dept-title">Delhi Liaison Office</span>
                    <div className="dept-address-line">
                        <i className="fas fa-map-marker-alt" style={{color: 'var(--logo-red)', marginTop: '3px'}}></i>
                        <span>401, Akashdeep, Barakhamba road, New Delhi</span>
                    </div>
                    <div className="dept-details">
                        <div className="dept-phone">
                            <i className="fas fa-phone-alt"></i> +91-98290 67091
                        </div>
                        <a href="mailto:lalitkumarsaraogi@jeckukas.org.in" className="dept-email">
                          <i className="fas fa-envelope"></i> lalitkumarsaraogi@jeckukas.org.in
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Inquiry Form */}
        <div className="form-card">
            <form action="#" method="POST">
                <h3>Send Your Inquiry</h3>
                <div className="form-group">
                    <input type="text" id="name" name="Name" required placeholder="Name" />
                </div>
                <div className="form-group">
                    <input type="email" id="email" name="Email" required placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="tel" id="contact" name="Contact Number" required placeholder="Contact Number" />
                </div>
                <div className="form-group">
                    <textarea id="message" name="Message" rows="5" required placeholder="Message"></textarea>
                </div>
                <button type="submit" className="send-btn">SEND</button>
            </form>
            <p className="disclaimer">By submitting this data to Jaipur Engineering College you are authorising us to hold your details for us to respond to your submission. Jaipur Engineering College will not pass this information onto any third parties.</p>
        </div>
      </div>

      {/* Map Section */}
      <section className="map-section">
        <div className="max-width-container">
            <h2>Find Us on the Map</h2>
            <div className="google-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.068551259951!2d75.8948747!3d27.027999699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396daff9724b0af1%3A0x5c4f01d43902fe9a!2sJaipur%20Engineering%20College!5e0!3m2!1sen!2sin!4v1763027051599!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location of Jaipur Engineering College">
                </iframe>
            </div>
        </div>
      </section>

      {/* Added LogoCarousel Here */}
      <LogoCarousel />

    </div>
  );
}