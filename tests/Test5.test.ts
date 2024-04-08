import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto("https://www.amazon.in");
  await page.getByRole('link', { name: 'Shop online at Amazon India' }).click();
  await page.getByPlaceholder('Search Amazon.in').fill('one[lus tv');
  await page.getByPlaceholder('Search Amazon.in').press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Xiaomi 108 cm (43 inches) X Series 4K Ultra HD Smart Google TV L43M8-A2IN (Black)', exact: true }).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/Xiaomi-inches-Ultra-Google-L43M8-A2IN/dp/B0CH33945T/ref=sr_1_1_sspa?crid=1DU3YZ9UAZROY&keywords=one%5Blus%2Btv&qid=1712165256&sprefix=oneplus%2Btv%2Caps%2C246&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
  await page1.getByLabel('Add to Cart').click();
  await page1.getByLabel('Exit this panel and return to').click();
  await page1.getByLabel('items in cart').click();
  await page1.locator('#sc-subtotal-amount-activecart').getByText('27,999.00').click();
});