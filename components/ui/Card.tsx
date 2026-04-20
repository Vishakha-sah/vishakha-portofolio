'use client'

import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  glow?: 'violet' | 'cyan' | 'gradient' | null
}

export default function Card({ children, className, glow = null }: CardProps) {
  const glowStyles = {
    violet: 'hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:border-accent-violet/50',
    cyan: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:border-accent-cyan/50',
    gradient: 'hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]',
    null: '',
  }

  return (
    <div
      className={cn(
        'relative rounded-xl border border-border bg-surface/50',
        'backdrop-blur-sm transition-all duration-300',
        'hover:-translate-y-1',
        glowStyles[glow || 'null'],
        className
      )}
    >
      {glow === 'gradient' && (
        <div className="absolute -inset-[1px] rounded-xl gradient-border opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
      )}
      {children}
    </div>
  )
}
