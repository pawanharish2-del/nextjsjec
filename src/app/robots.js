export default function robots() {
  const baseUrl = 'https://www.jeckukas.org.in';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',       // Keep search engines out of your management dashboard
        '/private/',
        '/api/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
