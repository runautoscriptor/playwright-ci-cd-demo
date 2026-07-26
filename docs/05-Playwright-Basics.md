# 05. Playwright Basics

## Definition
Playwright is an automation framework used to test modern web applications in browsers such as Chromium, Firefox, and WebKit.

## Why It Is Used
It is used to automate end-to-end user flows such as login, form submission, navigation, and checkout.

## Real-World Example
A QA team uses Playwright to verify that a user can log in, update the profile, add items to the cart, and search for products.

## Interview Answer
"Playwright is a browser automation tool that enables reliable end-to-end testing for modern web applications. It supports cross-browser testing, assertions, screenshots, videos, and tracing."

## Common Mistakes
- using brittle selectors
- relying too much on hard-coded waits
- not isolating tests properly
- skipping cleanup between tests

## Best Practices
- use stable locators
- keep tests independent
- run tests in CI
- capture evidence for failures

## Installation

```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```

## Folder Structure

```text
tests/
  pages/
  utils/
playwright.config.ts
package.json
```

## Key Features

| Feature | Purpose |
|---|---|
| Locators | Find elements on the page |
| Assertions | Verify expected behavior |
| Fixtures | Share test setup |
| Hooks | Run setup/teardown logic |
| Parallel execution | Speed up test runs |
| Retries | Improve flaky test stability |
| HTML Reports | Present results clearly |
| Screenshots | Capture failures visually |
| Videos | Record runtime behavior |
| Trace Viewer | Debug failing tests |

## Commands

```bash
npx playwright test
npx playwright test --headed
npx playwright show-report
npx playwright test --trace on
```

## Important Notes
Playwright is especially valuable for regression testing because it simulates real user actions in the browser.
