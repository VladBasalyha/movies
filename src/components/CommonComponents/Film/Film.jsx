import css from '../Film/Film.module.css';
import PropTypes from 'prop-types';

const Film = ({ id, image, title }) => {
  return (
    <li className={css.filmCard} key={id}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </li>
  );
};
Film.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Film;
