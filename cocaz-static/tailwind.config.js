/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Onest Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: "var(--font-display)",
        ref: "var(--font-ref)",
      },
      // Colours resolve to the token block at the top of src/index.css
      colors: {
        ink: { DEFAULT: token("ink"), soft: token("ink-soft"), mute: token("ink-mute") },
        paper: token("paper"),
        stone: token("stone"),
        gold: { DEFAULT: token("gold"), deep: token("gold-deep") },
        leaf: token("leaf"),
        // tints and their saturated partners, used for coloured tiles and shapes
        peach: token("peach"),
        ember: token("ember"),
        lilac: token("lilac"),
        violet: token("violet"),
        sage: token("sage"),
        moss: token("moss"),
        butter: token("butter"),
        flame: token("flame"),
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.5rem",
      },
      boxShadow: {
        float: "0 18px 40px -16px rgb(var(--ink) / .35)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        spin: { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "spin-slow": "spin 22s linear infinite",
      },
    },
  },
  plugins: [],
};
