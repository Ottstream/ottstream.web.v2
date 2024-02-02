module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'airbnb/base',
        'airbnb-typescript/base',
        "plugin:@tanstack/eslint-plugin-query/recommended",
        'eslint:recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: './',
    },
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],['Assets', './src/assets'],
                ],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            },
        },
    },
    plugins: ['react-refresh', 'prettier', '@typescript-eslint', 'react-hooks', 'import'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-shadow': 'off',
        "@tanstack/query/exhaustive-deps": "error",
        "@tanstack/query/no-rest-destructuring": "warn",
        "@tanstack/query/stable-query-client": "error",
        'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
        'import/order': [
            'error',
            {
                groups: [
                    ['external', 'builtin'],
                    'internal',
                    ['sibling', 'parent'],
                    'index',
                ],
                pathGroups: [
                    {
                        pattern: '@(react)',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@src/**',
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ['internal', 'react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                'no-bitwise': 'off',
            },
        },
    ],
}
