"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
    Calculator, ChevronDown, ExternalLink, Search, Star, Scale, Flame, Zap, Target,
    Percent, Scissors, PiggyBank, TrendingUp, RefreshCw, Clock, Calendar, Ruler,
    GraduationCap, Heart, Dices, Hash, Sparkles, ShieldCheck, BarChart3, Activity,
    Droplets, TrendingUpDown
} from "lucide-react";
import { categories, allCalculators } from "../data/calculators";

const iconMap: Record<string, React.ReactNode> = {
    bmi: <Scale size={18} strokeWidth={1.8} />,
    bmr: <Flame size={18} strokeWidth={1.8} />,
    tdee: <Zap size={18} strokeWidth={1.8} />,
    calories: <Target size={18} strokeWidth={1.8} />,
    "body-fat": <Activity size={18} strokeWidth={1.8} />,
    "water-intake": <Droplets size={18} strokeWidth={1.8} />,
    emi: <BarChart3 size={18} strokeWidth={1.8} />,
    "simple-interest": <TrendingUp size={18} strokeWidth={1.8} />,
    "compound-interest": <TrendingUp size={18} strokeWidth={1.8} />,
    sip: <PiggyBank size={18} strokeWidth={1.8} />,
    retirement: <ShieldCheck size={18} strokeWidth={1.8} />,
    tax: <Hash size={18} strokeWidth={1.8} />,
    percentage: <Percent size={18} strokeWidth={1.8} />,
    discount: <Scissors size={18} strokeWidth={1.8} />,
    age: <Clock size={18} strokeWidth={1.8} />,
    "date-difference": <Calendar size={18} strokeWidth={1.8} />,
    "unit-converter": <Ruler size={18} strokeWidth={1.8} />,
    attendance: <Target size={18} strokeWidth={1.8} />,
    gpa: <GraduationCap size={18} strokeWidth={1.8} />,
    "marks-percentage": <BarChart3 size={18} strokeWidth={1.8} />,
    "love-compatibility": <Heart size={18} strokeWidth={1.8} />,
    numerology: <Sparkles size={18} strokeWidth={1.8} />,
    "decision-maker": <Dices size={18} strokeWidth={1.8} />,
};

const catIcons: Record<string, React.ReactNode> = {
    health: <Heart size={14} />,
    finance: <BarChart3 size={14} />,
    math: <Hash size={14} />,
    student: <GraduationCap size={14} />,
    fun: <Sparkles size={14} />,
    trending: <TrendingUpDown size={14} />,
};

function ExploreContent() {
    const searchParams = useSearchParams();
    const calcParam = searchParams.get("calc");

    const popularCalculators = allCalculators.filter(c => c.popular);

    const [selected, setSelected] = useState(
        calcParam
            ? allCalculators.find(c => c.slug === calcParam) || categories[0].calculators[0]
            : categories[0].calculators[0]
    );
    const [search, setSearch] = useState("");
    const [openCats, setOpenCats] = useState<Record<string, boolean>>({
        trending: true,
        ...Object.fromEntries(categories.map((c) => [c.slug, true]))
    });

    useEffect(() => {
        if (calcParam) {
            const found = allCalculators.find(c => c.slug === calcParam);
            if (found) setSelected(found);
        }
    }, [calcParam]);

    const filtered = search
        ? allCalculators.filter(
            (c) =>
                c.title.toLowerCase().includes(search.toLowerCase()) ||
                c.tags.some((t) => t.includes(search.toLowerCase()))
        )
        : null;

    const toggleCat = (slug: string) =>
        setOpenCats((prev) => ({ ...prev, [slug]: !prev[slug] }));

    const SidebarItem = ({ calc, catColor }: { calc: any, catColor: string }) => {
        const isSelected = selected.slug === calc.slug;
        const Icon = iconMap[calc.slug] || <Calculator size={18} />;

        return (
            <button
                onClick={() => setSelected(calc)}
                style={{
                    width: "100%",
                    background: isSelected ? "rgba(255, 255, 255, 0.06)" : "transparent",
                    border: `1px solid ${isSelected ? "rgba(255, 255, 255, 0.15)" : "transparent"}`,
                    borderRadius: "8px",
                    padding: "9px 12px 9px 28px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "9px",
                    textAlign: "left",
                    marginBottom: "3px",
                    transition: "all 0.15s",
                    backdropFilter: isSelected ? "blur(8px)" : "none",
                }}
            >
                <span style={{ color: isSelected ? "var(--color-primary)" : "var(--text-muted)" }}>{Icon}</span>
                <div style={{ flex: 1 }}>
                    <div
                        style={{
                            fontSize: "12.5px",
                            fontWeight: 500,
                            color: isSelected ? "var(--color-primary)" : "var(--text-secondary)",
                            lineHeight: 1.3,
                        }}
                    >
                        {calc.title}
                    </div>
                </div>
                {calc.popular && !isSelected && (
                    <Star size={10} color="var(--color-primary)" fill="var(--color-primary)" />
                )}
            </button>
        );
    };

    return (
        <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "var(--bg-primary)", position: "relative", zIndex: 1 }}>
            {/* ── SIDEBAR ── */}
            <aside style={{ width: "300px", minWidth: "300px", height: "100vh", overflowY: "auto", borderRight: "1px solid var(--border)", background: "rgba(255,255,255,0.01)", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "20px 16px 14px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, background: "var(--bg-primary)", zIndex: 10 }}>
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", marginBottom: "16px" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "9px", background: "var(--gradient-1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0d0f1a" }}>
                            <Calculator size={18} strokeWidth={2.5} />
                        </div>
                        <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: "17px", fontWeight: 700, color: "var(--color-secondary)" }}>
                            Calc<span style={{ color: "var(--color-primary)" }}>Hub</span>
                        </span>
                    </Link>

                    <div style={{ position: "relative" }}>
                        <Search size={14} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search calculators..."
                            style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", borderRadius: "10px", color: "var(--text-primary)", fontSize: "13px", padding: "10px 12px 10px 36px", outline: "none", fontFamily: "'Inter',sans-serif" }}
                        />
                    </div>
                </div>

                <div style={{ flex: 1, padding: "12px 8px", overflowY: "auto" }}>
                    {filtered ? (
                        filtered.map((calc) => <SidebarItem key={calc.slug} calc={calc} catColor="var(--color-primary)" />)
                    ) : (
                        <>
                            {/* Trending Section */}
                            <div style={{ marginBottom: "12px" }}>
                                <button
                                    onClick={() => toggleCat("trending")}
                                    style={{ width: "100%", background: "transparent", border: "none", padding: "8px 10px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}
                                >
                                    <span style={{ color: "var(--color-primary)" }}>{catIcons.trending}</span>
                                    <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--color-primary)", textTransform: "uppercase", letterSpacing: "0.8px", flex: 1, textAlign: "left" }}>
                                        Trending Now
                                    </span>
                                    <ChevronDown size={14} style={{ color: "var(--text-muted)", transition: "transform 0.2s", transform: openCats.trending ? "rotate(180deg)" : "none" }} />
                                </button>
                                {openCats.trending && popularCalculators.map(calc => <SidebarItem key={`trending-${calc.slug}`} calc={calc} catColor="var(--color-primary)" />)}
                            </div>

                            {/* Regular Categories */}
                            {categories.map((cat) => (
                                <div key={cat.slug} style={{ marginBottom: "8px" }}>
                                    <button
                                        onClick={() => toggleCat(cat.slug)}
                                        style={{ width: "100%", background: "transparent", border: "none", padding: "8px 10px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}
                                    >
                                        <span style={{ color: "var(--text-muted)" }}>{catIcons[cat.slug] || <Calculator size={14} />}</span>
                                        <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.6px", flex: 1, textAlign: "left" }}>
                                            {cat.title}
                                        </span>
                                        <ChevronDown size={14} style={{ color: "var(--text-muted)", transition: "transform 0.2s", transform: openCats[cat.slug] ? "rotate(180deg)" : "none" }} />
                                    </button>
                                    {openCats[cat.slug] && cat.calculators.map((calc) => <SidebarItem key={calc.slug} calc={calc} catColor="var(--color-primary)" />)}
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </aside>

            {/* ── RIGHT PANEL ── */}
            <main style={{ flex: 1, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.01)", flexShrink: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)" }}>
                            {iconMap[selected.slug] || <Calculator size={20} />}
                        </div>
                        <div>
                            <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "18px", fontWeight: 700, color: "var(--color-secondary)", margin: 0 }}>{selected.title}</h1>
                            <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0, marginTop: "2px" }}>{selected.description}</p>
                        </div>
                    </div>
                    <Link href={`/calc/${selected.slug}`} target="_blank" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", borderRadius: "8px", color: "var(--color-secondary)", fontSize: "12px", fontWeight: 600, padding: "8px 16px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", transition: "all 0.2s" }}>
                        <ExternalLink size={14} /> Open Full View
                    </Link>
                </div>
                <iframe key={selected.slug} src={`/calc/${selected.slug}`} style={{ flex: 1, width: "100%", border: "none", background: "transparent" }} title={selected.title} />
            </main>
        </div>
    );
}

export default function ExplorePage() {
    return (
        <Suspense fallback={<div style={{ background: "#0d0f1a", height: "100vh" }} />}>
            <ExploreContent />
        </Suspense>
    );
}
