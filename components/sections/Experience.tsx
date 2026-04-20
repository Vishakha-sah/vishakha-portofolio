'use client'

import { motion } from 'framer-motion'
import { EXPERIENCES } from '@/lib/constants'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'
import { Briefcase, Calendar } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-text-primary mb-4">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-accent-violet mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={experience.company}
                variants={itemVariants}
                className="relative md:grid md:grid-cols-2 md:gap-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-violet -translate-x-1/2 mt-6" />

                {/* Card - alternating sides on desktop */}
                <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                  <Card className="ml-10 md:ml-0 p-6" glow="violet">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-accent-violet/10">
                        <Briefcase className="w-5 h-5 text-accent-violet" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-syne)]">
                          {experience.company}
                        </h3>
                        <p className="text-accent-cyan font-medium">{experience.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                      <span className="text-border">•</span>
                      <span>{experience.type}</span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {experience.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm text-text-muted/80 pl-4 relative">
                          <span className="absolute left-0 text-accent-violet">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
