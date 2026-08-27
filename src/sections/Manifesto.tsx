import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useI18n } from '@/i18n'

function Word({
  word,
  progress,
  range,
}: {
  word: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.12, 1])
  return (
    <motion.span style={{ opacity }} className="mr-[0.35em] inline-block">
      {word}
    </motion.span>
  )
}

export default function Manifesto() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 1', 'end 0.7'],
  })

  const text = t(
    'I create and scale digital products in science-intensive industries: from synthetic research platforms and voice assistants to B2B SaaS, accounting systems and databases. I own the full launch cycle, from CJM and UX concepts to rigorous technical specifications, hiring specialists, running sprints and rapidly assembling working prototypes through an agentic approach.',
    'Занимаюсь созданием и масштабированием цифровых продуктов в наукоёмких отраслях: от платформ синтетических исследований и голосовых ассистентов до B2B SaaS, систем учёта и баз данных.\nЗакрываю весь цикл запуска: от формирования CJM и UX-концептов до составления строгих технических спецификаций, найма специалистов, проведения спринтов и быстрой сборки рабочих прототипов через агентский подход'
  )
  const paragraphs = text.split('\\n')

  return (
    <section id="studio" ref={ref} className="px-6 py-32 md:px-10 md:py-48">
      <p className="mb-10 font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ff4d00]">
        {t('About', 'О себе')}
      </p>
      <div className="max-w-5xl md:ml-[17%]">
        {paragraphs.map((paragraph, paragraphIndex) => {
          const words = paragraph.split(' ')
          return (
            <p
              key={paragraphIndex}
              className={`font-display font-semibold leading-[1.15] tracking-tight ${paragraphIndex === 0 ? 'text-lg md:text-2xl' : 'mt-10 text-sm leading-[1.5] text-[#ece9e4]/55 md:text-base'}`}
            >
              {words.map((word, i) => (
                <Word
                  key={i}
                  word={word}
                  progress={scrollYProgress}
                  range={[i / words.length, (i + 1) / words.length]}
                />
              ))}
            </p>
          )
        })}
        <p className="mt-14 max-w-4xl font-mono2 text-[10px] uppercase leading-[2] tracking-[0.2em] text-[#ece9e4]/50 md:text-[11px]">
          PRODUCT OWNERSHIP · CJM &amp; UX/UI · AI &amp; VOICE AGENTS · AGENTIC WORKFLOWS · DATA SCIENCE &amp; ML · RELATIONAL DB &amp; SQL · REACT &amp; SUPABASE
        </p>
      </div>
    </section>
  )
}
