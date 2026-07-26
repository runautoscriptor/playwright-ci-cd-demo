# Playwright + GitHub Actions Playground

This project is a beginner-friendly playground for learning Playwright automation, GitHub Actions, and regression testing.

## What is included?

- A simple demo login web app built with HTML, CSS, and JavaScript
- A Playwright TypeScript test suite
- A basic Page Object Model structure
- A new Profile Management feature
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

## Regression testing example

When you push this feature branch to GitHub, GitHub Actions will run both sets of tests:

- Login Tests
- Profile Tests

This is a simple example of regression testing.

If a future change accidentally breaks Login, the GitHub Actions workflow should fail before the code is merged.

That is the value of having automated tests in CI/CD.

## CI/CD Practice Scenarios

### Scenario 1: Break the Login flow

Change the login password or the button behavior in the app.

Expected result:
- The Login tests fail
- GitHub Actions turns RED

### Scenario 2: Break the Profile flow

Change the profile validation logic or remove the success message.

Expected result:
- The Profile tests fail
- GitHub Actions turns RED

### Scenario 3: Fix the issue

Restore the app to the expected state and push again.

Expected result:
- The workflow turns GREEN

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
