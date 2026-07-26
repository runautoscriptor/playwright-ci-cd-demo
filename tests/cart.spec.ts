import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { CartPage } from './pages/CartPage';

test('login and add one product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();

  await cartPage.addProduct('Laptop');
  await expect(cartPage.cartCount).toContainText('1');
});

test('add multiple products and verify total items', async ({ page }) => {
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

test('increase quantity and verify total updates', async ({ page }) => {
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

test('decrease quantity and verify quantity updates', async ({ page }) => {
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

test('remove one product and verify removed successfully', async ({ page }) => {
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

test('remove all products and verify empty cart message', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();

  await cartPage.addProduct('Laptop');
  await cartPage.removeProduct('Laptop');

  await expect(cartPage.emptyCartMessage).toContainText('Your cart is empty.');
});

test('verify subtotal calculation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();

  await cartPage.addProduct('Laptop');
  await cartPage.addProduct('Mouse');

  await expect(cartPage.subtotal).toContainText('$1050');
});

test('verify total item count', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();

  await cartPage.addProduct('Laptop');
  await cartPage.addProduct('Mouse');

  await expect(cartPage.totalItems).toContainText('2');
});

test('verify navigation from dashboard to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();

  await expect(cartPage.cartSection).toBeVisible();
});

test('verify user can continue shopping', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('qa', 'pass123');
  await cartPage.openCart();
  await cartPage.addProduct('Laptop');
  await cartPage.continueShopping();

  await expect(cartPage.productsSection).toBeVisible();
});
