/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      options: { parser: "typescript" },
    },
    {
      files: ["*.js", "*.jsx"],
      options: { parser: "babel" },
    },
    {
      files: ["*.css"],
      options: { parser: "css" },
    },
  ],
};
