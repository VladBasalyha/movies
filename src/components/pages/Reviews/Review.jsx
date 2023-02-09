import css from '../Reviews/Review.module.css';
import PropTypes from 'prop-types';

const Review = ({ review, reviewer }) => {
  return (
    <div className={css.reviewWrapper}>
      <li>
        <span className={css.review}>Reviewer:</span>
        <p>{reviewer}</p>

        <p>{review}</p>
      </li>
    </div>
  );
};
Review.propTypes = {
  review: PropTypes.string.isRequired,
  reviewer: PropTypes.string.isRequired,
};
export default Review;
