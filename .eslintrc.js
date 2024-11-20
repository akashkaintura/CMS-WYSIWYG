module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prisma'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
            },
        ],
        '@typescript-eslint/no-unused-expressions': 'off',
    },
};
