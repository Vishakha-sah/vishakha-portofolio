'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface TagProps {
  children: React.ReactNode
  className?: string
}

export default function Tag({ children, className }: TagProps) {
  return (
    <motion.span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        'border border-border bg-surface/50 text-text-primary',
        'font-[family-name:var(--font-jetbrains)]',
        'transition-all duration-300',
        'hover:border-accent-blue hover:shadow-[0_0_10px_rgba(37,99,235,0.3)]',
        className
      )}
      whileHover={{ y: -2 }}
    >
      {children}
    </motion.span>
  )
}
