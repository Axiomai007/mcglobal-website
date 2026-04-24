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
          padding: 6rem 2rem;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .hero p {
          font-size: 1.3rem;
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
          padding: 1rem 2rem;
          font-size: 1rem;
          border: none;
          border-radius: 4px;
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
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #003D7A;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: #f9f9f9;
          padding: 2rem;
          border-radius: 8px;
          border-left: 4px solid #003D7A;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 61, 122, 0.15);
        }

        .service-card h3 {
          color: #003D7A;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .service-card p {
          color: #666;
          line-height: 1.8;
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
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #003D7A;
        }

        .agents-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
        }

        .agent-card p {
          color: #666;
          margin-bottom: 0.5rem;
        }

        .spanish {
          color: #005BA6;
          font-weight: 500;
        }

        .contact {
          background: #003D7A;
          color: white;
          padding: 4rem 2rem;
          text-align: center;
        }

        .contact-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .contact h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .contact-item h3 {
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .contact-item p {
          opacity: 0.9;
        }

        .contact-item a {
          color: white;
          text-decoration: none;
          font-weight: 600;
        }

        footer {
          background: #001a4d;
          color: white;
          text-align: center;
          padding: 2rem;
          font-size: 0.9rem;
        }

        .badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          margin: 0.5rem;
          font-size: 0.9rem;
        }
      `}</style>

      <header>
        <div className="header-content">
          <div className="logo">MC Global Insurance</div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#agents">Agents</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Expert Insurance Solutions for South Florida</h1>
          <p>Homeowners • Auto • Commercial • Bilingual Agents</p>
          <div className="cta-buttons">
            <a href="tel:305-390-8821" className="btn btn-primary">Call Now: (305) 390-8821</a>
            <a href="#contact" className="btn btn-secondary">Get a Quote</a>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>🏠 Homeowners Insurance</h3>
            <p>Comprehensive coverage for your home and personal property. We specialize in protecting South Florida homes against hurricanes and tropical weather.</p>
          </div>
          <div className="service-card">
            <h3>🚗 Auto Insurance</h3>
            <p>Liability, collision, comprehensive, and more. Get the coverage you need at rates that fit your budget.</p>
          </div>
          <div className="service-card">
            <h3>💼 Commercial Insurance</h3>
            <p>Tailored business insurance solutions for shops, offices, restaurants, and service businesses throughout South Florida.</p>
          </div>
        </div>
      </section>

      <section className="agents">
        <div className="agents-content">
          <h2>Meet Our Agents</h2>
          <div className="agents-grid">
            <div className="agent-card">
              <h3>Mayleny</h3>
              <p>Homeowners Insurance Specialist</p>
              <p className="spanish">Especialista en Seguros de Vivienda</p>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#999' }}>Expert in HO policies • Habla Español</p>
            </div>
            <div className="agent-card">
              <h3>Javier</h3>
              <p>Insurance Agent • Real Estate Outreach</p>
              <p className="spanish">Agente de Seguros • Alcance Inmobiliario</p>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#999' }}>All lines • Bilingual EN/ES</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-content">
          <h2>Contact Us Today</h2>
          <p>Ready to protect what matters? Get a quote or speak with one of our agents.</p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p><a href="tel:305-390-8821">(305) 390-8821</a></p>
            </div>
            <div className="contact-item">
              <h3>📍 Office</h3>
              <p>2665 S Bayshore Dr<br />Suite 220-29<br />Miami, FL 33133</p>
            </div>
            <div className="contact-item">
              <h3>🗣️ Languages</h3>
              <p>English & Spanish<br /><span className="badge">Hablamos Español</span></p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 MC Global Insurance. Proudly serving South Florida.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Licensed Sebanda Insurance Franchise</p>
      </footer>
    </>
  );
}
