/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  separator: '_',
  theme: {
    colors: {
      primary: {
        default: '#5dbde8'
      },
      secondary: {
        default: '#632a7a'
      },
      danger: {
        default: '#dd5b5b'
      },
      success: {
        default: '#5bdd98'
      },
      warning: {
        default: '#eec050'
      },
      info: {
        default: '#5d96db'
      },
      dark: {
        default: '#222425'
      },
      light: {
        default: '#e1e1e1'
      },
      contrast: {
        default: '#dd775f'
      },
      white: {
        default: '#ffffff'
      }
    },
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
  },
  variants: {
    color: ['responsive', 'hover', 'focus', 'active', 'focus-within']
  },
  plugins: []
}
