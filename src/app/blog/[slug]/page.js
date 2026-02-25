"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation'; 
import Link from 'next/link'; 
import { db } from '@/firebase';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import '@/styles/Blog.css';
import LogoCarousel from '@/components/LogoCarousel'; 

const SinglePost = () => {
    const params = useParams();
    // Decode the slug to handle spaces/special characters (e.g., "my%20blog" -> "my blog")
    const slug = params?.slug ? decodeURIComponent(params.slug) : null;

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const contentRef = useRef(null);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return;
            setLoading(true);
            
            try {
                let foundPost = null;

                // STRATEGY 1: Exact Slug Match (Preferred)
                // This finds posts where the 'slug' field matches the URL exactly.
                const q = query(collection(db, "blog_posts"), where("slug", "==", slug));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const docData = querySnapshot.docs[0];
                    foundPost = { id: docData.id, ...docData.data() };
                } else {
                    // STRATEGY 2: Case-Insensitive Slug Match
                    // If URL is "My-Post" but DB has "my-post", this finds it.
                    const qLower = query(collection(db, "blog_posts"), where("slug", "==", slug.toLowerCase()));
                    const querySnapshotLower = await getDocs(qLower);

                    if (!querySnapshotLower.empty) {
                        const docData = querySnapshotLower.docs[0];
                        foundPost = { id: docData.id, ...docData.data() };
                    } else {
                        // STRATEGY 3: Document ID Match (Fallback for old blogs)
                        // This checks if the URL is actually a Document ID (e.g., "8f6278...")
                        try {
                            const docRef = doc(db, "blog_posts", slug);
                            const docSnap = await getDoc(docRef);
                            if (docSnap.exists()) {
                                foundPost = { id: docSnap.id, ...docSnap.data() };
                            }
                        } catch (e) {
                            // Not a valid ID format, ignore error
                        }
                    }
                }

                setPost(foundPost);
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

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
            </div>

             {/* Added LogoCarousel Here */}
             <LogoCarousel />
        </div>
    );
};

export default SinglePost;