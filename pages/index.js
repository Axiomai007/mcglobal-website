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
        <meta name="description" content="Get a free insurance quote from MC Global Insurance. Licensed agents serving South Florida." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/globals.css" />
      </Head>

      <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=AW-18051931803" />
      <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-18051931803');` }} />

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <img src="/logo.jpg" alt="MC Global Logo" className="w-full h-full object-contain rounded" />
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-navy-500">MC Global Insurance</h1>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a href="mailto:info@mcglobalinsurance.com" className="text-sm text-gray-600 hover:text-navy-500 font-medium">info@mcglobalinsurance.com</a>
            <a href="tel:305-390-8821" className="px-4 py-2 bg-navy-500 text-white rounded-lg hover:bg-navy-600 transition font-semibold">(305) 390-8821</a>
          </div>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-navy-500 via-navy-600 to-sky-500" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">Protect What Matters Most</h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">Get a free insurance quote from licensed South Florida agents. Fast. Honest. Bilingual.</p>
          <a href="#quote-form" className="inline-block px-8 py-4 bg-white text-navy-500 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg">Get Your Free Quote</a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Coverage</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Comprehensive insurance for South Florida families and businesses</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v7a1 1 0 001 1h12a1 1 0 001-1V9m-9 16l-7-4m0 0V5m7 4l7-4m0 0v11m0 0l-7 4" /></svg>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Homeowners Insurance</h3>
                <p className="text-gray-600 mb-4">Protect your home with comprehensive coverage for hurricanes, theft, and liability.</p>
                <ul className="space-y-2 text-sm text-gray-700"><li>Dwelling coverage</li><li>Personal property protection</li><li>Liability coverage</li></ul>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Auto Insurance</h3>
                <p className="text-gray-600 mb-4">Full coverage for your vehicles with competitive rates and flexible payment options.</p>
                <ul className="space-y-2 text-sm text-gray-700"><li>Liability protection</li><li>Collision coverage</li><li>Comprehensive coverage</li></ul>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Insurance</h3>
                <p className="text-gray-600 mb-4">Tailored coverage solutions for your business with customizable policies.</p>
                <ul className="space-y-2 text-sm text-gray-700"><li>General liability</li><li>Property protection</li><li>Customizable policies</li></ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quote-form" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-navy-500 mb-2">Get Your Free Quote</h2>
            <p className="text-gray-600 mb-8">No obligation. No hidden fees. Just an honest quote from licensed professionals.</p>
            {submitted && <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"><p className="text-green-800 font-semibold">Thank you! Our agents will call you within 24 hours with your personalized quote.</p></div>}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(305) 555-1234" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="insuranceType" className="block text-sm font-semibold text-gray-900 mb-2">Type of Insurance</label>
                <select id="insuranceType" name="insuranceType" value={formData.insuranceType} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent">
                  <option value="homeowners">Homeowners Insurance</option>
                  <option value="auto">Auto Insurance</option>
                  <option value="commercial">Commercial Insurance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button type="submit" disabled={loading} className="w-full px-6 py-4 bg-navy-500 text-white font-bold rounded-lg hover:bg-navy-600 transition disabled:opacity-60 text-lg">{loading ? 'Submitting...' : 'Get My Free Quote'}</button>
              <p className="text-xs text-gray-500 text-center">We respect your privacy. Your information is secure and will never be shared.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}</div>
              <p className="text-gray-700 mb-6">"MC Global was incredibly helpful. The agents explained everything clearly and got us set up quickly."</p>
              <p className="font-semibold text-gray-900">Maria Rodriguez</p>
              <p className="text-sm text-gray-600">Miami, FL</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}</div>
              <p className="text-gray-700 mb-6">"Best insurance experience I've had. Licensed professionals who actually care about their customers."</p>
              <p className="font-semibold text-gray-900">Carlos Fernandez</p>
              <p className="text-sm text-gray-600">Coral Gables, FL</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}</div>
              <p className="text-gray-700 mb-6">"Competitive rates and bilingual support. They took care of everything for our business."</p>
              <p className="font-semibold text-gray-900">Amanda Chen</p>
              <p className="text-sm text-gray-600">South Miami, FL</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div><div className="text-4xl font-bold mb-2">Verified</div><h3 className="font-bold mb-2">Licensed & Trusted</h3><p className="text-white/80">Licensed by Florida Department of Financial Services</p></div>
            <div><div className="text-4xl font-bold mb-2">Bilingual</div><h3 className="font-bold mb-2">English & Spanish</h3><p className="text-white/80">Fluent support from experienced agents</p></div>
            <div><div className="text-4xl font-bold mb-2">Local</div><h3 className="font-bold mb-2">South Florida Experts</h3><p className="text-white/80">Based in Coconut Grove, serving Miami-Dade</p></div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div><h4 className="font-bold mb-4">MC Global Insurance</h4><p className="text-gray-400 text-sm">Licensed insurance agent serving South Florida with professional, honest service.</p></div>
            <div><h4 className="font-bold mb-4">Contact</h4><p className="text-gray-400 text-sm">(305) 390-8821<br />info@mcglobalinsurance.com<br />2665 S Bayshore Dr, Suite 220-29<br />Miami, FL 33133</p></div>
            <div><h4 className="font-bold mb-4">Hours</h4><p className="text-gray-400 text-sm">Monday - Friday: 9 AM - 6 PM<br />Saturday: 10 AM - 4 PM<br />Sunday: Closed</p></div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm"><p>© 2026 MC Global Insurance. All rights reserved.</p><p className="mt-2">Licensed by Florida Department of Financial Services</p></div>
        </div>
      </footer>
    </>
  );
}
