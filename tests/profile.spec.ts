import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { ProfilePage } from './pages/profilePage';

// Smoke: this is a simple entry-point check that validates the profile page can be opened after login.
test('open profile @smoke @regression', async ({ page }) => {
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

// Sanity: this focused profile edit covers the most common change request for the profile form.
test('update full name @sanity @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await profilePage.openProfile();
  await profilePage.updateProfile('Jane Smith', 'jane@example.com', '9876543210');

  await expect(profilePage.fullNameValue).toContainText('Jane Smith');
});

// Sanity: this profile edit check ensures the email field updates correctly without breaking the flow.
test('update email @sanity @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await profilePage.openProfile();
  await profilePage.updateProfile('Jane Doe', 'jane.updated@example.com', '9876543210');

  await expect(profilePage.emailValue).toContainText('jane.updated@example.com');
});

// Regression: this validation protects the email input rule from future regressions.
test('invalid email validation @regression', async ({ page }) => {
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

// Regression: this validation ensures the profile form still rejects an empty full name.
test('empty name validation @regression', async ({ page }) => {
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

// Regression: this confirmation message test protects the success feedback path after saving the profile.
test('verify success message @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await profilePage.openProfile();
  await profilePage.updateProfile('Jane Doe', 'jane@example.com', '9876543210');

  await expect(profilePage.profileMessage).toContainText('Profile Updated Successfully');
});
