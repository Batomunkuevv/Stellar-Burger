import ingredientPropTypes from '../../utils/ingredientPropTypes';
import styles from './ingredient-details.module.css';

const IngredientDetails = ({ ingredientData }) => {
    const { image_large, name, calories, proteins, fat, carbohydrates } = ingredientData;

    return (
        <div className='ingredient-details'>
            <div className={`${styles['ingredient-details__image']} mb-3`}>
                <img src={image_large} alt={name} title={name} />
            </div>
            <div className={`${styles['ingredient-details__name']} text text_type_main-medium mb-8`}>
                {name}
            </div>
            <ul className={`${styles['ingredient-details__nutrients']}`}>
                <li className={`${styles['ingredient-details__nutrient']}`}>
                    <span className={`${styles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Калории,ккал</span>
                    <span className={`${styles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`}>{calories}</span>
                </li>
                <li className={`${styles['ingredient-details__nutrient']}`}>
                    <span className={`${styles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Белки, г</span>
                    <span className={`${styles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`}>{proteins}</span>
                </li>
                <li className={`${styles['ingredient-details__nutrient']}`}>
                    <span className={`${styles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Жиры, г</span>
                    <span className={`${styles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`}>{fat}</span>
                </li>
                <li className={`${styles['ingredient-details__nutrient']}`}>
                    <span className={`${styles['ingredient-details__nutrient-caption']} text text_type_main-default text_color_inactive mb-2`}>Углеводы, г</span>
                    <span className={`${styles['ingredient-details__nutrient-value']} text text_type_digits-default text_color_inactive`}>{carbohydrates}</span>
                </li>
            </ul>
        </div>
    )
}

IngredientDetails.propTypes = {
    ingredientData: ingredientPropTypes
}

export default IngredientDetails;
