import { useParams, useNavigate } from 'react-router-dom'
import { getFilteredCategory } from '../../Api'
import { useState, useEffect } from 'react'
import Mealist from '../../components/Meallist/'
import CategoryPagination from './CategoryPagination'

const Categorypage = () => {

  const { name } = useParams();
  const [meals, setmeals] = useState([]);
  const navigate = useNavigate();
  const [filteredMeals, setFilteredMeals] = useState([]);


  useEffect(() => {
    getFilteredCategory(name).then(data => {
      console.log(data.meals);
      setmeals(data.meals);
    })
  }, []);
  useEffect(() => {
    sliceMeals(0, 9);
  }, [meals]);

  const sliceMeals = (x, y) => {
    let a = meals.slice(x, y);
    setFilteredMeals(a);
  }

  return (
    <div className='Categorypage' >
      <i className="fa-solid fa-delete-left  btnrecipe" onClick={() => navigate(-1)}  ></i>

      <Mealist meals={filteredMeals} />
      <CategoryPagination meals={meals} sliceMeals={sliceMeals} />
    </div>
  )
}

export default Categorypage