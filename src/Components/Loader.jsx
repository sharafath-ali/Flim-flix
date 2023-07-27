import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
function Loader() {
  return (
    <div className='loader' style={{"color":"danger"}}><CircularProgress disableShrink /></div>
  )
}

export default Loader