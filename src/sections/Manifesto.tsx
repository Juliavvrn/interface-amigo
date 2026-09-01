import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useI18n } from '@/i18n'
import EducationModal from '@/components/EducationModal'

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
  const [educationOpen, setEducationOpen] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 1.35', 'end 0.85'],
  })

  const text = t(
    'Full-cycle software developer and Product Owner with a medical background and hands-on expertise in IT and neurotechnology. I build scalable web and mobile systems and implement AI solutions, including RAG pipelines, multi-provider LLM orchestration and agent-based process automation platforms.\nOver the past three years I have focused on AI-driven MedTech and NeuroTech projects, where complex interdisciplinary challenges must be turned into stable production products.',
    'Разработчик программного обеспечения полного цикла и Product Owner с медицинским образованием и практической экспертизой в IT и нейротехнологиях. Занимаюсь созданием масштабируемых веб- и мобильных систем, а также внедрением ИИ-решений, включая RAG-конвейеры, мультипровайдерную оркестрацию LLM и платформы автоматизации процессов на базе агентов.\nВ последние три года отдаю предпочтение проектам в сферах MedTech и NeuroTech с участием AI, где требуется преобразование сложных междисциплинарных задач в стабильно работающие производственные продукты.'
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
        <button
          type="button"
          onClick={() => setEducationOpen(true)}
          className="mt-14 block max-w-4xl cursor-pointer text-left font-mono2 text-[10px] uppercase leading-[2] tracking-[0.2em] text-[#ece9e4]/50 transition-colors duration-300 hover:text-[#ff4d00] md:text-[11px]"
        >
          {t('Education', 'Образование')}
        </button>
        <p className="mt-14 max-w-4xl font-mono2 text-[10px] uppercase leading-[2] tracking-[0.2em] text-[#ece9e4]/50 md:text-[11px]">
          PRODUCT OWNERSHIP · CJM &amp; UX/UI · VOICE AGENTS &amp; AGENTIC WORKFLOWS · RAG &amp; LLM ORCHESTRATION · REACT &amp; SUPABASE · DATA ARCHITECTURE · SYSTEM ARCHITECTURE &amp; APIS · DATA SCIENCE &amp; ML
        </p>
      </div>
      <EducationModal open={educationOpen} onClose={() => setEducationOpen(false)} />
    </section>
  )
}
