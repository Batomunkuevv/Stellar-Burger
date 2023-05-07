import { useMemo } from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "../ingredient/ingredient";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import dataPropTypes from '../../utils/data';

const BurgerIngredients = ({ data }) => {
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
                        return <Ingredient key={ingredient._id} {...ingredient} />
                    })}
                </div>
                <h3 className="text text_type_main-medium mb-6">Соусы</h3>
                <div className={`${burgerIngredientsStyles.ingredients__block} pl-4 mb-10`}>
                    {sauces.map(ingredient => {
                        return <Ingredient key={ingredient._id} {...ingredient} />
                    })}
                </div>
                <h3 className="text text_type_main-medium mb-6">Начинки</h3>
                <div className={`${burgerIngredientsStyles.ingredients__block} pl-4`}>
                    {mains.map(ingredient => {
                        return <Ingredient key={ingredient._id} {...ingredient} />
                    })}
                </div>
            </div>
        </div>
    );
}

BurgerIngredients.propTypes = dataPropTypes;

export default BurgerIngredients;
