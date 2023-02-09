import { Alert } from 'react-bootstrap';
import Review from './Review';
import PropTypes from 'prop-types'; // ES6

const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews.length === 0 ? (
        <Alert variant="info">No reviews</Alert>
      ) : (
        reviews.map(({ id, author, content }) => {
          return (
            <ul className="p-0" key={id}>
              <Review key={id} review={content} reviewer={author}></Review>
            </ul>
          );
        })
      )}
    </>
  );
};
ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
export default ReviewsList;
