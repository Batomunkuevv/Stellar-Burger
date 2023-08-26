import React from "react";
import styles from "../burger-ingredients/burger-ingredients.module.css";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import { useSelector } from "../../hooks/redux-hooks";
import { getIngredientsCounters } from "../../services/constructor/selectors";

// Types
import { TIngredientsCategory } from "../../types";

const IngredientCategory = React.forwardRef<HTMLHeadingElement, TIngredientsCategory>(({ last, ingredients, title, nameTab }, ref) => {
    const isLastClass = last ? "" : "mb-10";

    const ingredietsCounters: any = useSelector(getIngredientsCounters);

    return (
        <div className="ingredients__category">
            <h3 data-tab={nameTab} ref={ref} className="text text_type_main-medium mb-6">
                {title}
            </h3>
            <div data-test-category={nameTab} className={`${styles.ingredients__block} pl-4 ${isLastClass}`}>
                {ingredients.map((ingredient) => {
                    return <BurgerIngredient key={ingredient._id} {...ingredient} count={ingredietsCounters[ingredient._id]} />;
                })}
            </div>
        </div>
    );
});

export default React.memo(IngredientCategory);
