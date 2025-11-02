# Custom Hooks Reference

Complete reference for all 23+ custom React hooks in Isomorphic admin dashboard.

## Table of Contents

- [Overview](#overview)
- [State & Layout Hooks](#state--layout-hooks)
- [Table & Data Hooks](#table--data-hooks)
- [UI Behavior Hooks](#ui-behavior-hooks)
- [Utility Hooks](#utility-hooks)
- [Form Hooks](#form-hooks)
- [Event Hooks](#event-hooks)
- [Media & Responsive Hooks](#media--responsive-hooks)
- [Usage Patterns](#usage-patterns)

---

## Overview

Isomorphic provides **23+ custom React hooks** located in [src/hooks/](../src/hooks/) for common patterns and functionalities.

### Hook Categories

| Category | Hooks | Purpose |
|----------|-------|---------|
| **State & Layout** | 3 | Layout management, theme, local storage |
| **Table & Data** | 2 | Table state, filtering, pagination |
| **UI Behavior** | 8 | Click outside, hover, measure, scrolling |
| **Utility** | 6 | Clipboard, countdown, query strings |
| **Form** | 2 | Pattern formatting, price handling |
| **Event** | 2 | Event listeners, calendar events |
| **Media** | 3 | Responsive breakpoints, window size |

---

## State & Layout Hooks

### use-layout

**File**: [src/hooks/use-layout.ts](../src/hooks/use-layout.ts)

**Purpose**: Manage and persist layout selection across the application.

**Type Definition**:
```typescript
function useLayout(): {
  layout: LAYOUT_OPTIONS;
  setLayout: (layout: LAYOUT_OPTIONS) => void;
}

enum LAYOUT_OPTIONS {
  HYDROGEN = 'hydrogen',
  HELIUM = 'helium',
  LITHIUM = 'lithium',
  BERYLLIUM = 'beryllium',
}
```

**Usage**:
```typescript
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/config/enums';

function LayoutSwitcher() {
  const { layout, setLayout } = useLayout();

  return (
    <div>
      <p>Current Layout: {layout}</p>
      <button onClick={() => setLayout(LAYOUT_OPTIONS.HELIUM)}>
        Switch to Helium
      </button>
    </div>
  );
}
```

**Features**:
- Persists to localStorage
- Jotai atom-based state
- Returns current layout or HYDROGEN as default

---

### use-theme-color

**File**: [src/hooks/use-theme-color.ts](../src/hooks/use-theme-color.ts)

**Purpose**: Manage theme color presets.

**Type Definition**:
```typescript
function useThemeColor(): {
  themeColor: string;
  setThemeColor: (color: string) => void;
}
```

**Usage**:
```typescript
import { useThemeColor } from '@/hooks/use-theme-color';

function ThemeSelector() {
  const { themeColor, setThemeColor } = useThemeColor();

  return (
    <select
      value={themeColor}
      onChange={(e) => setThemeColor(e.target.value)}
    >
      <option value="primary">Primary</option>
      <option value="secondary">Secondary</option>
      <option value="blue">Blue</option>
    </select>
  );
}
```

**Features**:
- Persists to localStorage
- Updates CSS variables dynamically
- Works with 12+ color presets

---

### use-local-storage

**File**: [src/hooks/use-local-storage.ts](../src/hooks/use-local-storage.ts)

**Purpose**: Sync state with localStorage.

**Type Definition**:
```typescript
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void]
```

**Usage**:
```typescript
import { useLocalStorage } from '@/hooks/use-local-storage';

function UserPreferences() {
  const [preferences, setPreferences] = useLocalStorage('user-prefs', {
    notifications: true,
    theme: 'light',
  });

  return (
    <div>
      <input
        type="checkbox"
        checked={preferences.notifications}
        onChange={(e) =>
          setPreferences({
            ...preferences,
            notifications: e.target.checked,
          })
        }
      />
    </div>
  );
}
```

**Features**:
- Automatic JSON serialization
- SSR-safe
- Syncs across tabs

---

## Table & Data Hooks

### use-table

**File**: [src/hooks/use-table.ts](../src/hooks/use-table.ts)

**Purpose**: Complete table state management with pagination, sorting, filtering, and search.

**Type Definition**:
```typescript
function useTable<T>(
  initialData: T[],
  countPerPage?: number,
  initialFilterState?: Record<string, any>
): {
  // Data
  isLoading: boolean;
  isFiltered: boolean;
  tableData: T[];
  totalItems: number;

  // Pagination
  currentPage: number;
  handlePaginate: (page: number) => void;

  // Sorting
  sortConfig: { key: string | null; direction: 'asc' | 'desc' | null };
  handleSort: (key: string) => void;

  // Row Selection
  selectedRowKeys: string[];
  setSelectedRowKeys: (keys: string[]) => void;
  handleRowSelect: (recordKey: string) => void;
  handleSelectAll: () => void;

  // Search
  searchTerm: string;
  handleSearch: (term: string) => void;

  // Filters
  filters: Record<string, any>;
  updateFilter: (columnId: string, filterValue: string | any[]) => void;
  applyFilters: () => T[];

  // Actions
  handleDelete: (id: string | string[]) => void;
  handleReset: () => void;
}
```

**Usage**:
```typescript
import { useTable } from '@/hooks/use-table';
import { productsData } from '@/data/products-data';

function ProductTable() {
  const table = useTable(productsData, 10);

  return (
    <div>
      {/* Search */}
      <input
        value={table.searchTerm}
        onChange={(e) => table.handleSearch(e.target.value)}
        placeholder="Search..."
      />

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th onClick={() => table.handleSort('name')}>
              Name
            </th>
            <th onClick={() => table.handleSort('price')}>
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {table.tableData.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination
        current={table.currentPage}
        total={table.totalItems}
        pageSize={10}
        onChange={table.handlePaginate}
      />
    </div>
  );
}
```

**Features**:
- Pagination with page size control
- Column sorting (asc/desc)
- Row selection (single & all)
- Global search across all columns
- Column-specific filtering
- Date range filtering
- Price range filtering
- Automatic reset to page 1 on filter/search
- Delete selected rows

**See Also**: [12-data-tables.md](12-data-tables.md)

---

### use-filter-control

**File**: [src/hooks/use-filter-control.ts](../src/hooks/use-filter-control.ts)

**Purpose**: Manage filter state for search and filter pages.

**Type Definition**:
```typescript
function useFilterControl(): {
  filters: Record<string, any>;
  updateFilter: (key: string, value: any) => void;
  resetFilters: () => void;
  applyFilters: () => void;
}
```

**Usage**:
```typescript
import { useFilterControl } from '@/hooks/use-filter-control';

function ProductFilters() {
  const { filters, updateFilter, resetFilters } = useFilterControl();

  return (
    <div>
      <select
        value={filters.category}
        onChange={(e) => updateFilter('category', e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
      </select>

      <button onClick={resetFilters}>Reset</button>
    </div>
  );
}
```

---

## UI Behavior Hooks

### use-click-away

**File**: [src/hooks/use-click-away.ts](../src/hooks/use-click-away.ts)

**Purpose**: Detect clicks outside a component.

**Type Definition**:
```typescript
function useClickAway(
  ref: React.RefObject<HTMLElement>,
  onClickAway: (event: MouseEvent | TouchEvent) => void
): void
```

**Usage**:
```typescript
import { useRef } from 'react';
import { useClickAway } from '@/hooks/use-click-away';

function Dropdown() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <div>Dropdown content</div>}
    </div>
  );
}
```

---

### use-hover

**File**: [src/hooks/use-hover.ts](../src/hooks/use-hover.ts)

**Purpose**: Track hover state of an element.

**Type Definition**:
```typescript
function useHover<T extends HTMLElement = HTMLElement>(): [
  React.RefObject<T>,
  boolean
]
```

**Usage**:
```typescript
import { useHover } from '@/hooks/use-hover';

function HoverCard() {
  const [ref, isHovering] = useHover<HTMLDivElement>();

  return (
    <div ref={ref} className={isHovering ? 'bg-blue-100' : 'bg-white'}>
      {isHovering ? 'Hovering!' : 'Hover me'}
    </div>
  );
}
```

---

### use-measure

**File**: [src/hooks/use-measure.ts](../src/hooks/use-measure.ts)

**Purpose**: Measure element dimensions.

**Type Definition**:
```typescript
function useMeasure(): [
  React.RefObject<HTMLDivElement>,
  { width: number; height: number }
]
```

**Usage**:
```typescript
import { useMeasure } from '@/hooks/use-measure';

function ResponsiveComponent() {
  const [ref, { width, height }] = useMeasure();

  return (
    <div ref={ref}>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}
```

---

### use-element-size

**File**: [src/hooks/use-element-size.ts](../src/hooks/use-element-size.ts)

**Purpose**: Track element size with ResizeObserver.

**Usage**: Similar to use-measure with more precise tracking.

---

### use-window-scroll

**File**: [src/hooks/use-window-scroll.ts](../src/hooks/use-window-scroll.ts)

**Purpose**: Track window scroll position.

**Type Definition**:
```typescript
function useWindowScroll(): {
  x: number;
  y: number;
}
```

**Usage**:
```typescript
import { useWindowScroll } from '@/hooks/use-window-scroll';

function ScrollIndicator() {
  const { y } = useWindowScroll();

  return (
    <div className={y > 100 ? 'visible' : 'hidden'}>
      Scroll to top
    </div>
  );
}
```

---

### use-scrollable-slider

**File**: [src/hooks/use-scrollable-slider.ts](../src/hooks/use-scrollable-slider.ts)

**Purpose**: Create scrollable slider with navigation buttons.

**Usage**: Used in carousel and horizontal scroll components.

---

### use-is-mounted

**File**: [src/hooks/use-is-mounted.ts](../src/hooks/use-is-mounted.ts)

**Purpose**: Check if component is mounted.

**Type Definition**:
```typescript
function useIsMounted(): boolean
```

**Usage**:
```typescript
import { useIsMounted } from '@/hooks/use-is-mounted';

function AsyncComponent() {
  const isMounted = useIsMounted();

  useEffect(() => {
    fetchData().then((data) => {
      if (isMounted) {
        setData(data); // Only update if still mounted
      }
    });
  }, [isMounted]);
}
```

---

### use-direction

**File**: [src/hooks/use-direction.ts](../src/hooks/use-direction.ts)

**Purpose**: Manage LTR/RTL text direction.

**Type Definition**:
```typescript
function useDirection(): {
  direction: 'ltr' | 'rtl';
  setDirection: (dir: 'ltr' | 'rtl') => void;
}
```

**Usage**:
```typescript
import { useDirection } from '@/hooks/use-direction';

function DirectionToggle() {
  const { direction, setDirection } = useDirection();

  return (
    <button onClick={() => setDirection(direction === 'ltr' ? 'rtl' : 'ltr')}>
      Toggle Direction ({direction})
    </button>
  );
}
```

---

## Utility Hooks

### use-copy-to-clipboard

**File**: [src/hooks/use-copy-to-clipboard.ts](../src/hooks/use-copy-to-clipboard.ts)

**Purpose**: Copy text to clipboard with feedback.

**Type Definition**:
```typescript
function useCopyToClipboard(): [
  string | null,
  (text: string) => Promise<boolean>
]
```

**Usage**:
```typescript
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

function CodeBlock({ code }) {
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <div>
      <pre>{code}</pre>
      <button onClick={() => copy(code)}>
        {copiedText === code ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}
```

---

### use-countdown

**File**: [src/hooks/use-countdown.ts](../src/hooks/use-countdown.ts)

**Purpose**: Countdown timer functionality.

**Type Definition**:
```typescript
function useCountdown(targetDate: Date): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}
```

**Usage**:
```typescript
import { useCountdown } from '@/hooks/use-countdown';

function SaleCountdown() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(
    new Date('2025-12-31')
  );

  if (isExpired) {
    return <p>Sale Ended</p>;
  }

  return (
    <div>
      {days}d {hours}h {minutes}m {seconds}s
    </div>
  );
}
```

---

### use-create-query-string

**File**: [src/hooks/use-create-query-string.ts](../src/hooks/use-create-query-string.ts)

**Purpose**: Create and manipulate URL query strings.

**Type Definition**:
```typescript
function useCreateQueryString(): (
  name: string,
  value: string
) => string
```

**Usage**:
```typescript
import { useCreateQueryString } from '@/hooks/use-create-query-string';
import { useRouter, useSearchParams } from 'next/navigation';

function FilterPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const createQueryString = useCreateQueryString();

  const handleCategoryChange = (category: string) => {
    const queryString = createQueryString('category', category);
    router.push(`/products?${queryString}`);
  };
}
```

---

### use-column

**File**: [src/hooks/use-column.ts](../src/hooks/use-column.ts)

**Purpose**: Manage dynamic table columns.

**Usage**: Used for showing/hiding table columns dynamically.

---

## Form Hooks

### use-pattern-format

**File**: [src/hooks/use-pattern-format.ts](../src/hooks/use-pattern-format.ts)

**Purpose**: Format input values with patterns (phone, credit card, etc.).

**Usage**:
```typescript
import { usePatternFormat } from '@/hooks/use-pattern-format';

function PhoneInput() {
  const { value, onChange } = usePatternFormat({
    format: '(###) ###-####',
    mask: '_',
  });

  return <input value={value} onChange={onChange} />;
}
```

---

### use-price

**File**: [src/hooks/use-price.ts](../src/hooks/use-price.ts)

**Purpose**: Format and handle price values.

**Type Definition**:
```typescript
function usePrice(price: number): string
```

**Usage**:
```typescript
import { usePrice } from '@/hooks/use-price';

function ProductPrice({ price }) {
  const formattedPrice = usePrice(price);

  return <span>${formattedPrice}</span>;
}
```

---

## Event Hooks

### use-event-listener

**File**: [src/hooks/use-event-listener.ts](../src/hooks/use-event-listener.ts)

**Purpose**: Attach event listeners safely.

**Type Definition**:
```typescript
function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: HTMLElement | Window
): void
```

**Usage**:
```typescript
import { useEventListener } from '@/hooks/use-event-listener';

function KeyboardShortcuts() {
  useEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  return <div>Press ESC to close</div>;
}
```

---

### use-event-calendar

**File**: [src/hooks/use-event-calendar.ts](../src/hooks/use-event-calendar.ts)

**Purpose**: Manage calendar events state.

**Usage**: Used in the Event Calendar feature for managing events, appointments, and schedules.

**See Also**: [06-features/calendar.md](06-features/calendar.md)

---

## Media & Responsive Hooks

### use-media

**File**: [src/hooks/use-media.ts](../src/hooks/use-media.ts)

**Purpose**: Media query matching (re-exported from react-use).

**Type Definition**:
```typescript
function useMedia(query: string): boolean
```

**Usage**:
```typescript
import { useMedia } from '@/hooks/use-media';

function ResponsiveComponent() {
  const isMobile = useMedia('(max-width: 768px)');
  const isDesktop = useMedia('(min-width: 1024px)');

  return (
    <div>
      {isMobile && <MobileView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}
```

---

### use-window-size

**File**: [src/hooks/use-window-size.ts](../src/hooks/use-window-size.ts)

**Purpose**: Track window dimensions.

**Type Definition**:
```typescript
function useWindowSize(): {
  width: number;
  height: number;
}
```

**Usage**:
```typescript
import { useWindowSize } from '@/hooks/use-window-size';

function WindowDimensions() {
  const { width, height } = useWindowSize();

  return (
    <div>
      Window: {width} x {height}
    </div>
  );
}
```

---

### use-os

**File**: [src/hooks/use-os.ts](../src/hooks/use-os.ts)

**Purpose**: Detect operating system.

**Type Definition**:
```typescript
function useOS(): 'windows' | 'mac' | 'linux' | 'ios' | 'android' | 'unknown'
```

**Usage**:
```typescript
import { useOS } from '@/hooks/use-os';

function OSSpecificContent() {
  const os = useOS();

  return (
    <div>
      {os === 'mac' ? '⌘ + K' : 'Ctrl + K'}
    </div>
  );
}
```

---

## Usage Patterns

### Pattern 1: Combining Multiple Hooks

```typescript
import { useTable } from '@/hooks/use-table';
import { useMedia } from '@/hooks/use-media';
import { useWindowSize } from '@/hooks/use-window-size';

function ResponsiveTable() {
  const isMobile = useMedia('(max-width: 768px)');
  const { width } = useWindowSize();
  const table = useTable(data, isMobile ? 5 : 10);

  // Adjust table based on screen size
  const columns = isMobile ? mobileColumns : desktopColumns;

  return <Table columns={columns} {...table} />;
}
```

### Pattern 2: Custom Hook Composition

```typescript
// Create a custom hook combining multiple hooks
function useProductFilters() {
  const table = useTable(productsData, 12);
  const { filters, updateFilter } = useFilterControl();
  const createQueryString = useCreateQueryString();

  const applyFiltersToURL = () => {
    const queryString = createQueryString('filters', JSON.stringify(filters));
    router.push(`/products?${queryString}`);
  };

  return {
    ...table,
    filters,
    updateFilter,
    applyFiltersToURL,
  };
}
```

### Pattern 3: SSR-Safe Hooks

```typescript
import { useIsMounted } from '@/hooks/use-is-mounted';

function ClientOnlyComponent() {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <Skeleton />; // Server-side fallback
  }

  return <InteractiveContent />; // Client-side only
}
```

---

## Hook Best Practices

### 1. Always Call Hooks at Top Level

```typescript
// ✅ Correct
function MyComponent() {
  const { layout } = useLayout();
  const isMobile = useMedia('(max-width: 768px)');

  return <div>{/* ... */}</div>;
}

// ❌ Wrong
function MyComponent() {
  if (condition) {
    const { layout } = useLayout(); // Don't call conditionally
  }
}
```

### 2. Use TypeScript with Hooks

```typescript
// Define types for custom hooks
interface Product {
  id: string;
  name: string;
  price: number;
}

const table = useTable<Product>(products, 10);
// table.tableData is now typed as Product[]
```

### 3. Memoize Expensive Computations

```typescript
import { useMemo } from 'react';
import { useTable } from '@/hooks/use-table';

function ProductTable() {
  const expensiveData = useMemo(
    () => products.map(transformProduct),
    [products]
  );

  const table = useTable(expensiveData, 10);
}
```

### 4. Clean Up Side Effects

```typescript
import { useEventListener } from '@/hooks/use-event-listener';

function Component() {
  useEventListener('scroll', handleScroll);
  // Automatically cleaned up on unmount
}
```

---

## Quick Reference

### Most Used Hooks

| Hook | Purpose | Common Use Case |
|------|---------|-----------------|
| `use-table` | Table state | Data tables with sorting/filtering |
| `use-layout` | Layout switching | Theme/layout selector |
| `use-media` | Responsive queries | Mobile/desktop detection |
| `use-copy-to-clipboard` | Copy text | Code blocks, share links |
| `use-click-away` | Outside clicks | Dropdown, modal close |
| `use-window-size` | Window dimensions | Responsive calculations |

### Hook Locations

All hooks are in: [src/hooks/](../src/hooks/)

Import pattern:
```typescript
import { useHookName } from '@/hooks/use-hook-name';
```

---

## Related Documentation

- [Components](03-components.md) - UI components using these hooks
- [Data Tables](12-data-tables.md) - use-table in action
- [Styling & Theming](10-styling-theming.md) - Theme hooks
- [Development Guide](15-development-guide.md) - Creating custom hooks

---

**Next**: Learn about [Layouts](05-layouts.md)
