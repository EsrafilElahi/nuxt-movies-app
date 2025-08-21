import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";
import { colors } from "./colors";

export default defineVuetifyConfiguration({
  defaults: {
    global: {
      ripple: true,
    },
    VBtn: {
      // default config btn
      color: "primary",
      variant: "elevated",

      // style: {
      //   color: "var(--color-secondary) !important",
      // },
      variants: [
        {
          props: { variant: "elevated", color: "primary" },
          style: {
            color: colors.secondary.base,
            backgroundColor: colors.primary.base,
            "&:hover": {
              backgroundColor: colors.primary.shade[100],
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            color: "#d0c !important",
            borderColor: colors.secondary.base + " !important",
            backgroundColor: "transparent !important",

            // استایل برای محتوای داخلی
            "&>.v-btn__content": {
              color: colors.background.base + " !important",
            },

            "&:hover .v-btn__content": {
              color: colors.white + " !important",
            },

            "::deep(.v-btn__content)": {
              // color: colors.background.base + " !important",
              color: "#d0c !important",
              fontWeight: "bold",
              fontSize: "16px",
            },
          },
        },
      ],
    },
    VTextField: {
      variant: "outlined",
      density: "comfortable",
      color: "primary",
      hideDetails: "auto",
    },
    VSelect: {
      variant: "outlined",
      density: "comfortable",
      color: "primary",
      hideDetails: "auto",
    },
    VCheckbox: {
      color: "primary",
      density: "comfortable",
      hideDetails: "auto",
    },
    VRadio: {
      color: "primary",
      density: "comfortable",
      hideDetails: "auto",
    },
    VSwitch: {
      color: "primary",
      density: "comfortable",
      hideDetails: "auto",
    },
    VCard: {
      rounded: "lg",
      elevation: 2,
      class: "pa-4",
    },
    VAlert: {
      variant: "tonal",
      rounded: "md",
    },
    VDialog: {
      persistent: true,
      scrollable: true,
    },
    VMenu: {
      transition: "scale-transition",
    },
    VTooltip: {
      location: "top",
    },
  },

  directives: true,

  icons: {
    defaultSet: "mdi",
    sets: ["mdi"],
  },

  display: {
    mobileBreakpoint: "sm",
    thresholds: {
      xs: 0,
      sm: 480,
      md: 720,
      lg: 920,
      xl: 1240,
    },
  },

  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.primary.base,
          secondary: colors.secondary.base,
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
          background: "#FFFFFF",
          surface: "#FFFFFF",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: colors.dark.primary,
          secondary: colors.dark.secondary,
          accent: "#FF4081",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
          background: "#121212",
          surface: "#1E1E1E",
        },
      },
    },
  },
});
