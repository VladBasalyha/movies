import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './CommonComponents/Header/Header';

const FilmsByQuery = lazy(() => import('./pages/FilmsByQuery/FilmsByQuery'));
const DetailedInfoAboutFilm = lazy(() =>
  import('./pages/DetailedInfoAboutFilm')
);
const Home = lazy(() => import('./pages/TrendingFilms/Home'));
const Cast = lazy(() => import('../components/pages/Cast/Cast'));
const ReviewComponent = lazy(() => import('./pages/Reviews/ReviewComponent'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<FilmsByQuery />}></Route>
          <Route path="/movies/:id" element={<DetailedInfoAboutFilm />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<ReviewComponent />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
