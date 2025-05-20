import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    title: "Strategic Financial Planning for Growth-Stage Companies",
    description:
      "Learn how to develop a robust financial strategy that supports your company's growth objectives while managing risk.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 15, 2025",
    author: {
      name: "Sarah Johnson",
      image: "/placeholder.svg?height=40&width=40",
      role: "Financial Strategist",
    },
    category: "Financial Consulting",
  },
  {
    title: "Navigating Complex M&A Transactions: A Comprehensive Guide",
    description:
      "Explore the key considerations and potential pitfalls in mergers and acquisitions to ensure successful outcomes.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 10, 2025",
    author: {
      name: "Michael Chen",
      image: "/placeholder.svg?height=40&width=40",
      role: "M&A Advisor",
    },
    category: "Transactional Consulting",
  },
  {
    title: "Business Valuation Methodologies: Choosing the Right Approach",
    description:
      "Understand different valuation techniques and when to apply them for accurate business value assessment.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 5, 2025",
    author: {
      name: "David Rodriguez",
      image: "/placeholder.svg?height=40&width=40",
      role: "Valuation Expert",
    },
    category: "Evaluation Consulting",
  },
  {
    title: "Implementing Effective Controlling Systems for Mid-Size Enterprises",
    description:
      "Discover how to design and implement controlling systems that provide actionable insights for decision-making.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 28, 2025",
    author: {
      name: "Anna Schmidt",
      image: "/placeholder.svg?height=40&width=40",
      role: "Controlling Specialist",
    },
    category: "Controlling Services",
  },
  {
    title: "Digital Transformation in Financial Operations",
    description:
      "Learn how to leverage technology to streamline financial processes and enhance operational efficiency.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 22, 2025",
    author: {
      name: "James Wilson",
      image: "/placeholder.svg?height=40&width=40",
      role: "Digital Transformation Consultant",
    },
    category: "Financial Consulting",
  },
  {
    title: "ESG Considerations in Business Strategy and Reporting",
    description:
      "Understand how environmental, social, and governance factors impact business value and stakeholder relationships.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 15, 2025",
    author: {
      name: "Elena Petrov",
      image: "/placeholder.svg?height=40&width=40",
      role: "ESG Advisor",
    },
    category: "Strategic Consulting",
  },
]

export function BlogSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Blog</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Insights & Expertise</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay updated with our latest thinking on business strategy, financial management, and industry trends.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="object-cover w-full h-full transition-all hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="text-sm text-muted-foreground">{post.date}</div>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-2">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={post.author.image || "/placeholder.svg"} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{post.author.name}</div>
                    <div className="text-sm text-muted-foreground">{post.author.role}</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="#link">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="#link">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
