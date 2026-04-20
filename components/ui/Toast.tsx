'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ToastProps {
  message: string
  visible: boolean
  onClose?: () => void
}

export default function Toast({ message, visible, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'fixed bottom-8 left-1/2 -translate-x-1/2 z-50',
            'flex items-center gap-2 px-4 py-3 rounded-lg',
            'bg-surface border border-accent-violet/30',
            'shadow-[0_0_20px_rgba(124,58,237,0.2)]'
          )}
          onAnimationComplete={() => {
            if (visible && onClose) {
              setTimeout(onClose, 2000)
            }
          }}
        >
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-violet/20">
            <Check className="w-3 h-3 text-accent-violet" />
          </div>
          <span className="text-sm text-text-primary">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
