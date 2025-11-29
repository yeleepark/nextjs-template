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
