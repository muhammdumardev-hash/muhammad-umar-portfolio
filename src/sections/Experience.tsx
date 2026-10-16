import { motion } from 'framer-motion'
import { Briefcase, Award, Heart, GraduationCap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { internships, certifications, education, volunteering } from '../data/config'

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)]/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience & Credentials"
          title="Internships, training & education"
          description="Hands-on AI/ML and Generative AI experience, formal training, and academic progress."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Internships */}
          <div className="grid gap-4">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{internship.role}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {internship.company} · {internship.period} ·{' '}
                      <span className="text-[var(--color-accent)]">{internship.status}</span>
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {internship.description}
                </p>
                <p className="mt-3 text-xs text-[var(--color-text-dim)]">{internship.certificate}</p>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white">{education.degree}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {education.school} · {education.period}
                </p>
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">{education.note}</p>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-8"
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
            <Award size={20} className="text-[var(--color-accent)]" />
            Training & Certifications
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 transition hover:border-[var(--color-accent)]/30"
              >
                <h4 className="text-sm font-semibold text-white">{c.title}</h4>
                <p className="mt-1 text-xs text-[var(--color-accent)]">{c.issuer}</p>
                <p className="mt-2 text-xs text-[var(--color-text-dim)]">{c.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Volunteering */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-400">
              <Heart size={18} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Volunteering</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                <span className="font-medium text-[var(--color-text)]">{volunteering.org}</span>
                {' — '}
                {volunteering.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
