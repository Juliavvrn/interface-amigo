import { motion } from 'framer-motion'
import { useI18n } from '@/i18n'

export default function Footer() {
  const { t, lang } = useI18n()
  return (
    <footer id="contact" className="border-t border-[#ece9e4]/10 px-6 pb-8 pt-24 md:px-10 md:pt-36">
      <p className="mb-8 font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ff4d00]">
        {t('Got a project?', 'Есть проект?')}
      </p>

      <motion.a
        href="mailto:juliavvrn@gmail.com"
        data-hover
        className="group block select-none"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-display text-[14vw] font-extrabold uppercase leading-[0.85] tracking-tighter transition-colors duration-500 group-hover:text-[#ff4d00] md:text-[11vw]">
          {t("Let's", 'Давайте')}
        </span>
        <span className={`block font-display text-[14vw] font-extrabold uppercase leading-[0.85] tracking-tighter text-[#ff4d00] transition-colors duration-500 group-hover:text-[#ece9e4] md:text-[11vw] ${lang === 'ru' ? 'mt-[10px]' : ''}`}>
          {t('Talk', 'Поговорим')}
        </span>
      </motion.a>

      <div className="mt-20 grid gap-10 border-t border-[#ece9e4]/10 pt-10">
        <div>
          <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#ece9e4]/40">{t('Contact', 'Контакты')}</p>
          <a href="mailto:juliavvrn@gmail.com" data-hover className="link-sweep mt-2 inline-block text-sm text-[#ece9e4]/70">
            juliavvrn@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-between font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#ece9e4]/40">
        <span>© 2026 JULIA VERESOVA</span>
        <a
          href="#top"
          data-hover
          className="link-sweep"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          {t('Back to top ↑', 'Наверх ↑')}
        </a>
      </div>
    </footer>
  )
}
