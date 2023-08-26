import { name } from "./constants";

import { RootStore } from "../types";
import { TConstructorIngredient, TConstructorItems } from "../../types";

import { createSelector } from "reselect";

const getBun = (store: RootStore): TConstructorIngredient | null => store[name].bun;

export const getConstructorIngredients = (store: RootStore): TConstructorIngredient[] => store[name].constructorIngredients;

export const getConstructorItems = createSelector(
    getBun,
    getConstructorIngredients,
    (bun, constructorIngredients): TConstructorItems => ({
        bun,
        constructorIngredients,
    })
);

export const getTotalPrice = createSelector(getBun, getConstructorIngredients, (bun, constructorIngredients): number => {
    return (bun ? bun.price * 2 : 0) + constructorIngredients.reduce((acc, ingredient) => (acc += ingredient.price), 0);
});

export const getIngredientsCounters = createSelector(getConstructorItems, ({ bun, constructorIngredients }): { [key: string]: number } => {
    const counters: {
        [key: string]: number;
    } = {};

    constructorIngredients.forEach((ingredient) => {
        if (!counters[ingredient._id]) counters[ingredient._id] = 0;

        counters[ingredient._id]++;
    });

    if (bun) counters[bun._id] = 2;

    return counters;
});
