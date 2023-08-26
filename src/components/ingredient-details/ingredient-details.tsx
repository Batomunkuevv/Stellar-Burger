import styles from './ingredient-details.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIngredients, getIngredientsFailed, getIngredientsRequest } from '../../services/ingredients/selectors';

import Preloader from '../preloader/preloader';

// Types
import { TIngredient } from '../../types';

const IngredientDetails = () => {
    const { ingredientId } = useParams();

    const ingredients: TIngredient[] = useSelector(getIngredients);
    const ingredientsRequest: boolean = useSelector(getIngredientsRequest);
    const ingredientsFailed: boolean = useSelector(getIngredientsFailed);

    const ingredient = ingredients.find(ingredient => ingredient._id === ingredientId);

    return (
        <>
            {ingredientsRequest ? (
                <Preloader />
            ) : ingredientsFailed ? (
                <p>При получении ингредиента произошла ошибка</p>
            ) : ingredient && (
                <div className='ingredient-details'>
                    <div data-test="modal-ingredient-image" className={`${styles['ingredient-details__image']} mb-3`}>
                        <img src={ingredient.image_large} alt={ingredient.name} title={ingredient.name} />
                    </div>
                    <div data-test="modal-ingredient-name" className={`${styles['ingredient-details__name']} text text_type_main-medium mb-8`}>
                        {ingredient.name}
                    </div>
                    <ul className={`${styles['ingredient-details__nutrients']}`}>
                        <li className={`${styles['ingredient-details__nutrient']}`}>
                            <span className={`${styles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Калории,ккал</span>
                            <span className={`${styles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`} data-test="modal-ingredient-calories">{ingredient.calories}</span>
                        </li>
                        <li className={`${styles['ingredient-details__nutrient']}`}>
                            <span className={`${styles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Белки, г</span>
                            <span className={`${styles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`} data-test="modal-ingredient-proteins">{ingredient.proteins}</span>
                        </li>
                        <li className={`${styles['ingredient-details__nutrient']}`}>
                            <span className={`${styles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Жиры, г</span>
                            <span className={`${styles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`} data-test="modal-ingredient-fat">{ingredient.fat}</span>
                        </li>
                        <li className={`${styles['ingredient-details__nutrient']}`}>
                            <span className={`${styles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Углеводы, г</span>
                            <span className={`${styles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`} data-test="modal-ingredient-carbohydrates">{ingredient.carbohydrates}</span>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default IngredientDetails;
