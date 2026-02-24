import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health & Fitness Calculators | BMI, BMR, TDEE, Body Fat & More',
  description: 'Comprehensive health and fitness calculators to track your wellness goals. Calculate BMI, metabolism, daily calorie needs, body fat percentage, and water intake. Free tools for better health decisions.',
  openGraph: {
    title: 'Health & Fitness Calculators | Track Your Wellness',
    description: 'Comprehensive suite of health calculators: BMI, BMR, TDEE, body fat %, water intake, and more.',
    url: 'https://calc.univexo.app/health-calculators',
    type: 'website',
  },
};

export default function HealthCalculators() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
            Health & Fitness Calculators
          </h1>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
            Make informed health decisions with our comprehensive suite of free wellness calculators. From basic metrics like BMI to advanced measurements like TDEE and body fat percentage, all tools are designed to help you understand and optimize your health.
          </p>
        </div>

        {/* Main Content */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', marginBottom: '40px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '24px' }}>
            Why Calculate Your Health Metrics?
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            Understanding your body's metrics is the foundation of a healthy lifestyle. Whether you're looking to lose weight, build muscle, improve fitness, or simply maintain your current health, knowing your baseline measurements is crucial.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            Our health calculators provide scientifically-backed measurements that help you set realistic goals, track progress, and make evidence-based decisions about diet, exercise, and nutrition. These aren't just numbers—they're insights into your body's needs and performance.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            Body Composition & Fitness Metrics
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>BMI Index Calculator:</strong> The Body Mass Index is the standardized measurement of body weight relative to height. It's the first step in assessing whether you fall into healthy weight ranges. Our BMI calculator supports both metric and imperial measurements, making it accessible globally.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Body Fat Percentage:</strong> BMI doesn't distinguish between muscle and fat. Our body fat calculator uses the Navy method to estimate your actual body fat percentage, which is a more accurate indicator of fitness than BMI alone.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            Metabolic & Calorie Calculations
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Basal Metabolic Rate (BMR):</strong> Your BMR is the number of calories your body burns at rest, just maintaining basic functions. This forms the foundation of all calorie calculations and varies by age, gender, height, and weight.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Total Daily Energy Expenditure (TDEE):</strong> Beyond BMR, TDEE accounts for your daily activities. Our TDEE calculator considers your exercise level to show exactly how many calories you need daily. This is essential for weight management—whether gaining, losing, or maintaining.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Calorie Goal Planning:</strong> Once you know your TDEE, you can set specific calorie targets. Create safe deficits for weight loss (500 calories = 0.5 kg per week) or surpluses for muscle gain.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            Hydration & Wellness
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Water Intake Calculator:</strong> Proper hydration is fundamental to health, yet most people don't drink enough water. Our calculator determines personalized daily water intake based on your weight and activity level, ensuring you stay properly hydrated.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            How to Use These Calculators Effectively
          </h2>
          <ol style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px', paddingLeft: '24px' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Start with BMI:</strong> Get your basic body mass index as a starting point for health assessment.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Calculate BMR:</strong> Understand your resting metabolic rate, the foundation of all energy calculations.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Find Your TDEE:</strong> Determine daily calorie needs based on activity level—crucial for any nutrition plan.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Estimate Body Fat:</strong> Complement BMI with body fat percentage for a complete picture of composition.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Plan Hydration:</strong> Set a daily water goal to support all metabolic processes.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Track Over Time:</strong> Use these same calculators monthly to track changes as your fitness evolves.
            </li>
          </ol>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            Common Misconceptions
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>BMI is the only measure of health:</strong> False. BMI is useful but incomplete. Athletes may have high BMI due to muscle. Use it with body fat percentage and other metrics.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Lower calories always mean weight loss:</strong> Calorie quality matters. Additionally, going too low damages metabolism. Safe weight loss is 0.5-1 kg per week.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Everyone needs the same water intake:</strong> Water needs vary by weight, climate, activity level, and diet. Our calculator personalizes this.
          </p>
        </div>

        {/* Calculator Links */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '24px' }}>
            Health Calculators in This Category
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { slug: 'bmi', title: 'BMI Calculator', desc: 'Calculate your Body Mass Index with metric or imperial units' },
              { slug: 'bmr', title: 'BMR Calculator', desc: 'Find your Basal Metabolic Rate and calories burned at rest' },
              { slug: 'tdee', title: 'TDEE Calculator', desc: 'Calculate your Total Daily Energy Expenditure based on activity' },
              { slug: 'calories', title: 'Calorie Goal Calculator', desc: 'Set personalized weight loss, gain, or maintenance targets' },
              { slug: 'body-fat', title: 'Body Fat % Calculator', desc: 'Estimate body fat percentage using the Navy method' },
              { slug: 'water-intake', title: 'Water Intake Calculator', desc: 'Find your personalized daily water intake needs' },
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
          backgroundColor: 'linear-gradient(135deg, #6bcb77 0%, #4ecdc4 100%)',
          padding: '40px',
          borderRadius: '8px',
          textAlign: 'center',
          color: 'white',
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
            Start Your Health Journey Today
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '24px', lineHeight: '1.6' }}>
            Use our free health calculators to understand your body better and make data-driven decisions about your wellness goals.
          </p>
          <Link href="/explore">
            <button style={{
              padding: '12px 32px',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: 'white',
              color: '#6bcb77',
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
