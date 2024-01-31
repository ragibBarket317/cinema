import { useContext, useState } from "react";
import { toast } from "react-toastify";
import tag from "../assets/assets/tag.svg";
import { MovieContext } from "../context/movieContext";
import { getImgUrl } from "../utils/utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Reating from "./Reating";

/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => {
  const [showMovieModal, setShowMovieModal] = useState(false);
  const { cartData, setCartData } = useContext(MovieContext);

  const handleCloseModal = () => {
    setShowMovieModal(false);
  };
  const handleAddToCart = (e, movie) => {
    e.stopPropagation();

    const find = cartData.find((item) => item.id === movie.id);

    if (!find) {
      setCartData([...cartData, movie]);
      toast.success("Add Item Successfully.", {
        position: "bottom-right",
      });
    } else {
      toast.error("This item already added.", {
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      {showMovieModal && (
        <MovieDetailsModal
          movie={movie}
          onAdd={(e) => handleAddToCart(e)}
          onCloseModal={handleCloseModal}
        ></MovieDetailsModal>
      )}
      <figure className="p-4 border h-full border-black/10 shadow-sm dark:border-white/10 rounded-xl relative">
        <a href="#" onClick={() => setShowMovieModal(!showMovieModal)}>
          <img
            className="w-[100%] h-[78%]  object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Reating rating={movie.rating}></Reating>
            </div>
            <a
              onClick={(e) => handleAddToCart(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm absolute bottom-4 left-2 right-2"
              href="#"
            >
              <img src={tag} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
