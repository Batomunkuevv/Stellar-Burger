import { FC, useEffect, useMemo, useRef, useState } from "react";
import styles from "./burger-ingredients.module.css";
import { useSelector } from "react-redux";

// Types
import { TIngredient, TTitleRef } from "../../types";

import Preloader from "../preloader/preloader";
import Tabs from "../tabs/tabs";
import IngredientsCategory from "../ingredients-category/ingredients-category";
import { getIngredients, getIngredientsRequest, getIngredientsFailed } from "../../services/ingredients/selectors";

const BurgerIngredients: FC = () => {
    const [currentTab, setCurrentTab] = useState("buns");

    const ingredients: TIngredient[] = useSelector(getIngredients);
    const ingredientsRequest: boolean = useSelector(getIngredientsRequest);
    const ingredientsFailed: boolean = useSelector(getIngredientsFailed);

    const { buns, mains, sauces } = useMemo(() => {
        return {
            buns: ingredients.filter((item: TIngredient) => item.type === "bun"),
            mains: ingredients.filter((item: TIngredient) => item.type === "main"),
            sauces: ingredients.filter((item: TIngredient) => item.type === "sauce"),
        };
    }, [ingredients]);

    const titlesRefs: Array<TTitleRef> = [
        { name: "buns", title: useRef<HTMLHeadingElement>(null) },
        { name: "sauces", title: useRef<HTMLHeadingElement>(null) },
        { name: "mains", title: useRef<HTMLHeadingElement>(null) },
    ];
    
    const ingredientsBodyRef = useRef<HTMLDivElement>(null);

    const observeBurgerIngredients = () => {
        if (!titlesRefs[0].title.current || !titlesRefs[1].title.current || !titlesRefs[2].title.current) return;

        const options = {
            root: ingredientsBodyRef.current,
            rootMargin: "0px 0px -80% 0px",
            threshold: 1,
        };

        const observer = new IntersectionObserver(callback, options);
        const titles: Array<HTMLHeadingElement | null> = titlesRefs.map((item) => item.title.current);

        titles.forEach((title) => {
            if (title !== null) {
                observer.observe(title);
            }
        });

        function callback(entries: IntersectionObserverEntry[]) {
            entries.forEach((entry: IntersectionObserverEntry) => {
                const { isIntersecting, target, intersectionRatio } = entry;
                const titleTab = target.getAttribute('data-tab');

                if (isIntersecting && intersectionRatio === 1 && titleTab !== null) {
                    setCurrentTab(titleTab);
                }
            });
        }
    };

    useEffect(() => {
        observeBurgerIngredients();
    }, [titlesRefs]);

    return (
        <>
            {ingredientsRequest ? (
                <Preloader extraClass="preloader--ingredients" />
            ) : ingredientsFailed ? (
                "Произошла ошибка в получении ингредиентов"
            ) : (
                <div className="ingredients">
                    <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} titlesRefs={titlesRefs} />
                    <div ref={ingredientsBodyRef} className={`${styles.ingredients__body} ingredients__body mb-4`}>
                        <IngredientsCategory nameTab="buns" ref={titlesRefs[0].title} title="Булки" ingredients={buns}></IngredientsCategory>
                        <IngredientsCategory nameTab="sauces" ref={titlesRefs[1].title} title="Соусы" ingredients={sauces}></IngredientsCategory>
                        <IngredientsCategory nameTab="mains" ref={titlesRefs[2].title} title="Начинки" last={true} ingredients={mains}></IngredientsCategory>
                    </div>
                </div>
            )}
        </>
    );
};

export default BurgerIngredients;
