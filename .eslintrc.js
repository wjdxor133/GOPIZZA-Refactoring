module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:react/recommended', // eslint-plugin-react에서 추천하는 리액트 린팅 설정
    'plugin:@typescript-eslint/recommended', // @typescript-eslint/recommended의 추천 룰 사용
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'react', '@typescript-eslint', 'react-hooks'], // 해당 플러그인을 사용할것이라고 등록
  env: {
    browser: true,
    es6: true,
    //   jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // jsx 활성화
    },
    ecmaVersion: 2021,
    sourceType: 'module', // import 사용
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/jsx-one-expression-per-line': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
