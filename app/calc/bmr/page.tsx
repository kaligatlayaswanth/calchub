"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

export default function BMRPage() {
    const [unit, setUnit] = useState<"metric" | "imperial">("metric");
    const [gender, setGender] = useState<"male" | "female">("male");
    const [age, setAge] = useState("");
    const [weightKg, setWeightKg] = useState("");
    const [heightCm, setHeightCm] = useState("");
    const [weightLb, setWeightLb] = useState("");
    const [heightFt, setHeightFt] = useState("");
    const [heightIn, setHeightIn] = useState("");
    const [result, setResult] = useState<number | null>(null);

    const calculate = () => {
        let kg = 0, cm = 0;
        if (unit === "metric") {
            kg = parseFloat(weightKg);
            cm = parseFloat(heightCm);
        } else {
            kg = parseFloat(weightLb) * 0.453592;
            cm = (parseFloat(heightFt || "0") * 12 + parseFloat(heightIn || "0")) * 2.54;
        }
        const a = parseFloat(age);
        if (!kg || !cm || !a) return;
        const bmr = gender === "male"
            ? 10 * kg + 6.25 * cm - 5 * a + 5
            : 10 * kg + 6.25 * cm - 5 * a - 161;
        setResult(Math.round(bmr));
    };

    return (
        <CalcLayout
            calcTitle="BMR Calculator"
            calcDescription="Calculate your Basal Metabolic Rate — calories your body burns at complete rest (Mifflin-St Jeor equation)"
            calcIcon="🔥"
            categorySlug="health"
            categoryTitle="Health & Fitness"
        >
            <div className="glass-card" style={{ padding: "28px" }}>
                <div style={{ display: "flex", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
                    <div style={{ flex: 1, minWidth: "200px" }}>
                        <label className="field-label">Unit System</label>
                        <div className="pill-group">
                            <button className={`pill-btn ${unit === "metric" ? "active" : ""}`} onClick={() => { setUnit("metric"); setResult(null); }}>Metric</button>
                            <button className={`pill-btn ${unit === "imperial" ? "active" : ""}`} onClick={() => { setUnit("imperial"); setResult(null); }}>Imperial</button>
                        </div>
                    </div>
                    <div style={{ flex: 1, minWidth: "200px" }}>
                        <label className="field-label">Biological Sex</label>
                        <div className="pill-group">
                            <button className={`pill-btn ${gender === "male" ? "active" : ""}`} onClick={() => { setGender("male"); setResult(null); }}>♂ Male</button>
                            <button className={`pill-btn ${gender === "female" ? "active" : ""}`} onClick={() => { setGender("female"); setResult(null); }}>♀ Female</button>
                        </div>
                    </div>
                </div>

                <div className="form-grid-2">
                    <div>
                        <label className="field-label">Age (years)</label>
                        <input className="calc-input" type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="e.g. 25" />
                    </div>
                    {unit === "metric" ? (
                        <>
                            <div>
                                <label className="field-label">Weight (kg)</label>
                                <input className="calc-input" type="number" value={weightKg} onChange={e => setWeightKg(e.target.value)} placeholder="e.g. 70" />
                            </div>
                            <div>
                                <label className="field-label">Height (cm)</label>
                                <input className="calc-input" type="number" value={heightCm} onChange={e => setHeightCm(e.target.value)} placeholder="e.g. 175" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <label className="field-label">Weight (lb)</label>
                                <input className="calc-input" type="number" value={weightLb} onChange={e => setWeightLb(e.target.value)} placeholder="e.g. 154" />
                            </div>
                            <div>
                                <label className="field-label">Height (feet)</label>
                                <input className="calc-input" type="number" value={heightFt} onChange={e => setHeightFt(e.target.value)} placeholder="5" />
                            </div>
                            <div>
                                <label className="field-label">Height (inches)</label>
                                <input className="calc-input" type="number" value={heightIn} onChange={e => setHeightIn(e.target.value)} placeholder="9" />
                            </div>
                        </>
                    )}
                </div>

                <div style={{ marginTop: "20px" }}>
                    <button className="btn-primary" style={{ width: "100%" }} onClick={calculate}>Calculate BMR</button>
                </div>

                {result !== null && (
                    <div className="result-box animate-fade-in">
                        <div style={{ textAlign: "center", marginBottom: "16px" }}>
                            <div className="result-label">Basal Metabolic Rate</div>
                            <div className="result-value">{result.toLocaleString()}</div>
                            <div style={{ color: "var(--text-secondary)", fontSize: "14px", marginTop: "4px" }}>calories / day</div>
                        </div>
                        <div className="info-box">
                            This is the number of calories your body needs at <strong>complete rest</strong>. Use the <a href="/calc/tdee" style={{ color: "#6c63ff" }}>TDEE Calculator</a> to factor in your activity level.
                        </div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
