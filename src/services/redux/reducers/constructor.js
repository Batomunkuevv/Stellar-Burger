import { ADD_CONSTRUCTOR_INGREDIENT, ADD_CONSTRUCTOR_BUN, REMOVE_CONSTRUCTOR_INGREDIENT, UPDATE_CONSTRUCTOR_LIST, CLEAR_CONSTRUCTOR } from '../actions/constructor';

const initialStore = {
    ingredients: [],
    bun: null
};

export const constructorReducer = (store = initialStore, action) => {
    switch (action.type) {
        case ADD_CONSTRUCTOR_INGREDIENT: {
            return {
                ...store,
                ingredients: [...store.ingredients, action.payload]
            }
        }
        case REMOVE_CONSTRUCTOR_INGREDIENT: {

            return {
                ...store,
                ingredients: [...store.ingredients.filter(ingredient => ingredient.handlerId !== action.payload)]
            }
        }
        case ADD_CONSTRUCTOR_BUN: {
            return {
                ...store,
                bun: action.payload
            }
        }
        case UPDATE_CONSTRUCTOR_LIST: {
            return {
                ...store,
                ingredients: action.payload
            }
        }
        case CLEAR_CONSTRUCTOR: {
            return {
                ...initialStore
            }
        }
        default: {
            return store;
        }
    }
};
