module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  extends: [
    '@pswind/eslint-config',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/*': ['off'],
      },
    },
    {
      files: [
        '*.spec.ts',
        '*.spec.tsx',
        '*.spec.js',
        '*.spec.jsx',
        '*.test.ts',
        '*.test.tsx',
        '*.test.js',
        '*.test.jsx',
      ],
      rules: {
        '@typescript-eslint/*': 'off',
      },
    },
  ],
  plugins: ['@typescript-eslint', 'jest', 'prettier', 'react'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
  },
  rules: {
    'react/jsx-uses-react': 'off', // react 17+ doesn't need react imports
    'react/react-in-jsx-scope': 'off', // react 17+ doesn't need react imports
    'eol-last': ['error', 'always'],
    'import/no-unresolved': 'off', // todo
    'import/named': 'off',
    'import/extensions': 'off',
  },
};
