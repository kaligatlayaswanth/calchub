"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

export default function EMIPage() {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [tenure, setTenure] = useState("");
    const [tenureUnit, setTenureUnit] = useState<"months" | "years">("years");
    const [result, setResult] = useState<{ emi: number; total: number; interest: number } | null>(null);

    const calculate = () => {
        const P = parseFloat(principal);
        const R = parseFloat(rate) / (12 * 100);
        const N = tenureUnit === "years" ? parseFloat(tenure) * 12 : parseFloat(tenure);
        if (!P || !R || !N) return;
        const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        const total = emi * N;
        setResult({ emi: Math.round(emi), total: Math.round(total), interest: Math.round(total - P) });
    };

    const fmt = (n: number) => n.toLocaleString("en-IN");

    return (
        <CalcLayout calcTitle="EMI / Loan Calculator" calcDescription="Calculate your monthly EMI, total payment, and interest amount for any loan" calcIcon="🏦" categorySlug="finance" categoryTitle="Finance" calcSlug="emi">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div className="form-grid">
                    <div>
                        <label className="field-label">Loan Amount (Principal)</label>
                        <input className="calc-input" type="number" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="e.g. 500000" />
                    </div>
                    <div>
                        <label className="field-label">Annual Interest Rate (%)</label>
                        <input className="calc-input" type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 8.5" step="0.1" />
                    </div>
                    <div>
                        <label className="field-label">Loan Tenure</label>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <input className="calc-input" type="number" value={tenure} onChange={e => setTenure(e.target.value)} placeholder={tenureUnit === "years" ? "e.g. 5" : "e.g. 60"} style={{ flex: 1 }} />
                            <div className="pill-group" style={{ flexShrink: 0 }}>
                                <button className={`pill-btn ${tenureUnit === "years" ? "active" : ""}`} onClick={() => setTenureUnit("years")}>Years</button>
                                <button className={`pill-btn ${tenureUnit === "months" ? "active" : ""}`} onClick={() => setTenureUnit("months")}>Months</button>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="btn-primary" style={{ width: "100%", marginTop: "20px" }} onClick={calculate}>Calculate EMI</button>

                {result && (
                    <div className="animate-fade-in">
                        <div className="result-box" style={{ marginTop: "24px" }}>
                            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                                <div className="result-label">Monthly EMI</div>
                                <div className="result-value">₹{fmt(result.emi)}</div>
                            </div>

                            {/* Pie-like breakdown */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "16px", textAlign: "center", backdropFilter: "blur(8px)" }}>
                                    <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Total Payment</div>
                                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--color-secondary)" }}>₹{fmt(result.total)}</div>
                                </div>
                                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "16px", textAlign: "center", backdropFilter: "blur(8px)" }}>
                                    <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Total Interest</div>
                                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--color-primary)" }}>₹{fmt(result.interest)}</div>
                                </div>
                            </div>

                            {/* Visual bar */}
                            <div style={{ marginTop: "16px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--text-muted)", marginBottom: "6px" }}>
                                    <span>Principal ({Math.round((parseFloat(principal) / result.total) * 100)}%)</span>
                                    <span>Interest ({Math.round((result.interest / result.total) * 100)}%)</span>
                                </div>
                                <div style={{ height: "8px", borderRadius: "999px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden" }}>
                                    <div style={{
                                        height: "100%",
                                        width: `${(parseFloat(principal) / result.total) * 100}%`,
                                        background: "var(--color-primary)",
                                        borderRadius: "999px",
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
