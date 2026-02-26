"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from '@/firebase'; // Using alias
import { collection, getDocs, query } from 'firebase/firestore';
import '@/styles/Blog.css';
import LogoCarousel from '@/components/LogoCarousel'; // Added LogoCarousel

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); // added this line now

    // Fetch Posts from Firebase
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const q = query(collection(db, "blog_posts"));
                const querySnapshot = await getDocs(q);

                let postsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                // Sort by Date (Newest first)
                postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

                setPosts(postsData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // --- HELPER: Generate URL (Handles missing slugs by falling back to ID if needed) ---
    const getPostLink = (post) => {
        // If the post has a slug, use /blog/slug. 
        // If NOT, use the ID.
        return `/blog/${post.slug || post.id}`;
    };

    // --- NEW FILTERING LOGIC ---
const isFiltering = searchTerm.trim() !== '' || selectedCategory !== '';

// Only show the big featured post if we are NOT searching or clicking a category
const featuredPost = !isFiltering ? posts.find(post => post.isFeatured === true) : null;

const filteredPosts = posts.filter(post => {
    // Hide the featured post from the grid if we are on the default view
    if (!isFiltering && featuredPost && post.id === featuredPost.id) {
        return false; 
    }

    // Check search term (looks in title and excerpt)
    const matchesSearch = post.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Check category
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
});

// List of exact categories for your sidebar
const categories = [
    "Engineering", "Admissions", "Campus Life", "Placements", 
    "Career", "Science & Technology", "Why JEC", "Business", "Motivational"
];

    if (loading) {
        return <div className="blog-page-wrapper" style={{ padding: '100px', textAlign: 'center' }}>Loading Articles...</div>;
    }

    return (
        <div className="blog-page-wrapper">

            {/* Hero Section */}
            <header className="blog-hero">
                <h1>News & Articles</h1>
                <p>Updates, Achievements, and Educational Insights from JEC</p>
            </header>

            <div className="blog-container">

                {/* Main Feed */}
                <main className="blog-feed">

                    {/* 1. Featured Post */}
                    {featuredPost && (
                        <article className="blog-card featured">
                            <div className="blog-img-wrapper">
                                <img src={featuredPost.image || "https://via.placeholder.com/800x400"} alt={featuredPost.title} />
                                <span className="date-badge">{featuredPost.date}</span>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span><i className="fas fa-user"></i> {featuredPost.author}</span>
                                    <span><i className="fas fa-tag"></i> {featuredPost.category}</span>
                                </div>
                                {/* FIX 1: Featured Title Link */}
                                <Link href={getPostLink(featuredPost)}>
                                    <h2 className="blog-title">{featuredPost.title}</h2>
                                </Link>
                                <p className="blog-excerpt">{featuredPost.excerpt}</p>
                                {/* FIX 2: Featured Read More Link */}
                                <Link href={getPostLink(featuredPost)} className="read-more">Read Full Article <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </article>
                    )}

                    {/* 2. Regular Feed */}
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <article className="blog-card" key={post.id}>
                                <div className="blog-img-wrapper">
                                    <img src={post.image || "https://via.placeholder.com/600x300"} alt={post.title} />
                                    <span className="date-badge">{post.date}</span>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span><i className="fas fa-user"></i> {post.author}</span>
                                        <span><i className="fas fa-tag"></i> {post.category}</span>
                                    </div>
                                    {/* FIX 3: List Title Link */}
                                    <Link href={getPostLink(post)}><h2 className="blog-title">{post.title}</h2></Link>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    {/* FIX 4: List Read More Link */}
                                    <Link href={getPostLink(post)} className="read-more">Read Full Article <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </article>
                        ))
                    ) : (
                        <p>No articles found matching your search.</p>
                    )}

                    <div className="pagination">
                        <span className="page-link active">1</span>
                        <span className="page-link"><i className="fas fa-chevron-right"></i></span>
                    </div>
                </main>

                {/* Sidebar */}
                <aside className="blog-sidebar">
                    <div className="widget">
                        <h3 className="widget-title">Search</h3>
                        <div className="search-box">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="search-btn"><i className="fas fa-search"></i></button>
                        </div>
                    </div>

                    <div className="widget">
                        <h3 className="widget-title">Recent Posts</h3>
                        <ul className="recent-list">
                            {posts.slice(0, 3).map(post => (
                                <li key={post.id}>
                                    {/* FIX 5: Sidebar Link */}
                                    <Link href={getPostLink(post)} className="recent-link">
                                        <img src={post.image} className="recent-thumb" alt="thumb" />
                                        <div>
                                            <div className="recent-text">{post.title}</div>
                                            <span className="recent-date">{post.date}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="widget">
    <h3 className="widget-title">Categories</h3>
    <div className="tag-cloud">
        {/* "All" Button to clear categories */}
        <span 
            className="tag" 
            onClick={() => setSelectedCategory('')}
            style={{ 
                cursor: 'pointer', 
                backgroundColor: selectedCategory === '' ? '#2563EB' : '', 
                color: selectedCategory === '' ? '#fff' : '' 
            }}
        >
            All
        </span>
        
        {/* Dynamic Category Buttons */}
        {categories.map(cat => (
            <span 
                key={cat}
                className="tag" 
                onClick={() => setSelectedCategory(cat)}
                style={{ 
                    cursor: 'pointer', 
                    backgroundColor: selectedCategory === cat ? '#2563EB' : '', 
                    color: selectedCategory === cat ? '#fff' : '' 
                }}
            >
                {cat}
            </span>
        ))}
    </div>
</div>
                </aside>

            </div>

            {/* Added LogoCarousel Here */}
            <LogoCarousel />

        </div>
    );
};

export default Blog;