# Development Guide

Practical guide to building features and customizing the Isomorphic admin dashboard.

## Adding a New Page

### 1. Create Page File

Pages use Next.js 14 App Router structure:

```bash
# Create new page in appropriate route group
src/app/(hydrogen)/my-feature/page.tsx
```

### 2. Page Component

```typescript
// src/app/(hydrogen)/my-feature/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Feature',
  description: 'Description of my feature',
};

export default function MyFeaturePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">My Feature</h1>
      {/* Page content */}
    </div>
  );
}
```

### 3. Add Route Definition

```typescript
// src/config/routes.ts
export const routes = {
  // ... existing routes
  myFeature: '/my-feature',
};
```

### 4. Add to Navigation Menu

```typescript
// src/layouts/hydrogen/menu-items.tsx
export const menuItems = [
  // ... existing items
  {
    name: 'My Feature',
    href: routes.myFeature,
    icon: <PiIcon />,
  },
];
```

## Creating Components

### Custom Component Pattern

```typescript
// src/components/custom/my-component.tsx
import { cn } from '@/utils/class-names';

interface MyComponentProps {
  title: string;
  className?: string;
}

export function MyComponent({ title, className }: MyComponentProps) {
  return (
    <div className={cn('p-4 bg-white rounded-lg', className)}>
      <h3>{title}</h3>
    </div>
  );
}
```

### Using Existing Components

Always check existing components before creating new ones:

```typescript
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MetricCard from '@/components/cards/metric-card';
```

## Working with Forms

### React Hook Form + Zod

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof schema>;

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email')}
        label="Email"
        error={errors.email?.message}
      />
      <Input
        {...register('password')}
        type="password"
        label="Password"
        error={errors.password?.message}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

## State Management

### Using Jotai

```typescript
// Create atom
import { atom } from 'jotai';

export const userAtom = atom({
  name: '',
  email: '',
});

// Use in component
import { useAtom } from 'jotai';
import { userAtom } from '@/store/user';

function UserProfile() {
  const [user, setUser] = useAtom(userAtom);

  return <div>{user.name}</div>;
}
```

## Styling and Theming

### Using Tailwind Classes

```typescript
<div className="
  flex items-center gap-4
  p-6 rounded-lg
  bg-white dark:bg-gray-900
  shadow-md
">
  Content
</div>
```

### Dynamic Classes

```typescript
import { cn } from '@/utils/class-names';

<Button
  className={cn(
    'base-classes',
    isActive && 'bg-primary',
    isDisabled && 'opacity-50'
  )}
/>
```

## Data Tables

### Complete Table Example

```typescript
import { useTable } from '@/hooks/use-table';
import { ControlledTable } from '@/components/controlled-table';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
];

function UsersTable() {
  const table = useTable(users, 10);

  return (
    <ControlledTable
      columns={columns}
      data={table.tableData}
      pagination={{
        current: table.currentPage,
        total: table.totalItems,
      }}
      onPaginate={table.handlePaginate}
    />
  );
}
```

## API Integration

### Server Actions

```typescript
// src/server/actions/user-actions.ts
'use server';

export async function getUsers() {
  const res = await fetch('https://api.example.com/users');
  return res.json();
}

// Use in page
import { getUsers } from '@/server/actions/user-actions';

export default async function UsersPage() {
  const users = await getUsers();

  return <UsersList users={users} />;
}
```

### API Routes

```typescript
// src/app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const users = []; // fetch users
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  // create user
  return NextResponse.json({ success: true });
}
```

## Testing

### Component Testing

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

test('button renders correctly', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

## Best Practices

1. ✅ **Use TypeScript** - Always type your code
2. ✅ **Reuse Components** - Check existing components first
3. ✅ **Follow Naming Conventions** - PascalCase for components, kebab-case for files
4. ✅ **Use Path Aliases** - `@/` instead of relative paths
5. ✅ **Server Components First** - Use client components only when needed
6. ✅ **Validate Forms** - Use Zod schemas
7. ✅ **Responsive Design** - Mobile-first approach
8. ✅ **Dark Mode** - Support both themes
9. ✅ **Accessibility** - ARIA labels and semantic HTML
10. ✅ **Performance** - Lazy load and memoize

**See Also**: [Architecture](02-architecture.md), [Components](03-components.md)
