import { Page, Locator } from '@playwright/test';

// This page object keeps the cart UI interactions in one place.
export class CartPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly productsSection: Locator;
  readonly cartSection: Locator;
  readonly cartCount: Locator;
  readonly emptyCartMessage: Locator;
  readonly subtotal: Locator;
  readonly totalItems: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.locator('#cartLink');
    this.productsSection = page.locator('#productsSection');
    this.cartSection = page.locator('#cartSection');
    this.cartCount = page.locator('#cartCount');
    this.emptyCartMessage = page.locator('#emptyCartMessage');
    this.subtotal = page.locator('#subtotal');
    this.totalItems = page.locator('#totalItems');
    this.continueShoppingButton = page.locator('#continueShoppingButton');
  }

  async openCart() {
    await this.cartLink.click();
  }

  async addProduct(name: string) {
    const button = this.productsSection.locator(`.product-card[data-product-name="${name}"] button`);
    await button.click();
  }

  async increaseQuantity(name: string) {
    const button = this.page.locator(`[data-product-name="${name}"] .increase-btn`);
    await button.click();
  }

  async decreaseQuantity(name: string) {
    const button = this.page.locator(`[data-product-name="${name}"] .decrease-btn`);
    await button.click();
  }

  async removeProduct(name: string) {
    const button = this.page.locator(`[data-product-name="${name}"] .remove-btn`);
    await button.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }
}
