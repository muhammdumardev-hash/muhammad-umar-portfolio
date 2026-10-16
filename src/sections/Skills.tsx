import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { skillCategories } from '../data/config'

export default function Skills() {
  return (
    <section id="skills" className="relative border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)]/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Technologies and concepts I use to design, build, and ship AI applications."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5"
            >
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)]/50 hover:text-[var(--color-text)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
