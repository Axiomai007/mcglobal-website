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
          padding: 1.5rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
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
          font-size: 1.4rem;
          font-weight: 700;
          color: #003D7A;
          letter-spacing: -0.5px;
        }

        .nav {
          display: flex;
          gap: 2.5rem;
        }

        .nav a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s;
        }

        .nav a:hover {
          color: #003D7A;
        }

        .hero {
          background: linear-gradient(135deg, #003D7A 0%, #005BA6 100%);
          color: white;
          padding: 6rem 2rem;
          text-align: center;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          opacity: 0.95;
          font-weight: 300;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1.1rem 2.8rem;
          font-size: 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
          letter-spacing: 0.5px;
        }

        .btn-primary {
          background: white;
          color: #003D7A;
        }

        .btn-primary:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.15);
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .services {
          max-width: 1200px;
          margin: 5rem auto;
          padding: 0 2rem;
        }

        .services h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3.5rem;
          color: #003D7A;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .service-card {
          background: white;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s, box-shadow 0.3s;
          border-top: 4px solid #003D7A;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 61, 122, 0.12);
        }

        .service-image {
          width: 100%;
          height: 240px;
          background: #f0f0f0;
          object-fit: cover;
        }

        .service-content {
          padding: 2.5rem;
        }

        .service-card h3 {
          color: #003D7A;
          margin-bottom: 1rem;
          font-size: 1.4rem;
          font-weight: 600;
          letter-spacing: -0.3px;
        }

        .service-card p {
          color: #555;
          line-height: 1.8;
          font-size: 1rem;
        }

        .agents {
          background: #f8f8f8;
          padding: 5rem 2rem;
        }

        .agents-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .agents h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #003D7A;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .agents-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 3rem;
          font-size: 1.05rem;
        }

        .agents-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .agent-card {
          background: white;
          padding: 2.5rem;
          border-radius: 6px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 61, 122, 0.08);
          border-top: 4px solid #005BA6;
        }

        .agent-card h3 {
          color: #003D7A;
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .agent-card p {
          color: #666;
          margin-bottom: 0.8rem;
          font-size: 1rem;
        }

        .spanish {
          color: #005BA6;
          font-weight: 500;
        }

        .agent-details {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e0e0e0;
          font-size: 0.9rem;
          color: #666;
          line-height: 2;
        }

        .contact {
          background: #003D7A;
          color: white;
          padding: 5rem 2rem;
          text-align: center;
        }

        .contact-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .contact h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .contact > .contact-content > p {
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          opacity: 0.95;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2.5rem;
          margin: 2rem 0;
        }

        .contact-item h3 {
          margin-bottom: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .contact-item p {
          opacity: 0.9;
          font-size: 1rem;
          line-height: 1.8;
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
          padding: 2.5rem;
          font-size: 0.9rem;
        }

        footer p {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.2rem;
          }

          .services h2, .agents h2, .contact h2 {
            font-size: 2rem;
          }

          .nav {
            gap: 1.5rem;
            font-size: 0.9rem;
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
            <a href="#agents">Our Team</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Insurance Protection for South Florida Living</h1>
          <p>Home. Auto. Business. We cover what matters to you.</p>
          <div className="cta-buttons">
            <a href="tel:305-390-8821" className="btn btn-primary">Call (305) 390-8821</a>
            <a href="#contact" className="btn btn-secondary">Get a Free Quote</a>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <h2>Our Insurance Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=240&fit=crop" 
              alt="Home with evening sky" 
              className="service-image"
            />
            <div className="service-content">
              <h3>Homeowners Insurance</h3>
              <p>Comprehensive protection for your home and property. We understand the unique risks of South Florida living—hurricanes, storms, and coastal weather.</p>
            </div>
          </div>

          <div className="service-card">
            <img 
              src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=240&fit=crop" 
              alt="Vehicle on road" 
              className="service-image"
            />
            <div className="service-content">
              <h3>Auto Insurance</h3>
              <p>Coverage that protects you on the road. Liability, collision, comprehensive, and more—all with rates designed to fit your budget.</p>
            </div>
          </div>

          <div className="service-card">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=240&fit=crop" 
              alt="Modern office" 
              className="service-image"
            />
            <div className="service-content">
              <h3>Business Insurance</h3>
              <p>Tailored coverage for restaurants, retail shops, offices, service businesses, and more. Keep your business protected and operating smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="agents" className="agents">
        <div className="agents-content">
          <h2>Meet Your Agents</h2>
          <p className="agents-subtitle">Local expertise, personalized service, and bilingual support.</p>
          <div className="agents-grid">
            <div className="agent-card">
              <h3>Mayleny</h3>
              <p>Homeowners Insurance Specialist</p>
              <p className="spanish">Especialista en Seguros de Vivienda</p>
              <div className="agent-details">
                <div>Expert in HO policies</div>
                <div>Fluent Spanish speaker</div>
                <div>10+ years experience</div>
              </div>
            </div>
            <div className="agent-card">
              <h3>Javier</h3>
              <p>Insurance Agent & Real Estate Outreach</p>
              <p className="spanish">Agente de Seguros & Alcance Inmobiliario</p>
              <div className="agent-details">
                <div>All lines of insurance</div>
                <div>Bilingual English/Spanish</div>
                <div>Real estate partnerships</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-content">
          <h2>Get Your Quote Today</h2>
          <p>Contact us for a free, no-obligation quote. Our team is ready to help.</p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Phone</h3>
              <p><a href="tel:305-390-8821">(305) 390-8821</a></p>
              <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Monday - Friday, 9AM - 6PM</p>
            </div>
            <div className="contact-item">
              <h3>Office Location</h3>
              <p>
                2665 S Bayshore Drive<br />
                Suite 220-29<br />
                Miami, FL 33133
              </p>
            </div>
            <div className="contact-item">
              <h3>Languages</h3>
              <p>
                English<br />
                Spanish<br />
                <span style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.9rem' }}>Hablamos Español</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 MC Global Insurance. Licensed Sebanda Insurance Franchise.</p>
        <p>Serving South Florida with professional insurance solutions.</p>
      </footer>
    </>
  );
}
