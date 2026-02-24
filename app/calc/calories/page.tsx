"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

export default function CaloriesPage() {
    const [tdee, setTdee] = useState("");
    const [result, setResult] = useState<{ maintenance: number; loss: [number, number]; gain: number } | null>(null);

    const calculate = () => {
        const t = parseFloat(tdee);
        if (!t) return;
        setResult({ maintenance: Math.round(t), loss: [Math.round(t - 500), Math.round(t - 300)], gain: Math.round(t + 300) });
    };

    return (
        <CalcLayout calcTitle="Calorie Goal Calculator" calcDescription="Find your optimal calorie intake for maintenance, weight loss, or weight gain" calcIcon="🥗" categorySlug="health" categoryTitle="Health & Fitness">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div style={{ marginBottom: "20px" }}>
                    <label className="field-label">Your TDEE (Total Daily Energy Expenditure)</label>
                    <input className="calc-input" type="number" value={tdee} onChange={e => setTdee(e.target.value)} placeholder="e.g. 2200 calories/day" />
                    <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "6px" }}>
                        Need your TDEE? <a href="/calc/tdee" style={{ color: "#6c63ff" }}>Calculate it here →</a>
                    </p>
                </div>
                <button className="btn-primary" style={{ width: "100%" }} onClick={calculate}>Calculate Calorie Goals</button>

                {result && (
                    <div className="animate-fade-in" style={{ marginTop: "24px" }}>
                        {[
                            { label: "🎯 Maintenance", value: `${result.maintenance.toLocaleString()} kcal`, sub: "Stay at current weight", color: "#6c63ff" },
                            { label: "⬇️ Weight Loss", value: `${result.loss[0].toLocaleString()} – ${result.loss[1].toLocaleString()} kcal`, sub: "Deficit of 300–500 calories (lose ~0.3–0.5 kg/week)", color: "#4ecdc4" },
                            { label: "⬆️ Weight Gain", value: `${result.gain.toLocaleString()} kcal`, sub: "Surplus of 300 calories (lean bulk)", color: "#6bcb77" },
                        ].map(item => (
                            <div key={item.label} className="glass-card" style={{ padding: "20px", marginBottom: "12px", borderColor: `${item.color}25` }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>
                                        <div style={{ fontSize: "14px", fontWeight: 600, color: item.color, marginBottom: "4px" }}>{item.label}</div>
                                        <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{item.sub}</div>
                                    </div>
                                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.4rem", fontWeight: 700, color: item.color }}>{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
