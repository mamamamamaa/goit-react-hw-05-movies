import PropTypes from 'prop-types';

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

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
