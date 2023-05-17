import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredient.module.css';
import ingredientPropTypes from '../../utils/ingredientPropTypes';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';


const BurgerIngredient = ({ ingredientData, count, onClick }) => {
    const { name, image, price} = ingredientData;

    const handleClick = () => {
        document.body.classList.add('lock');
        onClick(ingredientData);
    }

    return (
        <article onClick={handleClick} className={`${styles.ingredient}`}>
            {count && <Counter count={count} size="default" />}
            <div className={`${styles.ingredient__img} mb-2`}>
                <img src={image} alt={name} title={name} />
            </div>
            <div className={`${styles.ingredient__currency} text text_type_digits-default mb-2`} >
                {price}
                <CurrencyIcon type="primary" />
            </div>
            <div className={`${styles.ingredient__name} text text_type_main-default`}>
                {name}
            </div>
        </article>
    )
}

BurgerIngredient.propTypes = {
    ingredientData: ingredientPropTypes,
    count: PropTypes.number,
    onIngredientClick: PropTypes.func
}

export default React.memo(BurgerIngredient);