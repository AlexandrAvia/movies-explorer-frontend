export const movieMapper = (savedMovie) => ({
  trailerLink: savedMovie.trailerLink,
  image: { url: savedMovie.image },
  nameRU: savedMovie.nameRU,
  duration: savedMovie.duration,
  id: savedMovie.movieId,
  savedId: savedMovie._id,
});
