'use client';

// src/components/Chatbot.js
import Script from 'next/script';
import { usePathname } from 'next/navigation';

const Chatbot = () => {
  const pathname = usePathname();

  // Hide chatbot on admin pages
  if (pathname && pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      {/* 1. The required container div */}
      <div
        className="npf_chatbots"
        data-w="109143a3734740eca68202060a33207b"
        style={{ display: 'none' }}
      ></div>

      {/* 2. The Script - using Next.js optimization */}
      <Script
        src="https://chatbot.in4.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/1f19ca5e523045378aa171e5cf56bf41/109143a3734740eca68202060a33207b"
        strategy="lazyOnload" // Loads the bot after the page is interactive (faster site)
      />
    </>
  );
};

export default Chatbot;