import { useMemo, useRef, useState } from 'react'
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
  const [dragRotation, setDragRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, rotation: 0 })
  const dragMoved = useRef(false)

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

  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return
    dragMoved.current = false
    dragStart.current = { x: event.clientX, rotation: dragRotation }
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const moveDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const delta = event.clientX - dragStart.current.x
    if (Math.abs(delta) > 5) dragMoved.current = true
    setDragRotation(dragStart.current.rotation + delta * 0.55)
  }

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const openProject = (project: Project) => {
    if (dragMoved.current) return
    setSelected(project)
  }

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="AI agents, RAG systems, and machine learning applications built with a focus on grounded responses and practical usability."
        />

        {/* Filters + search */}
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

        <p className="mb-1 text-center text-xs text-[var(--color-text-dim)]">
          Drag to rotate · Hover to pause · Select a project for details
        </p>

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
              className={`project-orbit-scene ${isDragging ? 'is-dragging' : ''}`}
              onPointerDown={startDrag}
              onPointerMove={moveDrag}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              style={{ transform: `rotateY(${dragRotation}deg)` }}
              role="region"
              aria-label="Continuously rotating project carousel"
            >
              <div className="project-orbit-track">
                {filtered.map((project, i) => {
                  const angle = (360 / filtered.length) * i
                  return (
                    <article
                      key={project.id}
                      className="project-orbit-card group"
                      style={{ transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(var(--project-orbit-radius))` }}
                    >
                      <button
                        type="button"
                        onClick={() => openProject(project)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') openProject(project)
                        }}
                        className="block h-40 w-full overflow-hidden rounded-t-2xl text-left"
                        aria-label={`View details: ${project.title}`}
                      >
                        <ProjectVisual type={project.visual} accent={project.accent} />
                      </button>
                      <div className="flex min-h-0 flex-1 flex-col p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-hover)]">
                          {project.category}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold leading-snug text-white">
                          {project.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                          {project.shortDescription}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-[var(--color-border)] bg-black/10 px-2 py-1 text-[10px] text-[var(--color-text-dim)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border-subtle)] pt-3">
                          <button
                            type="button"
                            onClick={() => openProject(project)}
                            className="text-xs font-semibold text-[var(--color-accent-hover)] hover:text-white"
                          >
                            Explore project ↗
                          </button>
                          <div className="flex items-center gap-2 text-[var(--color-text-dim)]">
                            {project.demoUrl && <ExternalLink size={13} aria-label="Demo available" />}
                            {project.codeUrl && <Github size={13} aria-label="Code available" />}
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
              <div className="project-orbit-glow" aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
