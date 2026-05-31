import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { totalItems } = useCart()
  const location = useLocation()

  const links = [
    { to: "/",        label: "Home"    },
    { to: "/about",   label: "About"   },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@300;400;500;600&display=swap');

        .ps-nav {
          position: sticky; top: 0; z-index: 9999;
          width: 100%; height: 68px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 6%;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(59,130,246,0.1);
          font-family: 'Inter', sans-serif;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }

        .ps-logo {
          font-family: 'Poppins', sans-serif;
          font-size: 24px; font-weight: 700;
          color: #1f2937; text-decoration: none;
          letter-spacing: -0.5px;
          position: relative; z-index: 1;
        }
        .ps-logo span { color: #3b82f6; }
        .ps-logo-dot {
          display: inline-block; width: 6px; height: 6px;
          border-radius: 50%; background: #3b82f6;
          margin-left: 3px; vertical-align: middle;
          margin-bottom: 3px;
          animation: psBlink 2s ease-in-out infinite;
        }
        @keyframes psBlink {
          0%,100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .ps-links {
          display: flex; align-items: center; gap: 4px;
          list-style: none; margin: 0; padding: 0;
          position: relative; z-index: 1;
        }

        .ps-link {
          font-size: 14px; font-weight: 500; color: #6b7280;
          text-decoration: none; padding: 7px 14px; border-radius: 8px;
          transition: color 0.25s, background 0.25s;
        }
        .ps-link:hover { color: #3b82f6; background: rgba(59,130,246,0.08); }
        .ps-link.active { color: #3b82f6; background: rgba(59,130,246,0.12); }

        .ps-cart {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 20px; border-radius: 10px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #fff; font-size: 14px; font-weight: 600;
          text-decoration: none; position: relative;
          transition: transform 0.2s, box-shadow 0.3s;
          z-index: 1;
        }
        .ps-cart:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59,130,246,0.25);
        }

        .ps-badge {
          position: absolute; top: -8px; right: -8px;
          min-width: 20px; height: 20px; padding: 0 5px;
          border-radius: 10px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: #fff; font-size: 11px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid #fff;
          animation: psBadgePop 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes psBadgePop { from{transform:scale(0)} to{transform:scale(1)} }

        @media (max-width: 640px) {
          .ps-links { display: none; }
          .ps-nav { padding: 0 4%; }
        }
      `}</style>

      <nav className="ps-nav">
        <Link to="/" className="ps-logo">
          Pocket<span>Shop</span>
          <span className="ps-logo-dot" />
        </Link>

        <ul className="ps-links">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className={`ps-link ${location.pathname === l.to ? "active" : ""}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
          <Link to="/login" className="ps-link">
            Login
          </Link>
          <Link to="/profile" className="ps-link">
            👤 Pofile
          </Link>
          <Link to="/cart" className="ps-cart">
            🛒 Cart
            {totalItems > 0 && <span className="ps-badge">{totalItems}</span>}
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
