'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PERSONAL_INFO } from '@/lib/constants'
import Button from '@/components/ui/Button'
import { Download, ArrowDown } from 'lucide-react'

// Dynamic import for Three.js component (no SSR)
const ParticleNetwork = dynamic(() => import('@/components/three/ParticleNetwork'), {
  ssr: false,
})

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullName = PERSONAL_INFO.name
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])

  // Typewriter effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayText(fullName.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [fullName])

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <motion.div style={{ opacity, scale }} className="absolute inset-0">
        <ParticleNetwork />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-accent-cyan font-[family-name:var(--font-jetbrains)] text-sm mb-4">
            Hi, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-syne)] mb-6">
            <span className="text-text-primary">{displayText}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-[3px] h-[0.8em] bg-accent-violet ml-1 align-middle"
            />
          </h1>

          <p className="text-xl sm:text-2xl text-text-muted mb-4 font-[family-name:var(--font-jetbrains)]">
            {PERSONAL_INFO.role}
          </p>

          <p className="text-lg text-text-muted/80 mb-8 max-w-xl">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={handleScrollToProjects}>
              View Projects
            </Button>

            <Button variant="ghost" href="/resume.pdf">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-text-muted"
          >
            <span className="text-xs mb-2 font-[family-name:var(--font-jetbrains)]">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  )
}
