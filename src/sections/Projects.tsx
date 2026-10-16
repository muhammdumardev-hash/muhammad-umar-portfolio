import { useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent } from 'react'
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
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [radius, setRadius] = useState(500)
  const stageRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef({ active: false, startX: 0, lastX: 0, moved: false })

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((project) => {
      const matchCategory = filter === 'All' || project.category === filter
      const matchQuery =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.tech.some((tech) => tech.toLowerCase().includes(q))
      return matchCategory && matchQuery
    })
  }, [filter, query])

  const slots = Math.max(filtered.length, 3)
  const step = 360 / slots
  const active = filtered.length ? ((activeIndex % filtered.length) + filtered.length) % filtered.length : 0

  useEffect(() => {
    setActiveIndex(0)
    setDragOffset(0)
  }, [filter, query])

  useEffect(() => {
    const measure = () => {
      const width = ringRef.current?.offsetWidth || 340
      setRadius((width / 2 + 30) / Math.tan(Math.PI / slots))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [slots, filtered.length])

  const goTo = (index: number) => {
    if (!filtered.length) return
    const next = ((index % filtered.length) + filtered.length) % filtered.length
    setActiveIndex(next)
    setDragOffset(0)
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (filtered.length < 2 || event.button > 0) return
    dragRef.current = {
      active: true,
      startX: event.clientX,
      lastX: event.clientX,
      moved: false,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return
    const dx = event.clientX - dragRef.current.startX
    dragRef.current.lastX = event.clientX
    if (Math.abs(dx) > 5) dragRef.current.moved = true
    setDragOffset(dx * 0.3)
  }

  const handlePointerUp = () => {
    if (!dragRef.current.active) return
    const dx = dragRef.current.lastX - dragRef.current.startX
    const didMove = dragRef.current.moved
    dragRef.current.active = false
    setDragOffset(0)
    if (didMove) {
      const turns = Math.max(1, Math.round(Math.abs(dx * 0.3) / step))
      goTo(active - Math.sign(dx) * turns)
    }
  }

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="AI agents, RAG systems, and machine learning applications built with a focus on grounded responses and practical usability."
        />

        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={
                  'rounded-lg px-3.5 py-1.5 text-sm font-medium transition ' +
                  (filter === cat
                    ? 'bg-[var(--color-accent)] text-white shadow-md shadow-indigo-500/20'
                    : 'border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-white')
                }
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
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] py-2 pl-9 pr-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-accent)] focus:outline-none sm:w-56"
              aria-label="Search projects"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-xl border border-dashed border-[var(--color-border)] py-16 text-center text-[var(--color-text-muted)]">
            No projects match your filters.
          </p>
        ) : (
          <>
            <div
              ref={stageRef}
              className="projects-3d-stage"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              aria-label="3D project carousel. Drag or swipe to rotate."
            >
              <div
                ref={ringRef}
                className="projects-3d-ring"
                style={{
                  transform:
                    'translateZ(' +
                    -radius +
                    'px) rotateY(' +
                    (-active * step + dragOffset) +
                    'deg)',
                  transition: dragRef.current.active ? 'none' : undefined,
                }}
              >
                {filtered.map((project, index) => {
                  const angle = index * step
                  const distance = Math.abs((((angle - active * step) % 360) + 540) % 360 - 180)
                  const isActive = index === active
                  return (
                    <article
                      key={project.id}
                      className={'projects-3d-card' + (isActive ? ' is-active' : '')}
                      style={{
                        transform: 'rotateY(' + angle + 'deg) translateZ(' + radius + 'px)',
                        opacity: Math.max(0.32, 1 - distance / (step * 1.8)),
                        zIndex: isActive ? 2 : 1,
                        ['--project-accent' as string]: project.accent,
                      } as CSSProperties}
                      onClick={(event) => {
                        if (!isActive) {
                          event.preventDefault()
                          goTo(index)
                        }
                      }}
                      aria-label={project.title}
                    >
                      <button
                        type="button"
                        className="projects-3d-visual"
                        onClick={() => {
                          if (isActive) setSelected(project)
                          else goTo(index)
                        }}
                        aria-label={isActive ? 'View details: ' + project.title : 'Select ' + project.title}
                        tabIndex={isActive ? 0 : -1}
                      >
                        <ProjectVisual type={project.visual} accent={project.accent} />
                        <span className="projects-3d-visual-shade" />
                      </button>

                      <div className="projects-3d-content">
                        <span className="projects-3d-category">{project.category}</span>
                        <h3>{project.title}</h3>
                        <p className="projects-3d-description">{project.shortDescription}</p>

                        <div className="projects-3d-tags">
                          {project.tech.slice(0, 4).map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                          {project.tech.length > 4 ? <span>+{project.tech.length - 4}</span> : null}
                        </div>

                        <div className="projects-3d-actions">
                          <button
                            type="button"
                            className="projects-3d-details"
                            onClick={() => {
                              if (isActive) setSelected(project)
                              else goTo(index)
                            }}
                          >
                            Details <span aria-hidden="true">→</span>
                          </button>
                          <div className="projects-3d-links">
                            {project.demoUrl ? (
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" tabIndex={isActive ? 0 : -1}>
                                <ExternalLink size={12} /> Demo
                              </a>
                            ) : null}
                            {project.codeUrl ? (
                              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" tabIndex={isActive ? 0 : -1}>
                                <Github size={12} /> Code
                              </a>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            <div className="projects-3d-navigation" aria-label="Carousel controls">
              <button type="button" onClick={() => goTo(active - 1)} aria-label="Previous project">
                ←
              </button>
              <span className="projects-3d-count" aria-live="polite">
                {active + 1} / {filtered.length}
              </span>
              <button type="button" onClick={() => goTo(active + 1)} aria-label="Next project">
                →
              </button>
            </div>

            <div className="projects-3d-dots" aria-label="Choose a project">
              {filtered.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  aria-label={'Go to ' + project.title}
                  aria-current={index === active ? 'true' : undefined}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
            <p className="projects-3d-hint">Drag, swipe, or use the arrow buttons to rotate.</p>
          </>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
