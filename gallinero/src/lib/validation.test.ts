import { describe, expect, it } from 'vitest'
import { validateAnimalForm } from './validation'

describe('validateAnimalForm', () => {
  it('acepta tipo y cantidad >=1', () => {
    const res = validateAnimalForm({ type: 'gallina', count: 3 })
    expect(res.valid).toBe(true)
  })
  it('rechaza sin tipo', () => {
    const res = validateAnimalForm({ type: '', count: 1 })
    expect(res.valid).toBe(false)
    expect(res.errors.type).toBeDefined()
  })
  it('rechaza cantidad 0', () => {
    const res = validateAnimalForm({ type: 'gallina', count: 0 })
    expect(res.valid).toBe(false)
    expect(res.errors.count).toBeDefined()
  })
})
