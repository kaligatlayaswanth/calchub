"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

export default function DecisionMakerPage() {
    const [options, setOptions] = useState(["", ""]);
    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [angle, setAngle] = useState(0);

    const addOption = () => setOptions([...options, ""]);
    const removeOption = (i: number) => { if (options.length > 2) setOptions(options.filter((_, idx) => idx !== i)); };
    const updateOption = (i: number, v: string) => { const u = [...options]; u[i] = v; setOptions(u); };

    const decide = () => {
        const valid = options.filter(o => o.trim());
        if (valid.length < 2) return;
        setSpinning(true);
        setResult(null);
        const spins = 1440 + Math.random() * 720;
        setAngle(prev => prev + spins);
        setTimeout(() => {
            const chosen = valid[Math.floor(Math.random() * valid.length)];
            setResult(chosen);
            setSpinning(false);
        }, 2500);
    };

    const validOptions = options.filter(o => o.trim());

    return (
        <CalcLayout calcTitle="Random Decision Maker" calcDescription="Can't decide? Enter your options and let the universe choose for you! 🎲" calcIcon="🎲" categorySlug="fun" categoryTitle="Fun & Entertainment">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div style={{ marginBottom: "24px" }}>
                    <label className="field-label" style={{ marginBottom: "12px", display: "block" }}>Your Options</label>
                    {options.map((opt, i) => (
                        <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                            <input className="calc-input" value={opt} onChange={e => updateOption(i, e.target.value)} placeholder={`Option ${i + 1}`} />
                            {options.length > 2 && (
                                <button onClick={() => removeOption(i)} style={{ background: "rgba(255,107,157,0.1)", border: "1px solid rgba(255,107,157,0.2)", borderRadius: "8px", cursor: "pointer", color: "#ff6b9d", padding: "0 14px", fontSize: "16px", fontWeight: 700 }}>×</button>
                            )}
                        </div>
                    ))}
                    <button className="btn-secondary" onClick={addOption} style={{ marginTop: "8px" }}>+ Add Option</button>
                </div>

                <button className="btn-primary" style={{ width: "100%" }} onClick={decide} disabled={spinning || validOptions.length < 2}>
                    {spinning ? "🎲 Deciding..." : "Let the Universe Decide! 🎲"}
                </button>

                {/* Wheel visualization */}
                {validOptions.length >= 2 && (
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
                        <div style={{ position: "relative", width: "200px", height: "200px" }}>
                            <svg
                                width="200" height="200" viewBox="0 0 200 200"
                                style={{
                                    transform: `rotate(${angle}deg)`,
                                    transition: spinning ? "transform 2.5s cubic-bezier(0.17, 0.67, 0.12, 1)" : "none",
                                    borderRadius: "50%",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                                }}
                            >
                                {validOptions.map((opt, i) => {
                                    const total = validOptions.length;
                                    const sliceDeg = 360 / total;
                                    const startAngle = (i * sliceDeg - 90) * (Math.PI / 180);
                                    const endAngle = ((i + 1) * sliceDeg - 90) * (Math.PI / 180);
                                    const r = 100;
                                    const cx = 100, cy = 100;
                                    const x1 = cx + r * Math.cos(startAngle);
                                    const y1 = cy + r * Math.sin(startAngle);
                                    const x2 = cx + r * Math.cos(endAngle);
                                    const y2 = cy + r * Math.sin(endAngle);
                                    const largeArc = sliceDeg > 180 ? 1 : 0;
                                    const colors = ["#6c63ff", "#4ecdc4", "#ff6b9d", "#ffd93d", "#6bcb77", "#f77f00", "#9b59b6", "#e74c3c"];
                                    const midAngle = (startAngle + endAngle) / 2;
                                    const tx = cx + 65 * Math.cos(midAngle);
                                    const ty = cy + 65 * Math.sin(midAngle);
                                    const txt = opt.length > 8 ? opt.substring(0, 8) + "…" : opt;
                                    return (
                                        <g key={i}>
                                            <path d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${largeArc},1 ${x2},${y2} Z`} fill={colors[i % colors.length]} opacity="0.9" />
                                            <text x={tx} y={ty} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="700" transform={`rotate(${(i * sliceDeg + sliceDeg / 2)}  ${tx} ${ty})`}>{txt}</text>
                                        </g>
                                    );
                                })}
                                <circle cx="100" cy="100" r="18" fill="#0d0f1a" />
                                <circle cx="100" cy="100" r="12" fill="rgba(108,99,255,0.8)" />
                            </svg>
                            {/* Pointer */}
                            <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderTop: "20px solid #f0f2ff", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }} />
                        </div>
                    </div>
                )}

                {result && !spinning && (
                    <div className="result-box animate-fade-in" style={{ marginTop: "24px", textAlign: "center" }}>
                        <div style={{ fontSize: "32px", marginBottom: "8px" }}>🎯</div>
                        <div className="result-label">The Decision Is...</div>
                        <div className="result-value" style={{ fontSize: "2rem", marginTop: "4px" }}>{result}</div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
