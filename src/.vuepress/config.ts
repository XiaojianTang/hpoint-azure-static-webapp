import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/hpoint-azure-static-webapp/",

  locales: {
    "/": {
      lang: "en-US",
      title: "HPOINT",
      description: "A INNER SITE",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "HPOINT中文版",
      description: "内部博客演示",
    },
  },

  theme,  

  // Enable it with pwa
  // shouldPrefetch: false,
});
