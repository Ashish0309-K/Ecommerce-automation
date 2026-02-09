const { test, expect } = require("@playwright/test");
const HomePage = require("../src/pages/HomePage");
const ProductsPage = require("../src/pages/ProductsPage");
const { writeJSON, writeCSV } = require("../src/utils/fileWriter");

test("Search products and export top results (JSON + CSV)", async ({ page }) => {
  const home = new HomePage(page);
  const products = new ProductsPage(page);

  await home.goto();
  await home.openProducts();
  await products.assertOnProductsPage();

  await products.search("dress"); // e.g., "top", "tshirt", "jeans"
  const results = await products.extractTopProducts(8);

  expect(results.length).toBeGreaterThan(0);

  writeJSON("output/products.json", results);
  writeCSV("output/products.csv", results);
});
