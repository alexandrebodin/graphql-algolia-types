module.exports = {
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "parser": "flow"
    }]
  }
};
