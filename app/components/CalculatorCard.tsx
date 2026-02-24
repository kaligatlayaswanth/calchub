"use client";
import Link from "next/link";
import { ArrowRight, Star, Scale, Flame, Zap, Target, Percent, Scissors, PiggyBank, TrendingUp, RefreshCw, Clock, Calendar, Ruler, GraduationCap, Heart, Dices, Hash, Sparkles, ShieldCheck, BarChart3, Activity, Droplets, Calculator } from "lucide-react";

interface Calculator {
    slug: string; title: string; description: string; icon: string;
    category: string; categorySlug: string; tags: string[]; popular?: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
    bmi: <Scale size={22} strokeWidth={1.8} />,
    bmr: <Flame size={22} strokeWidth={1.8} />,
    tdee: <Zap size={22} strokeWidth={1.8} />,
    calories: <Target size={22} strokeWidth={1.8} />,
    "body-fat": <Activity size={22} strokeWidth={1.8} />,
    "water-intake": <Droplets size={22} strokeWidth={1.8} />,
    emi: <BarChart3 size={22} strokeWidth={1.8} />,
    "simple-interest": <TrendingUp size={22} strokeWidth={1.8} />,
    "compound-interest": <TrendingUp size={22} strokeWidth={1.8} />,
    sip: <PiggyBank size={22} strokeWidth={1.8} />,
    retirement: <ShieldCheck size={22} strokeWidth={1.8} />,
    tax: <Hash size={22} strokeWidth={1.8} />,
    percentage: <Percent size={22} strokeWidth={1.8} />,
    discount: <Scissors size={22} strokeWidth={1.8} />,
    age: <Clock size={22} strokeWidth={1.8} />,
    "date-difference": <Calendar size={22} strokeWidth={1.8} />,
    "unit-converter": <Ruler size={22} strokeWidth={1.8} />,
    attendance: <Target size={22} strokeWidth={1.8} />,
    gpa: <GraduationCap size={22} strokeWidth={1.8} />,
    "marks-percentage": <BarChart3 size={22} strokeWidth={1.8} />,
    "love-compatibility": <Heart size={22} strokeWidth={1.8} />,
    numerology: <Sparkles size={22} strokeWidth={1.8} />,
    "decision-maker": <Dices size={22} strokeWidth={1.8} />,
};

export default function CalculatorCard({ calc }: { calc: Calculator }) {
    const icon = iconMap[calc.slug] ?? <Calculator size={22} strokeWidth={1.8} />;

    return (
        <Link href={`/explore?calc=${calc.slug}`} style={{ textDecoration: "none" }}>
            <div
                className="glass-card"
                style={{ padding: "22px", height: "100%", display: "flex", flexDirection: "column", gap: "12px", position: "relative", overflow: "hidden", cursor: "pointer" }}
            >
                {/* Corner glow */}
                <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "80px", height: "80px", borderRadius: "50%", background: "var(--color-primary)", opacity: 0.07, filter: "blur(20px)", pointerEvents: "none" }} />

                {/* Popular badge */}
                {calc.popular && (
                    <span style={{ position: "absolute", top: "14px", right: "14px", background: "var(--color-primary-dim)", border: "1px solid rgba(79,195,87,0.30)", borderRadius: "999px", color: "var(--color-primary)", fontSize: "10px", fontWeight: 600, padding: "2px 8px", letterSpacing: "0.5px", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "4px" }}>
                        <Star size={9} fill="currentColor" /> Popular
                    </span>
                )}

                {/* Icon */}
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "var(--color-primary-dim)", border: "1px solid rgba(79,195,87,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", flexShrink: 0 }}>
                    {icon}
                </div>

                {/* Text */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
                    <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "15px", fontWeight: 600, color: "var(--color-secondary)", margin: 0, lineHeight: 1.3 }}>
                        {calc.title}
                    </h3>
                    <p style={{ fontSize: "12.5px", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }}>
                        {calc.description}
                    </p>
                </div>

                {/* Footer */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "4px" }}>
                    <span style={{ fontSize: "11px", color: "var(--color-primary)", fontWeight: 500, display: "flex", alignItems: "center", gap: "4px" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-primary)", display: "inline-block" }} />
                        {calc.category}
                    </span>
                    <ArrowRight size={14} color="var(--text-muted)" />
                </div>
            </div>
        </Link>
    );
}
