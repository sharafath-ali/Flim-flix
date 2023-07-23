import React from 'react'

function Pagination(props) {
  return (
    <div className='pagination'>
        <button>Prev</button>
        <p>Page {props.page} of {props.total}</p>
        <button>Next</button>
    </div>
  )
}

export default Pagination