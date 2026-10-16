import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { RotateCcw, MoveHorizontal } from 'lucide-react'
import type { Project } from '../data/config'
import ProjectVisual from './ProjectVisual'

interface ProjectOrbitPreviewProps {
  project: Project
}

export default function ProjectOrbitPreview({ project }: ProjectOrbitPreviewProps) {
  const [angle, setAngle] = useState(-12)
  const [hovered, setHovered] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const angleRef = useRef(angle)
  const pointerX = useRef(0)
  const pointerAngle = useRef(0)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (reducedMotion || hovered || dragging) return
    let frame = 0
    let previous = 0
    const spin = (time: number) => {
      if (time - previous > 45) {
        angleRef.current = (angleRef.current + 0.22) % 360
        setAngle(angleRef.current)
        previous = time
      }
      frame = window.requestAnimationFrame(spin)
    }
    frame = window.requestAnimationFrame(spin)
    return () => window.cancelAnimationFrame(frame)
  }, [reducedMotion, hovered, dragging])

  const beginDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    pointerX.current = event.clientX
    pointerAngle.current = angleRef.current
    setDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const moveDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    const next = pointerAngle.current + (event.clientX - pointerX.current) * 0.7
    angleRef.current = next
    setAngle(next)
  }

  const endDrag = () => setDragging(false)

  const rotateByKeyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.preventDefault()
    const next = angleRef.current + (event.key === 'ArrowRight' ? 12 : -12)
    angleRef.current = next
    setAngle(next)
  }

  const resetView = () => {
    angleRef.current = -12
    setAngle(-12)
  }

  return (
    <section className="px-5 pt-2 sm:px-8" aria-label={`360 degree preview of ${project.title}`}>
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[radial-gradient(ellipse_at_50%_35%,rgba(99,102,241,0.16),transparent_58%),linear-gradient(145deg,#0b1020,#0a0f1b)] px-3 pb-3 pt-4 sm:px-5">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative mx-auto flex h-48 max-w-lg items-center justify-center sm:h-56">
          <div
            aria-label="Interactive project preview. Drag horizontally or use the left and right arrow keys to rotate."
            aria-roledescription="rotatable 3D preview"
            tabIndex={0}
            onPointerDown={beginDrag}
            onPointerMove={moveDrag}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            onKeyDown={rotateByKeyboard}
            className={`relative z-10 w-[min(78%,340px)] cursor-grab touch-pan-y outline-none focus-visible:rounded-2xl focus-visible:ring-2 focus-visible:ring-indigo-400 ${dragging ? 'cursor-grabbing' : ''}`}
            style={{ perspective: '900px' }}
          >
            <div
              className="relative overflow-hidden rounded-xl border border-white/15 bg-[#0f172a] shadow-[0_24px_55px_rgba(0,0,0,0.42),0_0_35px_rgba(99,102,241,0.12)]"
              style={{
                transform: `rotateY(${angle}deg) rotateX(2deg)`,
                transformStyle: 'preserve-3d',
                transition: dragging ? 'none' : 'transform 100ms linear',
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              <div className="flex items-center gap-1.5 border-b border-white/10 bg-slate-950/80 px-3 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400/80" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300/80" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
                <span className="ml-2 truncate font-mono text-[9px] tracking-wide text-slate-400">{project.title}</span>
              </div>
              <div className="h-32 sm:h-36">
                <ProjectVisual type={project.visual} accent={project.accent} />
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.08] bg-slate-950/70 px-3 py-2">
                <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-slate-400">{project.category}</span>
                <span className="h-1 w-12 rounded-full" style={{ background: `linear-gradient(90deg, ${project.accent}, #8b5cf6)` }} />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-indigo-400/[0.06]" />
            </div>
          </div>

          <div className="pointer-events-none absolute h-32 w-[88%] rounded-[50%] border border-indigo-300/20 sm:h-36" style={{ transform: 'rotateX(68deg) rotateZ(-12deg)' }} />
          <div className="pointer-events-none absolute h-36 w-[76%] rounded-[50%] border border-violet-300/10 sm:h-40" style={{ transform: 'rotateX(68deg) rotateZ(18deg)' }} />
          <div className="pointer-events-none absolute bottom-4 h-5 w-[58%] rounded-[50%] bg-indigo-500/20 blur-xl" />
          <span className="pointer-events-none absolute right-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-indigo-200/80 shadow-[0_0_12px_rgba(165,180,252,0.8)]" />
          <span className="pointer-events-none absolute bottom-[22%] left-[12%] h-1 w-1 rounded-full bg-violet-200/70 shadow-[0_0_10px_rgba(196,181,253,0.8)]" />
        </div>
        <div className="relative flex items-center justify-between gap-3 border-t border-white/[0.07] pt-3">
          <p className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <MoveHorizontal size={13} className="text-indigo-300" />
            Drag to explore <span className="text-slate-600">·</span> ← → keys
          </p>
          <button
            type="button"
            onClick={resetView}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1.5 text-[11px] text-slate-300 transition hover:border-indigo-400/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Reset project preview rotation"
          >
            <RotateCcw size={12} /> Reset view
          </button>
        </div>
        {reducedMotion && <p className="relative mt-2 text-[10px] text-slate-500">Motion is reduced to match your accessibility preference. You can still rotate the preview.</p>}
      </div>
    </section>
  )
}
