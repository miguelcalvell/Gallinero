// Utilidades de cálculo simples para comida/agua por día
export const FEED_PER_HEN_GRAM = 120 // gramos/día por gallina adulta
export const WATER_PER_HEN_ML = 250  // mililitros/día por gallina adulta

export function dailyFeedGrams(hens: number): number {
  if (!Number.isFinite(hens) || hens < 0) return 0
  return Math.ceil(hens * FEED_PER_HEN_GRAM)
}

export function dailyWaterMl(hens: number): number {
  if (!Number.isFinite(hens) || hens < 0) return 0
  return Math.ceil(hens * WATER_PER_HEN_ML)
}

export function gramsToKg(g: number): number {
  return Math.round((g / 1000) * 100) / 100
}

export function mlToL(ml: number): number {
  return Math.round((ml / 1000) * 100) / 100
}
