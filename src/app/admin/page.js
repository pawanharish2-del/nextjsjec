"use client";
import React, { useState, useEffect } from 'react';
import { db } from '@/firebase'; // Updated to use '@' alias
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import Link from 'next/link'; // Updated to use Next.js Link

const Overview = () => {
    const [stats, setStats] = useState({ blogs: 0, faculty: 0 });
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [recentFaculty, setRecentFaculty] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // --- 1. Fetch Blogs ---
                const blogsRef = collection(db, "blog_posts");
                // Query for 5 most recent blogs
                const blogsQ = query(blogsRef, orderBy("date", "desc"), limit(5));
                const blogsSnapshot = await getDocs(blogsQ);
                const blogsList = blogsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                // Get total count (fetching all docs for size is basic but works for small apps)
                const allBlogsSnap = await getDocs(blogsRef);

                // --- 2. Fetch Faculty ---
                const facultyRef = collection(db, "faculty_members");
                // Query for first 5 faculty members (ordered by 'order' field usually)
                let facultyList = [];
                try {
                    const facultyQ = query(facultyRef, orderBy("order"), limit(5));
                    const facultySnapshot = await getDocs(facultyQ);
                    facultyList = facultySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                } catch (e) {
                    // Fallback if index missing
                    const facultySnapshot = await getDocs(query(facultyRef, limit(5)));
                    facultyList = facultySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                }

                const allFacultySnap = await getDocs(facultyRef);

                // --- 3. Set State ---
                setRecentBlogs(blogsList);
                setRecentFaculty(facultyList);
                setStats({
                    blogs: allBlogsSnap.size,
                    faculty: allFacultySnap.size
                });
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Helper to safely format department(s)
    const formatDepartment = (dept) => {
        if (!dept) return '';
        if (Array.isArray(dept)) {
            return dept.map(d => d.toUpperCase()).join(', ');
        }
        return dept.toUpperCase();
    };

    if (loading) return <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Loading dashboard...</div>;

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '25px', color: '#1e293b' }}>Dashboard Overview</h2>

            {/* --- STATS CARDS --- */}
            <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <h3 style={styles.cardTitle}>Total Blog Posts</h3>
                            <p style={styles.statNumber}>{stats.blogs}</p>
                        </div>
                        <div style={{ ...styles.iconBox, background: '#EFF6FF', color: '#2563EB' }}>
                            <i className="fas fa-newspaper"></i>
                        </div>
                    </div>
                    <Link href="/admin/manage-blogs" style={styles.link}>Manage Blogs &rarr;</Link>
                </div>

                <div style={styles.statCard}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <h3 style={styles.cardTitle}>Faculty Members</h3>
                            <p style={styles.statNumber}>{stats.faculty}</p>
                        </div>
                        <div style={{ ...styles.iconBox, background: '#ECFDF5', color: '#059669' }}>
                            <i className="fas fa-chalkboard-teacher"></i>
                        </div>
                    </div>
                    <Link href="/admin/manage-faculty" style={styles.link}>Manage Faculty &rarr;</Link>
                </div>
            </div>

            {/* --- RECENT ACTIVITY GRID --- */}
            <div style={styles.contentGrid}>

                {/* Recent Blogs Column */}
                <div style={styles.section}>
                    <h3 style={styles.sectionHeader}>Recently Published</h3>
                    <div style={styles.list}>
                        {recentBlogs.length === 0 ? <p style={{ color: '#888', fontStyle: 'italic' }}>No blogs found.</p> : recentBlogs.map(blog => (
                            <div key={blog.id} style={styles.listItem}>
                                {blog.image ? (
                                    <img src={blog.image} alt="cover" style={styles.thumb} />
                                ) : (
                                    <div style={{ ...styles.thumb, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📝</div>
                                )}
                                <div>
                                    <h4 style={styles.itemTitle}>{blog.title}</h4>
                                    <small style={{ color: '#64748b' }}>{blog.date} • <span style={{ color: '#2563EB', fontWeight: '500' }}>{blog.category}</span></small>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link href="/admin/manage-blogs" style={styles.viewAllBtn}>View All Blogs</Link>
                </div>

                {/* Recent Faculty Column */}
                <div style={styles.section}>
                    <h3 style={styles.sectionHeader}>Faculty Directory (Top 5)</h3>
                    <div style={styles.list}>
                        {recentFaculty.length === 0 ? <p style={{ color: '#888', fontStyle: 'italic' }}>No faculty members found.</p> : recentFaculty.map(member => (
                            <div key={member.id} style={styles.listItem}>
                                {member.image ? (
                                    <img src={member.image} alt={member.name} style={styles.avatar} />
                                ) : (
                                    <div style={styles.avatarPlaceholder}>{member.name ? member.name[0] : 'U'}</div>
                                )}
                                <div>
                                    <h4 style={styles.itemTitle}>
                                        {member.name}
                                        {/* HOD Badge if applicable */}
                                        {member.isHod && <span style={styles.hodBadge}>HOD</span>}
                                    </h4>
                                    <small style={{ color: '#64748b' }}>{member.role}</small> <br />
                                    {/* Fixed: Safely format department whether it's Array or String */}
                                    <small style={{ color: '#94a3b8', fontSize: '11px' }}>
                                        {formatDepartment(member.department)}
                                    </small>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link href="/admin/manage-faculty" style={styles.viewAllBtn}>View All Faculty</Link>
                </div>

            </div>
        </div>
    );
};

const styles = {
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' },
    statCard: { background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' },
    cardTitle: { margin: '0 0 5px 0', fontSize: '14px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' },
    statNumber: { margin: 0, fontSize: '32px', fontWeight: '800', color: '#0f172a' },
    iconBox: { width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' },
    link: { display: 'block', marginTop: '15px', color: '#2563EB', fontSize: '14px', textDecoration: 'none', fontWeight: '500' },

    contentGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' },
    section: { background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' },
    sectionHeader: { margin: '0 0 20px 0', fontSize: '18px', color: '#0f172a' },

    list: { display: 'flex', flexDirection: 'column', gap: '15px' },
    listItem: { display: 'flex', alignItems: 'center', gap: '15px', paddingBottom: '15px', borderBottom: '1px solid #f1f5f9' },

    thumb: { width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' },
    avatar: { width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #e2e8f0' },
    avatarPlaceholder: { width: '50px', height: '50px', borderRadius: '50%', background: '#cbd5e1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px' },

    itemTitle: { margin: '0 0 3px 0', fontSize: '15px', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' },
    hodBadge: { fontSize: '9px', background: '#FCA311', color: 'white', padding: '2px 4px', borderRadius: '3px', fontWeight: 'bold' },
    viewAllBtn: { display: 'block', textAlign: 'center', marginTop: '20px', padding: '10px', background: '#f8fafc', borderRadius: '6px', color: '#475569', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }
};

export default Overview;