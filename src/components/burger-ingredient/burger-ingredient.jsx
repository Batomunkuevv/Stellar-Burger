import React from 'react';
import styles from './burger-ingredient.module.css';
import ingredientPropTypes from '../../utils/ingredientPropTypes';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { SET_INGREDIENT_DETAIL } from '../../services/redux/actions/ingredientDetails';
import { SET_DRAGGED_INGREDIENT } from '../../services/redux/actions/dnd';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';


const BurgerIngredient = ({ ingredientData }) => {
    const dispatch = useDispatch();
    const { name, image, price, counter } = ingredientData;

    const [{ opacity }, ingredientRef] = useDrag({
        type: 'ingredient',
        item: ingredientData,
        collect: monitor => (
            {
                opacity: monitor.isDragging() ? 0.5 : 1
            }
        )
    })

    const onDragHandler = () => {
        dispatch({ type: SET_DRAGGED_INGREDIENT, payload: ingredientData })
    }

    const handleClick = () => {
        document.body.classList.add('lock');
        dispatch({ type: SET_INGREDIENT_DETAIL, payload: ingredientData })
    }

    return (
        <article style={{ opacity }} onDrag={onDragHandler} draggable ref={ingredientRef} onClick={handleClick} className={`${styles.ingredient}`}>
            <Counter count={counter} size="default" />
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
    ingredientData: ingredientPropTypes
}

export default React.memo(BurgerIngredient);