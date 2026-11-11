import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{v}</span>
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <section id="top" ref={ref} className="relative overflow-hidden md:grid md:min-h-screen md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      {/* Portrait */}
      <div className="relative h-[62vh] overflow-hidden md:h-auto">
        <motion.img
          src="/julia-veresova-portrait.webp"
          alt="Юлия Вересова — Technical Product Owner, AI и автономные системы"
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease }}
          className="absolute inset-0 h-full w-full object-cover object-[50%_20%] grayscale"
          fetchPriority="high"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#0a0a0a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 -mt-24 flex flex-col justify-center px-6 pb-16 md:mt-0 md:px-12 md:pb-12 md:pt-28 lg:px-16">
        <motion.p
          className="font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#ff4d00] md:text-[11px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease }}
        >
          <span translate="no" className="notranslate" lang="en">
            TECHNICAL PRODUCT OWNER · AI · HMI · AUTONOMOUS SYSTEMS
          </span>
        </motion.p>

        <motion.p
          aria-hidden="true"
          className="mt-5 font-display text-[15vw] font-extrabold leading-[0.88] tracking-[-0.04em] md:text-[6.4vw]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1, ease }}
        >
          Юлия<br />Вересова
        </motion.p>

        <motion.h1
          className="mt-7 max-w-xl font-display text-xl font-medium leading-snug text-[#ece9e4]/85 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9, ease }}
        >
          <span className="sr-only">Юлия Вересова — </span>
          Консалтинг по продуктовой стратегии и разработка продуктов полного цикла в{' '}
          <span className="text-[#ff4d00]">AI, HMI и автономных системах</span>
        </motion.h1>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease }}
        >
          <a
            href="https://t.me/julianvrn"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="inline-flex items-center justify-center bg-[#ece9e4] px-6 py-4 text-sm font-semibold text-[#0a0a0a] transition-colors duration-300 hover:bg-[#ff4d00] hover:text-[#ece9e4]"
          >
            Написать в Telegram
          </a>
          <a
            href="mailto:juliavvrn@gmail.com"
            data-hover
            className="inline-flex flex-col items-center justify-center border border-[#ece9e4]/30 px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:border-[#ff4d00] hover:text-[#ff4d00]"
          >
            Написать на почту
            <span className="mt-0.5 font-mono2 text-[11px] font-normal opacity-60">juliavvrn@gmail.com</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
