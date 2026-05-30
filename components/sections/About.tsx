'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BIO, STATS } from '@/lib/constants'
import { useCountUp } from '@/lib/hooks/useCountUp'
import Card from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface StatCardProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  decimals?: number
  delay?: number
}

function StatCard({ value, label, prefix = '', suffix = '', decimals = 0, delay = 0 }: StatCardProps) {
  const { count, ref } = useCountUp({ end: value, duration: 2000, decimals })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="p-6 text-center glow-blue">
        <div className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-text-primary mb-1">
          {prefix}
          {count}
          {suffix}
        </div>
        <p className="text-sm text-text-muted font-[family-name:var(--font-jetbrains)]">{label}</p>
      </Card>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-text-primary mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Bio + Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="prose prose-invert max-w-none text-center">
                {BIO.split('\n\n').map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-text-muted leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
