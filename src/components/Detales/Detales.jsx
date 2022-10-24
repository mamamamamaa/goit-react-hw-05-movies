import { useLocation, Link, Outlet } from 'react-router-dom';
import { DetalesConrainer, GoBack } from './Detales.styled';

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
      <GoBack to={comeBack}>Go back</GoBack>
      <DetalesConrainer>
        <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="" />
        <div>
          <h1>
            {original_title || original_name}
            {` (${getYear(release_date)})`}
          </h1>
          <span>User score: {parseInt(vote_average * 10)}%</span>
          <h2>Overview</h2>
          <span>{overview}</span>
          <h2>Genres</h2>
          <span>{genres.length > 0 && getGenres(genres)}</span>
        </div>
      </DetalesConrainer>
      <ul>
        <li>
          <Link to="cast" state={{ from: comeBack }}>
            link to cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: comeBack }}>
            link to reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
