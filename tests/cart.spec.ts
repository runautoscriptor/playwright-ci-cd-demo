import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { CartPage } from './pages/CartPage';

// Smoke: this is the most important cart entry point because it proves the user can open the cart and add a product.
test('login and add one product to cart @smoke @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();

  await cartPage.addProduct('Laptop');
  await expect(cartPage.cartCount).toContainText('1');
});

// Sanity: this test checks the cart can grow with multiple products without breaking the summary.
test('add multiple products and verify total items @sanity @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();

  await cartPage.addProduct('Laptop');
  await cartPage.addProduct('Mouse');
  await cartPage.addProduct('Keyboard');

  await expect(cartPage.totalItems).toContainText('3');
});

// Regression: this protects the quantity update logic for a cart item.
test('increase quantity and verify total updates @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();

  await cartPage.addProduct('Laptop');
  await cartPage.increaseQuantity('Laptop');

  await expect(page.locator('[data-product-name="Laptop"] .quantity')).toContainText('2');
  await expect(cartPage.subtotal).toContainText('$2000');
});

// Sanity: this verifies the quantity can go down correctly after an increase.
test('decrease quantity and verify quantity updates @sanity @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();

  await cartPage.addProduct('Laptop');
  await cartPage.increaseQuantity('Laptop');
  await cartPage.decreaseQuantity('Laptop');

  await expect(page.locator('[data-product-name="Laptop"] .quantity')).toContainText('1');
});

// Sanity: this confirms a single product can be removed from the cart safely.
test('remove one product and verify removed successfully @sanity @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();

  await cartPage.addProduct('Laptop');
  await cartPage.addProduct('Mouse');
  await cartPage.removeProduct('Laptop');

  await expect(page.locator('.cart-item[data-product-name="Laptop"]')).toHaveCount(0);
});

// Sanity: this checks the cart empties correctly when the last item is removed.
test('remove all products and verify empty cart message @sanity @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();

  await cartPage.addProduct('Laptop');
  await cartPage.removeProduct('Laptop');

  await expect(cartPage.emptyCartMessage).toContainText('Your cart is empty.');
});

// Regression: this protects the subtotal math for the cart summary.
test('verify subtotal calculation @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();

  await cartPage.addProduct('Laptop');
  await cartPage.addProduct('Mouse');

  await expect(cartPage.subtotal).toContainText('$1050');
});

// Regression: this keeps the cart item counter stable for repeated additions.
test('verify total item count @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();

  await cartPage.addProduct('Laptop');
  await cartPage.addProduct('Mouse');

  await expect(cartPage.totalItems).toContainText('2');
});

// Smoke: this confirms the cart section is reachable from the dashboard after logging in.
test('verify navigation from dashboard to cart @smoke @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();

  await expect(cartPage.cartSection).toBeVisible();
});

// Regression: this keeps the continue-shopping path working for the cart flow.
test('verify user can continue shopping @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();
  await cartPage.addProduct('Laptop');
  await cartPage.continueShopping();

  await expect(cartPage.productsSection).toBeVisible();
});
