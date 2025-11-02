# Deployment Guide

Guide to building and deploying Isomorphic to production.

## Build Process

### Production Build

```bash
npm run build
```

This creates an optimized production build in `.next/`

### Start Production Server

```bash
npm run start
```

Starts the production server on port 3000

### Static Export

```bash
npm run export
```

Exports static HTML/CSS/JS files (if applicable)

## Environment Variables

### Required for Production

```env
NEXTAUTH_SECRET="production-secret-here"
NEXTAUTH_URL="https://yourdomain.com"
```

### Optional Integrations

```env
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
NEXT_PUBLIC_GOOGLE_MAP_API_KEY="..."
SMTP_HOST="..."
SMTP_PORT="..."
SMTP_USER="..."
SMTP_PASSWORD="..."
```

## Deployment Platforms

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

```bash
# Or use Vercel CLI
npx vercel
```

### Other Platforms

- **Netlify** - Supports Next.js
- **AWS** - Using Amplify or EC2
- **Docker** - Containerized deployment
- **Traditional VPS** - Node.js hosting

## Performance Optimization

### Image Optimization

Uses Next.js Image component:

```typescript
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority // for above-fold images
/>
```

### Code Splitting

Automatic with Next.js App Router

### Font Optimization

Next.js automatically optimizes fonts

## Production Checklist

- [ ] Set strong NEXTAUTH_SECRET
- [ ] Configure production domain in NEXTAUTH_URL
- [ ] Set up environment variables
- [ ] Test build locally (`npm run build && npm run start`)
- [ ] Enable HTTPS
- [ ] Configure CDN (if needed)
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure analytics
- [ ] Test on multiple devices
- [ ] Set up CI/CD pipeline

## Monitoring

Consider adding:
- Error tracking (Sentry)
- Analytics (Google Analytics, Plausible)
- Performance monitoring (Vercel Analytics)
- Uptime monitoring

**See Also**: [Next.js Deployment](https://nextjs.org/docs/deployment)
