/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    extend: {
      boxShadow: {
        softGlow: `
          0 -6px 20px rgba(255, 255, 255, 0.08),
          0 4px 10px rgba(0, 0, 0, 0.45),
          0 0 5px rgba(16,185,129,0.12)
        `,
      },
    },
  },
  plugins: [],
};

export default config;