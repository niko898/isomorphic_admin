# State Management

State management patterns using Jotai atomic state library.

## Overview

Isomorphic uses **Jotai 2.3.0** for state management.

### Why Jotai?

- Minimal boilerplate
- Atomic state updates
- TypeScript support
- React Suspense integration
- No Provider hell

## Basic Usage

### Creating Atoms

```typescript
// src/store/user.ts
import { atom } from 'jotai';

export const userAtom = atom({
  name: '',
  email: '',
  isLoggedIn: false,
});

export const countAtom = atom(0);
```

### Using Atoms

```typescript
import { useAtom } from 'jotai';
import { userAtom, countAtom } from '@/store/user';

function UserProfile() {
  const [user, setUser] = useAtom(userAtom);
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <p>{user.name}</p>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}
```

### Read-Only Atoms

```typescript
import { atom } from 'jotai';

const countAtom = atom(0);
const doubledCountAtom = atom((get) => get(countAtom) * 2);

// Usage
const [doubled] = useAtom(doubledCountAtom); // read-only
```

## Existing State

### Layout State

```typescript
// src/hooks/use-layout.ts
import { useLayout } from '@/hooks/use-layout';

const { layout, setLayout } = useLayout();
```

### Cart State

```typescript
// src/store/quick-cart/
import { cartAtom } from '@/store/quick-cart';

const [cart, setCart] = useAtom(cartAtom);
```

## Best Practices

1. ✅ Keep atoms small and focused
2. ✅ Use derived atoms for computed values
3. ✅ Persist important state to localStorage
4. ✅ Use TypeScript for type safety

**See Also**: [Jotai Docs](https://jotai.org/)
