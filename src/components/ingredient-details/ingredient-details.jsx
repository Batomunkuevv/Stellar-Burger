import styles from './ingredient-details.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIngredients } from '../../services/redux/ingredients/actions';

import Preloader from '../preloader/preloader';

const IngredientDetails = () => {
    const dispatch = useDispatch();

    const { ingredientId } = useParams();

    const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(store => store.ingredients);

    const ingredient = ingredients.find(ingredient => ingredient._id === ingredientId);

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch])


    return (
        <>
            {ingredientsRequest ? (
                <Preloader />
            ) : ingredientsFailed ? (
                <p>При получении ингредиента произошла ошибка</p>
            ) : ingredient && (
                <div className='ingredient-details'>
                    <div className={`${styles['ingredient-details__image']} mb-3`}>
                        <img src={ingredient.image_large} alt={ingredient.name} title={ingredient.name} />
                    </div>
                    <div className={`${styles['ingredient-details__name']} text text_type_main-medium mb-8`}>
                        {ingredient.name}
                    </div>
                    <ul className={`${styles['ingredient-details__nutrients']}`}>
                        <li className={`${styles['ingredient-details__nutrient']}`}>
                            <span className={`${styles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Калории,ккал</span>
                            <span className={`${styles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`}>{ingredient.calories}</span>
                        </li>
                        <li className={`${styles['ingredient-details__nutrient']}`}>
                            <span className={`${styles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Белки, г</span>
                            <span className={`${styles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`}>{ingredient.proteins}</span>
                        </li>
                        <li className={`${styles['ingredient-details__nutrient']}`}>
                            <span className={`${styles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Жиры, г</span>
                            <span className={`${styles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`}>{ingredient.fat}</span>
                        </li>
                        <li className={`${styles['ingredient-details__nutrient']}`}>
                            <span className={`${styles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Углеводы, г</span>
                            <span className={`${styles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`}>{ingredient.carbohydrates}</span>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default IngredientDetails;
