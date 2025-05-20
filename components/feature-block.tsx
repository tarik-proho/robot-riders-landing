import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeatureBlock() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Everything you need to succeed in business consulting
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our comprehensive suite of services is designed to help businesses navigate complex challenges and
                achieve sustainable growth.
              </p>
            </div>
            <div className="grid gap-2 py-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Expert financial analysis and planning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Strategic transaction advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Comprehensive business evaluation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Advanced controlling systems</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Tailored solutions for your industry</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#link">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <div className="grid grid-cols-2 gap-2">
                <div className="grid gap-2">
                  <div className="rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 p-8 shadow-sm">
                    <div className="text-4xl font-bold">85%</div>
                    <div className="text-sm text-muted-foreground">Increase in efficiency</div>
                  </div>
                  <div className="rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 p-8 shadow-sm">
                    <div className="text-4xl font-bold">24/7</div>
                    <div className="text-sm text-muted-foreground">Expert support</div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 p-8 shadow-sm">
                    <div className="text-4xl font-bold">30%</div>
                    <div className="text-sm text-muted-foreground">Cost reduction</div>
                  </div>
                  <div className="rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/5 p-8 shadow-sm">
                    <div className="text-4xl font-bold">100+</div>
                    <div className="text-sm text-muted-foreground">Satisfied clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
