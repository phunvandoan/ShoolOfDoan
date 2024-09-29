import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // colors: {
    //   doanSky: "#C3EBFA",
    //   doanSkyLight: "#EDF9FD",
    //   doanPurple: "#CFCEFF",
    //   doanPurpleLight: "#F1F0FF",
    //   doanYellow: "#FAE27C",
    //   doanYellowLight: "#FEFCE8",
    //   doanWhite: "white",
    // },
  },

  plugins: [],
};
export default config;
