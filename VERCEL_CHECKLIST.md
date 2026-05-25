# Vercel Deployment Checklist

Complete this checklist before deploying to Vercel to ensure everything is configured correctly.

## Pre-Deployment Setup

### Configuration Files
- [x] `vercel.json` - Created with proper build configuration
- [x] `.env.example` - Created with all required environment variables
- [x] `.vercelignore` - Created to exclude unnecessary files
- [ ] `.gitignore` - Verify it includes `.env` (don't commit actual keys)

### Code Review
- [ ] Run `npm run lint` locally - no linting errors
- [ ] Run `npm run build` locally - build completes successfully
- [ ] Run `npm start` locally - server starts without errors
- [ ] Test all main pages and features locally
- [ ] Verify chat API works (if applicable) with test messages

### Environment Variables
- [ ] Gather all required environment variables (see `.env.example`)
- [ ] Have Supabase credentials ready
- [ ] Have `LOVABLE_API_KEY` ready
- [ ] Verify all keys are valid and not expired
- [ ] Check that API endpoints are accessible from production

## Vercel Setup

### Account & Repository
- [ ] Create Vercel account (if not already done)
- [ ] Connect Git repository to Vercel
- [ ] Grant Vercel access to your repository

### Environment Variables on Vercel
In Vercel Dashboard → Project Settings → Environment Variables:
- [ ] `SUPABASE_PUBLISHABLE_KEY` - Added
- [ ] `SUPABASE_URL` - Added
- [ ] `VITE_SUPABASE_PROJECT_ID` - Added
- [ ] `VITE_SUPABASE_PUBLISHABLE_KEY` - Added
- [ ] `VITE_SUPABASE_URL` - Added
- [ ] `LOVABLE_API_KEY` - Added
- [ ] All variables set for: Production, Preview, Development

### Build Settings
- [ ] Build Command: `npm run build` (should be auto-detected)
- [ ] Output Directory: `dist/public` (should match vercel.json)
- [ ] Install Command: (should be auto-detected)
- [ ] Node.js Version: 18 or higher (verify in Vercel settings)

## Deployment

### First Deployment
- [ ] Click "Deploy" in Vercel Dashboard
- [ ] Monitor build logs for any errors
- [ ] Build should complete in 2-5 minutes
- [ ] Check deployment logs for any warnings
- [ ] Note the deployment URL (e.g., `your-site.vercel.app`)

### Post-Deployment Testing
- [ ] Site loads on the Vercel URL
- [ ] All pages accessible
- [ ] Navigation works correctly
- [ ] Static assets load with proper styling
- [ ] API endpoints respond correctly
- [ ] Chat widget/API functions if present
- [ ] No 404 errors in browser console
- [ ] Open DevTools and check for any errors

### Performance Verification
- [ ] Page loads in reasonable time (< 3 seconds)
- [ ] Check Vercel Analytics (if available on your plan)
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

## Custom Domain (Optional)

- [ ] Purchase or have domain ready
- [ ] Add domain in Vercel → Settings → Domains
- [ ] Configure DNS records with your domain provider
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Verify HTTPS certificate is issued
- [ ] Test site on custom domain

## Production Monitoring

### Ongoing Checks
- [ ] Monitor build logs for any warnings
- [ ] Set up email notifications for deployment failures
- [ ] Monitor site performance with Vercel Analytics
- [ ] Check Supabase dashboard for any connection issues
- [ ] Monitor API rate limits (especially for Lovable API)

### Error Tracking
- [ ] Set up error monitoring (Sentry, LogRocket, etc.) - Optional
- [ ] Check Vercel logs regularly for errors
- [ ] Monitor uptime/availability

## Rollback Plan

If something goes wrong:
- [ ] Locate previous working deployment in Vercel
- [ ] Use "Promote to Production" to rollback
- [ ] Typically completes within seconds

## Common Issues & Solutions

### Build Fails After Deployment

**Problem:** Build works locally but fails on Vercel

**Solution:**
1. Check Vercel build logs for specific error
2. Verify all environment variables are set correctly
3. Ensure Node.js version is 18+
4. Check that all dependencies are in package.json (not devDependencies where they shouldn't be)

### Blank Page or 404

**Problem:** Site loads but shows blank page or 404 error

**Solution:**
1. Check browser console for errors
2. Verify that `.env` variables are set in Vercel
3. Check that build output directory is correct (`dist/public`)
4. Verify `vercel.json` has correct configuration

### API Returns 500 Error

**Problem:** Chat or other API endpoints return 500

**Solution:**
1. Verify `LOVABLE_API_KEY` is correctly set
2. Check API key is valid and not rate-limited
3. Verify network access to API endpoints
4. Check Vercel function logs for specific error

### Static Assets Not Loading

**Problem:** CSS/JS files don't load, broken styling

**Solution:**
1. Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. Clear browser cache
3. Verify assets are in `dist/public/assets/`
4. Check Vercel build logs for asset generation issues

### Environment Variables Not Available

**Problem:** 500 error with "API not configured" message

**Solution:**
1. Verify all env vars are set in Vercel dashboard
2. Make sure variable names match exactly (case-sensitive)
3. Redeploy after adding variables
4. Check that variables are set for Production environment

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Deploy Troubleshooting](https://vercel.com/docs/platform/frequently-asked-questions)
- [TanStack Start Documentation](https://tanstack.com/start/latest)
- [Supabase Documentation](https://supabase.com/docs)

## Sign Off

- [ ] All checklist items completed
- [ ] Local testing passed
- [ ] Site deployed and tested on Vercel
- [ ] Production site is live and accessible
- [ ] All team members informed about new deployment

---

**Deployment Date:** _______________  
**Deployed By:** _______________  
**Status:** _______________
