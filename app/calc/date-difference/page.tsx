"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

export default function DateDifferencePage() {
    const [date1, setDate1] = useState("");
    const [date2, setDate2] = useState("");
    const [result, setResult] = useState<{ days: number; weeks: number; months: string; years: string } | null>(null);

    const calculate = () => {
        if (!date1 || !date2) return;
        const d1 = new Date(date1), d2 = new Date(date2);
        const ms = Math.abs(d2.getTime() - d1.getTime());
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
        const weeks = Math.floor(days / 7);
        const totalMonths = Math.floor(days / 30.4375);
        const yrs = Math.floor(totalMonths / 12);
        const mo = totalMonths % 12;
        setResult({ days, weeks, months: totalMonths.toString(), years: `${yrs}y ${mo}m` });
    };

    return (
        <CalcLayout calcTitle="Date Difference Calculator" calcDescription="Find the gap between two dates — in days, weeks, months, and years" calcIcon="📅" categorySlug="math" categoryTitle="Math & Daily">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div className="form-grid-2">
                    <div>
                        <label className="field-label">Start Date</label>
                        <input className="calc-input" type="date" value={date1} onChange={e => setDate1(e.target.value)} style={{ colorScheme: "dark" }} />
                    </div>
                    <div>
                        <label className="field-label">End Date</label>
                        <input className="calc-input" type="date" value={date2} onChange={e => setDate2(e.target.value)} style={{ colorScheme: "dark" }} />
                    </div>
                </div>
                <button className="btn-primary" style={{ width: "100%", marginTop: "20px" }} onClick={calculate}>Calculate Difference</button>

                {result && (
                    <div className="result-box animate-fade-in" style={{ marginTop: "24px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                            {[
                                { label: "Total Days", value: result.days.toLocaleString(), icon: "📆", color: "#6c63ff" },
                                { label: "Total Weeks", value: result.weeks.toLocaleString(), icon: "🗓️", color: "#4ecdc4" },
                                { label: "Total Months", value: result.months, icon: "📅", color: "#ffd93d" },
                                { label: "Years & Months", value: result.years, icon: "⏳", color: "#6bcb77" },
                            ].map(item => (
                                <div key={item.label} style={{ background: `${item.color}12`, border: `1px solid ${item.color}25`, borderRadius: "12px", padding: "16px", textAlign: "center" }}>
                                    <div style={{ fontSize: "20px", marginBottom: "6px" }}>{item.icon}</div>
                                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.4rem", fontWeight: 700, color: item.color }}>{item.value}</div>
                                    <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "3px" }}>{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
