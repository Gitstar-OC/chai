"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Section {
  id: string
  title: string
  content: string
}

interface LegalDocumentProps {
  title: string
  lastUpdated: string
  sections: Section[]
}

export function LegalDocument({ title, lastUpdated, sections }: LegalDocumentProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "")

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      // Find the section that is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          const elementTop = top + window.scrollY
          const elementBottom = bottom + window.scrollY

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const handleSectionClick = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* <header className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 py-5">
          <Link href="/" className="inline-block">
            <Image
              src="https://www.chai-research.com/images/chai-logo.png"
              alt="Chai Research"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </header> */}

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-center gap-16">
          {/* Main Content - Centered */}
          <main className="w-full max-w-2xl">
            {/* Title only visible on desktop */}
            <div className="hidden lg:block mb-10">
              <h1 className="text-3xl font-medium mb-2">{title}</h1>
              <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
            </div>

            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-8 mb-12 lg:mb-16">
                <h2 className="text-xl font-medium mb-4 lg:mb-6">{section.title}</h2>
                <div
                  className="legal-content text-muted-foreground space-y-4"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </section>
            ))}

            <div className="mt-16 lg:mt-24 pt-8 border-t border-border text-sm text-muted-foreground">
              <p>© 2024 CHAI RESEARCH CORP. ALL RIGHTS RESERVED</p>
              <div className="flex gap-6 mt-2">
                <Link href="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="hover:text-primary">
                  EULA
                </Link>
              </div>
            </div>
          </main>

          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              {/* <h2 className="text-xl font-medium mb-2">{title}</h2> */}
              {/* <p className="text-sm text-muted-foreground mb-6">Last updated: {lastUpdated}</p> */}

              <nav className="space-y-1 mt-20">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={cn(
                      "block w-full text-left py-2 text-sm transition-colors pl-3",
                      activeSection === section.id
                        ? "text-primary font-medium border-l-2 border-primary -ml-[2px]"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}