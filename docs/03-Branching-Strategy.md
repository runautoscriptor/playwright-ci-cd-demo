# 03. Branching Strategy

## Definition
A branching strategy is a planned way of creating and managing branches so that developers can work safely and independently.

## Why It Is Used
It prevents unstable changes from reaching the main branch too early and makes collaboration more organized.

## Real-World Example
A team working on login, profile, cart, and search features creates separate branches for each feature instead of editing main directly.

## Interview Answer
"A branching strategy organizes work by isolating features, fixes, and experiments in separate branches. This reduces conflicts, improves review quality, and keeps the main branch stable."

## Common Mistakes
- working directly on main
- keeping branches alive too long
- merging without testing
- skipping branch naming conventions

## Best Practices
- use short-lived branches
- use descriptive names
- merge only after successful review and testing
- keep main stable and protected

## Professional Workflow

```text
main
  │
  ├── feature/login
  ├── feature/profile
  ├── feature/cart
  └── feature/search
```

## Why Developers Never Work Directly on Main
Developers should not work directly on main because:
- main should remain stable
- releases should not break because of incomplete work
- reviews and testing are easier in isolated branches
- rollback is safer when changes are isolated

## Commands

```bash
git checkout -b feature/login
git switch -c feature/profile
git branch
git merge feature/login
```

## Important Notes
Professional teams usually protect main and require pull requests, reviews, and passing automation before merging.
