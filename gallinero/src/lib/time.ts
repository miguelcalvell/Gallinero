export function nowIso() {
  return new Date().toISOString()
}
export function todayISODate() {
  const d = new Date()
  d.setHours(0,0,0,0)
  return d.toISOString()
}
