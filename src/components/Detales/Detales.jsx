import { DetalesConrainer } from './Detales.styled';

export const Detales = ({ data }) => {
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
  return (
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
  );
};
