import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load home page with hero', async ({ page }) => {
    await page.goto('/')
    
    await expect(page).toHaveTitle(/Cars By Daniel/)
    await expect(page.locator('h1')).toContainText('CARS BY DANIEL')
  })

  test('should show navigation links', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.getByRole('link', { name: 'Services' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Gallery' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible()
  })

  test('should have working CTA buttons', async ({ page }) => {
    await page.goto('/')
    
    const getQuoteBtn = page.getByRole('link', { name: 'Get A Quote' })
    await expect(getQuoteBtn).toBeVisible()
    await expect(getQuoteBtn).toHaveAttribute('href', '/contact')
  })

  test('should display services section', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.locator('text=OUR SERVICES')).toBeVisible()
    await expect(page.locator('text=Exterior Wash')).toBeVisible()
    await expect(page.locator('text=Interior Detailing')).toBeVisible()
  })

  test('should show contact info in footer', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.getByText('337-555-3333')).toBeVisible()
    await expect(page.getByText('daniel@carsbydaniel.com')).toBeVisible()
  })
})
