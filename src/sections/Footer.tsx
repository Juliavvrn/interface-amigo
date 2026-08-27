import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '@/i18n'

export default function Footer() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)
  const email = 'juliavvrn@gmail.com'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore
    }
  }

  return (
    <footer id="contact" className="border-t border-[#ece9e4]/10 px-6 pb-8 pt-24 md:px-10 md:pt-36">
      <p className="font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ff4d00]">
        {t('Got a project?', 'Есть проект?')}
      </p>

      <motion.div
        className="mt-28 max-w-4xl md:mt-44"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-display text-[5vw] font-medium leading-[1.05] tracking-tight text-[#ece9e4] md:text-[2.6vw]">
          {t(
            'For collaboration, consulting or project work, you can contact me directly via email',
            'Для сотрудничества, консультаций или проектной работы вы можете связаться со мной напрямую по электронной почте'
          )}
        </p>

        <button
          type="button"
          data-hover
          onClick={copyEmail}
          className="link-sweep mt-10 inline-block text-left font-mono2 text-base uppercase tracking-[0.2em] text-[#ece9e4]/80 transition-colors duration-300 hover:text-[#ff4d00] md:text-lg"
        >
          {copied ? t('Copied', 'Скопировано') : email}
        </button>
      </motion.div>

      <div className="mt-20 flex items-center justify-between border-t border-[#ece9e4]/10 pt-10 font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#ece9e4]/40">
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
