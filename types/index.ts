import type React from "react"
export interface Technology {
  id: string
  icon: React.ReactNode
  initialX: number
  initialY: number
  duration: number
}

export interface CommunityStats {
  value: string
  label: string
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  delay?: string
}

export interface Tool {
  icon: React.ComponentType<{ className?: string }>
  text: string
}
