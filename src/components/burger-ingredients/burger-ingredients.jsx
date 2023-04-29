import React from "react";
import PropTypes from 'prop-types';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "../ingredient/ingredient";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import data from '../../utils/data';

class BurgerIngredients extends React.Component {
    render() {
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
                        {data.map(ingredient => {
                            if (ingredient.type === 'bun') {
                                return <Ingredient key={ingredient._id} count = {ingredient.__v} price={ingredient.price} name={ingredient.name} image={ingredient.image} />
                            }
                        })}
                    </div>
                    <h3 className="text text_type_main-medium mb-6">Соусы</h3>
                    <div className={`${burgerIngredientsStyles.ingredients__block} pl-4 mb-10`}>
                        {data.map(ingredient => {
                            if (ingredient.type === 'sauce') {
                                return <Ingredient key={ingredient._id} count = {ingredient.__v} price={ingredient.price} name={ingredient.name} image={ingredient.image} />
                            }
                        })}
                    </div>
                    <h3 className="text text_type_main-medium mb-6">Начинки</h3>
                    <div className={`${burgerIngredientsStyles.ingredients__block} pl-4`}>
                        {data.map(ingredient => {
                            if (ingredient.type === 'main') {
                                return <Ingredient key={ingredient._id} count = {ingredient.__v} price={ingredient.price} name={ingredient.name} image={ingredient.image} />
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

Tab.propTypes = {
    active: PropTypes.bool,
    value: PropTypes.string.isRequired,
}

Ingredient.propTypes = {
    count: PropTypes.number,
    price: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
}

export default BurgerIngredients;
