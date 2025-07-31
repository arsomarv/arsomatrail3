# Deployment Guide - Noble Arsoma Website

This guide provides instructions for deploying the Noble Arsoma website in two different formats.

## Option 1: HTML Version (Recommended for Quick Deployment)

The `index.html` file is a standalone HTML version that can be deployed immediately without any build process.

### Deploy to Any Web Hosting Service

1. **Upload the HTML file** to any web hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any traditional web hosting

2. **For Netlify:**
   - Drag and drop the `index.html` file to Netlify
   - Your site will be live instantly

3. **For Vercel:**
   - Connect your GitHub repository
   - Vercel will automatically detect and deploy the HTML file

4. **For GitHub Pages:**
   - Push the `index.html` file to a GitHub repository
   - Enable GitHub Pages in repository settings

### Features of HTML Version
- ✅ No build process required
- ✅ Works immediately
- ✅ Responsive design
- ✅ Mobile navigation
- ✅ Contact form
- ✅ Smooth scrolling
- ✅ SEO optimized

## Option 2: Next.js Version (For Advanced Features)

The Next.js version requires Node.js and npm to be installed.

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development Setup

1. **Install Node.js:**
   - Download from [nodejs.org](https://nodejs.org/)
   - Install on your system

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   - Navigate to `http://localhost:3000`

### Deploy Next.js Version to Vercel

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom domain (optional):**
   - Add your custom domain in Vercel dashboard
   - Update DNS settings as instructed

### Deploy Next.js Version to Other Platforms

#### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder
3. Set build command: `npm run build`
4. Set publish directory: `.next`

#### AWS Amplify
1. Connect your GitHub repository
2. Set build settings:
   - Build command: `npm run build`
   - Output directory: `.next`

## Troubleshooting

### HTML Version Issues
- **Images not loading:** Ensure all image paths are correct
- **Styling issues:** Check if Tailwind CSS CDN is accessible
- **Mobile menu not working:** Check JavaScript console for errors

### Next.js Version Issues
- **Module not found errors:** Run `npm install` to install dependencies
- **Build errors:** Check Node.js version (requires 18+)
- **Port already in use:** Change port with `npm run dev -- -p 3001`

## Performance Optimization

### HTML Version
- Images are optimized with placeholders
- CSS is loaded via CDN for faster loading
- Minimal JavaScript for better performance

### Next.js Version
- Automatic code splitting
- Image optimization with Next.js Image component
- Server-side rendering for better SEO

## SEO and Analytics

### HTML Version
- Meta tags included for SEO
- Structured data ready for Google
- Fast loading times

### Next.js Version
- Automatic meta tag management
- Better SEO with server-side rendering
- Easy integration with analytics tools

## Contact Form Integration

### HTML Version
- Form is ready for backend integration
- Can be connected to services like:
  - Formspree
  - Netlify Forms
  - EmailJS

### Next.js Version
- Can be integrated with:
  - API routes for custom backend
  - Third-party form services
  - Database integration

## Security Considerations

- HTTPS is recommended for production
- Form validation should be implemented
- Consider adding reCAPTCHA for contact forms
- Regular security updates for dependencies

## Maintenance

### HTML Version
- Update content directly in HTML file
- No dependency management required
- Easy to modify and maintain

### Next.js Version
- Regular dependency updates: `npm update`
- Security audits: `npm audit`
- Performance monitoring with Vercel Analytics

## Support

For deployment issues:
- Check the browser console for errors
- Verify all file paths are correct
- Ensure hosting service supports your chosen format
- Contact hosting provider support if needed

## Recommended Hosting Services

### For HTML Version
1. **Netlify** - Drag and drop deployment
2. **Vercel** - Automatic deployment from Git
3. **GitHub Pages** - Free hosting for public repositories

### For Next.js Version
1. **Vercel** - Optimized for Next.js
2. **Netlify** - Good Next.js support
3. **AWS Amplify** - Enterprise features
4. **Railway** - Simple deployment

Choose the option that best fits your technical expertise and requirements! 