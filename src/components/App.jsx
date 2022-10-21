import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './Home/Home';
export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>}></Route>
      </Routes>
    </div>
  );
};
