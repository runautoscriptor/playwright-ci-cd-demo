import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { ProfilePage } from './pages/profilePage';

test('open profile', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await profilePage.openProfile();

  await expect(page.locator('#profilePage')).toBeVisible();
  await expect(profilePage.fullNameValue).toContainText('Jane Doe');
  await expect(profilePage.emailValue).toContainText('jane@example.com');
  await expect(profilePage.mobileValue).toContainText('9876543210');
});

test('update full name', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await profilePage.openProfile();
  await profilePage.updateProfile('Jane Smith', 'jane@example.com', '9876543210');

  await expect(profilePage.fullNameValue).toContainText('Jane Smith');
});

test('update email', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await profilePage.openProfile();
  await profilePage.updateProfile('Jane Doe', 'jane.updated@example.com', '9876543210');

  await expect(profilePage.emailValue).toContainText('jane.updated@example.com');
});

test('invalid email validation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await profilePage.openProfile();
  await profilePage.editProfile();
  await profilePage.emailInput.fill('invalid-email');
  await profilePage.saveProfileButton.click();

  await expect(profilePage.profileMessage).toContainText('Please enter a valid email');
});

test('empty name validation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await profilePage.openProfile();
  await profilePage.editProfile();
  await profilePage.fullNameInput.fill('');
  await profilePage.saveProfileButton.click();

  await expect(profilePage.profileMessage).toContainText('Full name is required');
});

test('verify success message', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await profilePage.openProfile();
  await profilePage.updateProfile('Jane Doe', 'jane@example.com', '9876543210');

  await expect(profilePage.profileMessage).toContainText('Profile Updated Successfully');
});
