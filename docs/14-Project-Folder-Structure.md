# 14. Project Folder Structure

## Definition
This section describes a professional Playwright framework structure used in real automation projects.

## Why It Is Used
Aclear folder structure makes the framework easier to scale, maintain, and teach.

## Real-World Example
As a project grows, tests, page objects, and helpers are separated so that changes remain manageable.

## Interview Answer
"A professional folder structure separates tests, page objects, utilities, and configuration so that the framework remains scalable and easy to maintain."

## Common Mistakes
- mixing test logic with page logic
- keeping selectors scattered across files
- storing all helpers in one large file

## Best Practices
- separate pages, tests, and utilities
- keep configuration in one place
- use descriptive folder names

## Example Structure

```text
project-root/
  package.json
  playwright.config.ts
  tests/
    login.spec.ts
    profile.spec.ts
    cart.spec.ts
    search.spec.ts
    pages/
      LoginPage.ts
      ProfilePage.ts
      CartPage.ts
    utils/
      helpers.ts
  app/
    index.html
    app.js
  .github/
    workflows/
      playwright.yml
```

## Commands

```bash
mkdir -p tests/pages tests/utils .github/workflows
```

## Important Notes
Production-ready frameworks usually have separate layers for pages, data, and configuration.
