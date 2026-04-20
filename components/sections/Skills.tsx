'use client'

import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/constants'
import Tag from '@/components/ui/Tag'
import { cn } from '@/lib/utils'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-text-primary mb-4">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-accent-violet mx-auto rounded-full mb-4" />
          <p className="text-text-muted max-w-2xl mx-auto">
            Technologies and tools I've worked with across AI/ML research and web development.
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(SKILLS).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-4 font-[family-name:var(--font-syne)]">
                {category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap gap-2"
              >
                {skills.map((skill) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <Tag>{skill}</Tag>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
