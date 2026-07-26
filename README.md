# Playwright + GitHub Actions Playground

This project is a beginner-friendly playground for learning Playwright automation, GitHub Actions, and regression testing.

## What is included?

- A simple demo login web app built with HTML, CSS, and JavaScript
- A Playwright TypeScript test suite
- A basic Page Object Model structure
- A new Profile Management feature
- An HTML report generator
- A GitHub Actions workflow that runs smoke, sanity, and regression suites separately

## Project structure

- app/ - Demo web application files
- tests/ - Playwright tests and page objects
- playwright.config.ts - Main Playwright configuration
- .github/workflows/playwright.yml - GitHub Actions workflow

## Install locally

1. Open the project folder
2. Run:
   ```bash
   npm install
   npx playwright install chromium
   ```

## Run locally

- Run the full regression suite:
  ```bash
  npm test
  ```

- Run only the smoke suite:
  ```bash
  npm run smoke
  ```

- Run only the sanity suite:
  ```bash
  npm run sanity
  ```

- Run only the regression suite:
  ```bash
  npm run regression
  ```

- Run the full regression suite in headed mode:
  ```bash
  npm run test:headed
  ```

- Open the HTML report:
  ```bash
  npm run report
  ```

## Smoke, Sanity, and Regression Testing

### What is Smoke Testing?

Smoke testing is a quick check of the most critical user journeys. It confirms the app is still alive and the core flow works after a change.

Typical smoke tests in this project:
- Valid login
- Open profile
- Open cart
- Open search

### What is Sanity Testing?

Sanity testing is a narrow, focused check around recently changed features. It validates that a change did not break the main behavior in a small area.

Typical sanity tests in this project:
- Logout
- Update profile
- Add or remove product from cart
- Search a product

### What is Regression Testing?

Regression testing covers the broader suite of tests to confirm that new changes did not break existing features.

Typical regression tests in this project:
- Invalid login and validation checks
- Profile update validation
- Cart quantity and subtotal checks
- Search filtering and sorting checks

## New feature: Profile Management

After a successful login, the app now shows a Dashboard and a Profile page.

The Profile page displays:

- Full Name
- Email
- Mobile Number

You can also click Edit Profile to change the details and save them.

The app includes validation so that:

- Full Name cannot be empty
- Email must be valid

## CI/CD Practice Scenarios

### Scenario 1: Break the Login flow

Change the login password or the button behavior in the app.

Expected result:
- The Smoke and Regression suites fail
- GitHub Actions turns RED

### Scenario 2: Break the Profile flow

Change the profile validation logic or remove the success message.

Expected result:
- The Sanity and Regression suites fail
- GitHub Actions turns RED

### Scenario 3: Fix the issue

Restore the app to the expected state and push again.

Expected result:
- The workflow turns GREEN

## GitHub Actions workflow

When you push code to GitHub, the workflow will show three separate jobs:

- Smoke Suite
- Sanity Suite
- Regression Suite

Each job runs its own Playwright report so it is easier to review failures and results.

## Full execution flow

1. Developer changes code
2. Developer runs `git add .`
3. Developer runs `git commit -m "your message"`
4. Developer runs `git push`
5. GitHub Actions starts automatically
6. Playwright installs dependencies and browsers
7. Playwright runs the selected test suite
8. The HTML report is generated
9. GitHub shows pass or fail status for each workflow job
