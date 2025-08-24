export const tmdbImage = {
  // برای backdrop images (عکس های پس زمینه)
  backdrop: (
    path: string,
    size: "w300" | "w780" | "w1280" | "original" = "w780"
  ) => {
    if (!path) return "/placeholder-backdrop.jpg"; // fallback
    return `https://image.tmdb.org/t/p/${size}${path}`;
  },

  // برای poster images (عکس های اصلی)
  poster: (
    path: string,
    size:
      | "w92"
      | "w154"
      | "w185"
      | "w342"
      | "w500"
      | "w780"
      | "original" = "w500"
  ) => {
    if (!path) return "/placeholder-poster.jpg"; // fallback
    return `https://image.tmdb.org/t/p/${size}${path}`;
  },

  // برای profile images (عکس های بازیگران)
  profile: (
    path: string,
    size: "w45" | "w185" | "h632" | "original" = "w185"
  ) => {
    if (!path) return "/placeholder-profile.jpg"; // fallback
    return `https://image.tmdb.org/t/p/${size}${path}`;
  },

  // برای logo images
  logo: (
    path: string,
    size:
      | "w45"
      | "w92"
      | "w154"
      | "w185"
      | "w300"
      | "w500"
      | "original" = "w300"
  ) => {
    if (!path) return "/placeholder-logo.png"; // fallback
    return `https://image.tmdb.org/t/p/${size}${path}`;
  },
};
