"use client";
import React, { useEffect, useRef, useState } from 'react';
import '@/styles/Stats.css';

function StatBox({ number, label, isText = false, dataCount = null }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!dataCount) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const target = parseInt(dataCount);
          const duration = 2000;
          const increment = target / (duration / 16);
          let currentCount = 0;

          const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(currentCount));
            }
          }, 16);
          
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [dataCount]);

  return (
    <div className="stat-box" ref={ref}>
      {isText ? (
        <div className="stat-number stat-text">{number}</div>
      ) : (
        <div className="stat-number">
          {count}{number.replace(/[0-9]/g, '')}
        </div>
      )}
      <div className="stat-label">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="stats-content">
        <StatBox number="25+" label="Years of academic excellence" dataCount="25" />
        <StatBox number="AICTE" label="Approved and affiliated with RTU, Kota" isText />
        <StatBox number="100%" label="Placement support" dataCount="100" />
        <StatBox number="Active" label="Industry collaborations and MOUs" isText />
      </div>
      <div className="stats-disclaimer">
        Placement support includes resume building, mock interviews, and campus drives.
      </div>
    </section>
  );
}

export default Stats;