import { getTrends } from 'fetchAPI';
import { useState, useEffect } from 'react';
export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getFilms() {
      setFilms((await getTrends()).results);
    }
    getFilms();
  }, []);

  return (
    <ul>{films && films.map(e => <li key={e.id}>{e.title || e.name}</li>)}</ul>
  );
};
