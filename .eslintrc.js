module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    // "/test/**",
    "jest.config.js",
  ],
  plugins: ["prettier", "@typescript-eslint", "import", "eslint-plugin-tsdoc"],
  rules: {
    "import/no-unresolved": 0,
    "no-unused-vars": "off",
    "valid-jsdoc": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {argsIgnorePattern: "^_", varsIgnorePattern: "^_"},
    ],
    "tsdoc/syntax": "warn",
    "import/order": [
      "warn",
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "require-jsdoc": "off",
    "object-curly-spacing": "warn",
    "array-bracket-spacing": "warn",
    "space-in-parens": "warn",
    "new-cap": "off",
  },
};
