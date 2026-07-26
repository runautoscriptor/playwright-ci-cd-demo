# 12. Interview Questions

## Definition
This section collects common interview questions and short, professional answers for discussion.

## Why It Is Used
It helps candidates rehearse answers for technical interviews and analyst-style discussions.

## Real-World Example
A candidate preparing for a QA Automation role can review upcoming questions before the interview.

## Interview Answer
"I prepare for interviews by practicing clear explanations of concepts, tools, and workflows. I also connect each answer to real-world testing scenarios."

## Common Mistakes
- giving memorized answers without context
- speaking too vaguely
- not linking answers to practical examples

## Best Practices
- answer with structure
- use real examples
- explain the reason behind the tool or approach

## Sample Questions and Answers

### Git
1. What is Git?  
Answer: Git is a version control system that tracks changes to files over time.

2. What is a commit?  
Answer: A commit is a saved snapshot of changes in a repository.

3. What is the difference between git pull and git fetch?  
Answer: `git pull` downloads and merges changes, while `git fetch` only downloads them.

4. What is a branch?  
Answer: A branch is an isolated line of development.

5. What is a merge conflict?  
Answer: A merge conflict happens when Git cannot automatically combine changes.

6. What is the purpose of git stash?  
Answer: It temporarily saves uncommitted changes.

7. What is the difference between git merge and git rebase?  
Answer: Merge preserves history while rebase rewrites history into a linear form.

8. What is git revert used for?  
Answer: It creates a new commit that safely undoes a previous change.

### GitHub
9. What is GitHub?  
Answer: GitHub is a platform for hosting Git repositories and collaborating on code.

10. What is a pull request?  
Answer: A pull request is a request to merge changes from one branch into another.

11. Why are protected branches important?  
Answer: They enforce quality checks and prevent unsafe changes to important branches.

12. What is a fork?  
Answer: A fork is a personal copy of a repository.

### Playwright
13. What is Playwright?  
Answer: Playwright is a browser automation framework for end-to-end testing.

14. What are locators in Playwright?  
Answer: Locators are used to find elements in the UI.

15. What is the difference between `toBeVisible` and `toContainText`?  
Answer: One checks visibility; the other checks text content.

16. What are fixtures in Playwright?  
Answer: Fixtures provide reusable test setup and context.

17. What are hooks in Playwright?  
Answer: Hooks run setup or teardown logic such as beforeEach and afterEach.

18. What is parallel execution?  
Answer: It runs tests concurrently to reduce total runtime.

19. What are retries?  
Answer: Retries re-run a failing test to reduce flaky results.

20. What are screenshots and videos used for?  
Answer: They help diagnose failures.

### API Testing
21. What is API testing?  
Answer: API testing verifies backend endpoints and their expected responses.

22. Why is API testing useful?  
Answer: It validates business logic without depending on the UI.

23. What is a request body?  
Answer: It contains the payload sent to the API.

24. What is a response status code?  
Answer: It indicates whether the request succeeded or failed.

### CI/CD
25. What is CI?  
Answer: Continuous Integration means integrating and validating code frequently.

26. What is CD?  
Answer: Continuous Delivery or Deployment automates release readiness or release execution.

27. Why is CI important?  
Answer: It catches issues early.

28. What is a pipeline?  
Answer: A pipeline is an automated workflow that runs validation steps.

### GitHub Actions
29. What is GitHub Actions?  
Answer: It is GitHub’s workflow automation tool.

30. Why use GitHub Actions?  
Answer: It automates testing and deployment from the repository.

31. What is a workflow file?  
Answer: It defines the steps to run in automation.

### Regression Testing
32. What is regression testing?  
Answer: It checks that existing features still work after changes.

33. Why is regression testing important?  
Answer: It protects against unintended breakages.

34. What is the relationship between regression testing and CI?  
Answer: CI runs regression suites automatically to prevent bad changes from merging.

### POM
35. What is POM?  
Answer: Page Object Model is a design pattern to separate page interactions from tests.

36. Why is POM useful?  
Answer: It improves maintainability and scalability.

37. What is a page object?  
Answer: A page object contains locators and methods for a page or component.

38. What is the main benefit of POM?  
Answer: It reduces duplication and simplifies maintenance.

39. What is a good naming convention for page objects?  
Answer: Use names such as LoginPage, CartPage, and ProfilePage.

40. When should you create a new page object?  
Answer: When a page or UI section has its own set of interactions.

## Additional Questions

41. What is the difference between main and feature branches?  
Answer: main is the stable baseline while feature branches isolate new work.

42. Why should developers not work directly on main?  
Answer: To keep main stable and protected.

43. What is a commit message?  
Answer: It describes the change made in a commit.

44. Why are clear commit messages useful?  
Answer: They improve traceability and collaboration.

45. What is a test case?  
Answer: A test case defines a scenario and expected result.

46. What is a test suite?  
Answer: A test suite is a group of related tests.

47. What is a test report?  
Answer: It summarizes test execution and failures.

48. What is the purpose of assertions?  
Answer: They verify whether behavior matches expectations.

49. What is flakiness in automation?  
Answer: Flakiness is when a test fails intermittently.

50. How do you reduce test flakiness?  
Answer: Use stable selectors, explicit waits, and reliable setup.

51. What is a selector strategy?  
Answer: It is the method used to identify an element.

52. What is a headless browser?  
Answer: It runs without showing a graphical UI.

53. What is the difference between manual and automation testing?  
Answer: Manual testing relies on human execution while automation uses scripts.

54. What is the goal of automation?  
Answer: To increase speed, consistency, and coverage.

55. Why do companies use automation?  
Answer: To reduce repetitive effort and catch regressions early.

56. What is end-to-end testing?  
Answer: It validates a full user flow across the application.

57. What is smoke testing?  
Answer: It checks the most critical features quickly.

58. What is sanity testing?  
Answer: It verifies that recent changes work as expected.

59. What is a bug report?  
Answer: It describes an issue clearly enough for developers to fix it.

60. What is a defect lifecycle?  
Answer: It is the lifecycle of a bug from discovery to closure.

61. What is a release candidate?  
Answer: It is a pre-release version for validation.

62. What is version control?  
Answer: It tracks changes in code over time.

63. Why is branching important?  
Answer: It isolates work and avoids blocking others.

64. Why is code review useful?  
Answer: It improves quality and shares knowledge.

65. What is continuous feedback?  
Answer: It provides immediate information about code quality.

66. What is reusability in automation?  
Answer: It means the same test logic can be used across many scenarios.

67. What is maintainability in automation?  
Answer: It is how easy tests are to update and extend.

68. What is a test fixture?  
Answer: It provides the initial context or data for tests.

69. What is dependency injection?  
Answer: It allows objects to be supplied from outside rather than created internally.

70. What is a test runner?  
Answer: It executes tests and reports results.

71. What is a pipeline artifact?  
Answer: It is a file or output generated by the workflow.

72. Why upload test reports?  
Answer: It helps reviewers inspect failures easily.

73. What is cross-browser testing?  
Answer: It validates the app on multiple browsers.

74. What is trace viewer?  
Answer: It shows a visual debugging timeline of a browser test.

75. What is a flaky test?  
Answer: A flaky test gives inconsistent results.

76. What is a stub?  
Answer: A stub is a simplified replacement for a dependency.

77. What is mocking?  
Answer: Mocking replaces a dependency with a controlled alternative.

78. What is a test environment?  
Answer: It is the setup in which tests run.

79. What is a production environment?  
Answer: It is the live environment where users interact with the app.

80. Why should automation run in CI?  
Answer: It provides consistent and repeatable validation.

81. What is the role of QA in CI/CD?  
Answer: QA helps define quality gates, review reports, and ensure business-critical flows are covered.

82. Why is regression testing important in release cycles?  
Answer: It ensures new changes do not break existing features.

83. What is a feature branch?  
Answer: A feature branch contains work for a specific feature or bug fix.

84. Why is a PR important?  
Answer: It formalizes review and collaboration before merge.

85. What is the purpose of an approval in GitHub?  
Answer: It confirms that the change has been reviewed.

86. What is a code review comment?  
Answer: It is feedback provided by a reviewer on the change.

87. What is an acceptance criterion?  
Answer: It defines the conditions under which a feature is considered done.

88. What is the difference between test data and test environment?  
Answer: Test data is the input used for tests; the environment is the place where tests run.

89. What is the role of browser automation in QA?  
Answer: It verifies real user interactions and workflows.

90. What is the purpose of assertions in automation?  
Answer: They validate expected behavior and fail if it is not met.

91. What is the purpose of `beforeEach` in testing?  
Answer: It prepares the test environment for each test.

92. What is the purpose of `afterEach` in testing?  
Answer: It cleans up after each test.

93. What is the difference between test case and test script?  
Answer: A test case is the requirement-level scenario; a test script is the executable automation.

94. What is a release pipeline?  
Answer: It is the automated process for moving code through validation to release.

95. What is a quality gate?  
Answer: It is a checkpoint such as passing tests or review approval.

96. Why is test coverage important?  
Answer: It helps identify areas that are not yet tested.

97. Why do teams use semantic versioning?  
Answer: It communicates change significance clearly.

98. What is a hotfix branch?  
Answer: It is a short-lived branch used to fix urgent production issues.

99. Why is rollback important?  
Answer: It allows teams to quickly recover from a bad deployment.

100. What is a change log?  
Answer: It lists notable changes in a release.

## Important Notes
Interview answers should be short, structured, and connected to practical examples.
