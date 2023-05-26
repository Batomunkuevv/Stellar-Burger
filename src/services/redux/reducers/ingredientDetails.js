import { REMOVE_INGREDIENT_DETAIL, SET_INGREDIENT_DETAIL } from "../actions/ingredientDetails";

const initialStore = {
    ingredient: null,
};

export const ingredientDetailsReducer = (store = initialStore, action) => {
    switch (action.type) {
        case SET_INGREDIENT_DETAIL: {
            return {
                ...store,
                ingredient: action.payload,
            };
        }
        case REMOVE_INGREDIENT_DETAIL: {
            return {
                ...store,
                ingredient: initialStore.ingredient
            }
        }
        default: {
            return store;
        }
    }
};
