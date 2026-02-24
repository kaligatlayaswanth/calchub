"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

export default function AttendancePage() {
    const [mode, setMode] = useState<"current" | "canMiss" | "toAttend">("current");
    const [attended, setAttended] = useState("");
    const [total, setTotal] = useState("");
    const [target, setTarget] = useState("75");
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const att = parseFloat(attended), tot = parseFloat(total), tgt = parseFloat(target) / 100;
        if (!tot || tgt <= 0) return;

        if (mode === "current") {
            if (!att) return;
            const pct = (att / tot) * 100;
            setResult(`${pct.toFixed(2)}% attendance`);
        } else if (mode === "canMiss") {
            if (!att) return;
            // att / (tot + x) >= tgt  =>  att/tgt >= tot + x  =>  x <= (att / tgt) - tot
            const canMiss = Math.floor((att / tgt) - tot);
            if (canMiss <= 0) setResult("You can't miss any more classes to maintain your target.");
            else setResult(`You can miss up to ${canMiss} more class${canMiss > 1 ? "es" : ""} and still maintain ${target}% attendance.`);
        } else {
            if (!att) return;
            // (att + x) / (tot + x) >= tgt → x >= (tgt * tot - att) / (1 - tgt)
            const needed = Math.ceil((tgt * tot - att) / (1 - tgt));
            if (needed <= 0) setResult(`You already meet the ${target}% target! 🎉`);
            else setResult(`You need to attend ${needed} more consecutive class${needed > 1 ? "es" : ""} to reach ${target}% attendance.`);
        }
    };

    const modes = [
        { id: "current" as const, label: "Current %" },
        { id: "canMiss" as const, label: "Can I Miss?" },
        { id: "toAttend" as const, label: "How Many More?" },
    ];

    return (
        <CalcLayout calcTitle="Attendance Calculator" calcDescription="Track your attendance, find how many classes you can skip, or how many you need to attend" calcIcon="📋" categorySlug="student" categoryTitle="Student Tools">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div style={{ marginBottom: "24px" }}>
                    <label className="field-label">Mode</label>
                    <div className="pill-group">
                        {modes.map(m => <button key={m.id} className={`pill-btn ${mode === m.id ? "active" : ""}`} onClick={() => { setMode(m.id); setResult(null); }}>{m.label}</button>)}
                    </div>
                </div>

                <div className="form-grid">
                    {mode !== "current" && (
                        <div>
                            <label className="field-label">Target Attendance (%)</label>
                            <input className="calc-input" type="number" value={target} onChange={e => setTarget(e.target.value)} placeholder="75" min="1" max="100" />
                        </div>
                    )}
                    <div>
                        <label className="field-label">Classes Attended</label>
                        <input className="calc-input" type="number" value={attended} onChange={e => setAttended(e.target.value)} placeholder="e.g. 45" />
                    </div>
                    <div>
                        <label className="field-label">Total Classes Held</label>
                        <input className="calc-input" type="number" value={total} onChange={e => setTotal(e.target.value)} placeholder="e.g. 60" />
                    </div>
                </div>

                <button className="btn-primary" style={{ width: "100%", marginTop: "20px" }} onClick={calculate}>Calculate</button>

                {result && (
                    <div className="result-box animate-fade-in" style={{ textAlign: "center" }}>
                        {mode === "current" ? (
                            <>
                                <div className="result-label">Attendance</div>
                                <div className="result-value">{result.replace(" attendance", "")}</div>
                                {attended && total && (
                                    <div style={{ marginTop: "12px" }}>
                                        <div style={{ height: "8px", borderRadius: "999px", background: "rgba(255,255,255,0.1)", overflow: "hidden" }}>
                                            <div style={{
                                                height: "100%",
                                                width: `${Math.min((parseFloat(attended) / parseFloat(total)) * 100, 100)}%`,
                                                background: (parseFloat(attended) / parseFloat(total)) * 100 >= 75
                                                    ? "linear-gradient(90deg, #6bcb77, #4ecdc4)"
                                                    : "linear-gradient(90deg, #ff6b9d, #f77f00)",
                                                borderRadius: "999px",
                                                transition: "width 0.5s ease",
                                            }} />
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--text-muted)", marginTop: "6px" }}>
                                            <span>0%</span><span style={{ color: "#ffd93d" }}>75%</span><span>100%</span>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div style={{ fontSize: "15px", color: "var(--text-primary)", lineHeight: 1.6 }}>{result}</div>
                        )}
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
