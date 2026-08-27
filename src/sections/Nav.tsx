import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '@/i18n'

export default function Nav() {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const links = [
    { label: t('About', 'О себе'), href: '#studio' },
    { label: t('Works', 'Кейсы'), href: '#works' },
    { label: t('Research', 'Исследования'), href: '#research' },
    { label: t('Contact', 'Контакты'), href: '#contact' },
  ]

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false)
    if (location.pathname !== '/') {
      e.preventDefault()
      navigate('/')
      setTimeout(() => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView()
        else window.scrollTo(0, 0)
      }, 450)
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
          <a
            href="#top"
            data-hover
            onClick={(e) => go(e, '#top')}
            className="font-display text-lg font-extrabold tracking-tight"
          >
            JULIA VERESOVA
          </a>
          <div className="hidden items-center gap-8 font-mono2 text-[11px] uppercase tracking-[0.25em] md:flex">
            {links.map((l) => (
              <a key={l.label} href={l.href} data-hover onClick={(e) => go(e, l.href)} className="link-sweep">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <button
              data-hover
              onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
              className="font-mono2 text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 hover:text-[#ff4d00]"
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'RU' : 'EN'}
            </button>
            <button
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
                <div key={l.label} className="overflow-hidden border-b border-[#ece9e4]/10">
                  <motion.a
                    href={l.href}
                    onClick={(e) => go(e, l.href)}
                    className="block py-4 font-display text-5xl font-extrabold uppercase tracking-tighter"
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '110%' }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="mr-4 font-mono2 text-xs tracking-[0.2em] text-[#ff4d00]">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    {l.label}
                  </motion.a>
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
