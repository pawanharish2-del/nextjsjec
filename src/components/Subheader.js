"use client";
import React, { useState, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Fuse from 'fuse.js';
import '@/styles/Navigation.css';

// Full list of menu items
const menuData = [
    { name: "Home", link: "/" },
    // ... 
];

function Subheader() {
    // --- 1. SEARCH STATES ---
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [searchIndex, setSearchIndex] = useState([]);

    // UI States
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const inputRef = useRef(null);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // --- 2. LOAD SEARCH DATA ---
    useEffect(() => {
        fetch('/search.json')
            .then(res => res.json())
            .then(data => setSearchIndex(data))
            .catch(err => console.error("Search index missing."));
    }, []);

    // --- 3. HIGHLIGHTER LOGIC ---
    useEffect(() => {
        // Clear old highlights
        const marks = document.querySelectorAll('mark.jec-highlight');
        marks.forEach(m => {
            const parent = m.parentNode;
            if (parent) {
                parent.replaceChild(document.createTextNode(m.textContent), m);
                parent.normalize();
            }
        });

        // Check URL for ?highlight=word
        const highlightParam = searchParams.get('highlight');
        if (highlightParam && highlightParam.length > 2) {
            setTimeout(() => {
                highlightTextOnPage(highlightParam);

                // Remove ?highlight= from URL immediately so it doesn't persist on reload
                const cleanUrl = new URL(window.location.href);
                cleanUrl.searchParams.delete('highlight');
                window.history.replaceState({}, '', cleanUrl.toString());
            }, 500);
        }

        // Reset Menu on page change
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setIsSearchOpen(false);
        setQuery("");
        setResults([]);
    }, [pathname, searchParams]);

    // --- 4. HIGHLIGHT FUNCTION (FIXED: NUCLEAR BLOCK) ---
    const highlightTextOnPage = (searchText) => {
        const root = document.querySelector('main') || document.body;
        const terms = searchText.toLowerCase().split(' ').filter(t => t.length > 2);

        if (terms.length === 0) return;

        const walk = (node) => {
            // 1. BLOCK ENTIRE SECTIONS (Nuclear Option)
            // If the code sees these classes, it stops immediately.
            if (node.nodeType === 1 && (
                node.classList.contains('jec-master-header') ||
                node.classList.contains('jec-nav-wrapper') ||
                node.classList.contains('jec-top-bar')
            )) return;

            // 2. Text Node Matching
            if (node.nodeType === 3) {
                const text = node.textContent.toLowerCase();
                const matchedTerm = terms.find(term => text.includes(term));

                if (matchedTerm) {
                    // Double Safety: Check parents
                    if (node.parentElement && (
                        node.parentElement.closest('header') ||
                        node.parentElement.closest('nav') ||
                        node.parentElement.closest('.jec-nav-wrapper')
                    )) return;

                    const idx = text.indexOf(matchedTerm);
                    if (idx >= 0) {
                        const range = document.createRange();
                        range.setStart(node, idx);
                        range.setEnd(node, idx + matchedTerm.length);

                        const mark = document.createElement('mark');
                        mark.className = 'jec-highlight';
                        range.surroundContents(mark);
                        return true;
                    }
                }
            }
            // 3. TRAVERSAL (The Critical Fix)
            // We added 'HEADER' and 'NAV' here. The code will NOT enter them.
            else if (node.nodeType === 1 && node.childNodes && !['SCRIPT', 'STYLE', 'INPUT', 'TEXTAREA', 'MARK', 'HEADER', 'NAV', 'FOOTER'].includes(node.tagName)) {
                for (let i = 0; i < node.childNodes.length; i++) {
                    if (walk(node.childNodes[i])) break;
                }
            }
        };
        walk(root);

        // Scroll to match
        const first = document.querySelector('.jec-highlight');
        if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    // --- 5. SEARCH HANDLER ---
    const handleSearch = (e) => {
        const text = e.target.value;
        setQuery(text);

        if (!text || text.length < 2) {
            setResults([]);
            return;
        }

        const fuse = new Fuse(searchIndex, {
            keys: ['title', 'content'],
            threshold: 0.1, // Strict matching
            ignoreLocation: true,
            minMatchCharLength: 3
        });

        const matches = fuse.search(text);
        setResults(matches.map(m => m.item).slice(0, 8));
    };

    const toggleDropdown = (e, menuName) => {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            setActiveDropdown(activeDropdown === menuName ? null : menuName);
        }
    };

    return (
        <div className="jec-master-header">

            {/* --- TOP BLACK BAR --- */}
            <div className="jec-top-bar">
                <div className="jec-container jec-top-container">
                    <div className="jec-top-left">
                        <div className="jec-info-item">
                            <i className="fas fa-phone-alt"></i>
                            <a href="tel:+918875071333">+91-88750 71333 (30 lines)</a>
                        </div>
                        <div className="jec-info-item">
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:admission@jeckukas.org.in">admission@jeckukas.org.in</a>
                        </div>
                    </div>
                    <div className="jec-top-right">
                        <Link href="/admission-enquiry" className="jec-top-link"><i className="far fa-edit"></i> Admission Enquiry 2026</Link>
                        <Link href="/virtual-tour" className="jec-top-link"><i className="fas fa-vr-cardboard"></i> Virtual Tour</Link>
                        <Link href="/grievance" className="jec-top-link"><i className="fas fa-file-alt"></i> Grievance Form</Link>
                        <Link href="/blog" className="jec-top-link"><i className="fas fa-blog"></i> Blog</Link>
                        <Link href="/contact" className="jec-top-cta">CONTACT US</Link>
                    </div>
                </div>
            </div>

            {/* --- MAIN NAVIGATION --- */}
            <div className="jec-nav-wrapper">
                <header className="jec-header">
                    <div className="jec-container">

                        <Link href="/" className="jec-logo-link">
                            <img src="/JEC-LOGO.png" alt="JEC Logo" className="jec-logo-img" />
                        </Link>

                        <div className="jec-hamburger" onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                            setActiveDropdown(null);
                        }}>
                            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </div>

                        <ul className={`jec-menu-list ${isMobileMenuOpen ? 'jec-active' : ''}`}>
                            <li className="jec-menu-item"><Link href="/" className="jec-nav-link">Home</Link></li>

                            <li className={`jec-menu-item ${activeDropdown === 'jec' ? 'jec-open' : ''}`}>
                                <a href="#!" className="jec-nav-link" onClick={(e) => toggleDropdown(e, 'jec')}>JEC <i className="fas fa-chevron-down"></i></a>
                                <ul className={`jec-dropdown jec-mega jec-cols-3 ${activeDropdown === 'jec' ? 'jec-show' : ''}`}>
                                    <li><Link href="/jec/about-jec" className="jec-dropdown-link">About JEC</Link></li>
                                    <li><Link href="/jec/management" className="jec-dropdown-link">Management</Link></li>
                                    <li><Link href="/jec/network" className="jec-dropdown-link">Faculty</Link></li>
                                    <li><Link href="/jec/alumni" className="jec-dropdown-link">Alumni</Link></li>
                                    <li><Link href="/jec/Students-Testimonials" className="jec-dropdown-link">Students Testimonials</Link></li>
                                    <li><Link href="/jec/Anti-Ragging-Committee" className="jec-dropdown-link">Anti-Ragging Committee</Link></li>
                                    <li><Link href="/jec/Institution-Innovation-Council-JEC" className="jec-dropdown-link">Institution Innovation Council</Link></li>
                                    <li><Link href="/jec/JEC-FAQ" className="jec-dropdown-link">JEC FAQ</Link></li>
                                    <li><Link href="/jec/Employment-JEC" className="jec-dropdown-link">Employment @JEC</Link></li>
                                </ul>
                            </li>

                            <li className={`jec-menu-item ${activeDropdown === 'admission' ? 'jec-open' : ''}`}>
                                <a href="#!" className="jec-nav-link" onClick={(e) => toggleDropdown(e, 'admission')}>Admission <i className="fas fa-chevron-down"></i></a>
                                <ul className={`jec-dropdown jec-mega jec-cols-3 ${activeDropdown === 'admission' ? 'jec-show' : ''}`}>
                                    <li><Link href="/admission/Admission-Open" className="jec-dropdown-link">Admission Open 2026</Link></li>
                                    <li><Link href="/admission/Admission-Procedure" className="jec-dropdown-link">Admission Procedure</Link></li>
                                    <li><Link href="/admission/Fee-Structure" className="jec-dropdown-link">Fee Structure</Link></li>
                                    <li><Link href="/admission/Documents-Required" className="jec-dropdown-link">Documents Required</Link></li>
                                    <li><Link href="/admission/Courses-Offered" className="jec-dropdown-link">Courses Offered</Link></li>
                                    <li><Link href="/admission/REAP-2025" className="jec-dropdown-link">REAP-2025</Link></li>
                                    <li><Link href="/admission/Financial-Aids-Bank-Loans" className="jec-dropdown-link">Financial Aids & Loans</Link></li>
                                    <li><Link href="/admission/Mandatory-Disclosure" className="jec-dropdown-link">Mandatory Disclosure</Link></li>
                                    <li><Link href="/admission/karma" className="jec-dropdown-link">Skill Courses @JEC</Link></li>
                                </ul>
                            </li>

                            <li className={`jec-menu-item ${activeDropdown === 'dept' ? 'jec-open' : ''}`}>
                                <a href="#!" className="jec-nav-link" onClick={(e) => toggleDropdown(e, 'dept')}>Departments <i className="fas fa-chevron-down"></i></a>
                                <ul className={`jec-dropdown jec-mega jec-cols-3 ${activeDropdown === 'dept' ? 'jec-show' : ''}`}>
                                    <li><Link href="/department/Computer-Science-Engineering-AI" className="jec-dropdown-link">Computer Science & Eng. (AI)</Link></li>
                                    <li><Link href="/department/Computer-Science-Engineering" className="jec-dropdown-link">Computer Science Engineering</Link></li>
                                    <li><Link href="/department/Electronics-Communication-Engineering" className="jec-dropdown-link">Electronics & Communication</Link></li>
                                    <li><Link href="/department/Civil-Engineering" className="jec-dropdown-link">Civil Engineering</Link></li>
                                    <li><Link href="/department/Mechanical-Engineering" className="jec-dropdown-link">Mechanical Engineering</Link></li>
                                    <li><Link href="/department/Electrical-Engineering" className="jec-dropdown-link">Electrical Engineering</Link></li>
                                    <li><Link href="/department/Applied-Sciences-Humanities" className="jec-dropdown-link">Applied Sciences & Humanities</Link></li>
                                    <li><Link href="/department/Centre-Of-Excellence-COE" className="jec-dropdown-link">Centre Of Excellence (COE)</Link></li>
                                    <li><Link href="/department/JEC-Research-Cell" className="jec-dropdown-link">JEC Research Cell</Link></li>
                                    <li><Link href="/department/Engineering-JEC" className="jec-dropdown-link">Engineering @ JEC</Link></li>
                                    <li><Link href="/department/MOOCS-NPTEL-SWAYAM" className="jec-dropdown-link">MOOCS: NPTEL SWAYAM</Link></li>
                                    <li><Link href="/department/MTech" className="jec-dropdown-link">M.Tech Programs</Link></li>
                                </ul>
                            </li>

                            <li className="jec-menu-item"><Link href="/placement" className="jec-nav-link">Placement</Link></li>

                            <li className={`jec-menu-item ${activeDropdown === 'infra' ? 'jec-open' : ''}`}>
                                <a href="#!" className="jec-nav-link" onClick={(e) => toggleDropdown(e, 'infra')}>Infrastructure <i className="fas fa-chevron-down"></i></a>
                                <ul className={`jec-dropdown jec-mega jec-cols-2 ${activeDropdown === 'infra' ? 'jec-show' : ''}`}>
                                    <li><Link href="/Infrastructure/Learning-By-Doing" className="jec-dropdown-link">Learning By Doing</Link></li>
                                    <li><Link href="/Infrastructure/Prepare-and-Present" className="jec-dropdown-link">Prepare and Present</Link></li>
                                    <li><Link href="/Infrastructure/Refuel-and-Relax" className="jec-dropdown-link">Refuel and Relax</Link></li>
                                    <li><Link href="/Infrastructure/Convenience-and-Safety" className="jec-dropdown-link">Convenience and Safety</Link></li>
                                </ul>
                            </li>

                            <li className={`jec-menu-item ${activeDropdown === 'campus' ? 'jec-open' : ''}`}>
                                <a href="#!" className="jec-nav-link" onClick={(e) => toggleDropdown(e, 'campus')}>Campus Life <i className="fas fa-chevron-down"></i></a>
                                <ul className={`jec-dropdown jec-mega jec-cols-3 ${activeDropdown === 'campus' ? 'jec-show' : ''}`}>
                                    <li><Link href="/campus-life/academic-achievers" className="jec-dropdown-link">Academic Achievers</Link></li>
                                    <li><Link href="/campus-life/engineering-projects" className="jec-dropdown-link">Engineering Projects</Link></li>
                                    <li><Link href="/campus-life/games-and-sports" className="jec-dropdown-link">Games and Sports</Link></li>
                                    <li><Link href="/campus-life/guts-n-glory" className="jec-dropdown-link">Guts n Glory</Link></li>
                                    <li><Link href="/campus-life/committees-zone" className="jec-dropdown-link">Committees Zone</Link></li>
                                    <li><Link href="/campus-life/mental-health" className="jec-dropdown-link">Student Mental Health</Link></li>
                                    <li><Link href="/campus-life/students-corner" className="jec-dropdown-link">JEC Students Corner</Link></li>
                                    <li><Link href="/campus-life/image-gallery" className="jec-dropdown-link">Image Gallery</Link></li>
                                    <li><Link href="/campus-life/video-gallery" className="jec-dropdown-link">Video Gallery</Link></li>
                                </ul>
                            </li>

                            <li className={`jec-menu-item ${activeDropdown === 'society' ? 'jec-open' : ''}`}>
                                <a href="#!" className="jec-nav-link" onClick={(e) => toggleDropdown(e, 'society')}>Society <i className="fas fa-chevron-down"></i></a>
                                <ul className={`jec-dropdown jec-mega jec-cols-2 ${activeDropdown === 'society' ? 'jec-show' : ''}`}>
                                    <li><Link href="/Our-Society/Foundation-for-Better-Tomorrow" className="jec-dropdown-link">Foundation for Better Tomorrow</Link></li>
                                    <li><Link href="/Our-Society/Key-Teams-Functions" className="jec-dropdown-link">Key Teams & Functions</Link></li>
                                    <li><Link href="/Our-Society/Other-Institutes-Agrasen-College" className="jec-dropdown-link">Agrasen College</Link></li>
                                    <li><Link href="/Our-Society/Other-Institutes-Jaipur-College-of-Education-and-Science" className="jec-dropdown-link">Jaipur College of Ed & Sci</Link></li>
                                </ul>
                            </li>

                            <li className="jec-mobile-contact-wrapper">
                                <div className="jec-mobile-contact-info">
                                    <h4>GET IN TOUCH</h4>
                                    <div className="jec-contact-row">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>SP-43, RIICO Ind. Area, Kukas, Jaipur - 302028</span>
                                    </div>
                                    <div className="jec-contact-row">
                                        <i className="fas fa-phone-alt"></i>
                                        <a href="tel:+918875071333">+91-88750 71333</a>
                                    </div>
                                    <div className="jec-contact-row">
                                        <i className="fas fa-envelope"></i>
                                        <a href="mailto:admission@jeckukas.org.in">admission@jeckukas.org.in</a>
                                    </div>
                                </div>
                            </li>

                            <li className="jec-menu-item jec-desktop-search">
                                <div className={`jec-search-inline ${isSearchOpen ? 'active' : ''}`}>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        placeholder="Search JEC..."
                                        value={query}
                                        onChange={handleSearch}
                                        autoFocus={isSearchOpen}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsSearchOpen(!isSearchOpen);
                                            if (!isSearchOpen) setTimeout(() => inputRef.current?.focus(), 100);
                                        }}
                                    >
                                        <i className="fas fa-search"></i>
                                    </button>

                                    {isSearchOpen && query.length > 1 && (
                                        <div className="jec-search-modal">
                                            <div className="jec-modal-header">Found {results.length} results</div>
                                            <ul className="jec-results-list">
                                                {results.length === 0 ? (
                                                    <li style={{ padding: '15px', color: '#777' }}>No results found.</li>
                                                ) : (
                                                    results.map((res, idx) => (
                                                        <li key={idx}>
                                                            <Link href={`${res.path}?highlight=${encodeURIComponent(query)}`}>
                                                                <strong>{res.title}</strong>
                                                                <small>
                                                                    {res.content.substring(0, 60)}...
                                                                </small>
                                                            </Link>
                                                        </li>
                                                    ))
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </li>

                        </ul>
                    </div>
                </header>
            </div>

            <style jsx>{`
                :global(.jec-highlight) {
                    background-color: #FFFF00;
                    color: black;
                    padding: 0 2px;
                    border-radius: 2px;
                }
                .jec-search-modal {
                    position: absolute; top: 120%; right: 0; width: 320px;
                    background: white; border: 1px solid #ddd; border-radius: 6px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.15); overflow: hidden;
                    text-align: left;
                    z-index: 10001;
                }
                .jec-modal-header { background: #f8f9fa; padding: 8px 15px; font-weight: bold; border-bottom: 1px solid #eee; font-size: 12px; color: #555; }
                .jec-results-list { list-style: none; margin: 0; padding: 0; max-height: 350px; overflow-y: auto; }
                .jec-results-list li { border-bottom: 1px solid #f0f0f0; }
                .jec-results-list li a { display: block; padding: 12px 15px; text-decoration: none; color: #333; }
                .jec-results-list li a:hover { background: #f0f7ff; color: #007bff; }
                .jec-results-list strong { display: block; font-size: 14px; color: #0056b3; }
                .jec-results-list small { font-size: 11px; color: #666; display: block; margin-top: 2px; }
            `}</style>
        </div>
    );
}

export default Subheader;