import { TIngredient } from "../../types";
import { RootStore } from "../types";
import { name } from "./constants";

export const getIngredients = (store: RootStore): TIngredient[] => store[name].data;
export const getIngredientsRequest = (store: RootStore): boolean => store[name].ingredientsRequest;
export const getIngredientsFailed = (store: RootStore): boolean => store[name].ingredientsFailed;