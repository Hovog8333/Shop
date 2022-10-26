
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getMealById } from '../../Api'
import Loading from '../../components/Loading/Loading';


const Recipe = () => {

    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getMealById(id).then(data => {
            setRecipe(data.meals[0])
        }).catch(err => {
            setLoading(true);
        })
    }, []);


    return (
        <div className='Recipe' >
            {
                loading ? <Loading /> :
                    <div>
                        <i className="fa-solid fa-delete-left  btnrecipe" onClick={() => navigate(-1)}  ></i>
                        <div className="rec">
                            <img className='recepimg' src={recipe.strMealThumb} />
                            <div className="recep">
                                <h3 className='recipeh3' >{recipe.strArea}</h3>
                                <h3>{recipe.strIngredient1} <i> {recipe.strMeasure1}</i></h3>
                                <h3>{recipe.strIngredient2} <i> {recipe.strMeasure2}</i></h3>
                                <h3>{recipe.strIngredient3} <i> {recipe.strMeasure3}</i></h3>
                                <h3>{recipe.strIngredient4} <i> {recipe.strMeasure4}</i></h3>
                                <h3>{recipe.strIngredient5} <i> {recipe.strMeasure5}</i></h3>
                                <h3>{recipe.strIngredient6} <i> {recipe.strMeasure6}</i></h3>
                                <h3>{recipe.strIngredient7} <i> {recipe.strMeasure7}</i></h3>
                                <h3>{recipe.strIngredient8} <i> {recipe.strMeasure8}</i></h3>
                                <h3>{recipe.strIngredient9} <i> {recipe.strMeasure9}</i></h3>
                                <h3>{recipe.strIngredient10} <i> {recipe.strMeasure10}</i></h3>
                                <h3>{recipe.strIngredient11} <i> {recipe.strMeasure11}</i></h3>
                                <h3>{recipe.strIngredient12} <i> {recipe.strMeasure12}</i></h3>
                                <h3>{recipe.strIngredient13} <i> {recipe.strMeasure13}</i></h3>
                                <h3>{recipe.strIngredient14} <i> {recipe.strMeasure14}</i></h3>
                                <h3>{recipe.strIngredient15} <i> {recipe.strMeasure15}</i></h3>
                                <h3>{recipe.strIngredient16} <i> {recipe.strMeasure16}</i></h3>
                                <h3>{recipe.strIngredient17} <i> {recipe.strMeasure17}</i></h3>
                                <h3>{recipe.strIngredient18} <i> {recipe.strMeasure18}</i></h3>
                                <h3>{recipe.strIngredient19} <i> {recipe.strMeasure19}</i></h3>
                                <h3>{recipe.strIngredient20} <i> {recipe.strMeasure20}</i></h3>
                                <h3><a href={recipe.strYoutube} target="_blank" style={{ color: 'red' }}>Video - how to cook</a></h3>

                            </div>
                        </div>
                    </div>
            }


        </div>
    )
}

export default Recipe