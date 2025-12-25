
import { test, expect } from '@playwright/test';

test('capture brand page spacing', async ({ page }) => {
    // Go to home page
    await page.goto('http://localhost:5173');

    // Click "For Brands" toggle
    await page.click('text=For brands');

    // Wait for animation
    await page.waitForTimeout(1000);

    // Scroll down a bit to see the gap between Hero and Trusted By
    // We'll verify what elements are there
    const heroSection = page.locator('section').first();
    const trustedBy = page.locator('text=Trusted by 20+ forward-thinking brands');

    // Take screenshot
    await page.screenshot({ path: 'brand_view_spacing.png', fullPage: true });
});
