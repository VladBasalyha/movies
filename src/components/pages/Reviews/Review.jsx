export const Review = ({ id, review, reviewer }) => {
  return (
    <>
      <li key={id}>
        <p>{reviewer}</p>
        <p>{review}</p>
      </li>
    </>
  );
};
