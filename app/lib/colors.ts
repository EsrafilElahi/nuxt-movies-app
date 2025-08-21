export const colors = {
  // =================== primary (summer sky) ===================
  primary: {
    base: '#228ee5',
    tint: {
      100: '#3c9be8',
      200: '#55a7eb',
      300: '#6db4ee',
      400: '#85c0f1',
      500: '#9ecdf4',
      600: '#b6d9f6',
      700: '#cee6f9',
      800: '#e7f2fc'
    },
    shade: {
      100: '#187dd0',
      200: '#156bb2',
      300: '#115994',
      400: '#0e4877',
      500: '#0e4877',
      600: '#07243b',
      700: '#03121e',
      800: '#000000'
    }
  },

  // =================== secondary (alice blue) ===================
  secondary: {
    base: '#ebfaff',
    tint: {
      100: '#e1eff3',
      200: '#d8e4e8',
      300: '#ced9dc',
      400: '#c4ced1',
      500: '#bac3c5',
      600: '#b1b7ba',
      700: '#a7acae',
      800: '#9da1a3'
    },
    shade: {
      100: '#beefff',
      200: '#beefff',
      300: '#65d9ff',
      400: '#39cdff',
      500: '#0cc2ff',
      600: '#00a7df',
      700: '#0086b2',
      800: '#006486'
    }
  },

  // =================== deep (deep cerise) ===================
  deep: {
    base: '#e93f9c',
    tint: {
      100: '#e93f9c',
      200: '#ec5baa',
      300: '#ef76b9',
      400: '#f291c7',
      500: '#f291c7',
      600: '#f9c8e3',
      700: '#fce4f1',
      800: '#ffffff'
    },
    shade: {
      100: '#d0187d',
      200: '#b2156b',
      300: '#941159',
      400: '#770e48',
      500: '#590a36',
      600: '#3b0724',
      700: '#1e0312',
      800: '#000000'
    }
  },

  // =================== background (dark green) ===================
  background: {
    base: '#030a1b',
    tint: {
      100: '#091e51',
      200: '#0f3187',
      300: '#1545bd',
      400: '#275ee7',
      500: '#275ee7',
      600: '#5d86ed',
      700: '#93aef3',
      800: '#ffffff'
    }
  },

  // =================== other colors ===================
  alizarin: '#e52222',
  goldenFizz: '#e5db22',
  springGreen: '#00fb71',
  white: '#ffffff',
  black: '#000000',
  gray: '#808080',

  // =================== theme variants ===================
  dark: {
    primary: '#2196F3',
    secondary: '#424242',
    background: '#121212',
    surface: '#1E1E1E'
  }
} as const

// همچنین می‌توانید helper functions ایجاد کنید
export const getCssVar = (name: string) => `var(--${name})`

export const colorVariables = {
  primary: getCssVar('color-primary'),
  secondary: getCssVar('color-secondary'),
  deep: getCssVar('color-deep'),
  background: getCssVar('color-background'),
  alizarin: getCssVar('color-alizarin'),
  goldenFizz: getCssVar('color-golden-fizz'),
  springGreen: getCssVar('color-spring-green'),
  white: getCssVar('color-white'),
  black: getCssVar('color-black'),
  gray: getCssVar('color-gray')
}