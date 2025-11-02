# API Reference

API routes and server actions in Isomorphic.

## API Routes

Located in [src/app/api/](../src/app/api/)

### Creating API Routes

```typescript
// src/app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const users = []; // fetch users
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  // create user
  return NextResponse.json({ success: true });
}

export async function PUT(request: Request) {
  // update user
}

export async function DELETE(request: Request) {
  // delete user
}
```

### Dynamic Routes

```typescript
// src/app/api/users/[id]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await getUser(params.id);
  return NextResponse.json(user);
}
```

### Using API Routes

```typescript
// Client-side
const response = await fetch('/api/users');
const users = await response.json();

// With body
const response = await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John' }),
});
```

## Server Actions

Server-side functions that can be called from client components.

### Creating Server Actions

```typescript
// src/server/actions/user-actions.ts
'use server';

export async function getUsers() {
  const users = []; // fetch from database
  return users;
}

export async function createUser(data: UserInput) {
  // validate and create user
  return { success: true };
}
```

### Using Server Actions

```typescript
// Client component
'use client';

import { getUsers, createUser } from '@/server/actions/user-actions';

function UsersPage() {
  const handleCreate = async (formData: FormData) => {
    const result = await createUser({
      name: formData.get('name'),
    });
  };

  return <form action={handleCreate}>...</form>;
}
```

### In Server Components

```typescript
// Server component
import { getUsers } from '@/server/actions/user-actions';

export default async function UsersPage() {
  const users = await getUsers();

  return <UsersList users={users} />;
}
```

## API Endpoints

### Auth

- `/api/auth/*` - NextAuth endpoints

### Upload

- `/api/uploadthing/*` - File upload endpoints

**See Also**: [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
