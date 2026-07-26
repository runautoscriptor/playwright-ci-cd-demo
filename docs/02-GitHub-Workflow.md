# 02. GitHub Workflow

## Definition
GitHub is a web-based platform for hosting Git repositories and managing collaboration, reviews, and automation.

## Why It Is Used
GitHub is used to:
- share code with teams
- review changes through pull requests
- track issues and tasks
- automate testing with GitHub Actions

## Real-World Example
A QA engineer and a developer both work on a project. The developer opens a pull request, reviewers comment, and CI validates the changes before merge.

## Interview Answer
"GitHub is the collaboration layer on top of Git. It provides repositories, branches, pull requests, code reviews, issue tracking, and automation tools that help teams work together efficiently."

## Common Mistakes
- pushing to main directly
- ignoring review comments
- not updating branches before opening a PR
- leaving merge conflicts unresolved

## Best Practices
- keep branches short-lived
- use descriptive branch names
- protect main branches
- require reviews before merging

## Key GitHub Concepts

| Concept | Meaning |
|---|---|
| Repository | A project storage space |
| Branch | An isolated line of development |
| Fork | A personal copy of another repository |
| Pull Request | A request to merge changes |
| Merge | Combine changes from one branch into another |
| Merge Conflict | A conflict when Git cannot merge changes automatically |
| Protected Branch | A branch with rules such as required reviews |

## Commands

```bash
git remote -v
git branch -a
git push origin <branch>
git pull origin <branch>
```

## Important Notes
GitHub makes collaboration easier, but good hygiene is still required. Clear branching, review processes, and automation keep the workflow reliable.
