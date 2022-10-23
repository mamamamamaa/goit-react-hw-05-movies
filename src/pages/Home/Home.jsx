import { getTrends } from 'fetchAPI';
import { useState, useEffect } from 'react';
import { FilmsList } from 'components/FilmsList/FilmsList';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getFilms() {
      setFilms((await getTrends()).results);
    }
    getFilms();
  }, []);

  return <FilmsList films={films} />;
};
