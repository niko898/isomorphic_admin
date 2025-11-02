# Architecture Guide

Comprehensive guide to the Isomorphic admin dashboard architecture, design patterns, and technical stack.

## Table of Contents

- [Technology Stack](#technology-stack)
- [Architecture Overview](#architecture-overview)
- [Folder Structure](#folder-structure)
- [Design Patterns](#design-patterns)
- [Routing Architecture](#routing-architecture)
- [Component Architecture](#component-architecture)
- [State Management](#state-management)
- [Styling Architecture](#styling-architecture)
- [Type System](#type-system)
- [Configuration](#configuration)
- [Build & Optimization](#build--optimization)

---

## Technology Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.0.1 | React framework with App Router |
| **React** | 18.2.0 | UI library |
| **TypeScript** | 5.2.2 | Type-safe JavaScript |
| **Node.js** | 18.15.0+ | Runtime environment |

### UI & Styling

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 3.3.5 | Utility-first CSS framework |
| **RizzUI** | 0.7.0 | Primary component library |
| **Framer Motion** | 10.16.4 | Animation library |
| **next-themes** | 0.2.1 | Theme management (dark/light mode) |
| **@tailwindcss/container-queries** | 0.1.1 | Container query support |
| **@tailwindcss/forms** | 0.5.6 | Form styling |
| **react-icons** | 4.11.0 | Icon library |
| **clsx** | 2.0.0 | Class name utility |
| **tailwind-merge** | 2.0.0 | Tailwind class merging |

### Forms & Validation

| Technology | Version | Purpose |
|------------|---------|---------|
| **React Hook Form** | 7.48.2 | Form state management |
| **Zod** | 3.22.4 | Schema validation |
| **@hookform/resolvers** | 3.3.2 | Form validation integration |

### State Management

| Technology | Version | Purpose |
|------------|---------|---------|
| **Jotai** | 2.3.0 | Atomic state management |
| **react-use** | 17.4.0 | React hooks collection |

### Data Visualization

| Technology | Version | Purpose |
|------------|---------|---------|
| **Recharts** | 2.9.3 | Chart library |
| **react-big-calendar** | 1.8.5 | Calendar component |
| **react-svg-worldmap** | 2.0.0-alpha.16 | World map visualization |

### Tables & Data Display

| Technology | Version | Purpose |
|------------|---------|---------|
| **rc-table** | 7.35.2 | Advanced table component |
| **rc-pagination** | 3.7.0 | Pagination |
| **rc-slider** | 10.4.0 | Range sliders |
| **rc-rate** | 2.12.0 | Rating component |

### File & Media Handling

| Technology | Version | Purpose |
|------------|---------|---------|
| **Uploadthing** | 5.7.4 | File upload service |
| **@uploadthing/react** | 5.7.0 | React components for uploads |
| **react-dropzone** | 14.2.3 | Drag & drop uploads |
| **Sharp** | 0.32.6 | Image processing |

### Utilities & Helpers

| Technology | Version | Purpose |
|------------|---------|---------|
| **dayjs** | 1.11.10 | Date manipulation |
| **lodash** | 4.17.21 | Utility functions |
| **pretty-bytes** | 6.1.1 | Byte formatting |

### Development Tools

| Technology | Version | Purpose |
|------------|---------|---------|
| **ESLint** | 8.53.0 | Code linting |
| **Prettier** | 3.0.3 | Code formatting |
| **Husky** | 8.0.3 | Git hooks |
| **Autoprefixer** | 10.4.16 | CSS vendor prefixes |

---

## Architecture Overview

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                      Browser Layer                           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Next.js App Router (SSR/CSR)                 │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
┌─────────────────────────────────────────────────────────────┐
│                  Presentation Layer                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Layouts    │  │  Components  │  │    Hooks     │      │
│  │  (4 types)   │  │  (57+ UI)    │  │   (23+)      │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
┌─────────────────────────────────────────────────────────────┐
│                   Business Layer                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │    State     │  │   Utilities  │  │  Validators  │      │
│  │   (Jotai)    │  │              │  │    (Zod)     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
┌─────────────────────────────────────────────────────────────┐
│                     Data Layer                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Server       │  │  API Routes  │  │  Mock Data   │      │
│  │ Actions      │  │              │  │  (40+ files) │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
┌─────────────────────────────────────────────────────────────┐
│                  Integration Layer                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  NextAuth    │  │ Uploadthing  │  │   Email      │      │
│  │   (Auth)     │  │  (Storage)   │  │ (Nodemailer) │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Key Architectural Principles

1. **Component-Based** - Modular, reusable components
2. **Type-Safe** - TypeScript throughout
3. **Server-First** - Next.js App Router with server components
4. **Atomic State** - Jotai for granular state management
5. **Utility-First CSS** - Tailwind CSS with custom design system
6. **Route Groups** - Organized routing with Next.js conventions
7. **Mock Data** - Extensive mock datasets for prototyping

---

## Folder Structure

### Complete Directory Tree

```
isomorphic_admin/
├── public/                                 # Static assets
│   ├── logo/                              # Logo variations
│   ├── auth/                              # Auth page images
│   └── email-templates/                   # Email assets
│
├── src/                                   # Source code
│   ├── app/                               # Next.js App Router
│   │   ├── (hydrogen)/                   # Main layout route group
│   │   │   ├── layout.tsx                # Hydrogen layout wrapper
│   │   │   ├── page.tsx                  # File Manager dashboard (/)
│   │   │   ├── analytics/                # Analytics dashboard
│   │   │   ├── ecommerce/                # E-commerce module
│   │   │   ├── executive/                # Executive dashboard
│   │   │   ├── logistics/                # Logistics module
│   │   │   ├── support/                  # Support module
│   │   │   ├── file-manager/             # File management
│   │   │   ├── point-of-sale/            # POS system
│   │   │   ├── invoice/                  # Invoice management
│   │   │   ├── event-calendar/           # Calendar
│   │   │   ├── forms/                    # Form pages
│   │   │   ├── tables/                   # Table examples
│   │   │   ├── widgets/                  # Widget showcase
│   │   │   ├── search/                   # Search & filter pages
│   │   │   ├── profile/                  # User profile
│   │   │   └── roles-permissions/        # Access control
│   │   │
│   │   ├── (other-pages)/                # Utility pages route group
│   │   │   ├── welcome/
│   │   │   ├── coming-soon/
│   │   │   ├── maintenance/
│   │   │   ├── not-found/
│   │   │   └── access-denied/
│   │   │
│   │   ├── auth/                         # Authentication pages
│   │   │   ├── (sign-in)/               # 5 sign-in variations
│   │   │   ├── (sign-up)/               # 5 sign-up variations
│   │   │   ├── (forgot-password)/       # 5 forgot password variations
│   │   │   └── (otp)/                   # 5 OTP variations
│   │   │
│   │   ├── shared/                       # Shared page components
│   │   │   ├── ecommerce/               # E-commerce shared components
│   │   │   ├── logistics/               # Logistics shared components
│   │   │   ├── analytics/               # Analytics widgets
│   │   │   ├── file/                    # File manager components
│   │   │   └── ...
│   │   │
│   │   ├── api/                          # API routes
│   │   │   ├── auth/                    # Auth endpoints
│   │   │   └── uploadthing/             # Upload endpoints
│   │   │
│   │   └── layout.tsx                    # Root layout
│   │
│   ├── components/                        # Reusable components
│   │   ├── ui/                           # UI component library (57+)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── modal.tsx
│   │   │   └── ... (extensive component set)
│   │   │
│   │   ├── charts/                       # Chart components
│   │   │   ├── area-chart.tsx
│   │   │   ├── bar-chart.tsx
│   │   │   └── ...
│   │   │
│   │   ├── cards/                        # Card components
│   │   ├── controlled-table/             # Table system
│   │   ├── settings/                     # Settings components
│   │   ├── icons/                        # Icon components (173)
│   │   └── search/                       # Search components
│   │
│   ├── layouts/                           # Layout systems
│   │   ├── hydrogen/                     # Default layout
│   │   │   ├── layout.tsx
│   │   │   ├── menu-items.tsx
│   │   │   ├── header.tsx
│   │   │   └── sidebar.tsx
│   │   │
│   │   ├── helium/                       # Alternative layout 1
│   │   ├── lithium/                      # Alternative layout 2
│   │   └── beryllium/                    # Alternative layout 3
│   │
│   ├── config/                            # Configuration files
│   │   ├── routes.ts                     # Route definitions
│   │   ├── site.config.tsx               # Site configuration
│   │   ├── enums.ts                      # Type enumerations
│   │   ├── constants.ts                  # App constants
│   │   └── color-presets.ts              # Theme color presets
│   │
│   ├── data/                              # Mock data (40+ files)
│   │   ├── filter-products-data.ts
│   │   ├── order-data.ts
│   │   ├── invoice-data.ts
│   │   └── ... (extensive mock datasets)
│   │
│   ├── hooks/                             # Custom React hooks (23+)
│   │   ├── use-layout.ts                 # Layout switching
│   │   ├── use-table.ts                  # Table state
│   │   ├── use-theme-color.ts            # Theme management
│   │   └── ... (many utility hooks)
│   │
│   ├── utils/                             # Utility functions
│   │   ├── validators/                   # Form validators
│   │   └── ... (helper functions)
│   │
│   ├── store/                             # State management (Jotai)
│   │   ├── checkout.ts                   # Checkout state
│   │   └── quick-cart/                   # Cart state
│   │
│   ├── server/                            # Server actions
│   │   └── actions/
│   │
│   ├── types/                             # TypeScript types
│   │   └── ... (type definitions)
│   │
│   └── email-templates/                   # Email templates
│       └── ... (React Email templates)
│
├── docs/                                  # Documentation (this folder)
│
├── .vscode/                               # VS Code settings
├── .husky/                                # Git hooks
│
├── .env.local.example                     # Environment template
├── next.config.mjs                        # Next.js configuration
├── tailwind.config.ts                     # Tailwind configuration
├── tsconfig.json                          # TypeScript configuration
├── postcss.config.js                      # PostCSS configuration
└── package.json                           # Dependencies & scripts
```

### Directory Responsibilities

| Directory | Purpose | Key Files |
|-----------|---------|-----------|
| `src/app/` | Next.js pages & routes | `page.tsx`, `layout.tsx` |
| `src/components/` | Reusable UI components | `ui/*.tsx`, `charts/*.tsx` |
| `src/layouts/` | Layout components | `hydrogen/layout.tsx` |
| `src/config/` | App configuration | `routes.ts`, `site.config.tsx` |
| `src/data/` | Mock datasets | `*.ts` data files |
| `src/hooks/` | Custom React hooks | `use-*.ts` |
| `src/utils/` | Helper functions | Validators, formatters |
| `src/store/` | Jotai state atoms | State definitions |
| `src/types/` | TypeScript types | Type definitions |
| `public/` | Static assets | Images, logos, icons |

---

## Design Patterns

### 1. Route Groups Pattern

Next.js App Router uses route groups for organization:

```typescript
// app/(hydrogen)/ecommerce/page.tsx
// URL: /ecommerce
// Layout: Uses (hydrogen) layout

// app/(other-pages)/welcome/page.tsx
// URL: /welcome
// Layout: Different layout
```

**Benefits**:
- Organize routes without affecting URLs
- Share layouts across route groups
- Separate concerns (dashboards vs utility pages)

### 2. Compound Component Pattern

Used extensively in RizzUI components:

```typescript
// Example: Select component
<Select>
  <Select.Trigger />
  <Select.Options>
    <Select.Option value="1">Option 1</Select.Option>
  </Select.Options>
</Select>
```

### 3. Custom Hook Pattern

Encapsulate reusable logic in custom hooks:

```typescript
// src/hooks/use-table.ts
export function useTable<T>(data: T[], pageSize: number) {
  // Pagination, sorting, filtering logic
  return { /* table state and methods */ };
}

// Usage in component
const table = useTable(products, 10);
```

See: [04-hooks.md](04-hooks.md)

### 4. Atomic State Pattern (Jotai)

```typescript
// src/store/checkout.ts
import { atom } from 'jotai';

export const cartItemsAtom = atom([]);
export const totalPriceAtom = atom((get) => {
  const items = get(cartItemsAtom);
  return items.reduce((sum, item) => sum + item.price, 0);
});
```

See: [09-state-management.md](09-state-management.md)

### 5. Validation Schema Pattern

Zod schemas for type-safe validation:

```typescript
import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  price: z.number().positive(),
  category: z.string(),
});

type ProductInput = z.infer<typeof productSchema>;
```

See: [08-forms-validation.md](08-forms-validation.md)

### 6. Centralized Route Configuration

All routes defined in one place:

```typescript
// src/config/routes.ts
export const routes = {
  eCommerce: {
    dashboard: '/ecommerce',
    products: '/ecommerce/products',
    createProduct: '/ecommerce/products/create',
  },
  // ...
};

// Usage
import { routes } from '@/config/routes';
router.push(routes.eCommerce.products);
```

### 7. Shared Page Components

Reusable page-level components in `app/shared/`:

```typescript
// app/shared/ecommerce/product/product-list.tsx
export function ProductList() {
  // Reusable across multiple e-commerce pages
}
```

---

## Routing Architecture

### Next.js 14 App Router

Isomorphic uses the Next.js App Router (vs Pages Router):

**Key Features**:
- **File-based routing** - Folders define routes
- **Layouts** - Shared UI across routes
- **Server Components** - Default server-side rendering
- **Route Groups** - Organization with `(parentheses)`
- **Dynamic routes** - `[param]` folders

### Route Structure

```
app/
├── (hydrogen)/              # Route group (doesn't affect URL)
│   ├── layout.tsx          # Shared layout
│   ├── page.tsx            # / (root)
│   └── ecommerce/
│       ├── page.tsx        # /ecommerce
│       └── products/
│           ├── page.tsx    # /ecommerce/products
│           └── [slug]/
│               └── page.tsx # /ecommerce/products/:slug
```

### Layout Hierarchy

```
Root Layout (app/layout.tsx)
  └── Hydrogen Layout (app/(hydrogen)/layout.tsx)
      └── Page (app/(hydrogen)/ecommerce/page.tsx)
```

See: [13-routing-navigation.md](13-routing-navigation.md)

---

## Component Architecture

### Component Hierarchy

```
RizzUI Base Components (node_modules/rizzui)
  └── Wrapped UI Components (src/components/ui/)
      └── Composite Components (src/components/cards, charts, etc.)
          └── Page Components (src/app/shared/)
              └── Pages (src/app/**/page.tsx)
```

### Component Categories

1. **Base UI Components** (`src/components/ui/`)
   - Button, Input, Modal, Select, etc.
   - RizzUI wrappers with project-specific defaults

2. **Domain Components** (`src/components/`)
   - Charts, cards, tables, icons
   - Business logic components

3. **Shared Page Components** (`src/app/shared/`)
   - Reusable across multiple pages
   - Feature-specific components

4. **Layout Components** (`src/layouts/`)
   - Header, sidebar, footer
   - Layout-specific UI

See: [03-components.md](03-components.md)

---

## State Management

### Jotai Atomic State

**Philosophy**: Minimal, atomic state management

```typescript
// Define atom
import { atom } from 'jotai';
export const countAtom = atom(0);

// Use in component
import { useAtom } from 'jotai';
const [count, setCount] = useAtom(countAtom);
```

### State Organization

- **Global State**: `src/store/`
- **Local State**: React `useState`
- **Form State**: React Hook Form
- **URL State**: Next.js `searchParams`

See: [09-state-management.md](09-state-management.md)

---

## Styling Architecture

### Tailwind CSS System

**CSS Variable-Based Colors**:

```css
/* Colors defined as CSS variables */
--primary-default: 59 130 246; /* rgb values */

/* Used in Tailwind */
bg-primary  /* rgb(59 130 246 / 1) */
bg-primary/50  /* rgb(59 130 246 / 0.5) */
```

### Theme System

1. **Color Presets** - 12+ predefined themes
2. **Dark/Light Mode** - `next-themes` integration
3. **Custom Animations** - Defined in `tailwind.config.ts`
4. **Responsive Breakpoints** - Extended screen sizes

```typescript
screens: {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
  '4xl': '2560px',
}
```

### Component Styling Pattern

```typescript
import { cn } from '@/utils/class-names';

<div className={cn(
  'base-classes',
  'responsive-classes',
  conditionalClasses && 'conditional',
  className // Allow override
)} />
```

See: [10-styling-theming.md](10-styling-theming.md)

---

## Type System

### TypeScript Configuration

**Path Aliases**:
```json
{
  "@/*": ["src/*"],
  "@public/*": ["public/*"]
}
```

**Strict Mode**: Enabled
- Type safety enforced
- Null checks required
- Implicit any forbidden

### Type Organization

```
src/types/
├── index.ts              # Main type exports
├── models.ts             # Data models
└── components.ts         # Component prop types
```

### Common Patterns

```typescript
// Component props with children
type ComponentProps = {
  className?: string;
  children?: React.ReactNode;
};

// Extending HTML elements
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

// Generic types
type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};
```

---

## Configuration

### Key Config Files

| File | Purpose |
|------|---------|
| [next.config.mjs](../next.config.mjs) | Next.js configuration |
| [tailwind.config.ts](../tailwind.config.ts) | Tailwind CSS setup |
| [tsconfig.json](../tsconfig.json) | TypeScript compiler options |
| [src/config/site.config.tsx](../src/config/site.config.tsx) | Site settings |
| [src/config/routes.ts](../src/config/routes.ts) | Route definitions |
| [src/config/enums.ts](../src/config/enums.ts) | Enumerations |

### Enumerations

```typescript
// src/config/enums.ts
export enum LAYOUT_OPTIONS {
  HYDROGEN = 'hydrogen',
  HELIUM = 'helium',
  LITHIUM = 'lithium',
  BERYLLIUM = 'beryllium',
}

export enum PaymentGateway {
  STRIPE = 'STRIPE',
  PAYPAL = 'PAYPAL',
  // ... 10+ payment gateways
}
```

---

## Build & Optimization

### Next.js Configuration

**Image Optimization**:
```javascript
// next.config.mjs
images: {
  remotePatterns: [
    { hostname: 'randomuser.me' },
    { hostname: 'cloudflare-ipfs.com' },
    // ... more allowed domains
  ],
}
```

**React Strict Mode**: Disabled
```javascript
reactStrictMode: false,
```

### Build Process

```bash
# Development build
npm run dev

# Production build
npm run build
npm run start

# Static export
npm run export
```

### Performance Optimizations

1. **Server Components** - Default in App Router
2. **Image Optimization** - Next.js Image component
3. **Code Splitting** - Automatic route-based splitting
4. **CSS Optimization** - Tailwind purging unused styles
5. **Font Optimization** - Next.js font loading

---

## Best Practices Summary

1. ✅ **Use TypeScript** - Always type your code
2. ✅ **Server Components First** - Use client components only when needed
3. ✅ **Centralize Routes** - Use `src/config/routes.ts`
4. ✅ **Atomic State** - Keep state minimal with Jotai
5. ✅ **Reuse Components** - Check existing components before creating new
6. ✅ **Follow Naming Conventions** - See [Getting Started](01-getting-started.md)
7. ✅ **Use Mock Data** - Leverage `src/data/` for prototyping
8. ✅ **Path Aliases** - Use `@/` and `@public/` imports
9. ✅ **Tailwind Utilities** - Prefer utilities over custom CSS
10. ✅ **Zod Validation** - Type-safe form validation

---

## Related Documentation

- [Getting Started](01-getting-started.md) - Setup and installation
- [Components](03-components.md) - Component library reference
- [Hooks](04-hooks.md) - Custom hooks documentation
- [Development Guide](15-development-guide.md) - Building with Isomorphic

---

**Next**: Learn about the [Component Library](03-components.md)
