# Integrations

Third-party service integrations in Isomorphic.

## NextAuth (Authentication)

**Version**: Latest compatible

### Setup

```env
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

### Usage

```typescript
import { signIn, signOut, useSession } from 'next-auth/react';

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return <button onClick={() => signOut()}>Sign Out</button>;
  }
  return <button onClick={() => signIn()}>Sign In</button>;
}
```

## Uploadthing (File Uploads)

**Version**: 5.7.4

### Configuration

```typescript
// src/app/api/uploadthing/core.ts
import { createUploadthing } from 'uploadthing/next';

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    .onUploadComplete(async ({ file }) => {
      console.log('Upload complete:', file.url);
    }),
};
```

### Usage

```typescript
import { UploadDropzone } from '@uploadthing/react';

function ImageUpload() {
  return (
    <UploadDropzone
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        console.log('Files:', res);
      }}
    />
  );
}
```

## Nodemailer (Email)

**Version**: 6.9.7

### Setup

```env
SMTP_HOST="smtp.example.com"
SMTP_PORT="587"
SMTP_USER="..."
SMTP_PASSWORD="..."
```

### Usage

```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

await transporter.sendMail({
  from: 'noreply@example.com',
  to: 'user@example.com',
  subject: 'Welcome',
  html: '<p>Welcome to our platform!</p>',
});
```

## Google Maps

**Version**: @googlemaps/js-api-loader 1.16.2

### Setup

```env
NEXT_PUBLIC_GOOGLE_MAP_API_KEY="..."
```

### Usage

```typescript
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
});

await loader.load();
```

## React Email

Email templates using React components.

Location: [src/email-templates/](../src/email-templates/)

**See Also**: [Official Docs](https://isomorphic-doc.vercel.app/)
