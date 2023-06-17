import React from 'react';
import styles from './burger-ingredient.module.css';
import ingredientPropTypes from '../../utils/ingredientPropTypes';

import { Link, useLocation } from 'react-router-dom';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { DndTypes } from '../../services/redux/dnd/actions';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';


const BurgerIngredient = ({ ingredientData }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { name, image, price, counter, _id } = ingredientData;

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
        dispatch({ type: DndTypes.SET_DRAGGED_INGREDIENT, payload: ingredientData })
    }

    return (
        <article style={{ opacity }} onDrag={onDragHandler} draggable ref={ingredientRef} >
            <Link className={`${styles.ingredient}`} to={`ingredients/${_id}`} state={{from: location}}>
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
            </Link>
        </article>
    )
}

BurgerIngredient.propTypes = {
    ingredientData: ingredientPropTypes
}

export default React.memo(BurgerIngredient);