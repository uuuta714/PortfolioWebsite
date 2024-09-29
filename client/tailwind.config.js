const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Bebas Neue"],

        body: ["Manrope"],
      }
    },
  },
  plugins: [
    require('daisyui'),
    addDynamicIconSelectors(),
  ],
  daisyui: {
    themes: [
      'lemonade',
      {'dark': {
        "primary": "#D3E97A",
        "primary-content": "#000000",
        "secondary": "#f8fbe9",
        "secondary-content": "#000000",
        "base-100": "#0A0A0A",
        "base-200": "#1A1A1A",
        "base-300": "#333333",
      }},
    ]
  },
}

