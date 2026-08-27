import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useI18n } from '@/i18n'

const line1 = 'Building complex systems'
const line2 = 'in MedTech, NeuroTech & AI.'

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
          TECHNICAL PRODUCT OWNER · RUSSIA / FINLAND
        </motion.p>

        <div className="select-none">
          <h1 className="font-display font-extrabold leading-[0.9] tracking-tighter">
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[8vw] md:text-[6vw]"
                custom={0}
                variants={lineAnim}
                initial="hidden"
                animate="show"
              >
                {line1}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[8vw] text-[#ff4d00] md:text-[6vw]"
                custom={1}
                variants={lineAnim}
                initial="hidden"
                animate="show"
              >
                {line2}
              </motion.span>
            </span>
          </h1>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.p
            className="max-w-md text-sm leading-relaxed text-[#ece9e4]/70 md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {t(
              'Product strategy consulting, database architecture design and full-cycle delivery\nfrom idea to production.',
              'Консалтинг по продуктовой стратегии, проектирование архитектуры баз данных и запуск решений полного цикла\nот идеи до продакшена.'
            )}
          </motion.p>

        </div>
      </motion.div>
    </section>
  )
}
