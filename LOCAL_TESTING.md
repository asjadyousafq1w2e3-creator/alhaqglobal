# Local Testing Before Vercel Deployment

This guide will help you test the build locally to ensure it works correctly before deploying to Vercel.

## Prerequisites

- Node.js 18+ installed
- All environment variables set up locally

## Step 1: Set Up Environment Variables

1. Copy `.env.example` to `.env` if not already done:
   ```bash
   cp .env.example .env
   ```

2. Fill in all required environment variables in `.env`:
   - `SUPABASE_PUBLISHABLE_KEY`
   - `SUPABASE_URL`
   - `VITE_SUPABASE_PROJECT_ID`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_URL`
   - `LOVABLE_API_KEY`

## Step 2: Install Dependencies

```bash
npm install
# or
yarn install
# or
bun install
```

## Step 3: Development Build & Test

Test the development build:

```bash
npm run dev
```

Visit `http://localhost:5173` (or the port shown in terminal) and verify:
- [ ] Site loads without errors
- [ ] Navigation works
- [ ] Chat widget loads (if visible)
- [ ] Console has no errors

## Step 4: Production Build & Local Test

This simulates what Vercel will do:

```bash
# Clean previous build
rm -rf dist

# Build for production
npm run build

# Start the production server
npm start
```

Visit `http://localhost:3000` (or the port shown) and verify:
- [ ] Site loads without errors
- [ ] All pages load correctly
- [ ] API endpoints work (test chat if available)
- [ ] Static assets load with correct styling
- [ ] No console errors

## Step 5: Check Build Output

Verify the build structure:

```bash
# List build output
ls -la dist/

# Should see:
# - dist/server.js (production Node.js server)
# - dist/public/ (static assets)
#   - index.html
#   - assets/
```

## Troubleshooting Local Build

### Build Command Fails

```bash
# Check TypeScript errors
npm run build

# If there are TypeScript errors, check your types:
cat tsconfig.json
```

### Server Doesn't Start

```bash
# Check if dist/server.js exists
ls -la dist/server.js

# Check Node.js version (should be 18+)
node --version

# Run with verbose output
NODE_DEBUG=* npm start
```

### Port Already in Use

If port 3000 is already in use:

```bash
# Find process using port 3000
lsof -i :3000

# Or specify a different port when running server
PORT=3001 npm start
```

### Environment Variables Not Loading

```bash
# Verify .env file exists
ls -la .env

# Check if variables are being read
cat .env | grep SUPABASE_URL

# Make sure you're in the right directory
pwd
```

## Ready to Deploy?

When all local tests pass:

1. ✅ Development build works (`npm run dev`)
2. ✅ Production build works (`npm run build && npm start`)
3. ✅ No console errors in either mode
4. ✅ All pages accessible
5. ✅ API endpoints functional

You're ready to push to Git and deploy on Vercel!

## Deployment Commands

```bash
# Push to your Git repository
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main

# Then deploy on Vercel (either via dashboard or CLI)
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed Vercel deployment instructions.
