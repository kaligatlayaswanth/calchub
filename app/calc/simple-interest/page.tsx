"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

export default function SimpleInterestPage() {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [time, setTime] = useState("");
    const [timeUnit, setTimeUnit] = useState<"years" | "months">("years");
    const [result, setResult] = useState<{ si: number; total: number } | null>(null);

    const calculate = () => {
        const P = parseFloat(principal), R = parseFloat(rate);
        let T = parseFloat(time);
        if (timeUnit === "months") T = T / 12;
        if (!P || !R || !T) return;
        const si = (P * R * T) / 100;
        setResult({ si: Math.round(si * 100) / 100, total: Math.round((P + si) * 100) / 100 });
    };

    return (
        <CalcLayout calcTitle="Simple Interest Calculator" calcDescription="Calculate interest on a principal amount at a fixed rate over time" calcIcon="📊" categorySlug="finance" categoryTitle="Finance">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div className="form-grid">
                    <div>
                        <label className="field-label">Principal Amount</label>
                        <input className="calc-input" type="number" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="e.g. 10000" />
                    </div>
                    <div>
                        <label className="field-label">Annual Interest Rate (%)</label>
                        <input className="calc-input" type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 7.5" step="0.1" />
                    </div>
                    <div>
                        <label className="field-label">Time Period</label>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <input className="calc-input" type="number" value={time} onChange={e => setTime(e.target.value)} placeholder={timeUnit === "years" ? "e.g. 3" : "e.g. 36"} style={{ flex: 1 }} />
                            <div className="pill-group" style={{ flexShrink: 0 }}>
                                <button className={`pill-btn ${timeUnit === "years" ? "active" : ""}`} onClick={() => setTimeUnit("years")}>Yrs</button>
                                <button className={`pill-btn ${timeUnit === "months" ? "active" : ""}`} onClick={() => setTimeUnit("months")}>Mo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn-primary" style={{ width: "100%", marginTop: "20px" }} onClick={calculate}>Calculate</button>

                {result && (
                    <div className="result-box animate-fade-in">
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", textAlign: "center" }}>
                            <div>
                                <div className="result-label">Simple Interest</div>
                                <div className="result-value" style={{ fontSize: "1.8rem" }}>₹{result.si.toLocaleString()}</div>
                            </div>
                            <div>
                                <div className="result-label">Total Amount</div>
                                <div className="result-value" style={{ fontSize: "1.8rem" }}>₹{result.total.toLocaleString()}</div>
                            </div>
                        </div>
                        <div className="info-box" style={{ marginTop: "16px" }}>
                            Formula: <strong>SI = (P × R × T) ÷ 100</strong>
                        </div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
