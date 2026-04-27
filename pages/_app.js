import Script from 'next/script';
import '../styles/globals.css';

const GOOGLE_ADS_ID = 'AW-18051931803';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="google-ads-gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      />
      <Script
        id="google-ads-gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
            gtag('config', 'AW-18051931803/5onPCOLWoqMcEJu96p9D', {
              'phone_conversion_number': '(305) 390-8821'
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
