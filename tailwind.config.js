module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2160px",
      },
      fontSize: {
        xs: "11px",
        sm: "13px",
        base: "15px",
        xl: "20px",
        "2xl": "25px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "48px",
        "6xl": "56px",
      },
      maxWidth: {
        "8xl": "1536px",
        "9xl": "2160px",
      },
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        danger: "#ff0000",
        skyBlue: "#56a6d9",
        gray: "#ecebf0",
        lightGray: "#f5f5f5",
        darkGray: "#5c5c5e",
      },
      boxShadow: {
        block: "4px 4px 0px 0px #000000",
        subtle: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "dots-primary": "var(--bg-dots-primary)",
        "dots-secondary": "var(--bg-dots-secondary)",
        cross: "var(--bg-cross)",
      },
    },
  },
  plugins: [],
};
