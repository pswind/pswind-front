module.exports = {
  extends: [
    '@pswind/eslint-config',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  parserOptions: {
    project: './tsconfig.json', // Specify path to your tsconfig file
  },
  rules: {
    'react/jsx-uses-react': 'off', // react 17+ doesn't need react imports
    'react/react-in-jsx-scope': 'off', // react 17+ doesn't need react imports
    'eol-last': ['error', 'always'],
  }
}
