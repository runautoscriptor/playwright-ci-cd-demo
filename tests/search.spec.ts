import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { SearchPage } from './pages/SearchPage';

// Smoke: this is the primary search entry point because it proves the user can open search and find a known product.
test('search existing product @smoke @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.search('Laptop');

  await expect(searchPage.searchResults).toContainText('Laptop');
  await expect(searchPage.searchResults).toContainText('Gaming Laptop');
});

// Sanity: this checks that partial text still returns useful results for the search experience.
test('search partial text @sanity @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.search('Lap');

  await expect(searchPage.searchResults).toContainText('Laptop');
  await expect(searchPage.searchResults).toContainText('Gaming Laptop');
});

// Sanity: this confirms the search is case-insensitive and still returns products.
test('search with lowercase @sanity @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.search('mouse');

  await expect(searchPage.searchResults).toContainText('Wireless Mouse');
});

// Regression: this protects the empty-result state when no product matches the query.
test('search nonexistent product @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.search('Phone');

  await expect(searchPage.noProductsMessage).toContainText('No products found');
});

// Regression: this ensures clearing the search returns the full product catalog.
test('clear search returns all products @regression', async ({ page }) => {
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

// Sanity: this checks that a product found in search can be added to the cart directly.
test('search then add to cart @sanity @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.search('Laptop');
  await searchPage.addFirstProductToCart();

  await expect(searchPage.cartCount).toContainText('1');
});

// Regression: this validates the category filter behavior in the search module.
test('filter by category @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.filterByCategory('Accessories');

  await expect(searchPage.searchResults).toContainText('Wireless Mouse');
  await expect(searchPage.searchResults).toContainText('USB Cable');
});

// Regression: this protects the price filter and ensures it narrows results correctly.
test('filter by price @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.filterByPrice('under-100');

  await expect(searchPage.searchResults).toContainText('Wireless Mouse');
  await expect(searchPage.searchResults).toContainText('USB Cable');
});

// Regression: this ensures the low-to-high sorting option behaves as expected.
test('sort price low to high @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.sortBy('price-asc');

  await expect(searchPage.searchResults).toContainText('USB Cable');
});

// Regression: this protects the high-to-low sorting option in the search results.
test('sort price high to low @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.sortBy('price-desc');

  await expect(searchPage.searchResults).toContainText('Gaming Laptop');
});

// Regression: this keeps alphabetical sorting stable for the search view.
test('sort alphabetically @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();
  await searchPage.sortBy('alpha');

  await expect(searchPage.searchResults).toContainText('Gaming Laptop');
});

// Regression: this validates that search and filtering can be combined successfully.
test('search and filter together @regression', async ({ page }) => {
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

// Smoke: this confirms the search page can be reached from the dashboard as a core path.
test('verify navigation from dashboard to search @smoke @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await searchPage.openSearch();

  await expect(searchPage.searchInput).toBeVisible();
});
