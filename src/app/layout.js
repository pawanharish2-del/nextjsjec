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

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TVSZX7C9');`}
        </Script>
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Poppins', sans-serif" }}>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVSZX7C9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* NoPaperForms DTC Tracking Code */}
        <Script id="npf-dtc-tracking" strategy="afterInteractive">
          {`
            var npf_d='https://admission.jeckukas.org.in';
            var npf_c='6958';
            var npf_m='1';
            var s=document.createElement("script");
            s.type="text/javascript";
            s.async=true;
            s.src="https://track.nopaperforms.com/js/track.js";
            document.body.appendChild(s);
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1683144516178369');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1683144516178369&ev=PageView&noscript=1"
            alt=""
          />
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
          dangerouslySetInnerHTML={{
            __html: `
         <div class="popup-content">
           <button id="admission-close-btn" class="close-btn">&times;</button>
           <div
             class="npf_wgts"
             data-height="780px"
             data-w="c1073fe2350d112d90b129addc24e9ff"
           ></div>
           
           <!-- Fetch and execute instantly while DOM is pausing here -->
           <script type="text/javascript" src="https://widgets.in4.nopaperforms.com/emwgts.js"></script>
         </div>
         `
          }}
        />

        {/*
          Inline script — runs immediately when the browser parses this tag,
          BEFORE React hydration. Shows popup on homepage only.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
        // Instantly show the popup layer
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