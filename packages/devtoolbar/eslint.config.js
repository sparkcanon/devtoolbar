import createConfig from "@repo/eslint-config/create-config";

export default createConfig(
  {
    react: true,
  },
  {
    files: ["lib/**/*.ts", "lib/**/*.tsx"],
  },
);
