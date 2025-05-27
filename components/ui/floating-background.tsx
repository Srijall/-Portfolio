import { FLOATING_TECHNOLOGIES } from "@/constants/floating-technologies"

export function FloatingBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {FLOATING_TECHNOLOGIES.map((tech) => (
        <div
          key={tech.id}
          className="absolute animate-float-random"
          style={{
            left: `${tech.initialX}%`,
            top: `${tech.initialY}%`,
            animationDuration: `${tech.duration}s`,
            animationDelay: `${tech.duration * 0.2}s`,
          }}
        >
          {tech.icon}
        </div>
      ))}
    </div>
  )
}
