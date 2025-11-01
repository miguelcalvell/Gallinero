export type AnimalForm = { type: string; count: number }
export function validateAnimalForm(input: AnimalForm) {
  const errors: Partial<Record<keyof AnimalForm, string>> = {}
  if (!input.type) errors.type = 'El tipo es obligatorio'
  if (!Number.isFinite(input.count) || input.count < 1) errors.count = 'Cantidad mínima 1'
  return { valid: Object.keys(errors).length === 0, errors }
}
