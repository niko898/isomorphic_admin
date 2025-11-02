# Invoice Module

Invoice creation and management system.

## Routes

```typescript
routes.invoice = {
  home: '/invoice',
  create: '/invoice/create',
  details: (id) => `/invoice/${id}`,
  edit: (id) => `/invoice/${id}/edit`,
};
```

## Features

- Create invoices
- Edit invoices
- Invoice templates
- Payment tracking
- PDF export

## Data

Mock data: [src/data/invoice-data.ts](../../src/data/invoice-data.ts)
