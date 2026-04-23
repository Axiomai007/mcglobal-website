import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Google Tag Manager
    const gtmId = 'AW-18051931803';
    
    // Load GTM script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`;
    document.head.appendChild(script);
    
    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', gtmId);
  }, []);

  return <Component {...pageProps} />;
}
