import { test, expect } from '@playwright/test';

test('Attempt to go to profile, redirect to login page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByTitle('Login').click();
});