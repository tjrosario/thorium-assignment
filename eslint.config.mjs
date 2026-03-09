import nextPlugin from "@next/eslint-plugin-next";
import perfectionist from "eslint-plugin-perfectionist";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
      perfectionist,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...perfectionist.configs["recommended-natural"].rules,

      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
          groups: [
            "react",
            "next",
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "side-effect",
            "unknown",
          ],
          customGroups: [
            {
              groupName: "react",
              elementNamePattern: "^react(-.+)?$",
            },
            {
              groupName: "next",
              elementNamePattern: "^next(/.+)?$",
            },
          ],
        },
      ],
    },
  },
  {
    ignores: [".next/*", "node_modules/*", "out/*", "build/*"],
  },
];
