import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState(null)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubStatus('success')
      setEmail('')
      setTimeout(() => setSubStatus(null), 3000)
    }
  }

  const socials = [
    { icon: '𝕏', label: 'Twitter', color: '#00dcff' },
    { icon: 'f', label: 'Facebook', color: '#00ffb3' },
    { icon: '📷', label: 'Instagram', color: '#c084fc' },
    { icon: '💼', label: 'LinkedIn', color: '#00dcff' },
  ]

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/collections' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const support = [
    { label: 'Help Center', href: '#' },
    { label: 'Track Order', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Shipping Info', href: '#' },
    { label: 'FAQ', href: '#' },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&display=swap');

        .ft-root {
          position: relative;
          width: 100%;
          background: #04060f;
          border-top: 1px solid rgba(0,220,255,0.1);
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
        }

        /* animated bg */
        .ft-bg-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(0,220,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,220,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.5;
        }

        .ft-glow-orb {
          position: absolute; border-radius: 50%;
          filter: blur(120px); pointer-events: none;
          opacity: 0.08;
        }
        .ft-orb-1 { width: 600px; height: 600px; bottom: -200px; left: -150px; background: #00dcff; }
        .ft-orb-2 { width: 500px; height: 500px; top: -100px; right: -100px; background: #c084fc; }

        .ft-content {
          position: relative; z-index: 2;
          max-width: 1320px; margin: 0 auto; padding: 80px 6% 40px;
        }

        /* main grid */
        .ft-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1.3fr;
          gap: 48px;
          margin-bottom: 60px;
        }

        /* brand section */
        .ft-brand h2 {
          font-family: 'Syne', sans-serif;
          font-size: 28px; font-weight: 800;
          color: #fff; margin: 0 0 12px;
          letter-spacing: -0.5px;
        }
        .ft-brand h2 span { color: #00dcff; }
        .ft-brand-dot {
          display: inline-block; width: 6px; height: 6px;
          border-radius: 50%; background: #00dcff;
          margin-left: 4px; vertical-align: middle;
          box-shadow: 0 0 8px #00dcff;
        }

        .ft-brand-desc {
          font-size: 14px; color: rgba(255,255,255,0.45);
          line-height: 1.8; max-width: 280px; margin-bottom: 24px;
          font-weight: 300;
        }

        .ft-socials {
          display: flex; gap: 10px;
        }
        .ft-social-btn {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          font-size: 18px; font-weight: 600;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.3s, border-color 0.3s, transform 0.2s, box-shadow 0.3s;
          position: relative;
          overflow: hidden;
        }
        .ft-social-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle, rgba(0,220,255,0.2), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .ft-social-btn:hover {
          transform: translateY(-3px);
          background: rgba(0,220,255,0.12);
          border-color: rgba(0,220,255,0.4);
          box-shadow: 0 0 24px rgba(0,220,255,0.2), inset 0 0 16px rgba(0,220,255,0.08);
        }
        .ft-social-btn:hover::before { opacity: 1; }

        /* link columns */
        .ft-col h3 {
          font-size: 12px; font-weight: 600;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase; letter-spacing: 2px;
          margin: 0 0 20px;
        }

        .ft-col ul {
          list-style: none; margin: 0; padding: 0;
        }

        .ft-col li {
          margin-bottom: 10px;
        }

        .ft-col a {
          font-size: 14px; color: rgba(255,255,255,0.45);
          text-decoration: none; font-weight: 300;
          transition: color 0.25s, transform 0.25s;
          display: inline-block;
        }
        .ft-col a:hover {
          color: #00dcff;
          transform: translateX(4px);
        }

        /* newsletter */
        .ft-newsletter {
          padding: 32px; border-radius: 20px;
          background: rgba(0,220,255,0.05);
          border: 1px solid rgba(0,220,255,0.15);
          backdrop-filter: blur(16px);
        }

        .ft-newsletter h3 {
          font-family: 'Syne', sans-serif;
          font-size: 18px; font-weight: 800;
          color: #fff; margin: 0 0 8px;
          letter-spacing: -0.5px;
        }

        .ft-newsletter-sub {
          font-size: 13px; color: rgba(255,255,255,0.45);
          margin-bottom: 20px; font-weight: 300;
        }

        .ft-newsletter-form {
          display: flex; gap: 8px;
          margin-bottom: 12px;
        }

        .ft-newsletter-input {
          flex: 1;
          padding: 12px 16px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(0,220,255,0.2);
          color: #fff;
          font-size: 13px;
          font-family: 'Outfit', sans-serif;
          outline: none;
          transition: border-color 0.25s, background 0.25s;
        }
        .ft-newsletter-input::placeholder {
          color: rgba(255,255,255,0.2);
        }
        .ft-newsletter-input:focus {
          border-color: rgba(0,220,255,0.5);
          background: rgba(0,220,255,0.05);
        }

        .ft-newsletter-btn {
          padding: 12px 24px;
          border-radius: 10px;
          background: #00dcff;
          color: #04060f;
          border: none;
          font-size: 13px; font-weight: 600;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.3s;
          white-space: nowrap;
        }
        .ft-newsletter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 24px rgba(0,220,255,0.4);
        }

        .ft-newsletter-status {
          font-size: 12px; height: 20px;
          display: flex; align-items: center;
        }
        .ft-status-success {
          color: #00ffb3;
          animation: statusSlideIn 0.3s ease forwards;
        }
        @keyframes statusSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* divider */
        .ft-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,220,255,0.2), transparent);
          margin: 40px 0;
        }

        /* bottom section */
        .ft-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 40px;
        }

        .ft-contact {
          display: flex; gap: 24px;
        }

        .ft-contact-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; color: rgba(255,255,255,0.45);
        }
        .ft-contact-icon {
          font-size: 16px;
          color: #00dcff;
        }

        .ft-copyright {
          font-size: 12px; color: rgba(255,255,255,0.3);
          letter-spacing: 0.5px;
        }

        /* responsive */
        @media (max-width: 1024px) {
          .ft-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 640px) {
          .ft-content { padding: 60px 5% 30px; }
          .ft-grid { grid-template-columns: 1fr; gap: 24px; }
          .ft-bottom { flex-direction: column; gap: 20px; text-align: center; }
          .ft-contact { flex-direction: column; gap: 12px; }
          .ft-newsletter-form { flex-direction: column; }
          .ft-newsletter-btn { width: 100%; }
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-bg-grid" />
        <div className="ft-glow-orb ft-orb-1" />
        <div className="ft-glow-orb ft-orb-2" />

        <div className="ft-content">
          {/* Main Grid */}
          <div className="ft-grid">
            {/* Brand */}
            <div className="ft-brand">
              <h2>
                Nex<span>kart</span>
                <span className="ft-brand-dot" />
              </h2>
              <p className="ft-brand-desc">
                Premium e-commerce platform delivering curated fashion, tech, and lifestyle products across India with fast delivery and exceptional customer service.
              </p>
              <div className="ft-socials">
                {socials.map((social) => (
                  <button
                    key={social.label}
                    className="ft-social-btn"
                    title={social.label}
                    style={{
                      '--hover-color': social.color,
                    }}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="ft-col">
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="ft-col">
              <h3>Support</h3>
              <ul>
                {support.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="ft-newsletter">
              <h3>Stay Updated</h3>
              <p className="ft-newsletter-sub">
                Get the latest deals, new arrivals, and exclusive offers.
              </p>
              <form onSubmit={handleSubscribe}>
                <div className="ft-newsletter-form">
                  <input
                    type="email"
                    className="ft-newsletter-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="ft-newsletter-btn">
                    Subscribe
                  </button>
                </div>
              </form>
              {subStatus === 'success' && (
                <div className="ft-newsletter-status ft-status-success">
                  ✓ Thanks! Check your email.
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="ft-divider" />

          {/* Bottom */}
          <div className="ft-bottom">
            <div className="ft-contact">
              <div className="ft-contact-item">
                <span className="ft-contact-icon">📧</span>
                Gunarajamani321@gmail.com
              </div>
              <div className="ft-contact-item">
                <span className="ft-contact-icon">📞</span>
                +91 9342706640
              </div>
              <div className="ft-contact-item">
                <span className="ft-contact-icon">📍</span>
                Tamil Nadu, India
              </div>
            </div>
            <div className="ft-copyright">
              © 2026 Nexkart. All rights reserved. | Terms & Conditions | Privacy Policy
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}