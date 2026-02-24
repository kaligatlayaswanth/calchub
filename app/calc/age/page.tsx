"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

export default function AgePage() {
    const [dob, setDob] = useState("");
    const [result, setResult] = useState<{ years: number; months: number; days: number; totalDays: number; nextBirthday: number } | null>(null);

    const calculate = () => {
        if (!dob) return;
        const birth = new Date(dob);
        const now = new Date();
        const diffMs = now.getTime() - birth.getTime();
        if (diffMs < 0) return;

        const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        let years = now.getFullYear() - birth.getFullYear();
        let months = now.getMonth() - birth.getMonth();
        let days = now.getDate() - birth.getDate();

        if (days < 0) { months--; const prev = new Date(now.getFullYear(), now.getMonth(), 0); days += prev.getDate(); }
        if (months < 0) { years--; months += 12; }

        const nextBDay = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
        if (nextBDay <= now) nextBDay.setFullYear(now.getFullYear() + 1);
        const nextBirthday = Math.ceil((nextBDay.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

        setResult({ years, months, days, totalDays, nextBirthday });
    };

    return (
        <CalcLayout calcTitle="Age Calculator" calcDescription="Calculate your exact age in years, months, days — and days until your next birthday" calcIcon="🎂" categorySlug="math" categoryTitle="Math & Daily">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div style={{ marginBottom: "20px" }}>
                    <label className="field-label">Date of Birth</label>
                    <input className="calc-input" type="date" value={dob} onChange={e => setDob(e.target.value)} max={new Date().toISOString().split("T")[0]}
                        style={{ colorScheme: "dark" }} />
                </div>
                <button className="btn-primary" style={{ width: "100%" }} onClick={calculate}>Calculate Age</button>

                {result && (
                    <div className="result-box animate-fade-in" style={{ marginTop: "24px" }}>
                        <div style={{ textAlign: "center", marginBottom: "20px" }}>
                            <div className="result-label">Your Age</div>
                            <div className="result-value">{result.years} <span style={{ fontSize: "1.2rem", fontWeight: 400, WebkitTextFillColor: "var(--text-secondary)" }}>years</span></div>
                            <div style={{ color: "var(--text-secondary)", fontSize: "15px", marginTop: "4px" }}>
                                {result.months} months, {result.days} days
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                            <div style={{ background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: "12px", padding: "14px", textAlign: "center" }}>
                                <div style={{ fontSize: "11px", color: "#a09fff", fontWeight: 600, marginBottom: "4px", textTransform: "uppercase" }}>Total Days Lived</div>
                                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "#6c63ff" }}>{result.totalDays.toLocaleString()}</div>
                            </div>
                            <div style={{ background: "rgba(255,107,157,0.1)", border: "1px solid rgba(255,107,157,0.2)", borderRadius: "12px", padding: "14px", textAlign: "center" }}>
                                <div style={{ fontSize: "11px", color: "#ff9cbf", fontWeight: 600, marginBottom: "4px", textTransform: "uppercase" }}>Next Birthday In</div>
                                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "#ff6b9d" }}>{result.nextBirthday} days 🎉</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
