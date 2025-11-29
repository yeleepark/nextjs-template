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

## Axios Setup

This template includes an axios-based API client.

### Environment Variables

Create a `.env.local` file and set the following variable:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

### Usage Example

```typescript
import { exampleApi } from '@/lib/api/services/example';

// GET request
const users = await exampleApi.getUsers();

// POST request
const newUser = await exampleApi.createUser({
  name: 'John Doe',
  email: 'john@example.com',
});

// PUT request
const updatedUser = await exampleApi.updateUser(1, {
  name: 'Jane Smith',
});

// DELETE request
await exampleApi.deleteUser(1);
```

### API Client Features

- ✅ Automatic token management (localStorage)
- ✅ Request/Response interceptors
- ✅ Error handling
- ✅ Automatic logout on 401 errors
- ✅ TypeScript type support
