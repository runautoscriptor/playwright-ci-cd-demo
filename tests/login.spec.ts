import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';

// These tests cover the main happy path and failure path for the demo app.
// Each test is intentionally simple so it is easy to learn from.

test('valid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await expect(loginPage.message).toContainText('Login successful');
});

test('invalid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('qa', 'wrong');
  await expect(loginPage.message).toContainText('Invalid username or password');
});

test('empty username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('', 'pass123');
  await expect(loginPage.message).toContainText('Username is required');
});

test('empty password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('qa', '');
  await expect(loginPage.message).toContainText('Password is required');
});

test('logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await loginPage.logout();
  await expect(loginPage.message).toContainText('You have logged out');
});

test('verify success message', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await expect(loginPage.message).toHaveClass(/success/);
});
