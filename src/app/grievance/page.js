"use client";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '@/styles/GrievanceRedressal.css';
import LogoCarousel from '@/components/LogoCarousel'; // 1. Import Added

const GrievanceRedressal = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [subject, setSubject] = useState('');
    const [otherSubject, setOtherSubject] = useState('');

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
        if (e.target.value !== 'Other') {
            setOtherSubject('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            'service_f0m31fc',
            'template_tgh4b19',
            formRef.current,
            'CDeGu_vdhNgI9k8fB'
        )
            .then(() => {
                alert("Grievance Submitted Successfully!");
                setLoading(false);
                formRef.current.reset();
                setSubject('');
                setOtherSubject('');
            }, (error) => {
                console.error(error);
                alert("Failed to submit. Please check internet connection.");
                setLoading(false);
            });
    };

    return (
        <div className="grievance-container">
            {/* 2. Added Wrapper to stack Card and Carousel */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '60px', maxWidth: '800px' }}>
                
                <div className="grievance-card">
                    <h2>Grievance Redressal Form</h2>
                    <p className="grievance-subtitle">Submit your query or grievance to the administration.</p>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-section">
                            <input type="hidden" name="final_subject" value={subject === 'Other' ? `Other: ${otherSubject}` : subject} />

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="fullName" className="required">Name</label>
                                    <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fatherName" className="required">Father's Name</label>
                                    <input type="text" id="fatherName" name="fatherName" placeholder="Enter father's name" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="department" className="required">Department</label>
                                    <select id="department" name="department" defaultValue="" required>
                                        <option value="" disabled>Select Department</option>
                                        <option value="CSE">Computer Science & Engg (CSE)</option>
                                        <option value="IT">Information Technology (IT)</option>
                                        <option value="EE">Electrical Engineering (EE)</option>
                                        <option value="ECE">Electronics & Comm (ECE)</option>
                                        <option value="ME">Mechanical Engineering (ME)</option>
                                        <option value="CE">Civil Engineering (CE)</option>
                                        <option value="AI_DS">AI & Data Science</option>
                                        <option value="OTHER">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="rollNo" className="required">Roll No / ID / Aadhar No</label>
                                    <input type="text" id="rollNo" name="rollNo" placeholder="Enter identification number" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="contact" className="required">Contact Number</label>
                                    <input type="tel" id="contact" name="contact" placeholder="10-digit mobile number" pattern="[0-9]{10}" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user_email" className="required">Email Address</label>
                                    <input type="email" id="user_email" name="user_email" placeholder="Enter your email" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="required">Subject of Grievance/Query</label>
                                <select id="subject" name="subject" value={subject} onChange={handleSubjectChange} required>
                                    <option value="" disabled>Select Subject</option>
                                    <option value="Academics">Academics</option>
                                    <option value="Fees">Fees Related</option>
                                    <option value="Anti-Ragging">Anti-Ragging</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {subject === 'Other' && (
                                <div className="form-group">
                                    <label htmlFor="otherSubject" className="required">Specify Subject</label>
                                    <input type="text" id="otherSubject" name="otherSubject" value={otherSubject} onChange={(e) => setOtherSubject(e.target.value)} placeholder="Please mention the specific subject" required />
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="brief" className="required">Grievance/Query in brief</label>
                                <textarea id="brief" name="brief" placeholder="Describe your grievance or query in detail..." required></textarea>
                            </div>

                            <div className="disclaimer-group">
                                <input type="checkbox" id="disclaimer" name="disclaimer" required />
                                <label htmlFor="disclaimer">I certify that the information uploaded in this application is correct to the best of my Knowledge.</label>
                            </div>

                            <button type="submit" className="submit-btn" disabled={loading}>
                                {loading ? 'Submitting...' : 'Submit Grievance'}
                            </button>
                        </div>
                    </form>

                    <div className="note-section">
                        <strong><i className="fas fa-info-circle"></i> Note:</strong>
                        <ul>
                            <li>Submit separate forms in case you have more than one Grievance/Query.</li>
                            <li>The same grievance should not be submitted more than once.</li>
                            <li>This form is applicable for <strong>JEC Group of Colleges - Kukas</strong> only.</li>
                            <li>Grievances/Queries other than JEC Group of Colleges - Kukas will not be acceptable.</li>
                        </ul>
                    </div>
                </div>

                {/* 3. Added LogoCarousel Component */}
                <LogoCarousel />
                
            </div>
        </div>
    );
};

export default GrievanceRedressal;