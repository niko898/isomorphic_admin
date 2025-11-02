# Component Library Reference

Complete guide to the Isomorphic component library, built on RizzUI with custom extensions.

## Table of Contents

- [Overview](#overview)
- [Component Architecture](#component-architecture)
- [UI Components](#ui-components)
- [Chart Components](#chart-components)
- [Card Components](#card-components)
- [Table Components](#table-components)
- [Icon Components](#icon-components)
- [Usage Patterns](#usage-patterns)
- [RizzUI Documentation](#rizzui-documentation)

---

## Overview

Isomorphic provides **57+ UI components** built on the **RizzUI** component library (v0.7.0). Components are organized into categories and follow consistent patterns for styling, typing, and composition.

### Component Categories

| Category | Count | Purpose |
|----------|-------|---------|
| **UI Components** | 52 | Core interactive elements |
| **Chart Components** | 8+ | Data visualization |
| **Card Components** | 15+ | Content containers |
| **Table Components** | 5+ | Data tables |
| **Icon Components** | 173 | SVG icons |

### Key Features

- ✅ **TypeScript Support** - Full type definitions
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Dark Mode** - Built-in dark theme support
- ✅ **Responsive** - Mobile-first design
- ✅ **Accessible** - ARIA compliant
- ✅ **Customizable** - Style overrides via className
- ✅ **Server & Client** - Works with Next.js App Router

---

## Component Architecture

### RizzUI Wrapper Pattern

All UI components are re-exported from RizzUI with the `'use client'` directive:

```typescript
// src/components/ui/button.tsx
'use client';

export { Button, type ButtonProps } from 'rizzui';
```

**Benefits**:
1. Centralized imports (`@/components/ui/button`)
2. Easy to extend or customize in the future
3. Client component boundaries clearly defined
4. Consistent API across the project

### Import Pattern

```typescript
// Import from project
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal';

// NOT from rizzui directly
// ❌ import { Button } from 'rizzui';
```

### Component Structure

```
src/components/
├── ui/                    # UI components (RizzUI wrappers)
│   ├── button.tsx         # Button component
│   ├── input.tsx          # Input component
│   └── ...                # 50+ more components
│
├── charts/                # Chart components
│   ├── area-chart.tsx
│   ├── bar-chart.tsx
│   └── ...
│
├── cards/                 # Card components
│   ├── metric-card.tsx
│   ├── widget-card.tsx
│   └── ...
│
├── controlled-table/      # Advanced table system
│   ├── index.tsx
│   ├── table-header.tsx
│   └── ...
│
└── icons/                 # Icon components
    ├── icon-list.tsx      # 173 icons
    └── ...
```

---

## UI Components

Complete list of all 52 UI components available in [src/components/ui/](../src/components/ui/):

### Form Components

| Component | File | Purpose |
|-----------|------|---------|
| **Input** | `input.tsx` | Text input field |
| **Textarea** | `textarea.tsx` | Multi-line text input |
| **Checkbox** | `checkbox.tsx` | Single checkbox |
| **CheckboxGroup** | `checkbox-group.tsx` | Multiple checkboxes |
| **Radio** | `radio.tsx` | Single radio button |
| **RadioGroup** | `radio-group.tsx` | Radio button group |
| **Switch** | `switch.tsx` | Toggle switch |
| **Select** | `select.tsx` | Dropdown select |
| **NativeSelect** | `native-select.tsx` | Native HTML select |
| **NumberInput** | `number-input.tsx` | Numeric input with +/- |
| **Password** | `password.tsx` | Password input with toggle |
| **PhoneInput** | `phone-input.tsx` | Phone number input |
| **PinCode** | `pin-code.tsx` | PIN/OTP code input |
| **FileInput** | `file-input.tsx` | File upload input |
| **Upload** | `upload.tsx` | Advanced file upload |
| **Datepicker** | `datepicker.tsx` | Date picker |
| **RangeSlider** | `range-slider.tsx` | Range slider |
| **Rate** | `rate.tsx` | Star rating |
| **QuillEditor** | `quill-editor.tsx` | Rich text editor |
| **AdvancedCheckbox** | `advanced-checkbox.tsx` | Checkbox with label & description |
| **AdvancedRadio** | `advanced-radio.tsx` | Radio with label & description |
| **Form** | `form.tsx` | Form wrapper component |
| **FieldError** | `field-error.tsx` | Form error message |

#### Example Usage

```typescript
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';

function MyForm() {
  return (
    <form>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        className="mb-4"
      />

      <Select
        label="Category"
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ]}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### Interactive Components

| Component | File | Purpose |
|-----------|------|---------|
| **Button** | `button.tsx` | Clickable button |
| **ActionIcon** | `action-icon.tsx` | Icon-only button |
| **Dropdown** | `dropdown .tsx` | Dropdown menu |
| **Popover** | `popover.tsx` | Popover overlay |
| **Tooltip** | `tooltip.tsx` | Hover tooltip |
| **Modal** | `modal.tsx` | Modal dialog |
| **Drawer** | `drawer.tsx` | Side drawer |
| **Collapse** | `collapse.tsx` | Collapsible content |
| **Tabs** | `tabs.tsx` | Tab navigation |

#### Example Usage

```typescript
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { useState } from 'react';

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-6">
          <h2 className="text-lg font-semibold">Modal Title</h2>
          <p>Modal content goes here</p>
        </div>
      </Modal>
    </>
  );
}
```

### Display Components

| Component | File | Purpose |
|-----------|------|---------|
| **Text** | `text.tsx` | Typography component |
| **Badge** | `badge.tsx` | Status badge |
| **Tag** | `tag.tsx` | Tag/chip component |
| **Avatar** | `avatar.tsx` | User avatar |
| **AvatarCard** | `avatar-card.tsx` | Avatar with text |
| **Alert** | `alert.tsx` | Alert message |
| **Announcement** | `announcement.tsx` | Announcement banner |
| **Empty** | `empty.tsx` | Empty state |
| **Skeleton** | `skeleton.tsx` | Loading skeleton |
| **Spinner** | `spinner.tsx` | Loading spinner |
| **Loader** | `loader.tsx` | Page loader |
| **Progressbar** | `progressbar.tsx` | Progress bar |
| **Table** | `table.tsx` | Basic table |
| **Stepper** | `stepper.tsx` | Step indicator |
| **CountDown** | `count-down.tsx` | Countdown timer |
| **DateCell** | `date-cell.tsx` | Formatted date cell |

#### Example Usage

```typescript
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';

function ProfileCard({ loading }) {
  if (loading) {
    return <Skeleton className="h-20 w-full" />;
  }

  return (
    <div className="flex items-center gap-3">
      <Avatar src="/avatar.jpg" name="John Doe" />
      <div>
        <h3>John Doe</h3>
        <Badge variant="success">Active</Badge>
      </div>
    </div>
  );
}
```

### Navigation Components

| Component | File | Purpose |
|-----------|------|---------|
| **Breadcrumb** | `breadcrumb.tsx` | Breadcrumb navigation |
| **Pagination** | `pagination.tsx` | Pagination controls |

### Utility Components

| Component | File | Purpose |
|-----------|------|---------|
| **Simplebar** | `simplebar.tsx` | Custom scrollbar |
| **Transition** | `transition.tsx` | Transition animations |
| **SocialShares** | `social-shares.tsx` | Social media share buttons |

---

## Chart Components

Located in [src/components/charts/](../src/components/charts/):

| Component | Purpose | Library |
|-----------|---------|---------|
| **AreaChart** | Area/line charts | Recharts |
| **BarChart** | Bar charts | Recharts |
| **RadarChart** | Radar charts | Recharts |
| **PieChart** | Pie/donut charts | Recharts |
| **LineChart** | Line charts | Recharts |
| **CustomTooltip** | Chart tooltips | Recharts |
| **CustomLegend** | Chart legends | Recharts |

### Example Usage

```typescript
import AreaChart from '@/components/charts/area-chart';

const data = [
  { name: 'Jan', sales: 4000, profit: 2400 },
  { name: 'Feb', sales: 3000, profit: 1398 },
  // ... more data
];

function Dashboard() {
  return (
    <AreaChart
      data={data}
      dataKey="sales"
      xAxisKey="name"
      className="h-80"
    />
  );
}
```

**Documentation**: See [Recharts Docs](https://recharts.org/)

---

## Card Components

Located in [src/components/cards/](../src/components/cards/):

### Card Types

| Component | Purpose |
|-----------|---------|
| **MetricCard** | KPI/metric display |
| **WidgetCard** | General widget container |
| **ProductCard** | E-commerce product card |
| **ReviewCard** | Customer review card |
| **ListingCard** | Real estate listing card |
| **NFTCard** | NFT artwork card |
| **FileCard** | File/document card |
| **StatCard** | Statistics card |
| **TransactionCard** | Transaction history card |

### Example Usage

```typescript
import MetricCard from '@/components/cards/metric-card';

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MetricCard
        title="Total Revenue"
        value="$45,231"
        growth={12.5}
        icon={<DollarIcon />}
      />
      <MetricCard
        title="Total Users"
        value="8,282"
        growth={-3.2}
        icon={<UsersIcon />}
      />
    </div>
  );
}
```

---

## Table Components

Located in [src/components/controlled-table/](../src/components/controlled-table/):

### Advanced Table System

The controlled table system provides a complete solution for data tables with sorting, filtering, and pagination.

| Component | Purpose |
|-----------|---------|
| **ControlledTable** | Main table component |
| **TableHeader** | Table header with actions |
| **TablePagination** | Pagination controls |
| **TableFilter** | Filter controls |
| **TableFooter** | Table footer |

### Example Usage

```typescript
import { ControlledTable } from '@/components/controlled-table';
import { useTable } from '@/hooks/use-table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

function UsersTable() {
  const table = useTable(users, 10);

  return (
    <ControlledTable
      columns={columns}
      data={table.currentData}
      isLoading={false}
      pagination={table.pagination}
      onPaginate={table.handlePaginate}
    />
  );
}
```

**See Also**: [12-data-tables.md](12-data-tables.md)

---

## Icon Components

Located in [src/components/icons/](../src/components/icons/):

### Icon System

Isomorphic includes **173 custom SVG icons** from the `react-icons/pi` (Phosphor Icons) library.

**Icon List**: [src/components/icons/icon-list.tsx](../src/components/icons/icon-list.tsx)

### Available Icon Categories

- General UI icons
- File type icons
- Social media icons
- E-commerce icons
- Navigation icons
- Status icons
- And many more...

### Example Usage

```typescript
import { PiUser, PiEnvelope, PiLock } from 'react-icons/pi';

function IconExample() {
  return (
    <div className="flex gap-4">
      <PiUser className="h-6 w-6" />
      <PiEnvelope className="h-6 w-6 text-primary" />
      <PiLock className="h-6 w-6 text-gray-500" />
    </div>
  );
}
```

**Full Icon Reference**: Visit `/widgets/icons` in the running app

---

## Usage Patterns

### Common Component Props

Most components support these common props:

```typescript
interface CommonProps {
  className?: string;        // Tailwind classes
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}
```

### Variant Pattern

Many components support variants:

```typescript
<Button variant="solid">Solid Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="flat">Flat Button</Button>
<Button variant="text">Text Button</Button>
```

### Size Pattern

Components often support multiple sizes:

```typescript
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

### Color Pattern

Color variants typically include:

```typescript
<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="success">Success</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="danger">Danger</Badge>
<Badge color="info">Info</Badge>
```

### Rounded Pattern

Border radius options:

```typescript
<Button rounded="none">No Radius</Button>
<Button rounded="sm">Small</Button>
<Button rounded="md">Medium</Button>
<Button rounded="lg">Large</Button>
<Button rounded="full">Pill</Button>
```

### Custom Styling

Override styles with `className`:

```typescript
import { cn } from '@/utils/class-names';

<Button className={cn(
  'custom-class',
  'hover:bg-blue-600',
  isActive && 'bg-primary'
)}>
  Custom Styled Button
</Button>
```

---

## Form Integration

### With React Hook Form

```typescript
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function MyForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email')}
        label="Email"
        type="email"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

**See Also**: [08-forms-validation.md](08-forms-validation.md)

---

## Responsive Design

All components are mobile-first responsive:

```typescript
<div className="
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-4
">
  <Card />
  <Card />
  <Card />
</div>
```

---

## Dark Mode Support

Components automatically adapt to dark mode:

```typescript
// Dark mode is controlled via next-themes
// Components automatically use dark: variants

<div className="
  bg-white
  dark:bg-gray-900
  text-gray-900
  dark:text-gray-100
">
  Content
</div>
```

**See Also**: [10-styling-theming.md](10-styling-theming.md)

---

## RizzUI Documentation

### Official Resources

For detailed component APIs and advanced usage:

**RizzUI Official Docs**: https://rizzui.com/

### Key RizzUI Features

1. **Headless UI Foundation** - Built on @headlessui/react
2. **Tailwind CSS** - Fully styled with Tailwind
3. **TypeScript** - Complete type definitions
4. **Accessible** - WCAG compliant
5. **Customizable** - Override any styles
6. **Tree-shakeable** - Import only what you need

### RizzUI Component Categories

RizzUI provides these component families:
- **Forms** - Input, Select, Checkbox, Radio, etc.
- **Overlays** - Modal, Drawer, Popover, Tooltip
- **Navigation** - Tabs, Breadcrumb, Pagination
- **Feedback** - Alert, Spinner, Progress
- **Data Display** - Table, Badge, Avatar
- **Layout** - Container, Grid (via Tailwind)

---

## Component Development Best Practices

### 1. Always Import from Project

```typescript
// ✅ Correct
import { Button } from '@/components/ui/button';

// ❌ Wrong
import { Button } from 'rizzui';
```

### 2. Use TypeScript Types

```typescript
import { Button, type ButtonProps } from '@/components/ui/button';

interface MyButtonProps extends ButtonProps {
  customProp?: string;
}
```

### 3. Extend Components When Needed

```typescript
// Create a custom button variant
import { Button, type ButtonProps } from '@/components/ui/button';

export function PrimaryButton(props: ButtonProps) {
  return (
    <Button
      variant="solid"
      color="primary"
      className="font-semibold"
      {...props}
    />
  );
}
```

### 4. Compose Complex Components

```typescript
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function UserEditModal({ user, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h2 className="text-xl mb-4">Edit User</h2>
        <Input label="Name" defaultValue={user.name} />
        <Input label="Email" defaultValue={user.email} />
        <div className="flex gap-2 mt-4">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
}
```

### 5. Use Proper Loading States

```typescript
import { Spinner } from '@/components/ui/spinner';
import { Skeleton } from '@/components/ui/skeleton';

function DataComponent({ loading, data }) {
  if (loading) {
    return <Skeleton className="h-20" />;
  }

  return <div>{data}</div>;
}
```

---

## Quick Reference

### Most Used Components

| Component | Import | Common Props |
|-----------|--------|--------------|
| Button | `@/components/ui/button` | `variant`, `size`, `onClick` |
| Input | `@/components/ui/input` | `label`, `type`, `placeholder` |
| Select | `@/components/ui/select` | `options`, `label`, `value` |
| Modal | `@/components/ui/modal` | `isOpen`, `onClose` |
| Badge | `@/components/ui/badge` | `color`, `variant` |
| Avatar | `@/components/ui/avatar` | `src`, `name` |
| Tooltip | `@/components/ui/tooltip` | `content` |

### Component File Locations

```
src/components/
├── ui/                    # All UI components
├── charts/                # Chart components
├── cards/                 # Card components
├── controlled-table/      # Table system
└── icons/                 # Icon components
```

---

## Related Documentation

- [Getting Started](01-getting-started.md) - Setup guide
- [Architecture](02-architecture.md) - Component architecture
- [Forms & Validation](08-forms-validation.md) - Form patterns
- [Data Tables](12-data-tables.md) - Table usage
- [Styling & Theming](10-styling-theming.md) - Customization

---

**Next**: Explore [Custom Hooks](04-hooks.md)
