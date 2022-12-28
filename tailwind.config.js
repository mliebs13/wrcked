module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "960px",
        "3xl": "2160px",
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "15px",
        lg: "17px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "56px",
      },
      maxWidth: {
        "8xl": "1536px",
        "9xl": "2160px",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        danger: "var(--danger)",
        skyBlue: "var(--skyBlue)",
        gray: "var(--gray)",
        lightGray: "var(--lightGray)",
        darkGray: "var(--darkGray)",
      },
      boxShadow: {
        // block: "4px 4px 0px 0px #000000",
        block: `4px 4px 0 var(--primary),3px 3px 0 var(--primary),2px 2px 0 var(--primary),1px 1px 0 var(--primary)`,
        blockHover: `3px 3px 0 var(--primary),2px 2px 0 var(--primary),1px 1px 0 var(--primary)`,
        subtle: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "dots-primary": "var(--bg-dots-primary)",
        "dots-secondary": "var(--bg-dots-secondary)",
        cross: "var(--bg-cross)",
      },
      fontFamily: {
        spaceMono: [`"Space Mono"`],
      },
    },
  },
  plugins: [],
};
