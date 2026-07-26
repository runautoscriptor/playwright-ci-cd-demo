# 07. Test Structure

## Definition
Test structure refers to how automation tests are organized so they are readable, maintainable, and reliable.

## Why It Is Used
A good structure reduces confusion, improves reuse, and makes failures easier to investigate.

## Real-World Example
Tests for login, profile, cart, and search are grouped separately so failures are easier to locate.

## Interview Answer
"A solid test structure makes the suite easier to scale. It helps teams keep tests organized, maintainable, and aligned with business workflows."

## Common Mistakes
- putting everything into one huge file
- duplicating steps in many tests
- writing tests that depend on each other

## Best Practices
- keep tests small and focused
- reuse helper functions and page objects
- use descriptive test names
- avoid shared state between tests

## Example Structure

```text
tests/
  login.spec.ts
  profile.spec.ts
  cart.spec.ts
  search.spec.ts
  pages/
  utils/
```

## Commands

```bash
npx playwright test tests/login.spec.ts
npx playwright test --grep "login"
```

## Important Notes
Good test structure improves both execution and debugging experience.
