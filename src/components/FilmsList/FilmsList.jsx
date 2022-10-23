import { Link } from 'react-router-dom';

export const FilmsList = ({ films }) => {
  return (
    <ul>
      {films &&
        films.map(e => (
          <Link to={`/movies/${e.id}`} key={e.id}>
            <li>{e.title || e.name}</li>
          </Link>
        ))}
    </ul>
  );
};
