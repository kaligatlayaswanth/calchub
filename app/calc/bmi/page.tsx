"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

export default function BMIPage() {
    const [unit, setUnit] = useState<"metric" | "imperial">("metric");
    const [weightKg, setWeightKg] = useState("");
    const [weightLb, setWeightLb] = useState("");
    const [heightCm, setHeightCm] = useState("");
    const [heightFt, setHeightFt] = useState("");
    const [heightIn, setHeightIn] = useState("");
    const [result, setResult] = useState<{ bmi: number; category: string; color: string } | null>(null);

    const getCategory = (bmi: number): { category: string; color: string } => {
        if (bmi < 18.5) return { category: "Underweight", color: "#4ecdc4" };
        if (bmi < 25) return { category: "Normal Weight", color: "#6bcb77" };
        if (bmi < 30) return { category: "Overweight", color: "#ffd93d" };
        return { category: "Obese", color: "#ff6b9d" };
    };

    const calculate = () => {
        let kg = 0, cm = 0;
        if (unit === "metric") {
            kg = parseFloat(weightKg);
            cm = parseFloat(heightCm);
        } else {
            kg = parseFloat(weightLb) * 0.453592;
            cm = (parseFloat(heightFt || "0") * 12 + parseFloat(heightIn || "0")) * 2.54;
        }
        if (!kg || !cm) return;
        const hm = cm / 100;
        const bmi = kg / (hm * hm);
        setResult({ bmi, ...getCategory(bmi) });
    };

    const reset = () => { setResult(null); setWeightKg(""); setWeightLb(""); setHeightCm(""); setHeightFt(""); setHeightIn(""); };

    const bmiPercent = result ? Math.min(Math.max(((result.bmi - 10) / (45 - 10)) * 100, 0), 100) : 0;

    return (
        <CalcLayout
            calcTitle="BMI Calculator"
            calcDescription="Calculate your Body Mass Index using metric or imperial measurements"
            calcIcon="⚖️"
            categorySlug="health"
            categoryTitle="Health & Fitness"
        >
            <div className="glass-card" style={{ padding: "28px" }}>
                {/* Unit toggle */}
                <div style={{ marginBottom: "24px" }}>
                    <label className="field-label">Unit System</label>
                    <div className="pill-group">
                        <button className={`pill-btn ${unit === "metric" ? "active" : ""}`} onClick={() => { setUnit("metric"); setResult(null); }}>
                            📏 Metric (kg, cm)
                        </button>
                        <button className={`pill-btn ${unit === "imperial" ? "active" : ""}`} onClick={() => { setUnit("imperial"); setResult(null); }}>
                            🇺🇸 Imperial (lb, ft/in)
                        </button>
                    </div>
                </div>

                <div className="form-grid">
                    {/* Weight */}
                    {unit === "metric" ? (
                        <div>
                            <label className="field-label">Weight (kg)</label>
                            <input className="calc-input" type="number" value={weightKg} onChange={e => setWeightKg(e.target.value)} placeholder="e.g. 70" min="1" />
                        </div>
                    ) : (
                        <div>
                            <label className="field-label">Weight (lb)</label>
                            <input className="calc-input" type="number" value={weightLb} onChange={e => setWeightLb(e.target.value)} placeholder="e.g. 154" min="1" />
                        </div>
                    )}

                    {/* Height */}
                    {unit === "metric" ? (
                        <div>
                            <label className="field-label">Height (cm)</label>
                            <input className="calc-input" type="number" value={heightCm} onChange={e => setHeightCm(e.target.value)} placeholder="e.g. 175" min="1" />
                        </div>
                    ) : (
                        <div className="form-grid-2">
                            <div>
                                <label className="field-label">Feet</label>
                                <input className="calc-input" type="number" value={heightFt} onChange={e => setHeightFt(e.target.value)} placeholder="5" min="0" />
                            </div>
                            <div>
                                <label className="field-label">Inches</label>
                                <input className="calc-input" type="number" value={heightIn} onChange={e => setHeightIn(e.target.value)} placeholder="9" min="0" max="11" />
                            </div>
                        </div>
                    )}
                </div>

                <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                    <button className="btn-primary" style={{ flex: 1 }} onClick={calculate}>Calculate BMI</button>
                    <button className="btn-secondary" onClick={reset}>Reset</button>
                </div>

                {result && (
                    <div className="result-box animate-fade-in" style={{ marginTop: "28px" }}>
                        <div style={{ textAlign: "center", marginBottom: "24px" }}>
                            <div className="result-label">Your BMI</div>
                            <div className="result-value" style={{ fontSize: "3.5rem" }}>
                                {result.bmi.toFixed(1)}
                            </div>
                            <div style={{
                                display: "inline-block",
                                background: `${result.color}20`,
                                border: `1px solid ${result.color}40`,
                                borderRadius: "999px",
                                color: result.color,
                                fontSize: "14px",
                                fontWeight: 600,
                                padding: "6px 20px",
                                marginTop: "10px",
                            }}>
                                {result.category}
                            </div>
                        </div>

                        {/* BMI gauge bar */}
                        <div style={{ marginBottom: "20px" }}>
                            <div style={{
                                height: "10px",
                                borderRadius: "999px",
                                background: "linear-gradient(90deg, #4ecdc4 0%, #6bcb77 25%, #ffd93d 55%, #ff6b9d 80%, #ff4444 100%)",
                                position: "relative",
                                marginBottom: "6px",
                            }}>
                                <div style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: `${bmiPercent}%`,
                                    transform: "translate(-50%, -50%)",
                                    width: "18px",
                                    height: "18px",
                                    borderRadius: "50%",
                                    background: "white",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                                }} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--text-muted)" }}>
                                <span>Underweight</span><span>Normal</span><span>Overweight</span><span>Obese</span>
                            </div>
                        </div>

                        {/* Category grid */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                            {[
                                { label: "Underweight", range: "< 18.5", color: "#4ecdc4" },
                                { label: "Normal", range: "18.5–24.9", color: "#6bcb77" },
                                { label: "Overweight", range: "25–29.9", color: "#ffd93d" },
                                { label: "Obese", range: "≥ 30", color: "#ff6b9d" },
                            ].map(c => (
                                <div key={c.label} style={{
                                    background: result.category === c.label ? `${c.color}18` : "rgba(255,255,255,0.03)",
                                    border: `1px solid ${result.category === c.label ? c.color + "40" : "rgba(255,255,255,0.06)"}`,
                                    borderRadius: "10px",
                                    padding: "10px",
                                    textAlign: "center",
                                }}>
                                    <div style={{ fontSize: "11px", fontWeight: 600, color: c.color, marginBottom: "3px" }}>{c.label}</div>
                                    <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{c.range}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="info-box" style={{ marginTop: "20px" }}>
                    <strong>Note:</strong> BMI is a screening tool, not a diagnostic measure. Factors like muscle mass, age, and ethnicity affect interpretation.
                </div>
            </div>
        </CalcLayout>
    );
}
