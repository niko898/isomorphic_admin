# Getting Started with Isomorphic Admin Dashboard

Complete guide to setting up and running the Isomorphic admin dashboard for development.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Development Workflow](#development-workflow)
- [Project Structure Overview](#project-structure-overview)
- [First Steps](#first-steps)
- [Official Documentation](#official-documentation)

---

## Prerequisites

### Required Software

| Software | Minimum Version | Purpose |
|----------|----------------|---------|
| **Node.js** | 18.15.0+ | JavaScript runtime |
| **npm** | 8.0.0+ | Package manager |
| **Git** | 2.0+ | Version control |

### Recommended Tools

- **VS Code** - IDE with TypeScript support
- **ESLint Extension** - Code linting
- **Prettier Extension** - Code formatting
- **Tailwind CSS IntelliSense** - CSS class autocomplete

### Knowledge Prerequisites

- React 18+ fundamentals
- TypeScript basics
- Next.js 14 App Router
- Tailwind CSS utility classes
- Basic understanding of React hooks

---

## Installation

### 1. Clone or Access Repository

If you have access to this codebase, navigate to:
```bash
cd /Users/wildniko/Code/Tainatec/test/isomorphic_admin
```

### 2. Install Dependencies

```bash
npm install
```

This will install all dependencies defined in [package.json](../package.json):
- Production dependencies (React, Next.js, TypeScript, etc.)
- Development dependencies (ESLint, Prettier, etc.)

**Installation time**: ~2-5 minutes depending on your connection

### 3. Verify Installation

Check that installation was successful:

```bash
# Verify Next.js is available
npx next --version
# Should output: 14.0.1

# Verify TypeScript
npx tsc --version
# Should output: Version 5.2.2
```

---

## Environment Setup

### 1. Create Environment File

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

### 2. Configure Environment Variables

Edit `.env.local` and configure the following variables:

#### Required for Development

```env
# NextAuth Configuration (for authentication features)
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

To generate a secure `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

#### Optional Integrations

```env
# Google OAuth (optional - for Google sign-in)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Google Maps API (optional - for map widgets)
NEXT_PUBLIC_GOOGLE_MAP_API_KEY="your-google-maps-api-key"
```

> **Note**: The application will run without these optional variables, but related features will not work.

### Environment Variable Sources

Environment variables are validated using `@t3-oss/env-nextjs`. See configuration in:
- [src/env.mjs](../src/env.mjs) (if exists)

---

## Development Workflow

### Start Development Server

```bash
npm run dev
```

The application will start at:
- **URL**: http://localhost:3000
- **Default Page**: File Manager Dashboard

You should see:
```
  ▲ Next.js 14.0.1
  - Local:        http://localhost:3000
  - Ready in Xms
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run format` | Format code with Prettier |
| `npm run clean` | Clean build artifacts and node_modules |
| `npm run export` | Export static site |
| `npm run generate-icons` | Generate icon data file |

### Development Hot Reload

Next.js provides Fast Refresh - changes to the following will hot reload automatically:
- React components
- Pages
- Styles
- Server components

> **Tip**: If you encounter issues, try deleting the `.next` folder and restarting the dev server.

---

## Project Structure Overview

```
isomorphic_admin/
├── public/                          # Static assets
│   ├── logo/                       # Logo variations
│   ├── auth/                       # Auth page images
│   └── email-templates/            # Email assets
├── src/                            # Source code
│   ├── app/                        # Next.js App Router pages
│   │   ├── (hydrogen)/            # Main layout pages
│   │   ├── (other-pages)/         # Utility pages
│   │   ├── auth/                  # Authentication pages
│   │   ├── api/                   # API routes
│   │   └── shared/                # Shared page components
│   ├── components/                 # React components
│   │   ├── ui/                    # UI components (RizzUI)
│   │   ├── charts/                # Chart components
│   │   ├── icons/                 # Icon components
│   │   └── ...                    # Other component types
│   ├── config/                     # Configuration files
│   │   ├── routes.ts              # Route definitions
│   │   ├── site.config.tsx        # Site settings
│   │   └── enums.ts               # Type enums
│   ├── data/                       # Mock data files
│   ├── hooks/                      # Custom React hooks
│   ├── layouts/                    # Layout components
│   ├── store/                      # State management (Jotai)
│   ├── types/                      # TypeScript type definitions
│   ├── utils/                      # Utility functions
│   ├── server/                     # Server actions
│   └── email-templates/            # Email templates
├── docs/                           # Documentation (this folder)
├── .env.local                      # Environment variables (create from .example)
├── .env.local.example              # Environment template
├── next.config.mjs                 # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies and scripts
```

### Key Directories Explained

**`src/app/`** - Next.js 14 App Router
- Each folder represents a route
- `page.tsx` files define pages
- `layout.tsx` files define layouts
- Route groups use `(parentheses)` for organization without affecting URLs

**`src/components/`** - Reusable Components
- `ui/` - Core UI components based on RizzUI
- Well-organized by type (charts, icons, cards, etc.)

**`src/config/`** - Configuration
- Centralized route definitions
- Site settings
- Constants and enums

**`src/data/`** - Mock Data
- Sample data for demos
- 40+ data files
- Realistic datasets for prototyping

**`src/hooks/`** - Custom Hooks
- 23+ reusable React hooks
- State management helpers
- UI behavior hooks

---

## First Steps

### 1. Explore the Default Dashboard

After starting the dev server, navigate to http://localhost:3000:

- Default landing page: **File Manager Dashboard**
- See the sidebar navigation with all available pages
- Try switching between different dashboards

### 2. Navigate Key Pages

Try these routes to explore features:

| Route | Description |
|-------|-------------|
| `/` | File Manager Dashboard (default) |
| `/ecommerce` | E-commerce Dashboard |
| `/analytics` | Analytics Dashboard |
| `/executive` | Executive Dashboard |
| `/logistics` | Logistics Dashboard |
| `/support` | Support Dashboard |
| `/auth/sign-in-1` | Sign In Page (variation 1) |

### 3. Understand Route Structure

All routes are defined in [src/config/routes.ts](../src/config/routes.ts):

```typescript
export const routes = {
  eCommerce: {
    dashboard: '/ecommerce',
    products: '/ecommerce/products',
    createProduct: '/ecommerce/products/create',
    // ...
  },
  // ... other routes
};
```

**Usage in components**:
```typescript
import { routes } from '@/config/routes';
// Navigate to products page
router.push(routes.eCommerce.products);
```

### 4. Try Switching Layouts

Isomorphic supports 4 layout variations:

1. **Hydrogen** (default) - Sidebar with header
2. **Helium** - Alternative variation
3. **Lithium** - Alternative variation
4. **Beryllium** - Alternative variation

Switch layouts using the settings drawer (usually top-right icon).

Layout preference is saved in `localStorage`.

### 5. Explore Theme Options

- Toggle dark/light mode (moon/sun icon)
- Try different color presets (12+ available)
- All theme settings persist in localStorage

---

## TypeScript Configuration

### Path Aliases

TypeScript is configured with path aliases in [tsconfig.json](../tsconfig.json):

```typescript
// Instead of: import Button from '../../../components/ui/button'
// Use:
import Button from '@/components/ui/button'
import logoImg from '@public/logo.svg'
```

**Available aliases**:
- `@/*` → `src/*`
- `@public/*` → `public/*`

### Strict Mode

TypeScript strict mode is enabled for better type safety:
- `strict: true`
- `forceConsistentCasingInFileNames: true`

---

## Development Best Practices

### 1. Use Existing Components

Before creating new components, check:
- [src/components/ui/](../src/components/ui/) - UI components
- [RizzUI documentation](https://rizzui.com) - Component library docs

### 2. Follow File Naming Conventions

- Components: `PascalCase.tsx` (e.g., `ProductCard.tsx`)
- Hooks: `use-kebab-case.ts` (e.g., `use-table.ts`)
- Utils: `kebab-case.ts` (e.g., `format-date.ts`)
- Pages: `page.tsx` (Next.js App Router convention)

### 3. Type Everything

Always provide types for:
- Component props
- Function parameters
- Return values
- State variables

### 4. Use Mock Data

Leverage existing mock data from [src/data/](../src/data/):
- Product data
- Order data
- User data
- And 40+ more datasets

---

## Troubleshooting

### Port Already in Use

If port 3000 is busy:
```bash
# Use a different port
npm run dev -- -p 3001
```

### Module Not Found Errors

```bash
# Clear cache and reinstall
npm run clean
npm install
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### TypeScript Errors

```bash
# Check for type errors
npx tsc --noEmit
```

### Husky/Git Hooks Issues

If git hooks fail:
```bash
# Reinstall husky
npm run prepare
```

---

## Official Documentation

For detailed guides on specific topics, refer to:

- **Official Isomorphic Docs**: https://isomorphic-doc.vercel.app/
  - Getting Started
  - Configurations
  - Component usage
  - Integrations

- **This Documentation**:
  - [Architecture Guide](02-architecture.md)
  - [Components Reference](03-components.md)
  - [Development Guide](15-development-guide.md)

---

## Next Steps

After getting the project running:

1. **Understand the Architecture** → [02-architecture.md](02-architecture.md)
2. **Explore Components** → [03-components.md](03-components.md)
3. **Learn Custom Hooks** → [04-hooks.md](04-hooks.md)
4. **Build Your First Page** → [15-development-guide.md](15-development-guide.md)

---

## Quick Reference

### Minimum Commands to Start

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.local.example .env.local

# 3. Start development server
npm run dev

# 4. Open browser
# Navigate to: http://localhost:3000
```

### Essential Files to Know

- [package.json](../package.json) - Dependencies and scripts
- [src/config/routes.ts](../src/config/routes.ts) - All routes
- [src/config/site.config.tsx](../src/config/site.config.tsx) - Site settings
- [tailwind.config.ts](../tailwind.config.ts) - Tailwind configuration
- [tsconfig.json](../tsconfig.json) - TypeScript configuration

---

**Ready to dive deeper?** Continue with [Architecture Guide](02-architecture.md)
