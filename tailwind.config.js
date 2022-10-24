/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: { DEFAULT: '#FFC800', dark: '#67540a' },
        tm: {
          black: '#232E3B',
          gray: { ligth: '#AFAFAE', dark: '#3F3F3F' },
        },
      },
      fontFamily: {
        yekan: 'Yekan Bakh',
      },
    },
  },
  plugins: [],
}
