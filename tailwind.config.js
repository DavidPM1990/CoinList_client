module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'flagx': '#2d7cf2', // Color de logotipo
        'sidebar': '#000000', // Color de sidebar
        'flagx2': '#ffffff',
        'sidebarPage': '#dce1f0',
        'azulFlagX': '#1464f5',
        'verdeFlagX': 'b9ffe1'
        // Gris Nuestro
      },
      fontFamily: {
        sans: ['Assistant'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')

  ],
};
