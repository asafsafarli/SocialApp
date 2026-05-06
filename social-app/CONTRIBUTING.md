# Contributing to Social App

First off, thank you for considering contributing to Social App! 🎉

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct of being respectful and collaborative.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs** if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior** and **explain which behavior you expected to see instead**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the JavaScript/React style guide
* Include screenshots and animated GIFs in your pull request whenever possible
* Document new code
* End all files with a newline

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/SocialApp.git
   cd SocialApp/social-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a branch:
   ```bash
   git checkout -b feature/my-new-feature
   ```

5. Make your changes and commit:
   ```bash
   git commit -m 'Add some feature'
   ```

6. Push to your fork:
   ```bash
   git push origin feature/my-new-feature
   ```

7. Submit a pull request

## Style Guide

### JavaScript/React Style Guide

* Use functional components with hooks
* Use `const` for constants and `let` for variables
* Use arrow functions for event handlers
* Use React.memo for performance optimization
* Use useCallback and useMemo appropriately
* Follow the existing code structure and naming conventions

### Component Guidelines

* Keep components small and focused
* Use descriptive prop names
* Add PropTypes or TypeScript types
* Export components as default
* Add displayName for memo components

### CSS Guidelines

* Use CSS classes, not inline styles (except for dynamic styles)
* Follow BEM naming convention when possible
* Keep styles scoped to components
* Use CSS variables for theming

### Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

Examples:
```
feat: Add dark mode toggle
fix: Resolve post deletion bug
docs: Update README with new features
style: Format code with prettier
refactor: Extract ChatBox to separate component
```

## Testing

* Write tests for new features
* Ensure all tests pass before submitting PR
* Maintain or improve code coverage

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

Thank you! ❤️
