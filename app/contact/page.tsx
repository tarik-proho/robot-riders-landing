import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-2">Contact us</h1>
          <p className="text-muted-foreground">Hopefully this form gets through our spam filters.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Corporate office</h3>
              <address className="text-muted-foreground not-italic">
                1 Carlsberg Close
                <br />
                1280 Hillview, Australia
              </address>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Email us</h3>
              <p className="text-muted-foreground">
                <a href="#" className="hover:underline">
                  Careers
                </a>
                <br />
                <a href="mailto:support@example.com" className="hover:underline">
                  support@example.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Follow us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="border-t md:border-t-0 md:border-l pt-8 md:pt-0 md:pl-8">
              <h2 className="text-xl font-medium mb-6">Inquiries</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
