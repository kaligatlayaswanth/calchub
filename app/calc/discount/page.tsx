"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

export default function DiscountPage() {
    const [original, setOriginal] = useState("");
    const [discount, setDiscount] = useState("");
    const [result, setResult] = useState<{ saved: number; final: number } | null>(null);

    const calculate = () => {
        const o = parseFloat(original), d = parseFloat(discount);
        if (!o || isNaN(d)) return;
        const saved = (o * d) / 100;
        setResult({ saved: Math.round(saved * 100) / 100, final: Math.round((o - saved) * 100) / 100 });
    };

    return (
        <CalcLayout calcTitle="Discount Calculator" calcDescription="Find the final price and savings amount after applying a discount" calcIcon="🏷️" categorySlug="math" categoryTitle="Math & Daily">
            <div className="glass-card" style={{ padding: "28px" }}>
                <div className="form-grid-2">
                    <div>
                        <label className="field-label">Original Price</label>
                        <input className="calc-input" type="number" value={original} onChange={e => setOriginal(e.target.value)} placeholder="e.g. 2999" />
                    </div>
                    <div>
                        <label className="field-label">Discount (%)</label>
                        <input className="calc-input" type="number" value={discount} onChange={e => setDiscount(e.target.value)} placeholder="e.g. 30" min="0" max="100" />
                    </div>
                </div>
                <button className="btn-primary" style={{ width: "100%", marginTop: "20px" }} onClick={calculate}>Calculate Discount</button>

                {result && (
                    <div className="result-box animate-fade-in" style={{ marginTop: "24px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", textAlign: "center" }}>
                            <div>
                                <div className="result-label">Final Price</div>
                                <div className="result-value">₹{result.final.toLocaleString()}</div>
                            </div>
                            <div>
                                <div className="result-label">You Save</div>
                                <div className="result-value" style={{ background: "linear-gradient(135deg, #6bcb77, #4ecdc4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                    ₹{result.saved.toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
