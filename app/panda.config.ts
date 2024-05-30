import { defineConfig } from '@pandacss/dev'
 
export default defineConfig({
  include: ["./src/**/*.{tsx,ts}"],
  jsxFramework: "react",
  importMap: '@panda-poc/panda-css',
  outdir: 'styled-system'
})