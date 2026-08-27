import { useI18n } from '@/i18n'

export default function Marquee() {
  const { t } = useI18n()
  const items = [
    t('Branding', 'Брендинг'),
    t('Web Design', 'Веб-дизайн'),
    t('Motion', 'Моушн'),
    t('3D & CGI', '3D и CGI'),
    t('Art Direction', 'Арт-дирекшн'),
    t('Creative Dev', 'Креативная разработка'),
  ]
  const row = [...items, ...items]
  return (
    <section className="overflow-hidden border-y border-[#ece9e4]/10 py-5">
      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex w-max items-center">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="font-display text-2xl font-bold uppercase tracking-tight text-[#ece9e4]/90 md:text-4xl">
                  {item}
                </span>
                <span className="mx-8 text-xl text-[#ff4d00] md:mx-12">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
