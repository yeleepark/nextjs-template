# Next.js Template

A simple Next.js + TypeScript template. Comes with ESLint and Prettier pre-configured, and includes a landing page displaying "HI" text. Built on Yarn Berry.

## 📦 Branch Structure

This template provides various environment configurations across different branches. Choose the branch that fits your needs.

### Available Branches

| Branch | Description | Included Technologies |
|--------|-------------|----------------------|
| `main` | Base template | Next.js, TypeScript, ESLint, Prettier |
| `axios` | HTTP client environment | Axios + Interceptors + Error handling |
| `react-query` | Server state management | TanStack Query v5 + Devtools |
| `tailwind` | CSS framework | Tailwind CSS v3 + PostCSS |
| `axios+react-query+tailwind` | Integrated environment | All three above |

### Branch Details

#### `main` Branch
- Minimal configuration base template
- Next.js 14, TypeScript, ESLint, Prettier
- Basic structure for quick project start

#### `axios` Branch
- Axios v1.13.2 based HTTP client
- Automatic token management (localStorage)
- Request/Response interceptor configuration
- Automatic logout on 401 errors
- TypeScript type support API utilities

#### `react-query` Branch
- TanStack Query (React Query) v5
- QueryClient default configuration (staleTime, gcTime, etc.)
- React Query Devtools included
- Example hooks for useQuery and useMutation
- Query keys management pattern

#### `tailwind` Branch
- Tailwind CSS v3.4.1
- PostCSS and Autoprefixer configuration
- Example UI component (Button)
- TypeScript configuration support

#### `axios+react-query+tailwind` Branch
- All three environments integrated
- Production-ready complete environment

## 🚀 Usage

### 1. Clone Repository

```bash
git clone https://github.com/yeleepark/nextjs-template.git
cd nextjs-template
```

### 2. Choose Your Environment

Checkout the branch for your desired environment:

#### Option A: Use Base Template Only (main branch)

```bash
# main branch is already checked out
yarn install
yarn dev
```

#### Option B: Use Specific Environment

```bash
# If you only need Axios
git checkout axios

# If you only need React Query
git checkout react-query

# If you only need Tailwind
git checkout tailwind

# After selecting, install and run
yarn install
yarn dev
```

#### Option C: Use Integrated Environment

```bash
git checkout axios+react-query+tailwind
yarn install
yarn dev
```

### 3. Start a New Project

To start a new project based on a selected branch:

```bash
# Checkout desired branch
git checkout axios+react-query+tailwind

# Remove existing git history and start fresh
rm -rf .git
git init
git add .
git commit -m "feat: Initial project setup"

# Connect to new remote repository
git remote add origin <your-new-repo-url>
git push -u origin main
```

### 4. Environment Variables (when using axios branch)

Create a `.env.local` file and set the API URL:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

## Scripts

- `yarn dev` - Run development server
- `yarn build` - Build for production
- `yarn start` - Run production server
- `yarn lint` - Run ESLint check
- `yarn format` - Run Prettier check
- `yarn format:write` - Auto-format with Prettier

## 💡 Recommended Use Cases

| Project Type | Recommended Branch |
|--------------|-------------------|
| Simple landing page | `main` or `tailwind` |
| Project requiring API integration | `axios` or `axios+react-query+tailwind` |
| Complex server state management needs | `react-query` or `axios+react-query+tailwind` |
| Full-stack web application | `axios+react-query+tailwind` |

## 📚 Learn More

For detailed usage of each branch, refer to the README in that branch:

```bash
# Example: Check axios branch README
git checkout axios
cat README.md
```
