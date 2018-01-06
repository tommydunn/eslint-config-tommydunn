tommydunns# eslint-config-tommydunn

## Usage

Install the conventions by running:

```
npm install --save-dev eslint eslint-config-tommydunns
```

Then add the extends to your `.eslintrc`:

```javascript
{
  "extends": "tommydunns",
  "rules": {
    // your overrides
  }
}
```

### Other configs

This config also exposes a few other configs that I use often and pull in as needed.

You can use them standalone:

```javascript
{
  "extends": "tommydunns/<config-name>"
}
```

Or in combination with the base config (recommended)

```javascript
{
  "extends": ["tommydunns", "tommydunns/<config-name>"]
}
```

**Note**: I'm not certain why, but sometimes you need to have the associated plugins
installed to make things work. I recommend adding them as dependencies to your project
if you're going to use the config for it.

- `babel-module`: [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) for the import plugin to work with the module-resolver babel plugin (_eslint-plugin-import_ and _eslint-import-resolver-babel-module_)
- `babel-react-require`: [babel-plugin-react-require](https://www.npmjs.com/package/babel-plugin-react-require) for when you're using the react-require babel plugin (should be used with `"tommydunns/react"` as well) (_eslint-plugin-react_)
- `jest`: [jest](http://facebook.github.io/jest/) testing framework
- `jsx-a11y`: [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) for rules regarding accessibility with JSX (_eslint-plugin-jsx-a11y_)
- `react`: [React](https://www.npmjs.com/package/react) JS library  (_eslint-plugin-react_)
- `webpack`: [Webpack](https://npmjs.com/package/webpack) for the import plugin to work with webpack overloaded imports/requires (_eslint-plugin-import_ and _eslint-import-resolver-webpack_)

### Things to know

- The default config uses `babel-eslint` to support stage features that ESLint doesn't support and it opts to use the `eslint-plugin-babel` rules over the ESLint rules to support rules for these features as well.
- All plugins needed for rules used by these configs are dependencies of this module so you don't have to install anything on your own.
- The default config actually is composed of several configurations and you can use those individually. These are the configs it's using: `possible-errors.js`, `best-practices.js`, `stylistic.js`, `es6/index.js`, and `import/index.js`. You can use each of these configs yourself if you want to leave my own personal style out of it. Also, the `es6` and `import` configs each have a `possible-errors.js`, `best-practices.js`, and `stylistic.js` which they are composed of as well.

#### Example of highly customized config

```javascript
{
  "extends": [
    "tommydunn/possible-errors", "tommydunn/best-practices",
    "tommydunn/es6/possible-errors", "tommydunn/import",
    "tommydunn/jest"
  ],
  "rules": { /* custom rules */ }
}
```

## LICENSE

MIT
