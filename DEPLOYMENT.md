# Deployment Guide

This portfolio includes automated GitHub Actions workflows to deploy to multiple hosting platforms. Choose one or more services based on your needs.

## Quick Start

1. Push to the `main` branch to trigger automatic deployments
2. Monitor progress in the **Actions** tab of your GitHub repository
3. View deployment status in the workflow summary

---

## Hosting Options

### 1. **Vercel** (Recommended for Next.js/React)

**Pros:**
- Zero-config deployment for React apps
- Automatic previews on pull requests
- Global CDN
- Free tier available

**Setup:**
1. Sign up at [vercel.com](https://vercel.com)
2. Create a new project and connect your GitHub repo
3. Get your secrets:
   - `VERCEL_TOKEN`: Create at [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID`: Found in account settings
   - `VERCEL_PROJECT_ID`: Found in project settings
4. Add secrets to GitHub repository settings

**Command to get IDs:**
```bash
vercel link
```

---

### 2. **Netlify**

**Pros:**
- Simple drag-and-drop deployment
- Built-in form handling
- Excellent free tier
- Fast global CDN

**Setup:**
1. Sign up at [netlify.com](https://netlify.com)
2. Create a new site
3. Get your secrets:
   - `NETLIFY_AUTH_TOKEN`: Create at [app.netlify.com/user/applications](https://app.netlify.com/user/applications)
   - `NETLIFY_SITE_ID`: Found in site settings → General
4. Add secrets to GitHub repository settings

---

### 3. **GitHub Pages** (Free, Built-in)

**Pros:**
- Free with GitHub account
- No additional setup required
- Great for portfolio sites
- Custom domain support

**Setup:**
1. Enable GitHub Pages in repository settings
2. Select "GitHub Actions" as deployment source
3. Workflow runs automatically on push to `main`

**Custom domain:**
1. Add `CNAME` file to `public/` folder with your domain
2. Configure DNS records pointing to GitHub Pages

---

### 4. **AWS S3 + CloudFront**

**Pros:**
- Highly scalable
- Pay-as-you-go pricing
- Global CDN with CloudFront
- Advanced caching options

**Setup:**
1. Create S3 bucket for your site
2. Create CloudFront distribution
3. Get your secrets:
   - `AWS_ACCESS_KEY_ID`: Create IAM user with S3 access
   - `AWS_SECRET_ACCESS_KEY`: From IAM user
   - `AWS_S3_BUCKET`: Your bucket name
   - `AWS_CLOUDFRONT_ID`: Your CloudFront distribution ID
4. Add secrets to GitHub repository settings

**IAM Policy (minimal):**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "*"
    }
  ]
}
```

---

## Adding GitHub Secrets

1. Go to your repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add each required secret for your chosen platform
4. Workflow will automatically use them

---

## Workflow Triggers

The deployment workflow runs:
- ✅ On every push to `main` branch
- ✅ Manually via "Run workflow" in Actions tab
- ✅ Only after successful build

---

## Monitoring Deployments

1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. View logs for each deployment step
4. Check the deployment summary at the bottom

---

## Disabling Platforms

To disable a deployment platform, comment out or remove its job from `.github/workflows/deploy.yml`:

```yaml
# deploy-vercel:
#   needs: build
#   runs-on: ubuntu-latest
#   ...
```

---

## Troubleshooting

**Build fails:**
- Check Node 24 compatibility
- Verify all dependencies are installed
- Review build logs in Actions tab

**Deployment fails:**
- Verify secrets are correctly set
- Check platform-specific documentation
- Ensure build artifacts exist

**Site not updating:**
- Clear browser cache
- Check CloudFront/CDN cache settings
- Verify latest deployment succeeded

---

## Environment Variables

If your site needs environment variables:

1. Create a `.env.production` file locally (don't commit)
2. Add secrets to GitHub for each variable
3. Update workflow to export them before build:

```yaml
- name: Build project
  env:
    VITE_API_URL: ${{ secrets.VITE_API_URL }}
  run: pnpm run build
```

---

## Support

- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)
- **AWS**: [aws.amazon.com/s3](https://aws.amazon.com/s3)

