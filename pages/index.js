import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    insuranceType: 'homeowners',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', insuranceType: 'homeowners' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>MC Global Insurance | Free Quote</title>
        <meta name="description" content="Get a free insurance quote from MC Global Insurance. Licensed agents serving South Florida." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-18051931803"
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18051931803');
          `,
        }}
      />

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          color: #333;
          line-height: 1.6;
          background: #fff;
        }

        header {
          background: white;
          padding: 1rem 2rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.3rem;
          font-weight: 700;
          color: #003D7A;
          letter-spacing: -0.5px;
        }

        .phone {
          color: #003D7A;
          font-weight: 600;
          text-decoration: none;
          font-size: 1rem;
          cursor: pointer;
        }

        .phone:hover {
          text-decoration: underline;
        }

        .hero {
          background: linear-gradient(135deg, #003D7A 0%, #005BA6 100%);
          color: white;
          padding: 4rem 2rem;
          text-align: center;
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .hero h1 {
          font-size: 2.8rem;
          margin-bottom: 1rem;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.95;
          max-width: 600px;
        }

        .form-container {
          background: white;
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
        }

        .form-container h2 {
          margin-bottom: 2rem;
          color: #003D7A;
          font-size: 1.6rem;
          font-weight: 700;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
          font-weight: 600;
          font-size: 0.95rem;
        }

        input,
        select {
          width: 100%;
          padding: 0.9rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.3s;
        }

        input:focus,
        select:focus {
          outline: none;
          border-color: #003D7A;
          box-shadow: 0 0 0 3px rgba(0, 61, 122, 0.1);
        }

        button {
          width: 100%;
          padding: 1.1rem;
          background: #003D7A;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
          letter-spacing: 0.5px;
        }

        button:hover:not(:disabled) {
          background: #002a5e;
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .success-message {
          color: #28a745;
          padding: 1rem;
          background: #f0f8f4;
          border-radius: 4px;
          margin-bottom: 1rem;
          text-align: center;
          font-weight: 600;
        }

        .error-message {
          color: #dc3545;
          padding: 1rem;
          background: #f8f0f0;
          border-radius: 4px;
          margin-bottom: 1rem;
          text-align: center;
          font-weight: 600;
        }

        footer {
          background: #001a4d;
          color: white;
          text-align: center;
          padding: 2rem;
          font-size: 0.9rem;
          margin-top: 3rem;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }

          .hero p {
            font-size: 1.05rem;
          }

          header {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .form-container {
            margin: 0 1rem;
          }
        }
      `}</style>

      <header>
        <div className="logo">MC Global Insurance</div>
        <a href="tel:305-390-8821" className="phone">
          Call (305) 390-8821
        </a>
      </header>

      <section className="hero">
        <h1>Get Your Free Insurance Quote Today</h1>
        <p>Licensed agents ready to help you protect what matters most</p>

        <div className="form-container">
          <h2>Free Quote</h2>

          {submitted && (
            <div className="success-message">
              Thank you! We'll call you within 24 hours with your quote.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(305) 555-1234"
              />
            </div>

            <div className="form-group">
              <label htmlFor="insuranceType">Insurance Type</label>
              <select
                id="insuranceType"
                name="insuranceType"
                value={formData.insuranceType}
                onChange={handleChange}
              >
                <option value="homeowners">Homeowners</option>
                <option value="auto">Auto</option>
                <option value="commercial">Commercial</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Get Free Quote'}
            </button>
          </form>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 MC Global Insurance. Licensed Sebanda Insurance Franchise.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
          2665 S Bayshore Dr, Suite 220-29, Miami, FL 33133
        </p>
      </footer>
    </>
  );
}
