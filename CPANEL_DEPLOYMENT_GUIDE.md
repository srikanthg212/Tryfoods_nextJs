# 🚀 Tryfoods - cPanel Deployment Guide

## ⚠️ Important: Next.js on cPanel

Your Tryfoods website is built with **Next.js 14**, which requires **Node.js** runtime. Most traditional cPanel hosting doesn't support Next.js directly, but there are several deployment options.

---

## 🎯 Option 1: Deploy to Vercel (Recommended - Free & Easy)

**Vercel is the creators of Next.js and offers the best hosting for Next.js apps.**

### Steps:

1. **Create a GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Upload Your Code to GitHub**
   - Create a new repository
   - Upload your project files
   - Commit the code

3. **Deploy to Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - **Done!** Your site will be live in 2-3 minutes

**Benefits:**
- ✅ Free forever for personal projects
- ✅ Automatic deployments on code changes
- ✅ Built-in CDN (super fast globally)
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Zero configuration needed

**Your site will be live at:** `https://your-project-name.vercel.app`

---

## 🎯 Option 2: cPanel with Node.js Support

**If your cPanel hosting supports Node.js applications:**

### Prerequisites:
- cPanel with Node.js app manager
- SSH access (recommended)
- Node.js 18+ support

### Deployment Steps:

#### Step 1: Prepare Your Files
1. Download your `tryfoods-project.zip`
2. Extract it on your computer

#### Step 2: Upload to cPanel
1. Log into cPanel
2. Go to **File Manager**
3. Navigate to your domain folder (e.g., `public_html/tryfoods`)
4. Upload all project files:
   - `app/` folder
   - `components/` folder
   - `public/` folder
   - `package.json`
   - `next.config.js`
   - `tailwind.config.js`
   - All other config files

#### Step 3: Setup Node.js Application in cPanel

1. In cPanel, find **"Setup Node.js App"** or **"Node.js Selector"**

2. Click **"Create Application"**

3. Fill in the details:
   ```
   Node.js Version: 18.x or higher
   Application Mode: Production
   Application Root: /home/username/public_html/tryfoods
   Application URL: tryfoods.yourdomain.com
   Application Startup File: server.js
   ```

4. Click **"Create"**

#### Step 4: Install Dependencies via SSH

1. Open **Terminal** in cPanel (or SSH)

2. Navigate to your project:
   ```bash
   cd public_html/tryfoods
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

#### Step 5: Create Server File

Create a file named `server.js` in your project root:

```javascript
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
```

#### Step 6: Start the Application

1. In cPanel Node.js app manager, click **"Start App"**
2. Your site should now be live!

#### Step 7: Setup Domain (Optional)

1. In cPanel, go to **Subdomains** or **Addon Domains**
2. Point your domain to the Node.js application
3. Setup SSL certificate (Let's Encrypt - Free)

---

## 🎯 Option 3: Export as Static HTML (Traditional cPanel)

**If your cPanel doesn't support Node.js, you can export as static HTML:**

### Limitations:
- No server-side features
- No dynamic routing
- But works on any hosting!

### Steps:

#### Step 1: Modify next.config.js

Update your `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
```

#### Step 2: Build Static Files

On your computer (with Node.js installed):

```bash
npm install
npm run build
```

This creates an `out/` folder with static HTML files.

#### Step 3: Upload to cPanel

1. Log into cPanel File Manager
2. Navigate to `public_html` (or your domain folder)
3. Upload ALL contents of the `out/` folder
4. Make sure `index.html` is in the root

#### Step 4: Done!

Your site is now live as a static website!

**Note:** Video and scroll animations will still work!

---

## 🎯 Option 4: Deploy to Netlify (Free Alternative)

**Another excellent free option:**

### Steps:

1. **Go to https://netlify.com**
2. Sign up with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect your GitHub repository
5. Build settings (auto-detected):
   ```
   Build command: npm run build
   Publish directory: .next
   ```
6. Click **"Deploy site"**

**Your site will be live at:** `https://random-name.netlify.app`

You can then add a custom domain!

---

## 📋 Quick Comparison

| Platform | Cost | Ease | Node.js Support | Custom Domain |
|----------|------|------|-----------------|---------------|
| **Vercel** | Free | ⭐⭐⭐⭐⭐ | ✅ Full | ✅ Free |
| **Netlify** | Free | ⭐⭐⭐⭐⭐ | ✅ Full | ✅ Free |
| **cPanel (Node.js)** | Paid | ⭐⭐⭐ | ✅ If supported | ✅ Included |
| **cPanel (Static)** | Paid | ⭐⭐⭐⭐ | ❌ Not needed | ✅ Included |

---

## 🔧 Troubleshooting cPanel

### Issue: "Node.js not available"
**Solution:** Contact your hosting provider to enable Node.js, or use Vercel/Netlify instead.

### Issue: "Port 3000 already in use"
**Solution:** Change port in cPanel Node.js settings or server.js file.

### Issue: "Build fails on cPanel"
**Solution:** Build locally and upload the `.next` folder directly.

### Issue: "Images not loading"
**Solution:** Check file permissions (should be 644 for files, 755 for folders).

---

## 🎉 Recommended Deployment Method

**For the best experience, I recommend:**

1. **Deploy to Vercel** (fastest, easiest, free)
2. **Connect your custom domain** (if you have one)
3. **Setup is literally 3 clicks**
4. **Automatic updates** when you push code

**Vercel Deployment Time:** 2-3 minutes
**cPanel Deployment Time:** 30-60 minutes
**Traditional hosting (static):** 10-15 minutes

---

## 📞 Need Help?

**If your cPanel doesn't support Node.js:**
- Consider Vercel (free, recommended)
- Or export as static HTML (works everywhere)

**If you have Node.js on cPanel:**
- Follow Option 2 above
- Contact your hosting support for Node.js setup help

---

## ✅ Final Checklist

Before deploying, make sure you have:
- [ ] All project files
- [ ] package.json with dependencies
- [ ] Built the project (`npm run build`)
- [ ] Tested locally
- [ ] Domain pointed correctly
- [ ] SSL certificate setup

---

Your Tryfoods website is ready to go live! 🚀🥗

**Need more help?** Just ask and I'll guide you through the specific hosting provider you're using!
