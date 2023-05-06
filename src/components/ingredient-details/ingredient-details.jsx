import ingredientDetailsStyles from './ingredient-details.module.css';

const IngredientDetails = (props) => {
    return (
        <div className='ingredient-details'>
            <div className={`${ingredientDetailsStyles['ingredient-details__image']} mb-3`}>
                <img src={props.image} alt={props.name} title={props.name} />
            </div>
            <div className={`${ingredientDetailsStyles['ingredient-details__name']} text text_type_main-medium mb-8`}>
                {props.name}
            </div>
            <ul className={`${ingredientDetailsStyles['ingredient-details__nutrients']}`}>
                <li className={`${ingredientDetailsStyles['ingredient-details__nutrient']}`}>
                    <span className={`${ingredientDetailsStyles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Калории,ккал</span>
                    <span className={`${ingredientDetailsStyles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`}>{props.calories}</span>
                </li>
                <li className={`${ingredientDetailsStyles['ingredient-details__nutrient']}`}>
                    <span className={`${ingredientDetailsStyles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Белки, г</span>
                    <span className={`${ingredientDetailsStyles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`}>{props.proteins}</span>
                </li>
                <li className={`${ingredientDetailsStyles['ingredient-details__nutrient']}`}>
                    <span className={`${ingredientDetailsStyles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Жиры, г</span>
                    <span className={`${ingredientDetailsStyles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`}>{props.fat}</span>
                </li>
                <li className={`${ingredientDetailsStyles['ingredient-details__nutrient']}`}>
                    <span className={`${ingredientDetailsStyles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Углеводы, г</span>
                    <span className={`${ingredientDetailsStyles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`}>{props.carbohydrates}</span>
                </li>
            </ul>
        </div>
    )
}

export default IngredientDetails;
