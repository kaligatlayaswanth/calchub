import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Calculators | EMI, Loan, Compound Interest & Investment Tools',
  description: 'Essential financial calculators for loans, investments, and savings. Calculate EMI, compound interest, simple interest, SIP returns, retirement planning, and taxes. Make smarter financial decisions.',
  openGraph: {
    title: 'Financial Calculators | Smart Money Decisions',
    description: 'Complete suite of financial calculators: EMI, loans, compound interest, investment returns, retirement planning, and tax calculations.',
    url: 'https://calc.univexo.app/finance-calculators',
    type: 'website',
  },
};

export default function FinanceCalculators() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
            Financial & Investment Calculators
          </h1>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
            Take control of your finances with our comprehensive suite of financial calculators. From loan EMI calculations to investment returns and retirement planning, understand the impact of your financial decisions before you make them.
          </p>
        </div>

        {/* Main Content */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', marginBottom: '40px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '24px' }}>
            Master Your Financial Decisions
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            Every financial decision compounds over time. Whether you're taking a loan, investing for the future, or planning retirement, using the right calculations ensures you make informed choices that align with your goals.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            Financial calculators remove the guesswork from wealth building. They show you exactly how interest, time, and investment amounts work together to create your financial future. With this knowledge, you can negotiate better terms, compare options objectively, and avoid costly mistakes.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            Loan & Debt Management
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>EMI / Loan Calculator:</strong> EMI (Equated Monthly Installment) is the fixed amount you pay every month on a loan. Our calculator shows you the exact monthly payment, total interest, and payment schedule for any loan. This helps you compare loans, understand amortization, and budget accurately.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            Whether it's a home loan, car loan, or personal loan, the EMI calculator reveals the true cost of borrowing and helps you determine how much you can afford to borrow.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            Investment & Savings Tools
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Compound Interest Calculator:</strong> Albert Einstein called compound interest the eighth wonder of the world. Our calculator shows how your money grows exponentially when interest is reinvested. See exactly how much your investments will grow over 5, 10, 20, or 30 years.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Simple Interest Calculator:</strong> For loans and deposits that use simple interest calculations, our tool shows the straightforward interest earned or owed without compounding effects.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>SIP Calculator:</strong> Systematic Investment Plan (SIP) is a disciplined way to invest regularly. Calculate how monthly investments grow with market returns, perfect for mutual fund investments and wealth building through rupee-cost averaging.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            Retirement & Tax Planning
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Retirement Calculator:</strong> Plan your retirement with precision. Calculate how much you need to save monthly or in lump sum to reach your retirement corpus. Account for inflation and withdrawal rates to ensure your savings last throughout retirement.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Tax Calculator:</strong> Understand your tax liability and plan accordingly. Calculate taxes on various income types, identify deductions, and optimize your financial planning to minimize tax burden legally.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            Time Value of Money
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            A core principle in finance: money today is worth more than money tomorrow. This is why we calculate present value, future value, and returns. Our financial calculators apply these principles to show you real monetary impact of your financial decisions.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            Whether you're comparing loan offers, evaluating investments, or planning retirement, understanding how time and interest rates affect your money is crucial to building wealth.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            How to Use Financial Calculators Effectively
          </h2>
          <ol style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px', paddingLeft: '24px' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Gather Your Information:</strong> Collect loan amounts, interest rates, investment amounts, time periods, and expected returns.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Run Multiple Scenarios:</strong> Compare different loan amounts, interest rates, or investment periods to find optimal strategies.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Plan Ahead:</strong> Use calculators to forecast 5, 10, or 20 years—understand the long-term impact of today's decisions.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Make Comparisons:</strong> Use results to compare different financial products or investment options objectively.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Budget & Track:</strong> Use monthly EMI or contribution amounts in your budget planning.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Review Regularly:</strong> Recalculate with updated amounts or rates to track progress toward goals.
            </li>
          </ol>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            Key Financial Concepts Explained
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Interest Rates:</strong> The cost of borrowing or return on investing, expressed as percentage per year. Lower rates mean lower loan costs; higher rates mean better investment returns.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Amortization:</strong> The process of paying off a loan over time through regular payments. Early payments go mostly to interest; later payments go mostly to principal.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Returns & Yield:</strong> The profit or gain on your investments, expressed as percentage. Higher returns come with higher risk.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Inflation:</strong> The decrease in purchasing power over time. For long-term planning, always account for inflation to calculate real returns and required savings.
          </p>
        </div>

        {/* Calculator Links */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '24px' }}>
            Financial Calculators in This Category
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { slug: 'emi', title: 'EMI / Loan Calculator', desc: 'Calculate monthly loan payments and total interest' },
              { slug: 'compound-interest', title: 'Compound Interest Calculator', desc: 'See how your investments grow exponentially over time' },
              { slug: 'simple-interest', title: 'Simple Interest Calculator', desc: 'Calculate simple interest on loans and deposits' },
              { slug: 'sip', title: 'SIP Calculator', desc: 'Calculate returns on systematic investment plans' },
              { slug: 'retirement', title: 'Retirement Calculator', desc: 'Plan your retirement savings and withdrawals' },
              { slug: 'tax', title: 'Tax Calculator', desc: 'Calculate taxes on various income types' },
            ].map((calc) => (
              <Link key={calc.slug} href={`/calc/${calc.slug}`}>
                <div style={{
                  padding: '24px',
                  backgroundColor: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#2c3e50', marginBottom: '8px' }}>
                    {calc.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    {calc.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          backgroundColor: 'linear-gradient(135deg, #ffd93d 0%, #f77f00 100%)',
          padding: '40px',
          borderRadius: '8px',
          textAlign: 'center',
          color: 'white',
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
            Build Wealth With Confidence
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '24px', lineHeight: '1.6' }}>
            Use our financial calculators to plan loans, investments, and retirement with precision. Make data-driven financial decisions.
          </p>
          <Link href="/explore">
            <button style={{
              padding: '12px 32px',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: 'white',
              color: '#f77f00',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}>
              Explore All Calculators
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
