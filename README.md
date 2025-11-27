# Next.js Template

간단한 Next.js + TypeScript 템플릿입니다. ESLint와 Prettier가 기본 설정되어 있으며, "HI" 텍스트만 보여주는 랜딩 페이지가 포함되어 있습니다. Yarn Berry 기반으로 동작합니다.

## 📦 브랜치 구조

이 템플릿은 다양한 환경 설정을 브랜치별로 제공합니다. 필요한 환경에 따라 원하는 브랜치를 선택하여 사용할 수 있습니다.

### 사용 가능한 브랜치

| 브랜치 | 설명 | 포함 기술 |
|--------|------|-----------|
| `main` | 기본 템플릿 | Next.js, TypeScript, ESLint, Prettier |
| `axios` | HTTP 클라이언트 환경 | Axios + 인터셉터 + 에러 핸들링 |
| `react-query` | 서버 상태 관리 환경 | TanStack Query v5 + Devtools |
| `tailwind` | CSS 프레임워크 환경 | Tailwind CSS v4 + PostCSS |
| `axios+react-query+tailwind` | 통합 환경 | 위 세 가지 모두 포함 |

### 각 브랜치 상세 설명

#### `main` 브랜치
- 최소한의 설정만 포함된 기본 템플릿
- Next.js 14, TypeScript, ESLint, Prettier
- 빠른 프로젝트 시작을 위한 기본 구조

#### `axios` 브랜치
- Axios v1.13.2 기반 HTTP 클라이언트
- 자동 토큰 관리 (localStorage)
- 요청/응답 인터셉터 설정
- 401 오류 시 자동 로그아웃
- TypeScript 타입 지원 API 유틸리티

#### `react-query` 브랜치
- TanStack Query (React Query) v5
- QueryClient 기본 설정 (staleTime, gcTime 등)
- React Query Devtools 포함
- useQuery, useMutation 예제 hooks
- Query keys 관리 패턴

#### `tailwind` 브랜치
- Tailwind CSS v4.1.17
- PostCSS 및 Autoprefixer 설정
- 예제 UI 컴포넌트 (Button)
- TypeScript 지원 설정 파일

#### `axios+react-query+tailwind` 브랜치
- 위 세 가지 환경 모두 통합
- 실무 프로젝트에 바로 사용 가능한 완전한 환경

## 🚀 사용 방법

### 1. 저장소 클론

```bash
git clone https://github.com/yeleepark/nextjs-template.git
cd nextjs-template
```

### 2. 필요한 환경 선택

원하는 환경의 브랜치를 체크아웃합니다:

#### 옵션 A: 기본 템플릿만 사용 (main 브랜치)

```bash
# main 브랜치는 이미 체크아웃되어 있습니다
yarn install
yarn dev
```

#### 옵션 B: 특정 환경 하나만 사용

```bash
# Axios만 필요한 경우
git checkout axios

# React Query만 필요한 경우
git checkout react-query

# Tailwind만 필요한 경우
git checkout tailwind

# 선택한 후 설치 및 실행
yarn install
yarn dev
```

#### 옵션 C: 모든 환경 통합 버전 사용

```bash
git checkout axios+react-query+tailwind
yarn install
yarn dev
```

### 3. 새 프로젝트로 시작하기

선택한 브랜치를 기반으로 새 프로젝트를 시작하려면:

```bash
# 원하는 브랜치 체크아웃
git checkout axios+react-query+tailwind

# 기존 git 히스토리 제거하고 새로 시작
rm -rf .git
git init
git add .
git commit -m "feat: 초기 프로젝트 설정"

# 새 원격 저장소에 연결
git remote add origin <your-new-repo-url>
git push -u origin main
```

### 4. 환경 변수 설정 (axios 브랜치 사용 시)

`.env.local` 파일을 생성하고 API URL을 설정하세요:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

## Scripts

- `yarn dev` - 개발 서버 실행
- `yarn build` - 프로덕션 빌드
- `yarn start` - 프로덕션 서버 실행
- `yarn lint` - ESLint 검사
- `yarn format` - Prettier 검사
- `yarn format:write` - Prettier 자동 정렬

## 💡 추천 사용 사례

| 프로젝트 유형 | 추천 브랜치 |
|--------------|------------|
| 간단한 랜딩 페이지 | `main` 또는 `tailwind` |
| API 연동이 필요한 프로젝트 | `axios` 또는 `axios+react-query+tailwind` |
| 복잡한 서버 상태 관리가 필요한 경우 | `react-query` 또는 `axios+react-query+tailwind` |
| 풀스택 웹 애플리케이션 | `axios+react-query+tailwind` |

## 📚 더 알아보기

각 브랜치의 상세 사용법은 해당 브랜치의 README를 참고하세요:

```bash
# 예: axios 브랜치의 README 확인
git checkout axios
cat README.md
```
