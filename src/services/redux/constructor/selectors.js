import { createSelector } from 'reselect';

import { name } from './actions';

const getBun = store => store[name].bun;
export const getConstructorIngredients = store => store[name].constructorIngredients;

export const getConstructorItems = createSelector(getBun, getConstructorIngredients, (bun, constructorIngredients) => ({
    bun, constructorIngredients
}))

export const getTotalPrice = createSelector(getBun, getConstructorIngredients, (bun, constructorIngredients) => {
    return (bun ? bun.price * 2 : 0) + constructorIngredients.reduce((acc, ingredient) => acc += ingredient, 0);
})

export const getIngredientsCounters = createSelector(getConstructorItems, ({ bun, constructorIngredients }) => {
    const counters = {};

    constructorIngredients.forEach(ingredient => {
        if(!counters[ingredient._id]) counters[ingredient._id] = 0;

        counters[ingredient._id]++;
    })

    if(bun) counters[bun._id] = 2;

    return counters;
})