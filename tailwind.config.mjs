/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/.vitepress/**/*.{js,ts,vue}',
    './src/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
    },
  },
  plugins: [],
}
