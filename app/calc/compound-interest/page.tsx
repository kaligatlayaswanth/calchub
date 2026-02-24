"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

const frequencies = [
    { label: "Annually", value: 1 },
    { label: "Semi-Annually", value: 2 },
    { label: "Quarterly", value: 4 },
    { label: "Monthly", value: 12 },
    { label: "Daily", value: 365 },
];

export default function CompoundInterestPage() {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [time, setTime] = useState("");
    const [freq, setFreq] = useState(12);
    const [result, setResult] = useState<{ amount: number; interest: number; years: { year: number; balance: number }[] } | null>(null);

    const calculate = () => {
        const P = parseFloat(principal), r = parseFloat(rate) / 100, t = parseFloat(time), n = freq;
        if (!P || !r || !t) return;
        const amount = P * Math.pow(1 + r / n, n * t);
        const interest = amount - P;
        const years = Array.from({ length: Math.min(Math.ceil(t), 30) }, (_, i) => ({
            year: i + 1,
            balance: Math.round(P * Math.pow(1 + r / n, n * (i + 1))),
        }));
        setResult({ amount: Math.round(amount * 100) / 100, interest: Math.round(interest * 100) / 100, years });
    };

    return (
        <CalcLayout calcTitle="Compound Interest Calculator" calcDescription="Calculate compound interest with customizable compounding frequency" calcIcon="📈" categorySlug="finance" categoryTitle="Finance" calcSlug="compound-interest">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div className="form-grid">
                    <div>
                        <label className="field-label">Principal Amount</label>
                        <input className="calc-input" type="number" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="e.g. 50000" />
                    </div>
                    <div>
                        <label className="field-label">Annual Interest Rate (%)</label>
                        <input className="calc-input" type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 12" step="0.1" />
                    </div>
                    <div>
                        <label className="field-label">Time Period (years)</label>
                        <input className="calc-input" type="number" value={time} onChange={e => setTime(e.target.value)} placeholder="e.g. 10" />
                    </div>
                    <div>
                        <label className="field-label">Compounding Frequency</label>
                        <select className="calc-select" value={freq} onChange={e => setFreq(Number(e.target.value))}>
                            {frequencies.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                        </select>
                    </div>
                </div>

                <button className="btn-primary" style={{ width: "100%", marginTop: "20px" }} onClick={calculate}>Calculate</button>

                {result && (
                    <div className="animate-fade-in">
                        <div className="result-box" style={{ marginTop: "24px" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", textAlign: "center", marginBottom: "20px" }}>
                                <div>
                                    <div className="result-label">Maturity Amount</div>
                                    <div className="result-value" style={{ fontSize: "1.8rem" }}>₹{result.amount.toLocaleString()}</div>
                                </div>
                                <div>
                                    <div className="result-label">Interest Earned</div>
                                    <div className="result-value" style={{ fontSize: "1.8rem" }}>₹{result.interest.toLocaleString()}</div>
                                </div>
                            </div>
                            {/* Growth table - first 10 years */}
                            <div style={{ maxHeight: "220px", overflowY: "auto" }}>
                                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                                    <thead>
                                        <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                                            <th style={{ padding: "8px", textAlign: "left", color: "var(--text-muted)", fontWeight: 500 }}>Year</th>
                                            <th style={{ padding: "8px", textAlign: "right", color: "var(--text-muted)", fontWeight: 500 }}>Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {result.years.map(y => (
                                            <tr key={y.year} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                                                <td style={{ padding: "8px", color: "var(--text-secondary)" }}>Year {y.year}</td>
                                                <td style={{ padding: "8px", textAlign: "right", fontFamily: "'Outfit',sans-serif", fontWeight: 600, color: "#6c63ff" }}>₹{y.balance.toLocaleString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
