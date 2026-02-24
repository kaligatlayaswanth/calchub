"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

function reduceToSingle(n: number): number {
    while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
        n = String(n).split("").reduce((a, d) => a + parseInt(d), 0);
    }
    return n;
}

function lifePathNumber(dob: string): number {
    if (!dob) return 0;
    const digits = dob.replace(/-/g, "");
    const sum = digits.split("").reduce((a, d) => a + parseInt(d), 0);
    return reduceToSingle(sum);
}

function nameNumber(name: string): number {
    const pythagorean: Record<string, number> = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
        j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
        s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8,
    };
    const sum = name.toLowerCase().replace(/[^a-z]/g, "").split("").reduce((a, c) => a + (pythagorean[c] || 0), 0);
    return reduceToSingle(sum);
}

const meanings: Record<number, { keyword: string; desc: string }> = {
    1: { keyword: "The Leader", desc: "Independent, ambitious, original. Born to lead and innovate." },
    2: { keyword: "The Diplomat", desc: "Sensitive, cooperative, and intuitive. A natural peacemaker." },
    3: { keyword: "The Creative", desc: "Expressive, optimistic, and joyful. A true artist at heart." },
    4: { keyword: "The Builder", desc: "Disciplined, reliable, and hard-working. Foundation of society." },
    5: { keyword: "The Adventurer", desc: "Freedom-loving, versatile, and curious. Thrives on change." },
    6: { keyword: "The Nurturer", desc: "Caring, responsible, and loving. Family and home are sacred." },
    7: { keyword: "The Seeker", desc: "Analytical, introspective, and spiritual. Loves deep knowledge." },
    8: { keyword: "The Achiever", desc: "Ambitious, authoritative, and material-minded. A born executive." },
    9: { keyword: "The Humanitarian", desc: "Compassionate, selfless, and wise. Here to serve the world." },
    11: { keyword: "The Illuminator", desc: "Highly intuitive and spiritual master number. A visionary." },
    22: { keyword: "The Master Builder", desc: "Powerful master number — here to build lasting legacies." },
    33: { keyword: "The Master Teacher", desc: "The highest master number — pure love and selfless guidance." },
};

export default function NumerologyPage() {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [result, setResult] = useState<{ lp: number; nn: number } | null>(null);

    const calculate = () => {
        if (!dob && !name) return;
        setResult({ lp: dob ? lifePathNumber(dob) : 0, nn: name ? nameNumber(name) : 0 });
    };

    return (
        <CalcLayout calcTitle="Numerology Calculator" calcDescription="Discover your Life Path Number and Name Numerology insights" calcIcon="🔮" categorySlug="fun" categoryTitle="Fun & Entertainment">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div className="form-grid">
                    <div>
                        <label className="field-label">Your Full Name (for Name Number)</label>
                        <input className="calc-input" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. John Doe" />
                    </div>
                    <div>
                        <label className="field-label">Date of Birth (for Life Path)</label>
                        <input className="calc-input" type="date" value={dob} onChange={e => setDob(e.target.value)} style={{ colorScheme: "dark" }} />
                    </div>
                </div>
                <button className="btn-primary" style={{ width: "100%", marginTop: "20px" }} onClick={calculate}>Reveal My Numbers 🔮</button>

                {result && (
                    <div className="animate-fade-in" style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                        {result.lp > 0 && (() => {
                            const m = meanings[result.lp];
                            return (
                                <div style={{ background: "linear-gradient(135deg, rgba(108,99,255,0.12), rgba(78,205,196,0.06))", border: "1px solid rgba(108,99,255,0.25)", borderRadius: "16px", padding: "24px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                                        <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "linear-gradient(135deg, #6c63ff, #4ecdc4)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit',sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "white", flexShrink: 0 }}>
                                            {result.lp}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: "11px", color: "#a09fff", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>Life Path Number</div>
                                            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#f0f2ff", marginBottom: "6px" }}>{m?.keyword}</div>
                                            <div style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{m?.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })()}
                        {result.nn > 0 && (() => {
                            const m = meanings[result.nn];
                            return (
                                <div style={{ background: "linear-gradient(135deg, rgba(255,107,157,0.1), rgba(247,127,0,0.06))", border: "1px solid rgba(255,107,157,0.25)", borderRadius: "16px", padding: "24px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                                        <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "linear-gradient(135deg, #ff6b9d, #f77f00)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit',sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "white", flexShrink: 0 }}>
                                            {result.nn}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: "11px", color: "#ff9cbf", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>Name Number</div>
                                            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#f0f2ff", marginBottom: "6px" }}>{m?.keyword}</div>
                                            <div style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{m?.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
