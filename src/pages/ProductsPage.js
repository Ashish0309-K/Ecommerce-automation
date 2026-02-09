const { expect } = require("@playwright/test");
const { parsePrice } = require("../utils/priceUtils");

class ProductsPage {
  constructor(page) {
    this.page = page;

    this.searchInput = page.locator("#search_product");
    this.searchBtn = page.locator("#submit_search");
    this.searchedProductsHeader = page.locator("h2.title.text-center").filter({ hasText: "Searched Products" });

    this.productCards = page.locator(".features_items .product-image-wrapper");
    this.productName = (card) => card.locator(".productinfo p");
    this.productPrice = (card) => card.locator(".productinfo h2");
    this.viewProductLink = (card) => card.getByRole("link", { name: /View Product/i });

    // Add to cart (appears on hover for many cards)
    this.addToCartBtn = (card) => card.locator(".productinfo a.add-to-cart");
    this.modalContinue = page.getByRole("button", { name: /Continue Shopping/i });
    this.modalViewCart = page.getByRole("link", { name: /View Cart/i });
  }

  async assertOnProductsPage() {
    await expect(this.page).toHaveURL(/\/products/);
  }

  async search(term) {
    await this.searchInput.fill(term);
    await this.searchBtn.click();
    await expect(this.searchedProductsHeader).toBeVisible();
  }

  async extractTopProducts(limit = 5) {
    const count = await this.productCards.count();
    const take = Math.min(limit, count);

    const items = [];
    for (let i = 0; i < take; i++) {
      const card = this.productCards.nth(i);
      const name = (await this.productName(card).innerText()).trim();
      const priceText = (await this.productPrice(card).innerText()).trim();
      const price = parsePrice(priceText);

      // View Product href (best-effort)
      const href = await this.viewProductLink(card).getAttribute("href").catch(() => null);
      const url = href ? new URL(href, this.page.url()).toString() : this.page.url();

      items.push({ name, price, priceText, url });
    }
    return items;
  }

  async addFirstProductToCart() {
    const first = this.productCards.first();
    await first.hover();

    const name = (await this.productName(first).innerText()).trim();
    const priceText = (await this.productPrice(first).innerText()).trim();
    const price = parsePrice(priceText);

    await this.addToCartBtn(first).click();
    // Modal shows after adding
    await expect(this.modalContinue).toBeVisible();
    return { name, price, priceText };
  }

  async continueShopping() {
    await this.modalContinue.click();
  }

  async goToCartFromModal() {
    await this.modalViewCart.click();
  }
}

module.exports = ProductsPage;
