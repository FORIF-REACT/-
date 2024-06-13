/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        darkgray: "#44475D",
        placeholder: "#717D8D",
        platinum: "#B7F1F9",
        gold: "#F4E075",
        silver: "#D0D0D0",
        bronze: "#E6BA8F",
        lightblue: "#FBFDFF"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      width: {
        page: '1100px',
        18: '72px',
        160: '160px',
        304: '304px',
        400: '400px',
        480: '480px',
        532: "532px",
        550: "550px",
        672: '672px',
        800: '800px',
        960: '960px',
      },
      height: {
        18: '72px',
        160: '160px'
      },
      padding: {
        page: '350px',
        100: '100px'
      },
      margin: {
        100: "100px",
        200: "200px",
        240: "240px",
        360: "360px",
      },
      fontFamily: {
        sans: ['Noto Sans', 'Noto Sans KR', 'sans-serif'],
        logo: ['Orelega One', 'sans-serif']
      },
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        36: "36px",
        40: "40px",
        56: "56px",
        60: "60px"
      },
      lineHeight: {
        none: '1',
        13: "13px",
        20: "20px",
        24: "24px",
        28: "28px",
        40: "40px",
        42: "42px",
        60: "60px",
      },
      borderWidth: {
        DEFAULT: '1px',
        "0": '0',
        "1": '1px',
        "2": '2px',
        "3": '3px',
        "4": '4px',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
