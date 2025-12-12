# Quick Deploy Guide

## ✅ Your CI/CD is Configured!

### What's Been Set Up

1. **Two GitHub Actions Workflows:**
   - `deploy.yml` - Deploys to GitHub Pages on push to main
   - `ci.yml` - Runs quality checks on all pushes and PRs

2. **Next.js Configuration:**
   - Static export enabled
   - Image optimization configured for static sites
   - React strict mode enabled

3. **Status Badges:**
   - Added to README to show build/deploy status

### 🚀 To Deploy Your Site

#### Step 1: Commit and Push
```bash
git add .
git commit -m "Configure CI/CD for GitHub Pages"
git push origin main
```

#### Step 2: Enable GitHub Pages (One-time setup)
1. Go to: https://github.com/omidmohebbise/learn-dutch-with-me/settings/pages
2. Under "Build and deployment":
   - Source: Select **"GitHub Actions"**
3. Click Save

#### Step 3: Watch It Deploy
1. Go to: https://github.com/omidmohebbise/learn-dutch-with-me/actions
2. Watch the "Deploy to GitHub Pages" workflow run
3. When complete (2-5 minutes), your site will be live!

### 🌐 Your URLs

- **Live Site**: https://dutchwithme.nl
- **GitHub Pages**: https://omidmohebbise.github.io/learn-dutch-with-me
- **Actions**: https://github.com/omidmohebbise/learn-dutch-with-me/actions

### 📊 What Happens Automatically

**On Every Push to Main:**
1. ✅ Linting check
2. ✅ Build verification
3. ✅ Automatic deployment
4. ✅ Live site updates

**On Pull Requests:**
1. ✅ Linting check
2. ✅ Type checking
3. ✅ Build verification
4. ❌ No deployment (safety check)

### 🔧 Local Development

```bash
# Start dev server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build
```

### 📝 Workflow Files

- `.github/workflows/deploy.yml` - Main deployment workflow
- `.github/workflows/ci.yml` - Quality checks
- `.github/CI_CD_GUIDE.md` - Detailed documentation

### ⚡ That's It!

Your site will now automatically deploy whenever you push to main. Just code, commit, and push! 🎉
