import { Link } from 'react-router'
import { projects, pick } from '@/data/content'
import { useI18n } from '@/i18n'

export default function Works() {
  const { lang, t } = useI18n()
  return (
    <section id="works" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mb-14">
        <h2 className="font-display text-5xl font-extrabold uppercase tracking-tighter md:text-7xl">
          {t('Works', 'Кейсы')}
        </h2>
      </div>

      <div className="border-t border-[#ece9e4]/15">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            to={`/works/${p.slug}`}
            data-cursor="view"
            className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 overflow-hidden border-b border-[#ece9e4]/15 py-6 md:grid-cols-[3rem_1fr_auto_5rem] md:gap-8 md:py-9"
          >
            <span className="font-mono2 text-[11px] tracking-[0.2em] text-[#ece9e4]/40 transition-colors duration-500 group-hover:text-[#ff4d00]">
              {(i + 1).toString().padStart(2, '0')}
            </span>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight transition-all duration-500 group-hover:translate-x-4 group-hover:text-[#ece9e4] md:text-5xl md:group-hover:translate-x-8">
              {pick(p.title, lang)}
            </h3>
            <span className="hidden font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#ece9e4]/50 md:block">
              {pick(p.category, lang)}
            </span>
            <span className="text-right font-mono2 text-[11px] tracking-[0.2em] text-[#ece9e4]/40">
              {p.year}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
