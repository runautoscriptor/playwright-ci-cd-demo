# 01. Git Basics

## Definition
Git is a distributed version control system used to track changes in files and coordinate work among multiple developers.

## Why It Is Used
Git helps teams:
- keep a history of changes
- revert mistakes safely
- collaborate without overwriting each other’s work
- support parallel development with branches

## Real-World Example
A developer adds a login feature, commits the work, pushes it to a branch, and shares it with the team for review.

## Interview Answer
"Git is a version control system that allows developers to track, manage, and collaborate on code changes. It helps teams work safely by creating commits, branches, and histories that can be reviewed and restored if needed."

## Common Mistakes
- committing without checking the diff
- pushing directly to main
- using vague commit messages
- not pulling latest changes before pushing

## Best Practices
- write clear commit messages
- create branches for features
- review changes before committing
- pull the latest changes regularly

## Commands

```bash
git init
git clone <repo-url>
git add .
git commit -m "message"
git push origin <branch>
git pull origin <branch>
git fetch origin
git merge <branch>
git rebase <branch>
git stash
git log
git branch
git checkout <branch>
git switch <branch>
git restore <file>
git reset --soft HEAD~1
git revert <commit-hash>
```

## Important Notes
- `git init` starts a new repository locally.
- `git clone` copies an existing remote repository.
- `git add` stages changes.
- `git commit` saves a snapshot locally.
- `git push` sends commits to the remote repository.
- `git pull` brings remote changes into your local branch.
- `git fetch` downloads changes without applying them.
- `git merge` combines histories.
- `git rebase` rewrites history to make it linear.
- `git stash` temporarily saves uncommitted changes.
