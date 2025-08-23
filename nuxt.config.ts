import vuetifyConfig from "./app/lib/vuetify.config";
import { colors } from "./app/lib/colors";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  build: {
    transpile: ["vuetify"],
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "vuetify-nuxt-module",
  ],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL, // for clientSide or serverSide
      token: process.env.NUXT_PUBLIC_TOKEN, // for clientSide or serverSide
    },
    apiBaseUrl: process.env.NUXT_API_BASE_URL, // for just serverside
    token: process.env.NUXT_TOKEN, // for just serverside
  },

  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: vuetifyConfig,
  },

  app: {
    head: {
      title: "Movies App",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },

  fonts: {
    provider: "google",
    families: [
      {
        name: "Barlow Condensed",
        weights: [400, 500, 700],
        styles: ["italic", "normal"],
        subsets: ["latin"],
        display: "swap",
      },
    ],
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      darkMode: "class",
      theme: {
        extend: {
          fontFamily: {
            sans: ["Barlow Condensed", "sans-serif"],
          },
          colors: {
            primary: {
              DEFAULT: colors.primary.base,
              tint: {
                100: colors.primary.tint[100],
                200: colors.primary.tint[200],
                300: colors.primary.tint[300],
                400: colors.primary.tint[400],
                500: colors.primary.tint[500],
                600: colors.primary.tint[600],
                700: colors.primary.tint[700],
                800: colors.primary.tint[800],
              },
              shade: {
                100: colors.primary.shade[100],
                200: colors.primary.shade[200],
                300: colors.primary.shade[300],
                400: colors.primary.shade[400],
                500: colors.primary.shade[500],
                600: colors.primary.shade[600],
                700: colors.primary.shade[700],
                800: colors.primary.shade[800],
              },
            },
            secondary: {
              DEFAULT: colors.secondary.base,
              tint: {
                100: colors.secondary.tint[100],
                200: colors.secondary.tint[200],
                300: colors.secondary.tint[300],
                400: colors.secondary.tint[400],
                500: colors.secondary.tint[500],
                600: colors.secondary.tint[600],
                700: colors.secondary.tint[700],
                800: colors.secondary.tint[800],
              },
              shade: {
                100: colors.secondary.shade[100],
                200: colors.secondary.shade[200],
                300: colors.secondary.shade[300],
                400: colors.secondary.shade[400],
                500: colors.secondary.shade[500],
                600: colors.secondary.shade[600],
                700: colors.secondary.shade[700],
                800: colors.secondary.shade[800],
              },
            },
            deep: {
              DEFAULT: colors.deep.base,
              tint: {
                100: colors.deep.tint[100],
                200: colors.deep.tint[200],
                300: colors.deep.tint[300],
                400: colors.deep.tint[400],
                500: colors.deep.tint[500],
                600: colors.deep.tint[600],
                700: colors.deep.tint[700],
                800: colors.deep.tint[800],
              },
              shade: {
                100: colors.deep.shade[100],
                200: colors.deep.shade[200],
                300: colors.deep.shade[300],
                400: colors.deep.shade[400],
                500: colors.deep.shade[500],
                600: colors.deep.shade[600],
                700: colors.deep.shade[700],
                800: colors.deep.shade[800],
              },
            },
            background: {
              DEFAULT: colors.background.base,
              tint: {
                100: colors.background.tint[100],
                200: colors.background.tint[200],
                300: colors.background.tint[300],
                400: colors.background.tint[400],
                500: colors.background.tint[500],
                600: colors.background.tint[600],
                700: colors.background.tint[700],
                800: colors.background.tint[800],
              },
            },

            alizarin: colors.alizarin,
            goldenFizz: colors.goldenFizz,
            springGreen: colors.springGreen,
            white: colors.white,
            black: colors.black,
            gray: colors.gray,
          },
        },
      },
    },
  },

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
  },
});
