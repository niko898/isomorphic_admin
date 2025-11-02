# Utilities

Helper functions, validators, and utility patterns.

## Class Names Utility

```typescript
import { cn } from '@/utils/class-names';

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  isDisabled && 'disabled-classes',
  className
)} />
```

## Validators

[src/utils/validators/](../src/utils/validators/)

### Zod Schemas

```typescript
import { z } from 'zod';

export const emailSchema = z.string().email();
export const passwordSchema = z.string().min(8);
export const phoneSchema = z.string().regex(/^\+?[1-9]\d{1,14}$/);
```

## Formatters

### Date Formatting

```typescript
import dayjs from 'dayjs';

const formatted = dayjs(date).format('MMM DD, YYYY');
const relative = dayjs(date).fromNow();
```

### Price Formatting

```typescript
function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}
```

### Bytes Formatting

```typescript
import prettyBytes from 'pretty-bytes';

prettyBytes(1024); // "1 kB"
prettyBytes(1024 * 1024); // "1 MB"
```

## Constants

[src/config/constants.ts](../src/config/constants.ts)

Common constants used throughout the application.

## Enums

[src/config/enums.ts](../src/config/enums.ts)

```typescript
export enum LAYOUT_OPTIONS {
  HYDROGEN = 'hydrogen',
  HELIUM = 'helium',
  LITHIUM = 'lithium',
  BERYLLIUM = 'beryllium',
}

export enum PaymentGateway {
  STRIPE = 'STRIPE',
  PAYPAL = 'PAYPAL',
  // ... more
}
```

## Lodash Utilities

```typescript
import isString from 'lodash/isString';
import debounce from 'lodash/debounce';
import groupBy from 'lodash/groupBy';
```

**See Also**: [Architecture](02-architecture.md)
