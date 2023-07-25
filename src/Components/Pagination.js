import React from 'react'

function Pagination(props) {
  return (
    <div className='pagination'>
        <button disabled={props.page<=1} onClick={()=>props.setPage(prev=>prev-1)}>Prev</button>
        <p>Page {props.page} of {props.total}</p>
        <button onClick={()=>props.setPage(prev=>prev+1)}>Next</button>
    </div>
  )
}

export default Pagination