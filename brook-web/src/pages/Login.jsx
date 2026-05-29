import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log({ email, password })
    alert("Login Successful")
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&display=swap');

        .lg-root {
          min-height: 100vh;
          background: #04060f;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          font-family: 'Outfit', sans-serif; padding: 20px;
        }

        .lg-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(0,220,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,220,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.6;
        }

        .lg-orb {
          position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none;
        }
        .lg-orb1 {
          width: 700px; height: 700px; background: #00dcff; top: -200px; left: -150px; opacity: 0.15;
        }
        .lg-orb2 {
          width: 600px; height: 600px; background: #c084fc; bottom: -200px; right: -150px; opacity: 0.12;
        }

        .lg-particles {
          position: absolute; inset: 0; pointer-events: none;
        }

        .lg-particle {
          position: absolute; border-radius: 50%; pointer-events: none;
          animation: particleFloat 8s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(20px); }
        }

        .lg-card {
          position: relative; z-index: 2;
          width: 100%; max-width: 440px;
          padding: 48px;
          border-radius: 24px;
          background: rgba(4,6,15,0.6);
          border: 1px solid rgba(0,220,255,0.15);
          backdrop-filter: blur(20px);
          box-shadow: 0 0 60px rgba(0,220,255,0.08), inset 0 0 30px rgba(0,220,255,0.04);
        }

        .lg-title {
          font-family: 'Syne', sans-serif; font-size: 42px; font-weight: 800;
          color: #fff; margin-bottom: 10px; text-align: center; letter-spacing: -1px;
        }
        .lg-title span { color: #00dcff; }

        .lg-sub {
          color: rgba(255,255,255,0.45); text-align: center; margin-bottom: 36px;
          font-size: 14px; font-weight: 300;
        }

        .lg-group { margin-bottom: 22px; }

        .lg-label {
          display: block; margin-bottom: 8px; color: rgba(255,255,255,0.7);
          font-size: 13px; font-weight: 500; letter-spacing: 0.5px;
        }

        .lg-input {
          width: 100%; padding: 14px 16px; border-radius: 12px;
          border: 1px solid rgba(0,220,255,0.18); background: rgba(255,255,255,0.03);
          color: #fff; outline: none; transition: 0.3s; font-size: 14px;
          font-family: 'Outfit', sans-serif;
        }
        .lg-input::placeholder { color: rgba(255,255,255,0.2); }
        .lg-input:focus {
          border-color: #00dcff; background: rgba(0,220,255,0.08);
          box-shadow: 0 0 20px rgba(0,220,255,0.15);
        }

        .lg-btn {
          width: 100%; padding: 15px; border: none; border-radius: 12px;
          background: #00dcff; color: #04060f; font-size: 15px; font-weight: 700;
          cursor: pointer; transition: 0.3s; margin-top: 12px;
          font-family: 'Outfit', sans-serif;
        }
        .lg-btn:hover {
          transform: translateY(-2px); box-shadow: 0 0 32px rgba(0,220,255,0.35);
        }

        .lg-footer {
          text-align: center; margin-top: 24px;
          color: rgba(255,255,255,0.45); font-size: 14px;
        }
        .lg-footer a {
          color: #00dcff; text-decoration: none; transition: color 0.25s;
        }
        .lg-footer a:hover { color: #00ffb3; }

        .lg-divider {
          height: 1px; background: rgba(0,220,255,0.1); margin: 24px 0;
        }

        .lg-demo {
          text-align: center; font-size: 12px; color: rgba(255,255,255,0.35);
        }

        @media (max-width: 480px) {
          .lg-card { padding: 32px 24px; }
          .lg-title { font-size: 32px; }
        }
      `}</style>

      <div className="lg-root">
        <div className="lg-grid" />
        <div className="lg-orb lg-orb1" />
        <div className="lg-orb lg-orb2" />

        <form className="lg-card" onSubmit={handleLogin}>
          <h1 className="lg-title">
            Nex<span>kart</span>
          </h1>

          <p className="lg-sub">
            Welcome back! Login to continue shopping
          </p>

          <div className="lg-group">
            <label className="lg-label">Email Address</label>
            <input
              type="email"
              className="lg-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="lg-group">
            <label className="lg-label">Password</label>
            <input
              type="password"
              className="lg-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="lg-btn">
            Login to Nexkart
          </button>

          <div className="lg-divider" />

          <div className="lg-footer">
            Don't have an account?{" "}
            <Link to="/register">
              Create one here
            </Link>
          </div>

          <div className="lg-demo" style={{ marginTop: '16px' }}>
            Demo: any email & password
          </div>
        </form>
      </div>
    </>
  )
}

export default Login