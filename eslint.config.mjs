import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    languageOptions: { globals: globals.browser },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ],
    ignores: [
      "**/node_modules/",
      ".dist/"
    ],
    rules: {
      "no-unused-vars": "error",
      "semi": "warning",
      "prefer-const": "error",
      "no-unused-expressions": "error",
      "no-console": "warning",
      "no-undef": "error"
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];