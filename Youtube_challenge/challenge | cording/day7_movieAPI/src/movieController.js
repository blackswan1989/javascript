import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  const movieList = getMovies();
  res.render("movies", { pageTitle: "Movies!", movieList });
};
export const movieDetail = (req, res) => {
  const {
    params: { id: movieId },
  } = req;
  const movieById = getMovieById(movieId);
  console.log(movieById);
  res.render("detail", { movieById });
};

export const filterMovie = (req, res) => {};
