# GitHub Pages Deployment Guide

## Automatic Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup Steps:

1. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"

2. **Custom Domain** (already configured):
   - Your CNAME file is set to: `dutchwithme.nl`
   - Make sure your DNS is configured:
     ```
     CNAME record: www.dutchwithme.nl -> omidmohebbise.github.io
     A records for dutchwithme.nl:
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Push to Deploy**:
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

4. **Monitor Deployment**:
   - Check the "Actions" tab in your GitHub repository
   - The workflow will build and deploy automatically

## Local Development

Run locally before deploying:
```bash
npm install
npm run dev
```

Visit http://localhost:3000 to preview.

## Build Locally

Test the production build:
```bash
npm run build
```

This creates a static export in the `out/` directory.

## Troubleshooting

- If deployment fails, check the Actions tab for error logs
- Ensure your repository has Pages enabled
- Verify DNS settings for your custom domain
- Make sure `next.config.mjs` has `output: "export"`

Your site will be available at: https://dutchwithme.nl
