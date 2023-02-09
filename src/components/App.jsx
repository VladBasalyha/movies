import React from 'react';
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DetailedInfoAboutFilm } from './pages/DetailedInfoAboutFilm';
// import { fetchMovies } from '../API/api';
import { Cast } from './pages/Cast/Cast';
import { TrendingFilms } from './pages/TrendingFilms/TrendingFilms';
import { ReviewComponent } from './pages/Reviews/ReviewComponent';
import { FilmsByQuery } from './pages/FilmsByQuery/FilmsByQuery';
import { Header } from './CommonComponents/Header/Header';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<TrendingFilms />} />
          <Route path="/movies" element={<FilmsByQuery />}></Route>
          <Route path="/movies/:id" element={<DetailedInfoAboutFilm />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<ReviewComponent />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
