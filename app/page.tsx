"use client";
import Link from "next/link";
import { ArrowRight, ChevronDown, Calculator, TrendingUp, Heart, BarChart3, Hash, GraduationCap, Sparkles } from "lucide-react";
import Navbar from "./components/Navbar";
import CalculatorCard from "./components/CalculatorCard";
import { categories, allCalculators } from "./data/calculators";

const catIcons: Record<string, React.ReactNode> = {
  health: <Heart size={20} />,
  finance: <BarChart3 size={20} />,
  math: <Hash size={20} />,
  student: <GraduationCap size={20} />,
  fun: <Sparkles size={20} />,
};

export default function Home() {
  const popular = allCalculators.filter(c => c.popular);

  return (
    <div style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "100px 24px 80px", textAlign: "center" }}>
        <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "var(--color-primary-dim)", border: "1px solid rgba(79,195,87,0.25)",
            borderRadius: "999px", color: "var(--color-primary)",
            fontSize: "13px", fontWeight: 500, padding: "6px 16px", marginBottom: "28px",
          }}>
            <Calculator size={13} /> All calculators in one beautiful place
          </span>
        </div>

        <h1 className="animate-fade-in-up" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(2.8rem, 8vw, 4.8rem)",
          fontWeight: 800, lineHeight: 1.05, letterSpacing: "-1.8px",
          margin: "0 0 24px", animationDelay: "100ms",
          color: "var(--color-secondary)",
        }}>
          Every Calculator
          <br />
          <span style={{
            background: "linear-gradient(135deg, var(--color-primary) 0%, #72d97d 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            You'll Ever Need
          </span>
        </h1>

        <p className="animate-fade-in-up" style={{
          fontSize: "18px", color: "var(--text-secondary)",
          maxWidth: "580px", margin: "0 auto 48px", lineHeight: 1.6, animationDelay: "200ms",
        }}>
          Health, finance, math, student tools – 20+ free calculators with a clean, modern experience.
        </p>

        {/* Stats */}
        <div className="animate-fade-in-up" style={{
          display: "flex", justifyContent: "center", gap: "50px",
          flexWrap: "wrap", animationDelay: "300ms", marginBottom: "48px",
        }}>
          {[{ num: "20+", label: "Calculators" }, { num: "5", label: "Categories" }, { num: "100%", label: "Free" }].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Outfit', sans-serif", fontSize: "2.2rem", fontWeight: 800,
                background: "linear-gradient(135deg, var(--color-primary), #72d97d)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{s.num}</div>
              <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "2px" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up" style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          gap: "18px", flexWrap: "wrap", animationDelay: "400ms",
        }}>
          <Link href="/explore" style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "#4fc357",
            border: "none", borderRadius: "16px", color: "#0d0f1a",
            textDecoration: "none", fontSize: "16px", fontWeight: 700,
            padding: "16px 36px",
            boxShadow: "0 10px 40px rgba(79, 195, 87, 0.4)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 15px 50px rgba(79, 195, 87, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(79, 195, 87, 0.4)";
            }}
          >
            <Calculator size={20} />
            Explore All Calculators
            <ArrowRight size={18} />
          </Link>

          <a href="#health" style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "var(--color-secondary-dim)", border: "1px solid rgba(221,227,234,0.15)",
            borderRadius: "16px", color: "var(--color-secondary)",
            textDecoration: "none", fontSize: "15px", fontWeight: 600,
            padding: "15px 30px", transition: "all 0.2s ease",
          }}>
            Browse Categories <ChevronDown size={18} />
          </a>
        </div>
      </section>

      <hr className="gradient-line" style={{ border: "none" }} />

      {/* ── Popular ── */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 24px 40px" }}>
        <div style={{ marginBottom: "40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ height: "3px", width: "32px", background: "var(--color-primary)", borderRadius: "999px" }} />
            <div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--color-secondary)", marginBottom: "4px" }}>
                Most Popular
              </h2>
              <p style={{ fontSize: "15px", color: "var(--text-muted)" }}>Trending tools used by thousands of users</p>
            </div>
          </div>
          <Link href="/explore" style={{ color: "var(--color-primary)", fontSize: "14px", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
            See all <ArrowRight size={14} />
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
          {popular.map(calc => <CalculatorCard key={calc.slug} calc={calc} />)}
        </div>
      </section>

      {/* ── By Category ── */}
      {categories.map((cat, idx) => (
        <section key={cat.slug} id={cat.slug} style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px 60px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "18px",
                background: "var(--color-primary-dim)",
                border: "1px solid rgba(79,195,87,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--color-primary)", flexShrink: 0,
                boxShadow: "0 8px 24px var(--color-primary-dim)",
              }}>
                {catIcons[cat.slug] || <Calculator size={24} strokeWidth={1.8} />}
              </div>
              <div>
                <Link href={`/explore?calc=${cat.calculators[0].slug}`} style={{ textDecoration: "none" }}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--color-secondary)", marginBottom: "4px", cursor: "pointer" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--color-primary)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--color-secondary)"}
                  >
                    {cat.title}
                  </h2>
                </Link>
                <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>{cat.description}</p>
              </div>
            </div>
            <Link href="/explore" style={{ color: "var(--color-primary)", fontSize: "14px", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
              Explore Category <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
            {cat.calculators.map(calc => <CalculatorCard key={calc.slug} calc={calc} />)}
          </div>

          {idx < categories.length - 1 && <hr className="gradient-line" style={{ border: "none", marginTop: "80px" }} />}
        </section>
      ))}

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "60px 24px 40px", textAlign: "center", marginTop: "40px" }}>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "22px", fontWeight: 700, color: "var(--color-secondary)", marginBottom: "12px" }}>
          <Calculator size={20} style={{ display: "inline", verticalAlign: "middle", marginRight: "8px", color: "var(--color-primary)" }} />
          Calc<span style={{ color: "var(--color-primary)" }}>Hub</span>
        </div>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", maxWidth: "400px", margin: "0 auto 24px" }}>
          Free, high-performance calculators for everyone. No ads, no tracking, just pure utility.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", fontSize: "13px", color: "var(--text-muted)" }}>
          <Link href="/explore" style={{ color: "inherit", textDecoration: "none" }}>All Calculators</Link>
          <span>·</span>
          <Link href="/#health" style={{ color: "inherit", textDecoration: "none" }}>Categories</Link>
          <span>·</span>
          <span>© 2026 CalcHub</span>
        </div>
      </footer>
    </div>
  );
}
