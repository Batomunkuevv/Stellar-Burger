import { name } from "./";

export const getIngredients = store => store[name].data;
export const getIngredientsRequest = store => store[name].ingredientsRequest;
export const getIngredientsFailed = store => store[name].ingredientsFailed;