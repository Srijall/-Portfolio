"use client"

import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"
import { useEffect, useState } from "react"

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Terminal({ children, className, ...props }: TerminalProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-green-800/30 bg-gray-800/90 p-4 font-mono text-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface TypingAnimationProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode
  delay?: number
}

export function TypingAnimation({ children, delay = 0, className, ...props }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const text = children?.toString() || ""

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        setCurrentIndex(prev => prev + 1)
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [isTyping, text, currentIndex])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isTyping ? 1 : 0 }}
      className={cn("text-gray-300", className)}
      {...props}
    >
      {displayText}
      {isTyping && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="ml-0.5 inline-block h-4 w-2 bg-green-500"
        />
      )}
    </motion.div>
  )
}

interface AnimatedSpanProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode
  delay?: number
}

export function AnimatedSpan({ children, delay = 0, className, ...props }: AnimatedSpanProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.3 }}
      className={cn("text-gray-300", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
} 