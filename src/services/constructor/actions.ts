import { TConstructorIngredient } from "../../types";
import { ConstructorTypes } from "./constants";

export interface IAddConstructorIngredientAction {
    type: typeof ConstructorTypes.ADD_INGREDIENT;
    payload: TConstructorIngredient;
}

export interface IRemoveConstructorIngredientAction {
    type: typeof ConstructorTypes.REMOVE_INGREDIENT;
    payload: string;
}

export interface IAddBunAction {
    type: typeof ConstructorTypes.ADD_BUN;
    payload: TConstructorIngredient;
}

export interface IUpdateListAction {
    type: typeof ConstructorTypes.UPDATE_LIST;
    payload: TConstructorIngredient[];
}

export interface IClearAction {
    type: typeof ConstructorTypes.CLEAR;
}

export type TConstructorActions = IAddConstructorIngredientAction | IRemoveConstructorIngredientAction | IAddBunAction | IUpdateListAction | IClearAction;
