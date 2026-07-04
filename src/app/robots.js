export default function robots() {
  const baseUrl = 'https://www.jeckukas.org.in';
  
  // Define sensitive paths that should be universally blocked
  const sensitivePaths = [
    '/admin/',
    '/api/',
    '/_next/',
  ];

  return {
    rules: [
      // 1. Standard Search Engine Bots (Googlebot, Bingbot, etc.)
      {
        userAgent: '*',
        allow: '/',
        disallow: sensitivePaths,
      },
      
      // 2. OpenAI Bots
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot'],
        allow: '/',
        disallow: sensitivePaths,
      },
      
      // 3. Anthropic Bots
      {
        userAgent: ['ClaudeBot', 'Claude-Web'],
        allow: '/',
        disallow: sensitivePaths,
      },
      
      // 4. Google Gemini / AI Overview
      {
        userAgent: ['Google-Extended'],
        allow: '/',
        disallow: sensitivePaths,
      },
      
      // 5. Perplexity AI
      {
        userAgent: ['PerplexityBot'],
        allow: '/',
        disallow: sensitivePaths,
      },

      // 6. Apple Intelligence
      {
        userAgent: ['Applebot-Extended'],
        allow: '/',
        disallow: sensitivePaths,
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}