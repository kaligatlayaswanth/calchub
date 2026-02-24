export interface Calculator {
    slug: string;
    title: string;
    description: string;
    icon: string;
    category: string;
    categoryTitle?: string;
    categorySlug: string;
    tags: string[];
    popular?: boolean;
}

export interface Category {
    slug: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    gradient: string;
    calculators: Calculator[];
}

export const categories: Category[] = [
    {
        slug: "health",
        title: "Health & Fitness",
        description: "Body metrics, calorie needs, hydration and more",
        icon: "🏃",
        color: "#6bcb77",
        gradient: "linear-gradient(135deg, #6bcb77 0%, #4ecdc4 100%)",
        calculators: [
            {
                slug: "bmi",
                title: "BMI Calculator",
                description: "Calculate Body Mass Index with metric or imperial units",
                icon: "⚖️",
                category: "Health & Fitness",
                categorySlug: "health",
                tags: ["bmi", "weight", "body"],
                popular: true,
            },
            {
                slug: "bmr",
                title: "BMR Calculator",
                description: "Find your Basal Metabolic Rate – calories burned at rest",
                icon: "🔥",
                category: "Health & Fitness",
                categorySlug: "health",
                tags: ["bmr", "metabolism", "calories"],
                popular: true,
            },
            {
                slug: "tdee",
                title: "TDEE Calculator",
                description: "Total Daily Energy Expenditure based on activity level",
                icon: "⚡",
                category: "Health & Fitness",
                categorySlug: "health",
                tags: ["tdee", "calories", "energy"],
            },
            {
                slug: "calories",
                title: "Calorie Goal Calculator",
                description: "Maintenance, weight loss, or weight gain calorie targets",
                icon: "🥗",
                category: "Health & Fitness",
                categorySlug: "health",
                tags: ["calories", "diet", "weight loss"],
            },
            {
                slug: "body-fat",
                title: "Body Fat % Calculator",
                description: "Estimate body fat percentage using the Navy method",
                icon: "📐",
                category: "Health & Fitness",
                categorySlug: "health",
                tags: ["body fat", "navy method", "fitness"],
            },
            {
                slug: "water-intake",
                title: "Water Intake Calculator",
                description: "Daily recommended water intake based on your weight",
                icon: "💧",
                category: "Health & Fitness",
                categorySlug: "health",
                tags: ["water", "hydration", "daily intake"],
            },
        ],
    },
    {
        slug: "finance",
        title: "Finance",
        description: "Loans, investments, savings and tax calculations",
        icon: "💰",
        color: "#ffd93d",
        gradient: "linear-gradient(135deg, #ffd93d 0%, #f77f00 100%)",
        calculators: [
            {
                slug: "emi",
                title: "EMI / Loan Calculator",
                description: "Calculate monthly loan payments and amortization",
                icon: "🏦",
                category: "Finance",
                categorySlug: "finance",
                tags: ["emi", "loan", "mortgage"],
                popular: true,
            },
            {
                slug: "simple-interest",
                title: "Simple Interest",
                description: "Calculate interest on principal at a fixed rate",
                icon: "📊",
                category: "Finance",
                categorySlug: "finance",
                tags: ["simple interest", "SI", "finance"],
            },
            {
                slug: "compound-interest",
                title: "Compound Interest",
                description: "Compound interest with customizable compounding frequency",
                icon: "📈",
                category: "Finance",
                categorySlug: "finance",
                tags: ["compound interest", "CI", "investment"],
                popular: true,
            },
            {
                slug: "sip",
                title: "SIP Calculator",
                description: "Systematic Investment Plan – grow your monthly investments",
                icon: "💼",
                category: "Finance",
                categorySlug: "finance",
                tags: ["sip", "mutual fund", "investment"],
            },
            {
                slug: "retirement",
                title: "Retirement Calculator",
                description: "Plan your retirement corpus with future value projections",
                icon: "🏖️",
                category: "Finance",
                categorySlug: "finance",
                tags: ["retirement", "pension", "savings"],
            },
            {
                slug: "tax",
                title: "Tax Calculator",
                description: "Estimate income tax across India, US, and UK tax slabs",
                icon: "🧾",
                category: "Finance",
                categorySlug: "finance",
                tags: ["tax", "income tax", "india", "usa", "uk"],
            },
        ],
    },
    {
        slug: "math",
        title: "Math & Daily",
        description: "Percentages, dates, units and everyday calculations",
        icon: "📐",
        color: "#6c63ff",
        gradient: "linear-gradient(135deg, #6c63ff 0%, #4ecdc4 100%)",
        calculators: [
            {
                slug: "percentage",
                title: "Percentage Calculator",
                description: "Find percentages, percentage change, and X% of Y",
                icon: "%",
                category: "Math & Daily",
                categorySlug: "math",
                tags: ["percentage", "percent", "math"],
                popular: true,
            },
            {
                slug: "discount",
                title: "Discount Calculator",
                description: "Calculate final price after discount and savings amount",
                icon: "🏷️",
                category: "Math & Daily",
                categorySlug: "math",
                tags: ["discount", "sale", "price"],
            },
            {
                slug: "age",
                title: "Age Calculator",
                description: "Calculate exact age in years, months, days, and hours",
                icon: "🎂",
                category: "Math & Daily",
                categorySlug: "math",
                tags: ["age", "birthday", "date"],
                popular: true,
            },
            {
                slug: "date-difference",
                title: "Date Difference",
                description: "Find the gap between two dates in days, weeks, months",
                icon: "📅",
                category: "Math & Daily",
                categorySlug: "math",
                tags: ["date", "difference", "duration"],
            },
            {
                slug: "unit-converter",
                title: "Unit Converter",
                description: "Convert length, weight, temperature, volume and more",
                icon: "🔄",
                category: "Math & Daily",
                categorySlug: "math",
                tags: ["unit", "converter", "length", "weight", "temperature"],
                popular: true,
            },
        ],
    },
    {
        slug: "student",
        title: "Student Tools",
        description: "Attendance, GPA, marks and academic calculations",
        icon: "🎓",
        color: "#4ecdc4",
        gradient: "linear-gradient(135deg, #4ecdc4 0%, #6c63ff 100%)",
        calculators: [
            {
                slug: "attendance",
                title: "Attendance Calculator",
                description: "Track attendance %, missed classes, and target attainment",
                icon: "📋",
                category: "Student Tools",
                categorySlug: "student",
                tags: ["attendance", "class", "school"],
                popular: true,
            },
            {
                slug: "gpa",
                title: "GPA / CGPA Calculator",
                description: "Calculate weighted GPA and cumulative grade point average",
                icon: "🎯",
                category: "Student Tools",
                categorySlug: "student",
                tags: ["gpa", "cgpa", "grades"],
            },
            {
                slug: "marks-percentage",
                title: "Marks Percentage",
                description: "Convert marks to percentage for multiple subjects",
                icon: "📝",
                category: "Student Tools",
                categorySlug: "student",
                tags: ["marks", "percentage", "score"],
            },
        ],
    },
    {
        slug: "fun",
        title: "Fun & Entertainment",
        description: "For laughs and light-hearted discoveries",
        icon: "🎉",
        color: "#ff6b9d",
        gradient: "linear-gradient(135deg, #ff6b9d 0%, #f77f00 100%)",
        calculators: [
            {
                slug: "love-compatibility",
                title: "Love Compatibility",
                description: "Discover your compatibility score with a special someone",
                icon: "❤️",
                category: "Fun & Entertainment",
                categorySlug: "fun",
                tags: ["love", "compatibility", "fun"],
            },
            {
                slug: "numerology",
                title: "Numerology Calculator",
                description: "Find your life path number and name numerology insights",
                icon: "🔮",
                category: "Fun & Entertainment",
                categorySlug: "fun",
                tags: ["numerology", "life path", "name"],
            },
            {
                slug: "decision-maker",
                title: "Random Decision Maker",
                description: "Can't decide? Let the universe pick for you",
                icon: "🎲",
                category: "Fun & Entertainment",
                categorySlug: "fun",
                tags: ["decision", "random", "picker"],
            },
        ],
    },
];

export const allCalculators: Calculator[] = categories.flatMap(c => c.calculators);

export function getCalculatorBySlug(slug: string): Calculator | undefined {
    return allCalculators.find(c => c.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find(c => c.slug === slug);
}
