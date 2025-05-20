import { TextEffect } from "@/components/text-effect"

export default function TransactionalConsulting() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <TextEffect preset="fade-in-blur" as="h1" className="text-4xl font-bold mb-6 md:text-5xl">
          Transactional Consulting
        </TextEffect>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Our transactional consulting services help businesses navigate complex transactions, mergers, acquisitions,
            and strategic partnerships with confidence and clarity.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
          <p>
            We provide comprehensive support throughout the entire transaction lifecycle, from initial strategy
            development and target identification to due diligence, negotiation, and post-transaction integration.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Services We Offer</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Merger & Acquisition Advisory</li>
            <li>Due Diligence Support</li>
            <li>Transaction Structuring</li>
            <li>Valuation Services</li>
            <li>Post-Merger Integration</li>
            <li>Strategic Partnership Development</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
          <p>
            Our team brings decades of experience across various industries and transaction types. We combine deep
            financial expertise with strategic insight to ensure your transactions create lasting value and align with
            your overall business objectives.
          </p>
        </div>
      </div>
    </main>
  )
}
