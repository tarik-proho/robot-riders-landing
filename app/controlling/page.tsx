import { TextEffect } from "@/components/text-effect"

export default function ControllingServices() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <TextEffect preset="fade-in-blur" as="h1" className="text-4xl font-bold mb-6 md:text-5xl">
          Controlling and Other Services
        </TextEffect>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Our controlling and specialized services help organizations establish robust financial control systems and
            address specific business challenges with tailored solutions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Controlling Services</h2>
          <p>
            We help businesses implement effective controlling systems that provide timely, accurate financial
            information for decision-making and performance management.
          </p>

          <ul className="space-y-2 list-disc pl-5">
            <li>Management Reporting Systems</li>
            <li>KPI Development & Monitoring</li>
            <li>Budget Planning & Control</li>
            <li>Cost Accounting Systems</li>
            <li>Variance Analysis</li>
            <li>Process Optimization</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Other Specialized Services</h2>
          <p>
            Beyond controlling, we offer a range of specialized services to address specific business needs and
            challenges.
          </p>

          <ul className="space-y-2 list-disc pl-5">
            <li>Business Process Reengineering</li>
            <li>Digital Transformation Support</li>
            <li>Interim Management</li>
            <li>Crisis Management & Turnaround</li>
            <li>Compliance & Governance Advisory</li>
            <li>Sustainability Reporting</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
          <p>
            We take a collaborative approach, working closely with your team to understand your specific needs and
            develop customized solutions that align with your business goals and organizational culture.
          </p>
        </div>
      </div>
    </main>
  )
}
