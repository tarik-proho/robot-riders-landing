"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Language = "en" | "ba"

interface LanguageToggleProps {
  className?: string
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const [language, setLanguage] = React.useState<Language>("en")

  const toggleLanguage = () => {
    // Toggle between "en" and "ba"
    setLanguage(language === "en" ? "ba" : "en")
    // Here you would implement the actual language change logic
    // For example, using i18n or a context provider
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      className={cn("h-8 w-8 p-0", className)}
      aria-label={language === "en" ? "Switch to Bosnian" : "Switch to English"}
    >
      {language === "en" ? (
        <Image src="/uk.png" alt="UK flag" width={20} height={14} className="h-4 w-auto" />
      ) : (
        <Image src="/bah.png" alt="Bosnian flag" width={20} height={14} className="h-4 w-auto" />
      )}
    </Button>
  )
}
