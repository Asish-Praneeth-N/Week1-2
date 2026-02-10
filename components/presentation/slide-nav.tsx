"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

const SLIDE_IDS = [
  "agenda",
  "browser-machine",
  "html-tree",
  "css-tree",
  "perf-problem",
  "why-react",
  "components-functions",
  "hierarchy",
  "data-flow",
  "props-state",
  "state-placement",
  "child-parent",
  "events-state",
  "virtual-dom",
  "fe-be",
  "api-json",
  "async-await",
  "auth-flow",
  "roles-auth",
  "rls-security",
  "pagination-storage",
  "mental-model",
]

const SLIDE_LABELS = [
  "Agenda",
  "Browser Machine",
  "HTML (DOM)",
  "CSS (CSSOM)",
  "Performance",
  "Why React",
  "Components",
  "Hierarchy",
  "Data Flow",
  "Props vs State",
  "State Placement",
  "Child → Parent",
  "Events",
  "Virtual DOM",
  "FE vs BE",
  "APIs & JSON",
  "Async/Await",
  "Auth Flow",
  "Authorization",
  "RLS & Security",
  "Concepts",
  "Mental Model",
]

export function SlideNav() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [showNav, setShowNav] = useState(false)

  const scrollToSlide = useCallback((index: number) => {
    const el = document.getElementById(SLIDE_IDS[index])
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  useEffect(() => {
    // Visibility state to track which slide is most visible
    const visibilityMap = { current: {} as Record<string, number> }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id) {
          // Update visibility ratio map
          visibilityMap.current[entry.target.id] = entry.intersectionRatio
        }
      })

      // Find the slide with the highest visibility ratio
      let maxRatio = 0
      let activeId = ""

      for (const id of SLIDE_IDS) {
        const ratio = visibilityMap.current[id] || 0
        if (ratio > maxRatio) {
          maxRatio = ratio
          activeId = id
        }
      }

      // Only partial visibility required to be "active" (0.1 is fallback)
      if (activeId && maxRatio > 0.1) {
        const index = SLIDE_IDS.indexOf(activeId)
        if (index !== -1) {
          setActiveSlide(index)
        }
      }
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], // Granular tracking
      rootMargin: "-10% 0px -40% 0px", // Bias towards top-center (header area)
    })

    // Retry finding elements until they exist
    let attempts = 0
    const maxAttempts = 10
    const retryInterval = 200

    const observeElements = () => {
      let foundCount = 0
      for (const id of SLIDE_IDS) {
        const el = document.getElementById(id)
        if (el) {
          observer.observe(el)
          foundCount++
        }
      }

      if (foundCount < SLIDE_IDS.length && attempts < maxAttempts) {
        attempts++
        setTimeout(observeElements, retryInterval)
      }
    }

    observeElements()

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ... same logic for keys ...
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault()
        const next = Math.min(activeSlide + 1, SLIDE_IDS.length - 1)
        scrollToSlide(next)
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault()
        const prev = Math.max(activeSlide - 1, 0)
        scrollToSlide(prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeSlide, scrollToSlide])

  return (
    <>
      {/* Dot indicators (always visible) */}
      <nav
        className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-2 md:flex"
        onMouseEnter={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}
      >
        {SLIDE_IDS.map((id, i) => (
          <button
            key={id}
            onClick={() => scrollToSlide(i)}
            aria-label={`Go to slide: ${SLIDE_LABELS[i]}`}
            className="group relative flex items-center justify-end"
          >
            <AnimatePresence>
              {showNav && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.2, delay: i * 0.02 }}
                  className="mr-3 whitespace-nowrap font-mono text-[10px] tracking-wider text-muted-foreground"
                >
                  {SLIDE_LABELS[i]}
                </motion.span>
              )}
            </AnimatePresence>
            <span
              className={cn(
                "block h-1.5 w-1.5 rounded-full transition-all duration-300",
                activeSlide === i
                  ? "scale-150 bg-accent"
                  : "bg-muted-foreground/40 group-hover:bg-muted-foreground"
              )}
            />
          </button>
        ))}
      </nav>

      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-border bg-background/80 px-4 py-2 backdrop-blur-md md:hidden">
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
          {String(activeSlide + 1).padStart(2, "0")} / {String(SLIDE_IDS.length).padStart(2, "0")}
        </span>
        <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
          {SLIDE_LABELS[activeSlide]}
        </span>
      </div>
    </>
  )
}
