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

  const comeBack = location.state.from || '/';
  return (
    <div>
      <GoBack to={comeBack}>
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
          <ExtraDataLink to="cast" state={{ from: comeBack }}>
            Cast
          </ExtraDataLink>
        </ExtraDataItem>
        <ExtraDataItem>
          <ExtraDataLink to="reviews" state={{ from: comeBack }}>
            Reviews
          </ExtraDataLink>
        </ExtraDataItem>
      </ExtraDataList>
      <Outlet />
    </div>
  );
};
