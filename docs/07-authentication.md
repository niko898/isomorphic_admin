# Authentication

Authentication setup and patterns in Isomorphic using NextAuth.

## Overview

Isomorphic provides **5 variations** each of:
- Sign In pages
- Sign Up pages
- Forgot Password pages
- OTP Verification pages

## Authentication Pages

Located in [src/app/auth/](../src/app/auth/):

```
auth/
├── (sign-in)/
│   ├── sign-in-1/
│   ├── sign-in-2/
│   ├── sign-in-3/
│   ├── sign-in-4/
│   └── sign-in-5/
├── (sign-up)/
├── (forgot-password)/
└── (otp)/
```

## Routes

```typescript
// src/config/routes.ts
export const routes = {
  auth: {
    signIn1: '/auth/sign-in-1',
    signIn2: '/auth/sign-in-2',
    signUp1: '/auth/sign-up-1',
    forgotPassword1: '/auth/forgot-password-1',
    otp1: '/auth/otp-1',
  },
};
```

## NextAuth Setup

### Environment Variables

```env
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# OAuth Providers
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

### Configuration

NextAuth is configured for:
- Email/Password authentication
- Google OAuth
- Session management
- Protected routes

## Usage

### Sign In Form

```typescript
import { signIn } from 'next-auth/react';

function SignInForm() {
  const handleSubmit = async (data) => {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/',
    });
  };
}
```

### Protected Pages

```typescript
import { getServerSession } from 'next-auth';

export default async function ProtectedPage() {
  const session = await getServerSession();

  if (!session) {
    redirect('/auth/sign-in-1');
  }

  return <div>Protected Content</div>;
}
```

**See Also**: [Official Docs](https://isomorphic-doc.vercel.app/)
