"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

interface SubjectEntry { name: string; obtained: string; total: string; }

export default function MarksPercentagePage() {
    const [subjects, setSubjects] = useState<SubjectEntry[]>([
        { name: "", obtained: "", total: "100" },
        { name: "", obtained: "", total: "100" },
    ]);
    const [result, setResult] = useState<{ percentage: number; obtained: number; total: number } | null>(null);

    const addSubject = () => setSubjects([...subjects, { name: "", obtained: "", total: "100" }]);
    const remove = (i: number) => setSubjects(subjects.filter((_, idx) => idx !== i));
    const update = (i: number, f: keyof SubjectEntry, v: string) => {
        const u = [...subjects]; u[i] = { ...u[i], [f]: v }; setSubjects(u);
    };

    const calculate = () => {
        let totalObtained = 0, totalMax = 0;
        for (const s of subjects) {
            const o = parseFloat(s.obtained), t = parseFloat(s.total);
            if (isNaN(o) || isNaN(t) || !t) continue;
            totalObtained += o; totalMax += t;
        }
        if (!totalMax) return;
        setResult({ percentage: Math.round((totalObtained / totalMax) * 10000) / 100, obtained: totalObtained, total: totalMax });
    };

    const grade = (p: number) => {
        if (p >= 90) return { g: "A+", color: "#6bcb77" };
        if (p >= 80) return { g: "A", color: "#6bcb77" };
        if (p >= 70) return { g: "B", color: "#4ecdc4" };
        if (p >= 60) return { g: "C", color: "#ffd93d" };
        if (p >= 50) return { g: "D", color: "#f77f00" };
        return { g: "F", color: "#ff6b9d" };
    };

    return (
        <CalcLayout calcTitle="Marks Percentage" calcDescription="Convert marks to percentage across multiple subjects" calcIcon="📝" categorySlug="student" categoryTitle="Student Tools">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 40px", gap: "8px", marginBottom: "10px" }}>
                    <div className="field-label">Subject</div>
                    <div className="field-label">Marks Obtained</div>
                    <div className="field-label">Out of</div>
                    <div />
                </div>
                {subjects.map((s, i) => (
                    <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 40px", gap: "8px", marginBottom: "10px" }}>
                        <input className="calc-input" value={s.name} onChange={e => update(i, "name", e.target.value)} placeholder={`Subject ${i + 1}`} />
                        <input className="calc-input" type="number" value={s.obtained} onChange={e => update(i, "obtained", e.target.value)} placeholder="e.g. 85" />
                        <input className="calc-input" type="number" value={s.total} onChange={e => update(i, "total", e.target.value)} placeholder="100" />
                        <button onClick={() => remove(i)} style={{ background: "rgba(255,107,157,0.1)", border: "1px solid rgba(255,107,157,0.2)", borderRadius: "8px", cursor: "pointer", color: "#ff6b9d", fontSize: "14px", fontWeight: 700 }}>×</button>
                    </div>
                ))}

                <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
                    <button className="btn-secondary" onClick={addSubject}>+ Add Subject</button>
                </div>

                <button className="btn-primary" style={{ width: "100%" }} onClick={calculate}>Calculate Percentage</button>

                {result && (
                    <div className="result-box animate-fade-in" style={{ textAlign: "center", marginTop: "24px" }}>
                        {(() => {
                            const g = grade(result.percentage);
                            return <>
                                <div className="result-label">Overall Percentage</div>
                                <div className="result-value" style={{ fontSize: "3.5rem" }}>{result.percentage}%</div>
                                <div style={{ color: "var(--text-secondary)", fontSize: "14px", marginTop: "4px" }}>
                                    {result.obtained} / {result.total} marks
                                </div>
                                <div style={{ display: "inline-block", marginTop: "12px", background: `${g.color}18`, border: `1px solid ${g.color}30`, borderRadius: "999px", color: g.color, fontSize: "16px", fontWeight: 700, padding: "8px 24px" }}>
                                    Grade: {g.g}
                                </div>
                            </>;
                        })()}
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
