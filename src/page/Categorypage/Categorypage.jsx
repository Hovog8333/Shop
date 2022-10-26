import { useParams, useNavigate } from 'react-router-dom'
import { getFilteredCategory } from '../../Api'
import { useState, useEffect } from 'react'
import Mealist from '../../components/Meallist/'
import CategoryPagination from './CategoryPagination';
import Loading from '../../components/Loading/Loading';


const Categorypage = () => {

  const { name } = useParams();
  const [meals, setmeals] = useState([]);
  const navigate = useNavigate();
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    getFilteredCategory(name).then(data => {
      setmeals(data.meals);
    }).catch(err => {
      setLoading(true);
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
      {
        loading ? <Loading /> :
          <div>
            <i className="fa-solid fa-delete-left  btnrecipe" onClick={() => navigate(-1)}  ></i>
            <Mealist meals={filteredMeals} />
            <CategoryPagination meals={meals} sliceMeals={sliceMeals} />
          </div>
      }



    </div>
  )
}

export default Categorypage