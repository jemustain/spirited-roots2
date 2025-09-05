# Git Hooks Setup for SpiritedRoots

## Automated Quality Checks

This project includes automated testing to ensure code quality and accessibility standards before commits.

### Setup Pre-commit Hooks

1. **Enable Git hooks directory:**
   ```bash
   git config core.hooksPath .githooks
   ```

2. **Make hooks executable (Linux/Mac):**
   ```bash
   chmod +x .githooks/pre-commit
   ```

3. **For Windows users:**
   - Ensure Git Bash or WSL is available
   - The hook will run automatically when you commit

### What Gets Tested

- ✅ **Color Accessibility** - WCAG AA compliance (4.5:1 contrast ratio)
- ✅ **Build Validation** - Ensures code compiles successfully
- 🚧 **Future additions** - ESLint, TypeScript checks, performance tests

### Available Commands

```bash
# Run accessibility tests manually
npm run check-accessibility

# Test colors specifically  
npm run test-colors

# Build with accessibility validation
npm run build
```

### Bypassing Hooks (Emergency Only)

If you need to bypass hooks for urgent fixes:
```bash
git commit --no-verify -m "Emergency fix"
```

**Note:** Only use `--no-verify` in genuine emergencies. Always fix accessibility issues before merging to main branches.

### Troubleshooting

**Hook not running?**
- Check: `git config core.hooksPath` should show `.githooks`
- Windows: Ensure Git Bash is in PATH

**Accessibility test failing?**
- Run `npm run check-accessibility` to see detailed results
- Update colors in `scripts/check-accessibility.js` to meet 4.5:1 contrast ratio
- Test dark mode compatibility

**Performance issues?**
- Hooks add ~2-3 seconds to commit time
- This prevents costly accessibility bugs in production

---

*This automation ensures your SpiritedRoots blog maintains professional accessibility standards across all deployments.*
