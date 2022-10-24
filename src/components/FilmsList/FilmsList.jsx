import { Link, useLocation } from 'react-router-dom';

export const FilmsList = ({ films }) => {
  const location = useLocation();
  return (
    <ul>
      {films &&
        films.map(e => (
          <Link to={`/movies/${e.id}`} state={{ from: location }} key={e.id}>
            <li>{e.title || e.name}</li>
          </Link>
        ))}
    </ul>
  );
};
