import { useCallback } from "react";
import styles from "../burger-constructor/burger-constructor.module.css";
import { useDispatch, useSelector } from "../../hooks/redux-hooks";
import { ConstructorTypes } from "../../services/constructor/constants";
import { getConstructorIngredients } from "../../services/constructor/selectors";

// Types
import { TConstructorIngredient } from "../../types";

import ConstructorItem from "../constructor-item/burger-constructor-item";

const ConstructorIngredientsList = () => {
    const dispatch = useDispatch();

    const constructorIngredients: TConstructorIngredient[] = useSelector(getConstructorIngredients);

    const moveCard = useCallback(
        (dragIndex: number, hoverIndex: number) => {
            const dragCard = constructorIngredients[dragIndex];
            const newIngredients = [...constructorIngredients];
            newIngredients.splice(dragIndex, 1);
            newIngredients.splice(hoverIndex, 0, dragCard);

            dispatch({
                type: ConstructorTypes.UPDATE_LIST,
                payload: newIngredients,
            });
        },
        [constructorIngredients, dispatch]
    );

    return (
        <ul className={`${styles["burger-constructor__list"]} pr-2`}>
            {constructorIngredients.map((ingredient, index) => (
                <ConstructorItem key={ingredient.handlerId} index={index} {...ingredient} moveCard={moveCard} />
            ))}
        </ul>
    );
};

export default ConstructorIngredientsList;
