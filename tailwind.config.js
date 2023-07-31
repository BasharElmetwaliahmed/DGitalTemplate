/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      'sm':'576px',
      'md':'768px',
      'lg':'992px',
      'xl':'1200px',
      '2xl':'1400px'
    },
    fontFamily:{
      'jost':" 'Jost', sans-serif"
    },
        container: {
      center: true,
      padding:'1rem',
    },
    extend: {
      colors:{
    primary: '#6222CC',
    secondary:'#FBA504',
    light: '#F6F4F9',
    dark: '#04000B',
      },
            boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
