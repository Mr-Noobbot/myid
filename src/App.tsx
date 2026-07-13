import { useState, useEffect, useRef } from "react";
import type { RefObject, ReactNode, CSSProperties } from "react";
import { Menu, X, ChevronDown } from "lucide-react";


function Instagram({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function Youtube({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
      <polygon points="10 15 15 12 10 9" />
    </svg>
  );
}

function Twitter({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

const TOKENS = {
  bg: "#000000",
  panel: "#0D0D0D",
  panelHover: "#161616",
  line: "rgba(255, 255, 255, 0.08)",
  lineGold: "rgba(255, 255, 255, 0.18)",
  text: "#FFFFFF",
  muted: "#8E8E93",
  accent: "#FFFFFF",
  accentLight: "#D1D1D6",
  gradientGold: "linear-gradient(135deg, #FFFFFF 0%, #B8B8B8 100%)",
  bgGradient: "radial-gradient(circle at 50% 0%, #141414 0%, #000000 100%)",
};

const NAV_LINKS = [
  { label: "Ventures", href: "#ventures" },
  { label: "Story", href: "#story" },
  { label: "Causes", href: "#causes" },
  { label: "Connect", href: "#contact" },
];
const VENTURES = [
  {
    name: "Quark Creation",
    role: "Founder & Owner",
    status: "Active",
    desc: "A bootstrapped content agency coordinating a remote team of professional video editors and designers, delivering visual brand assets to digital creators internationally.",
    tag: "AGENCY DIVISION",
    link: "#story",
  },
  {
    name: "CSIT (TU)",
    role: "Undergrad Student",
    status: "Ongoing",
    desc: "Pursuing a Bachelor's degree in Computer Science and Information Technology, exploring software architecture, web development, and digital systems.",
    tag: "ACADEMICS",
    link: "#story",
  },
  {
    name: "Creative Labs",
    role: "Creative Director",
    status: "Active",
    desc: "Designing minimalist web interfaces, typography frameworks, and custom identity aesthetics for creators carving out their own digital spaces.",
    tag: "VENTURES",
    link: "#causes",
  },
];




function useOnScreen(ref: RefObject<HTMLElement | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function PersonalSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        background: TOKENS.bg,
        backgroundImage: TOKENS.bgGradient,
        color: TOKENS.text,
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        width: "100%",
        minHeight: "100vh",
        position: "relative",
      } as CSSProperties}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

      html, body {

          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }
        .jv-display {
          font-family: 'Fraunces', serif;
          letter-spacing: -0.02em;
          font-weight: 300;
        }

        .jv-mono {
          font-family: 'IBM Plex Mono', monospace;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-size: 11px;
          color: ${TOKENS.accent};
        }

        .gold-gradient-text {
          background: ${TOKENS.gradientGold};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .premium-card {
          background: ${TOKENS.panel};
          border: 1px solid ${TOKENS.line};
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .premium-card:hover {
          border-color: ${TOKENS.accent};
          background: ${TOKENS.panelHover};
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(212, 175, 55, 0.04);
        }

        .nav-link {
          color: ${TOKENS.muted};
          text-decoration: none;
          font-size: 12.5px;
          font-family: 'IBM Plex Mono', monospace;
          letter-spacing: 0.1em;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: ${TOKENS.text};
        }

        .btn-gold {
          background: ${TOKENS.gradientGold};
          color: #050505;
          font-weight: 600;
          font-size: 13.5px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: 'IBM Plex Mono', monospace;
          border: none;
          padding: 14px 28px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.25);
        }

        .btn-outline {
          background: transparent;
          border: 1px solid ${TOKENS.line};
          color: ${TOKENS.text};
          font-weight: 500;
          font-size: 13.5px;
          font-family: 'IBM Plex Mono', monospace;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 14px 28px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
        }

        .btn-outline:hover {
          border-color: ${TOKENS.accent};
          color: ${TOKENS.accent};
          transform: translateY(-2px);
        }

        .jv-social {
          color: ${TOKENS.muted};
          transition: all 0.2s ease;
        }

        .jv-social:hover {
          color: ${TOKENS.accent};
          transform: translateY(-2px);
        }

        .editorial-image-placeholder {
          background: radial-gradient(circle at 30% 20%, rgba(212, 175, 55, 0.06), transparent 70%),
                      linear-gradient(160deg, #12110e 0%, #050505 100%);
          border: 1px solid ${TOKENS.line};
          position: relative;
          overflow: hidden;
        }

        .editorial-image-placeholder::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(5, 5, 5, 0.95) 100%);
        }

        /* Story timeline layout styles */
        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 100%;
          background: ${TOKENS.line};
        }

        .timeline-item {
          display: flex;
          justify-content: space-between;
          width: 100%;
          position: relative;
          margin-bottom: 80px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 10px;
          transform: translateX(-50%);
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: ${TOKENS.accent};
          border: 2px solid ${TOKENS.bg};
          z-index: 10;
        }

        .timeline-panel {
          width: 45%;
          padding: 30px;
          background: ${TOKENS.panel};
          border: 1px solid ${TOKENS.line};
          border-radius: 8px;
          transition: border-color 0.3s ease;
        }

        .timeline-panel:hover {
          border-color: ${TOKENS.lineGold};
        }

        .timeline-year {
          width: 45%;
          display: flex;
          align-items: flex-start;
          padding-top: 8px;
        }

        /* Align alternating blocks */
        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-item:nth-child(even) .timeline-year {
          justify-content: flex-end;
          padding-right: 20px;
        }

        .timeline-item:nth-child(odd) .timeline-year {
          justify-content: flex-start;
          padding-left: 20px;
        }

        @media (max-width: 900px) {
          .jv-hide-mobile { display: none !important; }
          .jv-mobile-menu-btn { display: inline-flex !important; }
          .jv-stack-mobile { flex-direction: column !important; gap: 32px !important; }
          .jv-grid-mobile-1 { grid-template-columns: 1fr !important; }
          
          /* Timeline mobile adjustments */
          .timeline-line { left: 16px; }
          .timeline-dot { left: 16px; transform: none; }
          .timeline-item { flex-direction: column !important; padding-left: 40px; margin-bottom: 50px; }
          .timeline-panel { width: 100% !important; }
          .timeline-year { width: 100% !important; justify-content: flex-start !important; padding: 0 0 12px 0 !important; }
        }

       @keyframes float {
          0%, 100% { transform: translate(-50%, 0px); opacity: 0.4; }
          50% { transform: translate(-50%, 10px); opacity: 0.9; }
        }

        .jv-mobile-br {
          display: none;
        }

        @media (max-width: 600px) {
          .jv-mobile-br {
            display: block;
          }
        }

        /* Transparent text with image clipping through */
        .text-image-clip {
          background-image: url(/photo.png);
          background-size: cover;
          background-position: center 40%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
      `}</style>

      {/* HEADER NAVBAR */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "transparent",
          borderBottom: "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >


          <nav className="jv-hide-mobile" style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="nav-link">
                {l.label.toUpperCase()}
              </a>
            ))}
            <a href="#contact" className="nav-link">
              CONTACT
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="jv-mobile-menu-btn"
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: TOKENS.text,
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              background: "transparent",
              padding: "12px 24px 30px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link"
                style={{ fontSize: 14 }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label.toUpperCase()}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-gold"
              style={{ width: "100%", textAlign: "center", marginTop: 8 }}
              onClick={() => setMenuOpen(false)}
            >
              CONTACT
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="top"
        style={{
          position: "relative",
          height: "100dvh",
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Full-bleed background image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/day.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundColor: TOKENS.bg,
            filter: "brightness(0.4) saturate(0.)",
            zIndex: 0,
          }}
        />
        {/* Dark gradient overlay for depth */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.5) 60%, rgba(5,5,5,0.95) 100%)",
            zIndex: 1,
          }}
        />

        {/* Content sits above the image */}
        <div style={{ position: "relative", zIndex: 2, padding: "0 24px" }}>


          <Reveal delay={100}>
            <h1
              className="jv-display text-image-clip"
              style={{
                fontSize: "clamp(60px, 14vw, 160px)",
                lineHeight: 0.88,
                margin: "0 0 32px",
                fontWeight: 300,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
              }}
            >
              Bishal
              <br className="jv-mobile-br" />{" "}
              <span style={{ fontStyle: "italic", fontWeight: 300 }}>
                Sherpa
              </span>
            </h1>
          </Reveal>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 36,
            left: "50%",
            color: TOKENS.accent,
            zIndex: 2,
            animation: "float 2.4s ease-in-out infinite",
          }}
        >
          <ChevronDown size={55} strokeWidth={1.5} />
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section
        id="story"
        style={{
          borderTop: `1px solid ${TOKENS.line}`,
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <Reveal>

            <span className="jv-mono">Companies</span>
            <h2
              className="jv-display"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 300,
                marginTop: 12,
                marginBottom: 28,
              }}
            >
              <img
                src="/trans.png"
                alt="Quark Creation Logo"
                style={{
                  height: 300,
                  margin: "0 auto 24px",
                  display: "block",
                  borderRadius: 12,
                }}
              />
              Quark Creation
            </h2>
            <div style={{ width: 50, height: 1, background: TOKENS.accent, margin: "0 auto 32px" }} />
            <p style={{ color: TOKENS.muted, fontSize: 16, lineHeight: 1.8 }}>
              A bootstrapped content agency coordinating a remote team of professional video
              editors and designers, delivering visual brand assets to digital creators
              internationally. Built from the ground up as a lean, remote-first operation
              focused on premium branding and content production.
            </p>
          </Reveal>
        </div>
      </section>
      <footer
        id="contact"
        style={{
          borderTop: `1px solid ${TOKENS.line}`,
          padding: "80px 24px 40px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="jv-stack-mobile"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 60,
            }}
          >


          </div>


          <span className="jv-mono" style={{ color: TOKENS.muted }}>
            © {new Date().getFullYear()} Bishal Sherpa. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#" aria-label="Instagram" className="jv-social">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="jv-social">
              <Youtube size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="jv-social">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}