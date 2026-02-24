"use client";
import { useState } from "react";
import CalcLayout from "../../components/CalcLayout";

type Category = "length" | "weight" | "temp" | "volume" | "speed" | "area";

const units: Record<Category, { label: string; to_base: (v: number) => number; from_base: (v: number) => number }[]> = {
    length: [
        { label: "Meter (m)", to_base: v => v, from_base: v => v },
        { label: "Kilometer (km)", to_base: v => v * 1000, from_base: v => v / 1000 },
        { label: "Centimeter (cm)", to_base: v => v / 100, from_base: v => v * 100 },
        { label: "Millimeter (mm)", to_base: v => v / 1000, from_base: v => v * 1000 },
        { label: "Mile (mi)", to_base: v => v * 1609.344, from_base: v => v / 1609.344 },
        { label: "Foot (ft)", to_base: v => v * 0.3048, from_base: v => v / 0.3048 },
        { label: "Inch (in)", to_base: v => v * 0.0254, from_base: v => v / 0.0254 },
        { label: "Yard (yd)", to_base: v => v * 0.9144, from_base: v => v / 0.9144 },
    ],
    weight: [
        { label: "Kilogram (kg)", to_base: v => v, from_base: v => v },
        { label: "Gram (g)", to_base: v => v / 1000, from_base: v => v * 1000 },
        { label: "Milligram (mg)", to_base: v => v / 1e6, from_base: v => v * 1e6 },
        { label: "Pound (lb)", to_base: v => v * 0.453592, from_base: v => v / 0.453592 },
        { label: "Ounce (oz)", to_base: v => v * 0.0283495, from_base: v => v / 0.0283495 },
        { label: "Tonne (t)", to_base: v => v * 1000, from_base: v => v / 1000 },
    ],
    temp: [
        { label: "Celsius (°C)", to_base: v => v, from_base: v => v },
        { label: "Fahrenheit (°F)", to_base: v => (v - 32) * 5 / 9, from_base: v => v * 9 / 5 + 32 },
        { label: "Kelvin (K)", to_base: v => v - 273.15, from_base: v => v + 273.15 },
    ],
    volume: [
        { label: "Liter (L)", to_base: v => v, from_base: v => v },
        { label: "Milliliter (mL)", to_base: v => v / 1000, from_base: v => v * 1000 },
        { label: "Gallon (US)", to_base: v => v * 3.78541, from_base: v => v / 3.78541 },
        { label: "Pint (US)", to_base: v => v * 0.473176, from_base: v => v / 0.473176 },
        { label: "Cup (US)", to_base: v => v * 0.236588, from_base: v => v / 0.236588 },
        { label: "Fluid Oz (US)", to_base: v => v * 0.0295735, from_base: v => v / 0.0295735 },
        { label: "Cubic Meter (m³)", to_base: v => v * 1000, from_base: v => v / 1000 },
    ],
    speed: [
        { label: "m/s", to_base: v => v, from_base: v => v },
        { label: "km/h", to_base: v => v / 3.6, from_base: v => v * 3.6 },
        { label: "mph", to_base: v => v * 0.44704, from_base: v => v / 0.44704 },
        { label: "knots", to_base: v => v * 0.514444, from_base: v => v / 0.514444 },
    ],
    area: [
        { label: "Square Meter (m²)", to_base: v => v, from_base: v => v },
        { label: "Square Km (km²)", to_base: v => v * 1e6, from_base: v => v / 1e6 },
        { label: "Square Foot (ft²)", to_base: v => v * 0.092903, from_base: v => v / 0.092903 },
        { label: "Acre", to_base: v => v * 4046.86, from_base: v => v / 4046.86 },
        { label: "Hectare (ha)", to_base: v => v * 10000, from_base: v => v / 10000 },
    ],
};

const catIcons: Record<Category, string> = {
    length: "📏", weight: "⚖️", temp: "🌡️", volume: "🧪", speed: "💨", area: "📐",
};

export default function UnitConverterPage() {
    const [cat, setCat] = useState<Category>("length");
    const [value, setValue] = useState("");
    const [fromUnit, setFromUnit] = useState(0);
    const [toUnit, setToUnit] = useState(1);

    const convert = () => {
        const v = parseFloat(value);
        if (isNaN(v)) return null;
        const us = units[cat];
        const base = us[fromUnit].to_base(v);
        const result = us[toUnit].from_base(base);
        return result;
    };

    const result = value ? convert() : null;

    const swap = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
    };

    return (
        <CalcLayout calcTitle="Unit Converter" calcDescription="Convert between length, weight, temperature, volume, speed, and area units" calcIcon="🔄" categorySlug="math" categoryTitle="Math & Daily" calcSlug="unit-converter">
            <div className="glass-card" style={{ padding: "28px" }}>
                {/* Category selector */}
                <div style={{ marginBottom: "24px" }}>
                    <label className="field-label">Category</label>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {(Object.keys(units) as Category[]).map(c => (
                            <button key={c} onClick={() => { setCat(c); setFromUnit(0); setToUnit(1); setValue(""); }} style={{
                                background: cat === c ? "linear-gradient(135deg, #6c63ff, #4ecdc4)" : "rgba(255,255,255,0.05)",
                                border: `1px solid ${cat === c ? "transparent" : "rgba(255,255,255,0.1)"}`,
                                borderRadius: "10px", padding: "8px 14px", cursor: "pointer",
                                color: cat === c ? "white" : "var(--text-secondary)", fontSize: "13px", fontWeight: 500,
                                transition: "all 0.2s", display: "flex", alignItems: "center", gap: "5px",
                            }}>
                                {catIcons[c]} {c.charAt(0).toUpperCase() + c.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "12px", alignItems: "end", marginBottom: "20px" }}>
                    <div>
                        <label className="field-label">From</label>
                        <select className="calc-select" value={fromUnit} onChange={e => setFromUnit(Number(e.target.value))}>
                            {units[cat].map((u, i) => <option key={i} value={i}>{u.label}</option>)}
                        </select>
                    </div>
                    <button onClick={swap} style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.25)", borderRadius: "10px", padding: "12px", cursor: "pointer", color: "#a09fff", fontSize: "16px", transition: "all 0.2s", marginBottom: "0" }}
                        title="Swap">⇄</button>
                    <div>
                        <label className="field-label">To</label>
                        <select className="calc-select" value={toUnit} onChange={e => setToUnit(Number(e.target.value))}>
                            {units[cat].map((u, i) => <option key={i} value={i}>{u.label}</option>)}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="field-label">Value to Convert</label>
                    <input className="calc-input" type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter a number..." />
                </div>

                {result !== null && (
                    <div className="result-box animate-fade-in" style={{ marginTop: "20px", textAlign: "center" }}>
                        <div className="result-label">Result</div>
                        <div className="result-value" style={{ fontSize: "2.2rem" }}>
                            {result.toFixed(6).replace(/\.?0+$/, "")} <span style={{ fontSize: "1rem", fontWeight: 400, WebkitTextFillColor: "var(--text-secondary)" }}>{units[cat][toUnit].label}</span>
                        </div>
                        <div style={{ color: "var(--text-muted)", fontSize: "13px", marginTop: "8px" }}>
                            {value} {units[cat][fromUnit].label} = {result.toFixed(6).replace(/\.?0+$/, "")} {units[cat][toUnit].label}
                        </div>
                    </div>
                )}
            </div>
        </CalcLayout>
    );
}
