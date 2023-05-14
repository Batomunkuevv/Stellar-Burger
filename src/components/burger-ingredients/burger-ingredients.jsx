import React from 'react';
import { useContext, useMemo, useRef, useState } from 'react';
import styles from "./burger-ingredients.module.css";
import IngredientsContext from '../../utils/appContext';
import IngredientDetails from '../ingredient-details/ingredient-details';
import IngredientsCategory from '../ingredients-category/ingredients-category';
import Modal from '../modal/modal';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = () => {
    const ingredients = useContext(IngredientsContext);
    const [currentTab, setCurrentTab] = useState('buns');
    const [ingredientInModal, setIngredientInModal] = useState(null);
    const titlesRefs = {
        'buns': useRef(null),
        'sauces': useRef(null),
        'mains': useRef(null),
    }

    const buns = useMemo(() => ingredients.filter((item) => item.type === 'bun'), [ingredients]);
    const mains = useMemo(() => ingredients.filter((item) => item.type === 'main'), [ingredients]);
    const sauces = useMemo(() => ingredients.filter((item) => item.type === 'sauce'), [ingredients]);

    const closeIngredientModal = () => {
        setIngredientInModal(null)
        document.body.classList.remove('lock');
    };

    const onTabClick = (tab) => {
        setCurrentTab(tab);

        const element = titlesRefs[tab].current;
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div className="ingredients pt-10">
                <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
                <div className={`${styles.ingredients__tabs} mb-10`}>
                    <Tab onClick={onTabClick} active={currentTab === 'buns'} value='buns'>Булки</Tab>
                    <Tab onClick={onTabClick} active={currentTab === 'sauces'} value='sauces'>Соусы</Tab>
                    <Tab onClick={onTabClick} active={currentTab === 'mains'} value='mains'>Начинки</Tab>
                </div>
                <div className={`${styles.ingredients__body} ingredients__body mb-4`}>
                    <IngredientsCategory ref={titlesRefs['buns']} onIngredientClick={setIngredientInModal} title="Булки" ingredients={buns}></IngredientsCategory>
                    <IngredientsCategory ref={titlesRefs['sauces']} onIngredientClick={setIngredientInModal} title="Соусы" ingredients={sauces}></IngredientsCategory>
                    <IngredientsCategory ref={titlesRefs['mains']} onIngredientClick={setIngredientInModal} title="Начинки" last={true} ingredients={mains}></IngredientsCategory>
                </div>
            </div>
            {ingredientInModal && <Modal onClose={closeIngredientModal} modalTitle='Детали ингредиента'>
                <IngredientDetails ingredientData={ingredientInModal} />
            </Modal>}
        </>

    );
}

export default BurgerIngredients;
