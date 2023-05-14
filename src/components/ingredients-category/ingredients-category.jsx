import React from 'react';
import ingredientPropTypes from '../../utils/ingredientPropTypes';
import styles from "../burger-ingredients/burger-ingredients.module.css";
import PropTypes from 'prop-types';
import BurgerIngredient from "../burger-ingredient/burger-ingredient";

const IngredientCategory = React.forwardRef(({ last, ingredients, title, onIngredientClick}, ref) => {
    const isLastClass = last ? '' : 'mb-10';

    return (
        <>
            <h3 ref={ref} className="text text_type_main-medium mb-6">{title}</h3>
            <div className={`${styles.ingredients__block} pl-4 ${isLastClass}`}>
                {ingredients.map(ingredient => {
                    return <BurgerIngredient key={ingredient._id} onClick={onIngredientClick} ingredientData={ingredient} count={1} />
                })}
            </div>
        </>
    )
})


IngredientCategory.propTypes = {
    last: PropTypes.bool,
    title: PropTypes.string.isRequired,
    onIngredientClick: PropTypes.func.isRequired,
    ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired
}

export default React.memo(IngredientCategory);