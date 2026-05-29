import { useState, useEffect, useCallback, useRef } from "react"

const slides = [
  {
    id: 1,
    eyebrow: "New Collection • 2026",
    title: ["Premium", "Fashion"],
    sub: "Discover curated fashion pieces that define modern style.",
    offer: "50% OFF",
    offerLabel: "Spring Sale",
    cta: "Shop Now",
    ctaAlt: "View Collection",
    tag: "FREE SHIPPING ON ₹999+",
    emoji: "👗",
    color: "#3b82f6",
    bgGradient: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
  },
  {
    id: 2,
    eyebrow: "Latest Tech • Flash Deal",
    title: ["Smart", "Gadgets"],
    sub: "Premium tech products for the modern lifestyle.",
    offer: "₹4K OFF",
    offerLabel: "On Orders ₹12K+",
    cta: "Shop Deals",
    ctaAlt: "Browse Tech",
    tag: "LIMITED TIME OFFER",
    emoji: "⌚",
    color: "#10b981",
    bgGradient: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
  },
  {
    id: 3,
    eyebrow: "Home & Living • Exclusive",
    title: ["Elevate", "Your Home"],
    sub: "Beautiful home decor and furniture for modern living.",
    offer: "30% OFF",
    offerLabel: "Everything",
    cta: "Explore Now",
    ctaAlt: "Get Inspired",
    tag: "PREMIUM COLLECTION",
    emoji: "🛋️",
    color: "#f59e0b",
    bgGradient: "linear-gradient(135deg, #fffbf0, #fef3c7)",
  },
]

export default function BannerCarousel() {
  const [cur, setCur] = useState(0)
  const [phase, setPhase] = useState("idle")
  const timerRef = useRef(null)

  const goTo = useCallback((next) => {
    if (phase !== "idle") return
    setPhase("exit")
    setTimeout(() => {
      setCur(next)
      setPhase("enter")
      setTimeout(() => setPhase("idle"), 750)
    }, 380)
  }, [phase])

  const goNext = useCallback(() => goTo((cur + 1) % slides.length), [cur, goTo])
  const goPrev = useCallback(() => goTo((cur - 1 + slides.length) % slides.length), [cur, goTo])

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(goNext, 6500)
  }, [goNext])

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [resetTimer])

  const s = slides[cur]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Inter:wght@300;400;500;600&display=swap');

        .ps-banner {
          position: relative;
          width: 100%;
          min-height: 90vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          font-family: 'Inter', sans-serif;
        }

        .ps-banner-inner {
          position: relative; z-index: 5;
          width: 100%; max-width: 1320px;
          margin: 0 auto; padding: 0 6%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
        }

        .ps-eyebrow {
          font-size: 12px; font-weight: 600;
          letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 20px;
          display: flex; align-items: center; gap: 12px;
          color: currentColor;
        }
        .ps-eyebrow-line {
          flex-shrink: 0; width: 28px; height: 2px;
          background: currentColor; border-radius: 1px;
        }

        .ps-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(48px, 6.5vw, 98px);
          font-weight: 800;
          line-height: 0.95;
          margin: 0 0 10px;
          letter-spacing: -2px;
        }
        .ps-title-accent {
          display: block;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ps-sub {
          font-size: 16px; font-weight: 400;
          line-height: 1.8; max-width: 440px;
          margin: 24px 0 40px;
          color: rgba(0,0,0,0.55);
        }

        .ps-btns { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 52px; }

        .ps-btn-primary {
          padding: 15px 36px; border-radius: 12px;
          font-size: 15px; font-weight: 600;
          border: none; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.3s;
          font-family: 'Inter', sans-serif;
        }
        .ps-btn-primary:hover { transform: translateY(-2px); }

        .ps-btn-secondary {
          padding: 15px 30px; border-radius: 12px;
          font-size: 15px; font-weight: 500;
          background: transparent;
          border: 2px solid;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
        }
        .ps-btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(0,0,0,0.05);
        }

        .ps-stats {
          display: flex; gap: 36px;
          padding-top: 36px;
          border-top: 1px solid rgba(0,0,0,0.08);
        }
        .ps-stat-val {
          font-family: 'Poppins', sans-serif;
          font-size: 28px; font-weight: 800;
          line-height: 1; margin-bottom: 5px;
        }
        .ps-stat-lbl {
          font-size: 11px; font-weight: 500;
          color: rgba(0,0,0,0.45);
          letter-spacing: 1px; text-transform: uppercase;
        }

        .ps-visual {
          position: relative;
          height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ps-emoji {
          font-size: clamp(120px, 16vw, 200px);
          line-height: 1;
          user-select: none;
          pointer-events: none;
          animation: psFloat 5s ease-in-out infinite;
        }
        @keyframes psFloat {
          0%,100% { transform: translateY(0px) rotate(-3deg); }
          33% { transform: translateY(-22px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }

        .ps-card {
          position: absolute;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          z-index: 4;
        }

        .ps-offer-card {
          top: 48px; left: -24px;
          min-width: 156px;
        }
        .ps-offer-val {
          font-family: 'Poppins', sans-serif;
          font-size: 36px; font-weight: 800;
          line-height: 1;
          margin-bottom: 5px;
        }
        .ps-offer-lbl {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(0,0,0,0.45);
        }

        .ps-tag-card {
          bottom: 72px; right: -20px;
          display: flex; align-items: center; gap: 10px;
          white-space: nowrap;
        }
        .ps-tag-dot {
          width: 8px; height: 8px;
          border-radius: 50%; flex-shrink: 0;
          animation: psTagPulse 2s ease-in-out infinite;
        }
        @keyframes psTagPulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.65); }
        }
        .ps-tag-txt {
          font-size: 11px; font-weight: 600;
          letter-spacing: 1px; text-transform: uppercase;
        }

        .ps-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          z-index: 10;
          width: 46px; height: 46px;
          border-radius: 12px;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(0,0,0,0.08);
          color: #1f2937;
          font-size: 22px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }
        .ps-arrow:hover {
          background: #fff;
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }
        .ps-arrow-l { left: 18px; }
        .ps-arrow-r { right: 18px; }

        .ps-dots {
          position: absolute; bottom: 30px; left: 50%;
          transform: translateX(-50%);
          display: flex; gap: 8px; z-index: 10;
        }
        .ps-dot {
          height: 4px; border-radius: 100px;
          border: none; cursor: pointer; padding: 0;
          transition: width 0.4s, background 0.5s;
        }

        .ps-progress {
          position: absolute; bottom: 0; left: 0;
          height: 3px;
          animation: psProgress 6.5s linear infinite;
          border-radius: 3px;
        }
        @keyframes psProgress { from{width:0%} to{width:100%} }

        .ps-counter {
          position: absolute; top: 28px; right: 6%;
          font-family: 'Poppins', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; z-index: 10;
          color: rgba(0,0,0,0.3);
        }
        .ps-counter-cur { color: rgba(0,0,0,0.6); }

        .ps-left-anim { transition: opacity 0.38s, transform 0.38s; }
        .ps-left-anim.exiting { opacity: 0; transform: translateX(-40px); }
        .ps-left-anim.entering { animation: psSlideIn 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        @keyframes psSlideIn { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:none} }

        .ps-right-anim { transition: opacity 0.38s, transform 0.38s; }
        .ps-right-anim.exiting { opacity: 0; transform: scale(0.88); }
        .ps-right-anim.entering { animation: psScaleIn 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        @keyframes psScaleIn { from{opacity:0;transform:scale(1.1)} to{opacity:1;transform:scale(1)} }

        @media (max-width: 860px) {
          .ps-banner { min-height: auto; padding: 64px 0 80px; }
          .ps-banner-inner { grid-template-columns: 1fr; gap: 40px; }
          .ps-visual { height: 300px; }
          .ps-emoji { font-size: 110px; }
          .ps-arrow { display: none; }
          .ps-offer-card { left: 0; top: 0; }
          .ps-tag-card { right: 0; }
        }
      `}</style>

      <div className="ps-banner" style={{ background: s.bgGradient }}>
        <div className="ps-counter">
          <span className="ps-counter-cur">0{cur + 1}</span> / 0{slides.length}
        </div>

        <div className="ps-banner-inner">
          <div className={`ps-left-anim ${phase === "exit" ? "exiting" : phase === "enter" ? "entering" : ""}`}>
            <p className="ps-eyebrow" style={{ color: s.color }}>
              <span className="ps-eyebrow-line" />{s.eyebrow}
            </p>
            <h1 className="ps-title">
              {s.title[0]}
              <span className="ps-title-accent" style={{ background: `linear-gradient(135deg, ${s.color}, #06b6d4)` }}>
                {s.title[1]}
              </span>
            </h1>
            <p className="ps-sub">{s.sub}</p>
            <div className="ps-btns">
              <button className="ps-btn-primary" style={{ background: `linear-gradient(135deg, ${s.color}, #2563eb)`, color: '#fff', boxShadow: `0 8px 24px ${s.color}33` }}>
                {s.cta} →
              </button>
              <button className="ps-btn-secondary" style={{ borderColor: s.color, color: s.color }}>
                {s.ctaAlt}
              </button>
            </div>
            <div className="ps-stats">
              {[{val:"50K+",lbl:"Customers"},{val:"2K+",lbl:"Products"},{val:"4.9★",lbl:"Rating"}].map((st) => (
                <div key={st.lbl}>
                  <div className="ps-stat-val" style={{ color: s.color }}>{st.val}</div>
                  <div className="ps-stat-lbl">{st.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`ps-visual ps-right-anim ${phase === "exit" ? "exiting" : phase === "enter" ? "entering" : ""}`}>
            <div className="ps-emoji">{s.emoji}</div>
            <div className="ps-card ps-offer-card" style={{ borderColor: `${s.color}22` }}>
              <div className="ps-offer-val" style={{ color: s.color }}>{s.offer}</div>
              <div className="ps-offer-lbl">{s.offerLabel}</div>
            </div>
            <div className="ps-card ps-tag-card" style={{ borderColor: `${s.color}22` }}>
              <div className="ps-tag-dot" style={{ background: s.color }} />
              <span className="ps-tag-txt" style={{ color: s.color }}>{s.tag}</span>
            </div>
          </div>
        </div>

        <button className="ps-arrow ps-arrow-l" onClick={() => { goPrev(); resetTimer(); }}>‹</button>
        <button className="ps-arrow ps-arrow-r" onClick={() => { goNext(); resetTimer(); }}>›</button>

        <div className="ps-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className="ps-dot"
              style={{
                width: i === cur ? "32px" : "8px",
                background: i === cur ? s.color : "rgba(0,0,0,0.15)",
                boxShadow: i === cur ? `0 0 8px ${s.color}44` : "none",
              }}
              onClick={() => { goTo(i); resetTimer(); }}
            />
          ))}
        </div>

        <div className="ps-progress" style={{ background: s.color }} key={`${cur}-prog`} />
      </div>
    </>
  )
}
