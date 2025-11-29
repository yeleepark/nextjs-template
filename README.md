# Next.js Template

A simple Next.js + TypeScript template. Comes with ESLint and Prettier pre-configured, and includes a landing page displaying "HI" text. Built on Yarn Berry.

## Scripts

- `yarn dev` - Run development server
- `yarn build` - Build for production
- `yarn start` - Run production server
- `yarn lint` - Run ESLint check
- `yarn format` - Run Prettier check
- `yarn format:write` - Auto-format with Prettier

## Getting Started

```bash
yarn install
yarn dev
```

## Tailwind CSS Setup

This template includes Tailwind CSS v3.

### Key Features

- ✅ Tailwind CSS v3.4.1
- ✅ PostCSS and Autoprefixer configuration
- ✅ Example UI component (Button)
- ✅ TypeScript support

### Usage Examples

#### Using Utility Classes

```tsx
export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind!</h1>
    </div>
  );
}
```

#### Using Custom Components

```tsx
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className="space-y-4 p-8">
      <Button variant="primary" size="md">
        Primary Button
      </Button>
      <Button variant="secondary" size="lg">
        Secondary Button
      </Button>
      <Button variant="outline" size="sm">
        Outline Button
      </Button>
    </div>
  );
}
```

### Customizing Tailwind Configuration

You can extend the theme in the `tailwind.config.ts` file:

```typescript
theme: {
  extend: {
    colors: {
      brand: {
        50: '#f0f9ff',
        500: '#0ea5e9',
        900: '#0c4a6e',
      },
    },
  },
}
```
