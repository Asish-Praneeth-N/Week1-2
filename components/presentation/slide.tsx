"use client"

import React from "react"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { cn } from "@/lib/utils"

interface SlideProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Slide({ children, className, id }: SlideProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-screen w-full snap-start snap-always items-center justify-center overflow-hidden px-6 py-20 md:px-16 lg:px-24",
        className
      )}
    >
      {children}
    </section>
  )
}

interface AnimatedBlockProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: "up" | "left" | "right" | "fade"
}

export function AnimatedBlock({ children, delay = 0, className, direction = "up" }: AnimatedBlockProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SlideNumber({ current, total }: { current: number; total: number }) {
  return (
    <div className="absolute bottom-8 right-8 font-mono text-xs tracking-widest text-muted-foreground">
      {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </div>
  )
}

export function CodeBlock({ children, label }: { children: string; label?: string }) {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-muted/50">
      {label && (
        <div className="border-b border-border px-4 py-2">
          <span className="font-mono text-xs tracking-wider text-muted-foreground">{label}</span>
        </div>
      )}
      <pre className="overflow-x-auto p-4 md:p-6">
        <code className="font-mono text-xs leading-relaxed text-secondary-foreground md:text-sm">{children}</code>
      </pre>
    </div>
  )
}

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "secondary" | "destructive" | "outline"
  className?: string
}

export function Badge({ children, variant, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}

export function Divider() {
  return <div className="mx-auto h-px w-16 bg-border" />
}
