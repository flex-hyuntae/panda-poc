import { defineConfig } from '@pandacss/dev'
 
export default defineConfig({
  include: ["../packages/components/**/*.{tsx,ts}", "./src/**/*.{tsx,ts}"],
  importMap: '@panda-poc/panda-css',
  outdir: 'styled-system'
})