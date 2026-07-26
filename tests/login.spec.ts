import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';

// These tests cover the main happy path and failure path for the demo app.
// Each test is intentionally simple so it is easy to learn from.

// Smoke: this is a core happy-path check that proves the app loads and the primary login flow works.
test('valid login @smoke @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await expect(loginPage.message).toContainText('Login successful');
});

// Regression: this negative-path login test protects the authentication error state.
test('invalid login @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('qa', 'wrong');
  await expect(loginPage.message).toContainText('Invalid username or password');
});

// Regression: this validation test confirms the form blocks empty usernames early.
test('empty username @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('', 'pass123');
  await expect(loginPage.message).toContainText('Username is required');
});

// Regression: this validation test confirms the form blocks empty passwords early.
test('empty password @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('qa', '');
  await expect(loginPage.message).toContainText('Password is required');
});

// Sanity: this is a focused logout check to ensure the session can be closed cleanly after login.
test('logout @sanity @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await loginPage.logout();
  await expect(loginPage.message).toContainText('You have logged out');
});

// Regression: this UI assertion protects the success styling for the login feedback banner.
test('verify success message @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await expect(loginPage.message).toHaveClass(/success/);
});
