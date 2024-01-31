/* eslint-disable react/prop-types */
import star from "../assets/assets/star.svg";

const Reating = ({ rating }) => {
  const stars = Array(rating).fill(star);

  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="" />
      ))}
    </>
  );
};

export default Reating;
