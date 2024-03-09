/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {},
      boxShadow: {
        lightning: '0px 0px 10px yellow',
      },
    },
  },
  plugins: [],
};

// for dark mode font-weight is ok as light mode
// but for light mode font-weight should be bolder (normal is ok)

// dark background dynamic in the range of #736c91 #6c917c
