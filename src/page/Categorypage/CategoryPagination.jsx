

const CategoryPagination = ({ meals, sliceMeals }) => {
    let pageNumber = [];
    for (let i = 0; i < Math.ceil(meals.length / 9); i++) {
        pageNumber.push(i)
    }
    return (
        <div className="CategoryPagination">
            {
                pageNumber.map(el =>
                    <button
                        key={el}
                        onClick={() => {
                            sliceMeals(el * 9, el * 9 + 9);
                        }}
                    >{el + 1}</button>
                )
            }
        </div>
    )
}

export default CategoryPagination