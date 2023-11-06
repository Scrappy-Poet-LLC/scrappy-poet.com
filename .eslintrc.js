module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: "@babel/eslint-parser", // uses Babel eslint transforms
  settings: {
    react: {
      "version": "detect", // detect react version
    },
  },
  env: {
    node: true, // defines things like process.env when generating through node
  },
  extends: [
    "eslint:recommended", // use recommended configs
    "plugin:react/recommended",
  ],
  rules: {
    // Required and defined by Gatsby,
    // "no-anonymous-exports-page-templates": "warn",
    // "limited-exports-page-templates": "warn",

    // NOTE(dabrady) Would love to find a way to make ESLint aware of the Theme UI API.
    "react/no-unknown-property": ['error', { ignore: ['sx'] }],
  },
};
