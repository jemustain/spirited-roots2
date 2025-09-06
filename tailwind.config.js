/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', // Enable automatic dark mode based on system preference
  theme: {
    extend: {
      colors: {
        // Soft lavender palette - main brand color inspired by your image
        lavender: {
          50: '#faf9fc',
          100: '#f4f1f8', 
          200: '#ebe8f7',
          300: '#d9d4f1',
          400: '#bd9dea',  // Similar to #BD9DEA from your palette
          500: '#9d7bd8',
          600: '#7a5fc7',
          700: '#6b4fb3',
          800: '#5a4295',
          900: '#4c3577',
          950: '#2e1f48',
        },
        // Warm purple-gray neutrals
        plum: {
          50: '#faf9fb',
          100: '#f3f1f6',
          200: '#e9e5f0',
          300: '#d7d0e3',
          400: '#bfb1d1',
          500: '#a293bd',
          600: '#7a77b9',  // Similar to #7A77B9 from your palette  
          700: '#6b5fa8',
          800: '#594f8c',
          900: '#4a4173',
          950: '#2f2748',
        },
        // Soft coral accent - warmer touch
        coral: {
          50: '#fef7f6',
          100: '#fdeae8',
          200: '#fbd9d6',
          300: '#f7bdb6',
          400: '#f19289',
          500: '#ea7186',  // Similar to #EA7186 from your palette
          600: '#d85570',
          700: '#b6415a',
          800: '#973a4f',
          900: '#7f3547',
          950: '#451a22',
        },
        // Warm golden accent
        marigold: {
          50: '#fefbf0',
          100: '#fef6d9',
          200: '#fcebb2',
          300: '#f9da81',
          400: '#f2c76e',  // Similar to #F2C76E from your palette
          500: '#eab34a',
          600: '#d99b35',
          700: '#b5782e',
          800: '#925f2b',
          900: '#774f27',
          950: '#432913',
        },
        // Light neutral backgrounds  
        whisper: {
          25: '#fefefe',
          50: '#fdfcfd',  // Similar to #EBE8E7 but lighter
          100: '#faf8f9',
          200: '#f4f1f3',
          300: '#ebe8ea',
          400: '#ddd7db',
          500: '#ccc3c8',
          600: '#b8abb2',
        },
        // Add deeper purple tones for richer accents
        amethyst: {
          50: '#f8f6fb',
          100: '#f0ebf7',
          200: '#e4daef',
          300: '#d0bee2',
          400: '#b599d0',
          500: '#9574bb',
          600: '#7a5ba5',
          700: '#67498a',
          800: '#563f72',
          900: '#48355f',
          950: '#2a1d39',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text-primary)',
            '--tw-prose-headings': 'var(--text-primary)',
            '--tw-prose-lead': 'var(--text-secondary)',
            '--tw-prose-links': 'var(--link-color)',
            '--tw-prose-bold': 'var(--text-primary)',
            '--tw-prose-counters': 'var(--text-muted)',
            '--tw-prose-bullets': 'var(--text-muted)',
            '--tw-prose-hr': 'var(--border-color)',
            '--tw-prose-quotes': 'var(--text-secondary)',
            '--tw-prose-quote-borders': '#f4b429',
            '--tw-prose-captions': 'var(--text-muted)',
            '--tw-prose-code': 'var(--text-primary)',
            '--tw-prose-pre-code': 'var(--text-primary)',
            '--tw-prose-pre-bg': 'var(--bg-accent)',
            '--tw-prose-th-borders': 'var(--border-color)',
            '--tw-prose-td-borders': 'var(--border-color)',
            
            color: 'var(--tw-prose-body)',
            maxWidth: 'none',
            lineHeight: '1.75',
            
            h1: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '700',
            },
            h2: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
            },
            h3: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
            },
            h4: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
            },
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'underline',
              '&:hover': {
                color: 'var(--link-hover)',
              },
            },
            strong: {
              color: 'var(--tw-prose-bold)',
              fontWeight: '600',
            },
            blockquote: {
              fontStyle: 'italic',
              color: 'var(--tw-prose-quotes)',
              borderLeftColor: 'var(--tw-prose-quote-borders)',
            },
            code: {
              color: 'var(--tw-prose-code)',
            },
            'pre code': {
              color: 'var(--tw-prose-pre-code)',
            },
            pre: {
              backgroundColor: 'var(--tw-prose-pre-bg)',
            },
          },
        },
      }),
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
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/typography'),
  ],
}
