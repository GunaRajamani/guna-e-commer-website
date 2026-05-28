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
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500&display=swap');

        .nk-nav {
          position: sticky; top: 0; z-index: 9999;
          width: 100%; height: 68px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 6%;
          background: rgba(4, 6, 15, 0.82);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(0, 220, 255, 0.08);
          font-family: 'Outfit', sans-serif;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }
        .nk-nav::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,220,255,0.012) 2px, rgba(0,220,255,0.012) 4px);
          pointer-events: none;
        }
        .nk-logo {
          font-family: 'Syne', sans-serif; font-size: 24px; font-weight: 800;
          color: #fff; text-decoration: none; letter-spacing: -0.5px;
          position: relative; z-index: 1;
        }
        .nk-logo-accent { color: #00dcff; position: relative; }
        .nk-logo-accent::after {
          content: ''; position: absolute; left: 0; bottom: -2px;
          width: 100%; height: 2px;
          background: linear-gradient(90deg, #00dcff, transparent); border-radius: 2px;
        }
        .nk-logo-dot {
          display: inline-block; width: 6px; height: 6px; border-radius: 50%;
          background: #00dcff; margin-left: 2px; vertical-align: middle; margin-bottom: 4px;
          box-shadow: 0 0 8px #00dcff; animation: nkBlink 2s ease-in-out infinite;
        }
        @keyframes nkBlink {
          0%,100% { opacity: 1; box-shadow: 0 0 8px #00dcff; }
          50%      { opacity: 0.4; box-shadow: 0 0 2px #00dcff; }
        }
        .nk-links {
          display: flex; align-items: center; gap: 4px;
          list-style: none; margin: 0; padding: 0; position: relative; z-index: 1;
        }
        .nk-link {
          font-size: 13.5px; font-weight: 400; color: rgba(255,255,255,0.5);
          text-decoration: none; padding: 7px 16px; border-radius: 8px;
          position: relative; transition: color 0.25s; letter-spacing: 0.3px;
        }
        .nk-link::after {
          content: ''; position: absolute; bottom: 4px; left: 50%;
          transform: translateX(-50%) scaleX(0); width: 60%; height: 1px;
          background: #00dcff; border-radius: 1px;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
          box-shadow: 0 0 6px #00dcff;
        }
        .nk-link:hover { color: #fff; }
        .nk-link:hover::after { transform: translateX(-50%) scaleX(1); }
        .nk-link.active { color: #00dcff; }
        .nk-link.active::after { transform: translateX(-50%) scaleX(1); }
        .nk-cart {
          position: relative; display: flex; align-items: center; gap: 8px;
          padding: 9px 22px; border-radius: 10px;
          background: rgba(0,220,255,0.07); border: 1px solid rgba(0,220,255,0.2);
          color: #00dcff; font-size: 13.5px; font-weight: 500;
          text-decoration: none; font-family: 'Outfit', sans-serif;
          transition: background 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.2s;
          z-index: 1; overflow: hidden;
        }
        .nk-cart:hover {
          background: rgba(0,220,255,0.13); border-color: rgba(0,220,255,0.55);
          box-shadow: 0 0 24px rgba(0,220,255,0.18); color: #00dcff; transform: translateY(-1px);
        }
        .nk-badge {
          position: absolute; top: -7px; right: -7px;
          min-width: 18px; height: 18px; padding: 0 4px; border-radius: 9px;
          background: linear-gradient(135deg, #ff3b5c, #ff0040); color: #fff;
          font-size: 10px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid #04060f; box-shadow: 0 0 10px rgba(255,0,64,0.5);
          animation: nkBadgePop 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes nkBadgePop { from{transform:scale(0)} to{transform:scale(1)} }
        .nk-right { display: flex; align-items: center; gap: 8px; position: relative; z-index: 1; }
        @media (max-width: 640px) { .nk-links{display:none} .nk-nav{padding:0 4%} }
      `}</style>

      <nav className="nk-nav">
        <Link to="/" className="nk-logo">
          Nex<span className="nk-logo-accent">kart</span>
          <span className="nk-logo-dot" />
        </Link>

        <ul className="nk-links">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className={`nk-link ${location.pathname === l.to ? "active" : ""}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nk-right">
          <Link to="/cart" className="nk-cart">
            🛒 Cart
            {totalItems > 0 && <span className="nk-badge">{totalItems}</span>}
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar