import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, ArrowDown } from 'lucide-react'
import { useI18n } from '@/i18n'

const papers = [
  {
    title: 'Когнитивные искажения в инфляционных и дефляционных суждениях о больших языковых моделях',
    year: '2025',
    url: 'https://apni.ru/article/12593-kognitivnye-iskazheniya-v-inflyacionnyh-i-deflyacionnyh-suzhdeniyah-o-bolshih-yazykovyh-modelyah',
  },
  {
    title: 'Этические парадоксы в проектировании цифровых личностей: границы ответственности и субъектности в гуманизированном AI',
    year: '2025',
    url: 'https://apni.ru/article/12368-eticheskie-paradoksy-v-proektirovanii-cifrovyh-lichnostej-granicy-otvetstvennosti-i-subuektnosti-v-gumanizirovannom-ai',
  },
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
  const [startIndex, setStartIndex] = useState(0)
  const visiblePapers = papers.slice(startIndex, startIndex + 4)
  const canGoBack = startIndex > 0
  const canGoForward = startIndex < papers.length - 4

  return (
    <section id="research" className="px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
        <div>
          <p className="mb-6 font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ff4d00]">
            {t('Research', 'Исследования')}
          </p>
          {t(
            'My research focuses on the epistemology of artificial intelligence, the analysis of cognitive biases in the perception of language models, and the evaluation of how complex digital systems influence behavioral patterns, decision-making, and human–technology interaction. In this context, I study the technical foundations of these systems, the psychology of human attachment to AI, trust, safety, action alignment, as well as the social and politico-economic aspects of interaction at the scale of society.',
            'Моя научно-исследовательская деятельность сосредоточена на изучении эпистемологии искусственного интеллекта, анализе когнитивных искажений в восприятии языковых моделей и оценке того, как сложные цифровые системы влияют на паттерны поведения, принятие решений и взаимодействие человека с технологиями. В этом контексте исследуются технические основы систем, психология привязанности человека к ИИ, доверие, безопасность, согласованность действий, а также социальные и политико-экономические аспекты взаимодействия в масштабах общества.'
          ).split('\n').map((paragraph, i) => (
            <p
              key={i}
              className={`max-w-xl font-display font-semibold leading-[1.15] tracking-tight text-[#ece9e4]/60 ${i === 0 ? 'text-lg md:text-2xl' : 'mt-8 text-base md:text-xl'}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <div className="border-t border-[#ece9e4]/15">
            <AnimatePresence mode="popLayout" initial={false}>
              {visiblePapers.map((p, i) => (
                <motion.div
                  key={p.url}
                  data-hover
                  className="group grid min-h-24 grid-cols-[1fr_auto] items-baseline gap-4 border-b border-[#ece9e4]/15 py-6 transition-colors duration-500 hover:bg-[#ece9e4]/5 md:px-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
            </AnimatePresence>
          </div>

          <div className="mt-6 flex flex-col items-end gap-2">
            <button
              type="button"
              aria-label={t('Next publications', 'Следующие публикации')}
              title={t('Next publications', 'Следующие публикации')}
              disabled={!canGoForward}
              onClick={() => setStartIndex((current) => Math.min(papers.length - 4, current + 1))}
              data-hover
              className="flex size-11 items-center justify-center border border-[#ece9e4]/20 text-[#ece9e4] transition-colors hover:border-[#ff4d00] hover:text-[#ff4d00] disabled:pointer-events-none disabled:opacity-25"
            >
              <ArrowDown aria-hidden="true" className="size-4" />
            </button>
            <button
              type="button"
              aria-label={t('Previous publications', 'Предыдущие публикации')}
              title={t('Previous publications', 'Предыдущие публикации')}
              disabled={!canGoBack}
              onClick={() => setStartIndex((current) => Math.max(0, current - 1))}
              data-hover
              className="flex size-11 items-center justify-center border border-[#ece9e4]/20 text-[#ece9e4] transition-colors hover:border-[#ff4d00] hover:text-[#ff4d00] disabled:pointer-events-none disabled:opacity-25"
            >
              <ArrowUp aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
