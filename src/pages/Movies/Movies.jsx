import { useState } from 'react';

import { getSearch } from 'fetchAPI';
import { FilmsList } from 'components/FilmsList/FilmsList';
export const Movies = () => {
  const [films, setFilms] = useState([]);
  const onSubmit = async e => {
    e.preventDefault();
    const data = (await getSearch(e.target.elements.search.value)).results;
    setFilms(data);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="search" />
        <button>Search</button>
      </form>

      <FilmsList films={films} />
    </div>
  );
};
