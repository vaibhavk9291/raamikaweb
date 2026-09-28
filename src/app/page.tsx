export default function Home() {
  return (
    <>
      {/* 2. HERO SECTION */}
      <section className="hero">
        <div className="container">
          <h1>Reliable Information Services for Businesses</h1>
          <p>
            Raamika Smart Solutions Private Limited is an information services company focused on delivering reliable, technology-enabled information and business support solutions.
          </p>
          <a href="#contact" className="btn">Contact Us</a>
        </div>
      </section>

      {/* 3. ABOUT US */}
      <section id="about" className="section section-alt">
        <div className="container">
          <h2 className="section-title">About Raamika Smart Solutions Pvt Ltd</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', opacity: 0.9 }}>
            <p>
              Raamika Smart Solutions Private Limited is an Indian private limited company operating in the information services sector. The company focuses on providing information-oriented and technology-enabled services designed to support businesses and their operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="cards-grid">
            <div className="card">
              <h3>Information Services</h3>
              <p>Information collection, organization and delivery of business information.</p>
            </div>
            <div className="card">
              <h3>Technology-Enabled Services</h3>
              <p>Digital tools and technology-supported solutions for business requirements.</p>
            </div>
            <div className="card">
              <h3>Business Support Services</h3>
              <p>Information and operational support designed to assist organizations with their business activities.</p>
            </div>
            <div className="card">
              <h3>Digital Solutions</h3>
              <p>Technology-assisted information and digital services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY RAAMIKA */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Raamika</h2>
          <div className="cards-grid">
            <div className="card" style={{ textAlign: 'center', padding: '40px 24px' }}>
              <h3>Reliable</h3>
              <p>Focused on dependable information and service delivery.</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '40px 24px' }}>
              <h3>Professional</h3>
              <p>Structured approach to business requirements.</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '40px 24px' }}>
              <h3>Technology Enabled</h3>
              <p>Use of modern technology to support information services.</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '40px 24px' }}>
              <h3>Client Focused</h3>
              <p>Services designed around practical business requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPANY INFORMATION */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Company Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <h4>Legal Name</h4>
              <p>Raamika Smart Solutions Private Limited</p>
            </div>
            <div className="info-item">
              <h4>Entity Type</h4>
              <p>Private Limited Company</p>
            </div>
            <div className="info-item">
              <h4>Country</h4>
              <p>India</p>
            </div>
            <div className="info-item">
              <h4>Industry</h4>
              <p>Information Services</p>
            </div>
            <div className="info-item">
              <h4>CIN</h4>
              <p>63990MP2026PTC085695</p>
            </div>
            <div className="info-item">
              <h4>Registered Office</h4>
              <p>RAAMIKA SMART SOLUTIONS PRIVATE LIMITED 11D, Floor 4, Cabin 4, Sampat Farms, Opp Agrawal, Bicholi Mardana, Indore, Indore- 452016, Madhya Pradesh</p>
            </div>
            <div className="info-item">
              <h4>Email</h4>
              <p>contact@hellosakhee.com</p>
            </div>
            <div className="info-item">
              <h4>Phone</h4>
              <p>9109443721</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT US */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            For business enquiries, service-related questions, or general information, please contact us using the details below.
          </p>
          <div className="contact-grid">
            <div>
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Email</h3>
                <p style={{ opacity: 0.8 }}>contact@hellosakhee.com</p>
              </div>
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Phone</h3>
                <p style={{ opacity: 0.8 }}>9109443721</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Registered Office</h3>
                <p style={{ opacity: 0.8, lineHeight: '1.5' }}>RAAMIKA SMART SOLUTIONS PRIVATE LIMITED 11D, Floor 4, Cabin 4, Sampat Farms, Opp Agrawal, Bicholi Mardana, Indore, Indore- 452016, Madhya Pradesh</p>
              </div>
            </div>
            <div>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control" placeholder="Your Email Address" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className="form-control" placeholder="Your Enquiry"></textarea>
                </div>
                <button type="button" className="btn">Send Enquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
