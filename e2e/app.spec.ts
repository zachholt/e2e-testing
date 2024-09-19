import { test, expect } from "@playwright/test";

test("should navigate to the about page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text 'About' and click on it
  await page.click("text=About");
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("/about");
  // The new page should contain an h1 with "About"
  await expect(page.locator("h1")).toContainText("About");
});

test('sets storage value of login to true', async ({ page }) => {
  await page.goto('/');

  await page.evaluate(() => {
    localStorage.setItem('login', 'true');
  });

  // Check if the value is set correctly
  const storedValue = await page.evaluate(() => localStorage.getItem('login'));
  expect(storedValue).toBe('true');
});

test('sets storage value of login to false', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.evaluate(() => {
    localStorage.setItem('login', 'false');
  });

  // Check if the value is set correctly
  const storedValue = await page.evaluate(() => localStorage.getItem('login'));
  expect(storedValue).toBe('false');
});


test('Home page loads successfully', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Verify page is loaded by finding the Home Text
  await expect(page.locator('h1')).toContainText('Home')

});

test('Go to Profile, get redirect to login, then login successfully', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.evaluate(() => {
    localStorage.setItem('login', 'false');
  });
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('test@test.com');
  await page.getByPlaceholder('Enter your email').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('test1234');
  await page.getByRole('button', { name: 'Login' }).click();
});