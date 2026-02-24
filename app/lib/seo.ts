// SEO Utility Functions
// This file contains helpers for generating SEO metadata and structured data

export interface CalculatorSEO {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
  faqItems: Array<{ question: string; answer: string }>;
}

export const calculatorSEO: Record<string, CalculatorSEO> = {
  bmi: {
    slug: "bmi",
    title: "Free BMI Calculator | Calculate Body Mass Index Online",
    description:
      "Use our free online BMI calculator to determine your Body Mass Index with metric or imperial units. Quick, accurate, and mobile-friendly.",
    keywords: [
      "BMI calculator",
      "body mass index calculator",
      "BMI online",
      "calculate BMI",
      "BMI chart",
      "free BMI calculator",
      "BMI formula",
    ],
    category: "Health & Fitness",
    faqItems: [
      {
        question: "What does BMI stand for?",
        answer:
          "BMI stands for Body Mass Index. It is a measure of body fat based on height and weight.",
      },
      {
        question: "Is BMI accurate for athletes?",
        answer:
          "BMI may not be accurate for athletes or very muscular individuals as muscle weighs more than fat.",
      },
      {
        question: "What is a healthy BMI range?",
        answer:
          "A healthy BMI is generally between 18.5 and 24.9. Below 18.5 is underweight, 25-29.9 is overweight, and 30+ is obese.",
      },
      {
        question: "How is BMI calculated?",
        answer:
          "BMI is calculated by dividing your weight in kilograms by your height in meters squared (weight/height²).",
      },
    ],
  },
  emi: {
    slug: "emi",
    title: "Free EMI Calculator | Loan Payment Calculator Online",
    description:
      "Calculate your monthly EMI, total interest, and repayment schedule with our free online EMI calculator. Perfect for loans, mortgages, and personal finance planning.",
    keywords: [
      "EMI calculator",
      "loan calculator",
      "monthly payment calculator",
      "mortgage calculator",
      "EMI calculation",
      "interest calculator",
      "loan EMI online",
    ],
    category: "Finance",
    faqItems: [
      {
        question: "What is EMI?",
        answer:
          "EMI (Equated Monthly Installment) is a fixed monthly payment towards a loan, consisting of principal and interest components.",
      },
      {
        question: "How is EMI calculated?",
        answer:
          "EMI = (Principal × Monthly Interest Rate) / (1 - (1 + Monthly Interest Rate)^-Number of Months)",
      },
      {
        question: "How can I reduce my EMI?",
        answer:
          "You can reduce EMI by increasing the loan tenure (more months), increasing the down payment, or refinancing at a lower interest rate.",
      },
      {
        question: "What's the difference between EMI and interest?",
        answer:
          "EMI is the total monthly payment (principal + interest), while interest is only the cost charged by the lender on the borrowed amount.",
      },
    ],
  },
  gpa: {
    slug: "gpa",
    title: "Free GPA Calculator | Calculate Your CGPA Online",
    description:
      "Calculate your Grade Point Average (GPA) or Cumulative GPA (CGPA) across multiple courses. Free, simple, and accurate GPA calculator.",
    keywords: [
      "GPA calculator",
      "CGPA calculator",
      "grade calculator",
      "cumulative GPA",
      "student GPA",
      "college GPA calculator",
      "calculate GPA online",
    ],
    category: "Student Tools",
    faqItems: [
      {
        question: "What is GPA?",
        answer:
          "GPA (Grade Point Average) is a standardized measure of student academic performance on a scale, typically 0-4.0.",
      },
      {
        question: "How is GPA calculated?",
        answer:
          "GPA is calculated by multiplying each grade's point value by its credit hours, summing them, and dividing by total credit hours.",
      },
      {
        question: "What is CGPA?",
        answer:
          "CGPA (Cumulative Grade Point Average) is your overall GPA across all semesters or courses completed.",
      },
      {
        question: "What GPA do I need to graduate?",
        answer:
          "Most universities require a minimum GPA of 2.0 to graduate, though this varies by institution and program.",
      },
    ],
  },
  "compound-interest": {
    slug: "compound-interest",
    title: "Free Compound Interest Calculator | Savings Calculator Online",
    description:
      "Calculate compound interest on your savings and investments. See how your money grows with our free compound interest calculator.",
    keywords: [
      "compound interest calculator",
      "interest calculator",
      "savings calculator",
      "investment calculator",
      "compound interest formula",
      "calculate compound interest",
    ],
    category: "Finance",
    faqItems: [
      {
        question: "What is compound interest?",
        answer:
          "Compound interest is interest calculated on the principal plus accumulated interest from previous periods.",
      },
      {
        question: "Why is compound interest important?",
        answer:
          "Compound interest accelerates wealth growth over time, making it crucial for long-term investments and savings.",
      },
      {
        question: "What is the compound interest formula?",
        answer:
          "A = P(1 + r/n)^(nt), where A is final amount, P is principal, r is rate, n is compounding frequency, and t is time.",
      },
      {
        question: "How often is interest typically compounded?",
        answer:
          "Interest can be compounded daily, monthly, quarterly, semi-annually, or annually, depending on the financial product.",
      },
    ],
  },
  "unit-converter": {
    slug: "unit-converter",
    title: "Free Unit Converter | Convert Length, Weight, Temperature & More",
    description:
      "Convert between multiple units including length, weight, temperature, volume, speed, and area. Fast and accurate unit converter.",
    keywords: [
      "unit converter",
      "length converter",
      "weight converter",
      "temperature converter",
      "volume converter",
      "speed converter",
      "online converter",
    ],
    category: "Math & Daily",
    faqItems: [
      {
        question: "What units can I convert?",
        answer:
          "We support conversions for length, weight, temperature, volume, speed, and area units in both metric and imperial systems.",
      },
      {
        question: "How many kilograms is a pound?",
        answer: "1 pound (lb) equals approximately 0.453592 kilograms (kg).",
      },
      {
        question: "How do I convert Celsius to Fahrenheit?",
        answer: "Use the formula: °F = (°C × 9/5) + 32",
      },
      {
        question: "What is the metric system?",
        answer:
          "The metric system is an international system of measurement using base units like meters, kilograms, and seconds.",
      },
    ],
  },
  percentage: {
    slug: "percentage",
    title: "Free Percentage Calculator | Calculate Percentages Online",
    description:
      "Calculate percentages, percentage change, and find X% of Y easily. Free percentage calculator for math, finance, and daily use.",
    keywords: [
      "percentage calculator",
      "percent calculator",
      "calculate percentage",
      "percentage change calculator",
      "percentage formula",
    ],
    category: "Math & Daily",
    faqItems: [
      {
        question: "What is a percentage?",
        answer: "A percentage is a number or ratio expressed as a fraction of 100.",
      },
      {
        question: "How do I calculate a percentage?",
        answer:
          "To calculate a percentage: (Part / Whole) × 100 = Percentage",
      },
      {
        question: "What is percentage change?",
        answer:
          "Percentage change measures the relative change between an old value and a new value, expressed as a percentage.",
      },
      {
        question: "How do I calculate percentage increase?",
        answer:
          "Percentage Increase = ((New Value - Old Value) / Old Value) × 100",
      },
    ],
  },
  tdee: {
    slug: "tdee",
    title: "Free TDEE Calculator | Daily Calorie Needs Calculator",
    description:
      "Calculate your Total Daily Energy Expenditure (TDEE) and discover your daily calorie needs for fitness and weight management.",
    keywords: [
      "TDEE calculator",
      "calorie calculator",
      "daily calorie needs",
      "calorie burn calculator",
      "TDEE formula",
      "maintenance calories",
    ],
    category: "Health & Fitness",
    faqItems: [
      {
        question: "What is TDEE?",
        answer:
          "TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns in a day.",
      },
      {
        question: "How is TDEE calculated?",
        answer:
          "TDEE = BMR × Activity Multiplier, where BMR is your basal metabolic rate and activity multiplier depends on your exercise frequency.",
      },
      {
        question: "What is BMR?",
        answer:
          "BMR (Basal Metabolic Rate) is the number of calories you burn at rest to maintain basic body functions.",
      },
      {
        question: "How can I lose weight using TDEE?",
        answer:
          "To lose weight, eat fewer calories than your TDEE. A deficit of 500 calories per day typically results in 1 pound loss per week.",
      },
    ],
  },
};

export function generateCalculatorSchema(calc: CalculatorSEO, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: calc.title,
    url: `${baseUrl}/calc/${calc.slug}`,
    applicationCategory: "Utility",
    description: calc.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function generateFAQSchema(faqItems: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getCalculatorSEO(slug: string): CalculatorSEO | null {
  return calculatorSEO[slug] || null;
}

export function generateMetaTags(seoData: CalculatorSEO) {
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords.join(", "),
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
    },
  };
}
