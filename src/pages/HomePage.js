class HomePage {
  constructor(page) {
    this.page = page;
    this.productsLink = page.getByRole("link", { name: "Products" });
  }

  async goto() {
    await this.page.goto("/");
  }

  async openProducts() {
    await this.productsLink.click();
  }
}

module.exports = HomePage;
