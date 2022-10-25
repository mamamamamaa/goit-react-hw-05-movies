import { useState, useEffect } from 'react';
import { getMovieReviews } from 'fetchAPI';
import { useParams } from 'react-router-dom';
import { ReviewersList, Reviewer } from './Reviewers.styled';

const Reviewers = () => {
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
        <ReviewersList>
          {reviewers.map(({ id, author, content }) => (
            <li key={id}>
              <Reviewer>Reviewer: {author}</Reviewer>
              <p>"{content}"</p>
            </li>
          ))}
        </ReviewersList>
      ) : (
        <p>Sorry, we have no results!!!</p>
      )}
    </>
  );
};

export default Reviewers;
