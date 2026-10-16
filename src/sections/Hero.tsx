import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Sparkles } from 'lucide-react'
import { siteConfig } from '../data/config'
import NetworkVisual from '../components/NetworkVisual'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
}

export default function Hero() {
  const handleCv = () => {
    if (siteConfig.cvAvailable) {
      const a = document.createElement('a')
      a.href = siteConfig.cvPath
      a.download = 'Muhammad_Umar_CV.pdf'
      a.click()
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid bg-radial-glow pt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
          <motion.div
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)] backdrop-blur"
          >
            <Sparkles size={14} className="text-[var(--color-accent)]" />
            Open to internships & opportunities
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-tight"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 text-lg font-medium text-[var(--color-accent)] sm:text-xl"
          >
            {siteConfig.headline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-lg text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
          >
            {siteConfig.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-[var(--color-accent-hover)]"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-white"
            >
              <Mail size={16} /> Contact Me
            </a>
            {siteConfig.cvAvailable ? (
              <button
                type="button"
                onClick={handleCv}
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <Download size={16} /> Download CV
              </button>
            ) : (
              <span
                title="Add your CV PDF to public/cv/ and set cvAvailable to true in config.ts"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-dashed border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-dim)]"
              >
                <Download size={16} /> CV (add PDF)
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Right: animated network visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          <div className="relative aspect-square">
            <div
              className="absolute inset-0 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)',
              }}
            />
            <NetworkVisual />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-dim)] transition hover:text-[var(--color-accent)]"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </a>
    </section>
  )
}
