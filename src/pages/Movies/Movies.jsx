import { useState, useEffect } from 'react';

import { getSearch } from 'fetchAPI';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { useSearchParams } from 'react-router-dom';

import { Form, Input, Submit } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState();
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('name')) {
      async function getData() {
        const data = (await getSearch(searchParams.get('name'))).results;
        setFilms(data);
      }
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    if (value === '' || value === query) {
      return;
    }
    const data = (await getSearch(e.target.elements.search.value)).results;
    setFilms(data);
    setQuery(value);
  };

  const onChange = e => {
    setSearchParams({ name: e.target.value });
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input
          id="outlined-basic"
          label="Film..."
          variant="outlined"
          size="small"
          name="search"
          value={searchParams.get('name') || ''}
          onChange={onChange}
        />
        <Submit type="submit" variant="contained">
          Contained
        </Submit>
      </Form>

      <FilmsList films={films} />
    </div>
  );
};

export default Movies;
