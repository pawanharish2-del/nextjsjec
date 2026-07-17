"use client";
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Subheader from './Subheader';
import Footer from './Footer';

const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  // Manage admission popup visibility on route changes (SPA navigation)
  useEffect(() => {
    const popup = document.getElementById('admission-popup');
    if (!popup) return;

    if (pathname === '/') {
      popup.style.display = 'flex';
    } else {
      popup.style.display = 'none';
    }

    // Attach close button listener (React doesn't manage this raw HTML button)
    const closeBtn = document.getElementById('admission-close-btn');
    if (closeBtn) {
      closeBtn.onclick = () => {
        popup.style.display = 'none';
      };
    }
  }, [pathname]);

  return (
    <div id={isAdmin ? "admin-panel" : "public-site"}>

      {/* Only show Header if NOT on admin pages */}
      {!isAdmin && (
        <div className="sticky-header">
          <Subheader />
        </div>
      )}

      {children}

      {/* Only show Footer if NOT on admin pages */}
      {!isAdmin && <Footer />}

      {/* FORCE REMOVE WHITESPACE FOR ADMIN */}
      {isAdmin && (
        <style jsx global>{`
          body, html, #admin-panel {
            margin-top: 0 !important;
            padding-top: 0 !important;
            background-color: #f4f6f9;
          }
          main {
            margin-top: 0 !important;
          }
        `}</style>
      )}
    </div>
  );
};

export default ClientLayout;