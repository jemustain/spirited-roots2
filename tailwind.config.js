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
        // Sage green color palette for natural, calming feel
        sage: {
          50: '#f6f7f6',
          100: '#e3e8e3',
          200: '#c7d2c7',
          300: '#a4b5a4',
          400: '#7d947d',
          500: '#6b8068',  // Main sage green
          600: '#546651',
          700: '#435142',
          800: '#374237',
          900: '#2f372f',
          950: '#181d18',
        },
        // Gold color palette for warmth and sophistication
        gold: {
          50: '#fffef7',
          100: '#fffaeb',
          200: '#fff2cc',
          300: '#ffe699',
          400: '#ffd54d',
          500: '#ffc107',  // Main gold
          600: '#e6a900',
          700: '#cc9600',
          800: '#b8860b',
          900: '#996f00',
          950: '#664a00',
        },
        // Earth tones to complement sage and gold
        earth: {
          50: '#faf9f7',
          100: '#f2f0eb',
          200: '#e8e3d7',
          300: '#d9d0be',
          400: '#c6b99f',
          500: '#b5a589',
          600: '#a69379',
          700: '#8a7a64',
          800: '#716355',
          900: '#5c5147',
          950: '#302a23',
        },
        // Warm whites for backgrounds
        cream: {
          50: '#fefdfb',
          100: '#fefcf6',
          200: '#fef9ed',
          300: '#fdf5e0',
          400: '#fbf0d1',
          500: '#f8e8b8',
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
