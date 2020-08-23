module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  extends: ["plugin:@typescript-eslint/recommended"],

  rules: {
    "@typescript-eslint/no-unused-vars": "off", 
    "@typescript-eslint/explicit-function-return-type": "off", 
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-inferrable-types": "off"
  },

  /* Different rules for file that is not strictly typed. */
  overrides: [
    {
      files: ["Client.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-empty-interface": "off", 
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-inferrable-types": "off"
      }
    }
  ]
};
