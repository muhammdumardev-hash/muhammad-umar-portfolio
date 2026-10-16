import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Award, Heart, ExternalLink } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { internships, volunteering } from '../data/config'

export default function Experience() {
  const [activeCertificate, setActiveCertificate] = useState<{ title: string; src: string } | null>(null)

  return (
    <section
      id="experience"
      className="relative border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)]/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience & Credentials"
          title="Internships, training & certifications"
          description="Practical AI/ML experience, Generative and Agentic AI training, and professional certifications."
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
                <div className="mt-4 flex flex-wrap gap-3">
                  {(internship.role === 'AI/ML Intern'
                    ? [
                        { label: 'Offer Letter', file: 'BigBrains-OfferLetter-BB-89C2D0548B23.png' },
                        { label: 'Completion Certificate', file: 'BigBrains-Certificate-BB-3E1E5004CA3D.png' },
                        { label: 'Recommendation Letter', file: 'BigBrains-RecommendationLetter-BB-C981812C0E04%20(1).png' },
                      ]
                    : [
                        { label: 'Offer Letter', file: 'BigBrains-OfferLetter-BB-752F7637F47C.png' },
                        { label: 'Completion Certificate', file: 'BigBrains-Certificate-BB-06A8AB4282A9.png' },
                      ]
                  ).map((document) => {
                    const folder = internship.role === 'AI/ML Intern' ? 'big-brains-ai-ml' : 'big-brains-generative-ai'
                    const documentUrl = `/certificates/${folder}/${document.file}`

                    if (document.label === 'Completion Certificate') {
                      return (
                        <button
                          key={document.label}
                          type="button"
                          onClick={() => setActiveCertificate({ title: `${internship.role} — Completion Certificate`, src: documentUrl })}
                          className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] px-3 py-2 text-xs font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent-soft)]"
                        >
                          View Certificate
                          <ExternalLink size={12} />
                        </button>
                      )
                    }

                    return (
                      <a
                        key={document.label}
                        href={documentUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] px-3 py-2 text-xs font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent-soft)]"
                      >
                        {document.label}
                        <ExternalLink size={12} />
                      </a>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Training & Certifications */}
          <div className="grid gap-4">
            {/* Pak Angels Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Generative and Agentic AI Application Developer</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">Pak Angels · Cohort 11</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                Aug–Oct 2026 · Top Performer award
              </p>
            </motion.div>

            {/* Cyber Security Workshop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Cyber Security Workshop</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">Certificate of Participation</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                Workshop participation certificate
              </p>
            </motion.div>
          </div>
        </div>

        {activeCertificate && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={activeCertificate.title}
            onClick={() => setActiveCertificate(null)}
          >
            <div
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 sm:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="font-semibold text-white">{activeCertificate.title}</h3>
                <button
                  type="button"
                  onClick={() => setActiveCertificate(null)}
                  className="rounded-md border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-accent-soft)]"
                >
                  Close
                </button>
              </div>
              <div className="min-h-0 overflow-auto">
                <img
                  src={activeCertificate.src}
                  alt={activeCertificate.title}
                  className="mx-auto h-auto max-h-[75vh] w-auto max-w-full rounded-md object-contain"
                />
              </div>
            </div>
          </div>
        )}

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
