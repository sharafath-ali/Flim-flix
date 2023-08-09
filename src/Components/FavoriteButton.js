import React from 'react'
import heartfilled from '../Assets/heart-filled.svg'
import heartlined from '../Assets/heart-lined.svg'
function FavoriteButton() {
  return (
    <div className="favButton"><img src={heartfilled} width='15px'/></div>
  )
}

export default FavoriteButton