import { colors } from '@panda-poc/colors';
import { definePreset } from '@pandacss/dev';
const colorTokens = Object.entries(colors).reduce((acc, [key, value]) => {
    return Object.assign(Object.assign({}, acc), { [key]: {
            value,
        } });
}, {});
const presets = definePreset({
    utilities: {
        extend: {
            px: {
                className: 'px',
                shorthand: 'px',
                transform(value) {
                    return {
                        paddingLeft: value,
                        paddingRight: value,
                    };
                }
            }
        }
    },
    theme: {
        extend: {
            tokens: {
                colors: colorTokens
            }
        }
    }
});
export { presets };
