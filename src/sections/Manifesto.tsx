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
    offset: ['start 1.9', 'end 1.05'],
  })

  const text = t(
    'Technical Product Owner with an engineering background in applied machine learning and a medical education. I deliver turnkey projects in MedTech, NeuroTech and AI: from applied R&D and self-assembled working MVPs to coordinating the engineering team and bringing solutions to production.\nI define technical specifications, API contracts and acceptance criteria, bridging the gap between business goals and development. I specialize in human-machine interaction design, deploying agentic pipelines (LLM, RAG, multi-agent scenarios), and validating model reliability along with protecting sensitive data.',
    'Technical Product Owner с инженерным бэкграундом в прикладном машинном обучении и медицинским образованием. Реализую проекты под ключ в сферах MedTech, NeuroTech и AI: от прикладных R&D-исследований и самостоятельной сборки работающих MVP до синхронизации инженерной команды и вывода решений в промышленную эксплуатацию.\nФормирую технические спецификации, API-контракты и критерии приемки, устраняя разрыв между бизнес-задачами и разработкой. Специализируюсь на проектировании взаимодействия человек-машина, внедрении агентных пайплайнов (LLM, RAG, мультиагентные сценарии), а также на валидации надежности моделей и защите чувствительных данных.'
  )
  const paragraphs = text.split('\n')

  return (
    <section id="studio" ref={ref} aria-labelledby="about-heading" className="px-6 py-32 md:px-10 md:py-48">
      <h2 id="about-heading" className="sr-only">
        {t('About Julia Veresova — Technical Product Owner | AI, MedTech & NeuroTech', 'О Юлии Вересовой — Technical Product Owner | AI, MedTech & NeuroTech')}
      </h2>
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
