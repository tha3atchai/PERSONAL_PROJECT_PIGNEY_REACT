/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pigney-purple": "#a66cff",
        "pigney-lemon": "#cff500",
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      boxShadow: {
        "pigney-button": "0px 0px 24px 12px rgba(255, 255, 255, .12)",
      },
      animation: {
        "logo-pulse": "logopulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "coin-flying1": "bounce 3s infinite",
        "coin-flying2": "bounce 2.6s infinite",
      },
      keyframes: {
        logopulse: {
            "0%, 100%": {
              opacity: 1,
            },
            "50%": {
              opacity: .24,
            },
        },
      },
    },
  },
  plugins: [],
}

