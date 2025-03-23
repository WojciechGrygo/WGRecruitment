# Playwright Testing Project for Nord Security recruitment process

This repository contains API and UI tests using Playwright.

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/slawekradzyminski/playwright-january.git
cd playwright-january
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 💡 Recommendations

- Install the [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extension. This extension provides an integrated experience for running and debugging Playwright tests directly from Visual Studio Code. It helps in writing, running, and debugging tests more efficiently by providing features like code completion, inline test results, and debugging capabilities.

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in UI mode
```bash
npx playwright test --ui
```

### Run tests in headed mode
```bash
npx playwright test --headed
```

### Run only API tests
```bash
npm run test:api
```

### Run only UI tests
```bash
npm run test:ui
```

## 📊 Test Reports

After test execution, HTML report will be generated in the `playwright-report` directory. To view it:
```bash
npx playwright show-report
```

## 🔧 Configuration

The project configuration is defined in `playwright.config.ts`. Key features include:
- Parallel test execution - 3 workers
- HTML report generation
- Trace capture on failure
- Project uses only chromium browser

## 📁 Project Structure

```
├── .vscode                 # Recommended extensions for VS Code
├── playwright-report       # Test reports
├── src                     # Source files
│   ├── pages               # Page objects
│   └── requests            # Files with API requests
├── test-results            # Test artifacts
├── tests                   # Test folders
│   ├── api                 # API tests
│   └── ui                  # UI tests
├── env                     # Environment variables
└── tsconfig.json           # TypeScript configuration
```