import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // ── Brand Colors ──────────────────────────────────────────────
      // Extracted from the brutalist garnet/gold/black design
      colors: {
        cream:  {
          DEFAULT: '#E8DFC8',  // page background
          light:  '#F2ECD8',  // lighter surface
          dark:   '#D4C9A8',  // bordered surface / dividers
        },
        garnet: {
          DEFAULT: '#7A1C2E',  // primary brand / headings on cream
          light:  '#9B2D42',  // hover state
          dark:   '#5C1222',  // pressed / deep accent
        },
        gold: {
          DEFAULT: '#C9A84C',  // accent / highlights
          light:  '#DFC06A',  // hover
          dark:   '#A8892F',  // pressed
        },
        ink: {
          DEFAULT: '#0D0D0D',  // body text on cream
          muted:  '#3A3530',  // secondary text
        },
        chalk: {
          DEFAULT: '#F0EAD6',  // text/elements on dark backgrounds
          muted:  '#C8BFA8',  // secondary text on dark backgrounds
        },
      },

      // ── Typography ────────────────────────────────────────────────
      fontFamily: {
        // Condensed heavy display — for section numbers, big headlines
        display: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif'],
        // Tight grotesque body — for labels, nav, stats
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        // Monospace — for ticker / marquee text
        mono:    ['"DM Mono"', '"Courier New"', 'monospace'],
      },
      fontSize: {
        // Brutalist display scale
        'display-2xl': ['clamp(4rem, 10vw, 9rem)',  { lineHeight: '0.9',  letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-xl':  ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-lg':  ['clamp(1.75rem, 4vw, 3rem)',{ lineHeight: '1',    letterSpacing: '0',       fontWeight: '700' }],
        'section-num': ['clamp(0.65rem, 1.2vw, 0.8rem)', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '600' }],
      },

      // ── Spacing ───────────────────────────────────────────────────
      spacing: {
        'section': '6rem',   // vertical padding between major sections
        'gutter':  '2.5rem', // horizontal page padding
      },

      // ── Border ────────────────────────────────────────────────────
      borderWidth: {
        '3': '3px',
      },
      borderColor: {
        DEFAULT: '#0D0D0D', // default borders are inky
      },

      // ── Shadows ───────────────────────────────────────────────────
      // Brutalist design uses hard offset shadows, no blur
      boxShadow: {
        'hard-sm': '2px 2px 0px #0D0D0D',
        'hard':    '4px 4px 0px #0D0D0D',
        'hard-lg': '6px 6px 0px #0D0D0D',
        'hard-garnet': '4px 4px 0px #7A1C2E',
        'hard-gold':   '4px 4px 0px #C9A84C',
      },

      // ── Animation ─────────────────────────────────────────────────
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
