import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '@/i18n'
import certNeuro from '@/assets/cert-neuro.png'
import certFmri1 from '@/assets/cert-Coursera_P23W8IJG2FES_1.png'
import certFmri2 from '@/assets/cert-Coursera_QSC2YYKUAOLI.png'
import certHbr from '@/assets/cert-hbr.png'
import certClemson from '@/assets/cert-clemson.png'
import certHelsinki from '@/assets/cert-helsinki.png'
import certAlison from '@/assets/cert-alison.png'
import certGreatLearning from '@/assets/cert-greatlearning.png'

interface Props {
  open: boolean
  onClose: () => void
}

type Lenis = { stop: () => void; start: () => void }

export default function EducationModal({ open, onClose }: Props) {
  const { t } = useI18n()
  const [preview, setPreview] = useState<{ src: string; top: number; left: number } | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis
    lenis?.stop()
    const scrollY = window.scrollY
    const { body } = document
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    }
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.width = '100%'
    body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.width = prev.width
      body.style.overflow = prev.overflow
      window.scrollTo(0, scrollY)
      lenis?.start()
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) setPreview(null)
  }, [open])

  const degrees = [
    {
      school: t('Kursk State Medical University', 'Курский государственный медицинский университет'),
      qualification: t('Qualification: Medical Doctor (General Medicine)', 'Квалификация: Врач-лечебник'),
      year: '2022',
    },
    {
      school: t('Information and Communication Technologies', 'Информационно-коммуникационные технологии'),
      qualification: t(
        'Qualification: Information Systems and Technologies',
        'Квалификация: Информационные системы и технологии'
      ),
      year: '2024',
    },
  ]

  const certificates: { title: string; org: string; date: string; image?: string }[] = [
    {
      title: 'Principles of fMRI 1',
      org: 'Johns Hopkins University · Coursera',
      date: t('Mar 6, 2026', '6 марта 2026'),
      image: certFmri1,
    },
    {
      title: 'Principles of fMRI 2',
      org: 'Johns Hopkins University · Coursera',
      date: t('Mar 6, 2026', '6 марта 2026'),
      image: certFmri2,
    },
    {
      title: 'Fundamental Neuroscience for Neuroimaging',
      org: 'Johns Hopkins University · Coursera',
      date: t('Mar 4, 2026', '4 марта 2026'),
      image: certNeuro,
    },
    {
      title: 'Lead with Technology and AI',
      org: 'Harvard Business Review · Coursera',
      date: t('Feb 18, 2026', '18 февраля 2026'),
      image: certHbr,
    },
    {
      title: 'Human-Centered Artificial Intelligence',
      org: 'Clemson University · Coursera',
      date: t('Jul 26, 2025', '26 июля 2025'),
      image: certClemson,
    },
    {
      title: 'Ethics of AI (2 ECTS)',
      org: 'University of Helsinki',
      date: t('Jul 4, 2025', '4 июля 2025'),
      image: certHelsinki,
    },
    {
      title: 'AI Governance and Ethics',
      org: 'Alison',
      date: t('Jul 4, 2025', '4 июля 2025'),
      image: certAlison,
    },
    {
      title: 'AI Ethics for Beginners',
      org: 'Great Learning',
      date: t('Jul 4, 2025', '4 июля 2025'),
      image: certGreatLearning,
    },
  ]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-lenis-prevent
          className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/80 px-4 py-10 backdrop-blur-sm md:py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl border border-[#ece9e4]/15 bg-[#0a0a0a] p-7 md:p-12"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#ece9e4]/50 transition-colors hover:text-[#ff4d00]"
            >
              {t('Close', 'Закрыть')}
            </button>

            <p className="mb-10 font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ff4d00]">
              {t('Education', 'Образование')}
            </p>

            <div className="space-y-7">
              {degrees.map((d) => (
                <div key={d.school} className="border-t border-[#ece9e4]/12 pt-5">
                  <h3 className="font-display text-base font-semibold leading-snug md:text-xl">
                    {d.school}
                  </h3>
                  <p className="mt-2 font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#ece9e4]/55 md:text-[11px]">
                    {d.qualification} · {d.year}
                  </p>
                </div>
              ))}
            </div>

            <p className="mb-6 mt-14 font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ff4d00]">
              {t('Certificates', 'Сертификаты')}
            </p>

            <ul className="space-y-4">
              {certificates.map((c) => (
                <li key={c.title} className="border-t border-[#ece9e4]/12 pt-4">
                  <div
                    className="group block"
                    onMouseEnter={(e) => {
                      if (!c.image) return
                      const label = e.currentTarget.querySelector('span')
                      if (!label) return
                      const rect = label.getBoundingClientRect()
                      setPreview({ src: c.image, top: rect.top, left: rect.right })
                    }}
                    onMouseMove={(e) => {
                      if (!c.image) return
                      const label = e.currentTarget.querySelector('span')
                      if (!label) return
                      const rect = label.getBoundingClientRect()
                      setPreview({ src: c.image, top: rect.top, left: rect.right })
                    }}
                    onMouseLeave={() => setPreview(null)}
                  >
                    <span className="font-display text-sm font-semibold leading-snug transition-colors group-hover:text-[#ff4d00] md:text-base">
                      {c.title}
                    </span>
                    <span className="mt-1 block font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#ece9e4]/50">
                      {c.org} · {c.date}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <AnimatePresence>
            {preview && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="pointer-events-none fixed z-[260] w-[260px] border border-[#ece9e4]/20 bg-[#0a0a0a] p-1 shadow-2xl md:w-[320px]"
                style={{
                  left: Math.min(preview.left + 24, window.innerWidth - 340),
                  top: preview.top,
                }}
              >
                <img src={preview.src} alt="" className="block h-auto w-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
