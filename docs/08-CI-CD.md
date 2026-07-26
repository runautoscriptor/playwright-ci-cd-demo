# 08. CI/CD

## Definition
CI/CD stands for Continuous Integration and Continuous Delivery/Deployment.

## Why It Is Used
It helps teams deliver software faster with automated quality checks.

## Real-World Example
Whenever a developer pushes code, CI runs tests automatically. If the build is green, the code may be delivered or deployed automatically.

## Interview Answer
"CI/CD is a modern software delivery approach where code is integrated and validated continuously. It reduces manual effort, improves reliability, and allows faster releases."

## Common Mistakes
- skipping automated tests
- relying only on manual checks
- merging without CI validation
- deploying without rollback plans

## Best Practices
- run tests on every push and PR
- keep builds fast
- use environment-specific configurations carefully
- monitor deployments

## Continuous Integration
Continuous Integration means merging and validating code frequently.

## Continuous Delivery
Continuous Delivery means the software is always ready to be released.

## Continuous Deployment
Continuous Deployment means every validated change is deployed automatically.

## QA Example
A login change is pushed. CI runs login, profile, cart, and search tests. If any fail, the team stops and fixes the issue before deployment.

## Important Notes
CI/CD helps prevent broken changes from reaching production or main branches.
