import { test, expect } from '@playwright/test';

test('login, update info in profile page, logout', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('test');
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('test@test.com');
  await page.getByPlaceholder('Enter your email').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('test1234@test.com');
  await page.getByPlaceholder('Enter your email').press('Tab');
  await page.getByPlaceholder('Enter your Name').fill('zach');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('link', { name: '← Go Back' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});