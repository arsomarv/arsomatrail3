# Noble Arsoma - Ethiopian Housemaid Recruitment Website

A modern, responsive website for Noble Arsoma, a recruitment agency specializing in connecting Gulf employers with qualified Ethiopian housemaids.

## 🚀 Quick Start (HTML Version)

**For immediate deployment without any setup:**

1. **Download the `index.html` file**
2. **Upload to any web hosting service** (Netlify, Vercel, GitHub Pages, etc.)
3. **Your website is live!**

The HTML version works immediately without any build process or dependencies.

## 📋 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: Mobile navigation, contact forms, and candidate profiles
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Two Deployment Options**: HTML (instant) and Next.js (advanced)

## 🛠️ Tech Stack

### HTML Version (Recommended)
- **HTML5** with semantic markup
- **Tailwind CSS** via CDN
- **Vanilla JavaScript** for interactivity
- **No build process required**

### Next.js Version (Advanced)
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## 📁 Project Structure

```
├── index.html                 # Standalone HTML version (ready to deploy)
├── src/                       # Next.js source files
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── WebsitePreview.tsx
├── public/
│   └── placeholder.svg
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vercel.json
├── DEPLOYMENT.md             # Detailed deployment guide
└── README.md
```

## 🚀 Deployment Options

### Option 1: HTML Version (Instant Deployment)

**Perfect for quick deployment without technical setup:**

1. **Netlify** (Recommended):
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop `index.html` file
   - Site is live instantly

2. **Vercel**:
   - Push code to GitHub
   - Connect repository to Vercel
   - Automatic deployment

3. **GitHub Pages**:
   - Push `index.html` to GitHub repository
   - Enable GitHub Pages in settings

4. **Any Web Hosting**:
   - Upload `index.html` to any web server
   - Works immediately

### Option 2: Next.js Version (Advanced Features)

**For developers who want advanced features:**

#### Prerequisites
- Node.js 18+ 
- npm or yarn

#### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

#### Deploy to Vercel
```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Connect to Vercel
# Vercel will auto-detect and deploy
```

## 📱 Website Sections

1. **Hero Section**: Compelling headline and call-to-action
2. **How It Works**: Three-step process explanation
3. **Candidates**: Showcase of available housemaids
4. **About**: Company information and benefits
5. **Contact**: Contact form and business information
6. **Footer**: Links and company details

## 🎨 Customization

### Content Updates
- **HTML Version**: Edit `index.html` directly
- **Next.js Version**: Update `src/components/WebsitePreview.tsx`

### Styling
- Colors and fonts can be customized in the Tailwind classes
- The design uses a black and white color scheme
- All styling is responsive and mobile-friendly

### Images
- Replace placeholder images with actual photos
- Optimize images for web (recommended: WebP format)
- Update image paths in the code

## 📞 Contact Information

- **Email**: info@noblearsoma.com
- **Phone**: +966 50 123 4567
- **Location**: Riyadh, Saudi Arabia
- **Service Areas**: Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman

## 🔧 Available Scripts (Next.js Version)

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run dev-docker` - Start development server for Docker

## 📖 Detailed Documentation

For comprehensive deployment instructions, troubleshooting, and advanced configuration, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🆘 Troubleshooting

### HTML Version Issues
- **Page not loading**: Check if hosting service supports HTML files
- **Styling issues**: Ensure internet connection for Tailwind CDN
- **Mobile menu not working**: Check browser console for JavaScript errors

### Next.js Version Issues
- **Module not found**: Run `npm install`
- **Build errors**: Ensure Node.js version is 18+
- **Port conflicts**: Use `npm run dev -- -p 3001`

## 🤝 Support

- **For deployment issues**: Check [DEPLOYMENT.md](./DEPLOYMENT.md)
- **For technical support**: Create an issue in the repository
- **For business inquiries**: Email info@noblearsoma.com

## 📄 License

This project is private and proprietary to Noble Arsoma.

---

**Choose the deployment option that best fits your needs:**
- **HTML Version**: Perfect for immediate deployment without technical setup
- **Next.js Version**: Ideal for developers who want advanced features and customization

Both versions provide the same beautiful, professional website for Noble Arsoma! 