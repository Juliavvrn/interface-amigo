import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { projects, pick } from '@/data/content'
import { useI18n } from '@/i18n'

const FILTERS = [
  { key: 'product', label: 'Реализованные продукты' },
  { key: 'architecture', label: 'Архитектура и проектирование' },
] as const

type FilterKey = (typeof FILTERS)[number]['key']

export default function Works() {
  const { lang } = useI18n()
  const [filter, setFilter] = useState<FilterKey>('product')
  const visible = projects.filter((p) => p.kind === filter)

  return (
    <section id="works" className="px-6 py-24 md:px-10 md:py-40">
      <p className="mb-4 font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ff4d00]">Доказательства в реальных проектах</p>
      <h2 className="mb-8 font-display text-5xl font-extrabold tracking-tighter md:mb-10 md:text-7xl">Кейсы</h2>

      <div className="mb-10 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-mono2 text-[11px] uppercase tracking-[0.2em] md:mb-12 md:text-xs" role="tablist" aria-label="Тип кейсов">
        {FILTERS.map((f, i) => (
          <span key={f.key} className="flex items-baseline gap-3">
            {i > 0 && <span aria-hidden className="text-[#ece9e4]/30">/</span>}
            <button
              role="tab"
              aria-selected={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={`transition-colors duration-300 ${
                filter === f.key
                  ? 'text-[#ff4d00]'
                  : 'text-[#ece9e4]/40 hover:text-[#ece9e4]'
              }`}
            >
              {f.label}
            </button>
          </span>
        ))}
      </div>

      <div className="border-t border-[#ece9e4]/15">
        {visible.map((p, i) => {
          return (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/works/$slug"
                params={{ slug: p.slug }}
                data-cursor="view"
                className="group relative grid grid-cols-[2.25rem_1fr] gap-x-3 gap-y-4 border-b border-[#ece9e4]/15 py-7 md:grid-cols-[3rem_minmax(0,1fr)_14rem_2rem] md:items-center md:gap-8 md:py-10"
              >
                <span className="pt-1 font-mono2 text-[11px] tracking-[0.2em] text-[#ece9e4]/40 transition-colors duration-500 group-hover:text-[#ff4d00]">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-bold leading-tight tracking-tight transition-all duration-500 group-hover:text-[#ff4d00] md:text-4xl md:group-hover:translate-x-4">
                    {pick(p.title, lang)}
                  </h3>
                  <p className="mt-2 font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#ece9e4]/45 md:text-[11px]">
                    {pick(p.category, lang)}
                  </p>
                </div>
                <span className="col-start-2 font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#ece9e4]/50 transition-colors duration-500 group-hover:text-[#ff4d00] md:col-start-auto md:text-right md:text-[11px]">
                  Смотреть кейс
                </span>
                <span aria-hidden className="hidden text-2xl text-[#ece9e4]/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#ff4d00] md:block">→</span>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
