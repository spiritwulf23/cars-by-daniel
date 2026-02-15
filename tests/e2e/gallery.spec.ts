import { test, expect } from '@playwright/test'

test.describe('Gallery Page', () => {
  test('should load gallery page', async ({ page }) => {
    await page.goto('/gallery')
    
    await expect(page).toHaveTitle(/Gallery/)
    await expect(page.locator('h1')).toContainText('GALLERY')
  })

  test('should display category filter buttons', async ({ page }) => {
    await page.goto('/gallery')
    
    await expect(page.getByRole('button', { name: 'All' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Exterior' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Interior' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Paint Correction' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Ceramic Coating' })).toBeVisible()
  })

  test('should filter gallery items by category', async ({ page }) => {
    await page.goto('/gallery')
    
    await page.getByRole('button', { name: 'Exterior' }).click()
    
    await expect(page.locator('text=Full Exterior Detail')).toBeVisible()
    await expect(page.locator('text=Wheel & Tire Detail')).toBeVisible()
  })

  test('should open gallery item modal', async ({ page }) => {
    await page.goto('/gallery')
    
    await page.locator('[class*="cursor-pointer"]').first().click()
    
    await expect(page.locator('text=Before')).toBeVisible()
    await expect(page.locator('text=After')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Close' })).toBeVisible()
  })

  test('should close modal on close button', async ({ page }) => {
    await page.goto('/gallery')
    
    await page.locator('[class*="cursor-pointer"]').first().click()
    await page.getByRole('button', { name: 'Close' }).click()
    
    await expect(page.locator('text=Before')).not.toBeVisible()
  })

  test('should display gallery items', async ({ page }) => {
    await page.goto('/gallery')
    
    await expect(page.locator('text=Full Exterior Detail')).toBeVisible()
    await expect(page.locator('text=Leather Interior Restoration')).toBeVisible()
    await expect(page.locator('text=Paint Correction & Shine')).toBeVisible()
  })

  test('should load images from external source', async ({ page }) => {
    await page.goto('/gallery')
    
    const images = page.locator('img')
    await expect(images.first()).toBeVisible()
  })
})
