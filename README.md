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

## TanStack Query (React Query v5) Setup

This template includes TanStack Query v5.

### Key Features

- ✅ QueryClient default configuration (staleTime, gcTime, etc.)
- ✅ App-wide QueryProvider wrapper
- ✅ React Query Devtools included
- ✅ Example hooks (useQuery, useMutation)
- ✅ Query keys management pattern

### Usage Examples

#### useQuery - Data Fetching

```typescript
import { useUsers, useUser } from '@/hooks/queries/use-example';

function UserList() {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

#### useMutation - Data Mutations

```typescript
import { useCreateUser } from '@/hooks/queries/use-example';

function CreateUserForm() {
  const { mutate, isPending } = useCreateUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      { name: 'John Doe', email: 'john@example.com' },
      {
        onSuccess: () => {
          console.log('User created successfully!');
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <button disabled={isPending}>
        {isPending ? 'Creating...' : 'Create User'}
      </button>
    </form>
  );
}
```

#### Query Keys Management

```typescript
import { queryKeys } from '@/lib/react-query/query-keys';

// All users list
queryClient.invalidateQueries({ queryKey: queryKeys.users.all });

// Specific user
queryClient.invalidateQueries({ queryKey: queryKeys.users.detail(1) });
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
