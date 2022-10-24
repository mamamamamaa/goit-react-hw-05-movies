import { useState, useEffect } from 'react';
import { getMovieCredits } from 'fetchAPI';
import { useParams } from 'react-router-dom';

const defaultImg =
  'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
export const Cast = () => {
  const [cast, setCast] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getCast = async () => setCast((await getMovieCredits(id)).cast);
    getCast();
  }, [id]);
  return (
    <>
      {cast.length > 0 && (
        <ul>
          {cast.map(({ credit_id, name, profile_path, character }) => {
            const imgPath = profile_path
              ? `https://image.tmdb.org/t/p/w200${profile_path}`
              : defaultImg;
            return (
              <li key={credit_id}>
                <h3>Character: {character}</h3>
                <img src={imgPath} alt={name} width="200" />
                <h3>{name}</h3>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
