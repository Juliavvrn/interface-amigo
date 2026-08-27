import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { pick } from '@/data/content'
import type { Localized } from '@/data/content'
import { useI18n } from '@/i18n'

export default function ScreensSlider({
  screens,
  imgClassName,
}: {
  screens: { src: string; caption: Localized }[]
  imgClassName?: string
}) {
  const { t, lang } = useI18n()
  const [index, setIndex] = useState(0)
  const current = screens[index]
  if (!current) return null

  const go = (dir: number) => setIndex((i) => (i + dir + screens.length) % screens.length)

  return (
    <section className="border-t border-[#ece9e4]/15 px-6 py-20 md:px-10 md:py-28">
      <div className="mb-10 flex items-end justify-between gap-6">
        <p className="font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ece9e4]">
          {t('Interface', 'Интерфейс')}
        </p>
        <div className="flex items-center gap-3">
          <span className="font-mono2 text-[11px] tracking-[0.25em] text-[#ece9e4]/50">
            {String(index + 1).padStart(2, '0')} / {String(screens.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            data-hover
            aria-label={t('Previous screen', 'Предыдущий экран')}
            onClick={() => go(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ece9e4]/25 text-[#ece9e4]/80 transition-colors duration-300 hover:border-[#ff6a1f] hover:text-[#ff6a1f]"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            data-hover
            aria-label={t('Next screen', 'Следующий экран')}
            onClick={() => go(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ece9e4]/25 text-[#ece9e4]/80 transition-colors duration-300 hover:border-[#ff6a1f] hover:text-[#ff6a1f]"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#ece9e4]/15 bg-[#ece9e4]/[0.02]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={current.src}
            alt={pick(current.caption, lang)}
            loading="lazy"
            className={imgClassName ?? 'block h-auto w-full object-contain'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
      </div>

      <p className="mt-5 font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#ece9e4]/50">
        {pick(current.caption, lang)}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {screens.map((s, i) => (
          <button
            key={s.src}
            type="button"
            data-hover
            aria-label={pick(s.caption, lang)}
            onClick={() => setIndex(i)}
            className={`h-1.5 w-10 rounded-full transition-colors duration-300 ${
              i === index ? 'bg-[#ff6a1f]' : 'bg-[#ece9e4]/20 hover:bg-[#ece9e4]/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
