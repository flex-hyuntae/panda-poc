import { defineConfig } from '@pandacss/dev';
import { presets } from '@panda-poc/panda-presets'
 
export default defineConfig({
  eject: true,
  presets: ['@pandacss/preset-base', presets],

  include: ["../packages/components/**/*.{tsx,ts}", "./src/**/*.{tsx,ts}"],
  importMap: '@panda-poc/panda-css',
  outdir: 'styled-system',
  jsxFramework: 'react'
})