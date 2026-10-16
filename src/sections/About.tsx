import { motion } from 'framer-motion'
import { GraduationCap, Brain, Code2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { education } from '../data/config'

const cards = [
  {
    icon: GraduationCap,
    title: 'Education',
    body: `${education.degree} at ${education.school}. ${education.period}. ${education.note}.`,
  },
  {
    icon: Brain,
    title: 'Focus',
    body: 'Generative AI, LLMs, RAG systems, AI agents, embeddings, and practical machine learning applications.',
  },
  {
    icon: Code2,
    title: 'Approach',
    body: 'Building grounded, useful AI products with clear problem framing, solid retrieval pipelines, and clean web interfaces.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Building practical AI systems"
          description="BS Computer Science student at the University of Management and Technology (UMT), currently in the 7th semester, with hands-on Generative AI internship experience and a focus on LLM applications, RAG, and web development."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="gradient-border group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition hover:border-[var(--color-accent)]/40"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <card.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
