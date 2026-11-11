import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '@/i18n'
import EducationModal from '@/components/EducationModal'

export default function Manifesto() {
  const { t } = useI18n()
  const [educationOpen, setEducationOpen] = useState(false)

  const text = t(
    'Technical Product Owner with an engineering background in machine learning and a medical education. I deliver turnkey complex tech products — AI, autonomous systems, telemetry and HMI: from R&D and self-assembled working MVPs to coordinating the engineering team and bringing solutions to production.\nI define technical specifications, API contracts and acceptance criteria, bridging the gap between business goals and development. I specialize in human-machine interaction design, deploying agentic pipelines (LLM, RAG, multi-agent scenarios), and validating model reliability along with protecting sensitive data. I build for hard constraints: low latency, realtime protocols (WebRTC, WebSockets), edge computing, unstable or offline connectivity and deterministic behavior with no failures or hallucinations in critical scenarios.',
    'Technical Product Owner с инженерным бэкграундом в машинном обучении и медицинским образованием. Реализую под ключ сложные технологические продукты — AI, автономные системы, телеметрия и HMI: от R&D-исследований и самостоятельной сборки работающих MVP до синхронизации инженерной команды и вывода решений в промышленную эксплуатацию.\nФормирую технические спецификации, API-контракты и критерии приемки, устраняя разрыв между бизнес-задачами и разработкой. Специализируюсь на проектировании взаимодействия человек-машина, внедрении агентных пайплайнов (LLM, RAG, мультиагентные сценарии), а также на валидации надежности моделей и защите чувствительных данных. Проектирую системы для жёстких ограничений: low-latency, realtime-протоколы (WebRTC, WebSockets), edge-вычисления, работа при нестабильной связи и офлайн, детерминированное поведение без сбоев и «галлюцинаций» в критических сценариях.'
  )
  const paragraphs = text.split('\n')

  return (
    <section id="studio" aria-labelledby="about-heading" className="px-6 py-32 md:px-10 md:py-48">
      <h2 id="about-heading" className="sr-only">
        {t('About Julia Veresova — Technical Product Owner | AI, MedTech & NeuroTech', 'О Юлии Вересовой — Technical Product Owner | AI, MedTech & NeuroTech')}
      </h2>
      <p className="mb-10 font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ff4d00]">
        {t('About', 'О себе')}
      </p>

      <div className="max-w-6xl md:ml-[10%] ">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {paragraphs.map((paragraph, paragraphIndex) => (
            <p
              key={paragraphIndex}
              className={`font-display font-semibold leading-[1.15] tracking-tight text-lg md:text-xl lg:text-2xl ${paragraphIndex === 0 ? '' : 'mt-8'}`}
            >
              {paragraph}
            </p>
          ))}
          <button
            type="button"
            onClick={() => setEducationOpen(true)}
            className="mt-10 block max-w-4xl cursor-pointer text-left font-mono2 text-[10px] uppercase leading-[2] tracking-[0.2em] text-[#ece9e4]/50 transition-colors duration-300 hover:text-[#ff4d00] md:text-[11px]"
          >
            {t('Education', 'Образование')}
          </button>
          <p className="mt-10 max-w-4xl font-mono2 text-[10px] uppercase leading-[2] tracking-[0.2em] text-[#ece9e4]/50 md:text-[11px]">
            TECHNICAL PRODUCT OWNERSHIP · END-TO-END DELIVERY · HUMAN-MACHINE INTERACTION · AGENTIC WORKFLOWS & LLM · RAG PIPELINES · LOW-LATENCY & REALTIME (WEBRTC, WEBSOCKETS) · EDGE & OFFLINE-FIRST · PYTHON & REST APIS · DATA SCIENCE & ML · AI SAFETY & COMPLIANCE
          </p>
        </motion.div>

      </div>
      <EducationModal open={educationOpen} onClose={() => setEducationOpen(false)} />
    </section>
  )
}
