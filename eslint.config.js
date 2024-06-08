export default [
    {
        extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "prettier"],
        rules: {
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-unused-vars": "error",
        },
    },
];
