/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: 'slide .75s ease-in-out',
        flip: 'flip .5s linear .25s'
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'scaleY(0)',
            opacity: '0'
          },
          '100%': {
            transform: 'scaleY(1)',
            opacity: '1'
          },
        },
        flip: {
          '0%': {
            transform: 'rotateY(0deg)',
          },
          '50%': {
            transform: 'rotateY(-.1turn)',
          },
          '100%': {
            transform: 'rotateY(0deg)',
          },
        }
      },
      backgroundImage: {
        'footer': "url('assets/footer.jpg')",
      }
    },
  },
  plugins: [],
}