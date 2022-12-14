import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Trends } from 'pages/Home/Home.styled';
import { useLocation, Outlet } from 'react-router-dom';

import {
  DetalesConrainer,
  GoBack,
  FilmTitle,
  Decription,
  UserScore,
  SubTitle,
  ExtraDataList,
  ExtraDataItem,
  ExtraDataLink,
} from './Detales.styled';

import { BsArrow90DegLeft } from 'react-icons/bs';

export const Detales = ({ data }) => {
  const location = useLocation();

  const {
    poster_path,
    original_title,
    original_name,
    release_date,
    vote_average,
    overview,
    genres,
  } = data;

  const getYear = date => {
    return date.slice(0, 4);
  };

  const getGenres = genres => {
    const genresName = genres.map(genre => genre.name);
    return genresName.join(', ');
  };

  const cameBack = location.state?.from ?? '/';
  return (
    <div>
      <GoBack to={cameBack}>
        <BsArrow90DegLeft size={15} color={'gray'} /> Go back
      </GoBack>
      <DetalesConrainer>
        <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="" />
        <Decription>
          <FilmTitle>
            {original_title || original_name}
            {` (${getYear(release_date)})`}
          </FilmTitle>
          <UserScore>User score: {parseInt(vote_average * 10)}%</UserScore>
          <SubTitle>Overview</SubTitle>
          <span>{overview}</span>
          <SubTitle>Genres</SubTitle>
          <span>{genres.length > 0 && getGenres(genres)}</span>
        </Decription>
      </DetalesConrainer>
      <ExtraDataList>
        <ExtraDataItem>
          <ExtraDataLink to="cast" state={{ from: cameBack }}>
            Cast
          </ExtraDataLink>
        </ExtraDataItem>
        <ExtraDataItem>
          <ExtraDataLink to="reviews" state={{ from: cameBack }}>
            Reviews
          </ExtraDataLink>
        </ExtraDataItem>
      </ExtraDataList>
      <Suspense fallback={<Trends>Loading...</Trends>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

Detales.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string,
    original_name: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};
