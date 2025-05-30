import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';



export default defineConfig([
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    ...js.configs.recommended,
    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
