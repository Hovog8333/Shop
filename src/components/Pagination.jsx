import React from 'react'

const Pagination = ({categories, sliceCategories}) => {
  return (
    <div className='Pagination'>
        <button onClick={()=>sliceCategories(0,8)}>1</button>
        <button onClick={()=>{
            sliceCategories(8,14);
        }}>2</button>
    </div>
  )
}

export default Pagination
