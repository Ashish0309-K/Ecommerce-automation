---

## Playwright E-Commerce Automation Assignment

UI automation framework built using Playwright to validate core e-commerce workflows such as product search, cart validation, and data extraction.

---

## Tech Stack

* Playwright
* JavaScript (Node.js)
* Playwright Test Runner

---

## Application Under Test

* [https://automationexercise.com](https://automationexercise.com)

---

## Test Coverage

### UI Tests

* Navigate to Products page
* Search product by keyword
* Validate search results
* Add product to cart
* Validate cart product name and price
* Validate cart total amount
* Remove product from cart (optional)

### Data Extraction

* Extract product name, price, and URL from UI
* Store extracted data in JSON file
* Store extracted data in CSV file

---

## Test Evidence

* Screenshot captured on failure
* Video recorded on failure
* Playwright trace enabled on failure

---

## Run Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in UI mode

```bash
npx playwright test --ui
```

### View HTML report

```bash
npx playwright show-report
```

---

## Output Files

* output/products.json
* output/products.csv

---

## Notes

* Tests are written using Page Object Model (POM)
* No login is required for test execution
* Site is a public demo application used for automation practice

---

## Author

Ashish Kumar Singh

---
