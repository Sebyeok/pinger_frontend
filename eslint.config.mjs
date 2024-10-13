import path from "node:path";
import { fileURLToPath } from "node:url";

import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import _import from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["src/scripts", "**/dist", "**/.eslintrc.cjs"],
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended"
    )
  ),
  {
    plugins: {
      "react-refresh": reactRefresh,
      "react-hooks": fixupPluginRules(reactHooks),
      prettier,
      import: fixupPluginRules(_import),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
    },

    rules: {
      "import/order": [
        "error",
        {
          groups: ["type", "builtin", "external", "internal", "parent", "sibling", "index", "unknown"],

          pathGroups: [
            {
              pattern: "react*",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/*",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@images/*",
              group: "internal",
              position: "after",
            },
          ],

          "newlines-between": "always",
          pathGroupsExcludedImportTypes: [],

          alphabetize: {
            order: "asc",
          },
        },
      ],

      "react-hooks/exhaustive-deps": "off",

      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],

      "react/react-in-jsx-scope": "off",
      "jsx-a11y/media-has-caption": "off",
      "jsx-a11y/alt-text": [0],

      "jsx-a11y/no-redundant-roles": [
        "error",
        {
          nav: ["navigation"],
        },
      ],

      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-noninteractive-element-to-interactive-role": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",

      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          useTabs: false,
          tabWidth: 2,
          singleQuote: false,
        },
      ],
    },
  },
];
