"use client";
import Link from "next/link";
import { ChevronRight, Home, ArrowUpRight, ChevronDown } from "lucide-react";
import { getCategoryBySlug, allCalculators } from "../data/calculators";
import CalculatorCard from "./CalculatorCard";
import { getCalculatorSEO, generateCalculatorSchema, generateFAQSchema } from "../lib/seo";
import { useState } from "react";

interface CalcLayoutProps {
    calcTitle: string;
    calcDescription: string;
    calcIcon?: string;
    categorySlug: string;
    categoryTitle: string;
    calcSlug?: string;
    children: React.ReactNode;
}

export default function CalcLayout({ calcTitle, calcDescription, categorySlug, categoryTitle, calcSlug = "", children }: CalcLayoutProps) {
    const category = getCategoryBySlug(categorySlug);
    const related = allCalculators
        .filter(c => c.categorySlug === categorySlug && c.title !== calcTitle)
        .slice(0, 4);
    
    const seoData = calcSlug ? getCalculatorSEO(calcSlug) : null;
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

    return (
        <div style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
            {/* Schema Markup */}
            {seoData && (
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(generateCalculatorSchema(seoData, "https://calc.univexo.app")),
                        }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(generateFAQSchema(seoData.faqItems)),
                        }}
                    />
                </>
            )}

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

                {/* FAQ Section */}
                {seoData && seoData.faqItems.length > 0 && (
                    <div style={{ marginTop: "52px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                            <div style={{ height: "2px", width: "28px", background: "var(--color-primary)", borderRadius: "999px" }} />
                            <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-secondary)", margin: 0 }}>
                                Frequently Asked Questions
                            </h2>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {seoData.faqItems.map((faq, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        background: "rgba(255,255,255,0.02)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    <button
                                        onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                                        style={{
                                            width: "100%",
                                            background: "transparent",
                                            border: "none",
                                            padding: "16px",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            textAlign: "left",
                                            transition: "background 0.2s",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "transparent";
                                        }}
                                    >
                                        <ChevronDown
                                            size={18}
                                            style={{
                                                color: "var(--color-primary)",
                                                flexShrink: 0,
                                                transition: "transform 0.3s ease",
                                                transform: expandedFAQ === idx ? "rotate(180deg)" : "rotate(0deg)",
                                            }}
                                        />
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{
                                                fontFamily: "'Outfit',sans-serif",
                                                fontSize: "15px",
                                                fontWeight: 600,
                                                color: "var(--color-secondary)",
                                                margin: 0,
                                            }}>
                                                {faq.question}
                                            </h3>
                                        </div>
                                    </button>
                                    {expandedFAQ === idx && (
                                        <div style={{
                                            padding: "0 16px 16px 46px",
                                            borderTop: "1px solid rgba(255,255,255,0.08)",
                                        }}>
                                            <p style={{
                                                fontSize: "14px",
                                                color: "var(--text-secondary)",
                                                lineHeight: 1.6,
                                                margin: 0,
                                            }}>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

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
