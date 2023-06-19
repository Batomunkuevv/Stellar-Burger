import { IngredientsTypes } from "./actions";

const initialStore = {
    data: [],
    ingredientsFailed: false,
    ingredientsRequest: false,
};

export const ingredientsReducer = (store = initialStore, action) => {
    switch (action.type) {
        case IngredientsTypes.GET_SUCCESS: {

            return {
                data: action.payload.ingredients,
                ingredientsRequest: false,
                ingredientsFailed: false,
            };
        }
        case IngredientsTypes.GET_REQUEST: {
            return {
                ...store,
                ingredientsRequest: true,
            };
        }
        case IngredientsTypes.GET_FAILED: {
            return {
                ...store,
                ingredientsRequest: false,
                ingredientsFailed: true
            };
        }
        default: {
            return store;
        }
    }
};
