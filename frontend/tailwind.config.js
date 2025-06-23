import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#3B82F6',
        accent: '#FBBF24',
        neutral: {
          100: '#F3F4F6',
          800: '#1F2937'
        }
      }
    }
  },
  plugins: []
}
export default config
