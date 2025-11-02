# Layout System

Guide to the Isomorphic multi-layout architecture and layout switching mechanism.

## Overview

Isomorphic provides **4 pre-built layout variations** that can be switched dynamically:

1. **Hydrogen** (Default) - Sidebar with header
2. **Helium** - Alternative variation
3. **Lithium** - Alternative variation
4. **Beryllium** - Alternative variation

## Layout Architecture

### Layout Enum

[src/config/enums.ts](../src/config/enums.ts:1-6)

```typescript
export enum LAYOUT_OPTIONS {
  HYDROGEN = 'hydrogen',
  HELIUM = 'helium',
  LITHIUM = 'lithium',
  BERYLLIUM = 'beryllium',
}
```

### Layout Files

```
src/layouts/
├── hydrogen/
│   ├── layout.tsx          # Main layout component
│   ├── header.tsx          # Top header
│   ├── sidebar.tsx         # Left sidebar
│   ├── menu-items.tsx      # Navigation menu config
│   └── menu-utils.ts       # Menu utilities
├── helium/
│   └── layout.tsx
├── lithium/
│   └── layout.tsx
└── beryllium/
    └── layout.tsx
```

## Hydrogen Layout (Default)

**Features**:
- Fixed sidebar navigation
- Top header with search and notifications
- Responsive - sidebar collapses on mobile
- Breadcrumb navigation
- User profile dropdown

**Layout Structure**:
```
┌─────────────────────────────────────────┐
│              Header                      │
├───────┬─────────────────────────────────┤
│       │                                  │
│ Side  │        Main Content              │
│ bar   │                                  │
│       │                                  │
└───────┴─────────────────────────────────┘
```

## Switching Layouts

### Using useLayout Hook

```typescript
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/config/enums';

function LayoutSwitcher() {
  const { layout, setLayout } = useLayout();

  return (
    <select value={layout} onChange={(e) => setLayout(e.target.value)}>
      <option value={LAYOUT_OPTIONS.HYDROGEN}>Hydrogen</option>
      <option value={LAYOUT_OPTIONS.HELIUM}>Helium</option>
      <option value={LAYOUT_OPTIONS.LITHIUM}>Lithium</option>
      <option value={LAYOUT_OPTIONS.BERYLLIUM}>Beryllium</option>
    </select>
  );
}
```

### Persistence

Layout preference is automatically saved to `localStorage` with key: `isomorphic-layout`

## Navigation Menu

### Menu Configuration

Menu items are defined in each layout's `menu-items.tsx`:

```typescript
export const menuItems = [
  {
    name: 'Dashboard',
    href: '/',
    icon: <PiHouse />,
  },
  {
    name: 'E-Commerce',
    href: '#',
    icon: <PiShoppingCart />,
    dropdownItems: [
      {
        name: 'Products',
        href: routes.eCommerce.products,
      },
      {
        name: 'Orders',
        href: routes.eCommerce.orders,
      },
    ],
  },
  // ... more items
];
```

## Responsive Behavior

- **Desktop** (>1024px): Full sidebar visible
- **Tablet** (768-1024px): Collapsible sidebar
- **Mobile** (<768px): Hamburger menu with drawer

## Customization

### Adding New Layout

1. Create layout directory: `src/layouts/new-layout/`
2. Add layout component: `layout.tsx`
3. Update enum in `src/config/enums.ts`
4. Register in layout switcher

### Modifying Existing Layout

Edit the layout component:
- `src/layouts/hydrogen/layout.tsx`
- Modify header, sidebar, or overall structure
- Update menu items in `menu-items.tsx`

**See Also**: [02-architecture.md](02-architecture.md#layout-system)
