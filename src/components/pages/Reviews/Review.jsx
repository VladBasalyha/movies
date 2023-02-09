import css from '../Reviews/Review.module.css';
const Review = ({ id, review, reviewer }) => {
  return (
    <div className={css.reviewWrapper}>
      <li key={id}>
        <span className={css.review}>Reviewer:</span>
        <p>{reviewer}</p>

        <p>{review}</p>
      </li>
    </div>
  );
};
export default Review;
