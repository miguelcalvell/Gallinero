import { test, expect } from '@playwright/test'

test('añadir gallinas y ver cálculo en Dashboard', async ({ page }) => {
  await page.goto('/')
  // Abrir diálogo de añadir
  await page.getByRole('button', { name: /Añadir animales/i }).click()
  await expect(page.getByText('Añadir animales')).toBeVisible()
  // Cantidad 3
  const countInput = page.getByLabel('Cantidad')
  await countInput.fill('3')
  // Guardar
  await page.getByRole('button', { name: 'Guardar' }).click()
  // Toast apareció (puede desaparecer rápido, pero verificamos totales)
  await expect(page.getByText('Animales activos')).toBeVisible()
  // Comprobar totales: 3 animales, comida 360 g, agua 0.75 L
  await expect(page.getByText(/^3$/)).toBeVisible()
  await expect(page.getByText(/360 g/)).toBeVisible()
  await expect(page.getByText(/0.75 L/)).toBeVisible()
})
