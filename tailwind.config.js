/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced sage green palette - deeper, richer tones
        sage: {
          50: '#f8f9f8',
          100: '#e6ede6',
          200: '#d1dcd1',
          300: '#b4c4b4',
          400: '#8fa68f',
          500: '#6b8068',  // Main sage green - deeper
          600: '#5a6e57',
          700: '#4a5a47',
          800: '#3d4a3a',
          900: '#2f3a2d',
          950: '#1a201a',
        },
        // Warmer, more sophisticated gold palette
        gold: {
          50: '#fefcf3',
          100: '#fef7e0',
          200: '#fdecc1',
          300: '#fbdc8f',
          400: '#f7c453',
          500: '#f4b429',  // Warmer main gold
          600: '#e89611',
          700: '#c1750f',
          800: '#9c5d14',
          900: '#7f4d14',
          950: '#452706',
        },
        // New terracotta earth tones for richness
        terracotta: {
          50: '#fdf6f3',
          100: '#fae9e1',
          200: '#f4d1c3',
          300: '#ebb199',
          400: '#df8666',
          500: '#d26340',  // Main terracotta
          600: '#c34b2c',
          700: '#a23b24',
          800: '#863324',
          900: '#6f2e24',
          950: '#3c1610',
        },
        // Enhanced earth tones with more depth
        earth: {
          50: '#faf9f6',
          100: '#f3f1ea',
          200: '#e8e3d4',
          300: '#d8cfb8',
          400: '#c4b596',
          500: '#b39c7a',
          600: '#a68968',
          700: '#8b7356',
          800: '#72604a',
          900: '#5d4f3e',
          950: '#312920',
        },
        // Warmer, cozier cream backgrounds
        cream: {
          25: '#fefefe',
          50: '#fdfcf9',
          100: '#fbf8f2',
          200: '#f6f1e6',
          300: '#f0e7d6',
          400: '#e8dbc2',
          500: '#deccab',
          600: '#d1ba93',
          700: '#c2a676',
        },
        // Add forest green for deeper nature connection
        forest: {
          50: '#f3f6f3',
          100: '#e3ebe3',
          200: '#c8d8c8',
          300: '#a4bea4',
          400: '#7a9d7a',
          500: '#5a7f5a',
          600: '#466746',
          700: '#3a5439',
          800: '#304430',
          900: '#293a28',
          950: '#141f14',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374237', // Dark sage for body text
            h1: {
              color: '#2f372f', // Darkest sage for headings
            },
            h2: {
              color: '#2f372f',
            },
            h3: {
              color: '#435142',
            },
            h4: {
              color: '#435142',
            },
            a: {
              color: '#6b8068', // Main sage for links
              '&:hover': {
                color: '#546651', // Darker sage on hover
              },
            },
            blockquote: {
              borderLeftColor: '#ffc107', // Gold accent
              color: '#435142',
            },
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
