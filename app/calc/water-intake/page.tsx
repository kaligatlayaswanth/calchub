"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

export default function WaterIntakePage() {
    const [unit, setUnit] = useState<"kg" | "lb">("kg");
    const [weight, setWeight] = useState("");
    const [result, setResult] = useState<{ ml: number; liters: number; oz: number; glasses: number } | null>(null);

    const calculate = () => {
        let kg = parseFloat(weight);
        if (!kg) return;
        if (unit === "lb") kg = kg * 0.453592;
        const ml = Math.round(kg * 35);
        setResult({ ml, liters: Math.round(ml / 100) / 10, oz: Math.round(kg * 0.5 / 0.0296), glasses: Math.round(ml / 250) });
    };

    return (
        <CalcLayout calcTitle="Water Intake Calculator" calcDescription="Daily recommended water intake based on body weight" calcIcon="💧" categorySlug="health" categoryTitle="Health & Fitness">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div style={{ marginBottom: "20px" }}>
                    <label className="field-label">Unit</label>
                    <div className="pill-group" style={{ maxWidth: "260px" }}>
                        <button className={`pill-btn ${unit === "kg" ? "active" : ""}`} onClick={() => { setUnit("kg"); setResult(null); }}>Kilograms (kg)</button>
                        <button className={`pill-btn ${unit === "lb" ? "active" : ""}`} onClick={() => { setUnit("lb"); setResult(null); }}>Pounds (lb)</button>
                    </div>
                </div>
                <div>
                    <label className="field-label">Body Weight ({unit})</label>
                    <input className="calc-input" type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder={unit === "kg" ? "e.g. 70" : "e.g. 154"} />
                </div>
                <button className="btn-primary" style={{ width: "100%", marginTop: "20px" }} onClick={calculate}>Calculate Water Intake</button>

                {result && (
                    <div className="result-box animate-fade-in">
                        <div style={{ textAlign: "center", marginBottom: "20px" }}>
                            <div className="result-label">Daily Water Intake</div>
                            <div className="result-value">{result.liters} L</div>
                            <div style={{ color: "var(--text-secondary)", fontSize: "14px" }}>{result.ml} ml per day</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                            {[
                                { label: "Milliliters", value: `${result.ml} ml`, icon: "💧" },
                                { label: "Ounces", value: `${result.oz} oz`, icon: "🥤" },
                                { label: "Glasses (250ml)", value: `${result.glasses} glasses`, icon: "🍶" },
                            ].map(i => (
                                <div key={i.label} style={{ background: "rgba(78,205,196,0.07)", border: "1px solid rgba(78,205,196,0.15)", borderRadius: "12px", padding: "14px", textAlign: "center" }}>
                                    <div style={{ fontSize: "20px", marginBottom: "6px" }}>{i.icon}</div>
                                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#4ecdc4" }}>{i.value}</div>
                                    <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>{i.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
