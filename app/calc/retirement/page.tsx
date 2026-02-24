"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

export default function RetirementPage() {
    const [currentAge, setCurrentAge] = useState("");
    const [retirementAge, setRetirementAge] = useState("");
    const [currentSavings, setCurrentSavings] = useState("");
    const [monthlySavings, setMonthlySavings] = useState("");
    const [returnRate, setReturnRate] = useState("");
    const [result, setResult] = useState<{ corpus: number; years: number; fromCurrent: number; fromMonthly: number } | null>(null);

    const calculate = () => {
        const ca = parseFloat(currentAge), ra = parseFloat(retirementAge);
        const cs = parseFloat(currentSavings) || 0;
        const ms = parseFloat(monthlySavings) || 0;
        const r = parseFloat(returnRate) / 100;
        if (!ca || !ra || ra <= ca) return;

        const years = ra - ca;
        const n = years * 12;
        const mr = r / 12;

        const fromCurrent = cs * Math.pow(1 + r, years);
        const fromMonthly = ms * (((Math.pow(1 + mr, n) - 1) / mr) * (1 + mr));
        const corpus = fromCurrent + fromMonthly;

        setResult({ corpus: Math.round(corpus), years, fromCurrent: Math.round(fromCurrent), fromMonthly: Math.round(fromMonthly) });
    };

    return (
        <CalcLayout calcTitle="Retirement Calculator" calcDescription="Project your retirement corpus based on savings and expected returns" calcIcon="🏖️" categorySlug="finance" categoryTitle="Finance">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div className="form-grid-2">
                    <div>
                        <label className="field-label">Current Age</label>
                        <input className="calc-input" type="number" value={currentAge} onChange={e => setCurrentAge(e.target.value)} placeholder="e.g. 30" />
                    </div>
                    <div>
                        <label className="field-label">Retirement Age</label>
                        <input className="calc-input" type="number" value={retirementAge} onChange={e => setRetirementAge(e.target.value)} placeholder="e.g. 60" />
                    </div>
                    <div>
                        <label className="field-label">Current Savings (₹)</label>
                        <input className="calc-input" type="number" value={currentSavings} onChange={e => setCurrentSavings(e.target.value)} placeholder="e.g. 200000" />
                    </div>
                    <div>
                        <label className="field-label">Monthly Savings (₹)</label>
                        <input className="calc-input" type="number" value={monthlySavings} onChange={e => setMonthlySavings(e.target.value)} placeholder="e.g. 10000" />
                    </div>
                    <div>
                        <label className="field-label">Expected Annual Return (%)</label>
                        <input className="calc-input" type="number" value={returnRate} onChange={e => setReturnRate(e.target.value)} placeholder="e.g. 12" step="0.1" />
                    </div>
                </div>
                <button className="btn-primary" style={{ width: "100%", marginTop: "20px" }} onClick={calculate}>Project Retirement Corpus</button>

                {result && (
                    <div className="result-box animate-fade-in" style={{ marginTop: "24px" }}>
                        <div style={{ textAlign: "center", marginBottom: "20px" }}>
                            <div className="result-label">Estimated Retirement Corpus ({result.years} years)</div>
                            <div className="result-value">₹{result.corpus.toLocaleString()}</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                            <div style={{ background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: "12px", padding: "14px", textAlign: "center" }}>
                                <div style={{ fontSize: "11px", color: "#a09fff", fontWeight: 600, marginBottom: "4px", textTransform: "uppercase" }}>From Current Savings</div>
                                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#6c63ff" }}>₹{result.fromCurrent.toLocaleString()}</div>
                            </div>
                            <div style={{ background: "rgba(107,203,119,0.1)", border: "1px solid rgba(107,203,119,0.2)", borderRadius: "12px", padding: "14px", textAlign: "center" }}>
                                <div style={{ fontSize: "11px", color: "#9aeea6", fontWeight: 600, marginBottom: "4px", textTransform: "uppercase" }}>From Monthly Savings</div>
                                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#6bcb77" }}>₹{result.fromMonthly.toLocaleString()}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
