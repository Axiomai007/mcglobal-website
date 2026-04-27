import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Quote Received - MC Global Insurance</title>
        <meta name="description" content="Thank you for requesting a quote from MC Global Insurance." />
      </Head>

      <main style={{ padding: '40px 20px', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '600px' }}>
          <h1 style={{ color: '#104088', marginBottom: '20px' }}>Thank You!</h1>
          <p style={{ fontSize: '18px', color: '#333', lineHeight: '1.6', marginBottom: '30px' }}>
            We've received your quote request. Our team will review your information and contact you shortly with a personalized quote.
          </p>
          
          <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '30px', textAlign: 'left' }}>
            <h3 style={{ color: '#104088', marginTop: '0' }}>What happens next?</h3>
            <ul style={{ color: '#555', lineHeight: '1.8' }}>
              <li>Our team will review your information within 24 hours</li>
              <li>We'll contact you with a personalized quote and policy details</li>
              <li>You can ask questions and discuss coverage options directly with our specialists</li>
              <li>Once approved, your policy can be activated immediately</li>
            </ul>
          </div>

          <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
            <strong>Need immediate assistance?</strong> Call us at <a href="tel:(305) 390-8821" style={{ color: '#104088', textDecoration: 'none' }}>(305) 390-8821</a>
          </p>

          <a 
            href="/" 
            style={{
              display: 'inline-block',
              background: '#104088',
              color: 'white',
              padding: '12px 30px',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              marginRight: '10px'
            }}
          >
            Back to Home
          </a>
          <a 
            href="/about" 
            style={{
              display: 'inline-block',
              background: '#ddd',
              color: '#333',
              padding: '12px 30px',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          >
            Learn More
          </a>
        </div>
      </main>
    </>
  );
}
