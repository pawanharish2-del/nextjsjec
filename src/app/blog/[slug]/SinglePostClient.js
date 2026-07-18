"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation'; 
import Link from 'next/link'; 
// Removed firebase imports as fetching is now done on the server via REST API
import '@/styles/Blog.css';
import LogoCarousel from '@/components/LogoCarousel'; 

const SinglePostClient = ({ initialPost = null, initialRecentPosts = [] }) => {
    const params = useParams();
    const slug = params?.slug ? decodeURIComponent(params.slug) : null;

    const [post, setPost] = useState(initialPost);
    const [recentPosts, setRecentPosts] = useState(initialRecentPosts);
    const [loading, setLoading] = useState(false); // No loading state needed due to SSR

    const contentRef = useRef(null);

    // No client-side fetching on mount needed, as data is provided by SSR

    // Fix links automatically (Your original logic)
    useEffect(() => {
        if (post && contentRef.current) {
            const links = contentRef.current.querySelectorAll('a');
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href) {
                    if (!href.startsWith('http') && !href.startsWith('/') && !href.startsWith('#') && !href.startsWith('mailto:')) {
                        link.setAttribute('href', `https://${href}`);
                    }
                    if (!href.startsWith('/')) {
                        link.setAttribute('target', '_blank');
                        link.setAttribute('rel', 'noopener noreferrer');
                    }
                }
            });
        }
    }, [post]);

    if (loading) {
        return (
            <div className="blog-page-wrapper" style={{ padding: '100px', textAlign: 'center' }}>
                <div className="loading-spinner">Loading...</div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="blog-page-wrapper" style={{ padding: '100px', textAlign: 'center' }}>
                <div>Article not found.</div>
            </div>
        );
    }

    return (
        <div className="blog-page-wrapper">

            {/* Navigation */}
            <div style={{ background: '#1E293B', color: '#fff', padding: '10px 2rem', fontSize: '0.9rem' }}>
                <Link href="/blog" style={{ color: '#FCA311', textDecoration: 'none' }}> 
                    <i className="fas fa-arrow-left"></i> Back to Blog
                </Link>
            </div>

            <header className="article-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('${post.image}')` }}>
                <div className="hero-content">
                    <span className="post-badge">{post.category}</span>
                    <h1 className="article-title">{post.title}</h1>
                    <div className="post-meta">
                        <span><i className="fas fa-user-circle"></i> {post.author}</span>
                        <span><i className="fas fa-calendar-alt"></i> {post.date}</span>
                    </div>
                </div>
            </header>

            <div className="single-post-container">
                <article className="article-body">
                    <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            marginBottom: '30px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                        }}
                    />
                    <div
                        ref={contentRef}
                        className="dynamic-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                {/* Sidebar */}
                <aside className="blog-sidebar">
                    <div className="widget">
                        <h3 className="widget-title">Recent Posts</h3>
                        <ul className="recent-list">
                            {recentPosts.map(rp => (
                                <li key={rp.id}>
                                    <Link href={`/blog/${rp.slug || rp.id}`} className="recent-link">
                                        <img src={rp.image || "https://via.placeholder.com/60"} className="recent-thumb" alt={rp.title} />
                                        <div>
                                            <div className="recent-text">{rp.title}</div>
                                            <span className="recent-date">{rp.date}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>

             {/* Added LogoCarousel Here */}
             <LogoCarousel />
        </div>
    );
};

export default SinglePostClient;