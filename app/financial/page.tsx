import { TextEffect } from "@/components/text-effect"

export default function FinancialConsulting() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <TextEffect preset="fade-in-blur" as="h1" className="text-4xl font-bold mb-6 md:text-5xl">
          Financial Consulting
        </TextEffect>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Our financial consulting services provide businesses with the strategic guidance and analytical support
            needed to optimize financial performance and achieve sustainable growth.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
          <p>
            We take a holistic view of your financial operations, identifying opportunities for improvement and
            implementing practical solutions that drive measurable results. Our team works closely with your leadership
            to align financial strategies with your overall business objectives.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Services We Offer</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Financial Planning & Analysis</li>
            <li>Cash Flow Optimization</li>
            <li>Capital Structure Advisory</li>
            <li>Financial Risk Management</li>
            <li>Investment Analysis</li>
            <li>Financial Reporting & Compliance</li>
            <li>Cost Reduction Strategies</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
          <p>
            Our consultants bring deep expertise across various financial disciplines and industries. We combine
            technical knowledge with practical business acumen to deliver solutions that are both financially sound and
            operationally feasible.
          </p>
        </div>
      </div>
    </main>
  )
}
