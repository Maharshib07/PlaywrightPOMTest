import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('#dropdown-class-example').selectOption('option2');
  await page.locator('#dropdown-class-example').selectOption('option1');
  await expect(page.locator('#dropdown-class-example')).toBeVisible();
});