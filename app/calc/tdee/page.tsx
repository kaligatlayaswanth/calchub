"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

const activities = [
    { label: "Sedentary", sub: "Little/no exercise", multiplier: 1.2, icon: "🛋️" },
    { label: "Lightly Active", sub: "1–3 days/week", multiplier: 1.375, icon: "🚶" },
    { label: "Moderately Active", sub: "3–5 days/week", multiplier: 1.55, icon: "🏃" },
    { label: "Very Active", sub: "6–7 days/week", multiplier: 1.725, icon: "💪" },
    { label: "Extra Active", sub: "Hard daily exercise", multiplier: 1.9, icon: "🏋️" },
];

export default function TDEEPage() {
    const [bmr, setBmr] = useState("");
    const [activity, setActivity] = useState(activities[0]);
    const [result, setResult] = useState<number | null>(null);

    const calculate = () => {
        const b = parseFloat(bmr);
        if (!b) return;
        setResult(Math.round(b * activity.multiplier));
    };

    return (
        <CalcLayout
            calcTitle="TDEE Calculator"
            calcDescription="Total Daily Energy Expenditure — total calories burned per day based on your BMR and activity level"
            calcIcon="⚡"
            categorySlug="health"
            categoryTitle="Health & Fitness"
            calcSlug="tdee"
        >
            <div className="glass-card" style={{ padding: "28px" }}>
                <div style={{ marginBottom: "24px" }}>
                    <label className="field-label">BMR (Basal Metabolic Rate)</label>
                    <input
                        className="calc-input"
                        type="number"
                        value={bmr}
                        onChange={e => { setBmr(e.target.value); setResult(null); }}
                        placeholder="Enter your BMR (e.g. 1650)"
                    />
                    <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "6px" }}>
                        Don't know your BMR? <a href="/calc/bmr" style={{ color: "#6c63ff" }}>Calculate it here →</a>
                    </p>
                </div>

                <div style={{ marginBottom: "20px" }}>
                    <label className="field-label">Activity Level</label>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {activities.map(a => (
                            <button
                                key={a.label}
                                onClick={() => { setActivity(a); setResult(null); }}
                                style={{
                                    background: activity.label === a.label ? "rgba(108,99,255,0.1)" : "rgba(255,255,255,0.03)",
                                    border: `1px solid ${activity.label === a.label ? "rgba(108,99,255,0.35)" : "rgba(255,255,255,0.08)"}`,
                                    borderRadius: "12px",
                                    padding: "14px 18px",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "14px",
                                    textAlign: "left",
                                    transition: "all 0.2s",
                                }}
                            >
                                <span style={{ fontSize: "22px" }}>{a.icon}</span>
                                <div>
                                    <div style={{ fontWeight: 600, color: activity.label === a.label ? "#a09fff" : "#f0f2ff", fontSize: "14px" }}>{a.label}</div>
                                    <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{a.sub} · ×{a.multiplier}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <button className="btn-primary" style={{ width: "100%" }} onClick={calculate}>Calculate TDEE</button>

                {result !== null && (
                    <div className="result-box animate-fade-in">
                        <div style={{ textAlign: "center", marginBottom: "16px" }}>
                            <div className="result-label">Total Daily Energy Expenditure</div>
                            <div className="result-value">{result.toLocaleString()}</div>
                            <div style={{ color: "var(--text-secondary)", fontSize: "14px", marginTop: "4px" }}>calories / day</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginTop: "20px" }}>
                            {[
                                { label: "Maintenance", value: result, color: "#6c63ff" },
                                { label: "Weight Loss", value: `${result - 500}–${result - 300}`, color: "#4ecdc4" },
                                { label: "Weight Gain", value: result + 300, color: "#6bcb77" },
                            ].map(item => (
                                <div key={item.label} style={{
                                    background: "rgba(255,255,255,0.04)",
                                    borderRadius: "12px",
                                    padding: "14px",
                                    textAlign: "center",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                }}>
                                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: item.color }}>
                                        {typeof item.value === "number" ? item.value.toLocaleString() : item.value}
                                    </div>
                                    <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "3px" }}>{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
