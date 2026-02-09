📌 Project Overview

This project is an end-to-end UI automation framework built using Playwright with JavaScript, focusing on real-world e-commerce user journeys such as product search, result validation, cart operations, and data extraction.

The framework follows industry best practices like Page Object Model (POM), reusable utilities, stable locators, and automated test evidence generation.

🔹 Designed to demonstrate practical automation skills required for QA / Automation / SDET roles.

🎯 Key Objectives

Automate critical e-commerce workflows

Validate business logic (price consistency, cart totals)

Extract and export dynamic UI data

Build maintainable and scalable test architecture

Generate debugging evidence for failed tests

🛠 Tech Stack

Automation Tool: Playwright

Language: JavaScript (Node.js)

Test Runner: Playwright Test

Design Pattern: Page Object Model (POM)

Reporting: Playwright HTML Report

Data Export: JSON & CSV

CI Ready: Yes (GitHub Actions – can be added)

🌐 Application Under Test

AutomationExercise – E-Commerce Demo Site

URL: https://automationexercise.com

Chosen for its stability and automation-friendly design

Supports product search, cart operations, and validations

📂 Project Structure
playwright-ecommerce-automation/
├─ src/
│  ├─ pages/
│  │  ├─ HomePage.js
│  │  ├─ ProductsPage.js
│  │  └─ CartPage.js
│  └─ utils/
│     ├─ fileWriter.js
│     └─ priceUtils.js
├─ tests/
│  ├─ search-and-export.spec.js
│  └─ cart-validation.spec.js
├─ output/
│  ├─ products.json
│  └─ products.csv
├─ playwright.config.js
├─ package.json
└─ README.md

🧱 Framework Architecture
✔ Page Object Model (POM)

UI locators and actions are separated from test logic

Improves readability, maintainability, and reuse

✔ Utilities Layer

priceUtils.js → Parses and normalizes UI prices

fileWriter.js → Exports extracted data to JSON & CSV

✔ Test Layer

Clean, readable tests focused only on assertions and flows

No direct selectors inside test files

🔍 Automated Test Scenarios
🔎 Product Search & Data Export

Navigate to Products page

Search product by keyword

Validate search results visibility

Extract top N products:

Product Name

Price

Product URL

Export extracted data to:

products.json

products.csv

🛒 Cart Validation

Search product

Add product to cart

Validate:

Product name consistency

Price consistency between listing and cart

Total amount calculation

Remove item from cart (optional enhancement)

📁 Sample Exported Data (JSON)
[
  {
    "name": "Sleeveless Dress",
    "price": 1000,
    "priceText": "Rs. 1000",
    "url": "https://automationexercise.com/product_details/1"
  }
]

📸 Test Evidence & Debugging

The framework automatically captures:

📷 Screenshots (on failure)

🎥 Videos (on failure)

🧭 Traces (on failure)

These help in quick root-cause analysis and improve debugging efficiency.

⚙️ Configuration Highlights

Parallel test execution

Retry logic for flaky tests

Headless execution by default

Centralized base URL configuration

▶️ How to Run the Tests
1️⃣ Install Dependencies
npm install

2️⃣ Install Playwright Browsers
npx playwright install

3️⃣ Run Tests
npm test

4️⃣ View HTML Report
npm run report

📈 Resume Highlights (How to Mention)

Automated end-to-end e-commerce workflows using Playwright with JavaScript.

Implemented Page Object Model for scalable and maintainable test architecture.

Validated pricing logic, cart consistency, and UI data accuracy.

Extracted and exported dynamic UI data into JSON and CSV formats.

Enabled failure diagnostics using screenshots, videos, and trace viewer.

🚀 Future Enhancements

🔗 API + UI hybrid testing

📊 Allure reporting

🧪 Test tagging (Smoke / Regression)

🔁 CI integration using GitHub Actions

🌐 Environment support (QA / Prod)

♿ Accessibility checks

👤 Author

Ashish Kumar Singh
Automation | QA | SDET Aspirant
📍 Bengaluru, India
