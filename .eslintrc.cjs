module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     es2020: true,
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:react-hooks/recommended",
//     "plugin:react/recommended",
//     "react-app/jest",
//   ],
//   ignorePatterns: ["dist", ".eslintrc.cjs"],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaVersion: 12, // or 2020
//     sourceType: "module",
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   plugins: ["react-refresh"],
//   rules: {
//     "react-refresh/only-export-components": [
//       "warn",
//       { allowConstantExport: true },
//     ],
//   },
//   settings: {
//     react: {
//       version: "detect", // Detect React version
//     },
//   },
// };
