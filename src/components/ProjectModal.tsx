import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Code2 } from 'lucide-react'
import type { Project } from '../data/config'
import ProjectVisual from './ProjectVisual'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-2xl sm:rounded-2xl"
          >
            {/* Visual header */}
            <div className="relative h-40 shrink-0 overflow-hidden sm:h-48">
              <ProjectVisual type={project.visual} accent={project.accent} />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-elevated)] to-transparent" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto px-5 pb-6 pt-2 sm:px-8">
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-accent)]">
                {project.category}
              </p>
              <h3 id="project-modal-title" className="mt-1 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-text-muted)]">Problem</h4>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-text)]">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-text-muted)]">Solution</h4>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-text)]">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-text-muted)]">Key Features</h4>
                  <ul className="mt-2 space-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-text)]">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: project.accent }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-muted)]">
                    <Code2 size={14} /> Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-card)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-accent-hover)]"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-text-dim)]">
                    <ExternalLink size={16} /> Demo unavailable
                  </span>
                )}
                {project.codeUrl ? (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2.5 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    <Github size={16} /> View Code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-text-dim)]">
                    <Github size={16} /> Code unavailable
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
