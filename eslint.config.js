export default [
  {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: [
      '@typescript-eslint',
      'react',
      'react-hooks',
      'prettier'
    ],
    ignorePatterns: ['node_modules/', 'dist/'],
    rules: {
      'prettier/prettier': ['error', {
        singleQuote: true,
        printWidth: 80,
        trailingComma: 'all',
        tabWidth: 4,
        semi: false,
        bracketSpacing: true
      }],
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
      'no-console': ['warn', {allow: ['warn', 'error']}],
      'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.ts', '.tsx']}],
      'import/prefer-default-export': 'off'
    }
  }
]