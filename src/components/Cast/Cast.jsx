import { useState, useEffect } from 'react';
import { getMovieCredits } from 'fetchAPI';
import { useParams } from 'react-router-dom';
import { CastList, CastItem, CastImg } from './Cast.styled';

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
        <CastList>
          {cast.map(({ credit_id, name, profile_path, character }) => {
            const imgPath = profile_path
              ? `https://image.tmdb.org/t/p/w200${profile_path}`
              : defaultImg;
            return (
              <CastItem key={credit_id}>
                <CastImg src={imgPath} alt={name} width="200" />
                <h3>{name}</h3>
                <h3>Character: {character}</h3>
              </CastItem>
            );
          })}
        </CastList>
      )}
    </>
  );
};
