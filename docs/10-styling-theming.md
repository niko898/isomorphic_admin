# Styling & Theming

Complete guide to styling with Tailwind CSS and theme customization.

## Tech Stack

- **Tailwind CSS 3.3.5** - Utility-first CSS
- **next-themes 0.2.1** - Dark/light mode
- **CSS Variables** - Dynamic theming

## Color System

### CSS Variables

Colors are defined as RGB values:

```css
:root {
  --primary-default: 59 130 246;
  --gray-900: 17 24 39;
}
```

### Usage

```typescript
<div className="bg-primary text-gray-900">
  Content
</div>

// With opacity
<div className="bg-primary/50">
  50% opacity
</div>
```

## Theme Colors

### 12+ Color Presets

Available themes:
- Default (Blue)
- Orange
- Red
- Green
- Black
- Purple
- And more...

### Switching Themes

```typescript
import { useThemeColor } from '@/hooks/use-theme-color';

function ThemeSelector() {
  const { themeColor, setThemeColor } = useThemeColor();

  return (
    <select value={themeColor} onChange={(e) => setThemeColor(e.target.value)}>
      <option value="primary">Primary</option>
      <option value="orange">Orange</option>
    </select>
  );
}
```

## Dark Mode

### Using next-themes

```typescript
import { useTheme } from 'next-themes';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  );
}
```

### Dark Mode Classes

```typescript
<div className="
  bg-white dark:bg-gray-900
  text-gray-900 dark:text-gray-100
">
  Adapts to theme
</div>
```

## Responsive Design

### Breakpoints

```typescript
// tailwind.config.ts
screens: {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
  '4xl': '2560px',
}
```

### Usage

```typescript
<div className="
  text-sm md:text-base lg:text-lg
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
  Responsive content
</div>
```

## Custom Animations

### Available Animations

```typescript
// tailwind.config.ts
animation: {
  blink: 'blink 1.4s infinite both',
  'scale-up': 'scaleUp 500ms infinite alternate',
  'spin-slow': 'spin 4s linear infinite',
  skeleton: 'skeletonWave 1.6s linear 0.5s infinite',
}
```

### Usage

```typescript
<div className="animate-spin-slow">
  Slow spinning
</div>

<div className="animate-skeleton bg-skeleton">
  Loading skeleton
</div>
```

## Utility Functions

### Class Name Merging

```typescript
import { cn } from '@/utils/class-names';

<Button
  className={cn(
    'base-class',
    isActive && 'active-class',
    className
  )}
/>
```

## Customization

### Tailwind Config

Edit [tailwind.config.ts](../tailwind.config.ts):

```typescript
export default {
  theme: {
    extend: {
      colors: {
        brand: '#your-color',
      },
    },
  },
};
```

**See Also**: [Tailwind Docs](https://tailwindcss.com/)
