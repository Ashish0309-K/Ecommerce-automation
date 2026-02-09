const { expect } = require("@playwright/test");
const { parsePrice } = require("../utils/priceUtils");

class CartPage {
  constructor(page) {
    this.page = page;

    this.cartTable = page.locator("#cart_info_table");
    this.cartRows = page.locator("#cart_info_table tbody tr");
    this.itemName = (row) => row.locator(".cart_description h4 a");
    this.itemPrice = (row) => row.locator(".cart_price p");
    this.itemTotal = (row) => row.locator(".cart_total_price");
    this.deleteBtn = (row) => row.locator(".cart_delete a");

    this.emptyText = page.locator("#empty_cart, p").filter({ hasText: /Cart is empty|empty/i });
  }

  async assertOnCartPage() {
    await expect(this.page).toHaveURL(/\/view_cart/);
    await expect(this.cartTable).toBeVisible();
  }

  async getFirstRowData() {
    const row = this.cartRows.first();
    await expect(row).toBeVisible();

    const name = (await this.itemName(row).innerText()).trim();
    const priceText = (await this.itemPrice(row).innerText()).trim();
    const totalText = (await this.itemTotal(row).innerText()).trim();

    return {
      name,
      price: parsePrice(priceText),
      total: parsePrice(totalText),
      priceText,
      totalText,
      row
    };
  }

  async removeFirstItem() {
    const row = this.cartRows.first();
    await this.deleteBtn(row).click();
  }
}

module.exports = CartPage;
