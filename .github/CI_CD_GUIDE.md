# CI/CD Configuration Guide

## GitHub Actions Workflows

This project uses GitHub Actions for continuous integration and deployment.

### 1. **Deploy Workflow** (`.github/workflows/deploy.yml`)

Automatically deploys your site to GitHub Pages when you push to `main`.

**Triggers:**
- Push to `main` branch
- Pull requests to `main` (build only, no deploy)
- Manual workflow dispatch

**Jobs:**
1. **Lint and Test** - Runs ESLint checks
2. **Build** - Builds the Next.js static site
3. **Deploy** - Deploys to GitHub Pages (only on main branch)

**Features:**
- ✅ Automatic deployment on merge to main
- ✅ Build verification on pull requests
- ✅ Manual deployment option
- ✅ Caches npm dependencies for faster builds
- ✅ Uses Node.js 20

### 2. **CI Workflow** (`.github/workflows/ci.yml`)

Runs quality checks on every push and pull request.

**Checks:**
- 🔍 ESLint code quality
- 📝 TypeScript type checking
- 🏗️ Build verification
- 📦 Output validation

### Setup Instructions

#### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source**: Select `GitHub Actions`
4. Save the settings

#### Step 2: Configure Repository Permissions
The workflows are already configured with the correct permissions:
- `contents: read` - Read repository contents
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - Authentication for deployment

#### Step 3: Push Your Code
```bash
git add .
git commit -m "Configure CI/CD workflows"
git push origin main
```

#### Step 4: Monitor Deployment
1. Go to the **Actions** tab in your repository
2. You'll see the workflows running
3. Click on a workflow to see detailed logs
4. Once complete, your site will be live at `https://dutchwithme.nl`

### Workflow Behavior

#### On Push to Main:
1. Runs lint checks
2. Builds the static site
3. Deploys to GitHub Pages
4. Your site updates automatically

#### On Pull Request:
1. Runs all quality checks
2. Builds the site (doesn't deploy)
3. Shows build status on PR
4. Prevents merging if build fails

#### Manual Deployment:
1. Go to **Actions** tab
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"
4. Select branch and run

### Status Badges

The README includes status badges that show:
- 🟢 Green: All checks passing, deployment successful
- 🔴 Red: Checks failed or deployment failed
- 🟡 Yellow: In progress

### Custom Domain Configuration

Your custom domain `dutchwithme.nl` is configured via the `CNAME` file.

**DNS Settings Required:**
```
Type  | Name | Value
------|------|------------------
CNAME | www  | omidmohebbise.github.io
A     | @    | 185.199.108.153
A     | @    | 185.199.109.153
A     | @    | 185.199.110.153
A     | @    | 185.199.111.153
```

### Troubleshooting

#### Build Fails
- Check the Actions tab for error logs
- Run `npm run build` locally to reproduce
- Fix errors and push again

#### Deploy Fails
- Ensure Pages is enabled in repository settings
- Check that workflow has `pages: write` permission
- Verify CNAME file is present

#### Custom Domain Not Working
- Check DNS propagation (can take 24-48 hours)
- Verify DNS records are correct
- Ensure HTTPS is enforced in Pages settings

### Local Testing

Before pushing, test locally:

```bash
# Install dependencies
npm install

# Run linter
npm run lint

# Type check
npx tsc --noEmit

# Build
npm run build

# Check the output
ls -la out/
```

### Continuous Deployment Flow

```
Developer Push → GitHub → CI Checks → Build → Deploy → Live Site
                    ↓
                 PR Check (no deploy)
```

### Performance

- **Average build time**: 2-3 minutes
- **Deployment time**: 1-2 minutes
- **Total time to live**: 3-5 minutes after push

### Environment Variables

If you need environment variables:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add repository secrets
3. Reference in workflow:
   ```yaml
   - name: Build
     env:
       MY_SECRET: ${{ secrets.MY_SECRET }}
     run: npm run build
   ```

### Viewing Deployments

- **Live site**: https://dutchwithme.nl
- **Deployment history**: Repository → Environments → github-pages
- **Build logs**: Actions tab → Select workflow run

Your CI/CD is now fully configured and ready! 🚀
