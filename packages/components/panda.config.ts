import { defineConfig } from '@pandacss/dev'
 
export default defineConfig({
  eject: true,
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
  include: ["./**/*.{tsx,ts}"],
  jsxFramework: "react",
  importMap: '@panda-poc/panda-css',
  outdir: "./"
})