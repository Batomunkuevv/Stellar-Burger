import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../burger-constructor/burger-constructor.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_CONSTRUCTOR_LIST } from '../../services/redux/actions/constructor';

import ConstructorItem from '../constructor-item/burger-constructor-item';

const ConstructorIngredientsList = () => {
    const dispatch = useDispatch();

    const { ingredients } = useSelector(store => store.burgerConstructor)

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        // Получаем перетаскиваемый ингредиент
        const dragCard = ingredients[dragIndex];
        const newIngredients = [...ingredients]
        // Удаляем перетаскиваемый элемент из массива
        newIngredients.splice(dragIndex, 1)
        // Вставляем элемент на место того элемента,
        // над которым мы навели мышку с "перетаскиванием"
        // Тут просто создается новый массив, в котором изменен порядок наших элементов
        newIngredients.splice(hoverIndex, 0, dragCard)
        // В примере react-dnd используется библиотека immutability-helper
        // Которая позволяет описывать такую имутабельную логику более декларативно
        // Но для лучше понимания обновления массива,
        // Советую использовать стандартный splice

        dispatch({
            type: UPDATE_CONSTRUCTOR_LIST,
            payload: newIngredients,
        })
    }, [ingredients, dispatch]);


    return (
        <ul className={`${styles.burger_constructor__list} pr-2`}>
            {
                ingredients.map((ingredient, index) => (
                    <ConstructorItem key={ingredient.handlerId}  index={index} {...ingredient} moveCard={moveCard}/>
                ))
            }
        </ul>
    )
}

export default ConstructorIngredientsList;