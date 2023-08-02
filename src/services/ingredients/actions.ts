import { AppDispatch, AppThunk } from "../types";
import { IngredientsTypes } from "./constants";
import { getIngredientsRequest } from "../../utils/burger-api";
import { TIngredient } from "../../types";

export interface IGetIngredientsSuccessAction {
    type: typeof IngredientsTypes.GET_SUCCESS;
    payload: TIngredient[];
}

export interface IGetIngredientsFailedAction {
    type: typeof IngredientsTypes.GET_FAILED;
}

export interface IGetIngredientsRequestAction {
    type: typeof IngredientsTypes.GET_REQUEST;
}

export const getIngredients: AppThunk = () => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: IngredientsTypes.GET_REQUEST,
        });
        getIngredientsRequest()
            .then((res) => {
                dispatch({
                    type: IngredientsTypes.GET_SUCCESS,
                    payload: res.data,
                });
            })
            .catch(() => {
                dispatch({
                    type: IngredientsTypes.GET_FAILED,
                });
            });
    };
};

export type TIngredientsActions = 
    IGetIngredientsFailedAction |
    IGetIngredientsRequestAction |
    IGetIngredientsSuccessAction