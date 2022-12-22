/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      handwritten: ["Rouge Script"],
    },
    extend: {
      blur: {
        xs: "1px",
      },
      width: {
        "3.5/12": "28%",
      },
      left: {
        "1.3/3": "40%",
      },
    },
  },
  plugins: [],
};
