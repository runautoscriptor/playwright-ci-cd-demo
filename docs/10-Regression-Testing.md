# 10. Regression Testing

## Definition
Regression testing checks whether existing functionality still works after new changes are introduced.

## Why It Is Used
It protects previously working features from breaking due to new updates.

## Real-World Example
If a developer changes the login flow, regression tests ensure that profile, cart, and search still work correctly.

## Interview Answer
"Regression testing is the process of re-running existing tests after code changes to ensure that no previously working features have been broken. It is essential in fast-moving development environments."

## Common Mistakes
- relying only on manual testing
- not maintaining regression suites
- skipping regression runs after bug fixes

## Best Practices
- keep regression tests automated
- run them on every PR and release
- prioritize critical paths like login and checkout

## Why It Matters
If login breaks, cart and search tests may also fail because many user workflows depend on authentication or shared UI state.

## Example

```text
Login -> Profile -> Cart -> Search
```

A change in login can affect the entire journey.

## Commands

```bash
npx playwright test
npx playwright test --grep "login|profile|cart|search"
```

## Important Notes
Regression testing is one of the strongest reasons to use CI/CD and GitHub Actions in QA automation.
