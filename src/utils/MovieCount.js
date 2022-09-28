export const getInitialCount = (width) => {
  if (width >= 1280) {
    return 12;
  }
  if (width >= 768) {
    return 8;
  }
  return 5;
};

export const clickMoreMovies = (width) => {
  if (width > 768) {
    return 3;
  } else {
    return 2;
  }
};
