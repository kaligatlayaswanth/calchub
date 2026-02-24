"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

type Region = "india" | "usa" | "uk";

const taxSlabs: Record<Region, { income: number; rate: number; label: string }[]> = {
    india: [
        { income: 300000, rate: 0, label: "Up to ₹3L" },
        { income: 700000, rate: 5, label: "₹3L – ₹7L" },
        { income: 1000000, rate: 10, label: "₹7L – ₹10L" },
        { income: 1200000, rate: 15, label: "₹10L – ₹12L" },
        { income: 1500000, rate: 20, label: "₹12L – ₹15L" },
        { income: Infinity, rate: 30, label: "Above ₹15L" },
    ],
    usa: [
        { income: 11600, rate: 10, label: "$0 – $11.6K" },
        { income: 47150, rate: 12, label: "$11.6K – $47.1K" },
        { income: 100525, rate: 22, label: "$47.1K – $100.5K" },
        { income: 191950, rate: 24, label: "$100.5K – $191.9K" },
        { income: 243725, rate: 32, label: "$191.9K – $243.7K" },
        { income: 609350, rate: 35, label: "$243.7K – $609.3K" },
        { income: Infinity, rate: 37, label: "Above $609.3K" },
    ],
    uk: [
        { income: 12570, rate: 0, label: "Personal Allowance" },
        { income: 50270, rate: 20, label: "Basic Rate" },
        { income: 125140, rate: 40, label: "Higher Rate" },
        { income: Infinity, rate: 45, label: "Additional Rate" },
    ],
};

const symbols: Record<Region, string> = { india: "₹", usa: "$", uk: "£" };
const regionNames: Record<Region, string> = { india: "🇮🇳 India (New Regime)", usa: "🇺🇸 USA (Single Filer)", uk: "🇬🇧 United Kingdom" };

export default function TaxPage() {
    const [region, setRegion] = useState<Region>("india");
    const [income, setIncome] = useState("");
    const [result, setResult] = useState<{ tax: number; effective: number; breakdown: { slab: string; taxed: number; rate: number; tax: number }[] } | null>(null);

    const calculate = () => {
        const inc = parseFloat(income);
        if (!inc) return;
        const slabs = taxSlabs[region];
        let remaining = inc, totalTax = 0;
        const breakdown: { slab: string; taxed: number; rate: number; tax: number }[] = [];
        let prev = 0;
        for (const slab of slabs) {
            if (remaining <= 0) break;
            const taxable = Math.min(remaining, slab.income - prev);
            const tax = (taxable * slab.rate) / 100;
            if (taxable > 0) breakdown.push({ slab: slab.label, taxed: Math.round(taxable), rate: slab.rate, tax: Math.round(tax) });
            totalTax += tax;
            remaining -= taxable;
            prev = slab.income;
        }
        setResult({ tax: Math.round(totalTax), effective: Math.round((totalTax / inc) * 100 * 10) / 10, breakdown });
    };

    const sym = symbols[region];

    return (
        <CalcLayout calcTitle="Tax Calculator" calcDescription="Estimate your income tax across India, USA, and UK tax slabs — no API required" calcIcon="🧾" categorySlug="finance" categoryTitle="Finance">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div style={{ marginBottom: "20px" }}>
                    <label className="field-label">Select Region</label>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {(Object.keys(taxSlabs) as Region[]).map(r => (
                            <button key={r} onClick={() => { setRegion(r); setResult(null); }} style={{
                                background: region === r ? "rgba(108,99,255,0.1)" : "rgba(255,255,255,0.03)",
                                border: `1px solid ${region === r ? "rgba(108,99,255,0.35)" : "rgba(255,255,255,0.08)"}`,
                                borderRadius: "12px", padding: "12px 18px", cursor: "pointer", textAlign: "left",
                                color: region === r ? "#a09fff" : "#f0f2ff", fontSize: "14px", fontWeight: 500, transition: "all 0.2s",
                            }}>
                                {regionNames[r]}
                            </button>
                        ))}
                    </div>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label className="field-label">Annual Taxable Income ({sym})</label>
                    <input className="calc-input" type="number" value={income} onChange={e => setIncome(e.target.value)} placeholder="e.g. 1000000" />
                </div>
                <button className="btn-primary" style={{ width: "100%" }} onClick={calculate}>Calculate Tax</button>

                {result && (
                    <div className="animate-fade-in">
                        <div className="result-box" style={{ marginTop: "24px" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", textAlign: "center", marginBottom: "20px" }}>
                                <div>
                                    <div className="result-label">Total Tax</div>
                                    <div className="result-value" style={{ fontSize: "1.8rem" }}>{sym}{result.tax.toLocaleString()}</div>
                                </div>
                                <div>
                                    <div className="result-label">Effective Rate</div>
                                    <div className="result-value" style={{ fontSize: "1.8rem" }}>{result.effective}%</div>
                                </div>
                            </div>

                            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "16px" }}>
                                <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Tax Slab Breakdown</div>
                                {result.breakdown.map((b, i) => (
                                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: "13px" }}>
                                        <div>
                                            <span style={{ color: "var(--text-secondary)" }}>{b.slab}</span>
                                            <span style={{ color: "var(--text-muted)", marginLeft: "8px" }}>({b.rate}%)</span>
                                        </div>
                                        <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, color: "#ffd93d" }}>{sym}{b.tax.toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
