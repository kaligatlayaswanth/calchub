"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

function getScore(name: string): number {
    const lc = name.toLowerCase().replace(/[^a-z0-9]/g, "");
    let hash = 0;
    for (let i = 0; i < lc.length; i++) hash = ((hash << 5) - hash) + lc.charCodeAt(i);
    return Math.abs(hash % 41) + 60; // 60–100
}

const messages: Record<number, { emoji: string; title: string; msg: string }> = {};
const getMsg = (score: number) => {
    if (score >= 90) return { emoji: "💞", title: "Soulmates!", msg: "Rare cosmic connection. You two are written in the stars ✨" };
    if (score >= 80) return { emoji: "❤️", title: "Perfect Match!", msg: "Strong compatibility — love and understanding abound." };
    if (score >= 70) return { emoji: "💕", title: "Great Chemistry!", msg: "Wonderful bond with great potential for a lasting relationship." };
    if (score >= 60) return { emoji: "💛", title: "Good Match", msg: "Solid connection — communication is key to making it work." };
    return { emoji: "🤝", title: "Friendly Vibes", msg: "More in common than you think — friendship may grow into more!" };
};

export default function LovePage() {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [result, setResult] = useState<{ score: number } | null>(null);
    const [animating, setAnimating] = useState(false);

    const calculate = () => {
        if (!name1 || !name2) return;
        setAnimating(true);
        setTimeout(() => {
            const s1 = getScore(name1), s2 = getScore(name2);
            const combined = Math.round((s1 + s2) / 2);
            setResult({ score: combined });
            setAnimating(false);
        }, 1200);
    };

    const res = result ? getMsg(result.score) : null;

    return (
        <CalcLayout calcTitle="Love Compatibility" calcDescription="Discover your compatibility score with a special someone ❤️" calcIcon="❤️" categorySlug="fun" categoryTitle="Fun & Entertainment">
            <div className="glass-card" style={{ padding: "36px", textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px", flexWrap: "wrap", justifyContent: "center" }}>
                    <div style={{ flex: 1, minWidth: "180px" }}>
                        <label className="field-label" style={{ textAlign: "left" }}>Your Name</label>
                        <input className="calc-input" value={name1} onChange={e => setName1(e.target.value)} placeholder="Enter your name" />
                    </div>
                    <div style={{ fontSize: "28px", paddingTop: "24px" }}>❤️</div>
                    <div style={{ flex: 1, minWidth: "180px" }}>
                        <label className="field-label" style={{ textAlign: "left" }}>Their Name</label>
                        <input className="calc-input" value={name2} onChange={e => setName2(e.target.value)} placeholder="Enter their name" />
                    </div>
                </div>

                <button className="btn-primary" style={{ minWidth: "200px" }} onClick={calculate} disabled={animating}>
                    {animating ? "✨ Calculating..." : "Calculate Compatibility ❤️"}
                </button>

                {animating && (
                    <div style={{ marginTop: "40px", fontSize: "48px", animation: "pulse-glow 1s infinite" }}>💗</div>
                )}

                {result && res && !animating && (
                    <div className="animate-fade-in" style={{ marginTop: "32px" }}>
                        <div style={{ position: "relative", display: "inline-block", marginBottom: "20px" }}>
                            <svg width="160" height="160" viewBox="0 0 160 160">
                                <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" />
                                <circle cx="80" cy="80" r="70" fill="none"
                                    stroke="url(#loveGrad)" strokeWidth="12"
                                    strokeLinecap="round"
                                    strokeDasharray={`${(result.score / 100) * 440} 440`}
                                    strokeDashoffset="110"
                                    transform="rotate(-90 80 80)"
                                />
                                <defs>
                                    <linearGradient id="loveGrad" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#ff6b9d" />
                                        <stop offset="100%" stopColor="#f77f00" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ fontSize: "32px" }}>{res.emoji}</div>
                                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "2.2rem", fontWeight: 800, color: "#ff6b9d" }}>{result.score}%</div>
                            </div>
                        </div>
                        <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#ff6b9d", marginBottom: "8px" }}>{res.title}</h3>
                        <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.6 }}>{res.msg}</p>
                    </div>
                )}

                <div className="info-box" style={{ marginTop: "24px", textAlign: "left" }}>
                    <strong>Just for fun!</strong> This is an entertainment calculator based on name analysis, not actual relationship science.
                </div>
            </div>
        </CalcLayout>
    );
}
