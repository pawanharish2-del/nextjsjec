export default function robots() {
  // Replace with your actual live domain if different
  const baseUrl = 'https://www.jeckukas.org.in';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',       // Keep Google out of your Admin Panel
        '/private/',
        '/api/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}