export default function robots() {
  const baseUrl = 'https://www.jeckukas.org.in';
  
  // Define sensitive paths that should be blocked for all bots
  const sensitivePaths = [
    '/admin/',
    '/api/',
    '/_next/',
    '/private/', // Added from remote version
  ];

  return {
    rules: [
      // 1. Standard Search Engine Bots (Googlebot, Bingbot, etc.)
      {
        userAgent: '*',
        allow: '/',
        disallow: sensitivePaths,
      },
      
      // 2. Specific AI Bots (Grouped for cleaner maintenance)
      {
        userAgent: [
          'GPTBot', 
          'ChatGPT-User', 
          'OAI-SearchBot', 
          'ClaudeBot', 
          'Claude-Web', 
          'Google-Extended', 
          'PerplexityBot', 
          'Applebot-Extended'
        ],
        allow: '/',
        disallow: sensitivePaths,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}