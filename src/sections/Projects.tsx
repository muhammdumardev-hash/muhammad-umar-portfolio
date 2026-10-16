import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Search } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProjectModal from '../components/ProjectModal'
import ProjectVisual from '../components/ProjectVisual'
import { projects, type Project, type ProjectCategory } from '../data/config'

const categories: ProjectCategory[] = ['All', 'Generative AI', 'Machine Learning', 'Web/Automation']

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('All')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = filter === 'All' || p.category === filter
      const q = query.trim().toLowerCase()
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q))
      return matchCat && matchQ
    })
  }, [filter, query])

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="AI agents, RAG systems, and machine learning applications built with a focus on grounded responses and practical usability."
        />

        {/* Filters + search */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition ${
                  filter === cat
                    ? 'bg-[var(--color-accent)] text-white shadow-md shadow-indigo-500/20'
                    : 'border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-dim)]"
            />
            <input
              type="search"
              placeholder="Search projects…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] py-2 pl-9 pr-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-accent)] focus:outline-none sm:w-56"
              aria-label="Search projects"
            />
          </div>
        </div>

        {/* Continuously rotating 3D project carousel */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-xl border border-dashed border-[var(--color-border)] py-16 text-center text-[var(--color-text-muted)]"
            >
              No projects match your filters.
            </motion.p>
          ) : (
            <motion.div
              key={filtered.map((project) => project.id).join('-')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="project-carousel-stage"
              aria-label="Rotating selected projects"
            >
              <div className="project-carousel-ring" style={{ '--project-count': filtered.length } as React.CSSProperties}>
                {filtered.map((project, i) => {
                  const angle = (360 / filtered.length) * i
                  return (
                    <article
                      key={project.id}
                      className="project-carousel-card group flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] transition hover:border-[var(--color-accent)]/60 hover:shadow-lg hover:shadow-indigo-500/10"
                      style={{ transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(var(--project-carousel-radius)) rotateY(-${angle}deg)` }}
                    >
                      <button
                        type="button"
                        onClick={() => setSelected(project)}
                        className="relative block h-36 w-full shrink-0 overflow-hidden text-left"
                        aria-label={`View details: ${project.title}`}
                      >
                        <ProjectVisual type={project.visual} accent={project.accent} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent opacity-80" />
                      </button>
                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-accent)]">{project.category}</p>
                        <h3 className="mt-1 text-base font-semibold text-white group-hover:text-[var(--color-accent-hover)]">
                          <button type="button" onClick={() => setSelected(project)} className="text-left focus-visible:underline">{project.title}</button>
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.shortDescription}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 4).map((t) => (
                            <span key={t} className="rounded border border-[var(--color-border)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--color-text-dim)]">{t}</span>
                          ))}
                          {project.tech.length > 4 && <span className="rounded border border-[var(--color-border)] px-1.5 py-0.5 text-[10px] text-[var(--color-text-dim)]">+{project.tech.length - 4}</span>}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--color-border-subtle)] pt-4">
                          <button type="button" onClick={() => setSelected(project)} className="text-xs font-medium text-[var(--color-accent)] hover:underline">Details →</button>
                          <div className="ml-auto flex gap-2">
                            {project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md border border-[var(--color-border)] px-2 py-1 text-xs text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"><ExternalLink size={12} /> Demo</a> : null}
                            {project.codeUrl ? <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md border border-[var(--color-border)] px-2 py-1 text-xs text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"><Github size={12} /> Code</a> : null}
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
