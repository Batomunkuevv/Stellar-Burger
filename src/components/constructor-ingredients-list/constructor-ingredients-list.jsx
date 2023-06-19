import { useCallback } from 'react';
import styles from '../burger-constructor/burger-constructor.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { ConstructorTypes } from '../../services/redux/constructor/actions';
import { getConstructorIngredients } from '../../services/redux/constructor/selectors';

import ConstructorItem from '../constructor-item/burger-constructor-item';

const ConstructorIngredientsList = () => {
    const dispatch = useDispatch();

    const constructorIngredients = useSelector(getConstructorIngredients)

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = constructorIngredients[dragIndex];
        const newIngredients = [...constructorIngredients]
        newIngredients.splice(dragIndex, 1)
        newIngredients.splice(hoverIndex, 0, dragCard)

        dispatch({
            type: ConstructorTypes.UPDATE_LIST,
            payload: newIngredients,
        })
    }, [constructorIngredients, dispatch]);


    return (
        <ul className={`${styles['burger-constructor__list']} pr-2`}>
            {
                constructorIngredients.map((ingredient, index) => (
                    <ConstructorItem key={ingredient.handlerId}  index={index} {...ingredient} moveCard={moveCard}/>
                ))
            }
        </ul>
    )
}

export default ConstructorIngredientsList;