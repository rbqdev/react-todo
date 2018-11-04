module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
        "jest/globals": true
    },
    extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme'],
    plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier', 'jest'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    "overrides": [{
        "files": ["*.spec.js"],
        "rules": {
            "no-unused-expressions": 0
        }
    }],
    rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": 0,
        'semi': ['error', 'always'],
        'indent': ["error", 4],
        "id-length": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
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
