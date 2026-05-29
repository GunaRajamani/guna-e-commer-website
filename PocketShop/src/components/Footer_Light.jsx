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
    { icon: '𝕏', label: 'Twitter', color: '#3b82f6' },
    { icon: 'f', label: 'Facebook', color: '#10b981' },
    { icon: '📷', label: 'Instagram', color: '#f59e0b' },
    { icon: '💼', label: 'LinkedIn', color: '#3b82f6' },
  ]

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const support = [
    { label: 'Help Center', href: '#' },
    { label: 'Track Order', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'FAQ', href: '#' },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Inter:wght@300;400;500;600&display=swap');

        .ps-footer {
          position: relative;
          width: 100%;
          background: linear-gradient(135deg, #f8fafc, #f1f5f9);
          border-top: 1px solid rgba(0,0,0,0.08);
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .ps-footer-content {
          position: relative; z-index: 2;
          max-width: 1320px; margin: 0 auto; padding: 80px 6% 40px;
        }

        .ps-footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1.3fr;
          gap: 48px;
          margin-bottom: 60px;
        }

        .ps-footer-brand h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 28px; font-weight: 800;
          color: #1f2937; margin: 0 0 12px;
          letter-spacing: -0.5px;
        }
        .ps-footer-brand h2 span { color: #3b82f6; }
        .ps-footer-brand-dot {
          display: inline-block; width: 6px; height: 6px;
          border-radius: 50%; background: #3b82f6;
          margin-left: 3px; vertical-align: middle;
        }

        .ps-footer-desc {
          font-size: 14px; color: rgba(0,0,0,0.55);
          line-height: 1.8; max-width: 280px; margin-bottom: 24px;
          font-weight: 400;
        }

        .ps-footer-socials {
          display: flex; gap: 10px;
        }
        .ps-footer-social-btn {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.08);
          color: #1f2937;
          font-size: 18px; font-weight: 600;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        .ps-footer-social-btn:hover {
          transform: translateY(-3px);
          background: rgba(59,130,246,0.1);
          border-color: rgba(59,130,246,0.3);
          box-shadow: 0 8px 16px rgba(59,130,246,0.15);
        }

        .ps-footer-col h3 {
          font-size: 12px; font-weight: 700;
          color: rgba(0,0,0,0.7);
          text-transform: uppercase; letter-spacing: 1.5px;
          margin: 0 0 20px;
        }

        .ps-footer-col ul {
          list-style: none; margin: 0; padding: 0;
        }
        .ps-footer-col li { margin-bottom: 10px; }
        .ps-footer-col a {
          font-size: 14px; color: rgba(0,0,0,0.55);
          text-decoration: none; font-weight: 400;
          transition: color 0.25s, transform 0.25s;
          display: inline-block;
        }
        .ps-footer-col a:hover {
          color: #3b82f6;
          transform: translateX(4px);
        }

        .ps-footer-newsletter {
          padding: 32px; border-radius: 16px;
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.15);
        }

        .ps-footer-newsletter h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 18px; font-weight: 800;
          color: #1f2937; margin: 0 0 8px;
        }

        .ps-footer-newsletter-sub {
          font-size: 14px; color: rgba(0,0,0,0.55);
          margin-bottom: 20px; font-weight: 400;
        }

        .ps-footer-form {
          display: flex; gap: 8px; margin-bottom: 12px;
        }

        .ps-footer-input {
          flex: 1;
          padding: 12px 16px;
          border-radius: 10px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(59,130,246,0.2);
          color: #1f2937;
          font-size: 14px;
          outline: none;
          transition: all 0.25s;
          font-family: 'Inter', sans-serif;
        }
        .ps-footer-input::placeholder { color: rgba(0,0,0,0.3); }
        .ps-footer-input:focus {
          border-color: rgba(59,130,246,0.5);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }

        .ps-footer-btn {
          padding: 12px 24px;
          border-radius: 10px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #fff;
          border: none;
          font-size: 14px; font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
          font-family: 'Inter', sans-serif;
        }
        .ps-footer-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59,130,246,0.3);
        }

        .ps-footer-status {
          font-size: 13px; height: 20px;
          display: flex; align-items: center;
          color: #10b981;
        }

        .ps-footer-divider {
          height: 1px;
          background: rgba(0,0,0,0.08);
          margin: 40px 0;
        }

        .ps-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 40px;
        }

        .ps-footer-contact {
          display: flex; gap: 24px;
        }

        .ps-footer-contact-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 14px; color: rgba(0,0,0,0.6);
        }

        .ps-footer-copyright {
          font-size: 12px; color: rgba(0,0,0,0.45);
        }

        @media (max-width: 1024px) {
          .ps-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }

        @media (max-width: 640px) {
          .ps-footer-content { padding: 60px 5% 30px; }
          .ps-footer-grid { grid-template-columns: 1fr; gap: 24px; }
          .ps-footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
          .ps-footer-contact { flex-direction: column; gap: 12px; }
          .ps-footer-form { flex-direction: column; }
          .ps-footer-btn { width: 100%; }
        }
      `}</style>

      <footer className="ps-footer">
        <div className="ps-footer-content">
          <div className="ps-footer-grid">
            <div className="ps-footer-brand">
              <h2>
                Pocket<span>Shop</span>
                <span className="ps-footer-brand-dot" />
              </h2>
              <p className="ps-footer-desc">
                Your favorite online shopping destination for fashion, tech, and home essentials. Discover quality products at great prices.
              </p>
              <div className="ps-footer-socials">
                {socials.map((social) => (
                  <button key={social.label} className="ps-footer-social-btn" title={social.label}>
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            <div className="ps-footer-col">
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>

            <div className="ps-footer-col">
              <h3>Support</h3>
              <ul>
                {support.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>

            <div className="ps-footer-newsletter">
              <h3>Stay Updated</h3>
              <p className="ps-footer-newsletter-sub">
                Get the latest deals and new arrivals delivered to your inbox.
              </p>
              <form onSubmit={handleSubscribe}>
                <div className="ps-footer-form">
                  <input
                    type="email"
                    className="ps-footer-input"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="ps-footer-btn">
                    Subscribe
                  </button>
                </div>
              </form>
              {subStatus === 'success' && (
                <div className="ps-footer-status">
                  ✓ Thanks for subscribing!
                </div>
              )}
            </div>
          </div>

          <div className="ps-footer-divider" />

          <div className="ps-footer-bottom">
            <div className="ps-footer-contact">
              <div className="ps-footer-contact-item">📧 support@pocketshop.in</div>
              <div className="ps-footer-contact-item">📞 +91 (800) 123-4567</div>
              <div className="ps-footer-contact-item">📍 Mumbai, India</div>
            </div>
            <div className="ps-footer-copyright">
              © 2026 PocketShop. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
