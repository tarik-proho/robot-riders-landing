import { TextEffect } from "@/components/text-effect"

export default function EvaluationConsulting() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <TextEffect preset="fade-in-blur" as="h1" className="text-4xl font-bold mb-6 md:text-5xl">
          Evaluation Consulting
        </TextEffect>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Our evaluation consulting services help organizations assess the value, performance, and potential of
            business assets, investments, and strategic initiatives.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
          <p>
            We employ rigorous methodologies and analytical frameworks to provide objective, data-driven evaluations
            that support informed decision-making. Our evaluations consider both quantitative metrics and qualitative
            factors to deliver a comprehensive assessment.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Services We Offer</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Business Valuation</li>
            <li>Investment Performance Analysis</li>
            <li>Project & Program Evaluation</li>
            <li>Strategic Initiative Assessment</li>
            <li>Portfolio Analysis</li>
            <li>Market & Competitive Analysis</li>
            <li>Risk Assessment</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
          <p>
            Our team combines deep analytical expertise with industry knowledge to deliver evaluations that are both
            technically sound and contextually relevant. We provide clear insights and actionable recommendations that
            help you maximize value and mitigate risks.
          </p>
        </div>
      </div>
    </main>
  )
}
