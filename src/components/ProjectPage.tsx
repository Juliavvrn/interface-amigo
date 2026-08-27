import { Link, useParams } from 'react-router'
import { motion } from 'framer-motion'
import { getProject, nextProject, pick } from '@/data/content'
import { useI18n } from '@/i18n'
import type { CaseStudyChart, CaseStudyTable, FlowDiagram, FlowNode } from '@/data/content'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Cell, Tooltip } from 'recharts'

function ChartPanel({ chart }: { chart: CaseStudyChart }) {
  const { lang } = useI18n()
  const max = chart.max ?? 100
  const labels = chart.labels.map((l) => pick(l, lang))

  const data = labels.map((label, i) => {
    const entry: Record<string, string | number> = { label }
    chart.series.forEach((s) => {
      entry[pick(s.name, lang)] = s.values[i] ?? 0
    })
    return entry
  })

  const seriesColors = ['#ece9e4', '#bdb8b1', '#77726d']

  return (
    <div className="mt-10 overflow-hidden rounded-lg border border-[#ece9e4]/15 bg-[#ece9e4]/[0.02] p-6">
      <p className="mb-6 font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#ece9e4]">
        {pick(chart.title, lang)}
      </p>
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {chart.type === 'radar' ? (
            <RadarChart data={data}>
              <PolarGrid stroke="#ece9e4" strokeOpacity={0.15} />
              <PolarAngleAxis dataKey="label" tick={{ fill: '#ece9e4', opacity: 0.5, fontSize: 10, fontFamily: 'monospace' }} />
              <PolarRadiusAxis domain={[0, max]} tick={{ fill: '#ece9e4', opacity: 0.3, fontSize: 9 }} stroke="#ece9e4" strokeOpacity={0.1} />
              {chart.series.map((s, si) => (
                <Radar key={si} dataKey={pick(s.name, lang)} stroke={seriesColors[si % seriesColors.length]} fill={seriesColors[si % seriesColors.length]} fillOpacity={0.25} strokeWidth={2} />
              ))}
              <Tooltip contentStyle={{ background: '#0a0a0a', border: '1px solid #ece9e440', borderRadius: '8px', fontSize: '12px', color: '#ece9e4' }} />
            </RadarChart>
          ) : (
            <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20 }}>
              <XAxis type="number" domain={[0, max]} tick={{ fill: '#ece9e4', opacity: 0.4, fontSize: 10 }} stroke="#ece9e4" strokeOpacity={0.1} />
              <YAxis type="category" dataKey="label" tick={{ fill: '#ece9e4', opacity: 0.6, fontSize: 11 }} stroke="#ece9e4" strokeOpacity={0.1} width={140} />
              <Tooltip contentStyle={{ background: '#0a0a0a', border: '1px solid #ece9e440', borderRadius: '8px', fontSize: '12px', color: '#ece9e4' }} cursor={{ fill: '#ece9e4', fillOpacity: 0.05 }} />
              {chart.series.map((s, si) => (
                <Bar key={si} dataKey={pick(s.name, lang)} radius={[0, 4, 4, 0]}>
                  {data.map((_, di) => (
                    <Cell key={di} fill={di === data.length - 1 ? '#ece9e4' : seriesColors[(si + 1) % seriesColors.length]} fillOpacity={di === data.length - 1 ? 0.8 : 0.3} />
                  ))}
                </Bar>
              ))}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function DataTable({ table }: { table: CaseStudyTable }) {
  const { lang } = useI18n()

  return (
    <div className="mt-10 overflow-hidden rounded-lg border border-[#ece9e4]/15 bg-[#ece9e4]/[0.02]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] border-collapse text-left">
          <caption className="border-b border-[#ece9e4]/10 px-5 py-4 text-left font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#ece9e4]">
            {pick(table.title, lang)}
          </caption>
          <thead>
            <tr className="bg-[#ece9e4]/[0.06]">
              {table.columns.map((column, index) => (
                <th key={index} className="border-b border-[#ece9e4]/10 px-5 py-4 font-mono2 text-[10px] uppercase tracking-[0.12em] text-[#ece9e4]/60">
                  {pick(column, lang)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-[#ece9e4]/10 last:border-0 transition-colors hover:bg-[#ece9e4]/[0.04]">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className={`${cellIndex === 0 ? 'font-semibold text-[#ece9e4]' : 'text-[#ece9e4]/65'} px-5 py-4 text-sm leading-relaxed`}>
                    {pick(cell, lang)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

type CaseVariant = 'system' | 'signal' | 'audit' | 'timeline' | 'editorial'

function getCaseVariant(slug: string): CaseVariant {
  if (slug === 'industrial-monitoring') return 'signal'
  if (slug === 'audit-it') return 'audit'
  if (slug === 'clinicscribe') return 'timeline'
  if (slug === 'aiim') return 'editorial'
  return 'system'
}

function Flowchart({ diagram, variant }: { diagram: FlowDiagram; variant: CaseVariant }) {
  const { lang } = useI18n()
  const cols = diagram.columns ?? 1

  const nodeMap = new Map<string, FlowNode>()
  diagram.nodes.forEach((n) => nodeMap.set(n.id, n))

  const incoming = new Map<string, string[]>()
  diagram.edges.forEach((e) => {
    const arr = incoming.get(e.to) ?? []
    arr.push(e.from)
    incoming.set(e.to, arr)
  })

  const layers: string[][] = []
  const placed = new Set<string>()
  let current = diagram.nodes.filter((n) => !incoming.has(n.id)).map((n) => n.id)
  while (current.length > 0) {
    layers.push(current)
    current.forEach((id) => placed.add(id))
    const next: string[] = []
    diagram.edges.forEach((e) => {
      if (placed.has(e.from) && !placed.has(e.to)) {
        const deps = incoming.get(e.to) ?? []
        if (deps.every((d) => placed.has(d)) && !next.includes(e.to)) {
          next.push(e.to)
        }
      }
    })
    current = next
  }
  diagram.nodes.forEach((n) => {
    if (!placed.has(n.id)) layers.push([n.id])
  })

  const flatNodes = layers.flat()
  const isEditorial = variant === 'editorial'
  const isTimeline = variant === 'timeline'
  const isSignal = variant === 'signal'
  const isAudit = variant === 'audit'

  return (
    <div className={`mt-8 ${isEditorial ? 'border-t border-[#ece9e4]/15' : ''}`}>
      <p className="mb-6 font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#ece9e4]/40">
        {pick(diagram.title, lang)}
      </p>
      {isEditorial || isTimeline ? (
        <div className={`relative ${isTimeline ? 'space-y-0 border-l border-[#ece9e4]/45 pl-6 md:pl-10' : ''}`}>
          {flatNodes.map((nodeId, index) => {
            const node = nodeMap.get(nodeId)!
            return (
              <motion.div
                key={nodeId}
                className={`relative grid gap-4 border-t border-[#ece9e4]/15 py-6 md:grid-cols-[56px_1fr] md:gap-8 md:py-8 ${isTimeline ? 'border-t-0 border-b border-[#ece9e4]/15' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
              >
                {isTimeline && <span className="absolute -left-[31px] top-8 h-2.5 w-2.5 rounded-full bg-[#ece9e4] ring-4 ring-[#0a0a0a] md:-left-[51px]" />}
                <span className={`font-mono2 text-[10px] tracking-[0.2em] ${isTimeline ? 'text-[#ece9e4]' : 'text-[#ece9e4]'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <span className="font-display text-xl font-bold tracking-tight text-[#ece9e4] md:text-3xl">
                    {pick(node.label, lang)}
                  </span>
                  {node.sublabel && (
                    <span className="mt-2 block max-w-xl font-mono2 text-[10px] uppercase tracking-[0.15em] text-[#ece9e4]/50">
                      {pick(node.sublabel, lang)}
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      ) : (
        <div className={`space-y-0 ${isSignal ? 'rounded-2xl border border-[#ece9e4]/20 bg-[#ece9e4]/[0.03] p-4 md:p-8' : ''}`}>
          {layers.map((layer, li) => (
            <div key={li}>
              <div className={`flex flex-wrap gap-4 ${cols > 1 ? 'justify-center' : ''}`}>
                {layer.map((nodeId, nodeIndex) => {
                  const node = nodeMap.get(nodeId)!
                  return (
                    <motion.div
                      key={nodeId}
                      className={`flex min-w-[180px] flex-1 flex-col ${isAudit ? 'items-start rounded-none border border-[#ece9e4]/35 bg-[#ece9e4]/[0.05] text-left' : isSignal ? 'items-center rounded-full border border-[#ece9e4]/45 bg-[#ece9e4]/[0.08] text-center' : 'items-center rounded-lg border border-[#ece9e4]/30 bg-[#ece9e4]/[0.04] text-center'} px-5 py-4 md:min-w-[200px]`}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {isAudit && <span className="mb-3 font-mono2 text-[10px] tracking-[0.2em] text-[#ece9e4]">CHECK {String(nodeIndex + 1).padStart(2, '0')}</span>}
                      <span className="font-display text-sm font-bold tracking-tight text-[#ece9e4] md:text-base">
                        {pick(node.label, lang)}
                      </span>
                      {node.sublabel && (
                        <span className="mt-1 font-mono2 text-[10px] uppercase tracking-[0.15em] text-[#ece9e4]/50">
                          {pick(node.sublabel, lang)}
                        </span>
                      )}
                    </motion.div>
                  )
                })}
              </div>
              {li < layers.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className={`h-5 w-5 ${isSignal ? 'text-[#ece9e4]/60' : isAudit ? 'text-[#ece9e4]/60' : 'text-[#ece9e4]/50'}`} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const { lang, t } = useI18n()
  const project = getProject(slug ?? '')

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="font-display text-4xl font-extrabold uppercase">{t('Project not found', 'Проект не найден')}</h1>
        <Link to="/" data-hover className="link-sweep mt-6 font-mono2 text-xs uppercase tracking-[0.3em] text-[#ece9e4]">
          ← {t('Back', 'Назад')}
        </Link>
      </main>
    )
  }

  const next = nextProject(project.slug)
  const caseVariant = getCaseVariant(project.slug)

  return (
    <main className="pt-32 md:pt-40">
      <div className="px-6 md:px-10">
        <Link to="/" data-hover className="link-sweep font-mono2 text-[11px] uppercase tracking-[0.3em] text-[#ece9e4]/50">
          ← {t('Back', 'Назад')}
        </Link>

        <motion.h1
          className="mt-8 font-display text-[8vw] font-extrabold uppercase leading-[0.9] tracking-tighter md:text-[5vw]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {pick(project.title, lang)}
        </motion.h1>

        <motion.div
          className="mt-10 grid grid-cols-2 gap-8 border-t border-[#ece9e4]/15 pt-8 md:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div>
            <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#ece9e4]/40">{t('Year', 'Год')}</p>
            <p className="mt-2 text-sm text-[#ece9e4]/80">{project.year}</p>
          </div>
          <div>
            <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#ece9e4]/40">{t('Sector', 'Сфера')}</p>
            <p className="mt-2 text-sm text-[#ece9e4]/80">{pick(project.domain, lang)}</p>
          </div>
          <div>
            <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#ece9e4]/40">{t('Stack', 'Стек')}</p>
            <p className="mt-2 text-sm text-[#ece9e4]/80">{pick(project.stack, lang)}</p>
          </div>
          <div>
            <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#ece9e4]/40">{t('Responsibility', 'Область ответственности')}</p>
            <p className="mt-2 text-sm text-[#ece9e4]/80">{project.deliverables.map((d) => pick(d, lang)).join(', ')}</p>
          </div>
        </motion.div>

        {project.link && (
          <motion.div
            className="mt-6 flex flex-col gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="link-sweep inline-flex w-fit items-center gap-2 font-mono2 text-[11px] uppercase tracking-[0.3em] text-[#ece9e4] underline decoration-[#ece9e4]/40 underline-offset-4 transition-colors hover:decoration-[#ece9e4]"
            >
              {project.link.replace(/^https?:\/\//, '')}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            {lang === 'ru' && (
              <p className="font-mono2 text-[10px] tracking-[0.15em] text-[#ece9e4]/40">
                (проект базируется в Финляндии; при доступе из России потребуется включённый VPN)
              </p>
            )}
          </motion.div>
        )}
      </div>

      <div className="grid gap-10 px-6 py-20 md:grid-cols-[1fr_2fr] md:px-10 md:py-28">
        <p className="font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ece9e4]">
          {t('The brief', 'Задача')}
        </p>
        <div className="max-w-3xl space-y-6">
          {project.description.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed text-[#ece9e4]/80 md:text-xl">
              {pick(para, lang)}
            </p>
          ))}
        </div>
      </div>

      {project.caseStudy?.map((section, si) => {
        const sectionLabel = pick(section.label, lang).toLowerCase()
        const isApplications = sectionLabel.includes('application') || sectionLabel.includes('сценар')
        const isEditorial = caseVariant === 'editorial'
        const isTimeline = caseVariant === 'timeline'
        const isAudit = caseVariant === 'audit'

        return (
        <div
          key={si}
          className="grid gap-10 border-t border-[#ece9e4]/15 px-6 py-20 md:grid-cols-[1fr_2fr] md:px-10 md:py-28"
        >
          <p className="font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ece9e4]">
            {pick(section.label, lang)}
          </p>
          <div className="max-w-3xl space-y-8">
            {section.paragraphs.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-[#ece9e4]/80 md:text-xl">
                {pick(para, lang)}
              </p>
            ))}

            {section.findings?.map((finding, fi) => (
              <motion.div
                key={fi}
                className={`${isEditorial ? 'border-t border-[#ece9e4]/15 bg-transparent py-6 md:py-8' : isTimeline ? 'border-l-2 border-[#ece9e4]/45 bg-[#ece9e4]/[0.035] p-6 md:p-8' : isAudit ? 'rounded-none border border-[#ece9e4]/25 bg-[#ece9e4]/[0.035] p-6 md:p-8' : 'rounded-lg border border-[#ece9e4]/12 bg-[#ece9e4]/[0.025] p-6 md:p-8'} transition-colors hover:border-[#ece9e4]/50 hover:bg-[#ece9e4]/[0.06]`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: fi * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="font-display text-xl font-bold tracking-tight text-[#ece9e4] md:text-2xl">
                  {pick(finding.title, lang)}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#ece9e4]/70">
                  {pick(finding.body, lang)}
                </p>
                {finding.quote && (
                  <blockquote className="mt-5 border-t border-[#ece9e4]/15 pt-5">
                    <p className="text-lg italic leading-relaxed text-[#ece9e4]/90">
                      "{pick(finding.quote, lang)}"
                    </p>
                    {finding.quoteAuthor && (
                      <cite className="mt-3 block font-mono2 text-[11px] not-italic tracking-[0.2em] text-[#ece9e4]">
                        {pick(finding.quoteAuthor, lang)}
                      </cite>
                    )}
                  </blockquote>
                )}
              </motion.div>
            ))}

            {section.tables?.map((table, ti) => (
              <DataTable key={ti} table={table} />
            ))}

            {section.charts?.map((chart, ci) => (
              <ChartPanel key={ci} chart={chart} />
            ))}

            {section.diagram && <Flowchart diagram={section.diagram} variant={caseVariant} />}

            {section.modules && section.modules.length > 0 && (
              <div className={isApplications || isAudit ? 'grid gap-4 sm:grid-cols-2' : isEditorial ? 'space-y-0' : 'space-y-6'}>
                {section.modules.map((mod, mi) => (
                  <motion.div
                    key={mi}
                    className={`${isEditorial ? 'border-t border-[#ece9e4]/15 bg-transparent p-6 md:p-8' : isTimeline ? 'border-l-2 border-[#ece9e4]/45 bg-[#ece9e4]/[0.035] p-6 md:p-8' : isAudit ? 'rounded-none border border-[#ece9e4]/25 bg-[#ece9e4]/[0.035] p-6 md:p-8' : isApplications ? 'group relative overflow-hidden border-[#ece9e4]/25 bg-[#ece9e4]/[0.035] p-6 hover:-translate-y-1 hover:border-[#ece9e4]/60 hover:bg-[#ece9e4]/[0.08] md:p-8' : 'border-[#ece9e4]/10 bg-[#ece9e4]/[0.03] p-6 md:p-8'} rounded-lg border transition-all duration-300`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: mi * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {isApplications && (
                      <span className="mb-4 block font-mono2 text-[10px] tracking-[0.25em] text-[#ece9e4]/65">
                        {String(mi + 1).padStart(2, '0')}
                      </span>
                    )}
                    <h3 className="font-display text-xl font-bold tracking-tight text-[#ece9e4] md:text-2xl">
                      {pick(mod.title, lang)}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-[#ece9e4]/70">
                      {pick(mod.body, lang)}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
        )
      })}

      {project.metrics && project.metrics.length > 0 && (
        <div className="border-t border-[#ece9e4]/15 px-6 py-20 md:px-10 md:py-28">
          <p className="mb-12 font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ece9e4]">
            {t('Impact', 'Результат в цифрах')}
          </p>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[#ece9e4]/15 md:grid-cols-3">
            {project.metrics.map((metric, mi) => (
              <motion.div
                key={mi}
                className="bg-[#ece9e4]/[0.02] p-6 md:p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: mi * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-3xl font-extrabold tracking-tight text-[#ece9e4] md:text-5xl">
                  {pick(metric.value, lang)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#ece9e4]/50 md:text-base">
                  {pick(metric.label, lang)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <Link
        to={`/works/${next.slug}`}
        data-hover
        className="group block border-t border-[#ece9e4]/15 px-6 py-16 md:px-10 md:py-24"
      >
        <p className="font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#ece9e4]/50">
          {t('Next project', 'Следующий проект')}
        </p>
        <span className="mt-4 block font-display text-[7vw] font-extrabold uppercase leading-[0.9] tracking-tighter transition-colors duration-500 group-hover:text-[#ece9e4] md:text-[4vw]">
          {pick(next.title, lang)} →
        </span>
      </Link>
    </main>
  )
}
