export default function robots() {
  const baseUrl = 'https://www.jeckukas.org.in';

  return {
    rules: [
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/private/',
          '/api/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
