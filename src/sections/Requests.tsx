import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const requests = [
  { t: 'Диагностика по бортовой телеметрии', d: 'Пишу программу, которая читает логи автономной платформы, проверяет вибрации, питание, связь и навигацию и сама показывает вероятную причину отказа.' },
  { t: 'Работа с нейросетями без утечек', d: 'Разрабатываю шлюз, который скрывает персональные, медицинские и закрытые данные перед отправкой в нейросеть и возвращает их в ответе.' },
  { t: 'Интерфейс оператора и мониторинг', d: 'Создаю пульты, экраны наземных станций и дашборды сигналов с датчиков в реальном времени — понятные даже под нагрузкой.' },
  { t: 'Медицинские сервисы', d: 'Разрабатываю сервисы скрининга стресса и ментального здоровья, генераторы синтетических данных и модули подсказок для врача.' },
  { t: 'Внедрение ИИ в продукт', d: 'Консультирую: где ИИ действительно нужен, как встроить его безопасно, как проверять документацию и поведение ИИ-помощников.' },
]

const bring = ['Краткое описание задачи и ограничений', 'Пример данных или логов (можно обезличенных)', 'Что считается результатом']
const notDo = ['Не обучаю собственные нейросети — использую проверенные решения и подбираю их под задачу', 'Не продаю коробочные продукты — каждая программа пишется под конкретную задачу', 'Не беру проекты без понятного результата']

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
