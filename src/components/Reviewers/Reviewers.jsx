import { useState, useEffect } from 'react';
import { getMovieReviews } from 'fetchAPI';
import { useParams } from 'react-router-dom';

export const Reviewers = () => {
  const [reviewers, setReviewers] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getReviewers = async () =>
      setReviewers((await getMovieReviews(id)).results);
    getReviewers();
  }, [id]);

  return (
    <>
      {reviewers.length > 0 ? (
        <ul>
          {reviewers.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, we have no results!!!</p>
      )}
    </>
  );
};
