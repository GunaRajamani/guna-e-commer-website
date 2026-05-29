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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Inter:wght@300;400;500;600&display=swap');

        .ps-login-root {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          font-family: 'Inter', sans-serif;
          padding: 20px;
        }

        .ps-login-orb {
          position: absolute; border-radius: 50%;
          filter: blur(100px); pointer-events: none;
        }
        .ps-login-orb1 {
          width: 600px; height: 600px;
          background: rgba(59,130,246,0.2);
          top: -200px; left: -150px;
        }
        .ps-login-orb2 {
          width: 500px; height: 500px;
          background: rgba(16,185,129,0.15);
          bottom: -200px; right: -150px;
        }

        .ps-login-card {
          position: relative; z-index: 2;
          width: 100%; max-width: 440px;
          padding: 48px;
          border-radius: 24px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(59,130,246,0.12);
          backdrop-filter: blur(10px);
          box-shadow: 0 12px 48px rgba(0,0,0,0.1);
        }

        .ps-login-title {
          font-family: 'Poppins', sans-serif;
          font-size: 42px; font-weight: 800;
          color: #1f2937; margin: 0 0 10px;
          text-align: center; letter-spacing: -1px;
        }
        .ps-login-title span { color: #3b82f6; }

        .ps-login-sub {
          color: rgba(0,0,0,0.55);
          text-align: center; margin-bottom: 36px;
          font-size: 14px; font-weight: 400;
        }

        .ps-login-group { margin-bottom: 22px; }

        .ps-login-label {
          display: block; margin-bottom: 8px;
          color: rgba(0,0,0,0.7);
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.5px;
        }

        .ps-login-input {
          width: 100%; padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid rgba(59,130,246,0.2);
          background: rgba(59,130,246,0.04);
          color: #1f2937;
          outline: none;
          transition: all 0.3s;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
        }
        .ps-login-input::placeholder { color: rgba(0,0,0,0.2); }
        .ps-login-input:focus {
          border-color: #3b82f6;
          background: rgba(59,130,246,0.08);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }

        .ps-login-btn {
          width: 100%; padding: 15px;
          border: none; border-radius: 12px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #fff;
          font-size: 15px; font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 12px;
          font-family: 'Inter', sans-serif;
        }
        .ps-login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(59,130,246,0.3);
        }

        .ps-login-divider {
          height: 1px; background: rgba(0,0,0,0.08);
          margin: 24px 0;
        }

        .ps-login-footer {
          text-align: center; color: rgba(0,0,0,0.55);
          font-size: 14px;
        }
        .ps-login-footer a {
          color: #3b82f6; text-decoration: none;
          transition: color 0.25s;
        }
        .ps-login-footer a:hover { color: #2563eb; }

        .ps-login-demo {
          text-align: center; font-size: 12px;
          color: rgba(0,0,0,0.35); margin-top: 16px;
        }

        @media (max-width: 480px) {
          .ps-login-card { padding: 32px 24px; }
          .ps-login-title { font-size: 32px; }
        }
      `}</style>

      <div className="ps-login-root">
        <div className="ps-login-orb ps-login-orb1" />
        <div className="ps-login-orb ps-login-orb2" />

        <form className="ps-login-card" onSubmit={handleLogin}>
          <h1 className="ps-login-title">
            Pocket<span>Shop</span>
          </h1>

          <p className="ps-login-sub">
            Welcome back! Please login to continue.
          </p>

          <div className="ps-login-group">
            <label className="ps-login-label">Email Address</label>
            <input
              type="email"
              className="ps-login-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="ps-login-group">
            <label className="ps-login-label">Password</label>
            <input
              type="password"
              className="ps-login-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="ps-login-btn">
            Login to PocketShop
          </button>

          <div className="ps-login-divider" />

          <div className="ps-login-footer">
            Don't have an account?{" "}
            <Link to="/register">
              Create one here
            </Link>
          </div>

          <div className="ps-login-demo">
            Demo: any email & password
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
