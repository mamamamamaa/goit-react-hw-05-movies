import { useState, useEffect } from 'react';
import { getTrends } from 'fetchAPI';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { Trends } from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getFilms() {
      setFilms((await getTrends()).results);
    }
    getFilms();
  }, []);

  return (
    <>
      <Trends>Trends:</Trends>
      <FilmsList films={films} />
    </>
  );
};

export default Home;
