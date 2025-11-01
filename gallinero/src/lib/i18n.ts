import React, { createContext, useContext, useMemo, useState } from 'react'

type Dict = Record<string, string>
type AllDicts = Record<string, Dict>

const es: Dict = {
  'app.title': 'Gallinero',
  'dashboard.title': 'Resumen',
  'dashboard.quick.addAnimal': 'Añadir animales',
  'dashboard.quick.clean': 'Marcar limpieza',
  'dashboard.totals': 'Totales',
  'dashboard.feedWater': 'Consumo diario estimado',
  'animals.title': 'Animales',
  'animals.add': 'Añadir',
  'animals.type': 'Tipo',
  'animals.count': 'Cantidad',
  'animals.tag': 'Identificador (opcional)',
  'animals.add.submit': 'Guardar',
  'maintenance.title': 'Mantenimiento',
  'maintenance.clean.now': 'Marcar limpieza de gallinero (hoy)',
  'health.title': 'Salud',
  'history.title': 'Historial',
  'settings.title': 'Ajustes',
  'settings.theme': 'Tema',
  'settings.theme.dark': 'Oscuro',
  'settings.theme.light': 'Claro',
  'settings.lang': 'Idioma',
  'toast.saved': 'Guardado',
  'offline': 'Sin conexión'
}

const dicts: AllDicts = { es }

const I18nCtx = createContext<{ t: (k: string) => string; lang: string; setLang: (l: string)=>void } | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState('es')
  const t = useMemo(() => (k: string) => dicts[lang]?.[k] ?? dicts['es'][k] ?? k, [lang])
  return <I18nCtx.Provider value={{ t, lang, setLang }}>{children}</I18nCtx.Provider>
}

export function useT() {
  const ctx = useContext(I18nCtx)
  if (!ctx) throw new Error('useT must be used within I18nProvider')
  return ctx
}
