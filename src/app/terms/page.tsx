export default function TermsOfUse() {
  return (
    <div className="container" style={{ padding: '80px 24px', maxWidth: '800px' }}>
      <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Terms of Use</h1>
      <p style={{ opacity: 0.8, marginBottom: '40px' }}>Last Updated: [DATE]</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.7' }}>
        <p>
          These Terms of Use constitute a legally binding agreement made between you and Raamika Smart 
          Solutions Private Limited concerning your access to and use of this website.
        </p>

        <h3 style={{ marginTop: '16px' }}>1. Acceptance of Terms</h3>
        <p>
          By accessing this website, you agree to be bound by these Terms of Use and to comply with all 
          applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
          from using or accessing this site.
        </p>

        <h3 style={{ marginTop: '16px' }}>2. Informational Purpose</h3>
        <p>
          The content provided on this website is for general informational purposes only. We make no 
          representations or warranties of any kind, express or implied, about the completeness, accuracy, 
          reliability, suitability, or availability with respect to the website or the information contained on it.
        </p>

        <h3 style={{ marginTop: '16px' }}>3. Intellectual Property</h3>
        <p>
          The website and its original content, features, and functionality are owned by Raamika Smart 
          Solutions Private Limited and are protected by international copyright, trademark, and other 
          intellectual property or proprietary rights laws.
        </p>

        <h3 style={{ marginTop: '16px' }}>4. Limitations of Liability</h3>
        <p>
          In no event shall Raamika Smart Solutions Private Limited or its directors, employees, or 
          agents be liable for any direct, indirect, incidental, special, or consequential damages arising 
          out of or in any way connected with the use of this website.
        </p>

        <h3 style={{ marginTop: '16px' }}>5. Contact Information</h3>
        <p>
          For any questions regarding these Terms of Use, please contact us at:
        </p>
        <address style={{ fontStyle: 'normal', paddingLeft: '16px', borderLeft: '3px solid var(--color-border)', opacity: 0.9 }}>
          Email: contact@hellosakhee.com<br />
          Phone: 9109443721
        </address>
      </div>
    </div>
  );
}
