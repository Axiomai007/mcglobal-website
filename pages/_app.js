import { useRouter } from 'next/router';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18051931803" />
      <Script id="gtag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18051931803');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
