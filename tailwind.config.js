module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainPrimary: "#DDFFF5",
        mainSecondary: "#FFFFFF",
        mainText1: "#434343",
        mainText2: "#263238",
        primaryBtn: "#00B983",
        mainCard: "#455A64",
      },
      fontSize: {
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "28px",
        "2xl": "32px",
        h1: "36px",
      },
      fontWeight: {
        light: "300",
        normal: "400",
        semiBold: "500",
        bold: "600",
        extraBold: "700",
      },
    },
  },
  plugins: [],
};
