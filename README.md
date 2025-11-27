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
