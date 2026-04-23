'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  variant = 'primary',
  className,
  onClick,
  href,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm'

  const variants = {
    primary: cn(
      'bg-accent-violet text-white',
      'hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]',
      'active:scale-95'
    ),
    ghost: cn(
      'bg-transparent border border-border text-text-primary',
      'hover:border-accent-violet hover:text-accent-violet',
      'active:scale-95'
    ),
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      {...(href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </Component>
  )
}
