import { test, expect } from '@playwright/test'

test.describe('Services Page', () => {
  test('should load services page', async ({ page }) => {
    await page.goto('/services')
    
    await expect(page).toHaveTitle(/Services/)
    await expect(page.locator('h1')).toContainText('PROFESSIONAL DETAILING')
  })

  test('should display all service categories', async ({ page }) => {
    await page.goto('/services')
    
    await expect(page.locator('text=Exterior Detailing')).toBeVisible()
    await expect(page.locator('text=Interior Detailing')).toBeVisible()
    await expect(page.locator('text=Paint Correction')).toBeVisible()
    await expect(page.locator('text=Ceramic Coating')).toBeVisible()
  })

  test('should have pricing for each service', async ({ page }) => {
    await page.goto('/services')
    
    await expect(page.locator('text=Starting at $')).toHaveCount(24)
  })
})
