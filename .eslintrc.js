module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme'],
    plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        semi: ['error', 'always'],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.js', '.jsx'],
            },
        ], // airbnb is using .jsx
        'global-require': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    },
};
