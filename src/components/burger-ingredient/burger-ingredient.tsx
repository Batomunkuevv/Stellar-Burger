import React, { FC } from "react";
import styles from "./burger-ingredient.module.css";

// Types
import { TIngredientWithCount } from "../../types";

import { Link, useLocation } from "react-router-dom";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";

const BurgerIngredient: FC<TIngredientWithCount> = (props) => {
    const location = useLocation();

    const { name, image,price, _id, count } = props;

    const [{ opacity }, ingredientRef] = useDrag({
        type: "ingredient",
        item: props,
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
        }),
    });

    return (
        <article style={{ opacity }} draggable ref={ingredientRef}>
            <Link className={`${styles.ingredient}`} to={`ingredients/${_id}`} state={{ from: location }}>
                <Counter count={count} size="default" />
                <div className={`${styles.ingredient__img} mb-2`}>
                    <img src={image} alt={name} title={name} />
                </div>
                <div className={`${styles.ingredient__currency} text text_type_digits-default mb-2`}>
                    {price}
                    <CurrencyIcon type="primary" />
                </div>
                <div className={`${styles.ingredient__name} text text_type_main-default`}>{name}</div>
            </Link>
        </article>
    );
};

export default React.memo(BurgerIngredient);
