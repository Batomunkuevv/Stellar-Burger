import { ConstructorTypes } from './actions';

const initialStore = {
    ingredients: [],
    bun: null
};

export const constructorReducer = (store = initialStore, action) => {
    switch (action.type) {
        case ConstructorTypes.ADD_INGREDIENT: {
            return {
                ...store,
                ingredients: [...store.ingredients, action.payload]
            }
        }
        case ConstructorTypes.REMOVE_INGREDIENT: {

            return {
                ...store,
                ingredients: [...store.ingredients.filter(ingredient => ingredient.handlerId !== action.payload)]
            }
        }
        case ConstructorTypes.ADD_BUN: {
            return {
                ...store,
                bun: action.payload
            }
        }
        case ConstructorTypes.UPDATE_LIST: {
            return {
                ...store,
                ingredients: action.payload
            }
        }
        case ConstructorTypes.CLEAR: {
            return {
                ...initialStore
            }
        }
        default: {
            return store;
        }
    }
};
