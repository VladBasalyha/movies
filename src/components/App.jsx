// import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { DetailedInfoAboutFilm } from './pages/DetailedInfoAboutFilm';
// import { fetchMovies } from '../API/api';
import { Cast } from './pages/Cast/Cast';
import { TrendingFilms } from './pages/TrendingFilms/TrendingFilms';
import { ReviewComponent } from './pages/Reviews/ReviewComponent';
export const App = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<TrendingFilms></TrendingFilms>}></Route>
        <Route
          path="movie/:id"
          element={<DetailedInfoAboutFilm></DetailedInfoAboutFilm>}
        >
          <Route path="cast" element={<Cast></Cast>}></Route>
          <Route
            path="reviews"
            element={<ReviewComponent></ReviewComponent>}
          ></Route>
        </Route>

        <Route path="/movies" element={<h2>fdsafdsa</h2>}></Route>
      </Routes>
    </>
  );
};
