"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import '@/styles/Highlights.css';

function Highlights() {
  const router = useRouter();

  return (
    <section className="highlights">
      <div className="highlights-content">
        <div className="highlight-cards">

          <div
            className="highlight-card"
            onClick={() => router.push('/admission/Admission-Open')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-graphic-top-blue"></div>
            <h3>360° Flexible Learning</h3>
            <p>Explore multiple disciplines with our flexible learning framework, allowing you to focus on your chosen branch of engineering.</p>
            <span className="card-arrow">→</span>
          </div>

          <div
            className="highlight-card"
            onClick={() => router.push('/placement')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-graphic-top-yellow"></div>
            <h3>Proactive Placement Cell</h3>
            <p>Benefit from our proactive placement cell, which ensures holistic student development and career success.</p>
            <span className="card-arrow">→</span>
          </div>

          <div
            className="highlight-card"
            onClick={() => router.push('/virtual-tour')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-graphic-top-pink"></div>
            <h3>360° Virtual Campus Tour</h3>
            <p>Experience our vibrant campus life from anywhere with the JEC 360° Virtual Campus Tour.</p>
            <span className="card-arrow">→</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Highlights;