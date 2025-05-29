import type React from "react";
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Header />
          <div className="min-h-screen pt-25 mt-2">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
