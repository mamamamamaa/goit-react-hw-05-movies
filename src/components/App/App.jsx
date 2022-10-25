import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { NavList, AppCont, NavCont, StyledLink, LogoCont } from './App.styled';
import { Trends } from 'pages/Home/Home.styled';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviewers = lazy(() => import('../Reviewers/Reviewers'));

export const App = () => {
  return (
    <AppCont>
      <NavCont>
        <LogoCont>
          <MdOutlineLocalMovies size={30} color={'rgb(229, 229, 229)'} />
        </LogoCont>
        <NavList>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavList>
      </NavCont>
      <Suspense fallback={<Trends>Loading...</Trends>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviewers />} />
          </Route>
        </Routes>
      </Suspense>
    </AppCont>
  );
};
