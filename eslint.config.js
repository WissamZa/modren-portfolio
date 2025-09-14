import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        // Add any global variables your app uses (e.g., VITE_*, process)
        // process: 'readonly',
        // __APP_VERSION__: 'readonly',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // ✅ IMPORTANT: Allow unused vars starting with underscore
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',       // Ignore function parameters like _err, _onDrag
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_', // Ignore caught errors like catch (_err)
          vars: 'all',
          varsIgnorePattern: '^_',        // Ignore variable declarations like const _err = ...
          ignoreRestSiblings: true,
        },
      ],
    },
  }
);