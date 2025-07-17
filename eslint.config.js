import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
          ignoreRestSiblings: true,
        },
      ],

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['enum'],
          format: ['UPPER_CASE'],
          suffix: ['_ENUM'],
        },
        {
          selector: ['enumMember'],
          format: ['UPPER_CASE'],
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'variable',
          types: ['boolean'],
          prefix: ['is', 'should', 'has', 'IS'],
          format: null,
        },
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'parameter',

          filter: {
            regex: '^_+$',
            match: true,
          },

          format: null,
        },
        {
          selector: 'parameter',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'objectLiteralProperty',

          filter: {
            regex: '^__typename|__html|aria-.+$',
            match: true,
          },

          format: null,
        },
        {
          selector: 'objectLiteralProperty',

          filter: {
            regex: '^[0-9]+$',
            match: true,
          },

          format: null,
        },
        {
          selector: 'interface',
          format: ['PascalCase'],

          custom: {
            regex: '^I[A-Z][A-Za-z]*Props$|^I[A-Z][A-Za-z]*$',
            match: true,
          },
        },
      ],
    },
  },
)
