import { defineConfig } from "@pandacss/dev";
import { presets } from '@panda-poc/panda-presets'

export default defineConfig({
  eject: true,
  presets: ['@pandacss/preset-base', presets],
  // The output directory for your css system
  outdir: "dist",
  jsxFramework: 'react'
});
