import React, { useState, useContext } from "react";
import heartfilled from "../Assets/heart-filled.svg";
import heartlined from "../Assets/heart-lined.svg";
import { AppContext } from "../Context/AppGlobalState";
const FavoriteButton = ({ movie }) => {
  const { state, dispatch } = useContext(AppContext);

  let favorited = state?.favorites?.some((item) => item?.id === movie?.id);

  const handleClick = () => {
    if (favorited) {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: movie.id,
      });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: movie });
    }
  };
  return (
    <div className="favButton" onClick={handleClick}>
      <img src={favorited ? heartfilled : heartlined} width={24} />
    </div>
  );
};

export default FavoriteButton;