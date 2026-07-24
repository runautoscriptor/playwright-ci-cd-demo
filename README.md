# Playwright + GitHub Actions Playground

This project is a very simple beginner-friendly playground for learning how Playwright automation works with GitHub Actions CI/CD.

## What is included?

- A simple demo login web app built with HTML, CSS, and JavaScript
- A Playwright TypeScript test suite
- A basic Page Object Model structure
- An HTML report generator
- A GitHub Actions workflow that runs on push and pull request

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

- Run all tests:
  ```bash
  npm test
  ```

- Run tests in headed mode:
  ```bash
  npm run test:headed
  ```

- Open the HTML report:
  ```bash
  npm run report
  ```

## How GitHub Actions works here

GitHub Actions is automation that runs in the cloud whenever you push code or open a pull request.

In this project, the workflow:

1. Checks out your repository code
2. Installs Node.js
3. Installs dependencies
4. Installs Playwright browser binaries
5. Runs your Playwright tests
6. Uploads the HTML report as an artifact

## CI/CD Practice Scenarios

### Scenario 1: Change the correct password

Change the correct password in the app from `pass123` to something else.

Expected result:
- The Playwright login test fails
- The GitHub Action turns RED

### Scenario 2: Change the Login button text

Change the text on the Login button from `Login` to something else.

Expected result:
- The Playwright test fails because the locator no longer matches

### Scenario 3: Delete the Password field

Remove the password input from the page.

Expected result:
- Tests fail because Playwright cannot find the password field

### Scenario 4: Fix the code

Restore the password field and correct password.

Expected result:
- The pipeline becomes GREEN again

### Scenario 5: Add a new test

Add another test file or add a new test case to the existing suite.

Expected result:
- CI automatically runs the new test the next time you push

## How to intentionally break the app

You can purposely break the app to see CI fail:

- Change the password in app/app.js
- Rename the button id in app/index.html
- Remove a form element

After pushing the change, GitHub Actions will run and the tests will fail.

## How to fix it and see CI pass again

1. Restore the app to the expected state
2. Commit the fix
3. Push to GitHub
4. Watch the GitHub Actions run again
5. Confirm the workflow turns green

## Full execution flow

1. Developer changes code
2. Developer runs `git add .`
3. Developer runs `git commit -m "your message"`
4. Developer runs `git push`
5. GitHub Actions starts automatically
6. Playwright installs dependencies and browsers
7. Playwright runs the tests
8. The HTML report is generated
9. GitHub shows pass or fail status for the workflow

## Learning goal

The main goal is to understand the flow:

Developer change -> GitHub Actions trigger -> Playwright test execution -> report -> pass/fail result
