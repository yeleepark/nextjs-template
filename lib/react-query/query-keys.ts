export const queryKeys = {
  users: {
    all: ['users'] as const,
    detail: (id: number) => ['users', id] as const,
  },
  posts: {
    all: ['posts'] as const,
    detail: (id: number) => ['posts', id] as const,
    byUser: (userId: number) => ['posts', 'user', userId] as const,
  },
};

