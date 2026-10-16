import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { siteConfig } from '../data/config'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-umar488',
    href: siteConfig.linkedin,
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/muhammdumardev-hash',
    href: siteConfig.github,
    external: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/-/g, '')}`,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to internships, collaborations, and conversations about Generative AI and applied ML."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 transition hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)] transition group-hover:bg-[var(--color-accent)] group-hover:text-white">
                <item.icon size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-dim)]">
                  {item.label}
                </p>
                <p className="truncate text-sm font-medium text-white group-hover:text-[var(--color-accent-hover)]">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
