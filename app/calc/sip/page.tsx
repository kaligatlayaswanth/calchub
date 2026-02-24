"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

export default function SIPPage() {
    const [amount, setAmount] = useState("");
    const [rate, setRate] = useState("");
    const [years, setYears] = useState("");
    const [result, setResult] = useState<{ fv: number; invested: number; returns: number } | null>(null);

    const calculate = () => {
        const P = parseFloat(amount);
        const r = parseFloat(rate) / (12 * 100);
        const n = parseFloat(years) * 12;
        if (!P || !r || !n) return;
        const fv = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
        const invested = P * n;
        setResult({ fv: Math.round(fv), invested: Math.round(invested), returns: Math.round(fv - invested) });
    };

    return (
        <CalcLayout calcTitle="SIP Calculator" calcDescription="Calculate the future value of your monthly Systematic Investment Plan" calcIcon="💼" categorySlug="finance" categoryTitle="Finance">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div className="form-grid">
                    <div>
                        <label className="field-label">Monthly SIP Amount (₹)</label>
                        <input className="calc-input" type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="e.g. 5000" />
                    </div>
                    <div>
                        <label className="field-label">Expected Annual Return (%)</label>
                        <input className="calc-input" type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 12" step="0.1" />
                    </div>
                    <div>
                        <label className="field-label">Investment Period (years)</label>
                        <input className="calc-input" type="number" value={years} onChange={e => setYears(e.target.value)} placeholder="e.g. 10" />
                    </div>
                </div>
                <button className="btn-primary" style={{ width: "100%", marginTop: "20px" }} onClick={calculate}>Calculate Returns</button>

                {result && (
                    <div className="result-box animate-fade-in" style={{ marginTop: "24px" }}>
                        <div style={{ textAlign: "center", marginBottom: "20px" }}>
                            <div className="result-label">Total Maturity Value</div>
                            <div className="result-value">₹{result.fv.toLocaleString()}</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                            <div style={{ background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
                                <div style={{ fontSize: "11px", color: "#a09fff", fontWeight: 600, marginBottom: "4px", textTransform: "uppercase" }}>Total Invested</div>
                                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#6c63ff" }}>₹{result.invested.toLocaleString()}</div>
                            </div>
                            <div style={{ background: "rgba(107,203,119,0.1)", border: "1px solid rgba(107,203,119,0.2)", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
                                <div style={{ fontSize: "11px", color: "#9aeea6", fontWeight: 600, marginBottom: "4px", textTransform: "uppercase" }}>Returns Earned</div>
                                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#6bcb77" }}>₹{result.returns.toLocaleString()}</div>
                            </div>
                        </div>
                        <div style={{ marginTop: "16px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--text-muted)", marginBottom: "6px" }}>
                                <span>Invested ({Math.round((result.invested / result.fv) * 100)}%)</span>
                                <span>Returns ({Math.round((result.returns / result.fv) * 100)}%)</span>
                            </div>
                            <div style={{ height: "8px", borderRadius: "999px", overflow: "hidden", background: "rgba(107,203,119,0.3)" }}>
                                <div style={{ height: "100%", width: `${(result.invested / result.fv) * 100}%`, background: "linear-gradient(90deg, #6c63ff, #4ecdc4)", borderRadius: "999px" }} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
