/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        glow: [
          "10px 10px 8px rgba(255,255, 255, 0.2)"
        ]
      },
      boxShadow: {
        'nav': '0px 0px 10px 10px rgba(0,0,0,0.1)',
      },
      animation: {
        fadedown: 'fadedown 1s ease-in-out',
        fadeup: 'fadeup 1s ease-in-out',
      },
      keyframes: theme => ({
        fadedown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeup: {
          '0%': {
            opacity: '0',
            transform: 'translateY(60px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      }),
    },
  },
  plugins: [],
};
