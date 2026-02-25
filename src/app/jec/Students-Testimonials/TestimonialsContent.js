"use client";
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from '@/firebase';
import '@/styles/Testimonials.css';
import LogoCarousel from '@/components/LogoCarousel';



//  export const metadata = {
//   title: "Students Testimonials",
//   description: "Students Testimonials",
//   keywords: "Students Testimonials",
// };

// Sub-component for individual cards
const TestimonialCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const textToShow = isExpanded ? item.quote : item.quote.slice(0, maxLength);
  const shouldShowButton = item.quote.length > maxLength;

  return (
    <div className="t-card">
      <i className="fas fa-quote-left quote-icon"></i>
      <div className="quote-content-wrapper">
        <p className="quote-text">
          "{textToShow}{!isExpanded && shouldShowButton ? '...' : ''}"
        </p>
        {shouldShowButton && (
          <button onClick={toggleReadMore} className="read-more-btn">
            {isExpanded ? 'See Less' : 'See More'}
          </button>
        )}
      </div>

      <div className="student-info">
        <div className="student-avatar">
          {item.imageUrl ? (
            <img src={item.imageUrl} alt={item.name} />
          ) : (
            <i className="fas fa-user"></i>
          )}
        </div>
        <div className="student-details">
          <h4>{item.name}</h4>
          <p className="course">{item.course}</p>
          {item.placement && <div className="placement-badge">{item.placement}</div>}
          {item.salary && <div className="salary-badge"> {item.salary}</div>}
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(4);
      else setVisibleCount(100);
    };
    handleResize();

    const fetchTestimonials = async () => {
      try {
        const testimonialsRef = collection(db, "student_testimonials");
        const q = query(testimonialsRef, orderBy("order"));
        const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setTestimonials(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        // Even if error, stop loading so page renders
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  // --- FIX: REMOVED THE EARLY 'IF LOADING RETURN' BLOCK ---
  // Now the page renders fully, and we check loading only inside the grid section

  return (
    <div className="testimonials-page">

      {/* HERO SECTION - Always Visible */}
      <section className="testimonial-hero">
        <img src="/images/jec-building.jpeg" alt="Campus Building" className="t-hero-bg-img" />
        <div className="t-hero-overlay">
          <div className="max-width-container">
            <h1>Student Testimonials</h1>
            <p>Hear from our students and alumni about their journey at JEC.</p>
          </div>
        </div>
      </section>

      {/* GRID SECTION - Handles Loading State Internally */}
      <section className="testimonial-grid-section">
        <div className="max-width-container">

          {loading ? (
            // LOADING MESSAGE
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <h2>Loading Stories...</h2>
              <p>Please wait while we fetch the latest testimonials.</p>
            </div>
          ) : (
            // DATA GRID
            <>
              <div className="t-grid">
                {testimonials.slice(0, visibleCount).map((item) => (
                  <TestimonialCard key={item.id} item={item} />
                ))}

                {testimonials.length === 0 && (
                  <p style={{ textAlign: 'center', width: '100%', gridColumn: '1/-1' }}>
                    No testimonials found. Check your database connection.
                  </p>
                )}
              </div>

              {visibleCount < testimonials.length && (
                <div className="load-more-container">
                  <button onClick={handleShowMore} className="load-more-main-btn">
                    Show More Stories
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* --- LOGO CAROUSEL - NOW ALWAYS VISIBLE --- */}
      <LogoCarousel />

    </div>
  );
}