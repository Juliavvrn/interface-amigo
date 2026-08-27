import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Lang = 'en' | 'ru'

interface I18nContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (en: string, ru: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null
    return saved === 'ru' ? 'ru' : 'en'
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof localStorage !== 'undefined') localStorage.setItem('lang', l)
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = (en: string, ru: string) => (lang === 'ru' ? ru : en)

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
