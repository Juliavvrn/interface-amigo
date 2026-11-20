import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const requests = [
  { t: 'Диагностика по бортовой телеметрии', d: 'Разработка комплекса офлайн-анализа логов автономных платформ: вибродиагностика, энергоаудит, радиоканал и навигация, автоматическое определение первопричины отказа с формированием отчёта.' },
  { t: 'Защищённая работа с нейросетями', d: 'Шлюз деанонимизации: маскирование, псевдонимизация и шифрование персональных, медицинских и закрытых технических данных до отправки во внешние модели и восстановление их в ответе.' },
  { t: 'Интерфейсы управления (HMI)', d: 'Пульты оператора, наземные станции, визуализация потоковых сигналов с датчиков и дашборды мониторинга в реальном времени с минимальной когнитивной нагрузкой.' },
  { t: 'MedTech и NeuroTech', d: 'Платформы скрининга стресса и ментального здоровья, генераторы синтетических медицинских выборок, модули поддержки принятия врачебных решений.' },
  { t: 'Консалтинг по внедрению ИИ', d: 'Аудит продуктовой логики и архитектуры, оценка рисков и этики, автоматизация проверки технической документации и стабилизация поведения ИИ-помощников.' },
]

const bring = ['Краткое описание задачи и ограничений', 'Пример данных или логов (можно обезличенных)', 'Что считается результатом']
const notDo = ['Не занимаюсь обучением и дообучением собственных языковых моделей. Работаю с проверенными решениями и интегрирую их под задачу', 'Не поставляю типовые коробочные продукты. Каждый комплекс проектируется под конкретные требования', 'Не беру проекты без измеримого критерия результата']

export default function Requests() {
  return (
    <section id="requests" className="px-6 py-24 md:px-12 md:py-32 lg:px-16">
      <p className="font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ff4d00]">С чем приходят</p>
      <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">Типичные запросы</h2>

      <div className="mt-12 divide-y divide-[#ece9e4]/10 border-y border-[#ece9e4]/10">
        {requests.map((r, i) => (
          <motion.div
            key={r.t}
            className="grid gap-2 py-6 md:grid-cols-[80px_minmax(0,320px)_1fr] md:gap-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.05, ease }}
          >
            <span className="font-mono2 text-sm text-[#ff4d00]">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="font-display text-lg font-semibold">{r.t}</h3>
            <p className="text-sm leading-relaxed text-[#ece9e4]/60">{r.d}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="border border-[#ff4d00]/40 p-6 md:p-8">
          <h3 className="font-display text-xl font-semibold">Первый разбор задачи</h3>
          <p className="mt-3 text-sm text-[#ece9e4]/60">Чтобы за одну встречу понять задачу, пришлите:</p>
          <ul className="mt-4 space-y-2 text-sm">
            {bring.map((b) => (
              <li key={b} className="flex gap-3"><span className="text-[#ff4d00]">→</span>{b}</li>
            ))}
          </ul>
          <a
            href="https://t.me/julianvrn"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="mt-6 inline-flex bg-[#ece9e4] px-6 py-4 text-sm font-semibold text-[#0a0a0a] transition-colors duration-300 hover:bg-[#ff4d00] hover:text-[#ece9e4]"
          >
            Запросить разбор
          </a>
        </div>
        <div className="border border-[#ece9e4]/10 p-6 md:p-8">
          <h3 className="font-display text-xl font-semibold">Чего я не делаю</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#ece9e4]/70">
            {notDo.map((n) => (
              <li key={n} className="flex gap-3"><span className="text-[#ece9e4]/40">×</span>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
