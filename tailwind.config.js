// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        green: "#e5f0f1",
        dark: "#003C3C",
      },
      boxShadow: {
        "custom-blue":
          "0 4px 6px -1px rgba(59, 130, 246, 0.5), 0 1px 3px 0 rgba(59, 130, 246, 0.1)",
        "custom-red":
          "0 4px 6px -1px rgba(248, 113, 113, 0.5), 0 1px 3px 0 rgba(248, 113, 113, 0.1)",
      },
    },
  },
  plugins: [],
};
