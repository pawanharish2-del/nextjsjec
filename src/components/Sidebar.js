'use client'; // Required for useState and event listeners

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure icons are loaded
import '@/styles/Sidebar.css';

function Sidebar() {
    const [hoveredItem, setHoveredItem] = useState(null);

    const pathname = usePathname();

    // Close sidebar when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (window.innerWidth <= 768 && hoveredItem && !event.target.closest('.college-side-bar')) {
                setHoveredItem(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [hoveredItem]);

    // Check if the current route is an admin page
    if (pathname && pathname.startsWith('/admin')) {
        return null;
    }

    const menuLinks = [
        { id: 'helpline', icon: 'fas fa-phone', label: 'Helpline', path: 'tel:+918875071333' },
        { id: 'brochure', icon: 'fas fa-book-open', label: 'Brochure', path: '/brocher.pdf' },
        { id: 'admissions', icon: 'fas fa-user-graduate', label: 'Admissions', path: 'https://admission.jeckukas.org.in/' },
        { id: 'events', icon: 'fas fa-calendar-alt', label: 'Events', path: '/jec/alumni' },
        { id: 'whatsapp', icon: 'fab fa-whatsapp', label: 'WhatsApp', path: 'https://api.whatsapp.com/send/?phone=918058799017&text&type=phone_number&app_absent=0' },
    ];

    return (
        <div className="college-side-bar">
            {menuLinks.map((link) => (
                <a
                    key={link.id}
                    href={link.path}
                    className={`${link.id} ${hoveredItem === link.id ? 'active' : ''}`}
                    onMouseEnter={() => {
                        if (window.innerWidth > 768) setHoveredItem(link.id);
                    }}
                    onMouseLeave={() => {
                        if (window.innerWidth > 768) setHoveredItem(null);
                    }}
                    onClick={(e) => {
                        // On mobile, first tap expands, second tap navigates
                        if (typeof window !== 'undefined' && window.innerWidth <= 768 && hoveredItem !== link.id) {
                            e.preventDefault();
                            setHoveredItem(link.id);
                        }
                    }}
                    target={['whatsapp', 'brochure', 'admissions'].includes(link.id) ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                >
                    <i className={link.icon}></i>
                    <span>{link.label}</span>
                </a>
            ))}
        </div>
    );
}

export default Sidebar;