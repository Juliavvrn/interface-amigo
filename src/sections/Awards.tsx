import { motion } from 'framer-motion'
import { useI18n } from '@/i18n'

const papers = [
  {
    title: 'AIIM as a Metamodel for Identity Formation in Humanized AI Systems',
    year: '2025',
    url: 'https://zenodo.org/records/15260932',
  },
  {
    title: 'A Metamodel for Constructing Identity in Humanized AI Systems',
    year: '2025',
    url: 'https://zenodo.org/records/15425903',
  },
  {
    title: 'Cognitive Biases in Inflationary and Deflationary Judgments about Large Language Models',
    year: '2025',
    url: 'https://zenodo.org/records/16399330',
  },
  {
    title: 'Ethical Paradoxes in the Design of Digital Personalities',
    year: '2025',
    url: 'https://zenodo.org/records/16423061',
  },
]

export default function Awards() {
  const { t } = useI18n()
  return (
    <section id="research" className="px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
        <div>
          <p className="mb-6 font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ff4d00]">
            {t('Research', 'Исследования')}
          </p>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.9] tracking-tighter md:text-5xl">
            {t('Cognitive OS', 'Когнитивная ОС')}
            <br />{t('for AI Agents', 'для ИИ-агентов')}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#ece9e4]/60">
            {t(
              'The system decouples agent identity from underlying intelligence models, running an immutable behavioral engine on top of any API-compatible foundation model without fine-tuning. By structuring cognitive layers above the base LLM, the architecture enforces zero personality drift across extended dialogues through automated verification checkpoints.',
              'Система отделяет идентичность агента от базовых моделей интеллекта, запуская неизменный поведенческий движок поверх любой API-совместимой базовой модели без файн-тюнинга. Размещая когнитивные слои над базовой LLM, архитектура обеспечивает нулевой дрейф личности в длительных диалогах через автоматические контрольные точки.'
            )}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#ece9e4]/60">
            {t(
              'Agents operate with autonomous values, ethical boundaries, and dynamic emotional decay that eliminate sycophancy and robotic mirroring. Designed for persistent interactions, the engine powers unscripted video game NPCs, long-term virtual companions, locked brand personas, and cognitive simulations with complete psychological consistency.',
              'Агенты действуют с автономными ценностями, этическими границами и динамическим эмоциональным затуханием, устраняющими угодничество и роботизированное зеркалирование. Движок рассчитан на постоянные взаимодействия, нескриптовые NPC в видеоиграх, долгосрочные виртуальные компаньоны, зафиксированные бренд-персоны и когнитивные симуляции с полной психологической согласованностью.'
            )}
          </p>
        </div>

        <div className="border-t border-[#ece9e4]/15">
          {papers.map((p, i) => (
            <motion.div
              key={p.url}
              data-hover
              className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-[#ece9e4]/15 py-6 transition-colors duration-500 hover:bg-[#ece9e4]/5 md:px-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="font-display text-base font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-3 group-hover:text-[#ff4d00] md:text-lg"
              >
                {p.title}
              </a>
              <span className="font-mono2 text-[11px] tracking-[0.2em] text-[#ff4d00]">
                {p.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
