const API_KEY = '93580a7f0ca5f935ad0b81c9ee349049';
const API_URL = 'https://api.themoviedb.org/3/movie ';
export const fetchTrendingMovies = () =>
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}
`).then(r => r.json());

export const fetchMoviesById = movieId => {
  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=93580a7f0ca5f935ad0b81c9ee349049&language=en-US`
  )
    .then(r => {
      r.json();
    })

    .then(res => {
      return res;
    });
};
