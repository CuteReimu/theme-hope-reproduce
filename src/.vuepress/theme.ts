import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  docsDir: "src",

  navbar: ["/"],

  sidebar: {"/": false},

  plugins: {
    mdEnhance: {
      chart: true,
    },
  },
});
