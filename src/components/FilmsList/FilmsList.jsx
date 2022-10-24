import { Link, useLocation } from 'react-router-dom';
import { List, ListItem } from './FilmsList.styled';

export const FilmsList = ({ films }) => {
  const location = useLocation();
  return (
    <List>
      {films &&
        films.map(e => (
          <Link to={`/movies/${e.id}`} state={{ from: location }} key={e.id}>
            <ListItem>{e.title || e.name}</ListItem>
          </Link>
        ))}
    </List>
  );
};
