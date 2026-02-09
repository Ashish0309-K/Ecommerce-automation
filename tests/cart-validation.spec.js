const { test, expect } = require("@playwright/test");
const HomePage = require("../src/pages/HomePage");
const ProductsPage = require("../src/pages/ProductsPage");
const CartPage = require("../src/pages/CartPage");

test("Add product to cart and validate name + price consistency", async ({ page }) => {
  const home = new HomePage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);

  await home.goto();
  await home.openProducts();
  await products.assertOnProductsPage();

  await products.search("dress");

  const added = await products.addFirstProductToCart();
  await products.goToCartFromModal();

  await cart.assertOnCartPage();

  const row = await cart.getFirstRowData();

  // validations
  expect(row.name.toLowerCase()).toContain(added.name.toLowerCase());
  expect(row.price).toBe(added.price);

  // total usually equals price for qty=1
  expect(row.total).toBe(row.price);
});
