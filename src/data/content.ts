import work1 from '@/assets/work1.jpg'
import work2 from '@/assets/work2.jpg'
import work4 from '@/assets/work4.jpg'
import work5 from '@/assets/work5.jpg'
import work6 from '@/assets/work6.jpg'
import breakImg from '@/assets/break.jpg'
import type { Lang } from '@/i18n'

export interface Localized {
  en: string
  ru: string
}

export interface CaseStudyFinding {
  title: Localized
  body: Localized
  quote?: Localized
  quoteAuthor?: Localized
}

export interface CaseStudyModule {
  title: Localized
  body: Localized
}

export interface CaseStudyTable {
  title: Localized
  columns: Localized[]
  rows: Localized[][]
}

export interface FlowNode {
  id: string
  label: Localized
  sublabel?: Localized
}

export interface FlowEdge {
  from: string
  to: string
  label?: Localized
}

export interface FlowDiagram {
  title: Localized
  nodes: FlowNode[]
  edges: FlowEdge[]
  columns?: number
}

export interface CaseStudyChart {
  type: 'radar' | 'bar'
  title: Localized
  labels: Localized[]
  series: { name: Localized; values: number[] }[]
  max?: number
}

export interface CaseStudySection {
  label: Localized
  paragraphs: Localized[]
  findings?: CaseStudyFinding[]
  modules?: CaseStudyModule[]
  tables?: CaseStudyTable[]
  charts?: CaseStudyChart[]
  diagram?: FlowDiagram
}

export interface ProjectMetric {
  value: Localized
  label: Localized
}

export interface Project {
  slug: string
  title: Localized
  category: Localized
  domain: Localized
  stack: Localized
  year: string
  img: string
  link?: string
  deliverables: Localized[]
  description: Localized[]
  gallery: string[]
  caseStudy?: CaseStudySection[]
  metrics?: ProjectMetric[]
}

function L(en: string, ru: string): Localized {
  return { en, ru }
}

const projectOrder: Record<string, number> = {
  'industrial-monitoring': 0,
  'aiim': 1,
  'clinicscribe': 2,
  'audit-it': 3,
  'chromatic-drift': 4,
}

const _projects: Project[] = [
  {
    slug: 'chromatic-drift',
    title: L('SaaS for Project Risk Management', 'SaaS-решение для управления рисками проекта'),
    category: L('B2B SaaS', 'B2B SaaS'),
    domain: L('B2B SaaS / Risk Management', 'B2B SaaS / Risk Management'),
    stack: L('React · Supabase · PostgreSQL · Agentic Workflows', 'React · Supabase · PostgreSQL · Agentic Workflows'),
    year: '2024',
    img: work1,
    deliverables: [
      L('Product Strategy', 'Продуктовая стратегия'),
      L('CJM', 'CJM'),
      L('Technical Spec', 'ТЗ'),
      L('DB Architecture', 'Архитектура БД'),
      L('MVP Delivery', 'Сдача MVP'),
    ],
    description: [
      L(
        'The goal was to scale an early-stage concept into a market-ready platform. I led the transition from foundational research to a development-ready product, collapsing a manual, 5-hour document retrieval process into a single streamlined step. A developer audit later confirmed the prototype cut an estimated 35–45% off development time compared to a build-from-scratch approach. The product shipped to development with a working foundation.',
        'Я провела переход от ранней концепции к готовому к рынку продукту. Ручной процесс поиска документов длительностью 5 часов был сокращён до одного шага. Аудит разработчика подтвердил, что прототип сократил время разработки на 35–45% по сравнению с созданием с нуля. Продукт ушёл в разработку с рабочим фундаментом.'
      ),
    ],
    gallery: [work4, work2],
    metrics: [
      { value: L('5h → 5min', '5ч → 5мин'), label: L('Time to draft a formal response', 'Время подготовки официального ответа') },
      { value: L('2 days → 1 click', '2 дня → 1 клик'), label: L('Issue origin tracing', 'Отслеживание источника проблемы') },
      { value: L('35–45%', '35–45%'), label: L('Development time saved vs build-from-scratch', 'Сокращение времени разработки') },
      { value: L('16 → 1', '16 → 1'), label: L('Competitors analyzed, gap found', 'Конкурентов проанализировано, найден разрыв') },
    ],
    caseStudy: [
      {
        label: L('The business context', 'Бизнес-контекст'),
        paragraphs: [
          L(
            'Project management generates enormous volumes of documentation, contracts, correspondence, status reports, risk registers, compliance records, regulatory notices, spread across every project, every team, and every phase of a delivery cycle. When something goes wrong, or when a stakeholder sends a formal letter demanding answers, the people responsible for responding have to manually search through that documentation to build their case. This takes days. The response goes out weeks later.',
            'Управление проектами генерирует огромные объёмы документации: договоры, переписку, отчёты о статусе, реестры рисков, отчёты о соответствии, нормативные уведомления, распределённые по каждому проекту, каждой команде и каждой фазе цикла поставки. Когда что-то идёт не так или стейкхолдер отправляет официальный запрос, ответственные лица вынуждены вручную искать нужные документы. Это занимает дни. Ответ отправляется неделями позже.'
          ),
          L(
            'The consequences compound. A project team that can\'t demonstrate a complete, traceable record is exposed legally and operationally, the same problems keep recurring with no institutional mechanism for learning.',
            'Последствия накапливаются. Команда проекта, не способная представить полную прослеживаемую историю, подвергается юридическим и операционным рискам. Те же проблемы повторяются без институционального механизма обучения.'
          ),
        ],
      },
      {
        label: L('Research and discovery', 'Исследование'),
        paragraphs: [
          L(
            'I ran moderated user interviews with senior professionals from a project management firm with decades of experience delivering complex, multi-stakeholder programs. The interviews surfaced two distinct and equally damaging pain points:',
            'Я провела модератируемые интервью с ведущими специалистами проектной фирмы с многолетним опытом реализации сложных многосторонних программ. Интервью выявили две различные и одинаково болезненные проблемы:'
          ),
        ],
        findings: [
          {
            title: L('Finding #1: Response drafting took 5 hours per formal letter.', 'Вывод №1: Подготовка ответа занимала 5 часов на каждое официальное письмо.'),
            body: L(
              'The Legal Manager described spending five hours researching prior correspondence, contracts, meeting minutes, and status reports before she could draft a single formal response.',
              'Юрисконсульт описала, как тратила пять часов на поиск предыдущей переписки, договоров, протоколов встреч и отчётов о статусе, прежде чем составить один официальный ответ.'
            ),
            quote: L(
              'The tool should allow us to act as a filter for information, which is a strategic role. Deciding what to include and what to exclude.',
              'Инструмент должен позволить нам выступать фильтром информации, это стратегическая роль. Решать, что включить, а что исключить.'
            ),
            quoteAuthor: L('FC, Business Legal Manager', 'FC, корпоративный юрисконсульт'),
          },
          {
            title: L('Finding #2: Issue origins took 2 days to trace.', 'Вывод №2: Источник проблемы отслеживался 2 дня.'),
            body: L(
              'The Contractual Manager described spending two days reconstructing the history of a problem before he could understand its full impact on the project timeline and contract.',
              'Менеджер по контрактам описал, как тратил два дня на восстановление истории проблемы, прежде чем понять её полное влияние на график проекта и договор.'
            ),
            quote: L(
              'Not having clarity about the beginning, middle, and end of things creates the other problems. If you don\'t have complete mastery of the problem, you may not be able to know how it impacts over time.',
              'Отсутствие ясности о начале, середине и конце событий создаёт другие проблемы. Если нет полного понимания проблемы, невозможно знать, как она влияет с течением времени.'
            ),
            quoteAuthor: L('RM, Contractual Administration Manager', 'RM, менеджер по администрированию контрактов'),
          },
        ],
      },
      {
        label: L('Competitor analysis', 'Анализ конкурентов'),
        paragraphs: [
          L(
            'In parallel, I conducted a full competitor analysis across 16 platforms. All five direct competitors had document AI and conversational agents, none tied those capabilities into an executable workflow. That gap was the product\'s opening.',
            'Параллельно я провела полный анализ конкурентов по 16 платформам. Все пять прямых конкурентов имели ИИ для документов и разговорных агентов, но никто не связал эти возможности в исполняемый рабочий процесс. Этот разрыв стал возможностью для продукта.'
          ),
        ],
        charts: [
          {
            type: 'bar',
            title: L('Capability coverage across 16 platforms', 'Покрытие возможностей по 16 платформам'),
            labels: [L('Document AI', 'ИИ для документов'), L('Conversational agent', 'Разговорный агент'), L('Workflow execution', 'Исполнение процессов'), L('Issue tracing', 'Отслеживание проблем'), L('Knowledge graph', 'Граф знаний'), L('Cross-project learning', 'Обучение между проектами')],
            series: [{ name: L('Platforms with capability', 'Платформы с возможностью'), values: [14, 12, 3, 2, 5, 1] }],
            max: 16,
          },
        ],
      },
      {
        label: L('Key decisions', 'Ключевые решения'),
        paragraphs: [],
        findings: [
          {
            title: L('Two user types, one product.', 'Два типа пользователей, один продукт.'),
            body: L(
              'The two pain points, drafting formal responses and tracing issue origins, were experienced through completely different lenses, but ran on the same underlying data: the same contracts, the same project documentation, the same issue history. I built distinct views and workflows for both user types, unified by a shared data model. That single decision is what collapsed the 5-hour process into a single streamlined step.',
              'Две проблемы, подготовка официальных ответов и отслеживание источников, рассматривались через совершенно разные призмы, но опирались на одни и те же данные: те же договоры, та же проектная документация, та же история проблем. Я создала отдельные представления и рабочие процессы для обоих типов пользователей, объединённые общей моделью данных. Именно это решение сократило 5-часовой процесс до одного шага.'
            ),
          },
          {
            title: L('The AI agent executes workflows and completes structured tasks.', 'ИИ-агент исполняет рабочие процессы и выполняет структурированные задачи.'),
            body: L(
              'Every one of the five direct competitors had conversational AI for document retrieval. That was the table stake, not the differentiator. I designed the AI Agent as an orchestrator: it takes a query, cross-references live issue data, and produces a structured, actionable output, a draft response, a traced issue timeline, a linked clause. The distinction between retrieving information and completing a step in a workflow became the product\'s primary differentiator.',
              'Все пять прямых конкурентов имели разговорный ИИ для поиска документов. Это был базовый уровень. Я спроектировала ИИ-агента как оркестратор: он принимает запрос, перекрёстно сопоставляет данные о проблемах и выдаёт структурированный результат: черновик ответа, хронологию проблемы, связанный пункт договора. Различие между поиском информации и выполнением шага рабочего процесса стало главным отличием продукта.'
            ),
          },
          {
            title: L('Scope to the two most expensive problems.', 'Фокус на двух самых дорогих проблемах.'),
            body: L(
              'Cross-project organisational learning was validated as genuine but explicitly deferred to a future phase. A tighter MVP was a faster MVP, and a faster MVP generated the data the future roadmap depended on.',
              'Организационное обучение между проектами было подтверждено как реальное, но явно отложено на будущую фазу. Более узкий MVP означает более быстрый MVP, а быстрый MVP генерировал данные, от которых зависел будущий план.'
            ),
          },
        ],
      },
      {
        label: L('System architecture', 'Архитектура системы'),
        paragraphs: [
          L(
            'The platform is structured around three interconnected modules sharing a unified data layer. Project documentation flows in from multiple sources, is parsed and indexed, and then powers both the issue tracking lifecycle and the AI agent\'s workflow execution.',
            'Платформа построена вокруг трёх взаимосвязанных модулей, использующих единый слой данных. Проектная документация поступает из множества источников, обрабатывается и индексируется, а затем обеспечивает как жизненный цикл отслеживания проблем, так и выполнение рабочих процессов ИИ-агентом.'
          ),
        ],
        diagram: {
          title: L('Module architecture', 'Архитектура модулей'),
          columns: 3,
          nodes: [
            { id: 'sources', label: L('Data Sources', 'Источники данных'), sublabel: L('Contracts · Reports · Risk Registers', 'Договоры · Отчёты · Реестры рисков') },
            { id: 'pipeline', label: L('Ingestion & Indexing', 'Приём и индексация'), sublabel: L('Parse · Embed · Link', 'Парсинг · Векторы · Связи') },
            { id: 'unified', label: L('Unified Data Layer', 'Единый слой данных'), sublabel: L('Shared knowledge graph', 'Общий граф знаний') },
            { id: 'issues', label: L('Issues & Blockers', 'Проблемы и блокеры'), sublabel: L('Detection → Resolution', 'Обнаружение → Решение') },
            { id: 'dashboard', label: L('Dashboard', 'Панель мониторинга'), sublabel: L('KPIs · Visualizations', 'KPI · Визуализации') },
            { id: 'agent', label: L('AI Agent', 'ИИ-агент'), sublabel: L('Workflow orchestrator', 'Оркестратор процессов') },
          ],
          edges: [
            { from: 'sources', to: 'pipeline' },
            { from: 'pipeline', to: 'unified' },
            { from: 'unified', to: 'issues' },
            { from: 'unified', to: 'dashboard' },
            { from: 'unified', to: 'agent' },
          ],
        },
      },
      {
        label: L('AI agent workflow', 'Рабочий процесс ИИ-агента'),
        paragraphs: [
          L(
            'The AI Agent operates as a workflow orchestrator. When a user submits a request, draft a response, trace an issue, link a clause, the agent follows a deterministic pipeline: retrieve relevant documents from the knowledge graph, cross-reference against live issue data, synthesize a structured output, and present it for human review.',
            'ИИ-агент работает как оркестратор рабочих процессов. Когда пользователь отправляет запрос (составить ответ, отследить проблему, связать пункт), агент следует детерминированному конвейеру: извлекает релевантные документы из графа знаний, сопоставляет с актуальными данными о проблемах, синтезирует структурированный результат и представляет его для проверки человеком.'
          ),
        ],
        diagram: {
          title: L('Agent request pipeline', 'Конвейер обработки запроса'),
          columns: 1,
          nodes: [
            { id: 'input', label: L('User Request', 'Запрос пользователя'), sublabel: L('Draft response · Trace issue · Link clause', 'Составить ответ · Отследить проблему · Связать пункт') },
            { id: 'retrieve', label: L('Retrieve', 'Извлечение'), sublabel: L('Knowledge graph lookup', 'Поиск в графе знаний') },
            { id: 'crossref', label: L('Cross-reference', 'Сопоставление'), sublabel: L('Live issue data', 'Актуальные данные о проблемах') },
            { id: 'synthesize', label: L('Synthesize', 'Синтез'), sublabel: L('Structured output generation', 'Генерация структурированного результата') },
            { id: 'review', label: L('Human Review', 'Проверка человеком'), sublabel: L('Approve · Edit · Reject', 'Утвердить · Редактировать · Отклонить') },
          ],
          edges: [
            { from: 'input', to: 'retrieve' },
            { from: 'retrieve', to: 'crossref' },
            { from: 'crossref', to: 'synthesize' },
            { from: 'synthesize', to: 'review' },
          ],
        },
      },
      {
        label: L('What was delivered', 'Результат'),
        paragraphs: [
          L(
            'A fully working React prototype spanning three core modules, AI Agent, Issues & Blockers, and the main Dashboard, designed around more than ten real-world workflows for two distinct user types. It shipped with a foundational, scalable design system behind it. The product is now in active development with the prototype as its foundation.',
            'Полностью рабочий прототип на React, охватывающий три ключевых модуля: ИИ-агент, Проблемы и блокеры, и главную панель мониторинга. Прототип спроектирован вокруг более чем десяти реальных рабочих процессов для двух типов пользователей. Он поставляется с фундаментальной масштабируемой дизайн-системой. Продукт сейчас находится в активной разработке на базе прототипа.'
          ),
        ],
        charts: [
          {
            type: 'bar',
            title: L('Before vs after: time to draft a formal response', 'До и после: время подготовки официального ответа'),
            labels: [L('Manual process', 'Ручной процесс'), L('With prototype', 'С прототипом')],
            series: [{ name: L('Hours', 'Часы'), values: [5, 0.08] }],
            max: 6,
          },
        ],
        modules: [
          {
            title: L('Issues & Blockers', 'Проблемы и блокеры'),
            body: L(
              'The full lifecycle of a project risk event, from first detection to resolution. Issues are surfaced automatically from project documentation and linked to their origin clauses and prior correspondence. Each issue carries a full activity timeline and a direct connection to the people responsible for resolving it, so nothing disappears into email threads, and no one loses context when the team changes.',
              'Полный жизненный цикл события проектного риска, от первого обнаружения до решения. Проблемы выявляются автоматически из проектной документации и связываются с исходными пунктами договоров и предыдущей перепиской. Каждая проблема несёт полную хронологию активности и прямую связь с ответственными лицами. Ничто не теряется в почтовых цепочках, и никто не теряет контекст при смене команды.'
            ),
          },
          {
            title: L('Dashboard', 'Панель мониторинга'),
            body: L(
              'A real-time project health view built for the people who carry accountability across the whole program. KPI tracking, custom data visualisations, and a Knowledge Graph that maps relationships across issues, documents, and contracts, so a project manager can see what is happening, what it connects to, and what it means for the timeline.',
              'Панель здоровья проекта в реальном времени для тех, кто несёт ответственность за всю программу. Отслеживание KPI, кастомные визуализации данных и граф знаний, отображающий связи между проблемами, документами и договорами. Менеджер проекта видит происходящее, его связи и влияние на график.'
            ),
          },
          {
            title: L('AI Agent', 'ИИ-агент'),
            body: L(
              'The product\'s core differentiator. The Agent completes steps in a workflow. Ask it to draft a formal response to a stakeholder letter: it cross-references the project\'s contract clauses, retrieves relevant prior correspondence, and produces a structured draft. Ask it to trace an issue: it maps the issue\'s origin and timeline and flags its contractual implications. Adjustable response styles, cross-referenced outputs, and a history panel that turns every past query into institutional knowledge.',
              'Главное отличие продукта. Агент выполняет шаги рабочего процесса. Попросите его составить официальный ответ на письмо стейкхолдера: он сопоставляет пункты договора, извлекает предыдущую переписку и создаёт структурированный черновик. Попросите отследить проблему: он строит хронологию и отмечает договорные последствия. Настраиваемые стили ответа, перекрёстные результаты и панель истории, превращающая каждый запрос в институциональное знание.'
            ),
          },
        ],
      },
    ],
  },
  {
    slug: 'industrial-monitoring',
    title: L('AI PLATFORM FOR SYNTHETIC RESEARCH', 'AI-ПЛАТФОРМА ДЛЯ СИНТЕТИЧЕСКИХ ИССЛЕДОВАНИЙ'),
    category: L('B2B SaaS', 'B2B SaaS'),
    domain: L('B2B SaaS / Synthetic Research', 'B2B SaaS / Synthetic Research'),
    stack: L('TanStack Start · React 19 · Supabase · pgvector · Gemini', 'TanStack Start · React 19 · Supabase · pgvector · Gemini'),
    year: '2026',
    img: work2,
    deliverables: [
      L('Product Strategy', 'Продуктовая стратегия'),
      L('CJM', 'CJM'),
      L('Technical Spec', 'ТЗ'),
      L('DB Architecture', 'Архитектура БД'),
      L('MVP Delivery', 'Сдача MVP'),
    ],
    description: [
      L(
        'A B2B SaaS platform for running synthetic user research at the speed of a product team. It generates a panel of AI participants, runs them through a structured interview, and turns the conversation into an auditable report, compressing a research cycle from weeks to minutes while keeping the methodology transparent.',
        'B2B SaaS-платформа для синтетических пользовательских исследований со скоростью продуктовой команды. Она создаёт панель ИИ-респондентов, проводит их через структурированное интервью и превращает диалог в проверяемый отчёт, сокращая исследовательский цикл с недель до минут, сохраняя методологию прозрачной.'
      ),
      L(
        'I designed and developed the product as a complete workflow: from project setup and study planning to respondent generation, live field observation, evidence-based insights, and Markdown / HTML export. The result is a research operating system with explicit states, traceable data, and human review at the points where judgment matters.',
        'Я спроектировала и разработала продукт как цельный рабочий процесс: от создания проекта и планирования исследования до генерации респондентов, наблюдения за полевым режимом в реальном времени, выводов на основе данных и экспорта в Markdown / HTML. Результат: исследовательская операционная система с явными состояниями, прослеживаемыми данными и проверкой человеком там, где важна экспертная оценка.'
      ),
    ],
    gallery: [work5, work4],
    metrics: [
      { value: L('Weeks → 30 min', 'Недели → 30 мин'), label: L('Time to first insight', 'Время до первых выводов') },
      { value: L('0–100', '0–100'), label: L('Credibility score per respondent', 'Оценка достоверности каждого респондента') },
      { value: L('OCEAN', 'OCEAN'), label: L('Trait calibration against population norms', 'Калибровка черт по нормам популяции') },
      { value: L('Markdown + HTML', 'Markdown + HTML'), label: L('Auditable report export', 'Экспорт проверяемого отчёта') },
    ],
    caseStudy: [
      {
        label: L('Why it exists', 'Зачем это нужно'),
        paragraphs: [
          L(
            'Traditional respondent recruitment takes two to four weeks, costs money, and creates a difficult trade-off: teams either wait for real interviews or move forward with a small, expensive sample. The platform addresses the early discovery gap, the moment when a product team needs directional evidence before committing time and budget to live research.',
            'Традиционный набор респондентов занимает от двух до четырёх недель, стоит дорого и создаёт сложный выбор: команда либо ждёт реальные интервью, либо движется дальше с небольшой и дорогой выборкой. Платформа закрывает пробел на раннем этапе discovery, момент, когда продуктовой команде нужны ориентиры до того, как вкладывать время и бюджет в живое исследование.'
          ),
          L(
            'The platform is designed for Product Managers, UX Researchers, agencies, consulting teams, and marketing specialists. It helps them test a hypothesis, compare reactions, find language patterns, and prepare a stronger brief for human interviews, while keeping every generated answer tied to a persona, a prompt, a model, and a study context.',
            'Платформа рассчитана на продакт-менеджеров, UX-исследователей, агентства, консалтинговые команды и маркетологов. Она помогает проверить гипотезу, сравнить реакции, найти языковые паттерны и подготовить более сильный бриф для живых интервью, при этом каждый сгенерированный ответ связан с персоной, промптом, моделью и контекстом исследования.'
          ),
        ],
        findings: [
          {
            title: L('From “generate personas” to “audit the evidence”.', 'От «сгенерировать персон» к «проверить доказательства».'),
            body: L(
              'The central product decision was to make credibility visible. Synthetic participants are presented with transparent scoring. Their answers are scored, challenged, and reported with realism, credibility, flag rate, and panel diversity metrics. The product makes uncertainty part of the interface, visible and auditable.',
              'Ключевым продуктовым решением было сделать достоверность видимой. Синтетические респонденты сопровождаются прозрачной оценкой. Их ответы оцениваются, проверяются и сопровождаются метриками реалистичности, достоверности, доли флагов и разнообразия панели. Продукт делает неопределённость частью интерфейса.'
            ),
          },
          {
            title: L('The output is a decision tool for the team.', 'Результат: инструмент для принятия решений.'),
            body: L(
              'The report agent extracts findings, representative quotes, recommendations, and a quality assessment from the study. A researcher can follow a conclusion back to the interview context and the underlying source chunks, then export a readable report for the wider team.',
              'Репорт-агент извлекает из исследования выводы, характерные цитаты, рекомендации и оценку качества. Исследователь может вернуться от вывода к контексту интервью и исходным фрагментам, а затем экспортировать понятный отчёт для всей команды.'
            ),
          },
        ],
      },
      {
        label: L('Product mechanics', 'Механика продукта'),
        paragraphs: [
          L(
            'A study moves through a controlled sequence. The researcher defines the objective and interview structure, generates a panel, runs the interviews, audits weak answers, and only then turns the evidence into a report. Each transition is explicit, so an empty or half-generated state cannot silently look complete.',
            'Исследование проходит через контролируемую последовательность. Исследователь задаёт цель и структуру интервью, генерирует панель, запускает интервью, проверяет слабые ответы и только после этого превращает данные в отчёт. Каждый переход явный, поэтому пустое или частично сгенерированное состояние не может незаметно выглядеть завершённым.'
          ),
        ],
        diagram: {
          title: L('Study lifecycle', 'Жизненный цикл исследования'),
          columns: 1,
          nodes: [
            { id: 'draft', label: L('Draft', 'Черновик'), sublabel: L('Objective · audience · interview plan', 'Цель · аудитория · план интервью') },
            { id: 'planned', label: L('Planned', 'Запланировано'), sublabel: L('Methodology saved', 'Методология сохранена') },
            { id: 'indexed', label: L('Indexed', 'Проиндексировано'), sublabel: L('Source material available to the agents', 'Исходные материалы доступны агентам') },
            { id: 'panel', label: L('Panel Ready', 'Панель готова'), sublabel: L('Synthetic respondents generated', 'Синтетические респонденты созданы') },
            { id: 'interviewing', label: L('Interviewing', 'Интервью'), sublabel: L('Live conversations and follow-ups', 'Живые диалоги и уточнения') },
            { id: 'audited', label: L('Audited', 'Проверено'), sublabel: L('Realism and credibility checks', 'Проверка реалистичности и достоверности') },
            { id: 'reported', label: L('Reported', 'Отчёт готов'), sublabel: L('Findings · quotes · recommendations', 'Выводы · цитаты · рекомендации') },
            { id: 'archived', label: L('Archived', 'Архив'), sublabel: L('Immutable study snapshot', 'Неизменяемый снимок исследования') },
          ],
          edges: [
            { from: 'draft', to: 'planned' },
            { from: 'planned', to: 'indexed' },
            { from: 'indexed', to: 'panel' },
            { from: 'panel', to: 'interviewing' },
            { from: 'interviewing', to: 'audited' },
            { from: 'audited', to: 'reported' },
            { from: 'reported', to: 'archived' },
          ],
        },
      },
      {
        label: L('System architecture', 'Архитектура системы'),
        paragraphs: [
          L(
            'The application combines a server-rendered React experience with a Supabase data layer and server-only AI access. The browser owns interaction and optimistic UI; server functions own secrets, model calls, prompt orchestration, validation, and report generation. Realtime channels make the Field Mode feel alive without moving privileged logic into the client.',
            'Приложение объединяет серверный React-интерфейс со слоем данных Supabase и серверным доступом к ИИ. Браузер отвечает за взаимодействие и оптимистичный интерфейс; серверные функции за секреты, вызовы моделей, оркестрацию промптов, валидацию и генерацию отчётов. Realtime-каналы делают Field Mode живым, сохраняя привилегированную логику на сервере.'
          ),
        ],
        diagram: {
          title: L('System architecture', 'Системная архитектура'),
          columns: 1,
          nodes: [
            { id: 'user', label: L('Researcher', 'Исследователь'), sublabel: L('Planner · Field Mode · Insights', 'Планировщик · Field Mode · Insights') },
            { id: 'ui', label: L('TanStack Start + React 19', 'TanStack Start + React 19'), sublabel: L('SSR · routes · typed UI', 'SSR · маршруты · типизированный UI') },
            { id: 'server', label: L('Server Functions', 'Серверные функции'), sublabel: L('Validation · orchestration · secrets', 'Валидация · оркестрация · секреты') },
            { id: 'supabase', label: L('Supabase', 'Supabase'), sublabel: L('Postgres · Auth · RLS · Storage · Realtime', 'Postgres · Auth · RLS · Storage · Realtime') },
            { id: 'ai', label: L('AI Gateway', 'AI Gateway'), sublabel: L('Generation · embeddings · fallback', 'Генерация · эмбеддинги · fallback') },
            { id: 'rag', label: L('pgvector / RAG', 'pgvector / RAG'), sublabel: L('Chunked sources matched to study context', 'Чанки источников связаны с контекстом') },
          ],
          edges: [
            { from: 'user', to: 'ui' },
            { from: 'ui', to: 'server' },
            { from: 'server', to: 'supabase' },
            { from: 'server', to: 'ai' },
            { from: 'supabase', to: 'rag' },
            { from: 'rag', to: 'ai' },
          ],
        },
      },
      {
        label: L('Data model & security', 'Модель данных и безопасность'),
        paragraphs: [
          L(
            'The core schema keeps the study as the source of truth. Projects contain studies; studies contain source chunks, fields, respondents, and event history. Field agents and field events are separate entities so a live simulation can be replayed, inspected, and updated through Realtime without mutating the underlying study definition.',
            'Основная схема хранит исследование как источник истины. Проекты содержат исследования; исследования содержат фрагменты источников, поля, респондентов и историю событий. Field agents и field events разделены, чтобы живую симуляцию можно было воспроизводить, проверять и обновлять через Realtime, не изменяя определение самого исследования.'
          ),
          L(
            'Every user-owned table is protected by ownership policies using auth.uid(). Private study sources and exports live in private buckets. The result is a product architecture where the research workspace, generated evidence, and potentially sensitive source material remain scoped to the authenticated owner.',
            'Каждая таблица пользовательских данных защищена политиками владения через auth.uid(). Исходники и экспорты исследований находятся в приватных bucket-ах. Рабочее пространство, сгенерированные доказательства и потенциально чувствительные материалы остаются доступны только авторизованному владельцу.'
          ),
        ],
        diagram: {
          title: L('Entity relationships', 'Связи сущностей'),
          columns: 1,
          nodes: [
            { id: 'profile', label: L('Profile', 'Профиль'), sublabel: L('Authenticated owner', 'Авторизованный владелец') },
            { id: 'project', label: L('Project', 'Проект'), sublabel: L('Workspace', 'Рабочее пространство') },
            { id: 'study', label: L('Study', 'Исследование'), sublabel: L('Workflow state + JSON configuration', 'Состояние процесса + JSON-конфигурация') },
            { id: 'chunks', label: L('Study Chunks', 'Фрагменты источников'), sublabel: L('Content hash · embeddings · pgvector', 'Хеш контента · эмбеддинги · pgvector') },
            { id: 'field', label: L('Field', 'Поле'), sublabel: L('Prompt · language · agent count', 'Промпт · язык · количество агентов') },
            { id: 'agents', label: L('Field Agents', 'Полевые агенты'), sublabel: L('Persona · position · activity', 'Персона · позиция · активность') },
            { id: 'events', label: L('Field Events', 'Полевые события'), sublabel: L('Reaction · reply · shift · system', 'Реакция · ответ · сдвиг · система') },
          ],
          edges: [
            { from: 'profile', to: 'project' },
            { from: 'project', to: 'study' },
            { from: 'study', to: 'chunks' },
            { from: 'study', to: 'field' },
            { from: 'field', to: 'agents' },
            { from: 'field', to: 'events' },
            { from: 'agents', to: 'events' },
          ],
        },
      },
      {
        label: L('Core modules', 'Ключевые модули'),
        paragraphs: [
          L(
            'Each module owns a distinct moment in the research workflow. The interface deliberately separates planning, generation, observation, and interpretation so the researcher always knows what can be edited, what is running, and what has already been audited.',
            'Каждый модуль отвечает за отдельный момент исследовательского процесса. Интерфейс намеренно разделяет планирование, генерацию, наблюдение и интерпретацию, чтобы исследователь всегда понимал, что можно редактировать, что выполняется и что уже проверено.'
          ),
        ],
        modules: [
          {
            title: L('Planner, node-based study builder', 'Planner, узловой конструктор исследования'),
            body: L(
              'A linear chain of Objective → Concept → Context → Scenario → Audit → Respondents. Nodes are read-only until the researcher enters edit mode; the saved chain becomes the contract that downstream agents use. The Scenario node can generate a draft script, while the Context node indexes source material for semantic retrieval.',
              'Линейная цепочка Objective → Concept → Context → Scenario → Audit → Respondents. Узлы доступны только для чтения, пока исследователь не включит режим редактирования; сохранённая цепочка становится контрактом для следующих агентов. Узел Scenario генерирует черновик сценария, а Context индексирует материалы для семантического поиска.'
            ),
          },
          {
            title: L('Respondents, CORE panel generation', 'Respondents, генерация панели CORE'),
            body: L(
              'The researcher chooses panel size, audience language, and the audience profile. The CORE calibration samples OCEAN traits against population norms; each persona receives a name, age, city, occupation, summary, and personality traits. A credibility validator scores each persona from 0 to 100 and explains weak or contradictory attributes before the panel is accepted.',
              'Исследователь выбирает размер панели, язык и профиль аудитории. CORE-калибровка сопоставляет черты OCEAN с нормами популяции; каждая персона получает имя, возраст, город, профессию, описание и черты личности. Валидатор достоверности оценивает персону от 0 до 100 и объясняет слабые или противоречивые атрибуты до принятия панели.'
            ),
          },
          {
            title: L('Insights, interview, audit, report', 'Insights, интервью, аудит, отчёт'),
            body: L(
              'The interview agent uses persistent memory, RAG context, and an ensemble of models to run the conversation. Follow-up questions can target a specific answer. A critique agent scores realism and flags low-quality responses; a repair agent retries them. The report agent then combines findings, quotes, recommendations, and quality notes into a Markdown / HTML export.',
              'Интервью-агент использует постоянную память, RAG-контекст и ансамбль моделей для проведения диалога. Follow-up-вопросы могут обращаться к конкретному ответу. Critique-агент оценивает реалистичность и отмечает слабые ответы; repair-агент перезапускает их. Затем report-агент объединяет выводы, цитаты, рекомендации и заметки о качестве в экспорт Markdown / HTML.'
            ),
          },
          {
            title: L('Focus Group, group dynamics', 'Focus Group, групповая динамика'),
            body: L(
              'Multiple respondents are placed in a shared conversation. Agents react to one another, shift position, and expose agreement, conflict, and group pressure. The round-by-round event stream preserves how the consensus formed, capturing the full deliberation.',
              'Несколько респондентов помещаются в общий разговор. Агенты реагируют друг на друга, меняют позицию и проявляют согласие, конфликт и групповое давление. Поток событий по раундам сохраняет то, как формировался консенсус, фиксируя полное обсуждение.'
            ),
          },
          {
            title: L('Field Mode, observe behavior over time', 'Field Mode, наблюдение за поведением во времени'),
            body: L(
              'A dark map becomes the stage for dozens of agents. Each agent has a persona, coordinates, stance, and activity value. Tick events move the simulation, store reactions in field_events, and stream them to the interface through Realtime. The researcher can pause, inspect an individual, regenerate a persona, or summarize the entire field.',
              'Тёмная карта становится сценой для десятков агентов. У каждого агента есть персона, координаты, позиция и активность. События такта двигают симуляцию, сохраняют реакции в field_events и передают их в интерфейс через Realtime. Исследователь может поставить поле на паузу, изучить агента, пересоздать персону или суммировать всё поле.'
            ),
          },
        ],
      },
      {
        label: L('Development & stack', 'Разработка и стек'),
        paragraphs: [
          L(
            'I developed the product so the prototype could behave like a real application. The implementation pairs a typed, server-rendered React frontend with a managed Postgres backend, secure server functions, realtime simulation events, and model access kept behind the server boundary.',
            'Я разработала продукт так, чтобы прототип вёл себя как настоящее приложение. Реализация объединяет типизированный серверный React-фронтенд с управляемым Postgres-бэкендом, защищёнными серверными функциями, realtime-событиями симуляции и доступом к моделям, скрытым за серверной границей.'
          ),
        ],
        modules: [
          {
            title: L('Frontend', 'Frontend'),
            body: L('React 19, TypeScript, TanStack Start, TanStack Router, TanStack Query, Tailwind CSS, semantic design tokens, shadcn/ui, Lucide, Framer Motion.', 'React 19, TypeScript, TanStack Start, TanStack Router, TanStack Query, Tailwind CSS, семантические дизайн-токены, shadcn/ui, Lucide, Framer Motion.'),
          },
          {
            title: L('Backend & data', 'Backend и данные'),
            body: L('Supabase Cloud with Postgres, Auth, Row Level Security, Storage, Realtime, and pgvector. The schema separates studies, source chunks, fields, agents, and event history for traceability.', 'Supabase Cloud с Postgres, Auth, Row Level Security, Storage, Realtime и pgvector. Схема разделяет исследования, фрагменты источников, поля, агентов и историю событий для прослеживаемости.'),
          },
          {
            title: L('AI layer', 'ИИ-слой'),
            body: L('AI Gateway with Gemini models for generation, an embedding model for semantic retrieval, prompt-specific server functions, fallback handling, critique, repair, and report agents.', 'AI Gateway с моделями Gemini для генерации, embedding-моделью для семантического поиска, серверными функциями под конкретные промпты, fallback-обработкой, critique-, repair- и report-агентами.'),
          },
          {
            title: L('Reliability & security', 'Надёжность и безопасность'),
            body: L('Explicit loading, empty, and error states; Zod validation on forms and server functions; authenticated ownership policies; private storage buckets; retries and a model fallback for long-running or failed AI operations.', 'Явные состояния загрузки, пустого результата и ошибки; валидация Zod в формах и серверных функциях; политики владения для авторизованных пользователей; приватные storage bucket-ы; повторы и fallback-модель для долгих или неуспешных ИИ-операций.'),
          },
        ],
      },
      {
        label: L('Outcome', 'Результат'),
        paragraphs: [
          L(
            'The platform turns synthetic research from a one-off AI prompt into a repeatable, inspectable product workflow. It gives teams a way to move from a hypothesis to a panel, from a panel to evidence, and from evidence to a report with the architecture, state model, security boundary, and development foundation required to keep extending the product.',
            'Платформа превращает синтетическое исследование из разового ИИ-запроса в повторяемый и проверяемый продуктовый процесс. Команда получает путь от гипотезы к панели, от панели к доказательствам и от доказательств к отчёту с архитектурой, моделью состояний, границей безопасности и техническим фундаментом для дальнейшего развития.'
          ),
        ],
        findings: [
          {
            title: L('The research cycle becomes measurable.', 'Исследовательский цикл становится измеримым.'),
            body: L('The PRD defines success through time-to-first-insight under 30 minutes, panel diversity, realism, credibility, flag rate, study completion, and controlled token cost, turning product quality into a visible operating dashboard.', 'PRD задаёт успех через time-to-first-insight менее 30 минут, разнообразие панели, реалистичность, достоверность, долю флагов, завершение исследований и контролируемую стоимость токенов, качество продукта превращается в видимую операционную панель.'),
          },
        ],
      },
    ],
  },
  {
    slug: 'audit-it',
    title: L('Audit Automation Service', 'Сервис для автоматизации аудита'),
    category: L('B2B SaaS', 'B2B SaaS'),
    domain: L('Financial Audit / RegTech', 'Финансовый аудит / RegTech'),
    stack: L('React 18 · Vite · Supabase · PostgreSQL · Edge Functions', 'React 18 · Vite · Supabase · PostgreSQL · Edge Functions'),
    year: '2025',
    img: work5,
    deliverables: [
      L('Product Strategy', 'Продуктовая стратегия'),
      L('Technical Specification', 'Техническое задание'),
      L('Database Architecture', 'Архитектура базы данных'),
      L('AI Workflow Design', 'Проектирование ИИ-воркфлоу'),
      L('MVP Delivery', 'Сдача MVP'),
    ],
    description: [
      L(
        'A Russian-language B2B SaaS platform for mandatory financial statement audits. It guides an auditor through a ten-stage review, from reconciliation and cross-checks to audit reporting, while keeping every document, response, status, token cost, and result connected to one audit session.',
        'Русскоязычная B2B SaaS-платформа для обязательного аудита бухгалтерской отчётности. Она проводит аудитора через десять этапов проверки, от сверки и взаимосвязей до аудиторского отчёта, связывая документы, ответы, статусы, стоимость токенов и результаты в одной сессии аудита.'
      ),
      L(
        'I translated a detailed technical specification into a product structure with protected workspaces, staged AI streaming, SHA-256 document deduplication, controlled retries, quality checks, Word export, and an admin layer for operational visibility. After deployment the platform reduced the time spent on a full audit cycle by roughly six times, replacing weeks of manual reconciliation and drafting with a guided, traceable workflow.',
        'Я перевела подробное техническое задание в продуктовую структуру с защищёнными рабочими пространствами, потоковой генерацией по этапам, дедупликацией документов через SHA-256, контролируемыми повторами, проверкой качества, экспортом в Word и административным слоем для операционного контроля. После внедрения платформа сократила время полного цикла аудита примерно в шесть раз, заменив недели ручной сверки и составления черновиков управляемым прослеживаемым процессом.'
      ),
    ],
    gallery: [work1, work4],
    metrics: [
      { value: L('6×', '6×'), label: L('Faster audit cycle', 'Сокращение цикла аудита') },
      { value: L('~83%', '~83%'), label: L('Reduction in audit time', 'Сокращение времени аудита') },
      { value: L('~300K RUB', '~300 тыс ₽'), label: L('Labor cost saved per audit', 'Экономия на трудозатратах за аудит') },
      { value: L('98%', '98%'), label: L('Document parse success rate', 'Успешность парсинга документов') },
      { value: L('<15 min', '<15 мин'), label: L('Time to first verdict', 'Время до первого вердикта') },
      { value: L('10 stages', '10 этапов'), label: L('Guided methodology steps', 'Этапов управляемой методологии') },
    ],
    caseStudy: [
      {
        label: L('Product purpose', 'Назначение продукта'),
        paragraphs: [
          L(
            'Mandatory audit work combines large document sets, repeated reconciliations, strict reporting formats, and a high cost of missing context. An auditor needs to load financial statements, accounting policies, registers, contracts, and supporting files, then move through a fixed methodology without losing the relationship between a source document and an audit conclusion.',
            'Обязательный аудит объединяет большие массивы документов, повторяющиеся сверки, строгие форматы отчётности и высокую цену потерянного контекста. Аудитору нужно загрузить отчётность, учётную политику, регистры, договоры и подтверждающие файлы, а затем пройти фиксированную методологию, сохраняя связь между исходным документом и выводом аудита.'
          ),
          L(
            'The platform turns this work into a controlled sequence. Every stage has required inputs, a visible status, a result format, and a manual completion action. The audit session becomes the single container for the team, documents, generated answers, summaries, and final report.',
            'Платформа превращает этот процесс в контролируемую последовательность. У каждого этапа есть обязательные входные данные, видимый статус, формат результата и ручное действие для завершения. Сессия аудита становится единым контейнером для команды, документов, сгенерированных ответов, сводок и итогового отчёта.'
          ),
        ],
        findings: [
          {
            title: L('After deployment, audit time dropped by roughly six times.', 'После внедрения время аудита сократилось примерно в шесть раз.'),
            body: L(
              'The product specification targets a reduction of 70 to 80 percent in the time spent on the first reconciliation stage. In practice, the full audit cycle compressed by about six times once the platform replaced manual reconciliation and drafting with a guided, traceable workflow. Repeated document uploads are charged once through content hashing, and a completed stage can be extended with new documents through a merge step.',
              'Техническое задание закладывает сокращение времени на первом этапе сверки на 70–80 процентов. На практике полный цикл аудита сжался примерно в шесть раз, когда платформа заменила ручную сверку и составление черновиков управляемым прослеживаемым процессом. Повторная загрузка документа оплачивается один раз благодаря хешированию содержимого, а завершённый этап можно дополнить новыми документами через шаг объединения.'
            ),
          },
          {
            title: L('Every generated result remains reviewable.', 'Каждый сгенерированный результат остаётся проверяемым.'),
            body: L(
              'The model follows a strict Result Card format with facts, amounts, and a verdict limited to 800 characters. Quality stages check the output for contradictions, repeatability, and explanatory clarity before the conclusion enters the final report.',
              'Модель работает по строгому формату Result Card с фактами, суммами и вердиктом до 800 символов. Этапы контроля качества проверяют вывод на противоречия, повторяемость и понятность объяснения до его включения в итоговый отчёт.'
            ),
          },
        ],
      },
      {
        label: L('Audit workflow', 'Рабочий процесс аудита'),
        paragraphs: [
          L(
            'The core workflow contains ten stages. The first seven produce working audit conclusions. Stages eight and nine consolidate and validate the earlier results. Stage ten explains the conclusions in plain language. Stages nine and ten stay hidden from the main navigation and run as controlled quality layers.',
            'Основной процесс содержит десять этапов. Первые семь формируют рабочие выводы аудита. Этапы восемь и девять объединяют и проверяют предыдущие результаты. Этап десять объясняет выводы понятным языком. Этапы девять и десять скрыты из основной навигации и работают как контролируемые слои качества.'
          ),
        ],
        diagram: {
          title: L('Ten-stage audit pipeline', 'Конвейер аудита из десяти этапов'),
          columns: 1,
          nodes: [
            { id: 'reconciliation', label: L('1. Reconciliation', '1. Анализ отчётности'), sublabel: L('OSV balance, turnover, closing balances', 'ОСВ, обороты, конечные остатки') },
            { id: 'crosscheck', label: L('2. Cross-check', '2. Анализ взаимосвязей'), sublabel: L('Balance, P&L, cash flow relationships', 'Связи баланса, ОПУ и движения денег') },
            { id: 'policy', label: L('3. Accounting policy', '3. Учётная политика'), sublabel: L('Policy completeness and consistency', 'Полнота и последовательность политики') },
            { id: 'depreciation', label: L('4. Depreciation', '4. Анализ амортизации'), sublabel: L('Registers, OS and intangible assets', 'Регистры, ОС и нематериальные активы') },
            { id: 'materiality', label: L('5. Materiality', '5. Существенность'), sublabel: L('Materiality calculation and support', 'Расчёт и обоснование существенности') },
            { id: 'receivables', label: L('6. Stale receivables', '6. Задолженность'), sublabel: L('Accounts 60, 62 and 76', 'Счета 60, 62 и 76') },
            { id: 'contracts', label: L('7. Risky contracts', '7. Рисковые операции'), sublabel: L('Contract, card and disclosure review', 'Проверка договоров, карточек и раскрытий') },
            { id: 'report', label: L('8. Audit report', '8. Контрольный отчёт'), sublabel: L('Consolidated findings from stages 1 to 7', 'Свод выводов этапов 1–7') },
            { id: 'quality', label: L('9. Quality control', '9. Контроль качества'), sublabel: L('Contradiction and clean-source checks', 'Проверка противоречий и источников') },
            { id: 'explanation', label: L('10. Explanatory note', '10. Пояснительная записка'), sublabel: L('Plain-language conclusion and refinement', 'Понятное объяснение и доработка') },
          ],
          edges: [
            { from: 'reconciliation', to: 'crosscheck' },
            { from: 'crosscheck', to: 'policy' },
            { from: 'policy', to: 'depreciation' },
            { from: 'depreciation', to: 'materiality' },
            { from: 'materiality', to: 'receivables' },
            { from: 'receivables', to: 'contracts' },
            { from: 'contracts', to: 'report' },
            { from: 'report', to: 'quality' },
            { from: 'quality', to: 'explanation' },
          ],
        },
      },
      {
        label: L('System architecture', 'Архитектура системы'),
        paragraphs: [
          L(
            'The browser provides the audit workspace, navigation, upload controls, streaming chat, and stage summaries. Supabase stores the session, messages, files, summaries, roles, and usage data. Edge Functions isolate document parsing, model calls, administrative aggregations, and protected user exports.',
            'Браузер предоставляет рабочее пространство аудита, навигацию, загрузку файлов, потоковый чат и сводки этапов. Supabase хранит сессии, сообщения, файлы, сводки, роли и данные об использовании. Edge Functions изолируют парсинг документов, вызовы моделей, административные агрегаты и защищённый экспорт пользователя.'
          ),
        ],
        diagram: {
          title: L('Runtime architecture', 'Архитектура выполнения'),
          columns: 1,
          nodes: [
            { id: 'auditor', label: L('Auditor', 'Аудитор'), sublabel: L('Dashboard · ChatInterface · AuditSidebar', 'Dashboard · ChatInterface · AuditSidebar') },
            { id: 'frontend', label: L('React 18 + Vite', 'React 18 + Vite'), sublabel: L('TanStack Query · AuthProvider · ThemeProvider', 'TanStack Query · AuthProvider · ThemeProvider') },
            { id: 'supabase', label: L('Supabase', 'Supabase'), sublabel: L('Auth · PostgreSQL · RLS · Storage · Realtime', 'Auth · PostgreSQL · RLS · Storage · Realtime') },
            { id: 'parse', label: L('parse-document', 'parse-document'), sublabel: L('PDF · DOCX · XLSX to text and chunks', 'PDF · DOCX · XLSX в текст и чанки') },
            { id: 'stream', label: L('AI streaming function', 'ИИ-функция потоковой генерации'), sublabel: L('SSE · prompt · model · usage log', 'SSE · промпт · модель · usage log') },
            { id: 'admin', label: L('admin-data', 'admin-data'), sublabel: L('Metrics with server-side role check', 'Метрики с серверной проверкой роли') },
            { id: 'storage', label: L('Private audit-docs', 'Приватное хранилище audit-docs'), sublabel: L('Signed access by user prefix', 'Подписанный доступ по префиксу пользователя') },
          ],
          edges: [
            { from: 'auditor', to: 'frontend' },
            { from: 'frontend', to: 'supabase' },
            { from: 'frontend', to: 'parse' },
            { from: 'frontend', to: 'stream' },
            { from: 'frontend', to: 'admin' },
            { from: 'parse', to: 'storage' },
            { from: 'parse', to: 'supabase' },
            { from: 'stream', to: 'supabase' },
            { from: 'admin', to: 'supabase' },
          ],
        },
      },
      {
        label: L('Data model & security', 'Модель данных и безопасность'),
        paragraphs: [
          L(
            'The data model keeps the audit session as the root entity. Messages, uploaded files, stage summaries, and usage logs reference the session. Profiles and user roles extend the authenticated user with theme settings and controlled access. The schema uses explicit status values, foreign keys, indexes, and updated_at triggers to keep the workflow predictable.',
            'Модель данных хранит сессию аудита как корневую сущность. Сообщения, загруженные файлы, сводки этапов и usage logs ссылаются на сессию. Профили и роли расширяют авторизованного пользователя настройками темы и контролируемым доступом. Схема использует явные статусы, внешние ключи, индексы и триггеры updated_at, чтобы процесс оставался предсказуемым.'
          ),
          L(
            'Row Level Security scopes audit_sessions and profiles by auth.uid(). Messages, session files, and stage summaries inherit access through the session owner. Usage logs accept inserts only through a server role. The audit-docs bucket stays private, and downloads use signed URLs with a user-folder prefix check.',
            'Row Level Security ограничивает audit_sessions и profiles через auth.uid(). Сообщения, файлы сессии и сводки этапов получают доступ через владельца сессии. Usage logs принимают записи только через серверную роль. Bucket audit-docs остаётся приватным, а скачивание выполняется по подписанным URL с проверкой префикса пользовательской папки.'
          ),
        ],
        diagram: {
          title: L('Entity relationships', 'Связи сущностей'),
          columns: 1,
          nodes: [
            { id: 'auth', label: L('auth.users', 'auth.users'), sublabel: L('Authenticated identity', 'Авторизованная личность') },
            { id: 'session', label: L('audit_sessions', 'audit_sessions'), sublabel: L('Draft or completed audit', 'Черновик или завершённый аудит') },
            { id: 'profile', label: L('profiles', 'profiles'), sublabel: L('Theme and account settings', 'Тема и настройки аккаунта') },
            { id: 'messages', label: L('chat_messages', 'chat_messages'), sublabel: L('Immutable conversation journal', 'Неизменяемый журнал диалога') },
            { id: 'files', label: L('session_files', 'session_files'), sublabel: L('Hash, parsed text, storage path', 'Хеш, распарсенный текст, путь в storage') },
            { id: 'summaries', label: L('stage_summaries', 'stage_summaries'), sublabel: L('One upsert per session, stage and tab', 'Одна запись на сессию, этап и вкладку') },
            { id: 'usage', label: L('usage_logs', 'usage_logs'), sublabel: L('Model, tokens, function, timestamp', 'Модель, токены, функция, время') },
            { id: 'roles', label: L('user_roles', 'user_roles'), sublabel: L('Admin or user role', 'Роль администратора или пользователя') },
          ],
          edges: [
            { from: 'auth', to: 'session' },
            { from: 'auth', to: 'profile' },
            { from: 'auth', to: 'roles' },
            { from: 'auth', to: 'usage' },
            { from: 'session', to: 'messages' },
            { from: 'session', to: 'files' },
            { from: 'session', to: 'summaries' },
            { from: 'session', to: 'usage' },
          ],
        },
      },
      {
        label: L('State machine & reliability', 'Машина состояний и надёжность'),
        paragraphs: [
          L(
            'Each stage has a controlled lifecycle: Locked, Idle, DocsUploading, DocsParsed, Generating, Completed, Failed, Truncated, Merging, and Done. A stage becomes available after the previous stage is manually marked completed. This rule keeps the audit sequence explicit and prevents accidental jumps across methodology steps.',
            'Каждый этап имеет контролируемый жизненный цикл: Locked, Idle, DocsUploading, DocsParsed, Generating, Completed, Failed, Truncated, Merging и Done. Этап становится доступен после ручной отметки о завершении предыдущего этапа. Это правило сохраняет последовательность методологии и предотвращает случайный переход через шаги.'
          ),
          L(
            'Streaming responses expose their outcome to the interface. Successful work saves an ok message and stage summary. Repetition loops, timeouts, and truncated output show a clear error card with a retry action. Cancelled work stays visible without being counted as a successful result.',
            'Потоковые ответы передают результат в интерфейс. Успешная операция сохраняет сообщение со статусом ok и сводку этапа. Повторяющиеся ответы, таймауты и усечённый результат показывают понятную карточку ошибки с действием повторить. Отменённая операция остаётся видимой и не считается успешным результатом.'
          ),
        ],
        diagram: {
          title: L('Stage state machine', 'Машина состояний этапа'),
          columns: 1,
          nodes: [
            { id: 'locked', label: L('Locked', 'Заблокирован'), sublabel: L('Previous stage is incomplete', 'Предыдущий этап не завершён') },
            { id: 'idle', label: L('Idle', 'Готов'), sublabel: L('Files may be selected', 'Можно выбрать файлы') },
            { id: 'uploading', label: L('DocsUploading', 'Загрузка документов'), sublabel: L('Hash and parse in progress', 'Хеширование и парсинг') },
            { id: 'parsed', label: L('DocsParsed', 'Документы распознаны'), sublabel: L('Sources are ready for analysis', 'Источники готовы к анализу') },
            { id: 'generating', label: L('Generating', 'Генерация'), sublabel: L('SSE stream from the model', 'SSE-поток от модели') },
            { id: 'completed', label: L('Completed', 'Завершён'), sublabel: L('Result card is available', 'Result Card доступна') },
            { id: 'failed', label: L('Failed', 'Ошибка'), sublabel: L('Retry with visible reason', 'Повтор с видимой причиной') },
            { id: 'truncated', label: L('Truncated', 'Усечён'), sublabel: L('Incomplete answer can be retried', 'Неполный ответ можно повторить') },
            { id: 'merging', label: L('Merging', 'Объединение'), sublabel: L('New documents extend a result', 'Новые документы дополняют результат') },
            { id: 'done', label: L('Done', 'Выполнен'), sublabel: L('Manual completion recorded', 'Ручное завершение записано') },
          ],
          edges: [
            { from: 'locked', to: 'idle' },
            { from: 'idle', to: 'uploading' },
            { from: 'uploading', to: 'parsed' },
            { from: 'parsed', to: 'generating' },
            { from: 'generating', to: 'completed' },
            { from: 'generating', to: 'failed' },
            { from: 'generating', to: 'truncated' },
            { from: 'completed', to: 'merging' },
            { from: 'merging', to: 'completed' },
            { from: 'completed', to: 'done' },
          ],
        },
      },
      {
        label: L('Core modules', 'Ключевые модули'),
        paragraphs: [
          L(
            'The specification separates the product into eight focused modules. Each module has a clear user goal, interface contract, data boundary, and failure state. This structure supports a staged MVP while keeping the foundation ready for later audit analytics and team workflows.',
            'Спецификация разделяет продукт на восемь сфокусированных модулей. У каждого модуля есть понятная пользовательская цель, интерфейсный контракт, граница данных и состояние ошибки. Такая структура поддерживает поэтапный MVP и сохраняет основу для будущей аналитики аудита и командных процессов.'
          ),
        ],
        modules: [
          {
            title: L('Auth & onboarding', 'Auth и онбординг'),
            body: L('Email and password sign-in, password reset, invite-only registration, protected routing, and a controlled recovery flow. New accounts are created by an auth trigger with a matching profile record.', 'Вход по email и паролю, восстановление пароля, регистрация по приглашению, защищённая маршрутизация и контролируемый recovery-flow. Новый аккаунт создаётся auth-триггером с соответствующей записью профиля.'),
          },
          {
            title: L('Session management', 'Управление сессиями'),
            body: L('Create, list, sort, and delete audit sessions. The sidebar exposes active audits, while an empty state guides the first session. Deletion cascades through messages, files, and stage summaries.', 'Создание, просмотр, сортировка и удаление сессий аудита. Sidebar показывает активные проверки, а empty state ведёт к созданию первой сессии. Удаление каскадно очищает сообщения, файлы и сводки этапов.'),
          },
          {
            title: L('Audit workflow', 'Аудит-воркфлоу'),
            body: L('Ten scenarios are configured in a single source of truth. Each stage defines its model, prompt, required documents, visibility, and Result Card format. Hidden quality stages receive the outputs of stages one to seven through controlled context limits.', 'Десять сценариев описаны в единой конфигурации. Для каждого этапа заданы модель, промпт, обязательные документы, видимость и формат Result Card. Скрытые этапы качества получают результаты этапов один–семь через контролируемые лимиты контекста.'),
          },
          {
            title: L('Document upload & parsing', 'Загрузка и парсинг документов'),
            body: L('Drag and drop accepts PDF, DOCX, and XLSX. Files are hashed before upload, parsed through a protected function, stored in a private bucket, and linked to the exact stage that used them. Large files use a separate path and clear progress feedback.', 'Drag and drop принимает PDF, DOCX и XLSX. Файлы хешируются до загрузки, обрабатываются защищённой функцией, сохраняются в приватном bucket-е и связываются с конкретным этапом. Для больших файлов используется отдельный путь и понятный прогресс.'),
          },
          {
            title: L('AI streaming & reliability', 'ИИ-стриминг и надёжность'),
            body: L('A strict streaming contract returns content and outcome. The interface maps completed, repetition, timeout, truncation, and cancellation into distinct states. Usage logs record token counts and function names for operational control.', 'Строгий streaming-контракт возвращает контент и outcome. Интерфейс разделяет завершение, повтор, таймаут, усечение и отмену на отдельные состояния. Usage logs сохраняют количество токенов и имена функций для операционного контроля.'),
          },
          {
            title: L('Export', 'Экспорт'),
            body: L('The final report and individual stage results export to .docx. Result Card tags become section headings, amounts become table values, and the filename uses the audit title with a date in YYYY-MM-DD format.', 'Итоговый отчёт и результаты отдельных этапов экспортируются в .docx. Теги Result Card превращаются в заголовки разделов, суммы становятся значениями таблицы, а имя файла получает название аудита и дату в формате YYYY-MM-DD.'),
          },
          {
            title: L('Admin analytics', 'Административная аналитика'),
            body: L('Administrators see requests, tokens, projects, and period filters. Metrics load through a server function after a role check. User conversations remain private while operational totals support cost and performance monitoring.', 'Администраторы видят запросы, токены, проекты и фильтры периода. Метрики загружаются серверной функцией после проверки роли. Пользовательские диалоги остаются приватными, а агрегаты помогают контролировать стоимость и производительность.'),
          },
          {
            title: L('Profile & settings', 'Профиль и настройки'),
            body: L('The profile area contains email, registration date, password change, theme selection, and sign out. Theme state persists per profile and the password form validates length and confirmation before submission.', 'Раздел профиля содержит email, дату регистрации, смену пароля, выбор темы и выход. Тема сохраняется в профиле, а форма пароля проверяет длину и совпадение подтверждения до отправки.'),
          },
        ],
      },
      {
        label: L('Metrics & delivery', 'Метрики и результат'),
        paragraphs: [
          L(
            'The specification defines a measurable MVP: at least 85 percent of started stages are completed, regeneration stays at or below 5 percent, average tokens per stage remain under 120,000, document parsing reaches 98 percent success, the first verdict arrives within 15 minutes, cache hits exceed 30 percent, and at least 60 percent of sessions reach export.',
            'Спецификация задаёт измеримый MVP: не менее 85 процентов начатых этапов завершаются, доля повторных генераций не превышает 5 процентов, средний расход составляет менее 120 000 токенов на этап, успешность парсинга достигает 98 процентов, первый вердикт появляется за 15 минут, доля cache hit превышает 30 процентов, а экспорт достигается минимум в 60 процентах сессий.'
          ),
          L(
            'I delivered the product logic as a documented system of routes, states, database entities, security policies, server functions, UI states, and generation stages. The result gives an audit team a predictable path from document upload to a structured conclusion and a reusable technical foundation for future audit domains.',
            'Я собрала продуктовую логику как документированную систему маршрутов, состояний, сущностей базы данных, политик безопасности, серверных функций, UI-состояний и этапов генерации. В результате команда аудита получает предсказуемый путь от загрузки документов к структурированному выводу и техническую основу для новых направлений проверки.'
          ),
        ],
        charts: [
          {
            type: 'bar',
            title: L('MVP target metrics', 'Целевые метрики MVP'),
            labels: [L('Stage completion', 'Завершение этапов'), L('Parse success', 'Успех парсинга'), L('Cache hit rate', 'Доля cache hit'), L('Export rate', 'Доля экспорта'), L('Regeneration rate', 'Доля повторов')],
            series: [{ name: L('Target %', 'Цель %'), values: [85, 98, 30, 60, 5] }],
            max: 100,
          },
          {
            type: 'bar',
            title: L('Audit cycle: before vs after', 'Цикл аудита: до и после'),
            labels: [L('Manual audit', 'Ручной аудит'), L('With platform', 'С платформой')],
            series: [{ name: L('Relative time', 'Относительное время'), values: [100, 17] }],
            max: 110,
          },
        ],
        findings: [
          {
            title: L('The workflow is ready for controlled expansion.', 'Воркфлоу готов к контролируемому расширению.'),
            body: L('New audit scenarios can be added through the shared scenario configuration, required document mapping, prompt contract, and stage summary format. The existing navigation, permissions, logging, retry behavior, and export layer remain reusable.', 'Новые сценарии аудита добавляются через общую конфигурацию сценариев, карту обязательных документов, контракт промпта и формат сводки этапа. Существующие навигация, права, логирование, повторы и экспорт остаются переиспользуемыми.'),
          },
        ],
      },
    ],
  },
  {
    slug: 'clinicscribe',
    title: L('Autonomous AI Assistant for Outpatient Care', 'Автономный ИИ-ассистент для амбулаторного приёма врача'),
    category: L('B2B SaaS · In Development', 'B2B SaaS · В разработке'),
    domain: L('HealthTech / Ambulatory Care', 'HealthTech / Амбулаторный приём'),
    stack: L('React · TypeScript · Tailwind · shadcn/ui · Supabase · Web Audio API · Whisper / Yandex SpeechKit · DeepSeek / Qwen', 'React · TypeScript · Tailwind · shadcn/ui · Supabase · Web Audio API · Whisper / Yandex SpeechKit · DeepSeek / Qwen'),
    year: '2025',
    img: work6,
    deliverables: [
      L('Product Concept', 'Продуктовый концепт'),
      L('UI / UX Design', 'UI / UX-дизайн'),
      L('Architecture Prototype', 'Архитектурный прототип'),
      L('Regulatory Design', 'Регуляторный дизайн'),
    ],
    description: [
      L(
        'A product concept and architectural prototype. The concept explores an ambient AI assistant that listens to a doctor-patient consultation and turns the conversation into a structured medical record draft, without forcing the clinician to type or chat. The work is a UI concept and a backend pipeline design, currently in development.',
        'Продуктовый концепт и архитектурный прототип. Концепт исследует эмбиентного ИИ-ассистента, который слушает консультацию врача и пациента и превращает разговор в структурированный черновик медицинской карты, не заставляя клинициста печатать или вести чат. Работа, это UI-концепт и проектирование серверного конвейера, в данный момент в разработке.'
      ),
      L(
        'The concept is built around a single principle: the tool is a "smart rough draft" for the doctor. It captures speech, structures it into the four canonical sections of an outpatient card, highlights any fragment the model is unsure about, and hands final control to the doctor. Everything below describes the intended design and the prototype being validated.',
        'Концепт построен вокруг одного принципа: инструмент: «умный черновик» для врача. Он фиксирует речь, раскладывает её по четырём каноническим секциям амбулаторной карты, подсвечивает фрагменты, в которых модель не уверена, и передаёт финальный контроль врачу. Всё ниже описывает задуманный дизайн и валидируемый прототип.'
      ),
    ],
    gallery: [work6, work1],
    caseStudy: [
      {
        label: L('Context & problem', 'Контекст и проблематика'),
        paragraphs: [
          L(
            'The standard primary outpatient visit in Russian clinics lasts 12 to 15 minutes. Much of that time the doctor faces a monitor, typing into a medical information system (EMIAS, 1C:Meditsina, Infoklinika, MedAngel). Routine data entry, complaints, anamnesis, ICD-10 matching, objective exam fields, prescriptions, pulls attention away from the patient.',
            'Норматив первичного амбулаторного приёма в российских поликлиниках, 12–15 минут. Значительную часть этого времени врач обращён лицом к монитору и набирает текст в медицинскую информационную систему (ЕМИАС, «1С:Медицина», «Инфоклиника», «МедАнгел»). Рутинный ввод, жалобы, анамнез, сопоставление с МКБ-10, поля осмотра, назначения, оттягивает внимание от пациента.'
          ),
          L(
            'Standard AI assistants do not fit this workflow. A chatbot is unusable mid-consultation; the clinician cannot type prompts while talking to a patient. The doctor personally signs the protocol and carries legal liability, so any opaque neural output that requires long manual proofreading is rejected. And the closed infrastructures and varied MIS systems make a direct API integration by an independent developer impractical.',
            'Стандартные ИИ-ассистенты не вписываются в этот поток. Чат-бот неприменим во время приёма: клиницист не может набирать промпты, разговаривая с пациентом. Врач лично подписывает протокол и несёт юридическую ответственность, поэтому любой непрозрачный вывод нейросети, требующий долгой вычитки, вызывает отторжение. А закрытые контуры больничных сетей и разнообразие МИС делают прямую API-интеграцию силами независимого разработчика практически невозможной.'
          ),
        ],
      },
      {
        label: L('Product concept', 'Продуктовая концепция'),
        paragraphs: [
          L(
            'The concept is organized around four interface decisions, each addressing a barrier identified in the research. These describe the intended UX of the prototype.',
            'Концепт построен вокруг четырёх интерфейсных решений, каждое из которых отвечает на барьер, выявленный в исследовании. Это описание задуманного UX прототипа.'
          ),
        ],
        findings: [
          {
            title: L('Zero-click ambient capture', 'Эмбиентная фиксация без кликов'),
            body: L(
              'Recording starts in one click or via a hotkey (Space / F8). During the dialogue the screen shows only a smooth waveform and a timer, no running transcript, so the doctor can stay focused on the patient.',
              'Запись стартует в один клик или по горячей клавише (Space / F8). Во время диалога на экране только плавная визуализация звуковой волны и таймер, без бегущей расшифровки, чтобы врач оставался сосредоточен на пациенте.'
            ),
          },
          {
            title: L('Structure aligned with Ministry of Health standards', 'Структура по стандартам Минздрава РФ'),
            body: L(
              'The generated draft is split into four canonical sections of an outpatient card: subjective status (complaints, anamnesis with a chronological timeline), objective exam by organ systems, an ICD-10 classifier with a quick selector, and a treatment plan with separate blocks for regimen, medications, and investigations.',
              'Сформированный черновик раскладывается по четырём каноническим секциям амбулаторной карты: субъективный статус (жалобы, анамнез с хронологическим таймлайном), объективный осмотр по системам органов, классификатор МКБ-10 с быстрым селектором и план лечения с раздельными блоками режима, медикаментов и исследований.'
            ),
          },
          {
            title: L('Confidence-aware UI', 'Интерфейс доверия'),
            body: L(
              'The interface visualizes model confidence. When a rare term, drug, or numeric dosage is uncertain, the fragment is highlighted in soft amber. Hovering opens a tooltip with the exact timecode and a quote from the dialogue for instant verification.',
              'Интерфейс визуализирует степень уверенности модели. Если распознавание редкого термина, препарата или числовой дозировки вызывает сомнения, фрагмент подсвечивается мягким янтарным цветом. Наведение курсора открывает тултип с точным таймкодом и цитатой из диалога для мгновенной сверки.'
            ),
          },
          {
            title: L('Zero-integration export bridge', 'Экспорт без интеграции'),
            body: L(
              'The verified text is copied to the OS clipboard in one click, formatted for the fields of active MIS systems for a quick Ctrl+V paste. A block-by-block copy mode is provided for systems with a tabbed field structure.',
              'Проверенный текст копируется в буфер обмена ОС в один клик, отформатированный под поля активных МИС для быстрой вставки через Ctrl+V. Предусмотрен режим поблочного копирования для систем с раздельной вкладчатой структурой полей.'
            ),
          },
        ],
      },
      {
        label: L('System architecture & data pipeline', 'Архитектура системы и конвейер данных'),
        paragraphs: [
          L(
            'The concept targets a lightweight modular architecture implementable by a solo developer on modern cloud services. The client captures audio, Supabase stores profiles, ICD-10 references, specialty templates and sessions, and Edge Functions run the secure gateway, de-identification, and JSON validation. STT comes from Yandex SpeechKit or Whisper; semantic parsing from DeepSeek, Qwen, or GigaChat via API.',
            'Концепт ориентирован на легковесную модульную архитектуру, реализуемую одним разработчиком на современных облачных сервисах. Клиент захватывает аудио, Supabase хранит профили, справочники МКБ-10, шаблоны специальностей и сессии, а Edge Functions выполняют роль безопасного шлюза, деидентификацию и валидацию JSON. STT, Yandex SpeechKit или Whisper; семантический парсинг, DeepSeek, Qwen или GigaChat через API.'
          ),
        ],
        diagram: {
          title: L('Data pipeline', 'Конвейер данных'),
          columns: 1,
          nodes: [
            { id: 'capture', label: L('1. Audio capture', '1. Захват аудио'), sublabel: L('Web Audio API · VAD · noise filter', 'Web Audio API · VAD · фильтр шума') },
            { id: 'deid', label: L('2. De-identification (152-FZ)', '2. Анонимизация (152-ФЗ)'), sublabel: L('Strip PII before LLM call', 'Удаление ПДн до вызова модели') },
            { id: 'stt', label: L('3. Speech to text', '3. Распознавание речи'), sublabel: L('Whisper / SpeechKit · diarization', 'Whisper / SpeechKit · диаризация') },
            { id: 'parse', label: L('4. Semantic parsing', '4. Семантический парсинг'), sublabel: L('DeepSeek / Qwen · NER · ICD-10', 'DeepSeek / Qwen · NER · МКБ-10') },
            { id: 'validate', label: L('5. Inline validation', '5. Инлайн-валидация'), sublabel: L('Confidence highlighting · inline edit', 'Подсветка неуверенности · правки в тексте') },
            { id: 'export', label: L('6. Export to MIS', '6. Экспорт в МИС'), sublabel: L('Clipboard · block copy', 'Буфер обмена · поблочное копирование') },
            { id: 'purge', label: L('7. Memory purge', '7. Очистка памяти'), sublabel: L('Audio deleted after processing', 'Аудио удаляется после обработки') },
          ],
          edges: [
            { from: 'capture', to: 'deid' },
            { from: 'deid', to: 'stt' },
            { from: 'stt', to: 'parse' },
            { from: 'parse', to: 'validate' },
            { from: 'validate', to: 'export' },
            { from: 'export', to: 'purge' },
          ],
        },
      },
      {
        label: L('UI ergonomics', 'Эргономика интерфейса'),
        paragraphs: [
          L(
            'The screen is a two-panel layout optimized for wide monitors and tablets. A top bar holds the specialty selector (therapy, pediatrics, cardiology, neurology), a microphone activity indicator, and a consultation timer. The left panel shows the live audio waveform and a chronological dialogue feed with color-coded speaker turns. The right panel holds four accordion blocks of the outpatient card, open by default, all fields editable inline without modal windows, an interactive ICD-10 badge with alt-nosology search, and medication blocks with auto-highlighted dosages. A bottom action bar carries the end-consultation button, a block-copy mode, and the primary "COPY FOR MIS" action bound to Ctrl+Shift+C. All key actions are keyboard-driven.',
            'Экран, двухпанельная схема, оптимизированная под широкие мониторы и планшеты. Верхняя панель: селектор специальности (терапия, педиатрия, кардиология, неврология), индикатор активности микрофона и таймер консультации. Левая панель, живая аудиоволна и хронологическая лента диалога с цветовой маркировкой реплик. Правая панель, четыре аккордеон-блока карты, открытые по умолчанию, все поля редактируются инлайн без модальных окон, интерактивный бейдж МКБ-10 с поиском альтернативной нозологии и блоки назначений с авто-выделением дозировок. Нижняя панель действий, кнопка завершения, режим «Копировать блоками» и главная клавиша «КОПИРОВАТЬ ДЛЯ МИС» на Ctrl+Shift+C. Все ключевые действия доступны с клавиатуры.'
          ),
        ],
      },
      {
        label: L('Regulatory design', 'Регуляторный дизайн'),
        paragraphs: [
          L(
            'The concept is positioned as a non-medical device under 323-FZ: a specialized text editor and administrative assistant on a Human-in-the-Loop model. It makes no decisions and gives no diagnoses, which avoids the lengthy Roszdravnadzor certification. Under 152-FZ, audio is processed in in-memory streams without writing to disk; only de-identified templates and user settings are persisted in Supabase.',
            'Концепт позиционируется как немедицинское изделие по 323-ФЗ: специализированный текстовый редактор и административный ассистент по модели Human-in-the-Loop. Система выступает как вспомогательный инструмент, что исключает многолетнюю сертификацию в Росздравнадзоре. По 152-ФЗ аудио обрабатывается в оперативной памяти без записи на диск; в Supabase сохраняются только обезличенные шаблоны и настройки пользователя.'
          ),
        ],
      },
      {
        label: L('Roadmap & current status', 'План и текущий статус'),
        paragraphs: [
          L(
            'The project is in development. Phase 1, an interactive UI prototype of the two-panel interface in React and Tailwind with shadcn/ui, plus audio capture and waveform visualization via the Web Audio API. Phase 2, the structuring pipeline: Supabase database and Edge Functions, system prompts for medical entity extraction and ICD-10 coding, and the confidence-highlighting logic. Phase 3, field validation with clinicians on de-identified audio, copy-flow testing across Russian MIS systems, and pharmacology dictionary refinement from feedback.',
            'Проект в разработке. Фаза 1, интерактивный UI-прототип двухпанельного интерфейса на React и Tailwind с shadcn/ui, плюс захват звука и визуализация спектрограммы через Web Audio API. Фаза 2, конвейер структурирования: база данных и Edge Functions в Supabase, системные промпты для извлечения медицинских сущностей и кодирования по МКБ-10, логика подсветки неуверенности. Фаза 3, полевая валидация с клиницистами на обезличенных аудиозаписях, тестирование сценариев копирования в российские МИС и доработка словарей фармакологических наименований по обратной связи.'
          ),
        ],
        findings: [
          {
            title: L('This is a concept in active development.', 'Это концепт в активной разработке.'),
            body: L(
              'Everything above describes the intended design and the prototype being validated. The UI, pipeline, and regulatory framing are in active development and may change during field testing with clinicians.',
              'Концепт находится в разработке. UI, конвейер и регуляторное оформление находятся в разработке и могут измениться по итогам полевого тестирования с клиницистами.'
            ),
          },
        ],
      },
    ],
  },
  {
    slug: 'aiim',
    title: L('AI Agent Cognitive OS', 'Когнитивная операционная система для ИИ-агентов'),
    category: L('B2B + B2C · Research Initiative', 'B2B + B2C · Исследовательская инициатива'),
    domain: L('AI Infrastructure / Agent Platform', 'AI-инфраструктура / Платформа агентов'),
    stack: L('React 19 · TypeScript · Vite · Tailwind CSS · shadcn/ui · Supabase · PostgreSQL · pgvector · Edge Functions · OpenAI-compatible API', 'React 19 · TypeScript · Vite · Tailwind CSS · shadcn/ui · Supabase · PostgreSQL · pgvector · Edge Functions · OpenAI-compatible API'),
    year: '2026',
    img: work2,
    link: 'https://ai-im.tech',
    deliverables: [
      L('Research Initiative', 'Исследовательская инициатива'),
      L('AIIM Methodology', 'Методология AIIM'),
      L('Product Concept', 'Продуктовая концепция'),
      L('Technical Specification', 'Техническая спецификация'),
      L('Data Architecture', 'Архитектура данных'),
    ],
    description: [
      L(
        'AIIM is my research initiative into forming stable, humanized AI identities. I developed its methodology, parameter tables, knowledge-base architecture, and anti-drift system as a practical bridge between cognitive psychology, medical thinking, and AI engineering. The research is implemented as a live platform at ai-im.tech.',
        'AIIM — это моя исследовательская инициатива в области формирования устойчивой гуманизированной идентичности ИИ. Я разработала её методологию, таблицы параметров, архитектуру базы знаний и систему антидрифт как практическую связь между когнитивной психологией, медицинским мышлением и инженерией ИИ. Исследование реализовано в виде действующей платформы на ai-im.tech.'
      ),
      L(
        'The core distinction is Identity > Intellect. Its behavioral identity is encoded through twelve aspects, maturity levels, states, and delta-priorities, then protected by identity checkpoints and an anti-drift system. The model, prompts, knowledge sources, voice, and integrations remain replaceable.',
        'Ключевой принцип: «Идентичность важнее интеллекта». Поведенческая идентичность кодируется через двенадцать аспектов, уровни зрелости, состояния и дельта-приоритеты, а затем защищается контрольными точками идентичности и системой защиты от дрейфа. Модель, промпты, источники знаний, голос и интеграции остаются заменяемыми.'
      ),
    ],
    gallery: [work2, work5],
    caseStudy: [
      {
        label: L('Why it exists', 'Зачем это нужно'),
        paragraphs: [
          L(
            'Most AI products treat an agent as a prompt wrapped around a model. That makes character drift, vendor lock-in, fragmented memory, and missing operational history structural problems. AIIM approaches the agent as a product entity with an identity, a lifecycle, a knowledge layer, an execution surface, and a controlled path from prototype to production.',
            'Большинство ИИ-продуктов рассматривают агента как промпт вокруг модели. Поэтому дрейф характера, зависимость от поставщика, фрагментированная память и отсутствие операционной истории становятся системными проблемами. AIIM рассматривает агента как продуктовую сущность с идентичностью, жизненным циклом, базой знаний, средой исполнения и контролируемым путём от прототипа к рабочей среде.'
          ),
          L(
            'The same foundation serves two audiences. In B2B, a team can build support, sales, knowledge, internal operations, or domain agents with ownership, roles, API keys, monitoring, and RAG. In B2C, an individual can create a personal character, voice companion, tutor, coach, storyteller, or game NPC without assembling an infrastructure stack from scratch. The research is grounded in a medical background and in psychology: identity is treated as a structured, observable configuration.',
            'Одна и та же основа обслуживает две аудитории. В корпоративном сегменте команда может создавать агентов для поддержки, продаж, базы знаний, внутренних операций или предметной области с ролями, ключами доступа, мониторингом и поиском по базе знаний. В пользовательском сегменте можно создать персонального персонажа, голосового собеседника, наставника, тренера, рассказчика или игрового персонажа без самостоятельной сборки инфраструктуры. Исследование опирается на медицинский бэкграунд и психологию: идентичность рассматривается как структурированная наблюдаемая конфигурация.'
          ),
        ],
        findings: [
          {
            title: L('The agent has a stable identity across every interaction.', 'У агента есть стабильная идентичность в каждом взаимодействии.'),
            body: L(
              'The methodology formalizes identity through twelve aspects, five functional planes, four maturity levels, operational states, and delta-priorities that determine the relative influence of each aspect. Profiles can be designed in a human-readable table and compiled into JSON for execution, allowing the same identity to be tested across models and contexts.',
              'Методология формализует идентичность через двенадцать аспектов, пять функциональных планов, четыре уровня зрелости, операционные состояния и дельта-приоритеты, определяющие относительное влияние каждого аспекта. Профиль можно проектировать в понятной человеку таблице и компилировать в структурированный формат для исполнения, проверяя одну и ту же идентичность на разных моделях и в разных контекстах.'
            ),
          },
          {
            title: L('The platform is model-agnostic by design.', 'Платформа не привязана к одной модели.'),
            body: L(
              'OpenAI, Anthropic, Google, custom OpenAI-compatible providers, voice providers, Firecrawl, email, and automation tools can sit behind the same agent configuration. The identity and data model remain portable when the underlying provider changes, while the anti-drift layer checks whether behavior still belongs to the encoded profile.',
              'Разные поставщики моделей, голосовые сервисы, почтовые и автоматизационные инструменты могут работать за одной конфигурацией агента. Модель идентичности и данных остаётся переносимой при смене поставщика, а слой защиты от дрейфа проверяет, сохраняется ли поведение внутри закодированного профиля.'
            ),
          },
        ],
        tables: [
          {
            title: L('Identity dimensions comparison', 'Сравнение измерений идентичности'),
            columns: [L('Dimension', 'Измерение'), L('System prompt', 'Системный промпт'), L('AIIM', 'AIIM')],
            rows: [
              [L('Aspects', 'Аспекты'), L('Loose text description', 'Свободное текстовое описание'), L('12 structured dimensions', '12 структурированных измерений')],
              [L('Values', 'Ценности'), L('Implicit or absent', 'Неявные или отсутствуют'), L('5 explicit core values', '5 явных ключевых ценностей')],
              [L('Maturity levels', 'Уровни зрелости'), L('Not defined', 'Не определены'), L('4 levels of reasoning depth', '4 уровня глубины рассуждения')],
              [L('Cognitive biases', 'Когнитивные предубеждения'), L('Not defined', 'Не определены'), L('Structured interpretation patterns', 'Структурированные паттерны интерпретации')],
              [L('Dynamics', 'Динамика'), L('Resets with context changes', 'Сбрасывается при смене контекста'), L('Drift control and delta-priorities', 'Контроль дрейфа и дельта-приоритеты')],
              [L('Voice and style', 'Голос и стиль'), L('Prompt-dependent', 'Зависят от промпта'), L('Portable configuration', 'Переносимая конфигурация')],
              [L('Knowledge', 'Знания'), L('External assembly required', 'Требуется внешняя сборка'), L('Built-in RAG layer', 'Встроенный RAG-слой')],
              [L('Channels', 'Каналы'), L('Manual integration', 'Ручная интеграция'), L('Tools, voice, web, and API', 'Инструменты, голос, web и API')],
            ],
          },
        ],
      },
      {
        label: L('Research methodology & parameter tables', 'Исследовательская методология и таблицы параметров'),
        paragraphs: [
          L(
            'The specification treats the data model as a product surface. These are not hidden implementation details: the tables define how an agent is created, tuned, tested, published, shared, monitored, and connected to external systems. In the product UI they can be presented as one switchable table with tabs for Identity, Plans, Levels, Knowledge, Channels, Integrations, Testing, and Monitoring.',
            'Спецификация рассматривает модель данных как часть продукта. Таблицы определяют, как агент создаётся, настраивается, тестируется, публикуется, распространяется, отслеживается и подключается к внешним системам. В интерфейсе их можно представить одной таблицей с вкладками «Идентичность», «Планы», «Уровни», «Знания», «Каналы», «Интеграции», «Тестирование» и «Мониторинг».'
          ),
        ],
        tables: [
          {
            title: L('AIIM structure', 'Структура AIIM'),
            columns: [L('Layer', 'Слой'), L('Purpose', 'Назначение'), L('What it controls', 'Что контролирует')],
            rows: [
              [L('Aspects', 'Аспекты'), L('Cognitive, emotional, and ethical traits', 'Когнитивные, эмоциональные и этические черты'), L('The character profile', 'Профиль персонажа')],
              [L('Plans', 'Планы'), L('Information processing levels', 'Уровни обработки информации'), L('How the agent thinks', 'Как агент мыслит')],
              [L('Maturity levels', 'Уровни зрелости'), L('Depth of thinking and awareness', 'Глубина мышления и осознанности'), L('The complexity of response', 'Сложность ответа')],
              [L('Style', 'Стиль'), L('Speech patterns and cultural code', 'Речевые паттерны и культурный код'), L('How the agent speaks', 'Как агент говорит')],
              [L('Identity', 'Идентичность'), L('Social role and character profile', 'Социальная роль и профиль характера'), L('Values and stance', 'Ценности и позицию')],
              [L('Dynamics', 'Динамика'), L('Personality drift and stability', 'Дрейф и стабильность личности'), L('How the relationship evolves', 'Как развивается отношение')],
            ],
          },
          {
            title: L('Identity parameter model', 'Модель параметров идентичности'),
            columns: [L('Parameter family', 'Группа параметров'), L('Configuration', 'Конфигурация'), L('Runtime effect', 'Эффект во время работы')],
            rows: [
              [L('Aspects', 'Аспекты'), L('12 identity dimensions', '12 измерений идентичности'), L('Stable traits across every dialogue', 'Стабильные черты в каждом диалоге')],
              [L('Values', 'Ценности'), L('5 core values', '5 ключевых ценностей'), L('Independent stance and boundaries', 'Самостоятельная позиция и границы')],
              [L('Levels', 'Уровни'), L('4 maturity levels', '4 уровня зрелости'), L('Depth and awareness of reasoning', 'Глубина и осознанность рассуждения')],
              [L('Biases', 'Предубеждения'), L('4 cognitive biases', '4 когнитивных предубеждения'), L('Human-like interpretation patterns', 'Человеческие паттерны интерпретации')],
              [L('Dynamics', 'Динамика'), L('Drift, lexicon, delta-priorities', 'Дрейф, лексикон, дельта-приоритеты'), L('Adaptation without personality loss', 'Адаптация без потери личности')],
            ],
          },
        ],
        modules: [
          { title: L('Identity / Agent Profiles', 'Идентичность / Профили агентов'), body: L('agent_profiles: id, user_id, name, encoding, description, public_id, share_token, is_shared, original_author_id, original_author_name, imported_from, is_imported, created_at, updated_at. The row is the stable identity and public/share state of the agent.', 'agent_profiles: идентификатор, пользователь, имя, кодирование, описание, публичный идентификатор, токен доступа, флаг публикации, исходный автор, источник импорта, даты создания и обновления. Запись хранит стабильную идентичность агента и его статус публикации или предоставления доступа.') },
          { title: L('Plans / Agent Configs', 'Планы / Конфигурации агентов'), body: L('agent_configs: agent_profile_id, system_prompt, model, voice_id, openai_voice, agent_speaks_first, greeting_message, auto_end_dialog, farewell_message. The plan controls runtime behavior without rewriting identity.', 'agent_configs: идентификатор профиля, системный промпт, модель, идентификатор голоса, голос, флаг первого сообщения, приветствие, авто-завершение, прощание. План управляет поведением во время работы, не переписывая идентичность.') },
          { title: L('Levels / Builder Parameters', 'Уровни / Параметры конструктора'), body: L('Constructor and profiling levels define the depth of configuration: freeform character description, 12 identity aspects, 5 values, 4 levels, 4 biases, drift, lexicon, and 12 category parameters. Profiles can be imported from PDF, DOCX, TXT, or JSON and converted into a structured encoding.', 'Уровни конструктора и профилирования задают глубину настройки: свободное описание персонажа, 12 аспектов идентичности, 5 ценностей, 4 уровня, предубеждения, дрейф, словарь и 12 параметров категорий. Профили импортируются из PDF, DOCX, TXT или JSON и превращаются в структурированную строку идентичности.') },
          { title: L('Knowledge / RAG Tables', 'Знания / Таблицы поиска'), body: L('agent_knowledge stores URL, PDF, TXT, DOCX, CSV, Firecrawl, or user text sources with status, content, embedding, and metadata. agent_knowledge_chunks stores chunk text and vector embeddings for semantic retrieval; updates are protected from unsafe mutation.', 'agent_knowledge хранит веб-адреса, документы и пользовательский текст со статусом, содержимым, векторным представлением и метаданными. agent_knowledge_chunks хранит фрагменты текста и их векторные представления для смыслового поиска; обновления защищены от небезопасного изменения.') },
          { title: L('Channels / Agent Integrations', 'Каналы / Интеграции агента'), body: L('agent_functions and agent_integrations define tools, webhooks, Telegram, web widgets, n8n, Vapi, Retell, and custom integrations. Each channel has a type, JSON configuration, active flag, and execution condition.', 'agent_functions и agent_integrations описывают инструменты, веб-перехватчики, Telegram, веб-виджеты, n8n, Vapi, Retell и пользовательские интеграции. У каждого канала есть тип, конфигурация, флаг активности и условие вызова.') },
          { title: L('Testing / Conversations', 'Тестирование / Диалоги'), body: L('conversations holds Tester sessions and messages; dialog_history records source, session_id, JSON messages, metadata, and timestamps across channels. The tester uses a free gateway, streaming responses, image-to-context, and style-drift warnings.', 'conversations хранит тестовые сессии и сообщения; dialog_history записывает источник, идентификатор сессии, сообщения, метаданные и время по всем каналам. Тестовый режим использует бесплатный шлюз, потоковые ответы, добавление изображений в контекст и предупреждения о дрейфе стиля.') },
          { title: L('Monitoring / Operational Tables', 'Мониторинг / Операционные таблицы'), body: L('API keys, voice keys, external keys, request counters, last-used timestamps, email queues, send logs, subscribers, suppressions, and journal history make the system observable without exposing secret values. Admin views separate product operations from private user conversations.', 'Ключи доступа, голосовые ключи, внешние ключи, счётчики запросов, время последнего использования, очереди писем, журналы отправки, подписчики, исключения из рассылки и история операций делают систему наблюдаемой без раскрытия секретов. Административные представления отделяют операционные данные от приватных диалогов.') },
        ],
      },
      {
        label: L('Architecture & flow diagrams', 'Архитектура и блок-схемы'),
        paragraphs: [
          L(
            'The methodology is implemented as a layered architecture: identity is designed in a human-readable table, compiled into JSON, loaded through a middleware or API layer, enriched by a structured knowledge base, and verified by anti-drift checks before and after generation.',
            'Методология реализована как многоуровневая архитектура: идентичность проектируется в понятной человеку таблице, компилируется в структурированный формат, загружается через промежуточный слой или программный интерфейс, обогащается структурированной базой знаний и проверяется системой защиты от дрейфа до и после генерации.'
          ),
        ],
        diagram: {
          title: L('System architecture', 'Архитектура системы'),
          columns: 3,
          nodes: [
            { id: 'client', label: L('React client', 'React-клиент'), sublabel: L('Builder · Tester · Profiles · Development', 'Конструктор · Тестер · Профили · Разработка') },
            { id: 'supabase', label: L('Supabase / Cloud Platform', 'Supabase / Облачная платформа'), sublabel: L('Auth · PostgreSQL · Storage · Realtime', 'Аутентификация · PostgreSQL · Хранилище · Реальное время') },
            { id: 'edge', label: L('Edge Functions', 'Граничные функции'), sublabel: L('Chat · RAG · keys · voice · email', 'Чат · Поиск · Ключи · Голос · Почта') },
            { id: 'models', label: L('External model providers', 'Внешние поставщики моделей'), sublabel: L('OpenAI · Anthropic · Google · custom', 'OpenAI · Anthropic · Google · другие') },
            { id: 'voice', label: L('Voice providers', 'Голосовые сервисы'), sublabel: L('ElevenLabs · OpenAI · Cartesia · Azure', 'ElevenLabs · OpenAI · Cartesia · Azure') },
            { id: 'tools', label: L('Tools & channels', 'Инструменты и каналы'), sublabel: L('Telegram · n8n · Vapi · web widget', 'Telegram · n8n · Vapi · веб-виджет') },
          ],
          edges: [
            { from: 'client', to: 'supabase' },
            { from: 'supabase', to: 'edge' },
            { from: 'edge', to: 'models' },
            { from: 'edge', to: 'voice' },
            { from: 'edge', to: 'tools' },
          ],
        },
      },
      {
        label: L('Agent runtime & state machines', 'Работа агента и конечные автоматы'),
        paragraphs: [
          L(
            'A knowledge source moves from pending to processing to extracting and chunking, then embedding and ready; failures remain visible and can be retried. An agent moves from draft to configured, tested, published, imported, and archived. This makes the transition from experiment to production explicit and auditable.',
            'Источник знаний проходит состояния: ожидание, обработка, извлечение и разбиение, затем векторизация и готовность; ошибки остаются видимыми и могут быть повторены. Агент проходит путь: черновик, настройка, тестирование, публикация, импорт и архивация. Переход от эксперимента к рабочей среде становится явным и проверяемым.'
          ),
        ],
        diagram: {
          title: L('Runtime request flow', 'Поток обработки запроса'),
          columns: 1,
          nodes: [
            { id: 'request', label: L('User message', 'Сообщение пользователя'), sublabel: L('Text · image · voice · channel', 'Текст · изображение · голос · канал') },
            { id: 'identity', label: L('Identity checkpoint', 'Контрольная точка идентичности'), sublabel: L('Encoding + immutable locks', 'Кодирование + неизменяемые блокировки') },
            { id: 'knowledge', label: L('RAG retrieval', 'Поиск по базе знаний'), sublabel: L('Top-k chunks from agent knowledge', 'Лучшие фрагменты из базы знаний агента') },
            { id: 'context', label: L('Context assembly', 'Сборка контекста'), sublabel: L('BASE → ENCODING → SUPPLEMENTARY', 'БАЗА → КОДИРОВАНИЕ → ДОПОЛНЕНИЕ') },
            { id: 'model', label: L('Model response', 'Ответ модели'), sublabel: L('Streaming SSE or JSON', 'Потоковый SSE или JSON') },
            { id: 'drift', label: L('Style-drift guard', 'Контроль дрейфа стиля'), sublabel: L('Warning or clean response', 'Предупреждение или чистый ответ') },
          ],
          edges: [
            { from: 'request', to: 'identity' },
            { from: 'identity', to: 'knowledge' },
            { from: 'knowledge', to: 'context' },
            { from: 'context', to: 'model' },
            { from: 'model', to: 'drift' },
          ],
        },
      },
      {
        label: L('Where and why AIIM is needed', 'Где и зачем нужна AIIM'),
        paragraphs: [],
        modules: [
          { title: L('Games and interactive worlds', 'Игры и интерактивные миры'), body: L('NPCs keep memory, stance, and character across sessions. Each player can receive a different reaction while the character remains inside its canon.', 'NPC сохраняет память, позицию и характер между сессиями. Каждый игрок получает индивидуальную реакцию, но персонаж остаётся в рамках своего канона.') },
          { title: L('Virtual companions', 'Виртуальные собеседники'), body: L('Long-term communication without personality reset. The agent builds attachment and recognition, supporting or challenging the user with genuine stance.', 'Долгое общение без сброса личности. Агент формирует привязанность и узнавание, поддерживает или оспаривает пользователя с собственной позицией.') },
          { title: L('Education and training', 'Образование и обучение'), body: L('Teachers with different explanation styles, from strict to ironic. AIIM supports role-based mentoring, debates, patient practice, and predictable pedagogical behavior.', 'Преподаватели с разными стилями объяснения, от строгого до ироничного. AIIM поддерживает ролевое наставничество, дебаты, практику и предсказуемое педагогическое поведение.') },
          { title: L('Psychological and coaching tools', 'Психология и коучинг'), body: L('Safe training dialogues, work with conflicts and boundaries, and role interactions that remain consistent without pretending to diagnose or replace a professional.', 'Безопасные тренировочные диалоги, работа с конфликтами и границами, а также ролевые взаимодействия без имитации диагностики или замены специалиста.') },
          { title: L('Neurotechnology and cognitive science', 'Нейротехнологии и когнитивная наука'), body: L('Modeling cognitive styles for communication research, testing reactions to personality types, and analyzing speech patterns and authorial thinking styles.', 'Моделирование когнитивных стилей для исследований коммуникации, тестирование реакций на типы личности и анализ речевых паттернов и авторского мышления.') },
          { title: L('Media, storytelling, and creativity', 'Медиа, сторителлинг и творчество'), body: L('Characters for series, books, and stories. Dialogue remains faithful to a specific character type while preserving authorial voice and style.', 'Персонажи для сериалов, книг и историй. Диалог остаётся верным характеру, сохраняя авторский голос и стиль.') },
          { title: L('Research and prototyping', 'Исследования и прототипирование'), body: L('Test reactions to personality types through social, UX, and cognitive experiments with reproducible behavioral models.', 'Тестирование реакций на типы личности через социальные, UX- и когнитивные эксперименты с воспроизводимыми поведенческими моделями.') },
          { title: L('Brand personas and public agents', 'Брендовые персонажи и публичные агенты'), body: L('Digital brand representatives keep a consistent tone, stance, and values across every session.', 'Цифровые представители бренда сохраняют тон, позицию и ценности в каждой сессии.') },
        ],
      },
      {
        label: L('Comparison with alternatives', 'Сравнение с альтернативами'),
        paragraphs: [
          L(
            'AIIM is not another prompt template or a closed character app. It separates identity from intelligence, keeps the identity portable across providers, and turns personality into an observable system of parameters, checkpoints, and relationship dynamics.',
            'AIIM, это не ещё один шаблон промпта и не закрытое приложение персонажей. Платформа отделяет идентичность от интеллекта, сохраняет её переносимость между поставщиками и превращает личность в наблюдаемую систему параметров, контрольных точек и динамики отношений.'
          ),
        ],
        tables: [
          {
            title: L('Comparison with alternatives', 'Сравнение с альтернативами'),
            columns: [L('Feature', 'Критерий'), L('System prompt', 'Системный промпт'), L('Character app', 'Приложение персонажей'), L('AIIM', 'AIIM')],
            rows: [
              [L('Number of parameters', 'Количество параметров'), L('Text', 'Текст'), L('Description', 'Описание'), L('50+ numeric', '50+ числовых')],
              [L('Personality drift', 'Дрейф личности'), L('Strong', 'Сильный'), L('Medium', 'Средний'), L('Controlled', 'Контролируемый')],
              [L('LLM choice', 'Выбор LLM'), L('Depends', 'Зависит'), L('Closed', 'Закрыт'), L('Any provider', 'Любой поставщик')],
              [L('Cognitive biases', 'Когнитивные предубеждения'), L('No', 'Нет'), L('No', 'Нет'), L('8 types', '8 типов')],
              [L('Voice', 'Голос'), L('No', 'Нет'), L('Built-in', 'Встроенный'), L('WebRTC', 'WebRTC')],
              [L('Integration API', 'API интеграции'), L('Manual', 'Вручную'), L('No', 'Нет'), L('REST + WebSocket', 'REST + WebSocket')],
              [L('Knowledge base', 'База знаний'), L('No', 'Нет'), L('No', 'Нет'), L('pgvector RAG', 'pgvector RAG')],
              [L('Real person profiling', 'Профилирование реального человека'), L('No', 'Нет'), L('No', 'Нет'), L('Yes', 'Да')],
            ],
          },
        ],
      },
      {
        label: L('API & current status', 'Программный интерфейс и текущий статус'),
        tables: [
          {
            title: L('Technology stack', 'Технологический стек'),
            columns: [L('Layer', 'Слой'), L('Implementation', 'Реализация'), L('Role', 'Роль')],
            rows: [
              [L('Frontend', 'Frontend'), L('React 19 + TypeScript + Vite', 'React 19 + TypeScript + Vite'), L('Builder, Tester, Profiles, Development', 'Конструктор, тестер, профили, разработка')],
              [L('Styling', 'Стилизация'), L('Tailwind CSS + shadcn/ui', 'Tailwind CSS + shadcn/ui'), L('Consistent interface system', 'Единая система интерфейса')],
              [L('Backend', 'Backend'), L('Deno Edge Functions', 'Deno Edge Functions'), L('Serverless orchestration', 'Бессерверная оркестрация')],
              [L('Database', 'База данных'), L('PostgreSQL + pgvector', 'PostgreSQL + pgvector'), L('Identity, knowledge, embeddings', 'Идентичность, знания, эмбеддинги')],
              [L('Authentication', 'Аутентификация'), L('Email + Password', 'Email + Password'), L('Protected workspaces', 'Защищённые рабочие пространства')],
              [L('Encryption', 'Шифрование'), L('AES-256-GCM', 'AES-256-GCM'), L('API key protection', 'Защита API-ключей')],
              [L('Voice', 'Голос'), L('OpenAI Realtime API + WebRTC', 'OpenAI Realtime API + WebRTC'), L('Low-latency voice interaction', 'Голосовое взаимодействие с низкой задержкой')],
              [L('Localization', 'Локализация'), L('RU, EN, DE, FI, FR, SV', 'RU, EN, DE, FI, FR, SV'), L('Six-language foundation', 'Основа для шести языков')],
            ],
          },
        ],
        paragraphs: [
          L(
            'The external API is designed to be OpenAI-compatible: POST /v1/chat/completions with a Bearer external API key, model, messages, optional stream, and optional external session. Requests are logged to dialog_history, request counters are incremented, and errors are mapped to clear client responses. This makes the same agent available to a game server, a web application, a customer-support surface, or an n8n workflow.',
            'Внешний интерфейс спроектирован как совместимый с OpenAI: запрос чата с ключом доступа, моделью, сообщениями, необязательной потоковой передачей и внешней сессией. Запросы записываются в историю диалогов, счётчики увеличиваются, а ошибки преобразуются в понятные ответы клиента. Один и тот же агент становится доступен игровому серверу, веб-приложению, интерфейсу поддержки или рабочему процессу в n8n.'
          ),
          L(
            'AIIM remains an evolving research initiative and a live implementation of the methodology. The public platform at ai-im.tech provides the applied layer, while the research materials document the model, parameter tables, verification logic, and scenarios developed from medical and psychological practice.',
            'AIIM остаётся развивающейся исследовательской инициативой и действующей реализацией методологии. Публичная платформа на ai-im.tech представляет прикладной слой, а исследовательские материалы описывают модель, таблицы параметров, логику верификации и сценарии, разработанные на основе медицинской и психологической практики.'
          ),
        ],
        findings: [
          { title: L('Research and implementation', 'Исследование и реализация'), body: L('ai-im.tech, the live platform for exploring the AIIM methodology, its knowledge base, identity system, and anti-drift architecture.', 'ai-im.tech, действующая платформа, где можно изучить методологию AIIM, её базу знаний, систему идентичности и архитектуру защиты от дрейфа.') }
        ],
      },
    ],
  },
]

export interface Article {
  slug: string
  title: Localized
  date: string
  tag: Localized
  img: string
  excerpt: Localized
  quote: Localized
  body: Localized[]
}

export const articles: Article[] = [
  {
    slug: 'start-on-paper',
    title: L('Why we still start every identity on paper', 'Почему мы всё ещё начинаем каждую айдентику на бумаге'),
    date: 'Jun 2026',
    tag: L('Process', 'Процесс'),
    img: work2,
    excerpt: L(
      'Screens make everything look finished too early. Paper keeps ideas honest, and disposable enough to kill the weak ones.',
      'Экраны заставляют всё выглядеть завершённым слишком рано. Бумага держит идеи честными, и достаточно одноразовыми, чтобы убить слабые.'
    ),
    quote: L(
      'A sketch you can crumple is worth ten artboards you can\'t bear to delete.',
      'Набросок, который можно смять, стоит десяти артбордов, которые не поднимется рука удалить.'
    ),
    body: [
      L(
        'Every identity project begins the same way: two days, no computers. Just markers, tracing paper, and a wall. It sounds romantic, but the reason is brutally practical, screens make everything look finished too early. A logo roughed into Figma inherits polish it hasn\'t earned yet, and polish is how mediocre ideas survive.',
        'Каждый проект айдентики начинается одинаково: два дня, без компьютеров. Только маркеры, калька и стена. Звучит романтично, но причина сурово практична, экраны заставляют всё выглядеть завершённым слишком рано. Логотип, набросанный в Figma, получает лоск, который ещё не заслужил, а лоск, это то, как выживают посредственные идеи.'
      ),
      L(
        'On paper, an idea is exactly as strong as its silhouette. If the mark doesn\'t hold at thumbnail size in a dying marker, no amount of bezier-tuning will save it. Typically forty to sixty sheets are filled before anything is scanned, and the wall review is deliberately ruthless, anything that needs a verbal explanation gets binned.',
        'На бумаге идея ровно настолько сильна, насколько силён её силуэт. Если знак не держится в размере эскиза умирающим маркером, никакая настройка кривых Безье его не спасёт. Обычно заполняется сорок-шестьдесят листов до сканирования, а обзор на стене намеренно безжалостен, всё, что требует словесного объяснения, идёт в корзину.'
      ),
      L(
        'The other benefit is speed of disposal. Designers fall in love with what they\'ve invested time in. A sketch takes ninety seconds, so killing it costs nothing. An artboard takes an afternoon, so it lingers for weeks. Paper keeps ideas honest, and disposable enough that only the strong ones make it to the screen.',
        'Другое преимущество, скорость утилизации. Дизайнеры влюбляются в то, во что вложили время. Набросок занимает девяносто секунд, убить его ничего не стоит. Артборд занимает полдня, он задерживается на недели. Бумага держит идеи честными, и достаточно одноразовыми, чтобы до экрана дошли только сильные.'
      ),
    ],
  },
  {
    slug: 'shaders-for-designers',
    title: L('Shaders for designers: a gentle on-ramp to WebGL', 'Шейдеры для дизайнеров: мягкий вход в WebGL'),
    date: 'Apr 2026',
    tag: L('Technology', 'Технологии'),
    img: work4,
    excerpt: L(
      'You already think in gradients, masks and blend modes. GLSL is the same vocabulary, you\'re just painting with math.',
      'Вы уже мыслите градиентами, масками и режимами наложения. GLSL, это тот же словарь, просто вы рисуете математикой.'
    ),
    quote: L(
      'A gradient you can animate per-pixel is a design tool, not an engineering one.',
      'Градиент, который можно анимировать попиксельно, это дизайн-инструмент.'
    ),
    body: [
      L(
        'Most designers treat WebGL as someone else\'s department. But if you understand gradients, masks and blend modes, and you do, you already think like a shader author. A fragment shader is simply a function that answers one question for every pixel: what color are you?',
        'Большинство дизайнеров считают WebGL чужим отделом. Но если вы понимаете градиенты, маски и режимы наложения, а вы понимаете, вы уже мыслите как автор шейдеров. Фрагментный шейдер, это просто функция, отвечающая на один вопрос для каждого пикселя: какого ты цвета?'
      ),
      L(
        'Start with u_time and a sine wave and you have motion. Add noise and you have texture. Feed it your brand palette and suddenly your identity system isn\'t a static PDF, it\'s a living material that responds to cursor, scroll and sound.',
        'Начните с u_time и синусоиды, и у вас есть движение. Добавьте шум, и у вас есть текстура. Подайте в него брендовую палитру, и suddenly ваша айдентика, не статичный PDF, а живой материал, реагирующий на курсор, скролл и звук.'
      ),
      L(
        'The learning curve is real but shorter than its reputation. Two weekends with The Book of Shaders and you\'ll out-produce most template-based motion tools. Don\'t learn "graphics programming." Learn to paint with math, one gradient at a time.',
        'Кривая обучения реальна, но короче своей репутации. Два выходных с The Book of Shaders, и вы обгоните большинство шаблонных моушн-инструментов. Не учите «графическое программирование». Учитесь рисовать математикой, по одному градиенту за раз.'
      ),
    ],
  },
  {
    slug: 'installation-taught-ux',
    title: L('What installation art taught us about UX', 'Чему искусство инсталляции научило нас в UX'),
    date: 'Feb 2026',
    tag: L('Culture', 'Культура'),
    img: work6,
    excerpt: L(
      'Nobody reads instructions in a gallery. The piece either pulls you in or it doesn\'t, websites work exactly the same way.',
      'Никто не читает инструкции в галерее. Произведение либо затягивает, либо нет, сайты работают точно так же.'
    ),
    quote: L(
      'Nobody reads instructions in a gallery. Nobody reads them on your homepage either.',
      'Никто не читает инструкции в галерее. Никто не читает их и на вашей главной странице.'
    ),
    body: [
      L(
        'Building Neon Ritual changed how interfaces are designed. In a gallery, there is no onboarding flow. The work has about four seconds to pull someone across the threshold, and the only feedback mechanism is whether they stay or drift to the next room.',
        'Создание Neon Ritual изменило подход к проектированию интерфейсов. В галерее нет онбординга. У произведения около четырёх секунд, чтобы притянуть человека, и единственный механизм обратной связи, останется ли он или уйдёт в следующую комнату.'
      ),
      L(
        'The first lesson: response beats instruction. The tunnel never explained itself, it simply reacted to your presence, and reaction invites play. Interfaces are now built the same way: hover states that answer immediately, scroll that acknowledges velocity, buttons that feel pressed before they\'re clicked.',
        'Первый урок: реакция превосходит инструкцию. Туннель никогда не объяснял себя, он просто реагировал на присутствие, а реакция приглашает игру. Интерфейсы теперь строятся так же: ховер-состояния, отвечающие мгновенно, скролл, учитывающий скорость, кнопки, ощущаемые нажатыми до клика.'
      ),
      L(
        'The second: pacing is a feature. The installation breathed slower as crowds grew, and dwell time doubled. Digital products have the same lever, animation timing, reveal order, even scroll friction. UX isn\'t the map of a space. It\'s the tempo of moving through one.',
        'Второй: темп, это функция. Инсталляция дышала медленнее по мере роста толпы, и время задержки удваивалось. У цифровых продуктов тот же рычаг, тайминг анимации, порядок появления, даже трение скролла. UX, это не карта пространства. Это темп движения сквозь него.'
      ),
    ],
  },
  {
    slug: 'boring-websites-manifesto',
    title: L('In defense of the boring website (sometimes)', 'В защиту скучного сайта (иногда)'),
    date: 'Dec 2025',
    tag: L('Opinion', 'Мнение'),
    img: breakImg,
    excerpt: L(
      'Not every page needs a WebGL hero. The most radical thing you can ship is often the one that loads in 400ms and just works.',
      'Не каждой странице нужен WebGL-герой. Самое радикальное, что можно выпустить, часто то, что грузится за 400 мс и просто работает.'
    ),
    quote: L(
      'Restraint is a design decision too, it just doesn\'t screenshot as well.',
      'Сдержанность, тоже дизайн-решение, просто она хуже скриншотится.'
    ),
    body: [
      L(
        'This will sound odd coming from someone who builds scroll-jacked, shader-driven showpieces: most websites should be boring. A checkout flow, a government form, a hospital booking system, the most radical thing you can ship there is a page that loads in 400 milliseconds and behaves exactly as expected.',
        'Звучит странно от того, кто строит скролл-джекнутые, шейдерные шоу-пейджи: большинство сайтов должны быть скучными. Чекаут, госуслуга, запись в больнице, самое радикальное, что можно выпустить там, страница, которая грузится за 400 миллисекунд и ведёт себя ровно как ожидается.'
      ),
      L(
        'The craft doesn\'t disappear in boring work; it moves underground. Type scale, focus order, error copy that sounds human, a DOM that a screen reader can parse without tears. These decisions are invisible when done well, which is precisely why they\'re hard to sell, nobody screenshots a perfect tab order.',
        'Крафт не исчезает в скучной работе; он уходит под землю. Масштаб шрифта, порядок фокуса, тексты ошибок, звучащие по-человечески, DOM, который скринридер парсит без слёз. Эти решения невидимы при правильном исполнении, именно поэтому их трудно продать: никто не делает скриншот идеального порядка табов.'
      ),
      L(
        'The rule of thumb: spectacle belongs where attention is the goal, campaigns, portfolios, launches. Everywhere else, earn trust with speed and clarity, then hide exactly one moment of delight where nobody expects it. Boring is a baseline. Restraint is a design decision too.',
        'Правило: спектакль уместен там, где цель, внимание: кампании, портфолио, запуски. Везде else завоёвывайте доверие скоростью и ясностью, а затем спрячьте ровно один момент восторга там, где никто не ждёт. Скучное, это базовая линия. Сдержанность, тоже дизайн-решение.'
      ),
    ],
  },
]

export const projects: Project[] = _projects.sort((a, b) => (projectOrder[a.slug] ?? 99) - (projectOrder[b.slug] ?? 99))

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug)
export const nextProject = (slug: string) =>
  projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length]
export const nextArticle = (slug: string) =>
  articles[(articles.findIndex((a) => a.slug === slug) + 1) % articles.length]

export function pick<T>(loc: { en: T; ru: T }, lang: Lang): T {
  return lang === 'ru' ? loc.ru : loc.en
}
