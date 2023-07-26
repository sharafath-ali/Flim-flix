import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
function Loader() {
  return (
    <div className='loader1' style={{"color":"danger"}}><CircularProgress disableShrink /></div>
  )
}

export default Loader