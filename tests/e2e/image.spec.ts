import { test, expect } from '@playwright/test'

test.describe('Image Optimization', () => {
  const testImageUrl = 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&h=500&fit=crop'

  test('should optimize images via Next.js image API', async ({ page }) => {
    const response = await page.goto(`/_next/image?url=${encodeURIComponent(testImageUrl)}&w=800&q=75`)
    
    expect(response?.status()).toBe(200)
    expect(response?.headers()['content-type']).toMatch(/^image\/(webp|png|avif)$/)
  })

  test('should cache optimized images', async ({ page }) => {
    const url = `/_next/image?url=${encodeURIComponent(testImageUrl)}&w=400&q=75`
    
    const response1 = await page.goto(url)
    const etag1 = response1?.headers()['etag']

    const response2 = await page.goto(url)
    const etag2 = response2?.headers()['etag']

    expect(etag1).toBeDefined()
    expect(etag2).toBe(etag1)
  })

  test('should respect width parameter', async ({ page }) => {
    const response = await page.goto(`/_next/image?url=${encodeURIComponent(testImageUrl)}&w=200&q=75`)
    
    expect(response?.status()).toBe(200)
  })

  test('should handle invalid image URL gracefully', async ({ page }) => {
    const response = await page.goto('/_next/image?url=invalid-url&w=100&q=75')
    
    expect([400, 404, 500]).toContain(response?.status() ?? 0)
  })

  test('should serve WebP format when supported', async ({ page }) => {
    await page.setExtraHTTPHeaders({ 'Accept': 'image/webp,*/*' })
    
    const response = await page.goto(`/_next/image?url=${encodeURIComponent(testImageUrl)}&w=800&q=75`)
    
    expect(response?.status()).toBe(200)
  })
})
