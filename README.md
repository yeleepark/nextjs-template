# Next.js Template

간단한 Next.js + TypeScript 템플릿입니다. ESLint와 Prettier가 기본 설정되어 있으며, "HI" 텍스트만 보여주는 랜딩 페이지가 포함되어 있습니다. Yarn Berry 기반으로 동작합니다.

## Scripts

- `yarn dev` - 개발 서버 실행
- `yarn build` - 프로덕션 빌드
- `yarn start` - 프로덕션 서버 실행
- `yarn lint` - ESLint 검사
- `yarn format` - Prettier 검사
- `yarn format:write` - Prettier 자동 정렬

## 시작하기

```bash
yarn install
yarn dev
```

## TanStack Query (React Query v5) 설정

이 템플릿은 TanStack Query v5를 포함하고 있습니다.

### 주요 기능

- ✅ QueryClient 기본 설정 (staleTime, gcTime 등)
- ✅ QueryProvider로 앱 전체 래핑
- ✅ React Query Devtools 포함
- ✅ 예제 hooks (useQuery, useMutation)
- ✅ Query keys 관리 패턴

### 사용 예제

#### useQuery - 데이터 조회

```typescript
import { useUsers, useUser } from '@/hooks/queries/use-example';

function UserList() {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

#### useMutation - 데이터 변경

```typescript
import { useCreateUser } from '@/hooks/queries/use-example';

function CreateUserForm() {
  const { mutate, isPending } = useCreateUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      { name: '홍길동', email: 'hong@example.com' },
      {
        onSuccess: () => {
          console.log('사용자 생성 성공!');
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <button disabled={isPending}>
        {isPending ? '생성 중...' : '사용자 생성'}
      </button>
    </form>
  );
}
```

#### Query Keys 관리

```typescript
import { queryKeys } from '@/lib/react-query/query-keys';

// 모든 사용자 목록
queryClient.invalidateQueries({ queryKey: queryKeys.users.all });

// 특정 사용자
queryClient.invalidateQueries({ queryKey: queryKeys.users.detail(1) });
```
