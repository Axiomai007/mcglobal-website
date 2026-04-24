import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const insuranceOptions = [
  { value: 'homeowners', label: 'Homeowners Insurance' },
  { value: 'auto', label: 'Auto Insurance' },
  { value: 'commercial', label: 'Commercial Insurance' },
  { value: 'renters', label: 'Renters Insurance' },
  { value: 'other', label: 'Other' },
];

const coverageCards = [
  {
    title: 'Homeowners Insurance',
    description:
      'Protection for your property, structures, personal belongings, and liability exposure tailored to Florida-specific risks.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    alt: 'Modern residential home exterior at sunset',
  },
  {
    title: 'Auto Insurance',
    description:
      'Flexible coverage options for personal vehicles, family drivers, and higher-value cars with clear guidance on limits and deductibles.',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80',
    alt: 'Premium sedan parked on a city street',
  },
  {
    title: 'Commercial Insurance',
    description:
      'Business-focused plans for liability, property, and operational protection to help keep your company secure and compliant.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    alt: 'Downtown office buildings representing commercial insurance',
  },
];

const testimonials = [
  {
    quote:
      'The team made it easy to compare options and explained everything clearly from start to finish.',
    name: 'South Florida Homeowner',
  },
  {
    quote:
      'Fast response time, professional service, and a policy that matched our budget and coverage needs.',
    name: 'Personal Auto Client',
  },
  {
    quote:
      'MC Global helped us set up commercial coverage quickly with practical guidance for our business.',
    name: 'Local Business Owner',
  },
  {
    quote:
      'Bilingual support was excellent. The process was straightforward and we felt informed at every step.',
    name: 'Miami-Dade Resident',
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    insuranceType: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitState, setSubmitState] = useState({ type: '', message: '' });

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);

    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const validateForm = (data) => {
    const nextErrors = {};

    if (!data.fullName.trim()) nextErrors.fullName = 'Full Name is required.';
    if (!data.phone.trim()) nextErrors.phone = 'Phone is required.';
    if (!data.email.trim()) nextErrors.email = 'Email is required.';
    if (!data.insuranceType.trim()) {
      nextErrors.insuranceType = 'Insurance Type is required.';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    const nextValue = name === 'phone' ? formatPhone(value) : value;

    setFormData((prev) => ({ ...prev, [name]: nextValue }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitState({
        type: 'error',
        message: 'Please complete all required fields.',
      });
      return;
    }

    setLoading(true);
    setErrors({});
    setSubmitState({ type: '', message: '' });

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitState({
        type: 'success',
        message:
          'Quote request received. An MC Global agent will contact you soon.',
      });
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        insuranceType: '',
      });
    } catch (error) {
      console.error('Lead submission error:', error);
      setSubmitState({
        type: 'error',
        message:
          'We could not submit your request right now. Please call (305) 390-8821.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>MC Global Insurance | Free Quote</title>
        <meta
          name="description"
          content="MC Global Insurance provides professional homeowners, auto, and commercial insurance solutions with fast, local support in South Florida."
        />
      </Head>

      <div className="bg-slate-100 text-slate-900">
        <header className="sticky top-0 z-50 border-b border-navy-700/20 bg-navy-800/95 backdrop-blur">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <a href="#top" className="flex items-center gap-3" aria-label="MC Global Insurance home">
              <Image
                src="/logo.jpg"
                alt="MC Global Insurance logo"
                width={168}
                height={52}
                priority
                className="h-12 w-auto rounded bg-white p-1"
              />
            </a>

            <div className="flex flex-wrap items-center gap-2 text-sm sm:gap-3">
              <a
                href="mailto:info@mcglobalinsurance.com"
                className="rounded-full border border-white/30 px-4 py-2 font-medium text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                info@mcglobalinsurance.com
              </a>
              <a
                href="tel:3053908821"
                className="rounded-full bg-white px-4 py-2 font-semibold text-navy-700 transition hover:bg-navy-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Call (305) 390-8821
              </a>
            </div>
          </div>
        </header>

        <main id="top">
          <section className="relative isolate overflow-hidden">
            <div className="absolute inset-0 -z-20">
              <img
                src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1800&q=80"
                alt="Miami skyline at dusk"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900/95 via-navy-800/85 to-navy-700/70" />

            <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8 lg:py-24">
              <div className="text-white">
                <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] sm:text-sm">
                  Trusted South Florida Insurance Advisors
                </p>
                <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                  Insurance Expertise Built for What You Value Most.
                </h1>
                <p className="mt-5 max-w-2xl text-base text-slate-100 sm:text-lg">
                  MC Global delivers clear guidance and competitive options for homeowners, auto, and business insurance. Start with a fast, no-obligation quote.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#quote-form"
                    className="btn-hero"
                  >
                    Free Quote
                  </a>
                  <a
                    href="tel:3053908821"
                    className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Speak to an Agent
                  </a>
                </div>
              </div>

              <aside className="rounded-3xl border border-white/30 bg-white/10 p-6 text-white shadow-2xl shadow-navy-900/25 backdrop-blur sm:p-8">
                <h2 className="text-2xl font-bold">
                  Professional Support in English and Spanish
                </h2>
                <p className="mt-3 text-sm text-slate-100">
                  Serving Florida clients with responsive communication, clear policy guidance, and dependable service through each stage of coverage selection.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-100">
                  <li className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                    Local agency support for homeowners, auto, and business insurance.
                  </li>
                  <li className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                    Personalized options from trusted carriers based on your goals.
                  </li>
                  <li className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                    Straightforward guidance to help you enroll with confidence.
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section className="bg-slate-100 py-14 sm:py-16" aria-labelledby="about-heading">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 id="about-heading" className="text-3xl font-bold text-navy-800 sm:text-4xl">
                About MC Global
              </h2>
              <p className="mt-3 max-w-4xl text-slate-700">
                MC Global Insurance is a Florida-based agency focused on delivering professional insurance guidance for individuals, families, and businesses. Our bilingual team provides service in English and Spanish, helping clients understand options clearly and secure coverage that fits their goals.
              </p>
            </div>
          </section>

          <section className="bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="services-heading">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 id="services-heading" className="text-center text-3xl font-bold text-navy-800 sm:text-4xl">
                Services
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-center text-slate-700">
                Detailed insurance solutions built around the specific risks and priorities of Florida policyholders.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {coverageCards.map((card) => (
                  <article
                    key={card.title}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="h-48 w-full object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-navy-800">{card.title}</h3>
                      <p className="mt-2 text-sm text-slate-700">{card.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-slate-100 py-14 sm:py-16" aria-labelledby="why-choose-heading">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 id="why-choose-heading" className="text-3xl font-bold text-navy-800 sm:text-4xl">
                Why Choose MC Global
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-navy-800">Licensed Professionals</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Work with a licensed insurance team that follows professional standards and compliance requirements.
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-navy-800">Local Florida Expertise</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Local market understanding helps us match coverage to regional conditions and policy expectations.
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-navy-800">Bilingual Client Support</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    English and Spanish support ensures clear communication throughout your insurance decision process.
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-navy-800">Personalized Guidance</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    We provide one-on-one recommendations so you can review options and choose coverage confidently.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="bg-white py-14 sm:py-16" aria-labelledby="how-it-works-heading">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 id="how-it-works-heading" className="text-center text-3xl font-bold text-navy-800 sm:text-4xl">
                How It Works
              </h2>
              <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-700">Step 1</p>
                  <h3 className="mt-2 text-xl font-bold text-navy-800">Request Quote</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Submit your information and the insurance type you want to review.
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-700">Step 2</p>
                  <h3 className="mt-2 text-xl font-bold text-navy-800">Review Options</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Compare policy recommendations with support from a licensed MC Global advisor.
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-700">Step 3</p>
                  <h3 className="mt-2 text-xl font-bold text-navy-800">Enroll Coverage</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Finalize your selected policy and activate your coverage with confidence.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="bg-slate-100 py-14 sm:py-16" aria-labelledby="testimonials-heading">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 id="testimonials-heading" className="text-center text-3xl font-bold text-navy-800 sm:text-4xl">
                Testimonials
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-center text-slate-700">
                Client feedback reflects the professionalism, clarity, and service experience we aim to deliver.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {testimonials.map((item) => (
                  <blockquote
                    key={item.name}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <p className="text-sm text-slate-700">"{item.quote}"</p>
                    <footer className="mt-4 text-sm font-semibold text-navy-800">{item.name}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>

          <section id="quote-form" className="bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="quote-heading">
            <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
              <aside
                className="rounded-3xl border border-navy-300/30 bg-white p-6 shadow-2xl shadow-navy-900/10 sm:p-8"
              >
                <h2 id="quote-heading" className="text-2xl font-bold text-navy-800">
                  Request Your Free Quote
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Enter your details and an MC Global specialist will follow up promptly.
                </p>

                {submitState.message ? (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`mt-4 rounded-xl border px-4 py-3 text-sm font-medium ${
                      submitState.type === 'success'
                        ? 'border-navy-500/30 bg-navy-500/10 text-navy-900'
                        : 'border-navy-500/30 bg-navy-500/10 text-navy-900'
                    }`}
                  >
                    {submitState.message}
                  </p>
                ) : null}

                <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className="input-field"
                      placeholder="Your full name"
                    />
                    {errors.fullName ? (
                      <p id="fullName-error" className="mt-1 text-sm text-red-600">
                        {errors.fullName}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className="input-field"
                      placeholder="(305) 555-1234"
                    />
                    {errors.phone ? (
                      <p id="phone-error" className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className="input-field"
                      placeholder="you@example.com"
                    />
                    {errors.email ? (
                      <p id="email-error" className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="address" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Address (Homeowners Quote Only)
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="street-address"
                      value={formData.address}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="123 Main St, Miami, FL"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="insuranceType"
                      className="mb-1.5 block text-sm font-semibold text-slate-800"
                    >
                      Insurance Type
                    </label>
                    <select
                      id="insuranceType"
                      name="insuranceType"
                      required
                      value={formData.insuranceType}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.insuranceType)}
                      aria-describedby={errors.insuranceType ? 'insuranceType-error' : undefined}
                      className="input-field"
                    >
                      <option value="" disabled>
                        Select insurance type
                      </option>
                      {insuranceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.insuranceType ? (
                      <p id="insuranceType-error" className="mt-1 text-sm text-red-600">
                        {errors.insuranceType}
                      </p>
                    ) : null}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3 text-base font-bold"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Get Free Quote'}
                  </button>
                </form>
              </aside>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
