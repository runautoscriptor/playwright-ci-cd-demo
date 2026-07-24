import { Page, Locator } from '@playwright/test';

// This is a simple Page Object Model.
// Each page element is wrapped in one place so tests stay easy to read.
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logoutButton: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#loginButton');
    this.logoutButton = page.locator('#logoutButton');
    this.message = page.locator('#message');
  }

  async open() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async logout() {
    await this.logoutButton.click();
  }

  async expectMessage(text: string) {
    await this.message.waitFor({ state: 'visible' });
    await this.message.expectToContainText(text);
  }
}
