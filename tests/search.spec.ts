import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { SearchPage } from './pages/SearchPage';

test('search existing product', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.search('Laptop');

  await expect(searchPage.searchResults).toContainText('Laptop');
  await expect(searchPage.searchResults).toContainText('Gaming Laptop');
});

test('search partial text', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.search('Lap');

  await expect(searchPage.searchResults).toContainText('Laptop');
  await expect(searchPage.searchResults).toContainText('Gaming Laptop');
});

test('search with lowercase', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.search('mouse');

  await expect(searchPage.searchResults).toContainText('Wireless Mouse');
});

test('search nonexistent product', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.search('Phone');

  await expect(searchPage.noProductsMessage).toContainText('No products found');
});

test('clear search returns all products', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.search('Laptop');
  await searchPage.clearSearch();

  await expect(searchPage.searchResults).toContainText('Laptop');
  await expect(searchPage.searchResults).toContainText('Wireless Mouse');
});

test('search then add to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.search('Laptop');
  await searchPage.addFirstProductToCart();

  await expect(searchPage.cartCount).toContainText('1');
});

test('filter by category', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.filterByCategory('Accessories');

  await expect(searchPage.searchResults).toContainText('Wireless Mouse');
  await expect(searchPage.searchResults).toContainText('USB Cable');
});

test('filter by price', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.filterByPrice('under-100');

  await expect(searchPage.searchResults).toContainText('Wireless Mouse');
  await expect(searchPage.searchResults).toContainText('USB Cable');
});

test('sort price low to high', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.sortBy('price-asc');

  await expect(searchPage.searchResults).toContainText('USB Cable');
});

test('sort price high to low', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.sortBy('price-desc');

  await expect(searchPage.searchResults).toContainText('Gaming Laptop');
});

test('sort alphabetically', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.sortBy('alpha');

  await expect(searchPage.searchResults).toContainText('Gaming Laptop');
});

test('search and filter together', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.search('Laptop');
  await searchPage.filterByCategory('Electronics');

  await expect(searchPage.searchResults).toContainText('Laptop');
  await expect(searchPage.searchResults).toContainText('Gaming Laptop');
});

test('verify navigation from dashboard to search', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();

  await expect(searchPage.searchInput).toBeVisible();
});
