import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
    {
        ignores: ["node_modules/", ".next/"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        plugins: {
            js,
            prettier: prettierPlugin,
        },
        rules: {
            "prettier/prettier": "error",
        },
        settings: {
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
        extends: [
            "plugin:import/errors",
            "plugin:import/warnings",
            "plugin:import/typescript",
            "js/recommended",
        ],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        rules: {
            // React 17+ 之後 JSX 不需要手動 import React
            "react/react-in-jsx-scope": "off",
            // next-env.d.ts 裡的 triple-slash reference 是 Next.js 自動生成的，關掉這條規則避免不必要的 ESLint 錯誤
            "@typescript-eslint/triple-slash-reference": "off",
        },
    },
]);
