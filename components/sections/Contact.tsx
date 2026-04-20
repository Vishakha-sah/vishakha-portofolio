'use client'

import { motion } from 'framer-motion'
import { PERSONAL_INFO } from '@/lib/constants'
import Button from '@/components/ui/Button'
import Toast from '@/components/ui/Toast'
import { useClipboard } from '@/lib/hooks/useClipboard'
import { Mail, Linkedin, Github, Copy } from 'lucide-react'

export default function Contact() {
  const { copy, copied } = useClipboard()

  const handleCopyEmail = () => {
    copy(PERSONAL_INFO.email)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-syne)] text-text-primary mb-6">
            Let's build something.
          </h2>

          <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">
            I'm open to internships, research collaborations, and interesting problems.
            Reach out if you'd like to connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* Email Copy Button */}
            <motion.button
              onClick={handleCopyEmail}
              className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-surface hover:border-accent-violet transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5 text-accent-violet" />
              <span className="text-text-primary font-[family-name:var(--font-jetbrains)]">
                {PERSONAL_INFO.email}
              </span>
              <motion.div
                initial={false}
                animate={{ scale: copied ? [1, 1.2, 1] : 1 }}
              >
                {copied ? (
                  <span className="text-xs text-accent-cyan">Copied!</span>
                ) : (
                  <Copy className="w-4 h-4 text-text-muted group-hover:text-accent-violet transition-colors" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <motion.a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-border bg-surface text-text-muted hover:text-accent-violet hover:border-accent-violet transition-all duration-300"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>

            <motion.a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-border bg-surface text-text-muted hover:text-accent-violet hover:border-accent-violet transition-all duration-300"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Footer */}
          <footer className="border-t border-border pt-8">
            <p className="text-sm text-text-muted">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js,
              Three.js & Framer Motion.
            </p>
          </footer>
        </motion.div>

        {/* Toast Notification */}
        <Toast
          message="Email copied to clipboard!"
          visible={copied}
          onClose={() => {}}
        />
      </div>
    </section>
  )
}
