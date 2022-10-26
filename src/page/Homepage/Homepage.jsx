import { useState, useEffect } from 'react'
import { getAllCategories } from '../../Api'
import Catgorylist from '../../components/Categorylist/'
import Pagination from '../../components/Pagination';
import Loading from '../../components/Loading/Loading';

const Homepage = () => {

  const [categories, setcategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    // .then(res => res.json())
    getAllCategories().then(data => {
      setcategories(data.categories);
    }).catch(err => {
      setLoading(true);
    })

  }, []);

  useEffect(() => {
    sliceCategories(0, 8);
  }, [categories]);

  const sliceCategories = (x, y) => {
    let a = categories.slice(x, y);
    setFilteredCategories(a);
  }


  return (
    <div className={loading ? 'H' : 'Homepage'} >
      {loading ? <Loading /> :
        <div>
          <Catgorylist categories={filteredCategories} loading={loading} />
          <Pagination categories={categories} sliceCategories={sliceCategories} loading={loading} />
        </div>
      } 
    </div>
  )
}

export default Homepage