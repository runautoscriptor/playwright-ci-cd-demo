# 06. Page Object Model

## Definition
The Page Object Model (POM) is a design pattern where page interactions are encapsulated in reusable classes.

## Why It Is Used
POM makes tests easier to maintain, reusable, and less fragile when UI changes happen.

## Real-World Example
Instead of writing selectors directly in every test, a LoginPage class stores login actions and locators.

## Interview Answer
"The Page Object Model improves test maintainability by separating test logic from page interaction details. This makes the framework cleaner and reduces duplication."

## Common Mistakes
- placing selectors directly inside test files
- mixing page actions and assertions in one class
- creating overly large page objects

## Best Practices
- keep one page object per page or section
- use meaningful method names
- centralize selectors in page objects
- keep tests focused on scenarios

## Professional Structure

```text
tests/
  pages/
    LoginPage.ts
    ProfilePage.ts
    CartPage.ts
  login.spec.ts
  profile.spec.ts
  cart.spec.ts
```

## Example

```ts
export class LoginPage {
  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#loginButton');
  }
}
```

## Commands

```bash
npx playwright test
```

## Important Notes
POM is a professional and widely used pattern in automation frameworks because it improves scalability.
