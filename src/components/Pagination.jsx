import React from 'react';

const Pagination = ({ categories, sliceCategories, loading }) => {
  return (
    <div className= {loading ? 'P' : 'Pagination'} >
      {
        !loading ?
          <div>
            <button onClick={() => sliceCategories(0, 8)}>1</button>
            <button onClick={() => sliceCategories(8, 14)}>2</button>
          </div>
          : null
      }

    </div>
  )
}

export default Pagination
