const js = require("@eslint/js");
const globals = require("globals");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
    },
    {
        rules: {
            eqeqeq: "error",
            "max-lines": [
                "warn",
                { max: 200, skipBlankLines: true, skipComments: true },
            ],
            "no-unused-vars": "error",
            "no-var": "error",
            "no-console": "warn",
            "prefer-const": "error",
            "no-magic-numbers": [
                "error",
                {
                    ignore: [-1, 0, 1, 2],
                    ignoreArrayIndexes: true,
                    detectObjects: true,
                },
            ],
        },
    },
]);
