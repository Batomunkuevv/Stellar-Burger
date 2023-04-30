import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "../ingredient/ingredient";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import data from '../../utils/data';

const BurgerIngredients = () => {
    const buns = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
    const mains = useMemo(() => data.filter((item) => item.type === 'main'), [data]);
    const sauces = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);
    
    return (
        <div className="ingredients pt-10">
            <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
            <div className={`${burgerIngredientsStyles.ingredients__tabs} mb-10`}>
                <Tab active value='bun'>Булки</Tab>
                <Tab value='sauce'>Соусы</Tab>
                <Tab value='main'>Начинки</Tab>
            </div>
            <div className={`${burgerIngredientsStyles.ingredients__body} ingredients__body mb-4`}>
                <h3 className="text text_type_main-medium mb-6">Булки</h3>
                <div className={`${burgerIngredientsStyles.ingredients__block} pl-4 mb-10`}>
                    {buns.map(ingredient => {
                        return <Ingredient key={ingredient._id} count={ingredient.__v} price={ingredient.price} name={ingredient.name} image={ingredient.image} />
                    })}
                </div>
                <h3 className="text text_type_main-medium mb-6">Соусы</h3>
                <div className={`${burgerIngredientsStyles.ingredients__block} pl-4 mb-10`}>
                    {sauces.map(ingredient => {
                        return <Ingredient key={ingredient._id} count={ingredient.__v} price={ingredient.price} name={ingredient.name} image={ingredient.image} />
                    })}
                </div>
                <h3 className="text text_type_main-medium mb-6">Начинки</h3>
                <div className={`${burgerIngredientsStyles.ingredients__block} pl-4`}>
                    {mains.map(ingredient => {
                        return <Ingredient key={ingredient._id} count={ingredient.__v} price={ingredient.price} name={ingredient.name} image={ingredient.image} />
                    })}
                </div>
            </div>
        </div>
    );
}

Tab.propTypes = {
    active: PropTypes.bool,
    value: PropTypes.string.isRequired,
}

Ingredient.propTypes = {
    count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default BurgerIngredients;
