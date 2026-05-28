import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <div style={{ background: "#060810", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;500&display=swap');
        .ct-wrap  { max-width: 600px; margin: 0 auto; padding: 80px 5%; }
        .ct-tag   { font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #00d4ff; margin-bottom: 20px; }
        .ct-h1    { font-family: 'Syne', sans-serif; font-size: clamp(32px, 5vw, 56px); font-weight: 800; color: #fff; margin-bottom: 12px; letter-spacing: -1px; }
        .ct-sub   { font-size: 15px; color: rgba(255,255,255,0.45); margin-bottom: 48px; font-weight: 300; line-height: 1.7; }
        .ct-label { font-size: 12px; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 8px; display: block; }
        .ct-input { width: 100%; background: rgba(255,255,255,0.04); border: 1px solid rgba(0,212,255,0.15); border-radius: 12px; padding: 14px 18px; color: #fff; font-size: 14px; font-family: 'Inter', sans-serif; outline: none; transition: border-color 0.2s; margin-bottom: 24px; box-sizing: border-box; }
        .ct-input:focus { border-color: rgba(0,212,255,0.5); }
        .ct-input::placeholder { color: rgba(255,255,255,0.2); }
        .ct-textarea { resize: vertical; min-height: 140px; }
        .ct-btn { width: 100%; padding: 16px; border-radius: 100px; border: none; background: #00d4ff; color: #060810; font-size: 15px; font-weight: 600; cursor: pointer; font-family: 'Syne', sans-serif; transition: transform 0.2s, box-shadow 0.3s; }
        .ct-btn:hover { transform: translateY(-2px); box-shadow: 0 0 32px rgba(0,212,255,0.3); }
        .ct-success { text-align: center; padding: 60px 0; }
        .ct-success-icon { font-size: 64px; margin-bottom: 20px; }
        .ct-success-title { font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; color: #fff; margin-bottom: 12px; }
        .ct-success-text  { font-size: 15px; color: rgba(255,255,255,0.45); font-weight: 300; }
        .ct-info { display: flex; gap: 20px; margin-bottom: 40px; flex-wrap: wrap; }
        .ct-info-item { display: flex; align-items: center; gap: 10px; font-size: 13px; color: rgba(255,255,255,0.45); }
        .ct-info-dot  { width: 6px; height: 6px; border-radius: 50%; background: #00d4ff; flex-shrink: 0; }
      `}</style>

      <div className="ct-wrap">
        <p className="ct-tag">— Get In Touch</p>
        <h1 className="ct-h1">We'd Love to<br />Hear From You</h1>
        <p className="ct-sub">Have a question, feedback, or just want to say hello? Drop us a message and we'll get back to you within 24 hours.</p>

        <div className="ct-info">
          {[
            "support@brookweb.in",
            "Mon–Sat, 9am–6pm",
            "Response within 24hrs",
          ].map((item) => (
            <div className="ct-info-item" key={item}>
              <div className="ct-info-dot" />
              {item}
            </div>
          ))}
        </div>

        {sent ? (
          <div className="ct-success">
            <div className="ct-success-icon">✅</div>
            <div className="ct-success-title">Message Sent!</div>
            <div className="ct-success-text">Thanks {form.name}, we'll reply to {form.email} soon.</div>
          </div>
        ) : (
          <>
            <label className="ct-label">Your Name</label>
            <input
              className="ct-input"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handle}
            />

            <label className="ct-label">Email Address</label>
            <input
              className="ct-input"
              name="email"
              type="email"
              placeholder="john@email.com"
              value={form.email}
              onChange={handle}
            />

            <label className="ct-label">Message</label>
            <textarea
              className="ct-input ct-textarea"
              name="message"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handle}
            />

            <button className="ct-btn" onClick={submit}>
              Send Message →
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Contact