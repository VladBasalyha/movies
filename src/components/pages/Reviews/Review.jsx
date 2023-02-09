import css from '../Reviews/Review.module.css';
export const Review = ({ id, review, reviewer }) => {
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
