/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './*.{js,jsx}'],
  theme: {
    extend: {
      maxWidth: {
        16: '16rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
