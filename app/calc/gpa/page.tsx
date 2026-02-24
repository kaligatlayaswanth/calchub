"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

interface CourseEntry { name: string; grade: string; credits: string; }
const gradePoints: Record<string, number> = {
    "A+": 10, "A": 10, "A-": 9, "O": 10, "A1": 10,
    "B+": 8, "B": 8, "B-": 7, "B1": 8,
    "C+": 7, "C": 6, "C-": 5, "C1": 6,
    "D": 4, "E": 5, "F": 0,
};
const letterGrades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"];

export default function GPAPage() {
    const [courses, setCourses] = useState<CourseEntry[]>([
        { name: "", grade: "A", credits: "3" },
        { name: "", grade: "B+", credits: "3" },
    ]);
    const [result, setResult] = useState<{ gpa: number; totalCredits: number } | null>(null);

    const addCourse = () => setCourses([...courses, { name: "", grade: "A", credits: "3" }]);
    const removeCourse = (i: number) => setCourses(courses.filter((_, idx) => idx !== i));
    const updateCourse = (i: number, field: keyof CourseEntry, val: string) => {
        const updated = [...courses];
        updated[i] = { ...updated[i], [field]: val };
        setCourses(updated);
    };

    const calculate = () => {
        let totalPoints = 0, totalCredits = 0;
        for (const c of courses) {
            const credits = parseFloat(c.credits);
            const gp = gradePoints[c.grade] ?? 0;
            if (!credits) continue;
            totalPoints += gp * credits;
            totalCredits += credits;
        }
        if (!totalCredits) return;
        setResult({ gpa: Math.round((totalPoints / totalCredits) * 100) / 100, totalCredits });
    };

    return (
        <CalcLayout calcTitle="GPA / CGPA Calculator" calcDescription="Calculate your weighted GPA or CGPA across multiple courses" calcIcon="🎯" categorySlug="student" categoryTitle="Student Tools" calcSlug="gpa">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div style={{ marginBottom: "20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 100px 40px", gap: "8px", marginBottom: "10px" }}>
                        <div className="field-label">Course Name (optional)</div>
                        <div className="field-label">Grade</div>
                        <div className="field-label">Credits</div>
                        <div />
                    </div>
                    {courses.map((c, i) => (
                        <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 140px 100px 40px", gap: "8px", marginBottom: "10px" }}>
                            <input className="calc-input" value={c.name} onChange={e => updateCourse(i, "name", e.target.value)} placeholder={`Course ${i + 1}`} />
                            <select className="calc-select" value={c.grade} onChange={e => updateCourse(i, "grade", e.target.value)}>
                                {letterGrades.map(g => <option key={g} value={g}>{g}</option>)}
                            </select>
                            <input className="calc-input" type="number" value={c.credits} onChange={e => updateCourse(i, "credits", e.target.value)} placeholder="3" min="0" step="0.5" />
                            <button onClick={() => removeCourse(i)} style={{ background: "rgba(255,107,157,0.1)", border: "1px solid rgba(255,107,157,0.2)", borderRadius: "8px", cursor: "pointer", color: "#ff6b9d", fontSize: "14px", fontWeight: 700 }}>×</button>
                        </div>
                    ))}
                </div>

                <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
                    <button className="btn-secondary" onClick={addCourse}>+ Add Course</button>
                </div>

                <button className="btn-primary" style={{ width: "100%" }} onClick={calculate}>Calculate GPA</button>

                {result && (
                    <div className="result-box animate-fade-in" style={{ textAlign: "center", marginTop: "24px" }}>
                        <div className="result-label">Your GPA / CGPA</div>
                        <div className="result-value" style={{ fontSize: "4rem" }}>{result.gpa.toFixed(2)}</div>
                        <div style={{ color: "var(--text-secondary)", fontSize: "14px" }}>based on {result.totalCredits} total credits</div>
                        <div style={{
                            display: "inline-block",
                            marginTop: "12px",
                            background: result.gpa >= 8.5 ? "rgba(107,203,119,0.15)" : result.gpa >= 7 ? "rgba(255,217,61,0.15)" : "rgba(255,107,157,0.15)",
                            border: `1px solid ${result.gpa >= 8.5 ? "rgba(107,203,119,0.3)" : result.gpa >= 7 ? "rgba(255,217,61,0.3)" : "rgba(255,107,157,0.3)"}`,
                            borderRadius: "999px",
                            color: result.gpa >= 8.5 ? "#6bcb77" : result.gpa >= 7 ? "#ffd93d" : "#ff6b9d",
                            fontSize: "13px", fontWeight: 600, padding: "6px 18px",
                        }}>
                            {result.gpa >= 9 ? "Outstanding 🏆" : result.gpa >= 8.5 ? "Excellent 🌟" : result.gpa >= 7 ? "Good 👍" : result.gpa >= 5 ? "Average" : "Needs Improvement"}
                        </div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
