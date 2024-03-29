module.exports = {
  extends: ['prettier/react'],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    'react/display-name': [2, {ignoreTranspilerName: false}],
    'react/forbid-component-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-filename-extension': [2, {extensions: ['.js']}],
    'react/jsx-handler-names': 0,
    'react/jsx-key': 2,
    'react/jsx-no-bind': 0,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-array-index-key': 'off',
    'react/no-children-prop': 'off',
    'react/no-danger': 0,
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 0,
    'react/no-render-return-value': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 2,
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 2,
    'react/no-unused-prop-types': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 0,
    'react/prefer-stateless-function': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-default-props': 'off',
    'react/require-optimization': 0,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 0,
    'react/sort-prop-types': 0,
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
  },
}
