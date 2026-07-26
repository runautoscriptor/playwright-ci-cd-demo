# 09. GitHub Actions

## Definition
GitHub Actions is GitHub’s automation platform for build, test, and deployment workflows.

## Why It Is Used
It automates repetitive tasks such as running tests, generating reports, and deploying applications.

## Real-World Example
A push to the repository triggers a workflow that installs dependencies, runs Playwright tests, and uploads the HTML report.

## Interview Answer
"GitHub Actions is used to automate CI pipelines inside GitHub. It allows teams to run tests and other tasks automatically whenever code changes are pushed or a pull request is created."

## Common Mistakes
- missing browser installation
- running tests without proper dependencies
- not uploading artifacts on failure
- using overly slow workflows

## Best Practices
- separate setup from test execution
- use caching for dependencies
- upload reports even on failure
- keep workflows readable and modular

## Workflow Step by Step

```text
Developer Push
   ↓
GitHub Actions Trigger
   ↓
Checkout
   ↓
Install Node
   ↓
Install Dependencies
   ↓
Install Browsers
   ↓
Run Playwright Tests
   ↓
Generate Report
   ↓
Upload Report
   ↓
Pass / Fail
```

## Explanation of Each Step
1. Developer Push: code is pushed to a branch or PR.
2. GitHub Actions Trigger: workflow starts automatically.
3. Checkout: repository source code is downloaded.
4. Install Node: runtime is set up.
5. Install Dependencies: npm packages are installed.
6. Install Browsers: Playwright browsers are available for testing.
7. Run Playwright Tests: browser tests execute.
8. Generate Report: HTML or other reports are created.
9. Upload Report: artifacts are stored for review.
10. Pass / Fail: the workflow shows whether checks passed.

## Commands

```yaml
runs-on: ubuntu-latest
steps:
  - uses: actions/checkout@v4
  - uses: actions/setup-node@v4
  - run: npm ci
  - run: npx playwright install --with-deps
  - run: npx playwright test
```

## Important Notes
GitHub Actions is a powerful tool for protecting the main branch through automated verification.
