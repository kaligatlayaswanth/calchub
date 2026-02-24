"use client";
import Link from "next/link";
import { ChevronRight, Home, ArrowUpRight } from "lucide-react";
import { getCategoryBySlug, allCalculators } from "../data/calculators";
import CalculatorCard from "./CalculatorCard";

interface CalcLayoutProps {
    calcTitle: string;
    calcDescription: string;
    calcIcon?: string;      // kept for compat but we use Lucide now
    categorySlug: string;
    categoryTitle: string;
    children: React.ReactNode;
}

export default function CalcLayout({ calcTitle, calcDescription, categorySlug, categoryTitle, children }: CalcLayoutProps) {
    const category = getCategoryBySlug(categorySlug);
    const related = allCalculators
        .filter(c => c.categorySlug === categorySlug && c.title !== calcTitle)
        .slice(0, 4);

    return (
        <div style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
            {/* Breadcrumb */}
            <div style={{ maxWidth: "860px", margin: "0 auto", padding: "20px 24px 0" }}>
                <nav style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "var(--text-muted)" }}>
                    <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none", display: "flex", alignItems: "center" }}>
                        <Home size={13} />
                    </Link>
                    <ChevronRight size={12} />
                    <Link href={`/#${categorySlug}`} style={{ color: "var(--text-muted)", textDecoration: "none" }}>
                        {categoryTitle}
                    </Link>
                    <ChevronRight size={12} />
                    <span style={{ color: "var(--color-primary)" }}>{calcTitle}</span>
                </nav>
            </div>

            {/* Header card */}
            <div style={{ maxWidth: "860px", margin: "0 auto", padding: "20px 24px 32px" }}>
                <div style={{
                    background: "linear-gradient(135deg, rgba(79,195,87,0.08) 0%, rgba(221,227,234,0.04) 100%)",
                    border: "1px solid rgba(79,195,87,0.18)",
                    borderRadius: "20px",
                    padding: "28px 32px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                }}>
                    {/* Icon box */}
                    <div style={{
                        width: "56px", height: "56px", borderRadius: "16px", flexShrink: 0,
                        background: "var(--color-primary-dim)",
                        border: "1px solid rgba(79,195,87,0.30)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "var(--color-primary)",
                    }}>
                        <ArrowUpRight size={26} strokeWidth={1.8} />
                    </div>

                    <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                            <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.7rem", fontWeight: 800, color: "var(--color-secondary)", margin: 0, letterSpacing: "-0.5px" }}>
                                {calcTitle}
                            </h1>
                            <span style={{ background: "var(--color-primary-dim)", border: "1px solid rgba(79,195,87,0.25)", borderRadius: "999px", color: "var(--color-primary)", fontSize: "11px", fontWeight: 600, padding: "3px 12px" }}>
                                {categoryTitle}
                            </span>
                        </div>
                        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                            {calcDescription}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px 60px" }}>
                {children}

                {/* Related calculators */}
                {related.length > 0 && (
                    <div style={{ marginTop: "52px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                            <div style={{ height: "2px", width: "28px", background: "var(--color-primary)", borderRadius: "999px" }} />
                            <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-secondary)", margin: 0 }}>
                                More in {categoryTitle}
                            </h2>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "14px" }}>
                            {related.map(c => <CalculatorCard key={c.slug} calc={c} />)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
