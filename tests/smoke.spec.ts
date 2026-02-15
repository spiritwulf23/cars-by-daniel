import { test, expect } from '@playwright/test'

const pages = [
  { path: '/', name: 'Home' },
  { path: '/services', name: 'Services' },
  { path: '/gallery', name: 'Gallery' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
]

pages.forEach(({ path, name }) => {
  test(`${name} page should load without errors`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    
    await page.goto(path)
    
    await expect(page).toHaveTitle(/Cars By Daniel/)
    expect(errors).toHaveLength(0)
  })
})
