import React, { useState, useContext } from 'react'
import heartfilled from '../Assets/heart-filled.svg'
import heartlined from '../Assets/heart-lined.svg'
import { AppContext } from '../Context/AppGlobalState'
const FavoriteButton = ({ movie }) => {
  const { state, dispatch } = useContext(AppContext);

  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite((prev) => !prev);
    if (isFavorite) {
      dispatch({
        type: 'add', payload: movie.id
      });
    }
    else {
      dispatch({ type: 'remove', payload: movie.id });
    }
  }
  return (
    <div className="favButton" onClick={handleClick}><img src={isFavorite ? heartfilled : heartlined} width='15px' /></div>
  );
};

export default FavoriteButton;