export const Film = ({ id, image, title, overview }) => {
  return (
    <li key={id}>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{overview}</p>
    </li>
  );
};
