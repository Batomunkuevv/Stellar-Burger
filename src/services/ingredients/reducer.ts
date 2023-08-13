import { TIngredient } from "../../types";
import { TIngredientsActions } from "./actions";
import { IngredientsTypes } from "./constants";

type TIngredientsStore = {
    data: TIngredient[];
    ingredientsFailed: boolean;
    ingredientsRequest: boolean;
}

const initialStore: TIngredientsStore = {
    data: [],
    ingredientsFailed: false,
    ingredientsRequest: false,
};

export const ingredientsReducer = (store = initialStore, action: TIngredientsActions): TIngredientsStore => {
    switch (action.type) {
        case IngredientsTypes.GET_SUCCESS: {
            return {
                data: action.payload,
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
