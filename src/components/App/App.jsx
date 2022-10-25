import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from '../../pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviewers } from 'components/Reviewers/Reviewers';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { NavList, AppCont, NavCont, StyledLink, LogoCont } from './App.styled';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
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

      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviewers />} />
        </Route>
      </Routes>
    </AppCont>
  );
};
