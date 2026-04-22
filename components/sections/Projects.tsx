'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { PROJECTS } from '@/lib/constants'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'
import Button from '@/components/ui/Button'
import { Github, ExternalLink, ChevronDown, FlaskConical } from 'lucide-react'

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

export default function Projects() {
  const [experimentsOpen, setExperimentsOpen] = useState(false)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-accent-violet mx-auto rounded-full mb-4" />
          <p className="text-text-muted max-w-2xl mx-auto">
            Research-focused AI/ML projects with measurable impact.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <Card className="p-6 md:p-8" glow="gradient">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent-violet/10">
                    <FlaskConical className="w-5 h-5 text-accent-violet" />
                  </div>
                  <span className="text-xs font-[family-name:var(--font-jetbrains)] text-accent-cyan uppercase tracking-wider">
                    Featured Project
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-syne)] text-text-primary mb-4">
                  {PROJECTS.featured.title}
                </h3>

                <p className="text-text-muted mb-6">{PROJECTS.featured.description}</p>

                <ul className="space-y-2 mb-6">
                  {PROJECTS.featured.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-text-muted/80 pl-4 relative">
                      <span className="absolute left-0 text-accent-violet">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {PROJECTS.featured.tech.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="primary" href={PROJECTS.featured.github}>
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {/* Experiments Accordion */}
                <div className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExperimentsOpen(!experimentsOpen)}
                    className="w-full flex items-center justify-between p-4 bg-surface-light/50 hover:bg-surface-light transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-text-primary">
                        Research Experiments
                      </span>
                      <span className="text-xs text-text-muted font-[family-name:var(--font-jetbrains)]">
                        ({PROJECTS.featured.experiments.length})
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: experimentsOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-text-muted" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {experimentsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-surface/30">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="text-left text-text-muted border-b border-border">
                                <th className="pb-2 font-medium"># </th>
                                <th className="pb-2 font-medium">Experiment</th>
                                <th className="pb-2 font-medium">Result</th>
                              </tr>
                            </thead>
                            <tbody>
                              {PROJECTS.featured.experiments.map((exp) => (
                                <tr key={exp.id} className="border-b border-border/50 last:border-0">
                                  <td className="py-3 text-accent-violet font-[family-name:var(--font-jetbrains)]">
                                    {exp.id}
                                  </td>
                                  <td className="py-3 text-text-primary">{exp.name}</td>
                                  <td className="py-3">
                                    <span className="text-accent-cyan font-[family-name:var(--font-jetbrains)]">
                                      {exp.result}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Project Image */}
                <div className="aspect-video rounded-lg bg-surface-light border border-border overflow-hidden relative">
                  <Image
                    src="/images/plant_disease_pipeline.png"
                    alt="Plant Disease Detection Pipeline"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {PROJECTS.others.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="h-full p-6" glow="violet">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] text-text-primary">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface-light hover:bg-accent-violet/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-text-muted hover:text-accent-violet" />
                  </a>
                </div>

                {project.highlight && (
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-violet/10 text-accent-violet">
                      {project.highlight}
                    </span>
                  </div>
                )}

                <p className="text-text-muted text-sm mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
