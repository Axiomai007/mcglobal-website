import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

const insuranceOptions = [
  { value: 'homeowners', label: 'Homeowners Insurance' },
  { value: 'auto', label: 'Auto Insurance' },
  { value: 'commercial', label: 'Commercial Insurance' },
  { value: 'renters', label: 'Renters Insurance' },
  { value: 'other', label: 'Other' },
];

const coverageCards = [
  {
    title: 'Home Insurance',
    description:
      'Coverage designed to protect your home, valuables, and peace of mind in South Florida.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    alt: 'Modern residential home exterior at sunset',
  },
  {
    title: 'Auto Insurance',
    description:
      'Reliable protection with flexible options for daily drivers, families, and high-value vehicles.',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80',
    alt: 'Premium sedan parked on a city street',
  },
  {
    title: 'Business Insurance',
    description:
      'Smart risk protection for small businesses, commercial property, and liability needs.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    alt: 'Downtown office buildings representing commercial insurance',
  },
];

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    insuranceType: 'homeowners',
  });
  const [loading, setLoading] = useState(false);
  const [submitState, setSubmitState] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
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
          'Quote request received. Redirecting...',
      });
      setFormData({ name: '', phone: '', insuranceType: 'homeowners' });
      
      // Redirect to thank-you page after 1 second
      setTimeout(() => {
        router.push('/thank-you');
      }, 1000);
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

              <aside
                id="quote-form"
                className="rounded-3xl border border-navy-300/30 bg-white p-6 shadow-2xl shadow-navy-900/25 sm:p-8"
                aria-labelledby="quote-heading"
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
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Your full name"
                    />
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
                      className="input-field"
                      placeholder="(305) 555-1234"
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
                      value={formData.insuranceType}
                      onChange={handleChange}
                      className="input-field"
                    >
                      {insuranceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
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

          <section className="bg-slate-100 py-14 sm:py-16 lg:py-20" aria-labelledby="coverage-heading">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 id="coverage-heading" className="text-center text-3xl font-bold text-navy-800 sm:text-4xl">
                Professional Coverage Solutions
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-slate-700">
                Personalized protection options backed by responsive, local support.
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
        </main>
      </div>
    </>
  );
}
