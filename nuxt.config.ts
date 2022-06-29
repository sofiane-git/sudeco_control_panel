import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  nitro: {
    externals: {
      inline: ["uuid"],
    },
  },
  baseUrl: ".",
  paths: {
    "@/*": ["./*"],
  },
  meta: {
    title: "Sudeco",
    link: [
      {
        rel: "stylesheet",
      },
    ],
  },
  css: ["@/assets/main.css"],
});
