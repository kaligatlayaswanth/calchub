import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education & Academic Calculators | GPA, Percentage, Grade Calculator',
  description: 'Academic performance calculators for students. Calculate GPA, grade percentage, marks percentage, and attendance impact on grades. Essential tools for academic planning and performance tracking.',
  openGraph: {
    title: 'Education & Academic Calculators | Track Your Grades',
    description: 'Complete suite of academic calculators: GPA, grade percentage, marks percentage, attendance tracker, and grade conversion tools.',
    url: 'https://calc.univexo.app/education-calculators',
    type: 'website',
  },
};

export default function EducationCalculators() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
            Education & Academic Calculators
          </h1>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
            Track your academic performance with our comprehensive suite of student calculators. Calculate GPA, percentages, grade point averages, and attendance impact to understand your academic standing and plan for success.
          </p>
        </div>

        {/* Main Content */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', marginBottom: '40px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '24px' }}>
            Take Control of Your Academic Future
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            Academic performance is measured in multiple ways—GPA, percentages, grade points, and attendance. Our education calculators help you understand each metric, set realistic targets, and track progress toward your academic goals.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            Whether you're in high school, college, or university, these tools show you exactly how grades translate to overall performance, helping you make strategic decisions about which subjects to focus on and what improvements are needed to reach your target GPA or percentage.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            Understanding Your Academic Metrics
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>GPA (Grade Point Average):</strong> The numerical representation of your overall academic performance on a scale (typically 0-4.0 in the US, 0-10 in other systems). GPA is crucial for college applications, scholarships, and career opportunities. Our GPA calculator helps you compute your exact GPA based on grades and credit hours.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Percentage & Marks:</strong> In many educational systems, overall performance is expressed as percentage of total marks obtained. Our calculators convert marks to percentages and show you exactly what you need to achieve your target percentage.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            Grade & Performance Calculators
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>GPA Calculator:</strong> Calculate your Grade Point Average from individual course grades and credit hours. Supports different grading scales and shows weighted GPA calculation. Essential for monitoring progress toward scholarships, honors, or graduation requirements.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Marks Percentage Calculator:</strong> Convert raw marks into percentage scores. See what percentage you've achieved and understand performance distribution across subjects.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Grade Converter:</strong> Different institutions use different grading scales. Our converter translates between letter grades, GPA points, and percentages so you can understand how your grades translate across systems.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            Attendance & Participation Tracking
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Attendance Calculator:</strong> Attendance often affects grades directly. Calculate how many classes you can miss while maintaining required attendance percentage. Understanding this helps you plan absences strategically and avoid dropping below minimums.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            Many institutions require 75% or higher attendance. Fall below this, and you may not be allowed to sit exams. Our tool shows the exact impact of each absence.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            Strategic Academic Planning
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>What's Your Target GPA?</strong> Most scholarships require 3.5+ GPA. Most graduate programs require 3.0+. Know your targets and use the calculator to see exactly what you need to achieve.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Work Backwards from Goals:</strong> If you need a 3.8 GPA and you're currently at 3.6, our calculator shows exactly how many excellent grades you need and in which courses to reach your target.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Identify Problem Areas:</strong> Use percentage calculator to identify subjects where you're underperforming. Focus improvement efforts strategically.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            How to Use Academic Calculators Effectively
          </h2>
          <ol style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px', paddingLeft: '24px' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Calculate Current GPA:</strong> Input all your grades and credit hours to get accurate current GPA.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Set Target GPA:</strong> Decide what GPA you need for scholarships, grad school, or honors.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Plan Future Grades:</strong> Use GPA calculator to work backward—see what grades you need in upcoming courses to reach target.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Track Attendance:</strong> Ensure attendance stays above institutional minimums using attendance calculator.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Monitor Subject Performance:</strong> Track marks percentage in each subject to identify where to focus study time.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Plan Exam Strategy:</strong> Know exactly how much you need on finals to achieve target course grade.
            </li>
          </ol>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: '32px' }}>
            Common Academic Misconceptions
          </h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>GPA doesn't matter after college:</strong> Wrong. GPA significantly impacts graduate school admissions, scholarships, and competitive job offers.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>You can improve low GPA easily:</strong> GPA calculations usually weight all courses equally or by credit hours. Early low grades have lasting impact.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Attendance doesn't affect grades:</strong> Many institutions have direct attendance policies. Below 75% attendance often means exam ineligibility.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>All subjects weighted equally:</strong> Some institutions weight grades by credit hours. A 4-credit course affects GPA more than a 1-credit course.
          </p>
        </div>

        {/* Calculator Links */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '24px' }}>
            Academic Calculators in This Category
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { slug: 'gpa', title: 'GPA Calculator', desc: 'Calculate your Grade Point Average from individual course grades' },
              { slug: 'marks-percentage', title: 'Marks Percentage Calculator', desc: 'Convert raw marks into percentage scores' },
              { slug: 'attendance', title: 'Attendance Calculator', desc: 'Calculate how many classes you can miss and maintain attendance percentage' },
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
          backgroundColor: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
          padding: '40px',
          borderRadius: '8px',
          textAlign: 'center',
          color: 'white',
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
            Achieve Your Academic Goals
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '24px', lineHeight: '1.6' }}>
            Use our academic calculators to track GPA, manage attendance, and plan for academic success. Know exactly where you stand and what you need to do.
          </p>
          <Link href="/explore">
            <button style={{
              padding: '12px 32px',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: 'white',
              color: '#357abd',
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
