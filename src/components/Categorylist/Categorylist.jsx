import React from 'react'
import Categoryitem from '../Categoryitem';
import Loading from '../Loading/Loading';

const Categorylist = ({categories, loading}) => {
  return (
    <div className='Categorylist' >
      
      {
        loading ? <Loading /> : categories.map(category => <Categoryitem key={category.idCategory} {...category} /> )
      }
    </div>
  )
}

export default Categorylist