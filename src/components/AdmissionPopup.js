"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; 
import '@/styles/AdmissionPopup.css';

const AdmissionPopup = () => {
    const pathname = usePathname(); 
    const [show, setShow] = useState(true);

    useEffect(() => {
        // If we are on the home page...
        if (pathname === '/') {
            setShow(true); // <--- FIX: Force the popup to show again!

            const s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://widgets.in4.nopaperforms.com/emwgts.js";
            document.body.appendChild(s);

            return () => {
                if (document.body.contains(s)) {
                    document.body.removeChild(s);
                }
            };
        }
    }, [pathname]); // This runs every time the URL changes

    // If not home page OR user explicitly closed it (for this session on this page), hide it
    if (pathname !== '/') return null;
    if (!show) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={() => setShow(false)}>
                    &times;
                </button>
                <div className="npf_wgts" data-height="580px" data-w="c1073fe2350d112d90b129addc24e9ff"></div>
            </div>
        </div>
    );
};

export default AdmissionPopup;