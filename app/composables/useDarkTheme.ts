export const useDarkTheme = () => {
  const theme = useTheme();

  const isDarkMode = computed(() => {
    return theme.global.current.value.dark;
  });

  return isDarkMode;
};
