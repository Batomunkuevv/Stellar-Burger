import { useEffect, useMemo, useRef, useState } from 'react';
import styles from "./burger-ingredients.module.css";
import { useSelector } from 'react-redux';

import Preloader from '../preloader/preloader';
import Tabs from '../tabs/tabs';
import IngredientsCategory from '../ingredients-category/ingredients-category';

const BurgerIngredients = () => {
    const [currentTab, setCurrentTab] = useState('buns');
    const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(store => store.ingredients);

    const {buns, mains, sauces} = useMemo(() => {
        return {
            buns: ingredients.filter((item) => item.type === 'bun'),
            mains: ingredients.filter((item) => item.type === 'main'),
            sauces: ingredients.filter((item) => item.type === 'sauce')
        }
    }, [ingredients])
    
    const titlesRefs = [
        { name: 'buns', title: useRef(null) },
        { name: 'sauces', title: useRef(null) },
        { name: 'mains', title: useRef(null) }
    ]
    const ingredientsBodyRef = useRef(null);

    const observeBurgerIngredients = () => {
        if (!titlesRefs[0].title.current || !titlesRefs[1].title.current || !titlesRefs[2].title.current) return;

        const options = {
            root: ingredientsBodyRef.current,
            rootMargin: '0px 0px -80% 0px',
            threshold: 1
        };

        const observer = new IntersectionObserver(callback, options);
        const titles = titlesRefs.map(item => item.title.current);

        titles.forEach(title => {
            observer.observe(title);
        })

        function callback(entries, observer) {
            entries.forEach((entry) => {
                const { isIntersecting, target, intersectionRatio } = entry;
                const titleTab = target.dataset.tab;

                if (isIntersecting && intersectionRatio === 1) {
                    setCurrentTab(titleTab);
                }
            });
        }
    }

    useEffect(() => {
        observeBurgerIngredients();
    }, [titlesRefs])

    return (
        <>
            {
                (ingredientsRequest ? (
                    <Preloader extraClass="preloader--ingredients" />
                ) : ingredientsFailed ? (
                    'Произошла ошибка в получении ингредиентов'
                ) : (
                    (
                        <div className='ingredients'>
                            <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} titlesRefs={titlesRefs} />
                            <div ref={ingredientsBodyRef} className={`${styles.ingredients__body} ingredients__body mb-4`}>
                                <IngredientsCategory nameTab="buns" ref={titlesRefs[0].title} title="Булки" ingredients={buns}></IngredientsCategory>
                                <IngredientsCategory nameTab="sauces" ref={titlesRefs[1].title} title="Соусы" ingredients={sauces}></IngredientsCategory>
                                <IngredientsCategory nameTab="mains" ref={titlesRefs[2].title} title="Начинки" last={true} ingredients={mains}></IngredientsCategory>
                            </div>
                        </div>
                    )
                )
                )
            }
        </>

    );
}
export default BurgerIngredients;
