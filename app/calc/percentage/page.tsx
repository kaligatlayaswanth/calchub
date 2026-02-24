"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

type Mode = "xofy" | "whatpct" | "pctchange";

export default function PercentagePage() {
    const [mode, setMode] = useState<Mode>("xofy");
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const av = parseFloat(a), bv = parseFloat(b);
        if (isNaN(av) || isNaN(bv)) return;
        if (mode === "xofy") setResult(`${((av / 100) * bv).toFixed(2)}`);
        else if (mode === "whatpct") setResult(`${((av / bv) * 100).toFixed(2)}%`);
        else {
            const change = ((bv - av) / Math.abs(av)) * 100;
            setResult(`${change >= 0 ? "+" : ""}${change.toFixed(2)}% (${change >= 0 ? "Increase" : "Decrease"})`);
        }
    };

    const modes: { id: Mode; label: string; aLabel: string; bLabel: string; hint: string }[] = [
        { id: "xofy", label: "X% of Y", aLabel: "Percentage (%)", bLabel: "Of Value", hint: "Find what X% of Y equals" },
        { id: "whatpct", label: "X is what % of Y", aLabel: "Value (X)", bLabel: "Total (Y)", hint: "Find what percentage X is of Y" },
        { id: "pctchange", label: "% Change", aLabel: "Original Value", bLabel: "New Value", hint: "Find the percentage increase or decrease" },
    ];

    const current = modes.find(m => m.id === mode)!;

    return (
        <CalcLayout calcTitle="Percentage Calculator" calcDescription="Calculate percentages, percentage change, and find X% of Y with ease" calcIcon="%" categorySlug="math" categoryTitle="Math & Daily">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div style={{ marginBottom: "24px" }}>
                    <label className="field-label">Calculation Type</label>
                    <div className="pill-group">
                        {modes.map(m => <button key={m.id} className={`pill-btn ${mode === m.id ? "active" : ""}`} onClick={() => { setMode(m.id); setResult(null); }}>{m.label}</button>)}
                    </div>
                </div>

                <div className="info-box" style={{ marginBottom: "20px" }}>{current.hint}</div>

                <div className="form-grid-2">
                    <div>
                        <label className="field-label">{current.aLabel}</label>
                        <input className="calc-input" type="number" value={a} onChange={e => { setA(e.target.value); setResult(null); }} placeholder="Enter value" />
                    </div>
                    <div>
                        <label className="field-label">{current.bLabel}</label>
                        <input className="calc-input" type="number" value={b} onChange={e => { setB(e.target.value); setResult(null); }} placeholder="Enter value" />
                    </div>
                </div>

                <button className="btn-primary" style={{ width: "100%", marginTop: "20px" }} onClick={calculate}>Calculate</button>

                {result && (
                    <div className="result-box animate-fade-in" style={{ textAlign: "center" }}>
                        <div className="result-label">Result</div>
                        <div className="result-value" style={{ fontSize: "2.8rem" }}>{result}</div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
