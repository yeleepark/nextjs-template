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

## Tailwind CSS 설정

이 템플릿은 Tailwind CSS v3를 포함하고 있습니다.

### 주요 기능

- ✅ Tailwind CSS v3.4.1
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
