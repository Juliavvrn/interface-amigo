import { useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '@/i18n'

export default function Nav() {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { label: t('About', 'О себе'), hash: 'studio' },
    { label: t('Works', 'Кейсы'), hash: 'works' },
    { label: t('Research', 'Исследования'), hash: 'research' },
    { label: t('Contact', 'Контакты'), hash: 'contact' },
  ]

  const scrollTo = (href: string) => {
    const lenis = (
      window as unknown as {
        __lenis?: { scrollTo: (t: HTMLElement | number, o?: Record<string, unknown>) => void }
      }
    ).__lenis
    if (href === '#top') {
      if (lenis) lenis.scrollTo(0, { duration: 1.1 })
      else window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.querySelector(href) as HTMLElement | null
    if (!el) return
    if (lenis) {
      lenis.scrollTo(el, { offset: -70, duration: 1.1 })
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const handleSectionClick = (hash: string) => {
    setOpen(false)
    if (location.pathname === '/' && location.hash === `#${hash}`) {
      requestAnimationFrame(() => scrollTo(`#${hash}`))
    }
  }

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[150] mix-blend-difference"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="flex items-center justify-between px-6 py-5 text-[#ece9e4] md:px-10">
          <Link
            to="/"
            hash="top"
            data-hover
            onClick={() => handleSectionClick('top')}
            className="font-display text-sm font-extrabold tracking-tight sm:text-base md:text-lg"
          >
            JULIA VERESOVA
          </Link>
          <div className="hidden items-center gap-8 font-mono2 text-[11px] uppercase tracking-[0.25em] md:flex">
            {links.map((l) => (
              <Link key={l.hash} to="/" hash={l.hash} data-hover onClick={() => handleSectionClick(l.hash)} className="link-sweep">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-4 md:gap-6">
            <button
              type="button"
              data-hover
              onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
              className="font-mono2 text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 hover:text-[#ff4d00]"
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'RU' : 'EN'}
            </button>
            <button
              type="button"
              data-hover
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="relative flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            >
              <span
                className={`block h-px w-6 bg-current transition-transform duration-300 ${
                  open ? 'translate-y-[3.5px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-px w-6 bg-current transition-transform duration-300 ${
                  open ? '-translate-y-[3.5px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[140] flex flex-col justify-between bg-[#0a0a0a] px-6 pb-10 pt-28"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <div key={l.hash} className="overflow-hidden border-b border-[#ece9e4]/10">
                  <motion.div
                    className="block py-4 font-display text-[clamp(1.6rem,7.5vw,3rem)] font-extrabold uppercase tracking-tighter"
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '110%' }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link to="/" hash={l.hash} onClick={() => handleSectionClick(l.hash)} className="block">
                      <span className="mr-4 font-mono2 text-xs tracking-[0.2em] text-[#ff4d00]">
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                      {l.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
            <motion.div
              className="flex items-center justify-between font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#ece9e4]/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span>juliavvrn@gmail.com</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
