import { ConstructorTypes } from './constants';
import { TConstructorActions } from './actions';
import { TConstructorIngredient } from '../../types';

type TConstructorStore = {
    constructorIngredients: TConstructorIngredient[];
    bun: TConstructorIngredient | null;
}

const initialStore: TConstructorStore = {
    constructorIngredients: [],
    bun: null
};

export const constructorReducer = (store = initialStore, action: TConstructorActions): TConstructorStore => {
    switch (action.type) {
        case ConstructorTypes.ADD_INGREDIENT: {
            return {
                ...store,
                constructorIngredients: [...store.constructorIngredients, action.payload]
            }
        }
        case ConstructorTypes.REMOVE_INGREDIENT: {
            return {
                ...store,
                constructorIngredients: [...store.constructorIngredients.filter(ingredient => ingredient.handlerId !== action.payload)]
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
                constructorIngredients: action.payload
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
