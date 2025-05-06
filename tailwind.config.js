/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Include paths to all of your template files
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // If you have a pages directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Important for App Router
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom color 'cafe-light'
        'cafe-light': '#F8F5F2',
      },
      // You can extend other theme properties here if needed
      // e.g., backgroundImage, fontFamily, etc.
    },
  },
  plugins: [
     // Add any Tailwind plugins you might be using (e.g., require('@tailwindcss/forms'))
  ],
};