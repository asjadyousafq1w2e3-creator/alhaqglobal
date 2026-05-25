# Vercel Deployment Guide

This guide provides step-by-step instructions for deploying the AYK Solutions Showcase site to Vercel.

## Prerequisites

- A [Vercel](https://vercel.com) account
- Git repository hosted on GitHub, GitLab, or Bitbucket
- Environment variables ready (see below)

## Environment Variables

Before deploying, gather the following environment variables. They can be found in your `.env` file or from your service providers:

1. **Supabase Configuration:**
   - `SUPABASE_PUBLISHABLE_KEY` - Your Supabase public key
   - `SUPABASE_URL` - Your Supabase project URL
   - `VITE_SUPABASE_PROJECT_ID` - Your Supabase project ID
   - `VITE_SUPABASE_PUBLISHABLE_KEY` - Same as `SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_URL` - Same as `SUPABASE_URL`

2. **AI/LLM Configuration:**
   - `LOVABLE_API_KEY` - API key for the Lovable AI service (used for chat functionality)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect Git Repository:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your Git repository
   - Select the repository containing this project

2. **Configure Environment Variables:**
   - In the Vercel dashboard, go to your project → Settings → Environment Variables
   - Add each environment variable from the list above
   - Make sure they're set for Production, Preview, and Development environments

3. **Deploy:**
   - Click the "Deploy" button
   - Vercel will automatically build and deploy your site

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd /path/to/ayk-solutions-showcase

# Deploy (first time)
vercel

# Follow the prompts to:
# - Confirm project setup
# - Set environment variables
# - Complete deployment

# For subsequent deployments
vercel --prod
```

## Build Information

- **Build Command:** `npm run build`
- **Output Directory:** `dist/public`
- **Install Command:** Automatically detected (npm/yarn/pnpm)

## Important Notes

### Server-Side Rendering (SSR)

This project uses TanStack Start which provides server-side rendering capabilities. Vercel supports Node.js servers through Lambda functions, and this project is configured to run on Vercel's infrastructure without modifications.

### Chat API Endpoint

The project includes a `/api/public/chat` endpoint that requires:
- `LOVABLE_API_KEY` environment variable to be set
- Network access to `https://ai.gateway.lovable.dev`

This endpoint handles chat requests for the AI assistant. Ensure the API key is valid and has appropriate rate limits configured.

### Static Assets

Static assets (CSS, JS, images) are automatically cached with a 1-year expiration. This is configured in `vercel.json` under the `headers` section.

## Monitoring & Logs

After deployment:

1. **View Logs:**
   - Go to your project on Vercel
   - Click "Deployments" tab
   - Select a deployment to view build and runtime logs

2. **Monitor Performance:**
   - Use Vercel's analytics dashboard
   - Check Web Vitals for page performance metrics

3. **Environment Variable Verification:**
   - The build logs will show if environment variables are properly loaded
   - Check that your API keys are not exposed in logs (they shouldn't be)

## Troubleshooting

### Build Fails

- Check Vercel build logs for specific errors
- Ensure all environment variables are set correctly
- Verify that `npm run build` works locally:
  ```bash
  npm install
  npm run build
  ```

### Chat API Returns 500 Error

- Verify `LOVABLE_API_KEY` is set in environment variables
- Check that the API key is valid and not expired
- Ensure the API endpoint is reachable from Vercel

### Supabase Connection Issues

- Verify `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` are correct
- Check Supabase dashboard for any authentication issues
- Ensure your Supabase project is active and not in a suspended state

### Static Assets Not Loading

- Clear browser cache and do a hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check that the built assets exist in `dist/public/assets/`

## Production Deployment Checklist

- [ ] All environment variables are set in Vercel dashboard
- [ ] Build completes successfully (check Vercel logs)
- [ ] Site loads without 404 errors
- [ ] Chat API endpoint responds correctly
- [ ] Supabase integrations work (if any)
- [ ] Static assets load with proper styling
- [ ] Test on mobile devices
- [ ] Check Web Vitals performance metrics

## Rollback

To rollback to a previous version:

1. Go to your project on Vercel
2. Click the "Deployments" tab
3. Find the deployment you want to rollback to
4. Click the three-dot menu and select "Promote to Production"

## Custom Domain

To use a custom domain:

1. Go to your project settings on Vercel
2. Click "Domains"
3. Add your custom domain and follow DNS configuration instructions
4. Wait for DNS to propagate (usually 24-48 hours)

## Next Steps

- Monitor your site's performance and user analytics
- Set up automatic deployments for your Git main branch
- Configure preview deployments for pull requests
- Set up notifications for deployment failures
