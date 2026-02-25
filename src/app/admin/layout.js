"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import '@/styles/Admin.css';
import '@/styles/Navigation.css';

import ProtectedRoute from '@/components/admin/ProtectedRoute'; // Import the guard

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  // 1. If on Login page, show ONLY the login form (No Sidebar, No Protection needed yet)
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // 2. For all other Admin pages, wrap in ProtectedRoute + Sidebar
  return (
    <ProtectedRoute>
      <div className="admin-container">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <div className="admin-brand">JEC Admin</div>

          <nav className="admin-nav">
            <p className="menu-label">Dashboard</p>
            <Link href="/admin" className={`nav-item ${pathname === '/admin' ? 'active' : ''}`}>Overview</Link>

            <p className="menu-label">Page Content</p>
            <Link href="/admin/manage-home" className={`nav-item ${pathname.includes('manage-home') ? 'active' : ''}`}>Home Page</Link>

            <p className="menu-label">Dynamic Updates</p>
            <Link href="/admin/manage-blogs" className={`nav-item ${pathname.includes('manage-blogs') ? 'active' : ''}`}>Blogs & News</Link>
            <Link href="/admin/manage-gallery" className={`nav-item ${pathname.includes('manage-gallery') ? 'active' : ''}`}>Gallery Manager</Link>
            <Link href="/admin/manage-faculty" className={`nav-item ${pathname.includes('manage-faculty') ? 'active' : ''}`}>Faculty Members</Link>
            <Link href="/admin/manage-testimonials" className={`nav-item ${pathname.includes('manage-testimonials') ? 'active' : ''}`}>Testimonials</Link>
            <Link href="/admin/manage-departments" className={`nav-item ${pathname.includes('manage-departments') ? 'active' : ''}`}>Departments</Link>
            <Link href="/admin/manage-video-gallery" className={`nav-item ${pathname.includes('manage-video-gallery') ? 'active' : ''}`}>Video Gallery</Link>
            <Link href="/admin/manage-placements" className={`nav-item ${pathname.includes('manage-placements') ? 'active' : ''}`}>Placements</Link>
            <Link href="/admin/manage-campus-life" className={`nav-item ${pathname.includes('manage-campus-life') ? 'active' : ''}`}>Campus Life</Link>
            <Link href="/admin/manage-video-testimonials" className={`nav-item ${pathname.includes('manage-video-testimonials') ? 'active' : ''}`}>Video Testimonials</Link>

            <p className="menu-label">Settings</p>
            <Link href="/admin/user-management" className={`nav-item ${pathname.includes('user-management') ? 'active' : ''}`}>User Management</Link>
          </nav>

          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </aside>

        {/* Main Content Area */}
        <main className="admin-content">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}