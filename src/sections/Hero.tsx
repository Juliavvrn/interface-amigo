import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useI18n } from '@/i18n'

const LINE1 = { en: 'Product strategy consulting', ru: 'Консалтинг по продуктовой стратегии' }
const LINE2 = { en: 'and full-cycle product development', ru: 'и разработка продуктов полного цикла' }
const LINE3_PRE = { en: 'in ', ru: 'в ' }

const lineAnim = {
  hidden: { y: '110%' },
  show: (i: number) => ({
    y: '0%',
    transition: { delay: 0.2 + i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-8 pt-28 md:px-10">
      <motion.div style={{ y, opacity }} className="flex flex-1 flex-col justify-between">
        <motion.p
          className="font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ece9e4]/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <span translate="no" className="notranslate" lang="en">
            TECHNICAL PRODUCT OWNER · AI & NEUROTECH · FULL-CYCLE DEVELOPMENT
          </span>
        </motion.p>

        <div className="select-none">
          <h1 className="font-display font-extrabold leading-[0.9] tracking-tighter">
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[4.5vw] md:text-[3.2vw]"
                custom={0}
                variants={lineAnim}
                initial="hidden"
                animate="show"
              >
                {t(LINE1.en, LINE1.ru)}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[4.5vw] md:text-[3.2vw]"
                custom={1}
                variants={lineAnim}
                initial="hidden"
                animate="show"
              >
                {t(LINE2.en, LINE2.ru)}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[4.5vw] md:text-[3.2vw]"
                custom={2}
                variants={lineAnim}
                initial="hidden"
                animate="show"
              >
                {t(LINE3_PRE.en, LINE3_PRE.ru)}
                <span className="text-[#ff4d00]">MedTech, NeuroTech, AI</span>
              </motion.span>
            </span>
          </h1>
        </div>

      </motion.div>
    </section>
  )
}
