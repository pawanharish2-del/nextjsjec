import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const revalidate = 3600;

export default async function sitemap() {
  const baseUrl = 'https://www.jeckukas.org.in';

  // 1. Static Routes (All pages existing as physical folders in your src/app)
  const staticRoutes = [
    '',
    '/jec/about-jec',
    '/jec/management',
    '/jec/network',
    '/jec/alumni',
    '/jec/Anti-Ragging-Committee',
    '/jec/Institution-Innovation-Council-JEC',
    '/jec/Employment-JEC',
    '/jec/JEC-FAQ',
    '/jec/Students-Testimonials',
    '/admission/Admission-Open',
    '/admission/Admission-Procedure',
    '/admission/Courses-Offered',
    '/admission/Documents-Required',
    '/admission/Fee-Structure',
    '/admission/Financial-Aids-Bank-Loans',
    '/admission/Mandatory-Disclosure',
    '/admission/REAP-2025',
    '/admission/karma',
    '/admission-enquiry',
    '/department/MTech',
    '/department/MOOCS-NPTEL-SWAYAM',
    '/placement',
    '/campus-life/academic-achievers',
    '/campus-life/committees-zone',
    '/campus-life/engineering-projects',
    '/campus-life/games-and-sports',
    '/campus-life/guts-n-glory',
    '/campus-life/jec-vibrant-india',
    '/campus-life/mental-health',
    '/campus-life/students-corner',
    '/campus-life/video-gallery',
    '/campus-life/image-gallery',
    '/Infrastructure/Convenience-and-Safety',
    '/Infrastructure/Learning-By-Doing',
    '/Infrastructure/Prepare-and-Present',
    '/Infrastructure/Refuel-and-Relax',
    '/Our-Society/Foundation-for-Better-Tomorrow',
    '/Our-Society/Key-Teams-Functions',
    '/Our-Society/Other-Institutes-Agrasen-College',
    '/Our-Society/Other-Institutes-Jaipur-College-of-Education-and-Science',
    '/blog',
    '/contact',
    '/virtual-tour',
    '/PrivacyPolicy',
    '/Disclaimer',
    '/terms',
    '/grievance',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Fetch Dynamic Department Pages from Firebase
  let departmentRoutes = [];
  try {
    // This fetches the departments created via your Admin panel
    const querySnapshot = await getDocs(collection(db, 'departments'));
    departmentRoutes = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const urlSlug = data.slug ? data.slug : doc.id;
      return {
        url: `${baseUrl}/department/${urlSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      };
    });
  } catch (error) {
    console.error("Error fetching dynamic departments for sitemap:", error);
  }

  // 3. Fetch Dynamic Blog Posts from Firebase
  let blogRoutes = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'blog_posts'));
    blogRoutes = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const urlSlug = data.slug ? data.slug : doc.id;
      return {
        url: `${baseUrl}/blog/${urlSlug}`,
        lastModified: data.date ? new Date(data.date) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      };
    });
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  return [...staticRoutes, ...departmentRoutes, ...blogRoutes];
}