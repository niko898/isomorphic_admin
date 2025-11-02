# Support Module

Customer support and helpdesk system.

## Routes

```typescript
routes.support = {
  dashboard: '/support',
  inbox: '/support/inbox',
  supportCategory: (category) => `/support/inbox/${category}`,
  messageDetails: (id) => `/support/inbox/${id}`,
  snippets: '/support/snippets',
  templates: '/support/templates',
};
```

## Features

- Inbox with message categorization
- Message templates
- Quick snippets
- Ticket management
- Response automation

## Components

Located in [src/app/shared/support/](../../src/app/shared/support/)
