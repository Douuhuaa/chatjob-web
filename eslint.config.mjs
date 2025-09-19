import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
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
]);
