function About() {
  return (
    <div style={{ background: "#060810", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;500&display=swap');
        .about-hero { max-width: 800px; margin: 0 auto; padding: 80px 5% 60px; text-align: center; }
        .about-tag  { font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #00d4ff; margin-bottom: 20px; }
        .about-h1   { font-family: 'Syne', sans-serif; font-size: clamp(36px, 5vw, 64px); font-weight: 800; color: #fff; margin-bottom: 20px; letter-spacing: -1px; }
        .about-sub  { font-size: 16px; color: rgba(255,255,255,0.5); line-height: 1.75; font-weight: 300; }
        .about-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; max-width: 1000px; margin: 60px auto; padding: 0 5%; }
        .about-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(0,212,255,0.1); border-radius: 20px; padding: 32px 24px; }
        .about-card-icon { font-size: 36px; margin-bottom: 16px; }
        .about-card-title { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .about-card-text  { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; font-weight: 300; }
        .about-divider { width: 48px; height: 2px; background: #00d4ff; margin: 0 auto 40px; border-radius: 2px; }
      `}</style>

      <div className="about-hero">
        <p className="about-tag">— Who We Are</p>
        <h1 className="about-h1">Built for the<br />Modern Shopper</h1>
        <div className="about-divider" />
        <p className="about-sub">
          Brook Web is a next-generation e-commerce platform designed to bring
          you the best products across fashion, tech, and lifestyle — all in one place.
          We believe shopping should be fast, fun, and effortless.
        </p>
      </div>

      <div className="about-grid">
        {[
          { icon: "🚀", title: "Fast Delivery",    text: "Orders shipped within 24 hours to your doorstep across India." },
          { icon: "🔒", title: "Secure Payments",  text: "100% encrypted checkout with UPI, cards, and wallets supported." },
          { icon: "💎", title: "Premium Quality",  text: "Every product is handpicked and quality-checked before listing." },
          { icon: "🔄", title: "Easy Returns",     text: "No questions asked 7-day return policy on all products." },
          { icon: "🎧", title: "24/7 Support",     text: "Our team is always online to help you with any issue." },
          { icon: "🌍", title: "Pan India Reach",  text: "We deliver to 27,000+ pin codes across every state." },
        ].map((card) => (
          <div className="about-card" key={card.title}>
            <div className="about-card-icon">{card.icon}</div>
            <div className="about-card-title">{card.title}</div>
            <div className="about-card-text">{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About