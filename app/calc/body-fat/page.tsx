"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

export default function BodyFatPage() {
    const [gender, setGender] = useState<"male" | "female">("male");
    const [height, setHeight] = useState("");
    const [neck, setNeck] = useState("");
    const [waist, setWaist] = useState("");
    const [hip, setHip] = useState("");
    const [unit, setUnit] = useState<"cm" | "in">("cm");
    const [result, setResult] = useState<number | null>(null);

    const toInch = (v: string) => {
        const n = parseFloat(v);
        return unit === "cm" ? n / 2.54 : n;
    };

    const calculate = () => {
        const h = toInch(height), n = toInch(neck), w = toInch(waist), hp = toInch(hip);
        if (!h || !n || !w) return;
        let bf: number;
        if (gender === "male") {
            bf = 86.010 * Math.log10(w - n) - 70.041 * Math.log10(h) + 36.76;
        } else {
            if (!hp) return;
            bf = 163.205 * Math.log10(w + hp - n) - 97.684 * Math.log10(h) - 78.387;
        }
        setResult(Math.max(0, Math.round(bf * 10) / 10));
    };

    const getCategory = (v: number, g: "male" | "female") => {
        if (g === "male") {
            if (v < 6) return { label: "Essential Fat", color: "#ff6b9d" };
            if (v < 14) return { label: "Athlete", color: "#4ecdc4" };
            if (v < 18) return { label: "Fitness", color: "#6bcb77" };
            if (v < 25) return { label: "Average", color: "#ffd93d" };
            return { label: "Obese", color: "#ff6b9d" };
        } else {
            if (v < 14) return { label: "Essential Fat", color: "#ff6b9d" };
            if (v < 21) return { label: "Athlete", color: "#4ecdc4" };
            if (v < 25) return { label: "Fitness", color: "#6bcb77" };
            if (v < 32) return { label: "Average", color: "#ffd93d" };
            return { label: "Obese", color: "#ff6b9d" };
        }
    };

    return (
        <CalcLayout calcTitle="Body Fat % Calculator" calcDescription="Estimate your body fat percentage using the US Navy circumference method" calcIcon="📐" categorySlug="health" categoryTitle="Health & Fitness">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
                    <div style={{ flex: 1, minWidth: "200px" }}>
                        <label className="field-label">Biological Sex</label>
                        <div className="pill-group">
                            <button className={`pill-btn ${gender === "male" ? "active" : ""}`} onClick={() => { setGender("male"); setResult(null); }}>♂ Male</button>
                            <button className={`pill-btn ${gender === "female" ? "active" : ""}`} onClick={() => { setGender("female"); setResult(null); }}>♀ Female</button>
                        </div>
                    </div>
                    <div style={{ flex: 1, minWidth: "200px" }}>
                        <label className="field-label">Unit</label>
                        <div className="pill-group">
                            <button className={`pill-btn ${unit === "cm" ? "active" : ""}`} onClick={() => { setUnit("cm"); setResult(null); }}>cm</button>
                            <button className={`pill-btn ${unit === "in" ? "active" : ""}`} onClick={() => { setUnit("in"); setResult(null); }}>inches</button>
                        </div>
                    </div>
                </div>

                <div className="form-grid">
                    <div>
                        <label className="field-label">Height ({unit})</label>
                        <input className="calc-input" type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder={unit === "cm" ? "175" : "68.9"} />
                    </div>
                    <div>
                        <label className="field-label">Neck circumference ({unit})</label>
                        <input className="calc-input" type="number" value={neck} onChange={e => setNeck(e.target.value)} placeholder={unit === "cm" ? "38" : "15"} />
                    </div>
                    <div>
                        <label className="field-label">Waist circumference ({unit})</label>
                        <input className="calc-input" type="number" value={waist} onChange={e => setWaist(e.target.value)} placeholder={unit === "cm" ? "85" : "33"} />
                    </div>
                    {gender === "female" && (
                        <div>
                            <label className="field-label">Hip circumference ({unit})</label>
                            <input className="calc-input" type="number" value={hip} onChange={e => setHip(e.target.value)} placeholder={unit === "cm" ? "95" : "37"} />
                        </div>
                    )}
                </div>

                <button className="btn-primary" style={{ width: "100%", marginTop: "20px" }} onClick={calculate}>Calculate Body Fat %</button>

                {result !== null && (
                    <div className="result-box animate-fade-in">
                        {(() => {
                            const cat = getCategory(result, gender);
                            return (
                                <div style={{ textAlign: "center" }}>
                                    <div className="result-label">Body Fat Percentage</div>
                                    <div className="result-value">{result}%</div>
                                    <div style={{ display: "inline-block", background: `${cat.color}20`, border: `1px solid ${cat.color}40`, borderRadius: "999px", color: cat.color, fontSize: "14px", fontWeight: 600, padding: "6px 20px", marginTop: "10px" }}>{cat.label}</div>
                                </div>
                            );
                        })()}
                    </div>
                )}
                <div className="info-box" style={{ marginTop: "16px" }}>
                    Measured at the <strong>narrowest point</strong> for waist and at the <strong>largest point</strong> for hips. Stand straight when measuring neck.
                </div>
            </div>
        </CalcLayout>
    );
}
