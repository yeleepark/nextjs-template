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

## Axios 설정

이 템플릿은 axios 기반 API 클라이언트를 포함하고 있습니다.

### 환경 변수 설정

`.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

### 사용 예제

```typescript
import { exampleApi } from '@/lib/api/services/example';

// GET 요청
const users = await exampleApi.getUsers();

// POST 요청
const newUser = await exampleApi.createUser({
  name: '홍길동',
  email: 'hong@example.com',
});

// PUT 요청
const updatedUser = await exampleApi.updateUser(1, {
  name: '김철수',
});

// DELETE 요청
await exampleApi.deleteUser(1);
```

### API 클라이언트 기능

- ✅ 자동 토큰 관리 (localStorage)
- ✅ 요청/응답 인터셉터
- ✅ 에러 핸들링
- ✅ 401 오류 시 자동 로그아웃
- ✅ TypeScript 타입 지원

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

## Tailwind CSS 설정

이 템플릿은 Tailwind CSS v4를 포함하고 있습니다.

### 주요 기능

- ✅ Tailwind CSS v4.1.17
- ✅ PostCSS 및 Autoprefixer 설정
- ✅ 예제 UI 컴포넌트 (Button)
- ✅ TypeScript 지원

### 사용 예제

#### 유틸리티 클래스 사용

```tsx
export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind!</h1>
    </div>
  );
}
```

#### 커스텀 컴포넌트 사용

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

### Tailwind 설정 커스터마이징

`tailwind.config.ts` 파일에서 테마를 확장할 수 있습니다:

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
