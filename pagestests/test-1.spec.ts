import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.getByRole('link', { name: 'Practice Page Rahul Shetty Academy https://rahulshettyacademy.com ›' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Open Window' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('link', { name: 'Access all our Courses' })).toBeVisible();
  await page1.getByRole('link', { name: 'Courses', exact: true }).click();
  await expect(page1.locator('#udemy')).toContainText('QA Click Academy');
});