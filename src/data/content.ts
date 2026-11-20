import work1 from '@/assets/work1.jpg'
import work2 from '@/assets/work2.jpg'
import work3 from '@/assets/work3.jpg'
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
  type: 'radar' | 'bar' | 'column'
  title: Localized
  labels: Localized[]
  series: { name: Localized; values: number[] }[]
  max?: number
}

export interface StageFlowStep {
  title: Localized
  sublabel: Localized
  active?: boolean
}

export interface StageFlowRow {
  label: Localized
  steps: StageFlowStep[]
}

export interface StageFlow {
  title: Localized
  rows: StageFlowRow[]
  note?: Localized
}

export interface CaseStudySection {
  label: Localized
  paragraphs: Localized[]
  findings?: CaseStudyFinding[]
  modules?: CaseStudyModule[]
  tables?: CaseStudyTable[]
  charts?: CaseStudyChart[]
  diagram?: FlowDiagram
  stageFlow?: StageFlow
  formulas?: CaseStudyFormula[]
  code?: CaseStudyCode
}

export interface CaseStudyFormula {
  name: Localized
  expr: string
  note: Localized
}

export interface CaseStudyCode {
  title: Localized
  lang: string
  source: string
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
  kind: 'product' | 'architecture'
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
  'secure-llm-gateway': -1,
  'telemetry-diagnostics': -0.5,
  'engineering-platform-architecture': -0.4,
  'multi-station-monitoring-architecture': -0.35,
  'neurosignal': 0,
  'aiim': 2,
  'mindcare': 3,
  // removed clinicscribe: 4,
  'audit-it': 5,
  // removed chromatic-drift: 6,
}

const _projects: Project[] = [
  {
    slug: 'telemetry-diagnostics',
    title: L('Autonomous Telemetry Diagnostics & Incident Analysis', 'Автономный комплекс предиктивной диагностики по бортовой телеметрии'),
    category: L('Edge · Air-Gap · Predictive Maintenance', 'Edge · Закрытый контур · Предиктивная диагностика'),
    domain: L('Autonomous Platforms / Flight Data Analysis', 'Автономные платформы / Анализ бортовых журналов'),
    stack: L('Python · NumPy · Pandas · pymavlink · pyulog · Streamlit · Plotly · PyInstaller', 'Python · NumPy · Pandas · pymavlink · pyulog · Streamlit · Plotly · PyInstaller'),
    year: '2026',
    kind: 'product',
    img: work3,
    deliverables: [
      L('Diagnostic Rule Engine', 'Диагностический движок'),
      L('Root Cause Analysis', 'Анализ первопричин (RCA)'),
      L('Offline Desktop Product', 'Офлайн десктоп-продукт'),
      L('Technical Specification', 'Техническое задание'),
    ],
    description: [
      L(
        'A local desktop tool for rapid technical assessment of autonomous platforms based on onboard logs. It evaluates assembly and repair quality, flags degrading components before they fail, and reconstructs the root cause of incidents. It runs fully offline in an air-gapped environment on Windows and Linux laptops.',
        'Локальное десктоп-приложение для экспресс-оценки технического состояния автономных платформ по бортовым журналам. Комплекс проверяет качество сборки и ремонта, выявляет деградацию узлов до отказа и восстанавливает первопричину происшествий. Работает полностью автономно, в закрытом контуре без выхода в интернет, на ноутбуках под Windows и Linux.'
      ),
    ],
    gallery: [work3, work6],
    metrics: [
      { value: L('50 Hz', '50 Гц'), label: L('Unified time grid, 20 ms step', 'Единая временная сетка, шаг 20 мс') },
      { value: L('3', '3'), label: L('Levels of checks: thresholds, statistics, RCA graph', 'Уровня проверок: пороги, статистика, граф RCA') },
      { value: L('5 s', '5 с'), label: L('Retrospective window before the first critical event', 'Окно ретроспекции до первого критического события') },
    ],
    caseStudy: [
      {
        label: L('Problem & approach', 'Задача и подход'),
        paragraphs: [
          L(
            'After a field incident or a repair, engineers spend hours reading raw logs by hand, and conclusions depend on personal experience. Data cannot be uploaded to cloud services, and sensors write at different rates, from 5 to 400 Hz. The product turns this into a repeatable check with a clear verdict.',
            'Ручной анализ исходных журналов после происшествия или ремонта занимает часы и зависит от опыта специалиста. Ограничения на передачу данных в облачные сервисы и различная частота записи датчиков от 5 до 400 Гц усложняют обработку. Продукт превращает это в воспроизводимую проверку с понятным вердиктом.'
          ),
          L(
            'All continuous signals are brought to a single 20 ms (50 Hz) grid by linear interpolation. Discrete flight modes and failsafe flags use zero-order hold, so a mode switch is never smeared between two samples.',
            'Все непрерывные ряды приводятся к единой сетке 20 мс (50 Гц) линейной интерполяцией. Для дискретных режимов и аварийных флагов используется фиксация предыдущего значения (Zero-Order Hold), чтобы переключение режима не «размазывалось» между отсчётами.'
          ),
        ],
        tables: [
          {
            title: L('Diagnostic channels', 'Диагностические контуры'),
            columns: [L('Channel', 'Контур'), L('DataFlash (.bin)', 'DataFlash (.bin)'), L('ULog (.ulg)', 'ULog (.ulg)'), L('Rate', 'Частота')],
            rows: [
              [L('Mechanical vibration', 'Механические вибрации'), L('VIBE (X, Y, Z, Clip)', 'VIBE (X, Y, Z, Clip)'), L('vehicle_imu_status', 'vehicle_imu_status'), L('50–200 Hz', '50–200 Гц')],
              [L('Power battery', 'Силовая батарея'), L('BAT (Volt, Curr, Res)', 'BAT (Volt, Curr, Res)'), L('battery_status', 'battery_status'), L('10–50 Hz', '10–50 Гц')],
              [L('Motor control', 'Управление двигателями'), L('RCOU (C1–C8)', 'RCOU (C1–C8)'), L('actuator_outputs', 'actuator_outputs'), L('50–400 Hz', '50–400 Гц')],
              [L('Radio link', 'Радиоканал'), L('RADIO (RSSI, Noise, TxBuf)', 'RADIO (RSSI, Noise, TxBuf)'), L('radio_status', 'radio_status'), L('5–20 Hz', '5–20 Гц')],
              [L('Satellite navigation', 'Спутниковая навигация'), L('GPS (NSats, HDop)', 'GPS (NSats, HDop)'), L('sensor_gps', 'sensor_gps'), L('5–10 Hz', '5–10 Гц')],
              [L('State estimator', 'Оценщик состояния'), L('XKF1–XKF4', 'XKF1–XKF4'), L('estimator_innovations', 'estimator_innovations'), L('25–100 Hz', '25–100 Гц')],
            ],
          },
        ],
        diagram: {
          title: L('Processing pipeline', 'Конвейер обработки'),
          columns: 5,
          nodes: [
            { id: 'log', label: L('Onboard log', 'Бортовой журнал'), sublabel: L('.bin / .ulg', '.bin / .ulg') },
            { id: 'parse', label: L('Parsers', 'Парсеры'), sublabel: L('pymavlink · pyulog', 'pymavlink · pyulog') },
            { id: 'norm', label: L('Normalization', 'Нормализация'), sublabel: L('50 Hz grid · ZOH', 'Сетка 50 Гц · ZOH') },
            { id: 'diag', label: L('Diagnostic engine', 'Диагностический движок'), sublabel: L('Rules · statistics · RCA', 'Правила · статистика · RCA') },
            { id: 'rep', label: L('Report', 'Отчёт'), sublabel: L('Verdict · PDF passport', 'Вердикт · PDF-паспорт') },
          ],
          edges: [{ from: 'log', to: 'parse' }, { from: 'parse', to: 'norm' }, { from: 'norm', to: 'diag' }, { from: 'diag', to: 'rep' }],
        },
      },
      {
        label: L('Calculations & detection rules', 'Расчёты и правила выявления дефектов'),
        paragraphs: [
          L(
            'Every rule is a formula with explicit thresholds, so a verdict can be checked by hand and defended in an acceptance protocol.',
            'Каждое правило задаётся формулой с явными порогами, поэтому вердикт можно проверить вручную и обосновать в протоколе приёмки.'
          ),
        ],
        formulas: [
          {
            name: L('Frame vibration', 'Вибрация рамы'),
            expr: 'p99(max(|aX|, |aY|)),  p99(|aZ|)',
            note: L('Normal ≤ 15 m/s² · warning 15–30 m/s² (worn dampers, play) · critical > 30 m/s². X/Y dominance points to rotor imbalance or bent shafts; Z dominance to blade-plane mismatch or bearing play.', 'Норма ≤ 15 м/с² · предупреждение 15–30 м/с² (износ демпферов, люфты) · критично > 30 м/с². Доминирование X/Y указывает на разбаланс роторов или погнутые валы, доминирование Z указывает на разнобой плоскостей вращения лопастей или люфт подшипников.'),
          },
          {
            name: L('Accelerometer clipping', 'Клиппинг акселерометра'),
            expr: 'ΔClip = Clip_end − Clip_start',
            note: L('Any ΔClip > 0 means sensor saturation: it distorts the state estimate and is treated as a critical defect.', 'Любое ΔClip > 0 означает аппаратное насыщение датчика: оно искажает навигационное счисление и считается критическим дефектом.'),
          },
          {
            name: L('Battery internal resistance', 'Внутреннее сопротивление батареи'),
            expr: 'R_int = (V_pre − V_post) / (I_post − I_pre)',
            note: L('Measured on a sharp throttle step: ΔI > 10 A within Δt ≤ 0.5 s. Above 0.045 Ω the pack is degraded or the cells are too cold.', 'Считается на резком наборе газа: ΔI > 10 А за Δt ≤ 0,5 с. Сопротивление выше 0,045 Ом указывает на деградацию аккумулятора или переохлаждение ячеек.'),
          },
          {
            name: L('Thrust asymmetry', 'Асимметрия тяги'),
            expr: 'ΔPWM = max_i(PWM_i) − min_j(PWM_j)',
            note: L('In steady hover: 120–250 µs is moderate imbalance; > 250 µs indicates a failed controller phase, a damaged blade or a deformed arm.', 'В установившемся висении значения 120–250 мкс указывают на умеренный дисбаланс; значения > 250 мкс указывают на отказ фазы регулятора, разрушение лопасти или деформацию луча.'),
          },
          {
            name: L('Radio link suppression', 'Подавление радиоканала'),
            expr: 'dRSSI/dt < −20 dBm/s  ∧  SNR < 6 dB  ∧  TxBuf = 0',
            note: L('All three conditions must hold at once, which separates external interference from ordinary range loss.', 'Одновременное выполнение всех трёх условий позволяет отличить внешние помехи от обычной потери дальности.'),
          },
          {
            name: L('Satellite field suppression and spoofing', 'Подавление спутникового поля и подмена координат'),
            expr: 'NSats < 6  ∧  HDop > 2.5  (Δt < 2 s);   ∫a·dt ≠ v_GNSS  ∧  FS > 0',
            note: L('A synchronous drop in satellites with a geometry jump means suppression. A mismatch between inertial and satellite velocity plus an estimator fault flag means spoofing.', 'Синхронное падение числа спутников со скачком геометрического фактора указывает на подавление. Расхождение инерциальной и спутниковой скорости при аварийном флаге оценщика указывает на подмену координат.'),
          },
        ],
      },
      {
        label: L('Root cause analysis', 'Установление первопричины (RCA)'),
        paragraphs: [
          L(
            'The main trap in incident analysis is mistaking impact damage for the cause of a fall. The engine finds the moment T₀ of the first critical event: a failsafe trigger, roll or pitch beyond 60°, or motors stopping in the air.',
            'Главный риск при анализе происшествий заключается в ошибочной трактовке разрушений от удара о землю как причины падения. Движок находит момент T₀ первого критического события: срабатывание failsafe, крен или тангаж больше 60° либо отключение моторов в воздухе.'
          ),
          L(
            'Only anomalies inside the window [T₀ − 5 s; T₀] are candidates for the root cause. Vibration peaks, voltage sags and sensor faults after T₀ are classified as secondary consequences and excluded from the cause graph.',
            'Кандидатами в первопричину считаются только аномалии в окне [T₀ − 5 с; T₀]. Пики вибраций, просадки напряжения и отказы датчиков после T₀ классифицируются как вторичные последствия и исключаются из графа первопричины.'
          ),
        ],
        formulas: [
          {
            name: L('Retrospective window', 'Окно ретроспекции'),
            expr: 'T_pre = [T₀ − 5.0 s;  T₀],   T₀ = min{ t : failsafe(t) ∨ |φ|,|θ| > 60° ∨ motors_off(t) }',
            note: L('Events with t > T₀ are marked as secondary.', 'События с t > T₀ помечаются как вторичные.'),
          },
        ],
        code: {
          title: L('Verdict logic (excerpt)', 'Логика вердикта (фрагмент)'),
          lang: 'python',
          source: `p99_xy = np.percentile(np.maximum(vibe.x, vibe.y), 99)
p99_z  = np.percentile(vibe.z, 99)
clip   = int(vibe.clip.iloc[-1] - vibe.clip.iloc[0])
pwm_imbalance = pwm[["c1","c2","c3","c4"]].mean().pipe(lambda m: m.max() - m.min())

if clip > 0 or max(p99_xy, p99_z) > 30 or pwm_imbalance > 250:
    verdict = "UNFIT"
elif max(p99_xy, p99_z) > 15 or pwm_imbalance > 120:
    verdict = "MAINTENANCE"
else:
    verdict = "FIT"`,
        },
      },
      {
        label: L('Architecture & delivery', 'Архитектура и поставка'),
        paragraphs: [
          L(
            'The product is modular so every layer can be debugged on its own. It ships as a single offline package built with PyInstaller in onedir mode, which keeps start-up fast despite heavy signal-processing libraries. A launcher starts the local interface without a separate browser setup.',
            'Продукт модульный: каждый слой отлаживается отдельно. Поставка одним офлайн-дистрибутивом, собранным PyInstaller в режиме onedir, сокращает время старта тяжёлых библиотек обработки сигналов. Лаунчер сам открывает локальный интерфейс, без отдельной настройки.'
          ),
        ],
        modules: [
          { title: L('parsers/', 'parsers/'), body: L('Isolated readers that turn binary messages into NumPy/Pandas arrays.', 'Изолированные классы чтения, превращающие бинарные сообщения в массивы NumPy/Pandas.') },
          { title: L('processing/', 'processing/'), body: L('Time-series alignment, window filtering and fast rolling statistics.', 'Выравнивание временных рядов, оконная фильтрация, быстрые скользящие статистики.') },
          { title: L('diagnostics/', 'diagnostics/'), body: L('Vibration, power, radio environment checks and the root cause graph.', 'Проверки вибронагрузки, силовой части, радиообстановки и граф первопричин.') },
          { title: L('ui/ · reporting/', 'ui/ · reporting/'), body: L('Streamlit interface with time-synced Plotly charts and a formal PDF passport of the inspection.', 'Интерфейс на Streamlit с синхронизированными по времени графиками Plotly и формализованный PDF-паспорт проверки.') },
        ],
      },
    ],
  },
  {
    slug: 'engineering-platform-architecture',
    title: L('Closed Engineering Platform Architecture & Acceptance Design', 'Архитектура закрытой инженерной платформы управления испытаниями'),
    category: L('System Design · On-Premise · Consulting', 'Проектирование систем · On-Premise · Консалтинг'),
    domain: L('Autonomous Platforms / Engineering Infrastructure', 'Автономные платформы / Инженерная инфраструктура'),
    stack: L('React · TypeScript · Python · FastAPI · PostgreSQL · Parquet · MinIO · Docker', 'React · TypeScript · Python · FastAPI · PostgreSQL · Parquet · MinIO · Docker'),
    year: '2026',
    kind: 'architecture',
    img: work4,
    deliverables: [
      L('System Architecture', 'Архитектура системы'),
      L('Data Model', 'Модель данных'),
      L('Acceptance Criteria', 'Критерии приёмки'),
      L('Rollout Plan', 'План внедрения'),
    ],
    description: [
      L(
        'An architecture design engagement: a closed on-premise engineering platform that links every test flight of an autonomous platform to an immutable snapshot of its exact configuration — components, firmware and parameters. The deliverable is a complete, development-ready design: functional architecture, data model, security model and verifiable acceptance criteria.',
        'Кейс по проектированию архитектуры: закрытая инженерная платформа, которая связывает каждый испытательный полёт автономной платформы с неизменяемым снимком её точной конфигурации, включающим комплектующие, прошивку и параметры. Результат работы представляет собой полный проект, готовый к передаче в разработку: функциональная архитектура, модель данных, модель безопасности и проверяемые критерии приёмки.'
      ),
      L(
        'This is a design case, not a deployed product: the value delivered is the architecture itself — decisions, constraints and acceptance criteria that let an engineering team build the system without re-opening fundamental questions.',
        'В кейсе представлен результат архитектурного проектирования. Внедрение продукта находится за рамками этой работы. Спроектированная система, принятые решения, ограничения и критерии приёмки формируют основу для последующей разработки.'
      ),
    ],
    gallery: [work4],
    metrics: [
      { value: L('12', '12'), label: L('Functional modules with delivery priorities', 'Функциональных модулей с приоритетами поставки') },
      { value: L('23', '23'), label: L('Verifiable acceptance criteria for the first release', 'Проверяемых критериев приёмки первого релиза') },
      { value: L('9', '9'), label: L('Roles in the access control model', 'Ролей в модели разграничения доступа') },
    ],
    caseStudy: [
      {
        label: L('Problem & approach', 'Задача и подход'),
        paragraphs: [
          L(
            'Off-the-shelf flight log viewers answer the question "what happened in this flight", but not the question an engineering organization actually needs: "what exactly did we test, in which configuration, what did we find and who approved the result". Knowledge lives in personal files and spreadsheets of individual specialists, and the technical history of each unit is impossible to reconstruct.',
            'Готовые просмотрщики полётных журналов отвечают на вопрос «что произошло в этом полёте», но не на вопрос, который реально нужен инженерной организации: «что именно мы испытывали, в какой конфигурации, что обнаружили и кто утвердил результат». Хранение знаний в разрозненных файлах и таблицах затрудняет восстановление технической истории каждого изделия.'
          ),
          L(
            'The central design decision: every flight is bound to an immutable configuration snapshot taken at the moment of the test. If an engineer later replaces a component, older flights keep their original snapshot — so the effect of any design change can be measured against comparable tests instead of being guessed.',
            'Центральное проектное решение: каждый полёт привязывается к неизменяемому снимку конфигурации на момент испытания. Если позже инженер заменил компонент, старые полёты сохраняют исходный снимок. Это позволяет измерять влияние любого изменения конструкции на сопоставимых испытаниях.'
          ),
          L(
            'The system deliberately does not control flights, does not send commands to autopilots and does not replace formal certification procedures: it analyzes and documents engineering data without substituting the responsibility of the engineer.',
            'Система принципиально не управляет полётом, не отправляет команды автопилотам и не подменяет утверждённые процедуры испытаний: она анализирует и документирует инженерные данные, не заменяя ответственность инженера.'
          ),
        ],
        diagram: {
          title: L('Engineering history chain', 'Цепочка инженерной истории'),
          columns: 5,
          nodes: [
            { id: 'model', label: L('Model & revision', 'Модель и ревизия'), sublabel: L('Design versions', 'Версии конструкции') },
            { id: 'unit', label: L('Serial unit', 'Серийное изделие'), sublabel: L('Digital passport', 'Цифровой паспорт') },
            { id: 'snap', label: L('Configuration snapshot', 'Снимок конфигурации'), sublabel: L('Immutable', 'Неизменяемый') },
            { id: 'flight', label: L('Test flight', 'Испытательный полёт'), sublabel: L('Telemetry & events', 'Телеметрия и события') },
            { id: 'appr', label: L('Conclusion & approval', 'Заключение и согласование'), sublabel: L('Author · date · status', 'Автор · дата · статус') },
          ],
          edges: [{ from: 'model', to: 'unit' }, { from: 'unit', to: 'snap' }, { from: 'snap', to: 'flight' }, { from: 'flight', to: 'appr' }],
        },
      },
      {
        label: L('Functional architecture', 'Функциональная архитектура'),
        paragraphs: [
          L(
            'The system is decomposed into twelve modules with explicit delivery priorities: P0 is the mandatory core of the first working release, P1 extends production processes, P2 adds intelligent capabilities after enough data has been accumulated.',
            'Система разделена на двенадцать модулей с явными приоритетами поставки: P0 включает обязательное ядро первого рабочего релиза, P1 расширяет производственные процессы, P2 добавляет интеллектуальные возможности после накопления данных.'
          ),
        ],
        tables: [
          {
            title: L('Modules and priorities', 'Модули и приоритеты'),
            columns: [L('Module', 'Модуль'), L('Purpose', 'Назначение'), L('Priority', 'Приоритет')],
            rows: [
              [L('Dashboard', 'Главная панель'), L('State of tests and fleet in 30 seconds', 'Состояние испытаний и парка за 30 секунд'), L('P0', 'P0')],
              [L('Aircraft Registry', 'Реестр изделий'), L('Digital technical passport of each unit', 'Цифровой технический паспорт каждого изделия'), L('P0', 'P0')],
              [L('Configuration Management', 'Управление конфигурациями'), L('Versioned design, BOM and parameter sets', 'Версии конструкции, спецификаций и параметров'), L('P0', 'P0')],
              [L('Flight Test Management', 'Управление испытаниями'), L('Campaigns, test plans, results, approvals', 'Кампании, программы, результаты, согласования'), L('P0', 'P0')],
              [L('Flight Log Analyzer', 'Анализ бортовых журналов'), L('Two autopilot formats, maps, synced charts', 'Два формата автопилотов, карта, синхронные графики'), L('P0', 'P0')],
              [L('Diagnostics Engine', 'Диагностический движок'), L('Deviation detection per model and configuration', 'Выявление отклонений с учётом модели и конфигурации'), L('P0', 'P0')],
              [L('Component Management', 'Учёт компонентов'), L('Component history and condition', 'История и состояние комплектующих'), L('P1', 'P1')],
              [L('Engineering Changes', 'Инженерные изменения'), L('Change requests and approval history', 'Запросы на изменение и история согласований'), L('P1', 'P1')],
              [L('Maintenance & NCR', 'Обслуживание и несоответствия'), L('Repairs, nonconformities, corrective actions', 'Ремонты, несоответствия, корректирующие действия'), L('P1', 'P1')],
              [L('Documentation & Reports', 'Документация и отчёты'), L('Technical documents and formal PDF reports', 'Технические документы и формальные PDF-отчёты'), L('P1', 'P1')],
              [L('Configuration Impact Analysis', 'Анализ влияния конфигурации'), L('Comparing design revisions under comparable conditions', 'Сравнение ревизий конструкции в сопоставимых условиях'), L('P1', 'P1')],
              [L('AI Engineering Assistant', 'ИИ-ассистент инженера'), L('Local assistant over the internal knowledge base', 'Локальный ассистент над внутренней базой знаний'), L('P2', 'P2')],
            ],
          },
        ],
      },
      {
        label: L('Data model design rules', 'Правила проектирования модели данных'),
        paragraphs: [
          L(
            'The database is designed as an engineering history of the product, not as a list of aircraft and flights. Five mandatory rules protect the evidentiary value of the data.',
            'База данных спроектирована для хранения полной инженерной истории изделия. Пять обязательных правил защищают доказательную ценность данных.'
          ),
        ],
        findings: [
          {
            title: L('History is immutable', 'Неизменяемость истории'),
            body: L('Source files, approved configurations, completed tests and diagnostic results can never be silently overwritten.', 'Исходные файлы, утверждённые конфигурации, завершённые испытания и результаты диагностики нельзя молча перезаписать.'),
          },
          {
            title: L('Everything is versioned', 'Версионирование'),
            body: L('All versions of designs, BOMs, autopilot parameter sets and diagnostic rules are preserved.', 'Сохраняются все версии конструкций, спецификаций, наборов параметров автопилота и диагностических правил.'),
          },
          {
            title: L('Every metric has a source', 'Происхождение данных'),
            body: L('Each metric carries its source file, parser, source field, timestamp and unit of measure.', 'Каждый показатель хранит источник: исходный файл, парсер, поле источника, временную метку и единицу измерения.'),
          },
          {
            title: L('Every flight is bound to a unit', 'Связь с изделием'),
            body: L('Each flight references the serial number and the configuration snapshot at the moment of the test.', 'Каждый полёт связан с серийным номером изделия и снимком конфигурации на момент испытания.'),
          },
          {
            title: L('Approvals are traceable', 'История согласований'),
            body: L('Who created, who reviewed, who approved and when — visible in the system for every result.', 'Для каждого результата система фиксирует авторов создания, проверки и утверждения, время каждого действия.'),
          },
        ],
        tables: [
          {
            title: L('Storage split', 'Разделение хранилищ'),
            columns: [L('Store', 'Хранилище'), L('Content', 'Содержимое')],
            rows: [
              [L('PostgreSQL', 'PostgreSQL'), L('Metadata, relations, time and signal indexes', 'Метаданные, связи, индексы по интервалам и сигналам')],
              [L('Parquet', 'Parquet'), L('Telemetry time series, compact columnar layout', 'Временные ряды телеметрии, колоночное хранение')],
              [L('MinIO', 'MinIO'), L('Source logs and documents, SHA-256 integrity control', 'Исходные журналы и документы, контроль целостности SHA-256')],
            ],
          },
        ],
      },
      {
        label: L('Technical architecture & security', 'Техническая архитектура и безопасность'),
        paragraphs: [
          L(
            'The chosen shape is a modular monolith with three independent executables — web interface, API and a background worker for log processing — deployed entirely inside the corporate infrastructure. The architecture is air-gap ready from day one: offline Docker images, pinned dependency versions, maps without external APIs, no telemetry sent to the vendor.',
            'Выбранная платформа представляет собой модульный монолит из трёх независимых исполняемых приложений: веб-интерфейса, API и фонового обработчика журналов. Всё разворачивается внутри корпоративной инфраструктуры. Архитектура с первого дня готова к полной изоляции: офлайн-образы, зафиксированные версии зависимостей, карты без внешних API, никакой телеметрии разработчику.'
          ),
          L(
            'Logs are treated as untrusted input: parsers run in restricted worker processes with CPU, memory, time and filesystem limits. Access control follows least privilege across nine roles, and approvals use versioned, append-only records rather than a simple "updated at" field.',
            'Журналы рассматриваются как недоверенные входные данные: парсеры запускаются в ограниченных рабочих процессах с лимитами процессора, памяти, времени и доступа к файловой системе. Доступ строится по принципу минимально необходимых полномочий для девяти ролей. История согласований ведётся в версионированном append-only журнале, который сохраняет последовательность действий и исключает перезапись существующих записей.'
          ),
        ],
        diagram: {
          title: L('Deployment inside the perimeter', 'Развёртывание внутри контура'),
          columns: 5,
          nodes: [
            { id: 'users', label: L('Corporate users', 'Пользователи'), sublabel: L('Engineers · QA · managers', 'Инженеры · ОТК · руководители') },
            { id: 'proxy', label: L('Reverse proxy', 'Обратный прокси'), sublabel: L('TLS · request limits', 'TLS · лимиты запросов') },
            { id: 'web', label: L('Web + API', 'Веб + API'), sublabel: L('React · FastAPI', 'React · FastAPI') },
            { id: 'worker', label: L('Worker', 'Обработчик'), sublabel: L('Parsing · analytics', 'Парсинг · аналитика') },
            { id: 'data', label: L('Data layer', 'Слой данных'), sublabel: L('PostgreSQL · MinIO · Parquet', 'PostgreSQL · MinIO · Parquet') },
          ],
          edges: [{ from: 'users', to: 'proxy' }, { from: 'proxy', to: 'web' }, { from: 'web', to: 'worker' }, { from: 'worker', to: 'data' }, { from: 'web', to: 'data' }],
        },
      },
      {
        label: L('Acceptance criteria', 'Критерии приёмки'),
        paragraphs: [
          L(
            'The design fixes in advance what the organization must receive: not a working interface, but a verifiable set of capabilities. The first release has 23 acceptance criteria — from "deploys on the company\'s own server" and "source logs remain immutable" to "backups restore successfully" and "verified to work without internet access".',
            'Проект заранее фиксирует проверяемый набор возможностей системы. Для первого релиза определены 23 критерия приёмки: от «разворачивается на собственном сервере» и «исходные журналы остаются неизменными» до «резервные копии успешно восстанавливаются» и «проверена работа без доступа к интернету».'
          ),
          L(
            'Acceptance requires a prepared test dataset: logs of both autopilot families, different firmware versions, incomplete and damaged files, flights with known technical events, and pairs of comparable flights before and after a configuration change — without them it is impossible to prove that the impact analysis detects real changes rather than drawing pretty charts.',
            'Для приёмки заранее определён тестовый набор: журналы обоих семейств автопилотов, разные версии прошивок, неполные и повреждённые файлы, полёты с известными техническими событиями и пары сопоставимых полётов до и после изменения конфигурации. Этот набор позволяет проверить, что анализ влияния конфигурации обнаруживает реальные изменения.'
          ),
        ],
        findings: [
          {
            title: L('Success scenario 1', 'Сценарий успеха 1'),
            body: L('An engineer can open any registered unit and reconstruct its full technical history.', 'Инженер может открыть любое зарегистрированное изделие и восстановить его техническую историю.'),
          },
          {
            title: L('Success scenario 2', 'Сценарий успеха 2'),
            body: L('An engineer can walk the full path from a raw log to a substantiated diagnostic conclusion.', 'Инженер может пройти путь от исходного журнала до обоснованного диагностического заключения.'),
          },
          {
            title: L('Success scenario 3', 'Сценарий успеха 3'),
            body: L('A test lead can see the campaign history, configurations, findings and approval results.', 'Руководитель испытаний видит историю кампании, конфигурации, замечания и результаты согласований.'),
          },
        ],
      },
    ],
  },
  {
    slug: 'multi-station-monitoring-architecture',
    title: L('Distributed Sensor Station Monitoring Platform Architecture', 'Архитектура платформы мониторинга распределённой сети сенсорных станций'),
    category: L('System Design · On-Premise · Multi-Vendor', 'Проектирование систем · On-Premise · Мультивендорная интеграция'),
    domain: L('Airspace Observation / Distributed Infrastructure', 'Наблюдение за воздушной обстановкой / Распределённая инфраструктура'),
    stack: L('React · TypeScript · FastAPI · PostgreSQL · Redis · Celery · WebSocket · MapLibre · MinIO · Docker', 'React · TypeScript · FastAPI · PostgreSQL · Redis · Celery · WebSocket · MapLibre · MinIO · Docker'),
    year: '2026',
    kind: 'architecture',
    img: work2,
    deliverables: [
      L('System Architecture', 'Архитектура системы'),
      L('Unified Observation Model', 'Единая модель наблюдений'),
      L('Integration Layer', 'Интеграционный слой'),
      L('Non-functional Requirements', 'Нефункциональные требования'),
    ],
    description: [
      L(
        'An architecture design engagement: a centralized on-premise platform that unites geographically distributed stationary and mobile sensor stations into a single information system with one operator workstation. The platform collects observations from equipment of different vendors, monitors station health, keeps a single event history and provides analytics and reporting.',
        'Кейс по проектированию архитектуры: централизованная on-premise платформа объединяет территориально распределённые стационарные и мобильные станции наблюдения за воздушной обстановкой в единую информационную систему с одним рабочим местом оператора. Платформа собирает наблюдения с оборудования разных производителей, контролирует техническое состояние станций, хранит единую историю событий и формирует аналитику и отчётность.'
      ),
      L(
        'This is a design case. The value delivered is the architecture itself: an independent data model, integration contracts and verifiable requirements developed from public standards and open protocols.',
        'В кейсе представлен результат архитектурного проектирования. Независимая модель данных, интеграционные контракты и проверяемые требования сформированы на основе общедоступных технических стандартов и открытых протоколов.'
      ),
    ],
    gallery: [work2],
    metrics: [
      { value: L('12', '12'), label: L('Functional modules', 'Функциональных модулей') },
      { value: L('4', '4'), label: L('Independent applications in the modular monolith', 'Независимых приложения в составе модульного монолита') },
      { value: L('3', '3'), label: L('Timestamps per event for latency control', 'Временные метки у каждого события для контроля задержек') },
    ],
    caseStudy: [
      {
        label: L('Problem & approach', 'Задача и подход'),
        paragraphs: [
          L(
            'Each station ships with its own vendor software, so an operator has to connect to every station separately. Observations are scattered, the technical state of the network is invisible and there is no single history for analysis.',
            'Каждая станция поставляется со своим программным обеспечением производителя, поэтому оператору приходится подключаться к каждой станции отдельно. Наблюдения разрознены, техническое состояние сети не видно целиком, единая история для анализа отсутствует.'
          ),
          L(
            'The central design decision is a layer of independent integration adapters. Every vendor protocol is translated into one unified observation model, so the rest of the platform never depends on a specific manufacturer.',
            'Центральное проектное решение представляет собой слой независимых интеграционных адаптеров. Протокол каждого производителя преобразуется в единую модель наблюдений, поэтому остальная платформа не зависит от конкретного поставщика оборудования.'
          ),
          L(
            'The system is limited to observation, registration, visualization, equipment monitoring and reporting. It performs no active influence on observed objects and no automatic threat classification: unknown affiliation is never interpreted as hostile.',
            'Система ограничена наблюдением, регистрацией, визуализацией, мониторингом оборудования и отчётностью. Активного воздействия на наблюдаемые объекты и автоматической классификации угроз в ней нет: неизвестная принадлежность объекта никогда не трактуется как враждебная.'
          ),
        ],
        diagram: {
          title: L('Overall system architecture', 'Общая архитектура системы'),
          columns: 5,
          nodes: [
            { id: 'st', label: L('Field level', 'Полевой уровень'), sublabel: L('Stations A · B · N', 'Станции A · B · N') },
            { id: 'gw', label: L('Integration level', 'Интеграционный уровень'), sublabel: L('Gateway · adapters · validation', 'Шлюз · адаптеры · валидация') },
            { id: 'core', label: L('Central platform', 'Центральная платформа'), sublabel: L('API · RBAC · events · alerts', 'API · RBAC · события · предупреждения') },
            { id: 'store', label: L('Storage level', 'Уровень хранения'), sublabel: L('PostgreSQL · Redis · Object Storage', 'PostgreSQL · Redis · Object Storage') },
            { id: 'ui', label: L('User level', 'Пользовательский уровень'), sublabel: L('Dashboard · station map', 'Главная панель · карта станций') },
          ],
          edges: [{ from: 'st', to: 'gw' }, { from: 'gw', to: 'core' }, { from: 'core', to: 'store' }, { from: 'core', to: 'ui' }],
        },
      },
      {
        label: L('Functional architecture', 'Функциональная архитектура'),
        paragraphs: [
          L(
            'The platform is decomposed into twelve modules. Each serves one role group: operators, senior operators, technical specialists, administrators, managers and auditors.',
            'Платформа разделена на двенадцать модулей. Каждый обслуживает свою группу ролей: операторов, старших операторов, технических специалистов, администраторов, руководителей и аудиторов.'
          ),
        ],
        tables: [
          {
            title: L('Modules', 'Модули'),
            columns: [L('Module', 'Модуль'), L('Purpose', 'Назначение')],
            rows: [
              [L('Dashboard', 'Главная панель'), L('Network summary, recent observations, alerts', 'Сводка по сети, последние наблюдения, предупреждения')],
              [L('Station Map', 'Карта станций'), L('Locations, statuses, confirmed coverage only', 'Расположение, статусы, только подтверждённые зоны покрытия')],
              [L('Station Registry', 'Реестр станций'), L('Digital passport of every station', 'Цифровой паспорт каждой станции')],
              [L('Detection Events', 'События обнаружения'), L('Central observation log with source reference', 'Централизованный журнал наблюдений со ссылкой на источник')],
              [L('Observation History', 'История наблюдений'), L('Chronology and record matching', 'Хронология и сопоставление записей')],
              [L('Analytics', 'Аналитика'), L('Activity by period, station and source', 'Активность по периодам, станциям и источникам')],
              [L('Station Health', 'Техническое состояние'), L('Availability, latency, sensor state', 'Доступность, задержки, состояние сенсоров')],
              [L('Alerts & Incidents', 'Предупреждения и инциденты'), L('Connection loss, failures, incident handling', 'Потеря связи, сбои, работа с инцидентами')],
              [L('Reports', 'Отчётность'), L('Periodic and formal PDF reports', 'Периодические и формальные PDF-отчёты')],
              [L('Administration', 'Администрирование'), L('Users, roles, station settings', 'Пользователи, роли, настройки станций')],
              [L('Audit Log', 'Журнал действий'), L('Every user action and configuration change', 'Каждое действие пользователя и изменение конфигурации')],
              [L('Integration Center', 'Центр интеграций'), L('Adapters, versions, connection checks', 'Адаптеры, версии, проверка соединений')],
            ],
          },
        ],
      },
      {
        label: L('Integration layer & event pipeline', 'Интеграционный слой и обработка событий'),
        paragraphs: [
          L(
            'Every adapter is a versioned contract: vendor, supported model, protocol version, message types, input validation schema, error handler and connection check. The adapter only translates data and never decides whether an observed object is a threat.',
            'Каждый адаптер оформлен как версионированный контракт: производитель, поддерживаемая модель, версия протокола, типы сообщений, схема проверки входных данных, обработчик ошибок и проверка соединения. Адаптер только преобразует данные и не принимает решений о характере наблюдаемого объекта.'
          ),
          L(
            'The event pipeline is idempotent: repeated delivery never creates duplicates, failed messages go to a retry queue and a separate error log, raw messages are stored apart from normalized data.',
            'Конвейер обработки событий идемпотентен: повторная доставка не создаёт дубликатов, ошибочные сообщения попадают в очередь повторных попыток и отдельный журнал ошибок, исходные сообщения хранятся отдельно от нормализованных данных.'
          ),
        ],
        diagram: {
          title: L('Event processing pipeline', 'Конвейер обработки событий'),
          columns: 5,
          nodes: [
            { id: 'rx', label: L('Receive', 'Приём'), sublabel: L('Station gateway', 'Шлюз станций') },
            { id: 'ad', label: L('Adapt', 'Преобразование'), sublabel: L('Vendor adapter', 'Адаптер производителя') },
            { id: 'val', label: L('Validate', 'Проверка'), sublabel: L('Schema · completeness', 'Схема · полнота') },
            { id: 'dd', label: L('Deduplicate', 'Дедупликация'), sublabel: L('Idempotency key', 'Ключ идемпотентности') },
            { id: 'sv', label: L('Store & publish', 'Сохранение и публикация'), sublabel: L('Database · WebSocket', 'База данных · WebSocket') },
          ],
          edges: [{ from: 'rx', to: 'ad' }, { from: 'ad', to: 'val' }, { from: 'val', to: 'dd' }, { from: 'dd', to: 'sv' }],
        },
        formulas: [
          {
            name: L('Transport latency', 'Задержка доставки'),
            expr: 'Δ_доставки = received_at − observed_at',
            note: L('Time from the event at the source to its arrival at the server.', 'Время от события на источнике до поступления на сервер.'),
          },
          {
            name: L('Processing latency', 'Задержка обработки'),
            expr: 'Δ_обработки = processed_at − received_at',
            note: L('Time spent in validation, normalization and storage.', 'Время на проверку, нормализацию и сохранение.'),
          },
          {
            name: L('Station availability', 'Доступность станции'),
            expr: 'A = T_связи / T_периода × 100%',
            note: L('Share of the period during which the station delivered data or heartbeats.', 'Доля периода, в течение которого станция передавала данные или контрольные сигналы.'),
          },
        ],
      },
      {
        label: L('Unified observation model', 'Единая модель наблюдений'),
        paragraphs: [
          L(
            'The model separates three entities. One station can carry several sensors, and one object can be registered by several stations.',
            'Модель разделяет три сущности. Одна станция может нести несколько сенсоров, один объект может быть зарегистрирован несколькими станциями.'
          ),
        ],
        diagram: {
          title: L('Core entities', 'Основные сущности'),
          columns: 4,
          nodes: [
            { id: 'station', label: L('Station', 'Станция'), sublabel: L('Physical site', 'Физическая станция') },
            { id: 'sensor', label: L('Sensor', 'Сенсор'), sublabel: L('Installed on station', 'Установлен на станции') },
            { id: 'obs', label: L('Observation', 'Наблюдение'), sublabel: L('Single registered event', 'Единичное зарегистрированное событие') },
            { id: 'raw', label: L('Raw message', 'Исходное сообщение'), sublabel: L('Stored separately', 'Хранится отдельно') },
          ],
          edges: [{ from: 'station', to: 'sensor' }, { from: 'sensor', to: 'obs' }, { from: 'obs', to: 'raw' }],
        },
        findings: [
          { title: L('Three timestamps', 'Три временные метки'), body: L('observed_at, received_at and processed_at are stored in UTC for every event.', 'Для каждого события в UTC хранятся observed_at, received_at и processed_at.') },
          { title: L('Primary source', 'Первичный источник'), body: L('Every observation keeps a link to the station, sensor and original message.', 'Каждое наблюдение хранит ссылку на станцию, сенсор и исходное сообщение.') },
          { title: L('Incomplete data is marked', 'Маркировка неполных данных'), body: L('Records with insufficient completeness are flagged instead of being silently accepted.', 'Записи с недостаточной полнотой помечаются как неполные.') },
          { title: L('Configuration is journaled', 'Журналирование конфигурации'), body: L('Every change to a station configuration is recorded in the audit log.', 'Каждое изменение конфигурации станции фиксируется в журнале действий.') },
        ],
      },
      {
        label: L('Technical architecture & security', 'Техническая архитектура и безопасность'),
        paragraphs: [
          L(
            'The chosen shape is a modular monolith with asynchronous event processing and four applications: web interface, API, background worker and station gateway. Adapters and handlers run in isolated processes, which keeps deployment simple while leaving room for scaling.',
            'Выбранная платформа представляет собой модульный монолит с асинхронной обработкой событий из четырёх приложений: веб-интерфейса, API, фонового обработчика и шлюза станций. Адаптеры и обработчики работают в изолированных процессах. Такая схема упрощает развёртывание и сохраняет запас для масштабирования.'
          ),
          L(
            'Deployment is fully on-premise inside the corporate network or VPN, with no public registration, RBAC with least privilege, MFA, TLS, encrypted backups and regular restore checks. For air-gapped sites the design includes local container images, offline update packages and no mandatory external APIs.',
            'Развёртывание полностью on-premise внутри корпоративной сети или VPN: без публичной регистрации, с RBAC и минимальными привилегиями, MFA, TLS, шифрованием резервных копий и регулярной проверкой восстановления. Для изолированных площадок предусмотрены локальные образы контейнеров, офлайн-пакеты обновлений и отсутствие обязательных внешних API.'
          ),
        ],
        diagram: {
          title: L('Request sequence', 'Последовательность обработки'),
          columns: 5,
          nodes: [
            { id: 'stn', label: L('Station', 'Станция'), sublabel: L('1. Sends event', '1. Передаёт событие') },
            { id: 'gwy', label: L('Gateway', 'Шлюз'), sublabel: L('2. Accepts and queues', '2. Принимает и ставит в очередь') },
            { id: 'wrk', label: L('Worker', 'Обработчик'), sublabel: L('3. Normalizes and stores', '3. Нормализует и сохраняет') },
            { id: 'api', label: L('API', 'API'), sublabel: L('4. Updates network state', '4. Обновляет состояние сети') },
            { id: 'op', label: L('Operator', 'Оператор'), sublabel: L('5. Sees event in real time', '5. Видит событие в реальном времени') },
          ],
          edges: [{ from: 'stn', to: 'gwy' }, { from: 'gwy', to: 'wrk' }, { from: 'wrk', to: 'api' }, { from: 'api', to: 'op' }],
        },
        tables: [
          {
            title: L('Design scenario', 'Проектный сценарий'),
            columns: [L('Parameter', 'Параметр'), L('Assumption', 'Допущение')],
            rows: [
              [L('Stations', 'Станции'), L('10–50', '10–50')],
              [L('Users', 'Пользователи'), L('5–20', '5–20')],
              [L('Operating mode', 'Режим работы'), L('24/7', '24/7')],
              [L('Network', 'Сеть'), L('LAN / VPN', 'LAN / VPN')],
              [L('Event updates', 'Обновление событий'), L('Near real-time', 'Близко к реальному времени')],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'secure-llm-gateway',
    title: L('Secure On-Premise LLM Gateway', 'Локальный шлюз защищённой работы с данными и облачными LLM'),
    category: L('InfoSec · On-Premise · Pilot', 'Информационная безопасность · On-premise · Пилот'),
    domain: L('Data Protection / Closed-Loop Infrastructure', 'Защита данных / Закрытый контур'),
    stack: L('Python 3.13 · FastAPI · SQLAlchemy 2.0 · SQLCipher · React 19 · TanStack Router · Electron · Tesseract 5 · Natasha · AES-256-GCM · Ed25519', 'Python 3.13 · FastAPI · SQLAlchemy 2.0 · SQLCipher · React 19 · TanStack Router · Electron · Tesseract 5 · Natasha · AES-256-GCM · Ed25519'),
    year: '2026',
    kind: 'product',
    img: work5,
    deliverables: [
      L('Security Architecture', 'Архитектура безопасности'),
      L('Pseudonymization Engine', 'Движок псевдонимизации'),
      L('Desktop Product', 'Десктоп-продукт'),
      L('Compliance Design', 'Проектирование соответствия 152-ФЗ'),
    ],
    description: [
      L(
        'A software gateway deployed inside a closed corporate perimeter (on-premise) that lets specialists use cloud LLMs without sending personal data outside. Before a request leaves the perimeter, the gateway performs reversible pseudonymization: names, IDs, policy numbers, addresses and phones are replaced with tokens, and dates are shifted by a random offset. Only de-identified text reaches the model; the answer is re-identified locally.',
        'Программный шлюз, который разворачивается внутри закрытого контура организации (on-premise) и позволяет специалистам использовать облачные LLM, не вынося персональные данные за периметр. Перед отправкой запроса шлюз выполняет обратимую псевдонимизацию: ФИО, СНИЛС, полисы, адреса и телефоны заменяются токенами. Даты сдвигаются на случайное число дней. В облако уходит только обезличенный текст. Ответ модели восстанавливается локально.'
      ),
      L(
        'The pilot domain is clinical work under 152-FZ (personal data) and 323-FZ (medical confidentiality), one of the strictest regulatory environments for data channels. The same architecture applies to any closed-loop infrastructure where data must not leave the perimeter.',
        'Пилотной областью стала клиническая работа в рамках 152-ФЗ о персональных данных и 323-ФЗ о врачебной тайне, одной из самых строгих сред для каналов передачи данных. Та же архитектура применима к любой инфраструктуре закрытого контура, где данные не должны покидать периметр.'
      ),
    ],
    gallery: [work5],
    metrics: [
      { value: L('AES-256', 'AES-256'), label: L('GCM in RAM · SQLCipher at rest', 'GCM в памяти · SQLCipher на диске') },
      { value: L('10', '10'), label: L('Personal data types detected', 'Типов персональных данных распознаётся') },
    ],
    caseStudy: [
      {
        label: L('Problem & approach', 'Задача и подход'),
        paragraphs: [
          L(
            'Standard cloud AI tools send raw text to third-party servers, which is unacceptable for organizations working with personal data. The gateway acts as an intermediary inside the perimeter: it removes identifiers, controls every outgoing request and restores the full text only on the local workstation.',
            'Стандартные облачные ИИ-инструменты отправляют исходный текст на сторонние серверы, что недопустимо для организаций, работающих с персональными данными. Шлюз выступает посредником внутри контура: удаляет идентификаторы, контролирует каждый исходящий запрос и восстанавливает полный текст только на локальном рабочем месте.'
          ),
        ],
        findings: [
          {
            title: L('Token maps live only in memory', 'Карты токенов живут только в памяти'),
            body: L('Token-to-value maps are kept in RAM encrypted with AES-256-GCM and destroyed at the end of a session, so they cannot be stolen from disk.', 'Карты соответствия токенов хранятся только в оперативной памяти в зашифрованном виде (AES-256-GCM) и уничтожаются по завершении сессии, что исключает их кражу с диска.'),
          },
          {
            title: L('Domain terms are protected from distortion', 'Предметные термины защищены от искажений'),
            body: L('A dictionary of 121 eponyms keeps terms like Crohn\'s disease intact, so anonymization does not corrupt the meaning of the request.', 'Словарь из 121 эпонима сохраняет термины вроде «болезнь Крона», чтобы обезличивание не искажало смысл запроса.'),
          },
          {
            title: L('Leaks are blocked at the router', 'Утечки блокируются на уровне роутера'),
            body: L('If a request that should contain no personal data (for example a drug interaction check) includes a phone number or a name, it is rejected before it leaves the perimeter.', 'Если в запросе, который не должен содержать ПДн (например, проверка лекарственного взаимодействия), обнаружен телефон или ФИО, он отклоняется до выхода за контур.'),
          },
        ],
        diagram: {
          title: L('Data flow through the perimeter', 'Поток данных через контур'),
          columns: 6,
          nodes: [
            { id: 'in', label: L('Input text / scan', 'Текст / скан'), sublabel: L('Tesseract OCR', 'OCR Tesseract') },
            { id: 'anon', label: L('Anonymizer', 'Анонимайзер'), sublabel: L('Tokens · date shift', 'Токены · сдвиг дат') },
            { id: 'ner', label: L('NER check', 'NER-проверка'), sublabel: L('Natasha + Regex', 'Natasha + Regex') },
            { id: 'llm', label: L('Cloud LLM', 'Облачная LLM'), sublabel: L('De-identified only', 'Только обезличенное') },
            { id: 'val', label: L('Response validator', 'Валидатор ответа'), sublabel: L('Rules · red flags', 'Правила · красные флаги') },
            { id: 'out', label: L('Re-identification', 'Депсевдонимизация'), sublabel: L('Local workstation', 'Локальное АРМ') },
          ],
          edges: [
            { from: 'in', to: 'anon' }, { from: 'anon', to: 'ner' }, { from: 'ner', to: 'llm' },
            { from: 'llm', to: 'val' }, { from: 'val', to: 'out' },
          ],
        },
      },
      {
        label: L('Security & access control', 'Безопасность и разграничение доступа'),
        paragraphs: [
          L(
            'Six roles separate duties: administrator, head, specialist, registrar, auditor and observer. A record is visible only to its author, not even to the administrator. Authentication uses JWT and bcrypt with automatic session expiry; licenses are signed with Ed25519.',
            'Шесть ролей разделяют полномочия: администратор, заведующий, специалист, регистратор, аудитор и наблюдатель. Карту видит только её автор, даже администратор не может её открыть. Аутентификация построена на JWT и bcrypt с автоматическим завершением сессии, лицензии подписываются Ed25519.'
          ),
          L(
            'An append-only audit log records every login, edit, pseudonymization operation and decision, meeting article 18.1 of 152-FZ. A separate access log records who opened a record and when, without storing its contents. Backups are encrypted archives containing the SQLCipher database and key.',
            'Неизменяемый (append-only) журнал аудита фиксирует каждый вход, изменение, операцию псевдонимизации и принятое решение в соответствии со ст. 18.1 152-ФЗ. Отдельный журнал доступа записывает, кто и когда открывал карту, не сохраняя её содержимое. Резервные копии хранятся в зашифрованных архивах с базой SQLCipher и ключом.'
          ),
        ],
        tables: [
          {
            title: L('Cryptography & protection layers', 'Криптография и уровни защиты'),
            columns: [L('Layer', 'Уровень'), L('Mechanism', 'Механизм')],
            rows: [
              [L('Data at rest', 'Данные на диске'), L('SQLCipher, AES-256', 'SQLCipher, AES-256')],
              [L('Session token maps', 'Карты токенов сессии'), L('AES-256-GCM, RAM only', 'AES-256-GCM, только RAM')],
              [L('Passwords & sessions', 'Пароли и сессии'), L('bcrypt, JWT, auto-logout', 'bcrypt, JWT, автовыход')],
              [L('Licensing', 'Лицензирование'), L('Ed25519 signatures', 'Подписи Ed25519')],
              [L('Outgoing channel', 'Исходящий канал'), L('Pseudonymization + router-level blocking', 'Псевдонимизация + блокировка на уровне роутера')],
            ],
          },
        ],
      },
      {
        label: L('Product features & integration', 'Возможности и интеграция'),
        paragraphs: [
          L(
            'Beyond the gateway, the product is a full desktop workstation (Electron, NSIS installer): OCR of paper scans, entity extraction, 24 critical-threshold rules with red-flag alerts, decision support with logged reasoning, scheduling and a shared document library. Records export to HL7 FHIR JSON, Word and PDF, and full databases move between sites as ZIP archives.',
            'Продукт также представляет собой полноценное десктопное рабочее место (Electron, установщик NSIS): OCR бумажных сканов, извлечение сущностей, 24 правила критических порогов с красными флагами, поддержка принятия решений с фиксацией обоснования, расписание и общая база документов. Карты выгружаются в HL7 FHIR JSON, Word и PDF. База целиком переносится между площадками в ZIP-архиве.'
          ),
        ],
      },
    ],
  },
  {
    slug: 'audit-it',
    title: L('AI Compliance Review of Documentation', 'ИИ-проверка документации на соответствие регламентам'),
    category: L('B2B SaaS', 'B2B SaaS'),
    domain: L('Compliance / RegTech', 'Комплаенс / RegTech'),
    stack: L('React 18 · Vite · Supabase · PostgreSQL · Edge Functions', 'React 18 · Vite · Supabase · PostgreSQL · Edge Functions'),
    year: '2025',
    kind: 'product',
    img: work5,
    deliverables: [
      L('Product Strategy', 'Продуктовая стратегия'),
      L('Technical Specification', 'Техническое задание'),
      L('Database Architecture', 'Архитектура базы данных'),
      L('AI Workflow Design', 'Проектирование ИИ-воркфлоу'),
      L('Product Delivery', 'Сдача продукта'),
    ],
    description: [
      L(
        'A Russian-language B2B SaaS platform for mandatory financial statement audits. It guides an auditor through a ten-stage review, from reconciliation and cross-checks to audit reporting, while keeping every document, response, status, token cost, and result connected to one audit session.',
        'Платформа автоматизированной проверки документации на соответствие регламенту с помощью ИИ. Комплекс ведёт специалиста по фиксированной методологии из десяти этапов: от сверки и проверки взаимосвязей между документами до итогового заключения, сохраняя связь каждого вывода с исходным документом. Первое внедрение охватывает обязательный аудит отчётности; та же архитектура применима к проверке технической документации, ТЗ и внутренних регламентов.'
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
      { value: L('98%', '98%'), label: L('Document parse success rate', 'Успешность парсинга документов') },
    ],
    caseStudy: [
      {
        label: L('How metrics are calculated', 'Как считаются метрики'),
        paragraphs: [],
        formulas: [
          {
            name: L('Audit time saved', 'Экономия времени аудита'),
            expr: 'Saving = 1 − t_after / t_before = 1 − 1/6 ≈ 83%',
            note: L('Six-fold faster cycle equals roughly 83% less time.', 'Ускорение цикла в 6 раз даёт сокращение времени примерно на 83%.'),
          },
          {
            name: L('Parse success rate', 'Успешность парсинга'),
            expr: 'P = N_parsed / N_uploaded',
            note: L('Share of uploaded documents parsed without manual fixes: 98%.', 'Доля загруженных документов, разобранных без ручной правки: 98%.'),
          },
        ],
      },
      {
        label: L('Product purpose', 'Назначение продукта'),
        paragraphs: [
          L(
            'Mandatory audit work combines large document sets, repeated reconciliations, strict reporting formats, and a high cost of missing context. An auditor needs to load financial statements, accounting policies, registers, contracts, and supporting files, then move through a fixed methodology without losing the relationship between a source document and an audit conclusion.',
            'Обязательный аудит объединяет большие массивы документов, повторяющиеся сверки, строгие форматы отчётности и высокую цену потерянного контекста. Аудитору нужно загрузить отчётность, учётную политику, регистры, договоры и подтверждающие файлы и затем пройти фиксированную методологию, сохраняя связь между исходным документом и выводом аудита.'
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
              'Техническое задание закладывает сокращение времени на первом этапе сверки на 70–80 процентов. На практике полный цикл аудита сжался примерно в шесть раз, когда платформа заменила ручную сверку и составление черновиков управляемым прослеживаемым процессом. Повторная загрузка документа оплачивается один раз благодаря хешированию содержимого. Завершённый этап можно дополнить новыми документами через шаг объединения.'
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
            'Row Level Security ограничивает audit_sessions и profiles через auth.uid(). Сообщения, файлы сессии и сводки этапов получают доступ через владельца сессии. Usage logs принимают записи только через серверную роль. Bucket audit-docs остаётся приватным. Скачивание выполняется по подписанным URL с проверкой префикса пользовательской папки.'
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
            body: L('Create, list, sort, and delete audit sessions. The sidebar exposes active audits, while an empty state guides the first session. Deletion cascades through messages, files, and stage summaries.', 'Создание, просмотр, сортировка и удаление сессий аудита. Sidebar показывает активные проверки. Empty state ведёт к созданию первой сессии. Удаление каскадно очищает сообщения, файлы и сводки этапов.'),
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
            body: L('The final report and individual stage results export to .docx. Result Card tags become section headings, amounts become table values, and the filename uses the audit title with a date in YYYY-MM-DD format.', 'Итоговый отчёт и результаты отдельных этапов экспортируются в .docx. Теги Result Card превращаются в заголовки разделов, суммы становятся значениями таблицы. Имя файла получает название аудита и дату в формате YYYY-MM-DD.'),
          },
          {
            title: L('Admin analytics', 'Административная аналитика'),
            body: L('Administrators see requests, tokens, projects, and period filters. Metrics load through a server function after a role check. User conversations remain private while operational totals support cost and performance monitoring.', 'Администраторы видят запросы, токены, проекты и фильтры периода. Метрики загружаются серверной функцией после проверки роли. Пользовательские диалоги остаются приватными. Агрегаты помогают контролировать стоимость и производительность.'),
          },
          {
            title: L('Profile & settings', 'Профиль и настройки'),
            body: L('The profile area contains email, registration date, password change, theme selection, and sign out. Theme state persists per profile and the password form validates length and confirmation before submission.', 'Раздел профиля содержит email, дату регистрации, смену пароля, выбор темы и выход. Тема сохраняется в профиле. Форма пароля проверяет длину и совпадение подтверждения до отправки.'),
          },
        ],
      },
      {
        label: L('Metrics & delivery', 'Метрики и результат'),
        paragraphs: [
          L(
            'The specification defines a measurable MVP: at least 85 percent of started stages are completed, regeneration stays at or below 5 percent, average tokens per stage remain under 120,000, document parsing reaches 98 percent success, the first verdict arrives within 15 minutes, cache hits exceed 30 percent, and at least 60 percent of sessions reach export.',
            'Спецификация задаёт измеримый MVP: не менее 85 процентов начатых этапов завершаются, доля повторных генераций не превышает 5 процентов, средний расход составляет менее 120 000 токенов на этап, успешность парсинга достигает 98 процентов, первый вердикт появляется за 15 минут, доля cache hit превышает 30 процентов и экспорт достигается минимум в 60 процентах сессий.'
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
    slug: 'mindcare',
    title: L('Clinical-Grade Mental Wellness Assessment', 'Клинический скрининг ментального здоровья'),
    category: L('Open Source · Mental Health Tech', 'Open Source · Ментальное здоровье'),
    domain: L('HealthTech / Self-Screening', 'HealthTech / Самоскрининг'),
    stack: L('React · TypeScript · Tailwind CSS · Vite · Lucide Icons', 'React · TypeScript · Tailwind CSS · Vite · Lucide Icons'),
    year: '2025',
    kind: 'product',
    img: work3,
    deliverables: [
      L('Product Design', 'Продуктовый дизайн'),
      L('UI / UX Design', 'UI / UX-дизайн'),
      L('Full-Stack Architecture', 'Full-stack архитектура'),
      L('Clinical Scoring Model', 'Модель клинического скоринга'),
    ],
    description: [
      L(
        'Clinical mental health questionnaires (PHQ-9, GAD-7) are often read as cold medical tests, which triggers anxiety and rejection. I designed a private conversational platform that turns clinical validation into an empathetic step-by-step experience with real-time risk stratification and a personalised support plan.',
        'Клинические опросники ментального здоровья (PHQ-9, GAD-7) часто воспринимаются как холодные медицинские тесты, вызывая у пользователей тревогу и отторжение. Я спроектировала приватную диалоговую платформу, которая переводит клиническую валидацию в эмпатичный пошаговый опыт со стратификацией рисков в реальном времени и персонализированным планом поддержки.'
      ),
      L(
        'The product is a confidential first point of contact: multi-dimensional screening across anxiety, stress, depressive episodes and general wellbeing, normalised on a 0–100 scale, with safe self-help scenarios and no private data ever leaving the device.',
        'Продукт спроектирован как конфиденциальная точка первого контакта: многомерный скрининг тревожности, стресса, депрессивных эпизодов и общего благополучия, нормализация по 100-балльной шкале и безопасные сценарии самопомощи без отправки приватных данных на внешние серверы.'
      ),
    ],
    gallery: [work3, work5],
    metrics: [
      { value: L('94%', '94%'), label: L('Completion rate vs traditional', 'Завершаемость против обычных опросников') },
      { value: L('100%', '100%'), label: L('Local, client-side privacy', 'Полностью локальная приватность') },
      { value: L('3.2×', '3,2×'), label: L('Faster time to de-escalation', 'Быстрее переход к самопомощи') },
      { value: L('0', '0'), label: L('Unencrypted user records', 'Незашифрованных записей пользователя') },
    ],
    caseStudy: [
      {
        label: L('How metrics are calculated', 'Как считаются метрики'),
        paragraphs: [],
        formulas: [
          {
            name: L('Completion rate', 'Завершаемость'),
            expr: 'CR = N_completed / N_started',
            note: L('94% for the step-by-step flow versus standard questionnaires.', '94% для пошагового потока против обычных опросников.'),
          },
          {
            name: L('Normalized score', 'Нормализованный балл'),
            expr: 'S = 100 · (x − x_min) / (x_max − x_min)',
            note: L('Each scale is brought to 0–100 for the wellbeing radar.', 'Каждая шкала приводится к 0–100 для радара благополучия.'),
          },
        ],
      },
      {
        label: L('Context', 'Контекст'),
        paragraphs: [
          L(
            'Traditional mental health platforms demand long registrations, personal data and monotonous tables of dozens of questions. Fear of stigma and of leaking sensitive information makes up to 70% of people abandon self-screening on the very first screens.',
            'Традиционные платформы психологической помощи требуют длинных регистраций, раскрытия персональных данных и заполнения монотонных таблиц из десятков вопросов. Из-за страха стигматизации и утечки чувствительной информации до 70% людей прерывают самодиагностику на первых экранах.'
          ),
          L(
            'MindCare screens four dimensions at once, normalises them on a 100-point scale and builds a support scenario locally, so the first contact with the topic never feels like a medical record being opened.',
            'Платформа проводит многомерный скрининг (тревожность, стресс, депрессивные эпизоды, общее благополучие), нормализует результаты по 100-балльной шкале и формирует безопасные сценарии самопомощи локально, чтобы первый контакт с темой не ощущался как заведение медкарты.'
          ),
        ],
        charts: [
          {
            type: 'bar',
            title: L('Triage snapshot · normalised 0–100', 'Срез триажа · нормализация 0–100'),
            labels: [
              L('Anxiety index', 'Индекс тревожности'),
              L('Depression level', 'Уровень депрессии'),
              L('Stress quotient', 'Коэффициент стресса'),
              L('Wellbeing', 'Благополучие'),
            ],
            series: [{ name: L('Session score', 'Оценка сессии'), values: [62, 28, 54, 78] }],
            max: 100,
          },
        ],
      },
      {
        label: L('The problem', 'Проблема'),
        paragraphs: [
          L(
            'Screening lives between two extremes: invalid entertainment quizzes on one side, dry clinical forms overloaded with terminology on the other.',
            'Медицинский скрининг страдает от двух крайностей: либо это невалидные развлекательные онлайн-тесты, либо сухие клинические формы, перегруженные сложной терминологией.'
          ),
          L(
            'The interface had to combine an evidence-based clinical core with empathetic microcopy and guarantee full anonymity at the moment of highest vulnerability.',
            'Интерфейс должен был объединить доказательную клиническую базу с эмпатичным микрокопирайтингом и гарантировать полную анонимность пользователя в моменты наивысшей уязвимости.'
          ),
        ],
        findings: [
          {
            title: L('Design principle', 'Принцип дизайна'),
            body: L(
              'Anxiety removes cognitive budget. Every screen has to fit inside what is left.',
              'Тревога забирает когнитивный ресурс. Каждый экран должен помещаться в то, что осталось.'
            ),
            quote: L(
              'In moments of anxiety the interface must not demand cognitive effort. Every question should feel like a safe dialogue, not an interrogation.',
              'В моменты тревоги интерфейс не должен требовать когнитивных усилий. Каждый вопрос должен поддерживать ощущение безопасного диалога.'
            ),
          },
        ],
      },
      {
        label: L('Assessment journey & user states', 'Путь оценки и состояния пользователя'),
        paragraphs: [
          L(
            'A conventional test throws a cold 30-question form at the user, dumps overwhelming results and closes with "consult a doctor". The guided flow replaces that with progressive disclosure, evidence-based scoring and a calm, actionable summary.',
            'Обычный тест выдаёт холодную форму из 30 вопросов, обрушивает перегруженный результат и заканчивается фразой: обратитесь к врачу. Направляемый поток заменяет это постепенным раскрытием, доказательным скорингом и спокойным итогом с конкретными действиями.'
          ),
        ],
        diagram: {
          title: L('Guided flow vs conventional test', 'Направляемый поток против обычного теста'),
          columns: 1,
          nodes: [
            { id: 'dialogue', label: L('Step-by-step dialogue', 'Пошаговый диалог'), sublabel: L('One question per screen · micro-validation', 'Один вопрос на экран · микро-подтверждение') },
            { id: 'scoring', label: L('Evidence-based scoring', 'Доказательный скоринг'), sublabel: L('Normalized 0–100 scale', 'Нормализация по шкале 0–100') },
            { id: 'summary', label: L('Actionable calm summary', 'Спокойный итог с действиями'), sublabel: L('CBT exercises + resources', 'КПТ-упражнения и ресурсы') },
          ],
          edges: [
            { from: 'dialogue', to: 'scoring' },
            { from: 'scoring', to: 'summary' },
          ],
        },
      },
      {
        label: L('Research & user personas', 'Исследование и персоны'),
        paragraphs: [
          L(
            'Two behavioural poles shaped the flow: the analytical professional who needs an objective baseline, and the acutely anxious student who needs the shortest possible path to relief.',
            'Поток формировали два поведенческих полюса: аналитичный профессионал, которому нужна объективная точка отсчёта, и студент в остром состоянии, которому нужен максимально короткий путь к облегчению.'
          ),
        ],
        findings: [
          {
            title: L('Persona 01 · tech professional, work burnout', 'Персона 01 · ИТ-специалист, выгорание'),
            body: L(
              'Goal: an objective, balanced read on her state without going to a clinic. Obstacle: fear that corporate insurance or a service will record a diagnosis.',
              'Цель: получить объективную и взвешенную оценку состояния без походов в клинику. Барьер: боится, что корпоративная страховка или сервисы зафиксируют диагноз.'
            ),
            quote: L(
              'I constantly feel a lump in my chest, but I do not know if it is ordinary fatigue or the start of depression.',
              'Я постоянно чувствую ком в груди, но не знаю, это обычная усталость или начало депрессии.'
            ),
          },
          {
            title: L('Persona 02 · university student, acute panic', 'Персона 02 · студент, острая паника'),
            body: L(
              'Goal: pass a screening quickly in a clear interface and get a grounding technique. Obstacle: hard to concentrate on bulky pages with many fields.',
              'Цель: быстро пройти скрининг в понятном интерфейсе и получить технику заземления. Барьер: сложно концентрироваться на громоздких страницах со множеством полей.'
            ),
            quote: L(
              'When panic hits, long texts and complex forms make the stupor even worse.',
              'Когда накатывает паника, длинные тексты и сложные формы вызывают ещё больший ступор.'
            ),
          },
        ],
      },
      {
        label: L('What I designed', 'Что я спроектировала'),
        paragraphs: [
          L('Five design decisions carry the product.', 'Продукт держится на пяти проектных решениях.'),
        ],
        modules: [
          {
            title: L('01. Progressive assessment flow', '01. Пошаговый поток оценки'),
            body: L(
              'Questions are delivered one per screen with smooth transitions. Progressive disclosure removes visual pressure and lowers cognitive load under stress.',
              'Пошаговая подача вопросов по одному на экран с плавной анимацией переходов. Это снимает визуальное давление и снижает когнитивную нагрузку в моменты стресса.'
            ),
          },
          {
            title: L('02. Multi-dimensional wellness radar', '02. Многомерный радар благополучия'),
            body: L(
              'Results split into four independent vectors: anxiety, stress, depression level and a resilience index. Even with high stress, the user can see that base resources are intact.',
              'Результаты разбиваются на 4 независимых вектора: тревожность, стресс, уровень депрессии и индекс жизнестойкости. Это помогает увидеть, что даже при высоком уровне стресса базовые ресурсы сохранны.'
            ),
          },
          {
            title: L('03. Zero-knowledge privacy architecture', '03. Zero-knowledge приватность'),
            body: L(
              'All scoring computation and history storage happen locally in the browser. No answers or personal markers reach third-party trackers.',
              'Все вычисления скорингового алгоритма и хранение истории происходят локально в браузере. Никакие ответы или персональные маркеры не передаются сторонним трекерам.'
            ),
          },
          {
            title: L('04. Crisis guard & adaptive escalation', '04. Кризисный контур и эскалация'),
            body: L(
              'On critical thresholds the system quietly and instantly opens an emergency panel with crisis lines and one-tap calling.',
              'При фиксации критических пороговых значений система мгновенно и ненавязчиво активирует панель экстренной помощи с кризисными линиями и вызовом в один тап.'
            ),
          },
          {
            title: L('05. Actionable de-escalation toolkit', '05. Набор для деэскалации'),
            body: L(
              'The results screen never leaves a person alone with numbers: it offers interactive breathing techniques, CBT exercises and a 7-day dynamics tracker.',
              'Экран результатов не оставляет человека один на один с цифрами: он сразу предлагает интерактивные техники дыхания, упражнения КПТ и трекер динамики на 7 дней.'
            ),
          },
        ],
      },
      {
        label: L('Step-by-step user flow', 'Пошаговый пользовательский поток'),
        paragraphs: [
          L(
            'Screening starts without registration, runs through weighted algorithms in real time and branches by risk tier before landing in on-device retention.',
            'Скрининг начинается без регистрации, проходит через взвешенные алгоритмы в реальном времени и ветвится по уровню риска, прежде чем перейти в локальное хранение динамики.'
          ),
        ],
        diagram: {
          title: L('Triage branching', 'Ветвление триажа'),
          columns: 2,
          nodes: [
            { id: 'start', label: L('Start screening', 'Старт скрининга'), sublabel: L('Zero registration', 'Без регистрации') },
            { id: 'survey', label: L('Progressive survey', 'Пошаговый опрос'), sublabel: L('1 question per step', '1 вопрос на шаг') },
            { id: 'triage', label: L('Real-time triage', 'Триаж в реальном времени'), sublabel: L('Weighted algorithms', 'Взвешенные алгоритмы') },
            { id: 'stable', label: L('Tier 1–2: stable', 'Уровень 1–2: стабильно'), sublabel: L('Breakdown & CBT toolkit', 'Разбор и КПТ-инструменты') },
            { id: 'critical', label: L('Tier 3: critical', 'Уровень 3: критично'), sublabel: L('Crisis guard overlay', 'Кризисный оверлей') },
            { id: 'retention', label: L('On-device retention', 'Локальное хранение'), sublabel: L('7-day local trend graph', 'График динамики за 7 дней') },
          ],
          edges: [
            { from: 'start', to: 'survey' },
            { from: 'survey', to: 'triage' },
            { from: 'triage', to: 'stable' },
            { from: 'triage', to: 'critical' },
            { from: 'stable', to: 'retention' },
            { from: 'critical', to: 'retention' },
          ],
        },
      },
      {
        label: L('Design system & empathy architecture', 'Дизайн-система и архитектура эмпатии'),
        paragraphs: [
          L(
            'A calm UI specification governs palette, motion and accessibility, so severity is communicated without alarm colours or abrupt movement.',
            'Спецификация спокойного интерфейса задаёт палитру, motion и доступность, чтобы тяжесть состояния передавалась без тревожных цветов и резких движений.'
          ),
        ],
        tables: [
          {
            title: L('Calm UI specification', 'Спецификация спокойного интерфейса'),
            columns: [L('Layer', 'Слой'), L('Decision', 'Решение'), L('Benchmark', 'Ориентир')],
            rows: [
              [L('Palette & tonality', 'Палитра и тональность'), L('Slate base · bio-teal safe · amber non-panic alert', 'Сланцевая база · био-бирюзовый · янтарный без паники'), L('No aggressive red at any risk tier', 'Никакого агрессивного красного на любом уровне риска')],
              [L('Motion & timing', 'Motion и тайминги'), L('Calm cubic-bezier easing · 350 ms transitions', 'Плавный cubic-bezier · переходы 350 мс'), L('Native reduced-motion support', 'Нативная поддержка reduced motion')],
              [L('Accessibility', 'Доступность'), L('Touch targets 52 × 52 px · full aria labelling', 'Тач-зоны 52 × 52 px · полная разметка aria'), L('WCAG AAA contrast', 'Контраст WCAG AAA')],
              [L('Score cards', 'Карточки результатов'), L('Vector score + severity + clinical baseline', 'Вектор, тяжесть и клиническая база'), L('Local encrypted · ready offline', 'Локально зашифровано · работает офлайн')],
              [L('Action cards', 'Карточки действий'), L('4-7-8 breathing loop · 3-minute grounding', 'Дыхание 4-7-8 · заземление за 3 минуты'), L('One tap from the results screen', 'Один тап с экрана результатов')],
            ],
          },
        ],
      },
      {
        label: L('Constraints & architectural decisions', 'Ограничения и архитектурные решения'),
        paragraphs: [
          L(
            'Three decisions defined the build.',
            'Три решения определили реализацию.'
          ),
        ],
        findings: [
          {
            title: L('Local scoring instead of backend AI', 'Локальный скоринг вместо backend AI'),
            body: L(
              'The weighted clinical scoring algorithm runs in TypeScript on the client. That gives an instant response on an unstable network and removes any interception risk for personal data.',
              'Алгоритм взвешенного клинического скоринга реализован на TypeScript на стороне клиента. Это обеспечивает мгновенный отклик даже при нестабильной сети и исключает риск перехвата персональных данных.'
            ),
          },
          {
            title: L('Palette calibrated without alarm colours', 'Калибровка палитры без тревожных цветов'),
            body: L(
              'Aggressive red is dropped in favour of soft amber and slate tones even at elevated risk levels, so the interface never provokes a panic reaction.',
              'Отказ от агрессивного красного цвета в пользу мягких янтарных и сланцевых оттенков даже при повышенных уровнях риска, чтобы не провоцировать панические реакции.'
            ),
          },
          {
            title: L('Structured PDF export', 'Экспорт в структурированный PDF'),
            body: L(
              'In one click the user builds a clinical summary for their therapist with dates, scores and dynamics, without handing the therapist access to the device.',
              'Пользователь может в один клик сформировать клиническое саммари для своего терапевта с датами, баллами и динамикой без необходимости давать врачу доступ к устройству.'
            ),
          },
        ],
      },
      {
        label: L('Impact & metrics', 'Результат и метрики'),
        paragraphs: [
          L(
            '94% screening completion: step-by-step delivery cut drop-off threefold versus standard questionnaires. 3.2× faster path to self-help: a breathing or cognitive exercise starts under 10 seconds after results. 0 bytes of personal data transmitted: full local autonomy and absolute confidentiality.',
            '94% завершаемость скрининга: пошаговая подача вопросов сократила процент отказов в 3 раза по сравнению со стандартными опросниками. В 3,2 раза быстрее переход к самопомощи: пользователь начинает дыхательное или когнитивное упражнение менее чем через 10 секунд после получения результатов. 0 байт переданных персональных данных: полная локальная автономия и абсолютная защита конфиденциальности.'
          ),
        ],
        charts: [
          {
            type: 'bar',
            title: L('Completion & privacy', 'Завершаемость и приватность'),
            labels: [
              L('MindCare completion', 'Завершаемость MindCare'),
              L('Traditional questionnaire', 'Обычный опросник'),
              L('Local computation share', 'Доля локальных вычислений'),
            ],
            series: [{ name: L('%', '%'), values: [94, 31, 100] }],
            max: 100,
          },
        ],
      },
    ],
  },
  {
    slug: 'neurosignal',
    title: L('Realtime Signal Stream Analytics', 'Предиктивная аналитика потоковых сигналов'),
    category: L('Realtime Telemetry · R&D', 'Realtime-телеметрия · R&D'),
    domain: L('Streaming Data / Sensor Signal Processing', 'Потоковые данные / Обработка сигналов с датчиков'),
    stack: L('React · TypeScript · WebAssembly (DSP) · WebGL · ONNX Runtime · Python / FastAPI', 'React · TypeScript · WebAssembly (DSP) · WebGL · ONNX Runtime · Python / FastAPI'),
    year: '2026',
    kind: 'product',
    img: work4,
    deliverables: [
      L('Systems Architecture', 'Системная архитектура'),
      L('Product Design', 'Продуктовый дизайн'),
      L('DSP Pipeline', 'DSP-конвейер'),
      L('ML Inference & Calibration', 'ML-инференс и калибровка'),
    ],
    description: [
      L(
        'A realtime platform for multichannel sensor telemetry: streaming ingestion, noise filtering, artifact rejection and predictive analytics on high-frequency time series. The pilot domain is EEG — multichannel signals of enormous volume, where manual review of multi-day recordings takes an expert hours to catch single anomalous events.',
        'Платформа обработки многоканальной телеметрии с датчиков в реальном времени: потоковый приём данных, фильтрация шумов, подавление артефактов и предиктивная аналитика высокочастотных временных рядов. Пилотной областью стала ЭЭГ: многоканальные сигналы колоссального объёма, где ручной разбор многосуточных записей занимает у эксперта часы ради поиска единичных аномальных событий.'
      ),
      L(
        'The project sits between engineering and a professional upskilling track in neurotechnology: I designed the architecture and built a platform for intelligent analysis and preprocessing of brain bioelectrical activity, adapting Neural Systems Lab (University of Washington) research to Russian clinical protocols and functional diagnostics standards.',
        'Проект выполнен на стыке практической разработки и программы повышения квалификации в сфере нейротехнологий и программной инженерии: мне удалось спроектировать архитектуру и реализовать платформу интеллектуального анализа и препроцессинга биоэлектрической активности мозга, адаптировав исследовательские наработки Лаборатории нейронных систем Вашингтонского университета (Neural Systems Lab, University of Washington) под клинические протоколы и технологические стандарты российской функциональной диагностики.'
      ),
    ],
    gallery: [work4, work6],
    metrics: [
      { value: L('< 40 ms', '< 40 мс'), label: L('End-to-end stream latency', 'Сквозная задержка обработки потока') },
      { value: L('64 ch × 1 kHz', '64 кан. × 1 кГц'), label: L('Realtime throughput', 'Пропускная способность в реальном времени') },
      { value: L('94.6%', '94,6%'), label: L('Anomaly prediction sensitivity', 'Чувствительность предикции аномалий') },
      { value: L('0.12 / h', '0,12 / ч'), label: L('False alarm rate per hour', 'Ложных срабатываний в час') },
    ],
    caseStudy: [
      {
        label: L('How metrics are calculated', 'Как считаются метрики'),
        paragraphs: [],
        formulas: [
          {
            name: L('Sensitivity', 'Чувствительность'),
            expr: 'Se = TP / (TP + FN)',
            note: L('Share of pre-ictal episodes caught on the validation cohort: 94.6%.', 'Доля пойманных предиктальных эпизодов на валидационной когорте: 94,6%.'),
          },
          {
            name: L('False alarm rate', 'Частота ложных тревог'),
            expr: 'FAR = FP / T_record [1/h]',
            note: L('False alarms per hour of recording: 0.12.', 'Ложные тревоги на час записи: 0,12.'),
          },
          {
            name: L('Line-noise notch', 'Режекция сетевой помехи'),
            expr: 'H(z) = (1 − 2cos(ω₀)z⁻¹ + z⁻²) / (1 − 2r·cos(ω₀)z⁻¹ + r²z⁻²),  ω₀ = 2π·f₀/f_s',
            note: L('f₀ = 50 Hz in Russia/EU, 60 Hz in US; r sets notch width.', 'f₀ = 50 Гц в России и Европе, 60 Гц в США; r задаёт ширину режекции.'),
          },
        ],
      },
      {
        label: L('Context & adaptation scope', 'Контекст и рамки адаптации'),
        paragraphs: [
          L(
            'Academic seizure detection models validated on reference datasets (CHB-MIT, Temple University Hospital Seizure Corpus) show high sensitivity in the lab, but hit critical barriers on clinical integration in Russia.',
            'Академические модели распознавания судорожной активности, валидированные на эталонных датасетах (CHB-MIT, Temple University Hospital Seizure Corpus), демонстрируют высокую чувствительность в лабораторных условиях, но сталкиваются с критическими барьерами при клинической интеграции в РФ.'
          ),
          L(
            'Three tasks were solved during the research adaptation: power grid frequency mismatch, montage schemes and standards, and the gap between DSP and rendering.',
            'В процессе профессионального обучения и исследовательской адаптации были решены три ключевые задачи: несовпадение частоты электросети, монтажные схемы и стандарты, разрыв между DSP и рендерингом.'
          ),
        ],
        findings: [
          {
            title: L('Power grid frequency mismatch', 'Несовпадение частоты электросети'),
            body: L(
              'Foreign pipelines are hardwired to 60 Hz notch filtering (US standard), which makes them unusable on raw recordings from domestic hardware working on a 50 Hz grid.',
              'Зарубежные пайплайны жестко ориентированы на 60 Гц режекторную фильтрацию (стандарт США), что делало их неприменимыми для сырых записей отечественных аппаратных комплексов («Нейрософт», «Мицар»), работающих в сети 50 Гц.'
            ),
          },
          {
            title: L('Montage schemes & standards', 'Монтажные схемы и стандарты'),
            body: L(
              'Clinical practice relies strictly on monopolar and bipolar 10–20 schemes, including the longitudinal bipolar Double Banana montage and average reference, while academic scripts often analyse detached channels with no anatomical topology.',
              'Клиническая практика в РФ строго опирается на монополярные и биполярные схемы по системе «10–20» (включая продольный биполярный монтаж Double Banana и усредненный референт), в то время как университетские исследовательские скрипты зачастую анализируют разрозненные каналы без привязки к анатомической топологии.'
            ),
          },
          {
            title: L('Gap between DSP and rendering', 'Разрыв между DSP и рендерингом'),
            body: L(
              'There was no high-performance interface able to draw dozens of channels at 256–1000 Hz sampling without frame drops on a standard clinician workstation.',
              'Отсутствие высокопроизводительного интерфейса, способного отрисовывать десятки каналов с частотой дискретизации 256–1000 Гц без потери кадров на стандартных рабочих станциях врачей.'
            ),
          },
        ],
        charts: [
          {
            type: 'column',
            title: L('Rhythm bands · power distribution, %', 'Ритмические диапазоны · распределение мощности, %'),
            labels: [
              L('Delta 0.5–4 Hz', 'Дельта 0,5–4 Гц'),
              L('Theta 4–8 Hz', 'Тета 4–8 Гц'),
              L('Alpha 8–13 Hz', 'Альфа 8–13 Гц'),
              L('Beta 13–30 Hz', 'Бета 13–30 Гц'),
            ],
            series: [{ name: L('Pre-ictal window', 'Предиктальное окно'), values: [64, 38, 22, 14] }],
            max: 100,
          },
        ],
      },
      {
        label: L('The problem', 'Проблема'),
        paragraphs: [
          L(
            'A raw EEG signal carries intense physiological (myographic, oculographic, cardiographic) and technical artifacts. Classic neural models mistake muscle spasms or electrode shifts for true paroxysmal activity and generate an unacceptable false alarm rate.',
            'Сырой сигнал ЭЭГ содержит интенсивные физиологические (миографические, окулографические, кардиографические) и технические артефакты. Классические нейросетевые модели склонны принимать мышечные спазмы или смещения электродов за истинную пароксизмальную активность, генерируя неприемлемое количество ложноположительных срабатываний.'
          ),
          L(
            'The system had to deliver a reliable digital filtering pipeline, give the clinician a fast artifact verification tool and output a probabilistic seizure prediction 3–5 minutes before generalisation.',
            'Система должна была обеспечить надежный конвейер цифровой фильтрации (DSP), предоставить врачу инструмент быстрой верификации артефактов и выдать вероятностную оценку предикции приступа за 3–5 минут до его генерализации.'
          ),
        ],
        findings: [
          {
            title: L('Transparency over black box', 'Прозрачность вместо черного ящика'),
            body: L(
              'A clinician needs frequency slices, power spectral density and graphoelement morphology, not a binary label.',
              'В клинической нейрофизиологии алгоритм черного ящика бесполезен. Врачу необходима прозрачная верификация результата: частотный срез, спектральная плотность мощности и морфология графоэлементов.'
            ),
          },
        ],
      },
      {
        label: L('Signal processing architecture', 'Архитектура обработки сигнала'),
        paragraphs: [
          L(
            'From raw biosignal ingestion to hybrid inference, every stage is explicit and inspectable.',
            'Каждая стадия конвейера от приема сырого биосигнала до гибридного инференса явная и проверяемая.'
          ),
        ],
        diagram: {
          title: L('DSP & inference pipeline', 'Конвейер DSP и инференса'),
          columns: 1,
          nodes: [
            { id: 'ingest', label: L('Raw biosignal ingestion', 'Прием сырого биосигнала'), sublabel: L('EDF / BDF / GDF', 'EDF / BDF / GDF') },
            { id: 'notch', label: L('WASM SIMD notch filter', 'Режекторный фильтр WASM SIMD'), sublabel: L('50 Hz, Q = 30 · grid interference', '50 Гц, Q = 30 · подавление сетевой наводки') },
            { id: 'band', label: L('Zero-phase Butterworth bandpass', 'Полосовой фильтр Баттерворта'), sublabel: L('0.5–30 Hz physiological rhythms', '0,5–30 Гц · физиологические ритмы') },
            { id: 'ica', label: L('Independent component analysis', 'Анализ независимых компонент'), sublabel: L('FastICA · blink (EOG) removal', 'FastICA · удаление морганий (EOG)') },
            { id: 'features', label: L('Feature extraction layer', 'Слой извлечения признаков'), sublabel: L('Welch PSD · ApEn · wavelet power', 'PSD по Уэлчу · ApEn · вейвлет-мощность') },
            { id: 'classifier', label: L('Hybrid classifier', 'Гибридный классификатор'), sublabel: L('1D-CNN + Bi-LSTM sequence modeling', '1D-CNN + Bi-LSTM моделирование последовательностей') },
            { id: 'risk', label: L('Risk calibration engine', 'Движок калибровки риска'), sublabel: L('Real-time thresholding', 'Пороговая обработка в реальном времени') },
          ],
          edges: [
            { from: 'ingest', to: 'notch' },
            { from: 'notch', to: 'band' },
            { from: 'band', to: 'ica' },
            { from: 'ica', to: 'features' },
            { from: 'features', to: 'classifier' },
            { from: 'classifier', to: 'risk' },
          ],
        },
      },
      {
        label: L('Clinical personas & workflows', 'Клинические персоны и сценарии'),
        paragraphs: [
          L(
            'Two clinical roles shaped the workflow: the epileptologist reviewing long-term monitoring and the researcher studying pre-ictal transitions.',
            'Сценарий формировали две клинические роли: эпилептолог, разбирающий долгосрочный мониторинг, и исследователь, изучающий переход в предиктальную фазу.'
          ),
        ],
        findings: [
          {
            title: L('Persona 01 · lead neurophysiologist, epileptology centre', 'Персона 01 · нейрофизиолог, центр эпилептологии'),
            body: L(
              'Goal: instant jump to high-risk epileptiform segments with a ready spectrogram. Obstacle: high noise from patient movement in the video-EEG monitoring ward.',
              'Цель: мгновенный переход к участкам с высоким риском эпилептиформной активности с готовой спектрограммой. Барьер: высокий уровень шума от движений пациента в палате видео-ЭЭГ мониторинга.'
            ),
            quote: L(
              'With 24-hour monitoring a single recording takes up to two hours to review; the eye blurs and short nocturnal patterns are easy to miss.',
              'При 24-часовом мониторинге на просмотр одной записи уходит до 2 часов. Глаз замыливается, и короткие ночные паттерны легко пропустить.'
            ),
          },
          {
            title: L('Persona 02 · clinical researcher, neuroscience', 'Персона 02 · клинический исследователь, нейронаука'),
            body: L(
              'Goal: analyse precursors of a generalised discharge for timely preventive intervention. Obstacle: academic models are overfitted to one device and fail on heterogeneous data.',
              'Цель: анализ предвестников генерализованного разряда для своевременного превентивного вмешательства. Барьер: академические модели часто переобучены под один конкретный прибор и дают сбой на гетерогенных данных.'
            ),
            quote: L(
              'We need to predict the transition into the pre-ictal phase, not just state that a seizure happened.',
              'Нам необходимо прогнозировать переход в предиктальную фазу.'
            ),
          },
        ],
      },
      {
        label: L('What I designed & engineered', 'Что спроектировано и реализовано'),
        paragraphs: [
          L('Five engineering modules carry the workstation.', 'Рабочая станция держится на пяти инженерных модулях.'),
        ],
        modules: [
          {
            title: L('01. WebGL-accelerated 32-channel oscilloscope', '01. Осциллограф на 32 канала с WebGL'),
            body: L(
              'A high-performance WebGL rendering engine draws up to 32 channels in real time at a stable 60 FPS, with standard clinical sweeps (15, 30, 60 mm/s) and amplitude calibration marks (5, 7, 10, 20 µV/mm).',
              'Высокопроизводительный движок рендеринга осциллограмм на WebGL отрисовывает до 32 каналов в реальном времени при стабильных 60 FPS с поддержкой стандартных клинических разверток (15, 30, 60 мм/с) и калибровочных меток амплитуды (5, 7, 10, 20 µV/mm).'
            ),
          },
          {
            title: L('02. Dynamic montage matrix switcher', '02. Матричный коммутатор монтажей'),
            body: L(
              'The montage matrix recomputes potential differences between derivations on the fly without re-reading the file: longitudinal bipolar (Double Banana) for focal zones by phase reversal, average reference for diffuse generalised activity, Cz-referential for express screening of cortical rhythms.',
              'Матричный коммутатор монтажей на лету пересчитывает разность потенциалов между отведениями без повторного чтения файла: продольный биполярный (Double Banana) обеспечивает локализацию фокальных зон по феномену противофазы, усредненный референт выявляет диффузную генерализованную активность, Cz-референциальный используется для экспресс-скрининга базовых корковых ритмов.'
            ),
          },
          {
            title: L('03. Client-side WASM preprocessing pipeline', '03. WASM-препроцессинг на клиенте'),
            body: L(
              'Spectral cleaning modules moved to WebAssembly with SIMD support. The 50 Hz notch and a 4th-order Butterworth bandpass compute with under 4 ms latency per data chunk.',
              'Модули спектральной очистки сигнала перенесены в WebAssembly с поддержкой SIMD-инструкций. Вычисление режекторного фильтра 50 Гц и полосовой фильтрации Баттерворта 4-го порядка выполняется с задержкой менее 4 мс на чанк данных.'
            ),
          },
          {
            title: L('04. Time-frequency wavelet heatmaps', '04. Тепловые карты вейвлет-преобразования'),
            body: L(
              'An interactive continuous wavelet transform block with a Morlet mother wavelet lets the clinician decompose a suspicious spike into delta, theta, alpha, beta and gamma components in one click and instantly separate a myographic artifact from a true spike-and-wave complex.',
              'Интерактивный блок непрерывного вейвлет-преобразования (CWT) с материнским вейвлетом Морле. Позволяет врачу за один клик разложить подозрительный спайк на частотные составляющие (дельта-, тета-, альфа-, бета-, гамма-диапазоны) и мгновенно отличить миографический артефакт от истинного комплекса пик-медленная волна.'
            ),
          },
          {
            title: L('05. Pre-ictal risk prediction engine', '05. Движок предикции предиктального риска'),
            body: L(
              'A hybrid classifier based on temporal convolutional networks, optimised to ONNX. It analyses power spectral density dynamics in a 4-second sliding window with 75% overlap and estimates seizure probability over a 3–5 minute horizon.',
              'Гибридный классификатор на базе Temporal Convolutional Networks (TCN), оптимизированный в формат ONNX. Модель анализирует динамику спектральной плотности мощности в скользящем окне 4 секунды с перекрытием 75%, рассчитывая вероятность наступления судорожного эпизода за горизонт в 3–5 минут.'
            ),
          },
        ],
      },
      {
        label: L('Diagnostic flow', 'Диагностический поток'),
        paragraphs: [
          L(
            'Ingestion, hardware-adapted DSP and topological montage feed two parallel branches — spectral extraction and hybrid inference — that converge into a clinical report.',
            'Прием данных, аппаратно-адаптированный DSP и топологический монтаж передают данные в две параллельные ветви: спектральное извлечение и гибридный инференс. Результаты обеих ветвей объединяются в клиническом отчете.'
          ),
        ],
        diagram: {
          title: L('From raw stream to clinical report', 'От сырого потока к клиническому отчету'),
          columns: 2,
          nodes: [
            { id: 'data', label: L('Data ingestion', 'Прием данных'), sublabel: L('EDF / raw stream', 'EDF / сырой поток') },
            { id: 'dsp', label: L('Hardware-adapted DSP', 'Аппаратно-адаптированный DSP'), sublabel: L('50 Hz notch + bandpass', 'Режекция 50 Гц + полоса') },
            { id: 'montage', label: L('Topological montage', 'Топологический монтаж'), sublabel: L('Double Banana / reference', 'Double Banana / референт') },
            { id: 'spectral', label: L('Spectral extraction', 'Спектральное извлечение'), sublabel: L('Welch PSD & entropy', 'PSD по Уэлчу и энтропия') },
            { id: 'inference', label: L('Hybrid AI inference', 'Гибридный ИИ-инференс'), sublabel: L('Pre-ictal prediction', 'Предикция предиктальной фазы') },
            { id: 'report', label: L('Clinical report & event log', 'Клинический отчет и журнал событий'), sublabel: L('Export to PDF / HL7-FHIR', 'Экспорт в PDF / HL7-FHIR') },
          ],
          edges: [
            { from: 'data', to: 'dsp' },
            { from: 'dsp', to: 'montage' },
            { from: 'montage', to: 'spectral' },
            { from: 'montage', to: 'inference' },
            { from: 'spectral', to: 'report' },
            { from: 'inference', to: 'report' },
          ],
        },
      },
      {
        label: L('Component system & UI architecture', 'Система компонентов и архитектура интерфейса'),
        paragraphs: [
          L(
            'The clinical workstation density spec defines rhythm colour coding, DSP controls and event labels, so every widget stays readable at monitoring density.',
            'Спецификация плотности клинической рабочей станции задает цветовое кодирование ритмов, управление DSP и метки событий, чтобы каждый виджет оставался читаемым при мониторинговой плотности.'
          ),
        ],
        tables: [
          {
            title: L('Design system specification', 'Спецификация дизайн-системы'),
            columns: [L('Layer', 'Слой'), L('Specification', 'Спецификация'), L('Clinical reference', 'Клинический ориентир')],
            rows: [
              [L('Rhythm colour coding', 'Цветовое кодирование ритмов'), L('Delta 0.5–4 Hz deep blue · Theta 4–8 Hz cyan · Alpha 8–13 Hz green · Beta 13–30 Hz amber', 'Дельта 0,5–4 Гц: глубокий синий · Тета 4–8 Гц: циан · Альфа 8–13 Гц: зеленый · Бета 13–30 Гц: янтарный'), L('IFCN band conventions', 'Диапазоны по конвенции IFCN')],
              [L('DSP & filter controls', 'Управление DSP и фильтрами'), L('Notch 50 Hz (Q = 30) · high-pass 0.5 Hz / 24 dB · low-pass 30 Hz / 24 dB', 'Режекция 50 Гц (Q = 30) · ФВЧ 0,5 Гц / 24 дБ · ФНЧ 30 Гц / 24 дБ'), L('GOST R IEC 60601-2-26', 'ГОСТ Р МЭК 60601-2-26')],
              [L('Timebase & calibration', 'Развертка и калибровка'), L('30 mm/s sweep · 7 µV/mm amplitude · measuring grid', 'Развертка 30 мм/с · амплитуда 7 µV/mm · измерительная сетка'), L('Standard clinical montage sheet', 'Стандартный клинический лист монтажа')],
              [L('Clinical event labels', 'Метки клинических событий'), L('SW spike-and-wave 3 Hz · POLY polyspike complex · EMG muscle artifact suppressed', 'SW: пик-медленная волна 3 Гц · POLY: полиспайк-комплекс · EMG: подавленный мышечный артефакт'), L('Reviewed and confirmed by the clinician', 'Проверяется и подтверждается врачом')],
              [L('Channel detail widget', 'Виджет детализации канала'), L('Amplitude pk-pk · theta/beta PSD ratio · phase synchrony', 'Амплитуда pk-pk · отношение PSD тета/бета · фазовая синхронность'), L('Verification before labelling an event', 'Верификация до присвоения метки события')],
              [L('Pre-ictal risk gauge', 'Шкала предиктального риска'), L('State · prediction horizon in seconds · alarm status · sensitivity mode', 'Состояние · горизонт прогноза в секундах · статус тревоги · режим чувствительности'), L('Strict mode sensitivity 94.6%', 'Строгий режим, чувствительность 94,6%')],
            ],
          },
        ],
      },
      {
        label: L('Constraints & architectural decisions', 'Ограничения и архитектурные решения'),
        paragraphs: [
          L('Three constraints defined the engineering.', 'Три ограничения определили инженерные решения.'),
        ],
        findings: [
          {
            title: L('Spectral suppression shifted to 50 Hz', 'Смещение спектрального подавления на 50 Гц'),
            body: L(
              'The IIR filter bank was fully reconfigured for 50 Hz suppression with a high quality factor (Q = 30), which removed domestic power grid interference without distorting physiological rhythms.',
              'Выполнена полная переконфигурация БИХ-фильтров (IIR) цифровой обработки сигналов для подавления частоты 50 Гц с высокой добротностью (Q = 30), что полностью ликвидировало интерференцию от отечественной силовой сети без искажения физиологических ритмов.'
            ),
          },
          {
            title: L('Local WebAssembly / ONNX inference', 'Локальный WebAssembly / ONNX инференс'),
            body: L(
              'Patient medical data falls under strict personal data law. Moving preprocessing and first-pass inference into the client browser removed any need to transmit unencrypted biometric signals across borders.',
              'Медицинские данные пациентов подпадают под жесткие требования 152-ФЗ. Перенос препроцессинга и первичного инференса непосредственно в браузер клиента исключил необходимость трансграничной передачи незашифрованных биометрических сигналов.'
            ),
          },
          {
            title: L('GOST R IEC 60601-2-26 compliance', 'Соответствие ГОСТ Р МЭК 60601-2-26'),
            body: L(
              'The measuring grid, amplitude scaling and time markers are strictly synchronised with the requirements for medical electroencephalographs.',
              'Интерфейс измерительной сетки, масштабирование амплитуды и временные метки строго синхронизированы с требованиями к медицинским электроэнцефалографам.'
            ),
          },
        ],
      },
      {
        label: L('Impact & clinical metrics', 'Результат и клинические метрики'),
        paragraphs: [
          L(
            '94.6% detection sensitivity on the validation cohort. 0.12 false alarms per hour: combined spectral-entropy artifact suppression cut the false alarm rate more than fourfold versus baseline academic models. 3.8× faster screening: automatic clustering of pathological epochs removes most of the manual labelling of a 24-hour recording.',
            '94,6% чувствительность детекции: высокая точность дифференциации предиктального состояния на валидационной когорте данных. 0,12 ложных срабатываний в час: подавление артефактов через комбинированный спектрально-энтропийный анализ снизило False Alarm Rate более чем в 4 раза по сравнению с базовыми академическими моделями. 3,8× ускорение скрининга: врач-нейрофизиолог тратит существенно меньше времени на разметку суточной записи за счет автоматической кластеризации патологических эпох.'
          ),
        ],
        charts: [
          {
            type: 'column',
            title: L('Baseline model vs adapted pipeline', 'Базовая модель против адаптированного конвейера'),
            labels: [
              L('Prediction sensitivity, %', 'Чувствительность предикции, %'),
              L('Artifact rejection, %', 'Отбраковка артефактов, %'),
              L('Screening speed index', 'Индекс скорости скрининга'),
              L('False alarms, inverse score', 'Ложные тревоги, обратный балл'),
            ],
            series: [
              { name: L('Baseline academic model', 'Базовая академическая модель'), values: [71, 42, 26, 22] },
              { name: L('Adapted clinical pipeline', 'Адаптированный клинический конвейер'), values: [95, 88, 98, 88] },
            ],
            max: 100,
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
    year: '2025–2026',
    kind: 'product',
    img: work2,
    link: 'https://ai-im.tech',
    metrics: [
      { value: L('8 weeks', '8 недель'), label: L('MVP to production', 'Вывод MVP в продакшен') },
      { value: L('< 300 ms', '< 300 мс'), label: L('RAG retrieval latency', 'Задержка RAG-поиска') },
      { value: L('−60%', '−60%'), label: L('Identity drift incidents', 'Сбоев дрейфа идентичности') },
    ],
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
        'AIIM представляет собой мою исследовательскую инициативу в области формирования устойчивой гуманизированной идентичности ИИ. Я разработала её методологию, таблицы параметров, архитектуру базы знаний и систему антидрифт как практическую связь между когнитивной психологией, медицинским мышлением и инженерией ИИ. Исследование реализовано в виде действующей платформы на ai-im.tech.'
      ),
      L(
        'The platform is used by Aalto University in its AI ethics projects. The approach builds on my University of Helsinki Ethics of AI certification: transparency, accountability and predictable agent behavior are embedded in the identity architecture itself.',
        'Платформа используется Университетом Аалто в проектах по этике ИИ. Подход опирается на мою сертификацию Ethics of AI Хельсинкского университета: прозрачность, подотчётность и предсказуемость поведения агента заложены в саму архитектуру идентичности.'
      ),
      L(
        'The core distinction is Identity > Intellect. Its behavioral identity is encoded through twelve aspects, maturity levels, states, and delta-priorities, then protected by identity checkpoints and an anti-drift system. The model, prompts, knowledge sources, voice, and integrations remain replaceable.',
        'Ключевой принцип: «Идентичность важнее интеллекта». Поведенческая идентичность кодируется через двенадцать аспектов, уровни зрелости, состояния и дельта-приоритеты и затем защищается контрольными точками идентичности и системой защиты от дрейфа. Модель, промпты, источники знаний, голос и интеграции остаются заменяемыми.'
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
              'Разные поставщики моделей, голосовые сервисы, почтовые и автоматизационные инструменты могут работать за одной конфигурацией агента. Модель идентичности и данных остаётся переносимой при смене поставщика. Слой защиты от дрейфа проверяет, сохраняется ли поведение внутри закодированного профиля.'
            ),
          },
        ],
        tables: [
          {
            title: L('Identity dimensions comparison', 'Сравнение измерений идентичности'),
            columns: [L('Dimension', 'Измерение'), L('System prompt', 'Системный промпт'), L('AIIM', 'AIIM')],
            rows: [
              [L('Aspects', 'Аспекты'), L('Loose text description', 'Свободное текстовое описание'), L('12 structured dimensions', '12 структурированных измерений')],
              [L('Plans', 'Планы'), L('Implicit or absent', 'Неявные или отсутствуют'), L('5 explicit processing layers', '5 явных слоёв обработки')],
              [L('Maturity levels', 'Уровни зрелости'), L('Not defined', 'Не определены'), L('4 levels of reasoning depth', '4 уровня глубины рассуждения')],
              [L('Cognitive biases', 'Когнитивные предубеждения'), L('Not defined', 'Не определены'), L('5 structured bias patterns', '5 структурированных паттернов искажений')],
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
            title: L('Aspects — 12 identity dimensions', 'Аспекты: 12 измерений идентичности'),
            columns: [L('Code', 'Код'), L('Aspect', 'Аспект'), L('Category', 'Категория'), L('Effect on behavior', 'Влияние на поведение')],
            rows: [
              [L('wi', 'wi'), L('Goal-Orientation', 'Целеустремлённость'), L('Cognitive', 'Когнитивная'), L('Determination and volition; raises assertiveness and strength of opinion.', 'Воля и настойчивость; усиливает уверенность и твёрдость мнения.')],
              [L('lo', 'lo'), L('Empathy', 'Эмпатия'), L('Emotional', 'Эмоциональная'), L('Emotional sensitivity; raises warmth, reduces aggression.', 'Эмоциональная чувствительность; повышает теплоту, снижает агрессию.')],
              [L('im', 'im'), L('Idea Generation', 'Генерация идей'), L('Cognitive', 'Когнитивная'), L('Creativity and metaphor; increases divergence and imagery.', 'Креативность и метафоричность; усиливает образность и вариативность.')],
              [L('ho', 'ho'), L('Ethics', 'Этика'), L('Ethical', 'Этическая'), L('Moral restraint; suppresses profanity and aggression.', 'Моральные ограничения; подавляет грубость и агрессию.')],
              [L('co', 'co'), L('Logic', 'Логика'), L('Cognitive', 'Когнитивная'), L('Structured reasoning; increases clarity and rational argument.', 'Структурное рассуждение; повышает ясность и рациональность.')],
              [L('em', 'em'), L('Emotional State', 'Эмоциональность'), L('Emotional', 'Эмоциональная'), L('Affective intensity; raises expressiveness and variability.', 'Аффективная интенсивность; усиливает выразительность и вариативность.')],
              [L('be', 'be'), L('Behavioral Expression', 'Поведенческое выражение'), L('Operational', 'Операционная'), L('Reactivity; increases directness, slang and conflict likelihood.', 'Реактивность; усиливает прямоту, сленг и вероятность конфликта.')],
              [L('sp', 'sp'), L('Meaning', 'Смысл'), L('Philosophical', 'Философская'), L('Existential framing; adds metaphors and reflective sentences.', 'Экзистенциальная рамка; добавляет метафоры и рефлексию.')],
              [L('se', 'se'), L('Metacognition', 'Метакогниция'), L('Cognitive', 'Когнитивная'), L('Self-checking; reduces impulsiveness, adds self-corrections.', 'Самопроверка; снижает импульсивность, добавляет самокоррекции.')],
              [L('pe', 'pe'), L('Input Processing', 'Обработка ввода'), L('Operational', 'Операционная'), L('Attention to user input; increases precision and context sensitivity.', 'Внимание к вводу; повышает точность и чувствительность к контексту.')],
              [L('me', 'me'), L('Memory', 'Память'), L('Operational', 'Операционная'), L('Internal consistency; strengthens stability of worldview.', 'Внутренняя связность; укрепляет устойчивость картины мира.')],
              [L('at', 'at'), L('Attention', 'Внимание'), L('Cognitive', 'Когнитивная'), L('Focus control; shorter, more targeted speech.', 'Управление фокусом; более короткая и точная речь.')],
            ],
          },
          {
            title: L('Plans — 5 processing layers', 'Планы: 5 слоёв обработки'),
            columns: [L('Plan', 'План'), L('Purpose', 'Назначение')],
            rows: [
              [L('Core', 'Core'), L('Base cognition layer.', 'Базовый слой мышления.')],
              [L('Link', 'Link'), L('Interactive communication layer.', 'Слой интерактивной коммуникации.')],
              [L('Profile', 'Profile'), L('Personality definition and long-term traits.', 'Определение личности и долгосрочных черт.')],
              [L('Fusion', 'Fusion'), L('Conflict resolution between aspects.', 'Разрешение конфликтов между аспектами.')],
              [L('Goal', 'Goal'), L('High-level reasoning and strategy.', 'Высокоуровневое рассуждение и стратегия.')],
            ],
          },
          {
            title: L('Maturity levels — 4 depth tiers', 'Уровни зрелости: 4 ступени глубины'),
            columns: [L('Level', 'Уровень'), L('Retrieval depth', 'Глубина поиска'), L('Chain of thought', 'Цепочка рассуждений'), L('Verbosity (words)', 'Объём (слов)'), L('Self-check', 'Самопроверка')],
            rows: [
              [L('1 · Surface', '1 · Поверхностный'), L('0–1', '0–1'), L('off', 'выключена'), L('10–50', '10–50'), L('none', 'нет')],
              [L('2 · Contextual', '2 · Контекстный'), L('1–3', '1–3'), L('short', 'короткая'), L('50–150', '50–150'), L('low', 'низкая')],
              [L('3 · Elaborative', '3 · Развёрнутый'), L('4–6', '4–6'), L('medium', 'средняя'), L('150–800', '150–800'), L('medium', 'средняя')],
              [L('4 · Mastery', '4 · Мастерский'), L('7–8+', '7–8+'), L('long', 'длинная'), L('800–3000', '800–3000'), L('high', 'высокая')],
            ],
          },
          {
            title: L('Runtime modules', 'Модули времени выполнения'),
            columns: [L('Module', 'Модуль'), L('Parameters', 'Параметры'), L('Runtime effect', 'Эффект во время работы')],
            rows: [
              [L('States', 'Состояния'), L('EI (E/I), Valence (Positive/Negative)', 'EI (E/I), Valence (Positive/Negative)'), L('Extraversion and emotional polarity of the reply.', 'Экстраверсия и эмоциональная полярность ответа.')],
              [L('Identity profile', 'Профиль идентичности'), L('name, gender, age role, profession, education, culture, socio-economic level', 'имя, пол, возрастная роль, профессия, образование, культура, социальный уровень'), L('Grammatical forms and socio-cultural speech markers.', 'Грамматические формы и социокультурные маркеры речи.')],
              [L('Response length', 'Длина ответа'), L('short 1–3 · medium 20–150 · long 300+ · adaptive', 'короткий 1–3 · средний 20–150 · длинный 300+ · смешанный'), L('Verbosity strategy for every answer.', 'Стратегия объёма для каждого ответа.')],
              [L('Style module', 'Модуль стиля'), L('long_sentences, slang, obscenity, sarcasm, emotional_intensity, formality, warmth, monotony, speed, disfluency, fillers, false_start_probability', 'длина фраз, сленг, обсценность, сарказм, эмоциональность, формальность, теплота, монотонность, темп, сбивчивость, филлеры, вероятность фальстарта'), L('Linguistic surface of speech (0.0–1.0 each).', 'Языковая поверхность речи (0.0–1.0 каждый).')],
              [L('Disfluency model', 'Модель сбивчивости'), L('never 0.00 · periodically 0.10–0.15 (≤15%) · frequently 0.30–0.60 (30–60%)', 'никогда 0.00 · периодически 0.10–0.15 (≤15%) · часто 0.30–0.60 (30–60%)'), L('Frequency of fillers and restarts.', 'Частота филлеров и перезапусков фраз.')],
              [L('Transient emotional state', 'Кратковременные эмоции'), L('emotion (fatigue, joy, irritation, boredom, anxiety, excitement), intensity, decay', 'эмоция (усталость, радость, раздражение, скука, тревога, воодушевление), интенсивность, затухание'), L('Short-term affect that fades over the dialogue.', 'Кратковременный аффект, затухающий по ходу диалога.')],
              [L('Cognitive bias profile', 'Профиль когнитивных искажений'), L('confirmation, catastrophizing, optimism, negativity, self-serving — intensity 0.0–1.0', 'подтверждения, катастрофизация, оптимизм, негативизм, самозащита; интенсивность 0.0–1.0'), L('Selective interpretation of the user input.', 'Избирательная интерпретация ввода пользователя.')],
              [L('Self-disclosure', 'Самораскрытие'), L('level 0.0–1.0, style (warm, cautious, direct, emotional), boundaries', 'уровень 0.0–1.0, стиль (тёплый, осторожный, прямой, эмоциональный), границы'), L('How personal the agent is allowed to be.', 'Насколько личным может быть агент.')],
              [L('Dynamics', 'Динамика'), L('drift 0.0–1.0, volatility 0.0–1.0', 'дрейф 0.0–1.0, волатильность 0.0–1.0'), L('Rate of personality change across a session.', 'Скорость изменения личности в рамках сессии.')],
              [L('Conflict logic', 'Логика конфликта'), L('OpinionRigidity (flexible 0.0–0.3 · balanced 0.4–0.6 · unyielding 0.7–1.0), ConflictBehaviorModel (avoidant · rational · confrontational)', 'Жёсткость мнения (гибкое 0.0–0.3 · сбалансированное 0.4–0.6 · непреклонное 0.7–1.0), Модель поведения (избегание · рациональное · конфронтация)'), L('Behavior under disagreement.', 'Поведение при несогласии.')],
              [L('Behavior modes', 'Режимы поведения'), L('Neutral · Creative · Analytic · Empathic · Aggressive · Minimal · Consultative', 'Нейтральный · Креативный · Аналитический · Эмпатичный · Агрессивный · Минимальный · Консультативный'), L('Preset behavioral overlay on top of the aspects.', 'Готовая поведенческая надстройка над аспектами.')],
            ],
          },
        ],
        modules: [
          { title: L('Identity / Agent Profiles', 'Идентичность / Профили агентов'), body: L('agent_profiles: id, user_id, name, encoding, description, public_id, share_token, is_shared, original_author_id, original_author_name, imported_from, is_imported, created_at, updated_at. The row is the stable identity and public/share state of the agent.', 'agent_profiles: идентификатор, пользователь, имя, кодирование, описание, публичный идентификатор, токен доступа, флаг публикации, исходный автор, источник импорта, даты создания и обновления. Запись хранит стабильную идентичность агента и его статус публикации или предоставления доступа.') },
          { title: L('Plans / Agent Configs', 'Планы / Конфигурации агентов'), body: L('agent_configs: agent_profile_id, system_prompt, model, voice_id, openai_voice, agent_speaks_first, greeting_message, auto_end_dialog, farewell_message. The plan controls runtime behavior without rewriting identity.', 'agent_configs: идентификатор профиля, системный промпт, модель, идентификатор голоса, голос, флаг первого сообщения, приветствие, авто-завершение, прощание. План управляет поведением во время работы, не переписывая идентичность.') },
          { title: L('Levels / Builder Parameters', 'Уровни / Параметры конструктора'), body: L('Constructor and profiling levels define the depth of configuration: freeform character description, 12 identity aspects, 5 plans, 4 maturity levels, 5 cognitive biases, drift, lexicon, and 12 category parameters. Profiles can be imported from PDF, DOCX, TXT, or JSON and converted into a structured encoding.', 'Уровни конструктора и профилирования задают глубину настройки: свободное описание персонажа, 12 аспектов идентичности, 5 планов, 4 уровня зрелости, 5 когнитивных искажений, дрейф, словарь и 12 параметров категорий. Профили импортируются из PDF, DOCX, TXT или JSON и превращаются в структурированную строку идентичности.') },
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
            'Внешний интерфейс спроектирован как совместимый с OpenAI: запрос чата с ключом доступа, моделью, сообщениями, необязательной потоковой передачей и внешней сессией. Запросы записываются в историю диалогов, счётчики увеличиваются. Ошибки преобразуются в понятные ответы клиента. Один и тот же агент становится доступен игровому серверу, веб-приложению, интерфейсу поддержки или рабочему процессу в n8n.'
          ),
          L(
            'AIIM remains an evolving research initiative and a live implementation of the methodology. The public platform at ai-im.tech provides the practical layer, while the research materials document the model, parameter tables, verification logic, and scenarios developed from medical and psychological practice.',
            'AIIM остаётся развивающейся исследовательской инициативой и действующей реализацией методологии. Публичная платформа на ai-im.tech представляет практический слой. Исследовательские материалы описывают модель, таблицы параметров, логику верификации и сценарии, разработанные на основе медицинской и психологической практики.'
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
