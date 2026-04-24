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
        <title>MC Global Insurance | Free Quote | Miami, FL</title>
        <meta name="description" content="Get a free insurance quote from MC Global Insurance. Licensed Sebanda Insurance agents serving South Florida with homeowners, auto, and commercial insurance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/globals.css" />
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

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-navy-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">MCG</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy-500">MC Global</h1>
              <p className="text-xs text-gray-600">Sebanda Insurance 73</p>
            </div>
          </div>
          <a
            href="tel:305-390-8821"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-navy-500 text-white rounded-lg hover:bg-navy-600 transition font-semibold"
          >
            <span>📞</span>
            (305) 390-8821
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-500 via-navy-500 to-sky-500 text-white py-20 sm:py-32">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="1000" height="600" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            Protect What Matters Most
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free insurance quote in minutes from our licensed South Florida agents. We speak your language.
          </p>
          <a
            href="#quote-form"
            className="inline-block px-8 py-4 bg-white text-navy-500 font-bold rounded-lg hover:bg-gray-50 transition shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Our Coverage</h2>
          <p className="section-subtitle text-center">
            Comprehensive insurance solutions for South Florida families and businesses
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Homeowners */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8">
              <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Homeowners Insurance</h3>
              <p className="text-gray-600 mb-4">
                Protect your home and belongings with comprehensive coverage including hurricanes, theft, and liability.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Dwelling coverage</li>
                <li>✓ Personal property protection</li>
                <li>✓ Liability coverage</li>
              </ul>
            </div>

            {/* Auto */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8">
              <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Auto Insurance</h3>
              <p className="text-gray-600 mb-4">
                Full coverage for your vehicles with competitive rates and flexible payment options.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Liability protection</li>
                <li>✓ Collision coverage</li>
                <li>✓ Comprehensive coverage</li>
              </ul>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8">
              <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Insurance</h3>
              <p className="text-gray-600 mb-4">
                Protect your business with tailored coverage solutions for your industry and size.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ General liability</li>
                <li>✓ Property protection</li>
                <li>✓ Customizable policies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-50 to-white rounded-2xl shadow-lg p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-navy-500 mb-2">Get Your Free Quote</h2>
            <p className="text-gray-600 mb-8">
              No obligation. No hidden fees. Just an honest quote from licensed professionals.
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">
                  ✓ Thank you! Our agents will call you within 24 hours with your personalized quote.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(305) 555-1234"
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="insuranceType" className="block text-sm font-semibold text-gray-900 mb-2">
                  Type of Insurance
                </label>
                <select
                  id="insuranceType"
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="homeowners">Homeowners Insurance</option>
                  <option value="auto">Auto Insurance</option>
                  <option value="commercial">Commercial Insurance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full text-lg font-bold py-4"
              >
                {loading ? 'Submitting...' : 'Get My Free Quote'}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy. Your information is secure and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">What Our Customers Say</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "MC Global was incredibly helpful in finding us the right coverage. The agents explained everything clearly and got us set up quickly."
              </p>
              <p className="font-semibold text-gray-900">Maria Rodriguez</p>
              <p className="text-sm text-gray-600">Miami, FL</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Best insurance experience I've had. Licensed professionals who actually care about their customers. Highly recommend!"
              </p>
              <p className="font-semibold text-gray-900">Carlos Fernandez</p>
              <p className="text-sm text-gray-600">Coral Gables, FL</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Competitive rates and bilingual support. They took care of everything for our small business. Would use again!"
              </p>
              <p className="font-semibold text-gray-900">Amanda Chen</p>
              <p className="text-sm text-gray-600">South Miami, FL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 bg-navy-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">✓</div>
              <h3 className="font-bold mb-2">Licensed & Trusted</h3>
              <p className="text-white/80">
                Licensed by the State of Florida Department of Financial Services
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">🌐</div>
              <h3 className="font-bold mb-2">Bilingual Service</h3>
              <p className="text-white/80">
                English & Spanish support from our experienced agents
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">📍</div>
              <h3 className="font-bold mb-2">Local Experts</h3>
              <p className="text-white/80">
                Based in Coconut Grove, serving all of South Florida
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">MC Global Insurance</h4>
              <p className="text-gray-400 text-sm">
                Sebanda Insurance 73 - Licensed Sebanda Insurance Franchise
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">
                📞 (305) 390-8821
                <br />
                📍 2665 S Bayshore Dr, Suite 220-29
                <br />
                Miami, FL 33133
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <p className="text-gray-400 text-sm">
                Monday - Friday: 9 AM - 6 PM
                <br />
                Saturday: 10 AM - 4 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; 2026 MC Global Insurance. Sebanda Insurance franchise. All rights reserved.
            </p>
            <p className="mt-2">
              Licensed by Florida Department of Financial Services
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
