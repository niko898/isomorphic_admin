# Routing & Navigation

Next.js App Router routing system and navigation patterns.

## Route Structure

Next.js 14 App Router with file-based routing:

```
app/
├── (hydrogen)/              # Route group
│   ├── layout.tsx          # Shared layout
│   ├── page.tsx            # / route
│   ├── ecommerce/
│   │   ├── page.tsx        # /ecommerce
│   │   └── products/
│   │       ├── page.tsx    # /ecommerce/products
│   │       └── [slug]/
│   │           └── page.tsx # /ecommerce/products/:slug
```

## Route Configuration

[src/config/routes.ts](../src/config/routes.ts)

```typescript
export const routes = {
  eCommerce: {
    dashboard: '/ecommerce',
    products: '/ecommerce/products',
    createProduct: '/ecommerce/products/create',
    productDetails: (slug: string) => `/ecommerce/products/${slug}`,
  },
};
```

### Usage

```typescript
import { routes } from '@/config/routes';
import Link from 'next/link';

<Link href={routes.eCommerce.products}>Products</Link>

// Dynamic routes
<Link href={routes.eCommerce.productDetails('iphone-15')}>
  iPhone 15
</Link>
```

## Navigation

### Using Link

```typescript
import Link from 'next/link';

<Link href="/about" className="text-primary">
  About
</Link>
```

### Programmatic Navigation

```typescript
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };

  return <button onClick={handleClick}>Go to Dashboard</button>;
}
```

## Route Groups

Route groups `(name)` organize routes without affecting URLs:

- `(hydrogen)` - Main dashboard pages
- `(other-pages)` - Utility pages
- `(sign-in)` - Auth page variations

## Dynamic Routes

```
[param]/page.tsx        # /products/123
[...slug]/page.tsx      # /docs/a/b/c
[[...slug]]/page.tsx    # Optional catch-all
```

## Layouts

```typescript
// app/layout.tsx - Root layout
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

// app/(hydrogen)/layout.tsx - Group layout
export default function HydrogenLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
```

## Loading & Error States

```typescript
// loading.tsx
export default function Loading() {
  return <Spinner />;
}

// error.tsx
'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

**See Also**: [Next.js Docs](https://nextjs.org/docs/app)
