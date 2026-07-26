# 04. Pull Request

## Definition
A pull request is a request to merge changes from one branch into another, usually into main.

## Why It Is Used
Pull requests provide a structured way to review code, discuss changes, and ensure quality before merge.

## Real-World Example
A developer finishes a feature branch and opens a PR. Reviewers comment on the implementation, and automation validates the build and tests.

## Interview Answer
"A pull request is a formal review step where changes from one branch are proposed for merge into another. It helps teams catch issues early, improve quality, and maintain a controlled release process."

## Common Mistakes
- opening large PRs with too many changes
- skipping review comments
- merging without checking CI status
- not updating the branch before merging

## Best Practices
- keep PRs focused and small
- include a clear description
- attach screenshots or test evidence when useful
- ensure CI passes before merge

## Suggested PR Checklist
- [ ] Feature works locally
- [ ] Tests are added or updated
- [ ] CI passes
- [ ] Review comments are addressed
- [ ] Branch is up to date

## Commands

```bash
git push origin feature/login
git checkout main
git pull origin main
```

## Important Notes
A good PR is easy to review and easy to understand. Clear communication matters as much as code quality.
