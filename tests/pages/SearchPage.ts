import { Page, Locator } from '@playwright/test';

// This page object keeps the Search UI actions in one place.
export class SearchPage {
  readonly page: Page;
  readonly searchLink: Locator;
  readonly searchInput: Locator;
  readonly searchResults: Locator;
  readonly noProductsMessage: Locator;
  readonly categoryFilter: Locator;
  readonly priceFilter: Locator;
  readonly sortFilter: Locator;
  readonly addToCartButtons: Locator;
  readonly cartCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchLink = page.locator('#searchLink');
    this.searchInput = page.locator('#searchInput');
    this.searchResults = page.locator('#searchResults');
    this.noProductsMessage = page.locator('#noProductsMessage');
    this.categoryFilter = page.locator('#categoryFilter');
    this.priceFilter = page.locator('#priceFilter');
    this.sortFilter = page.locator('#sortFilter');
    this.addToCartButtons = page.locator('.search-product button');
    this.cartCount = page.locator('#cartCount');
  }

  async openSearch() {
    await this.searchLink.click();
  }

  async search(text: string) {
    await this.searchInput.fill(text);
  }

  async clearSearch() {
    await this.searchInput.fill('');
  }

  async filterByCategory(value: string) {
    await this.categoryFilter.selectOption(value);
  }

  async filterByPrice(value: string) {
    await this.priceFilter.selectOption(value);
  }

  async sortBy(value: string) {
    await this.sortFilter.selectOption(value);
  }

  async addFirstProductToCart() {
    await this.addToCartButtons.first().click();
  }
}
