"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Calculator, Search, Heart, DollarSign, Hash, GraduationCap, Laugh, X } from "lucide-react";
import { categories, allCalculators } from "../data/calculators";

const catIcons: Record<string, React.ReactNode> = {
    health: <Heart size={14} />,
    finance: <DollarSign size={14} />,
    math: <Hash size={14} />,
    student: <GraduationCap size={14} />,
    fun: <Laugh size={14} />,
};

export default function Navbar() {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const results = query.length > 1
        ? allCalculators.filter(c =>
            c.title.toLowerCase().includes(query.toLowerCase()) ||
            c.tags.some(t => t.includes(query.toLowerCase()))
        ).slice(0, 8)
        : [];

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <nav style={{
            position: "sticky", top: 0, zIndex: 100,
            background: "rgba(13,15,26,0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>
            <div style={{
                maxWidth: "1280px", margin: "0 auto",
                padding: "0 24px",
                display: "flex", alignItems: "center", gap: "24px", height: "62px",
            }}>
                {/* Logo */}
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", flexShrink: 0 }}>
                    <div style={{
                        width: "32px", height: "32px", borderRadius: "9px",
                        background: "linear-gradient(135deg, var(--color-primary), #72d97d)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#0d0f1a",
                    }}>
                        <Calculator size={17} strokeWidth={2.5} />
                    </div>
                    <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: "17px", fontWeight: 700, color: "var(--color-secondary)" }}>
                        Calc<span style={{ color: "var(--color-primary)" }}>Hub</span>
                    </span>
                </Link>

                {/* Category links */}
                <div style={{ display: "flex", alignItems: "center", gap: "4px", flex: 1, overflowX: "auto" }}>
                    {categories.map(cat => (
                        <Link key={cat.slug} href={`/#${cat.slug}`} style={{
                            display: "flex", alignItems: "center", gap: "5px",
                            padding: "6px 12px", borderRadius: "8px",
                            color: "var(--text-secondary)", textDecoration: "none",
                            fontSize: "13px", fontWeight: 500, whiteSpace: "nowrap",
                            transition: "all 0.2s ease",
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = "var(--color-primary-dim)";
                                e.currentTarget.style.color = "var(--color-primary)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "var(--text-secondary)";
                            }}
                        >
                            <span style={{ color: "var(--color-primary)", display: "flex" }}>{catIcons[cat.slug]}</span>
                            {cat.title}
                        </Link>
                    ))}
                </div>

                {/* Search */}
                <div ref={ref} style={{ position: "relative", flexShrink: 0 }}>
                    <div style={{
                        display: "flex", alignItems: "center", gap: "8px",
                        background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)",
                        borderRadius: "9px", padding: "7px 13px", transition: "all 0.2s ease",
                    }}>
                        <Search size={14} color="var(--text-muted)" />
                        <input
                            value={query}
                            onChange={e => { setQuery(e.target.value); setOpen(true); }}
                            onFocus={() => setOpen(true)}
                            placeholder="Search..."
                            style={{
                                background: "transparent", border: "none", outline: "none",
                                color: "var(--text-primary)", fontSize: "13px", width: "140px",
                                fontFamily: "'Inter',sans-serif",
                            }}
                        />
                        {query && (
                            <button onClick={() => { setQuery(""); setOpen(false); }}
                                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", display: "flex", padding: 0 }}>
                                <X size={13} />
                            </button>
                        )}
                    </div>

                    {open && results.length > 0 && (
                        <div style={{
                            position: "absolute", top: "calc(100% + 8px)", right: 0,
                            background: "#13162b", border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "12px", padding: "6px", width: "260px",
                            boxShadow: "0 16px 48px rgba(0,0,0,0.5)", zIndex: 200,
                        }}>
                            {results.map(calc => (
                                <Link key={calc.slug} href={`/calc/${calc.slug}`}
                                    onClick={() => { setQuery(""); setOpen(false); }}
                                    style={{
                                        display: "flex", alignItems: "center", gap: "10px",
                                        padding: "9px 12px", borderRadius: "8px", textDecoration: "none",
                                        transition: "background 0.15s",
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = "var(--color-primary-dim)"}
                                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                                >
                                    <span style={{ color: "var(--color-primary)", display: "flex" }}>
                                        <Calculator size={14} />
                                    </span>
                                    <div>
                                        <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-secondary)" }}>{calc.title}</div>
                                        <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{calc.categoryTitle}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
