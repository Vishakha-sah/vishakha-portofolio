'use client'

import { motion } from 'framer-motion'
import { ACHIEVIEVEMENTS, CERTIFICATIONS } from '@/lib/constants'
import Card from '@/components/ui/Card'
import { Trophy, Target, Award } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  trophy: Trophy,
  target: Target,
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-text-primary mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-16 h-1 bg-accent-violet mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-6 font-[family-name:var(--font-syne)]">
              Awards & Recognition
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
            >
              {ACHIEVIEVEMENTS.map((achievement) => {
                const Icon = iconMap[achievement.icon] || Trophy
                return (
                  <motion.div key={achievement.title} variants={itemVariants}>
                    <Card className="p-6" glow="violet">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-accent-violet/10">
                          <Icon className="w-6 h-6 text-accent-violet" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-syne)]">
                            {achievement.title}
                          </h4>
                          <p className="text-text-muted">{achievement.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-6 font-[family-name:var(--font-syne)]">
              Certifications
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {CERTIFICATIONS.map((cert) => (
                <motion.div key={cert.name} variants={itemVariants}>
                  <Card className="p-5 h-full" glow="cyan">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-accent-cyan/10 flex-shrink-0">
                        <Award className="w-4 h-4 text-accent-cyan" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary leading-tight">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-text-muted mt-1">{cert.issuer}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
