import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '@/i18n'
import EducationModal from '@/components/EducationModal'

export default function Manifesto() {
  const { t } = useI18n()
  const [educationOpen, setEducationOpen] = useState(false)

  const text =
    'Technical Product Owner с инженерным бэкграундом в машинном обучении и медицинским образованием. Проектирую и разрабатываю под ключ целевые программные комплексы для автономных систем, промышленности и MedTech: от постановки задачи и архитектуры до рабочего решения и передачи документированного кода команде.\nРабочие направления — предиктивная аналитика и обработка потоковых данных, защита чувствительных данных при работе с внешними нейросетями, интерфейсы взаимодействия человек-машина (HMI), прикладные сервисы для медицины и поддержки врачебных решений. Формирую технические спецификации, API-контракты и критерии приемки, консультирую по архитектуре, рискам и этике внедрения ИИ в продукт.'
  const paragraphs = text.split('\n')

  return (
    <section id="studio" aria-labelledby="about-heading" className="px-6 py-32 md:px-10 md:py-48">
      <h2 id="about-heading" className="sr-only">
        {t('About Julia Veresova — Technical Product Owner | AI, MedTech & NeuroTech', 'О Юлии Вересовой — разработка программных комплексов и консалтинг по ИИ')}
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
        </motion.div>

      </div>
      <EducationModal open={educationOpen} onClose={() => setEducationOpen(false)} />
    </section>
  )
}
