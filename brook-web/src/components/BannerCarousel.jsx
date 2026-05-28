import { useState, useEffect, useCallback, useRef } from "react"

const slides = [
  {
    id: 1,
    eyebrow: "New Season • 2026",
    title: ["Dress for the", "Future"],
    sub: "Curated fashion drops that define the next generation of style.",
    offer: "50% OFF", offerLabel: "Season Sale",
    cta: "Shop Collection", ctaAlt: "Explore Looks",
    tag: "FREE DELIVERY ABOVE ₹999",
    emoji: "👗", color: "#00dcff", particles: 18,
  },
  {
    id: 2,
    eyebrow: "Flash Drop • Today Only",
    title: ["Next-Gen", "Tech Gear"],
    sub: "Premium gadgets engineered for those who refuse to settle for ordinary.",
    offer: "₹5K OFF", offerLabel: "On Orders ₹15K+",
    cta: "Grab Deals", ctaAlt: "View All Tech",
    tag: "LIMITED STOCK — HURRY",
    emoji: "⌚", color: "#00ffb3", particles: 18,
  },
  {
    id: 3,
    eyebrow: "Members Exclusive",
    title: ["Luxury", "Living"],
    sub: "Elevate every corner of your home with pieces that inspire.",
    offer: "30% OFF", offerLabel: "Everything Sitewide",
    cta: "Explore Now", ctaAlt: "Get Inspired",
    tag: "MEMBERS ONLY PRICING",
    emoji: "🛋️", color: "#c084fc", particles: 18,
  },
]

function Particles({ color, count }) {
  const items = Array.from({ length: count }, (_, i) => i)
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {items.map((i) => {
        const size = 1 + Math.random() * 2.5
        const left = Math.random() * 100
        const delay = Math.random() * 8
        const dur = 6 + Math.random() * 8
        const startY = 20 + Math.random() * 70
        return (
          <div key={i} style={{
            position: "absolute", left: `${left}%`, top: `${startY}%`,
            width: size, height: size, borderRadius: "50%",
            background: color, opacity: 0.35 + Math.random() * 0.4,
            boxShadow: `0 0 ${size * 3}px ${color}`,
            animation: `ptFloat${i % 3} ${dur}s ${delay}s ease-in-out infinite`,
          }} />
        )
      })}
    </div>
  )
}

export default function BannerCarousel() {
  const [cur, setCur]     = useState(0)
  const [phase, setPhase] = useState("idle")
  const timerRef          = useRef(null)

  const goTo = useCallback((next) => {
    if (phase !== "idle") return
    setPhase("exit")
    setTimeout(() => { setCur(next); setPhase("enter"); setTimeout(() => setPhase("idle"), 750) }, 380)
  }, [phase])

  const goNext = useCallback(() => goTo((cur + 1) % slides.length), [cur, goTo])
  const goPrev = useCallback(() => goTo((cur - 1 + slides.length) % slides.length), [cur, goTo])

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(goNext, 6500)
  }, [goNext])

  useEffect(() => { resetTimer(); return () => clearInterval(timerRef.current) }, [resetTimer])

  const s = slides[cur]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&display=swap');
        @keyframes ptFloat0 { 0%,100%{transform:translateY(0) translateX(0)} 33%{transform:translateY(-28px) translateX(12px)} 66%{transform:translateY(14px) translateX(-8px)} }
        @keyframes ptFloat1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-40px) translateX(-16px)} }
        @keyframes ptFloat2 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-20px) rotate(180deg)} }
        .bx-root { position:relative; width:100vw; margin-left: calc(-50vw + 50%); min-height:90vh; background:#04060f; overflow:hidden; display:flex; align-items:center; font-family:'Outfit',sans-serif; }
        .bx-grid { position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(rgba(0,220,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,220,255,0.035) 1px,transparent 1px); background-size:52px 52px; }
        .bx-vignette { position:absolute; inset:0; pointer-events:none; background:radial-gradient(ellipse at center,transparent 40%,rgba(4,6,15,0.75) 100%); }
        .bx-orb { position:absolute; border-radius:50%; filter:blur(100px); pointer-events:none; transition:background 1.4s ease; }
        .bx-orb1 { width:700px; height:700px; top:-200px; right:-180px; opacity:0.14; }
        .bx-orb2 { width:500px; height:500px; bottom:-180px; left:-120px; opacity:0.10; }
        .bx-orb3 { width:300px; height:300px; top:50%; left:42%; transform:translate(-50%,-50%); opacity:0.06; }
        .bx-scan { position:absolute; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,rgba(0,220,255,0.4),transparent); pointer-events:none; animation:bxScan 8s linear infinite; }
        @keyframes bxScan { from{top:-2px;opacity:0} 5%{opacity:1} 95%{opacity:1} to{top:100%;opacity:0} }
        .bx-inner { position:relative; z-index:5; width:100%; max-width:1320px; margin:0 auto; padding:0 5%; display:grid; grid-template-columns:1.1fr 0.9fr; gap:56px; align-items:center; }
        .bx-eyebrow { font-size:11px; font-weight:500; letter-spacing:4px; text-transform:uppercase; margin-bottom:22px; display:flex; align-items:center; gap:12px; transition:color 0.7s; }
        .bx-eyebrow-line { flex-shrink:0; width:32px; height:1px; background:currentColor; border-radius:1px; box-shadow:0 0 6px currentColor; }
        .bx-title { font-family:'Syne',sans-serif; font-size:clamp(48px,6.5vw,98px); font-weight:800; line-height:0.95; color:#fff; margin:0 0 10px; letter-spacing:-2.5px; }
        .bx-title-line2 { display:block; -webkit-text-stroke:2px currentColor; color:transparent; transition:-webkit-text-stroke-color 0.7s; }
        .bx-sub { font-size:16px; font-weight:300; color:rgba(255,255,255,0.45); line-height:1.8; max-width:440px; margin:24px 0 40px; }
        .bx-btns { display:flex; gap:14px; flex-wrap:wrap; margin-bottom:52px; }
        .bx-btn-p { padding:15px 36px; border-radius:10px; font-size:14px; font-weight:600; font-family:'Outfit',sans-serif; border:none; cursor:pointer; transition:transform 0.2s,box-shadow 0.3s; }
        .bx-btn-p:hover { transform:translateY(-3px); }
        .bx-btn-s { padding:15px 30px; border-radius:10px; font-size:14px; font-weight:400; font-family:'Outfit',sans-serif; background:transparent; border:1px solid rgba(255,255,255,0.15); color:rgba(255,255,255,0.7); cursor:pointer; transition:border-color 0.25s,background 0.25s,color 0.25s; }
        .bx-btn-s:hover { border-color:rgba(255,255,255,0.45); background:rgba(255,255,255,0.05); color:#fff; }
        .bx-stats { display:flex; gap:36px; padding-top:36px; border-top:1px solid rgba(255,255,255,0.06); }
        .bx-stat-val { font-family:'Syne',sans-serif; font-size:28px; font-weight:800; line-height:1; margin-bottom:5px; transition:color 0.7s; }
        .bx-stat-lbl { font-size:11px; font-weight:400; color:rgba(255,255,255,0.35); letter-spacing:1.5px; text-transform:uppercase; }
        .bx-right { position:relative; height:520px; display:flex; align-items:center; justify-content:center; }
        .bx-emoji { position:relative; z-index:3; font-size:clamp(120px,16vw,200px); line-height:1; user-select:none; pointer-events:none; animation:bxFloat 5s ease-in-out infinite; transition:filter 0.7s; }
        @keyframes bxFloat { 0%,100%{transform:translateY(0px) rotate(-3deg) scale(1)} 33%{transform:translateY(-22px) rotate(1deg) scale(1.02)} 66%{transform:translateY(-10px) rotate(-1deg) scale(0.99)} }
        .bx-orbit { position:absolute; border-radius:50%; pointer-events:none; border:1px dashed rgba(255,255,255,0.06); }
        .bx-orbit1 { width:300px; height:300px; animation:bxOrbit 18s linear infinite; }
        .bx-orbit2 { width:420px; height:420px; animation:bxOrbit 28s linear infinite reverse; }
        .bx-orbit3 { width:520px; height:520px; animation:bxOrbit 40s linear infinite; border-style:dotted; }
        @keyframes bxOrbit { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        .bx-orbit-dot { position:absolute; top:-4px; left:calc(50% - 4px); width:8px; height:8px; border-radius:50%; transition:background 0.7s,box-shadow 0.7s; }
        .bx-glass { position:absolute; background:rgba(255,255,255,0.04); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.08); border-radius:18px; padding:20px 24px; z-index:4; transition:border-color 0.7s; }
        .bx-offer-card { top:48px; left:-24px; min-width:156px; }
        .bx-offer-val { font-family:'Syne',sans-serif; font-size:36px; font-weight:800; line-height:1; transition:color 0.7s; }
        .bx-offer-lbl { font-size:11px; color:rgba(255,255,255,0.4); text-transform:uppercase; letter-spacing:1.5px; margin-top:5px; }
        .bx-tag-card { bottom:72px; right:-20px; display:flex; align-items:center; gap:10px; white-space:nowrap; }
        .bx-tag-pulse { width:8px; height:8px; border-radius:50%; flex-shrink:0; animation:bxPulse 2.2s ease-in-out infinite; transition:background 0.7s,box-shadow 0.7s; }
        @keyframes bxPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(0.65)} }
        .bx-tag-txt { font-size:11px; font-weight:500; letter-spacing:2px; text-transform:uppercase; transition:color 0.7s; }
        .bx-rating-card { bottom:72px; left:-24px; }
        .bx-stars { color:#fbbf24; font-size:13px; letter-spacing:2px; margin-bottom:4px; }
        .bx-rating-txt { font-size:12px; color:rgba(255,255,255,0.5); }
        .bx-arrow { position:absolute; top:50%; transform:translateY(-50%); z-index:10; width:46px; height:46px; border-radius:12px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; font-size:22px; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background 0.2s,transform 0.2s; backdrop-filter:blur(8px); }
        .bx-arrow:hover { background:rgba(255,255,255,0.12); transform:translateY(-50%) scale(1.08); }
        .bx-arrow-l { left:18px; } .bx-arrow-r { right:18px; }
        .bx-dots { position:absolute; bottom:30px; left:50%; transform:translateX(-50%); display:flex; gap:8px; z-index:10; }
        .bx-dot { height:4px; border-radius:100px; border:none; cursor:pointer; padding:0; transition:width 0.4s cubic-bezier(0.34,1.56,0.64,1),background 0.5s; }
        .bx-progress { position:absolute; bottom:0; left:0; height:2px; border-radius:0 2px 2px 0; animation:bxProg 6.5s linear infinite; transition:background 0.7s; }
        @keyframes bxProg { from{width:0%} to{width:100%} }
        .bx-counter { position:absolute; top:28px; right:6%; font-family:'Syne',sans-serif; font-size:11px; font-weight:700; color:rgba(255,255,255,0.2); letter-spacing:3px; z-index:10; }
        .bx-counter-cur { color:rgba(255,255,255,0.55); }
        .bx-left-anim { transition:opacity 0.38s ease,transform 0.38s ease; }
        .bx-left-anim.exiting  { opacity:0; transform:translateX(-40px); }
        .bx-left-anim.entering { animation:bxSlideIn 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        @keyframes bxSlideIn { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:none} }
        .bx-right-anim { transition:opacity 0.38s ease,transform 0.38s ease; }
        .bx-right-anim.exiting  { opacity:0; transform:scale(0.88); }
        .bx-right-anim.entering { animation:bxScaleIn 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        @keyframes bxScaleIn { from{opacity:0;transform:scale(1.1)} to{opacity:1;transform:scale(1)} }
        @media (max-width:860px) {
          .bx-root{min-height:auto;padding:64px 0 80px}
          .bx-inner{grid-template-columns:1fr;gap:40px}
          .bx-right{height:300px} .bx-emoji{font-size:110px}
          .bx-orbit1{width:200px;height:200px} .bx-orbit2{width:280px;height:280px}
          .bx-orbit3,.bx-arrow{display:none}
          .bx-offer-card{left:0;top:0} .bx-tag-card{right:0}
        }
      `}</style>

      <div className="bx-root">
        <div className="bx-grid" />
        <div className="bx-vignette" />
        <div className="bx-scan" />
        <div className="bx-orb bx-orb1" style={{ background: s.color }} />
        <div className="bx-orb bx-orb2" style={{ background: s.color }} />
        <div className="bx-orb bx-orb3" style={{ background: s.color }} />
        <Particles color={s.color} count={s.particles} />
        <div className="bx-counter">
          <span className="bx-counter-cur">0{cur + 1}</span> / 0{slides.length}
        </div>

        <div className="bx-inner">
          <div className={`bx-left-anim ${phase === "exit" ? "exiting" : phase === "enter" ? "entering" : ""}`}>
            <p className="bx-eyebrow" style={{ color: s.color }}>
              <span className="bx-eyebrow-line" />{s.eyebrow}
            </p>
            <h1 className="bx-title">
              {s.title[0]}
              <span className="bx-title-line2" style={{ WebkitTextStrokeColor: s.color }}>{s.title[1]}</span>
            </h1>
            <p className="bx-sub">{s.sub}</p>
            <div className="bx-btns">
              <button className="bx-btn-p" style={{ background: s.color, color: "#04060f", boxShadow: `0 0 28px ${s.color}44` }}>
                {s.cta} →
              </button>
              <button className="bx-btn-s">{s.ctaAlt}</button>
            </div>
            <div className="bx-stats">
              {[{val:"50K+",lbl:"Customers"},{val:"2K+",lbl:"Products"},{val:"4.9★",lbl:"Rating"},{val:"24h",lbl:"Delivery"}].map((st) => (
                <div key={st.lbl}>
                  <div className="bx-stat-val" style={{ color: s.color }}>{st.val}</div>
                  <div className="bx-stat-lbl">{st.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`bx-right bx-right-anim ${phase === "exit" ? "exiting" : phase === "enter" ? "entering" : ""}`}>
            <div className="bx-orbit bx-orbit1" style={{ borderColor: `${s.color}22` }}>
              <div className="bx-orbit-dot" style={{ background: s.color, boxShadow: `0 0 10px ${s.color}` }} />
            </div>
            <div className="bx-orbit bx-orbit2" style={{ borderColor: `${s.color}14` }}>
              <div className="bx-orbit-dot" style={{ background: s.color, opacity: 0.6 }} />
            </div>
            <div className="bx-orbit bx-orbit3" style={{ borderColor: `${s.color}0a` }} />
            <div className="bx-emoji" style={{ filter: `drop-shadow(0 0 60px ${s.color}66) drop-shadow(0 0 20px ${s.color}44)` }}>
              {s.emoji}
            </div>
            <div className="bx-glass bx-offer-card" style={{ borderColor: `${s.color}28` }}>
              <div className="bx-offer-val" style={{ color: s.color }}>{s.offer}</div>
              <div className="bx-offer-lbl">{s.offerLabel}</div>
            </div>
            <div className="bx-glass bx-tag-card" style={{ borderColor: `${s.color}28` }}>
              <div className="bx-tag-pulse" style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }} />
              <span className="bx-tag-txt" style={{ color: s.color }}>{s.tag}</span>
            </div>
            <div className="bx-glass bx-rating-card" style={{ borderColor: `${s.color}28` }}>
              <div className="bx-stars">★★★★★</div>
              <div className="bx-rating-txt">12,400+ reviews</div>
            </div>
          </div>
        </div>

        <button className="bx-arrow bx-arrow-l" onClick={() => { goPrev(); resetTimer(); }}>‹</button>
        <button className="bx-arrow bx-arrow-r" onClick={() => { goNext(); resetTimer(); }}>›</button>

        <div className="bx-dots">
          {slides.map((_, i) => (
            <button key={i} className="bx-dot"
              style={{ width: i === cur ? "32px" : "8px", background: i === cur ? s.color : "rgba(255,255,255,0.18)", boxShadow: i === cur ? `0 0 8px ${s.color}` : "none" }}
              onClick={() => { goTo(i); resetTimer(); }}
            />
          ))}
        </div>

        <div className="bx-progress" key={`${cur}-prog`} style={{ background: s.color }} />
      </div>
    </>
  )
}