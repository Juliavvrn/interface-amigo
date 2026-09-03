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
    <footer id="contact" aria-labelledby="contact-heading" className="border-t border-[#ece9e4]/10 px-6 pb-8 pt-24 md:px-10 md:pt-36">
      <h2 id="contact-heading" className="sr-only">
        {t('Contact Julia Veresova', 'Контакты Юлии Вересовой')}
      </h2>
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

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <button
            type="button"
            data-hover
            onClick={copyEmail}
            className="link-sweep inline-block text-left font-mono2 text-base uppercase tracking-[0.2em] text-[#ece9e4]/80 transition-colors duration-300 hover:text-[#ff4d00] md:text-lg"
          >
            {copied ? t('Copied', 'Скопировано') : email}
          </button>

          <a
            href="https://t.me/julianvrn"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            aria-label="Telegram"
            title="Telegram · @julianvrn"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ece9e4]/20 text-[#ece9e4]/60 transition-colors duration-300 hover:border-[#ff4d00]/60 hover:text-[#ff4d00]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.9 4.4 18.9 18.8c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.25.25-.45.45-.9.45l.3-4.6 8.4-7.6c.35-.3-.1-.5-.55-.2L7.4 12.9l-4.5-1.4c-1-.3-1-1 .2-1.45l17.1-6.6c.8-.3 1.5.2 1.7 1.45Z" />
            </svg>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="mt-20 max-w-4xl md:mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ff4d00]">
          {t('Engagement Models', 'Форматы работы')}
        </p>

        <div className="mt-8 divide-y divide-[#ece9e4]/10 border-t border-[#ece9e4]/10">
          {[
            {
              title: 'End-to-End Delivery',
              desc: t(
                'Launching an MVP or full product turnkey — from discovery and architecture to production.',
                'Запуск MVP или продукта под ключ — от Discovery и архитектуры до продакшена.'
              ),
            },
            {
              title: 'Fractional CPO / Technical PO',
              desc: t(
                'Strategic product leadership, architecture oversight, backlog and integrations management.',
                'Стратегическое ведение продукта, архитектурный надзор, управление бэклогом и интеграциями.'
              ),
            },
            {
              title: 'Advisory & Architecture Review',
              desc: t(
                'Targeted audits of data architecture, RAG pipelines and product strategy.',
                'Точечный аудит архитектуры данных, RAG-пайплайнов и продуктовой стратегии.'
              ),
            },
          ].map((item) => (
            <div key={item.title} className="grid gap-2 py-6 md:grid-cols-[minmax(0,320px)_1fr] md:gap-10">
              <p className="font-mono2 text-xs uppercase tracking-[0.2em] text-[#ece9e4] transition-colors duration-300 md:pt-1">
                {item.title}
              </p>
              <p className="text-sm leading-relaxed text-[#ece9e4]/55">{item.desc}</p>
            </div>
          ))}
        </div>
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
