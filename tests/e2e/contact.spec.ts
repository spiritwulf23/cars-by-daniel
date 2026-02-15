import { test, expect } from '@playwright/test'

test.describe('Contact Page', () => {
  test('should load contact page', async ({ page }) => {
    await page.goto('/contact')
    
    await expect(page).toHaveTitle(/Contact/)
    await expect(page.locator('h1')).toContainText('CONTACT US')
  })

  test('should display contact information', async ({ page }) => {
    await page.goto('/contact')
    
    await expect(page.getByText('337-555-3333')).toBeVisible()
    await expect(page.getByText('daniel@carsbydaniel.com')).toBeVisible()
    await expect(page.getByText('Lafayette, LA')).toBeVisible()
  })

  test('should have working contact form', async ({ page }) => {
    await page.goto('/contact')
    
    await page.fill('input[placeholder="Your name"]', 'Test User')
    await page.fill('input[placeholder="your@email.com"]', 'test@example.com')
    await page.fill('input[placeholder="337-555-3333"]', '337-555-1234')
    await page.selectOption('select', 'Exterior Detailing')
    await page.fill('textarea', 'Test message')
    
    await page.click('button[type="submit"]')
    
    await expect(page.getByText('Thank you for your inquiry!')).toBeVisible()
  })
})
