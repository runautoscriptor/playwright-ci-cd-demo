import { Page, Locator } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;
  readonly profileLink: Locator;
  readonly dashboardLink: Locator;
  readonly editProfileButton: Locator;
  readonly fullNameValue: Locator;
  readonly emailValue: Locator;
  readonly mobileValue: Locator;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly mobileInput: Locator;
  readonly saveProfileButton: Locator;
  readonly profileMessage: Locator;
  readonly profileForm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileLink = page.locator('#profileLink');
    this.dashboardLink = page.locator('#dashboardLink');
    this.editProfileButton = page.locator('#editProfileButton');
    this.fullNameValue = page.locator('#fullNameValue');
    this.emailValue = page.locator('#emailValue');
    this.mobileValue = page.locator('#mobileValue');
    this.fullNameInput = page.locator('#fullName');
    this.emailInput = page.locator('#email');
    this.mobileInput = page.locator('#mobileNumber');
    this.saveProfileButton = page.locator('#saveProfileButton');
    this.profileMessage = page.locator('#profileMessage');
    this.profileForm = page.locator('#profileForm');
  }

  async openProfile() {
    await this.profileLink.click();
  }

  async editProfile() {
    await this.editProfileButton.click();
  }

  async saveChanges() {
    await this.saveProfileButton.click();
  }

  async updateProfile(fullName: string, email: string, mobileNumber: string) {
    await this.editProfile();
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.mobileInput.fill(mobileNumber);
    await this.saveChanges();
  }
}
