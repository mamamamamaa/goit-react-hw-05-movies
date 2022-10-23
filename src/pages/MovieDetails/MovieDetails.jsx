import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'fetchAPI';
import { Detales } from 'components/Detales/Detales';

export const MovieDetails = () => {
  const [detales, setDetales] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getDetales = async () => setDetales(await getMovieDetails(id));
    getDetales();
  }, [id]);

  return Object.keys(detales).length !== 0 && <Detales data={detales} />;
};
