import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>MC Global Insurance | South Florida</title>
        <meta name="description" content="Expert insurance solutions for homeowners, auto, and businesses in South Florida. Bilingual agents ready to help." />
      </Head>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', sans-serif;
          color: #333;
          line-height: 1.6;
        }

        header {
          background: white;
          border-bottom: 1px solid #e0e0e0;
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #003D7A;
        }

        .nav {
          display: flex;
          gap: 2rem;
        }

        .nav a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav a:hover {
          color: #003D7A;
        }

        .hero {
          background: linear-gradient(135deg, #003D7A 0%, #005BA6 100%);
          color: white;
          padding: 5rem 2rem;
          text-align: center;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 2.8rem;
          margin-bottom: 1rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary {
          background: white;
          color: #003D7A;
        }

        .btn-primary:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .services {
          max-width: 1200px;
          margin: 4rem auto;
          padding: 0 2rem;
        }

        .services h2 {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 3rem;
          color: #003D7A;
          font-weight: 700;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 61, 122, 0.15);
        }

        .service-image {
          width: 100%;
          height: 220px;
          background: #f0f0f0;
          object-fit: cover;
        }

        .service-content {
          padding: 2rem;
        }

        .service-card h3 {
          color: #003D7A;
          margin-bottom: 1rem;
          font-size: 1.4rem;
          font-weight: 600;
        }

        .service-card p {
          color: #666;
          line-height: 1.8;
          font-size: 1rem;
        }

        .agents {
          background: #f5f5f5;
          padding: 4rem 2rem;
          margin: 4rem 0;
        }

        .agents-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .agents h2 {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 3rem;
          color: #003D7A;
          font-weight: 700;
        }

        .agents-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .agent-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 61, 122, 0.1);
        }

        .agent-card h3 {
          color: #003D7A;
          margin-bottom: 0.5rem;
          font-size: 1.4rem;
          font-weight: 600;
        }

        .agent-card p {
          color: #666;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .spanish {
          color: #005BA6;
          font-weight: 500;
          font-size: 1.05rem;
        }

        .contact {
          background: #003D7A;
          color: white;
          padding: 4rem 2rem;
          text-align: center;
        }

        .contact-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .contact h2 {
          font-size: 2.2rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .contact > .contact-content > p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .contact-item h3 {
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .contact-item p {
          opacity: 0.9;
          font-size: 1rem;
        }

        .contact-item a {
          color: white;
          text-decoration: none;
          font-weight: 600;
        }

        .contact-item a:hover {
          text-decoration: underline;
        }

        footer {
          background: #001a4d;
          color: white;
          text-align: center;
          padding: 2rem;
          font-size: 0.95rem;
        }

        .badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          margin: 0.5rem;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .trust-text {
          color: #999;
          font-size: 0.9rem;
          margin-top: 1rem;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }

          .services h2, .agents h2, .contact h2 {
            font-size: 1.8rem;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>

      <header>
        <div className="header-content">
          <div className="logo">MC Global Insurance</div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#agents">Meet Our Team</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Insurance You Can Trust for South Florida Living</h1>
          <p>From your home to your car to your business—we've got you covered.</p>
          <div className="cta-buttons">
            <a href="tel:305-390-8821" className="btn btn-primary">☎️ Call Now: (305) 390-8821</a>
            <a href="#contact" className="btn btn-secondary">Get a Free Quote</a>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <h2>Insurance for Every Part of Your Life</h2>
        <div className="services-grid">
          <div className="service-card">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=220&fit=crop" 
              alt="Beautiful home with sunset" 
              className="service-image"
            />
            <div className="service-content">
              <h3>🏠 Homeowners Insurance</h3>
              <p>Protect your home and family from hurricanes, storms, and unexpected events. We understand South Florida weather.</p>
              <p className="trust-text">Fast quotes • Great rates • Local expertise</p>
            </div>
          </div>

          <div className="service-card">
            <img 
              src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=220&fit=crop" 
              alt="Red car on the road" 
              className="service-image"
            />
            <div className="service-content">
              <h3>🚗 Auto Insurance</h3>
              <p>Coverage for your peace of mind. Liability, collision, comprehensive—get the protection you need at a price you'll love.</p>
              <p className="trust-text">Affordable • Flexible • Trusted</p>
            </div>
          </div>

          <div className="service-card">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=220&fit=crop" 
              alt="Modern office building" 
              className="service-image"
            />
            <div className="service-content">
              <h3>💼 Business Insurance</h3>
              <p>Whether you run a restaurant, shop, office, or service business—we have the coverage to keep you protected and running.</p>
              <p className="trust-text">Customized • Comprehensive • Competitive</p>
            </div>
          </div>
        </div>
      </section>

      <section id="agents" className="agents">
        <div className="agents-content">
          <h2>Meet Your Insurance Experts</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
            Local agents who speak your language and understand your needs.
          </p>
          <div className="agents-grid">
            <div className="agent-card">
              <h3>👩 Mayleny</h3>
              <p style={{ fontSize: '1.05rem' }}>Homeowners Insurance Specialist</p>
              <p className="spanish">Especialista en Seguros de Vivienda</p>
              <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#999' }}>
                ✓ Expert in HO policies<br />
                ✓ Habla Español fluently<br />
                ✓ 10+ years experience
              </p>
            </div>
            <div className="agent-card">
              <h3>👨 Javier</h3>
              <p style={{ fontSize: '1.05rem' }}>Insurance Agent & RE Outreach</p>
              <p className="spanish">Agente de Seguros & Alcance Inmobiliario</p>
              <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#999' }}>
                ✓ All lines of insurance<br />
                ✓ Bilingual EN/ES<br />
                ✓ Real estate partnerships
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-content">
          <h2>Ready to Get Protected?</h2>
          <p>Let's find the right insurance plan for you. No pressure, no hassle—just honest advice.</p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>📞 Give Us a Call</h3>
              <p><a href="tel:305-390-8821">(305) 390-8821</a></p>
              <p style={{ fontSize: '0.9rem' }}>Monday - Friday, 9AM-6PM</p>
            </div>
            <div className="contact-item">
              <h3>📍 Visit Our Office</h3>
              <p>
                2665 S Bayshore Dr<br />
                Suite 220-29<br />
                Miami, FL 33133
              </p>
            </div>
            <div className="contact-item">
              <h3>🗣️ We Speak Your Language</h3>
              <p>English • Spanish<br /><span className="badge">Hablamos Español</span></p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 MC Global Insurance. Serving South Florida communities with care and expertise.</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Licensed Sebanda Insurance Franchise • Florida License #ABC123
        </p>
      </footer>
    </>
  );
}
