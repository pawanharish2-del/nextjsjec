"use client";
import React, { useEffect, useState } from 'react';
import { db } from '@/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import '@/styles/eventsandclub.css';
import LogoCarousel from '@/components/LogoCarousel';

const EventsAndClubsClient = ({ initialEvents }) => {
    const [events, setEvents] = useState(initialEvents || []);
    const [loading, setLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(3);



    // Initialize Scroll Reveal Animations
    useEffect(() => {
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.jec-events-reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [events, visibleCount]); // Re-run when new events load

    // Helper Functions for Dynamic Data
    const getEventStatus = (eventDate) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize today to midnight
        const eDate = new Date(eventDate);
        return eDate >= today ? 'Upcoming' : 'Completed';
    };

    const parseDate = (dateString) => {
        if (!dateString) return { day: '00', month: 'XXX' };
        const date = new Date(dateString);
        return {
            day: date.getDate().toString().padStart(2, '0'),
            month: date.toLocaleString('default', { month: 'short' }).toUpperCase()
        };
    };

    const getStyleForType = (type) => {
        switch (type) {
            case 'Competition':
                return { bg: 'bg-red-50', text: 'text-red-600', grad: 'from-red-600 to-red-500', icon: 'fa-laptop-code', hover: 'group-hover:bg-red-600', hoverText: 'group-hover:text-red-600' };
            case 'Seminar':
            case 'Guest Lecture':
                return { bg: 'bg-blue-50', text: 'text-blue-600', grad: 'from-blue-700 to-blue-600', icon: 'fa-brain', hover: 'group-hover:bg-blue-600', hoverText: 'group-hover:text-blue-600' };
            case 'Workshop':
            case 'Technical Workshop':
                return { bg: 'bg-orange-50', text: 'text-orange-500', grad: 'from-orange-500 to-amber-500', icon: 'fa-robot', hover: 'group-hover:bg-orange-500', hoverText: 'group-hover:text-orange-500' };
            default:
                return { bg: 'bg-purple-50', text: 'text-purple-600', grad: 'from-purple-700 to-indigo-600', icon: 'fa-flag-checkered', hover: 'group-hover:bg-purple-600', hoverText: 'group-hover:text-purple-600' };
        }
    };

    // Slice data for specific sections
    const highlights = events.slice(0, 4);
    const timelineEvents = events.slice(0, visibleCount);

    return (
        <div className="events-page-wrapper antialiased min-h-screen flex flex-col relative overflow-x-hidden">
            <main className="flex-grow">

                {/* HERO SECTION */}
                <section className="relative bg-jec-blue py-24 md:py-32 px-4 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-jec-red/10 blur-3xl"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0"></div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center relative z-10 jec-events-reveal">
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                            <p className="text-jec-red font-bold text-[11px] tracking-[0.25em] uppercase flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-jec-red mr-2 animate-pulse"></span>
                                Student Life Hub
                            </p>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight text-white leading-tight">
                            Events & Clubs <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">@ JEC</span>
                        </h1>

                        <p className="text-blue-100/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-16 font-light">
                            Discover communities tailored to your passions. We promote technical growth, creativity, leadership, and collaborative learning.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8 border-t border-white/10 max-w-3xl mx-auto bg-white/5 rounded-3xl p-8 backdrop-blur-md">
                            <div className="text-center group">
                                <div className="text-5xl font-black text-jec-red mb-2 transition-transform duration-300 group-hover:scale-110">3</div>
                                <div className="text-xs font-semibold tracking-widest uppercase text-blue-200/80">Active Clubs</div>
                            </div>
                            <div className="text-center group md:border-l md:border-r border-white/10">
                                <div className="text-5xl font-black text-jec-red mb-2 transition-transform duration-300 group-hover:scale-110">50<span className="text-3xl text-blue-200">+</span></div>
                                <div className="text-xs font-semibold tracking-widest uppercase text-blue-200/80">Annual Events</div>
                            </div>
                            <div className="text-center group">
                                <div className="text-5xl font-black text-jec-red mb-2 transition-transform duration-300 group-hover:scale-110">1k<span className="text-3xl text-blue-200">+</span></div>
                                <div className="text-xs font-semibold tracking-widest uppercase text-blue-200/80">Student Participation</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATIC FEATURED CLUBS SECTION */}
                <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-20 jec-events-reveal">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-jec-blue jec-events-section-title">Featured Student Clubs</h2>
                        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-base leading-relaxed">
                            Join a community of like-minded peers. Our clubs are designed to help you build practical skills, network with experts, and innovate.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* Coder's Cafe */}
                        <div className="flex flex-col lg:flex-row bg-white rounded-[2rem] shadow-soft hover:shadow-hover transition-shadow duration-300 border border-gray-100 overflow-hidden jec-events-reveal">
                            <div className="w-full lg:w-[42%] bg-[#0a0a0a] text-white p-10 md:p-12 flex flex-col justify-end min-h-[360px] relative group overflow-hidden" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/Coders%20cafe.jpeg?alt=media&token=c4aa1a02-cece-4345-9c53-b1c9a290dd4c')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/30 z-10"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10"></div>
                                <div className="relative z-20 mt-auto transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                                    <div className="w-14 h-14 bg-gradient-to-br from-red-900 to-red-700 border border-red-500/30 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-red-900/20 backdrop-blur-sm">
                                        <i className="fa-solid fa-code text-white text-2xl"></i>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Coder's Cafe</h3>
                                    <div className="flex items-center space-x-2">
                                        <span className="w-8 h-px bg-jec-light"></span>
                                        <p className="text-xs font-bold tracking-[0.2em] text-gray-300 uppercase">Software & Algo</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-[58%] p-8 md:p-12 lg:p-14 flex flex-col justify-center relative">
                                <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed mb-6 relative z-10 italic">
                                    "A dedicated community for programming enthusiasts to enhance problem-solving skills, learn modern frameworks, and prepare for high-stakes technical competitions."
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 rounded-lg">Competitive Coding</span>
                                    <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 rounded-lg">Data Structures</span>
                                    <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 rounded-lg">Hackathons</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                                    <div>
                                        <div className="flex items-center" style={{ marginBottom: '6px' }}>
                                            <i className="fa-solid fa-user-tie" style={{ color: '#0072C6', fontSize: '14px', marginRight: '8px' }}></i>
                                            <h4 className="font-bold text-gray-900 text-xs tracking-wider uppercase m-0">Coordinator</h4>
                                        </div>

                                        <div style={{ paddingLeft: '22px' }}>
                                            {/* Added 4px bottom margin here */}
                                            <p style={{ margin: '0 0 4px 0', padding: '0', fontSize: '14px', fontWeight: 'bold', color: '#1e293b', lineHeight: '1.2' }}>
                                                Ms. Appurva Sharma
                                            </p>
                                            {/* Added 4px bottom margin here */}
                                            <p style={{ margin: '0 0 4px 0', padding: '0', fontSize: '12px', color: '#64748b', lineHeight: '1.2' }}>
                                                Dpt. of Computer Science
                                            </p>
                                            <a href="mailto:appurvasharma@jeckukas.org.in" style={{ margin: '0', padding: '0', fontSize: '12px', color: '#0072C6', lineHeight: '1.2', display: 'block', textDecoration: 'none' }}>
                                                appurvasharma@jeckukas.org.in
                                            </a>
                                        </div>
                                    </div>
                                    {/* Outcomes Section */}
                                    <div>
                                        <div className="flex items-center mb-1.5" style={{ marginLeft: '-22px' }}>
                                            {/* Using inline style to guarantee the red color */}
                                            <i className="fa-solid fa-bullseye mr-2" style={{ color: '#ef4444', fontSize: '14px' }}></i>
                                            <h4 className="font-bold text-gray-900 text-xs tracking-wider uppercase m-0">Outcomes</h4>
                                        </div>

                                        <p className="text-gray-600 text-sm m-0 leading-snug">
                                            Algorithmic thinking, technical interview readiness, full-stack awareness.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Creation Club */}
                        <div className="flex flex-col lg:flex-row-reverse bg-white rounded-[2rem] shadow-soft hover:shadow-hover transition-shadow duration-300 border border-gray-100 overflow-hidden jec-events-reveal">
                            <div className="w-full lg:w-[42%] bg-[#080f1e] text-white p-10 md:p-12 flex flex-col justify-end min-h-[360px] relative group overflow-hidden" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/Creation%20Club.jpeg?alt=media&token=6a6fd565-8f9e-4b69-97f2-becc5fe19e28')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/30 z-10"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e] via-[#080f1e]/70 to-transparent z-10"></div>
                                <div className="relative z-20 mt-auto transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#8b5a2b] to-[#5c3a19] border border-[#a67b54]/50 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-[#8b5a2b]/20 backdrop-blur-sm">
                                        <i className="fa-solid fa-camera-retro text-white text-2xl"></i>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Creation Club</h3>
                                    <div className="flex items-center space-x-2">
                                        <span className="w-8 h-px bg-[#d29b68]"></span>
                                        <p className="text-xs font-bold tracking-[0.2em] text-gray-300 uppercase">Media & Events</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-[58%] p-8 md:p-12 lg:p-14 flex flex-col justify-center relative">
                                <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed mb-6 relative z-10 italic">
                                    "Focused on fostering creativity, storytelling, and event experiences through photography, videography, stage management, and dynamic creative collaborations."
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 rounded-lg">Photography & Videography</span>
                                    <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 rounded-lg">Event Management</span>
                                    <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 rounded-lg">Decoration & Creative Design</span>
                                    <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 rounded-lg">Anchoring & Public Speaking</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                                    {/* Coordinator Section */}
                                    <div>
                                        <div className="flex items-center" style={{ marginBottom: '6px' }}>
                                            <i className="fa-solid fa-user-tie" style={{ color: '#0072C6', fontSize: '14px', marginRight: '8px' }}></i>
                                            <h4 className="font-bold text-gray-900 text-xs tracking-wider uppercase m-0">Coordinator</h4>
                                        </div>

                                        <div style={{ paddingLeft: '22px' }}>
                                            {/* Added 4px bottom margin here */}
                                            <p style={{ margin: '0 0 4px 0', padding: '0', fontSize: '14px', fontWeight: 'bold', color: '#1e293b', lineHeight: '1.2' }}>
                                                Mr. Lakshya Saraogi
                                            </p>
                                            {/* Added 4px bottom margin here */}
                                            <p style={{ margin: '0 0 4px 0', padding: '0', fontSize: '12px', color: '#64748b', lineHeight: '1.2' }}>
                                                Director of Branding & Marketing
                                            </p>
                                            <a href="mailto:Director.marketing@jeckukas.org.in" style={{ margin: '0', padding: '0', fontSize: '12px', color: '#0072C6', lineHeight: '1.2', display: 'block', textDecoration: 'none' }}>
                                                Director.marketing@jeckukas.org.in
                                            </a>
                                        </div>
                                    </div>
                                    {/* Outcomes Section */}
                                    <div>
                                        <div className="flex items-center mb-1.5" style={{ marginLeft: '-22px' }}>
                                            {/* Using inline style to guarantee the red color */}
                                            <i className="fa-solid fa-bullseye mr-2" style={{ color: '#ef4444', fontSize: '14px' }}></i>
                                            <h4 className="font-bold text-gray-900 text-xs tracking-wider uppercase m-0">Outcomes</h4>
                                        </div>

                                        <p className="text-gray-600 text-sm m-0 leading-snug">
                                            Creative content production, event execution skills, team collaboration, and communication confidence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* E-Cell JEC */}
                        <div className="flex flex-col lg:flex-row bg-white rounded-[2rem] shadow-soft hover:shadow-hover transition-shadow duration-300 border border-gray-100 overflow-hidden jec-events-reveal">
                            <div className="w-full lg:w-[42%] bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] text-white p-10 md:p-12 flex flex-col justify-end min-h-[360px] relative group overflow-hidden" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/Ecell.jpg?alt=media&token=ef5f35f2-881a-4b2a-bd60-856e18f2677e')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="absolute inset-0 bg-blue-900/50 transition-colors duration-500 group-hover:bg-blue-900/30 z-10"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent z-10"></div>
                                <div className="relative z-20 mt-auto transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-400/30 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-900/40 backdrop-blur-sm">
                                        <i className="fa-regular fa-lightbulb text-white text-2xl"></i>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">E-Cell JEC</h3>
                                    <div className="flex items-center space-x-2">
                                        <span className="w-8 h-px bg-blue-300"></span>
                                        <p className="text-xs font-bold tracking-[0.2em] text-blue-200 uppercase">Business & Innovation</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-[58%] p-8 md:p-12 lg:p-14 flex flex-col justify-center relative">
                                <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed mb-6 relative z-10 italic">
                                    "Dedicated to fostering an entrepreneurial mindset on campus, supporting student-led startups from ideation to incubation, and connecting founders."
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 rounded-lg">B-Plan Contests</span>
                                    <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 rounded-lg">Founder Talks</span>
                                    <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 rounded-lg">Incubation Support</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                                    {/* Coordinator Section */}
                                    <div>
                                        <div className="flex items-center" style={{ marginBottom: '6px' }}>
                                            <i className="fa-solid fa-user-tie" style={{ color: '#0072C6', fontSize: '14px', marginRight: '8px' }}></i>
                                            <h4 className="font-bold text-gray-900 text-xs tracking-wider uppercase m-0">Coordinator</h4>
                                        </div>

                                        <div style={{ paddingLeft: '22px' }}>
                                            {/* Added 4px bottom margin here */}
                                            <p style={{ margin: '0 0 4px 0', padding: '0', fontSize: '14px', fontWeight: 'bold', color: '#1e293b', lineHeight: '1.2' }}>
                                                Mr. Inesh Saraogi
                                            </p>
                                            {/* Added 4px bottom margin here */}
                                            <p style={{ margin: '0 0 4px 0', padding: '0', fontSize: '12px', color: '#64748b', lineHeight: '1.2' }}>
                                                Director of Student Affairs
                                            </p>
                                            <a href="mailto:ineshsaraogi@jeckukas.org.in" style={{ margin: '0', padding: '0', fontSize: '12px', color: '#0072C6', lineHeight: '1.2', display: 'block', textDecoration: 'none' }}>
                                                ineshsaraogi@jeckukas.org.in
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        {/* Added style with negative left margin to pull heading and icon to the left */}
                                        <div className="flex items-center mb-1.5" style={{ marginLeft: '-22px' }}>
                                            {/* Using inline style to guarantee the red color */}
                                            <i className="fa-solid fa-bullseye mr-2" style={{ color: '#ef4444', fontSize: '14px' }}></i>
                                            <h4 className="font-bold text-gray-900 text-xs tracking-wider uppercase m-0">Outcomes</h4>
                                        </div>

                                        <p className="text-gray-600 text-sm m-0 leading-snug">
                                            Business planning, pitching skills, market analysis, financial literacy, leadership.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DYNAMIC EVENTS HIGHLIGHTS (Top 4) */}
                <section className="py-24 bg-white border-y border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 transform origin-top-right z-0"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 jec-events-reveal">
                            <div className="max-w-2xl">
                                <div className="flex items-center space-x-3 mb-3">
                                    <span className="w-8 h-1 bg-jec-red rounded-full"></span>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-jec-blue tracking-tight">Events Highlights</h2>
                                </div>
                                <p className="text-gray-500 text-base md:text-lg pl-11">A curated selection of major academic and extracurricular activities providing practical exposure.</p>
                            </div>
                        </div>

                        {loading ? (
                            <p className="text-center text-gray-500">Loading newest events...</p>
                        ) : highlights.length === 0 ? (
                            <p className="text-center text-gray-500">No events found. Check back later!</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                                {highlights.map((event, index) => {
                                    const style = getStyleForType(event.type);
                                    return (
                                        <div key={event.id} className="bg-white rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100 p-8 relative group cursor-pointer jec-events-reveal flex flex-col h-full hover:-translate-y-1" style={{ transitionDelay: `${index * 100}ms` }}>

                                            <div className="absolute top-0 right-8 transform -translate-y-1/2 group-hover:-translate-y-2 transition-transform duration-300">
                                                {/* Explicitly using inline styles to completely bypass Tailwind template literal processing bugs */}
                                                <span
                                                    style={{
                                                        background: event.type === 'Competition' ? 'linear-gradient(to right, #dc2626, #ef4444)' :
                                                            event.type === 'Seminar' || event.type === 'Guest Lecture' ? 'linear-gradient(to right, #1d4ed8, #2563eb)' :
                                                                event.type === 'Workshop' || event.type === 'Technical Workshop' ? 'linear-gradient(to right, #f97316, #f59e0b)' :
                                                                    'linear-gradient(to right, #7e22ce, #4f46e5)',
                                                        color: '#ffffff',
                                                        fontSize: '10px',
                                                        fontWeight: 'bold',
                                                        padding: '6px 16px',
                                                        borderRadius: '9999px',
                                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                                        letterSpacing: '0.1em',
                                                        textTransform: 'uppercase',
                                                        display: 'inline-block'
                                                    }}
                                                >
                                                    {event.type}
                                                </span>
                                            </div>

                                            <div className={`w-12 h-12 rounded-xl ${style.bg} flex items-center justify-center ${style.text} mb-6 group-hover:scale-110 ${style.hover} group-hover:text-white transition-all duration-300`}>
                                                <i className={`fa-solid ${style.icon} text-xl`}></i>
                                            </div>

                                            <h3 className={`font-bold text-xl text-gray-900 mb-4 ${style.hoverText} transition-colors line-clamp-2`}>{event.title}</h3>
                                            <p className="text-gray-500 text-sm mb-8 leading-relaxed flex-grow">{event.description}</p>

                                            <div className="space-y-3 pt-6 border-t border-gray-100 text-sm text-gray-600 font-medium">
                                                <div className="flex items-center">
                                                    <i className="fa-regular fa-calendar text-gray-400 w-6"></i>
                                                    <span className="font-semibold text-gray-700">{event.displayDate}</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <i className="fa-solid fa-location-dot text-gray-400 w-6 mt-1"></i>
                                                    <span className="leading-tight">{event.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </section>

                {/* DYNAMIC EVENT TIMELINE (With Load More) */}
                <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16 jec-events-reveal">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-jec-blue jec-events-section-title">Event Timeline</h2>
                        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-base">Track the pulse of the campus with upcoming and past activities.</p>
                    </div>

                    <div className="relative jec-events-timeline-line space-y-8 pl-12 md:pl-16 ml-2 md:ml-10">
                        {timelineEvents.map((event) => {
                            const status = getEventStatus(event.date);
                            const dateObj = parseDate(event.date);
                            const isUpcoming = status === 'Upcoming';

                            return (
                                <div key={event.id} className={`relative jec-events-reveal transform transition-transform ${isUpcoming ? 'hover:-translate-y-1' : 'opacity-80 hover:opacity-100'}`}>

                                    {/* Timeline Node Dot */}
                                    {isUpcoming ? (
                                        <div className="absolute -left-[45px] md:-left-[61px] top-6 w-[22px] h-[22px] rounded-full bg-jec-red border-[4px] border-white shadow-md z-10">
                                            <div className="absolute inset-0 rounded-full bg-jec-red animate-ping opacity-75"></div>
                                        </div>
                                    ) : (
                                        <div className="absolute -left-[43px] md:-left-[59px] top-6 w-[18px] h-[18px] rounded-full bg-slate-300 border-[4px] border-white shadow-sm z-10"></div>
                                    )}

                                    {/* Event Card */}
                                    <div className={`flex flex-col md:flex-row bg-white rounded-2xl border border-gray-100 overflow-hidden group ${isUpcoming ? 'shadow-soft hover:shadow-hover' : 'shadow-sm hover:shadow-soft'}`}>

                                        {/* Date Block */}
                                        <div className={`md:w-40 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col items-center justify-center py-6 ${isUpcoming ? 'bg-gradient-to-b from-red-50/50 to-transparent' : 'bg-slate-50/50'}`}>
                                            <span className={`text-5xl font-black ${isUpcoming ? 'text-jec-blue' : 'text-slate-400'}`}>{dateObj.day}</span>
                                            <span className={`text-sm font-bold tracking-[0.2em] mt-1 ${isUpcoming ? 'text-jec-red' : 'text-slate-400'}`}>{dateObj.month}</span>
                                        </div>

                                        {/* Content Block */}
                                        <div className="p-6 md:p-8 flex-grow">
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-3">
                                                <h3 className={`font-bold text-xl md:text-2xl ${isUpcoming ? 'text-gray-900 group-hover:text-jec-blue transition-colors' : 'text-gray-800'}`}>
                                                    {event.title}
                                                </h3>

                                                {/* Status Badge */}
                                                <span className={`text-[10px] font-bold px-3 py-1.5 rounded-md border self-start uppercase tracking-widest whitespace-nowrap ${isUpcoming ? 'bg-red-50 text-jec-red border-red-100' : 'bg-slate-100 text-slate-500 border-slate-200'}`}>
                                                    {status}
                                                </span>
                                            </div>

                                            {event.description && (
                                                <p className="text-gray-500 text-sm mb-4 leading-relaxed max-w-2xl">{event.description}</p>
                                            )}

                                            <div className="flex flex-wrap gap-y-3 gap-x-8 text-sm font-medium text-slate-500 mt-4">
                                                <div className="flex items-center"><i className="fa-regular fa-clock w-5 opacity-60"></i> {event.time}</div>
                                                <div className="flex items-center"><i className="fa-solid fa-location-dot w-5 opacity-60"></i> {event.location}</div>
                                                <div className="flex items-center"><i className="fa-solid fa-tags w-5 opacity-60"></i> {event.type}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Load More Button */}
                    {visibleCount < events.length && (
                        <div className="text-center mt-12 jec-events-reveal">
                            <button onClick={() => setVisibleCount(prev => prev + 5)} className="px-8 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold text-jec-blue hover:bg-gray-50 hover:shadow-md transition-all shadow-sm">
                                Load More Events <i className="fa-solid fa-angle-down ml-2"></i>
                            </button>
                        </div>
                    )}
                </section>

                {/* BOTTOM QUOTE SECTION */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 jec-events-reveal">
                    <div className="bg-gradient-to-br from-jec-blue to-[#0a1931] rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-jec-red/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                        <i className="fa-solid fa-quote-left text-4xl md:text-5xl text-white/10 mb-6 inline-block relative z-10"></i>
                        <p className="text-xl md:text-2xl font-light italic text-blue-50 leading-relaxed max-w-3xl mx-auto relative z-10">
                            "Through specialized clubs and curated events, JEC encourages holistic development by combining rigorous academics with leadership, technical excellence, and vibrant community engagement."
                        </p>
                        <div className="mt-8 pt-8 border-t border-white/10 max-w-xs mx-auto relative z-10">
                            <p className="text-white font-bold tracking-wide">Dean of Student Affairs</p>
                            <p className="text-blue-300 text-sm mt-1">Jaipur Engineering College</p>
                        </div>
                    </div>
                </section>
            </main>
            <LogoCarousel />
        </div>
    );
};

export default EventsAndClubsClient;