import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useI18n } from '@/i18n'
import EducationModal from '@/components/EducationModal'
import portraitAsset from '@/assets/julia-veresova-portrait.png.asset.json'

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
    'Technical Product Owner with an engineering background in machine learning and a medical education. I deliver turnkey projects in MedTech, NeuroTech and AI: from R&D and self-assembled working MVPs to coordinating the engineering team and bringing solutions to production.\nI define technical specifications, API contracts and acceptance criteria, bridging the gap between business goals and development. I specialize in human-machine interaction design, deploying agentic pipelines (LLM, RAG, multi-agent scenarios), and validating model reliability along with protecting sensitive data.',
    'Technical Product Owner с инженерным бэкграундом в машинном обучении и медицинским образованием. Реализую проекты под ключ в сферах MedTech, NeuroTech и AI: от R&D-исследований и самостоятельной сборки работающих MVP до синхронизации инженерной команды и вывода решений в промышленную эксплуатацию.\nФормирую технические спецификации, API-контракты и критерии приемки, устраняя разрыв между бизнес-задачами и разработкой. Специализируюсь на проектировании взаимодействия человек-машина, внедрении агентных пайплайнов (LLM, RAG, мультиагентные сценарии), а также на валидации надежности моделей и защите чувствительных данных.'
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

      <div className="max-w-6xl md:ml-[10%] md:grid md:grid-cols-[minmax(0,1.6fr)_minmax(240px,0.75fr)] md:gap-10 lg:gap-16">
        <div>
          {paragraphs.map((paragraph, paragraphIndex) => {
            const words = paragraph.split(' ')
            return (
              <p
                key={paragraphIndex}
                className={`font-display font-semibold leading-[1.15] tracking-tight ${paragraphIndex === 0 ? 'text-lg md:text-xl lg:text-2xl' : 'mt-8 text-sm leading-[1.5] text-[#ece9e4]/55 md:text-[15px]'}`}
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
            className="mt-10 block max-w-4xl cursor-pointer text-left font-mono2 text-[10px] uppercase leading-[2] tracking-[0.2em] text-[#ece9e4]/50 transition-colors duration-300 hover:text-[#ff4d00] md:text-[11px]"
          >
            {t('Education', 'Образование')}
          </button>
          <p className="mt-10 max-w-4xl font-mono2 text-[10px] uppercase leading-[2] tracking-[0.2em] text-[#ece9e4]/50 md:text-[11px]">
            TECHNICAL PRODUCT OWNERSHIP · END-TO-END DELIVERY · HUMAN-MACHINE INTERACTION · AGENTIC WORKFLOWS & LLM · RAG PIPELINES · PYTHON & REST APIS · DATA SCIENCE & ML · AI SAFETY & COMPLIANCE
          </p>
        </div>

        <div className="relative mt-12 aspect-[3/4] overflow-hidden md:mt-0 md:aspect-auto md:min-h-full">
          <img
            src={portraitAsset.url}
            alt={t('Portrait of Julia Veresova', 'Портрет Юлии Вересовой')}
            className="h-full w-full object-cover object-center md:absolute md:inset-0"
            loading="lazy"
          />
        </div>
      </div>
      <EducationModal open={educationOpen} onClose={() => setEducationOpen(false)} />
    </section>
  )
}
