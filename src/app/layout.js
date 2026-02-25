import "@/styles/globals.css";
import "@/styles/Navigation.css";
import "@/styles/Footer.css";
import "@/styles/AdmissionPopup.css";
import { Suspense } from 'react';
import "@/styles/Sidebar.css";
import ClientLayout from "@/components/ClientLayout";
import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Poppins', sans-serif" }}>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W6GFCXV4');`}
        </Script>

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VS43V49H94"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VS43V49H94');
          `}
        </Script>

        {/* Google Tag Manager (NoScript Fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6GFCXV4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ClientLayout handles Header (Subheader) and Footer */}
        <Suspense fallback={null}>
          <ClientLayout>
            {children}
          </ClientLayout>
        </Suspense>

        {/* =====================================================
            ADMISSION POPUP — Raw HTML (No React Component)
            Renders instantly before React hydration.
            JS logic to show/hide is handled by:
              1) The inline <script> below (first paint)
              2) ClientLayout useEffect (on route changes)
        ===================================================== */}
        <div
          id="admission-popup"
          className="popup-overlay"
          style={{ display: 'none' }}
          suppressHydrationWarning={true}
        >
          <div className="popup-content">
            <button id="admission-close-btn" className="close-btn">&times;</button>
            <div
              className="npf_wgts"
              data-height="580px"
              data-w="c1073fe2350d112d90b129addc24e9ff"
              suppressHydrationWarning={true}
            ></div>
          </div>
        </div>

        {/*
          Inline script — runs immediately when the browser parses this tag,
          BEFORE React hydration. Shows popup on homepage only.
          The NoPaperForms widget script is loaded in ClientLayout
          (after hydration) to avoid the iframe hydration mismatch error.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (window.location.pathname === '/' || window.location.pathname === '') {
                  var popup = document.getElementById('admission-popup');
                  if (popup) {
                    popup.style.display = 'flex';
                  }
                }
              })();
            `
          }}
        />

        <Sidebar />
        <Chatbot />
      </body>
    </html>
  );
}