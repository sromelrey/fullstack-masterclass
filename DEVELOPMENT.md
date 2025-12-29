# Development Guide

This guide covers the development workflow, code quality tools, and CI/CD setup for this project.

## Prerequisites

- Node.js 20+
- pnpm 10+ (this project uses pnpm as the package manager)

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix

# Run type checking
pnpm type-check
```

## Code Quality Tools

### Husky - Git Hooks

This project uses [Husky](https://typicode.github.io/husky/) to run automated checks before commits.

**What it does:**
- Automatically runs linting and type checking on staged files before each commit
- Prevents commits with code quality issues
- Only checks files you've modified (fast!)

**Pre-commit checks:**
1. ESLint with auto-fix on `.ts`, `.tsx`, `.js`, `.jsx` files
2. TypeScript type checking

**If pre-commit fails:**
- Review the error messages
- Fix the issues in your code
- Stage the fixes with `git add`
- Try committing again

### lint-staged

Works together with Husky to run checks only on staged files (not the entire codebase).

**Configuration:** `.lintstagedrc.js`

```javascript
{
  '**/*.{ts,tsx,js,jsx}': ['eslint --fix'],
  '**/*.{ts,tsx}': [() => 'tsc --noEmit']
}
```

## Setting Up Husky (From Scratch)

If you need to set up Husky on a new machine or fresh clone:

### 1. Install Dependencies

```bash
pnpm install
```

The `prepare` script in `package.json` will automatically initialize Husky.

### 2. Verify Setup

Check that `.husky/pre-commit` exists and contains:

```bash
pnpm exec lint-staged
```

### 3. Test It

```bash
# Make a change
echo "// test" >> app/test.ts

# Try to commit
git add app/test.ts
git commit -m "test"

# Pre-commit hook should run
```

### Manual Setup (if needed)

If automatic setup doesn't work:

```bash
# Initialize Husky
pnpm exec husky init

# Create pre-commit hook
echo "pnpm exec lint-staged" > .husky/pre-commit

# Make it executable (Unix/Mac)
chmod +x .husky/pre-commit
```

## CI/CD - GitHub Actions

### Workflow Configuration

**File:** `.github/workflows/ci.yml`

**Triggers:**
- Push to `main`, `feat/**`, or `feature/**` branches
- Pull requests to `main`

**Jobs:**
1. **Code Quality** - Runs on Ubuntu latest
   - Checkout code
   - Setup Node.js 20
   - Setup pnpm 10
   - Install dependencies (with caching)
   - Run ESLint
   - Run TypeScript type checking
   - Build production bundle

### Viewing CI Results

1. Push your branch to GitHub
2. Go to the **Actions** tab in your repository
3. Click on your workflow run to see details
4. If any step fails, click on it to see error details

### Local CI Testing

Before pushing, you can run the same checks locally:

```bash
# Run all CI checks
pnpm lint && pnpm type-check && pnpm build
```

## Package Scripts Reference

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build production bundle |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint (view issues) |
| `pnpm lint:fix` | Run ESLint with auto-fix |
| `pnpm type-check` | Run TypeScript type checking |
| `pnpm prepare` | Initialize Husky (runs automatically on install) |

## Troubleshooting

### Pre-commit hook not running

```bash
# Reinitialize Husky
pnpm exec husky init

# Recreate pre-commit hook
echo "pnpm exec lint-staged" > .husky/pre-commit
```

### Skip pre-commit checks (emergency only!)

```bash
git commit --no-verify -m "message"
```

**⚠️ Warning:** Only use `--no-verify` in emergencies. CI will still catch issues.

### CI failing but local checks pass

1. Ensure you're using the same Node.js version (20)
2. Clear pnpm cache: `pnpm store prune`
3. Remove node_modules: `rm -rf node_modules`
4. Reinstall: `pnpm install`
5. Run checks: `pnpm lint && pnpm type-check && pnpm build`

### TypeScript errors in CI

The CI runs `tsc --noEmit` which checks the entire project. Your editor might only show errors for open files.

Fix by running locally:
```bash
pnpm type-check
```

## Best Practices

1. **Commit often** - Smaller commits are easier to review and revert
2. **Don't skip hooks** - They catch issues before they reach CI
3. **Fix linting issues** - Don't disable rules unless absolutely necessary
4. **Keep types strict** - Avoid using `any` when possible
5. **Test before pushing** - Run `pnpm lint && pnpm type-check` before pushing

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI configuration
├── .husky/
│   └── pre-commit          # Pre-commit hook script
├── app/                    # Next.js app directory
├── components/             # Reusable React components
├── lib/                    # Utility functions
├── .lintstagedrc.js       # lint-staged configuration
├── eslint.config.mjs      # ESLint configuration
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── DEVELOPMENT.md         # This file
```

## Additional Resources

- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
