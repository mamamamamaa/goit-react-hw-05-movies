import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Movies } from '../../pages/Movies/Movies';
import { MovieDetails } from '../../pages/MovieDetails/MovieDetails';
import { Cast } from '../Cast/Cast';
import { Reviewers } from '../Reviewers/Reviewers';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { NavList, AppCont, NavCont, StyledLink, LogoCont } from './App.styled';

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
        <Route path="/" element={<Home />} />
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
