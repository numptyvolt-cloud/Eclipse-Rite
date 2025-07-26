# 🌟 Eclipse Rite - GitHub Pages Deployment Guide 🌟

## 📋 Prerequisites
- GitHub account
- Git installed on your computer
- Your Eclipse Rite project ready

## 🚀 Step-by-Step Deployment Process

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and log into your account
2. **Click "New Repository"** (green button or + icon)
3. **Repository Settings:**
   - Repository name: `eclipse-rite` (or your preferred name)
   - Description: `Eclipse Rite - Mystical pagan website featuring Greek, Norse, and Egyptian gods with card readings and spell teaching`
   - Set to **Public** (required for free GitHub Pages)
   - ✅ Add a README file
   - ✅ Add .gitignore (choose "Node" template)
   - Choose a license (MIT recommended)

### Step 2: Update Package.json Homepage

⚠️ **IMPORTANT**: Update the homepage in `/frontend/package.json`:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/eclipse-rite"
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

### Step 3: Push Your Code to GitHub

```bash
# Navigate to your project directory
cd /app

# Add remote origin (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/eclipse-rite.git

# Add all files
git add .

# Commit your mystical creation
git commit -m "✨ Initial commit: Eclipse Rite mystical website complete with Greek, Norse, Egyptian gods, dark arts education, and Discord integration"

# Push to main branch
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
# Navigate to frontend directory
cd frontend

# Deploy to GitHub Pages
yarn deploy
```

This will:
- Build your optimized production version
- Create a `gh-pages` branch
- Deploy your website automatically

### Step 5: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** section
4. **Source**: Select "Deploy from a branch"
5. **Branch**: Select `gh-pages`
6. **Folder**: Select `/ (root)`
7. **Click "Save"**

### Step 6: Access Your Live Website

Your Eclipse Rite website will be available at:
```
https://YOUR_USERNAME.github.io/eclipse-rite
```

⏱️ **Note**: It may take 5-10 minutes for your site to be live after first deployment.

## 🔄 Future Updates

To update your website:

1. **Make changes** to your code
2. **Commit changes**:
   ```bash
   git add .
   git commit -m "🌙 Update: [describe your changes]"
   git push
   ```
3. **Deploy updates**:
   ```bash
   cd frontend
   yarn deploy
   ```

## 🎨 Custom Domain (Optional)

To use a custom domain like `eclipserite.com`:

1. **Buy a domain** from any domain registrar
2. **Create a CNAME file** in your `public` folder:
   ```
   eclipserite.com
   ```
3. **Configure DNS** at your domain registrar:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`
4. **Update GitHub Pages** settings to use custom domain

## 🛠️ Alternative Deployment Options

### Netlify (Recommended Alternative)
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build settings:
   - Build command: `cd frontend && yarn build`
   - Publish directory: `frontend/build`
4. Deploy automatically on every push!

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Framework: React
4. Root directory: `frontend`
5. Deploy with one click!

## 🔧 Troubleshooting

### Common Issues:

**404 Error on Refresh:**
- React Router needs a 404.html file for client-side routing
- Add this to your `public` folder if using React Router

**Images Not Loading:**
- Ensure all image URLs are absolute or properly referenced
- Check browser console for CORS errors

**Build Errors:**
- Run `yarn build` locally first to test
- Check for any console errors or warnings

## 📱 Mobile Optimization

Your Eclipse Rite website is fully responsive and optimized for:
- ✅ Desktop computers
- ✅ Tablets  
- ✅ Mobile phones
- ✅ All modern browsers

## 🌙 Features Included

Your deployed website includes:
- 🏛️ **Three Mythological Pantheons** (Greek, Norse, Egyptian)
- 🔮 **Professional Services** (Card readings, Spell teaching)
- 🌚 **Dark Arts Education** with responsible warnings
- 💬 **Discord Integration** for community engagement
- ⚡ **Premium Animations** with Framer Motion
- 🎨 **Mystical Design** with custom color themes
- 📱 **Mobile Responsive** design

## 🎯 SEO Optimization

Your website includes:
- Meta descriptions for mystical content
- Proper heading structure (H1, H2, H3)
- Alt text for images
- Fast loading times
- Mobile-friendly design

## 📊 Analytics (Optional)

To track visitors:
1. **Google Analytics**: Add tracking code to `public/index.html`
2. **GitHub Insights**: View traffic in repository Insights tab

## 🔒 Security Notes

Your website is secure with:
- HTTPS enabled by default on GitHub Pages
- No server-side vulnerabilities (static site)
- Safe external image loading
- Proper Discord link security attributes

---

## 🌟 Congratulations! 

Your Eclipse Rite mystical sanctuary is now live and ready to welcome practitioners from around the world! 

**Share your mystical creation:**
- Post in Discord: https://discord.gg/8pe6qCsmWr
- Social media ready with beautiful dark theme
- Professional presentation for your pagan community

**Your website showcases:**
- Ancient wisdom from three mythological traditions
- Professional mystical services
- Educational dark arts content with proper ethics
- Beautiful, immersive user experience
- Community-driven learning approach

*May your Eclipse Rite guide many seekers on their mystical journey!* 🌙✨