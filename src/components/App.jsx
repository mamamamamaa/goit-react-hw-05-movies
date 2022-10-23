import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import style from './App.module.css';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink className={style.navItem} to="/" end>
          Home
        </NavLink>
        <NavLink className={style.navItem} to="/movies">
          Movies
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
