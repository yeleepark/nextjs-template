/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: ['next/core-web-vitals'],
  rules: {
    // 허용된 로그만 남기기 위해 일반 console 사용을 금지합니다.
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // 디버거 구문은 배포 전에 반드시 제거하도록 강제합니다.
    'no-debugger': 'error',
    // 불필요한 경고창 사용을 막습니다.
    'no-alert': 'error',
    // 사용하지 않는 변수는 경고하지만, 언더스코어 프리픽스는 의도적 무시로 간주합니다.
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    // 느슨한 비교를 막고 필요한 경우에만 == 사용을 허용합니다.
    eqeqeq: ['error', 'smart'],
    // 항상 중괄호를 사용해 들쭉날쭉한 제어 흐름을 방지합니다.
    curly: ['error', 'all'],
    // 가능한 곳에서는 const를 사용해 불변성을 유지합니다.
    'prefer-const': ['error', { destructuring: 'all' }],
    '@next/next/no-page-custom-font': 'off',
  },
};

module.exports = config;
