import { useState, useEffect } from 'react'
import { getAllCategories } from '../../Api'
import Catgorylist from '../../components/Categorylist/'
import Pagination from '../../components/Pagination';

const Homepage = () => {

  const [categories, setcategories]= useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(()=> {
    getAllCategories().then(data =>{
      setcategories(data.categories);
    })
    setLoading(true);
  },[]);
  useEffect(() => {
    sliceCategories(0,8);
  }, [categories]);

  const sliceCategories = (x, y) => {
    let a = categories.slice(x, y);
    setFilteredCategories(a);
  }


  return (
    <div className='Homepage' >
      {loading ? <Catgorylist categories={filteredCategories} /> : <h1 style={{textAlign:'center'}}>Loading...</h1>} 
      <Pagination categories={categories} sliceCategories={sliceCategories} />
    </div>
  )
}

export default Homepage