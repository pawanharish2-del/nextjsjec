"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [authState, setAuthState] = useState('loading'); // 'loading' | 'authenticated' | 'unauthenticated'

  useEffect(() => {
    // Firebase listener — fires immediately with cached credentials on first call
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState('authenticated');
      } else {
        setAuthState('unauthenticated');
        router.replace('/admin/login');
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [router]);

  // Show a full-screen loader while Firebase checks session
  if (authState === 'loading') {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f4f6f9',
        gap: '16px',
      }}>
        <div style={{
          width: '44px',
          height: '44px',
          border: '4px solid #e2e8f0',
          borderTop: '4px solid #0072C6',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
        <p style={{ color: '#64748b', fontSize: '15px', fontFamily: 'Poppins, sans-serif' }}>
          Verifying session...
        </p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // Don't render admin content while redirecting
  if (authState === 'unauthenticated') {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;