import { colors } from '@panda-poc/colors';
import { definePreset } from '@pandacss/dev';

const colorTokens = Object.entries(colors).reduce(
  (acc, [key, value]) => {
    return {
      ...acc,
      [key]: {
        value,
      },
    };
  },
  {}
); 

const presets = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: colorTokens
      }
    }
  }
})

export {
  presets
};
