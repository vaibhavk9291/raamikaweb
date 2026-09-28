import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raamika Smart Solutions Private Limited | Information Services",
  description: "Official website of Raamika Smart Solutions Private Limited, an Indian information services company.",
  openGraph: {
    title: "Raamika Smart Solutions Private Limited",
    description: "Official website of Raamika Smart Solutions Private Limited, an Indian information services company.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <header className="header">
          <div className="container header-content">
            <div className="logo-container">
              {/* Replace with actual logo image later */}
              <div style={{ width: 40, height: 40, backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c4a777', fontWeight: 'bold', fontSize: '1.5rem', borderRadius: '4px' }}>R</div>
              <div>
                <div className="logo-text">Raamika Smart Solutions</div>
                <div className="logo-subtext">Private Limited</div>
              </div>
            </div>
            <nav className="nav-links">
              <a href="/" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <h4>Raamika Smart Solutions Private Limited</h4>
                <p>Information Services</p>
                <p style={{ marginTop: '16px', opacity: 0.7, fontSize: '0.85rem' }}>
                  Reliable information and business support solutions designed to meet professional requirements.
                </p>
              </div>
              <div>
                <h4>Quick Links</h4>
                <ul className="footer-links">
                  <li><a href="/">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4>Legal</h4>
                <ul className="footer-links">
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/terms">Terms of Use</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              &copy; 2026 Raamika Smart Solutions Private Limited. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
