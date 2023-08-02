import { TIngredient, TOrder } from "../../types";
import { getOrderRequest } from "../../utils/burger-api";
import { OrderDetailsTypes } from "./constants";
import { ConstructorTypes } from "../constructor/constants";
import { AppDispatch, AppThunk } from "../types";

export interface IGetOrderSuccessAction {
    type: typeof OrderDetailsTypes.GET_SUCCESS;
    payload: TOrder;
}

export interface IGetOrderFailedAction {
    type: typeof OrderDetailsTypes.GET_FAILED;
}

export interface IGetOrderRequestAction {
    type: typeof OrderDetailsTypes.GET_REQUEST;
}

export interface IOrderClearAction {
    type: typeof OrderDetailsTypes.CLEAR;
}

export const getOrder: AppThunk = (ingredients: TIngredient[]) => {
    return (dispatch: AppDispatch) => {
        dispatch({ type: OrderDetailsTypes.GET_REQUEST });

        getOrderRequest(ingredients)
            .then((res) => {
                dispatch({ type: OrderDetailsTypes.GET_SUCCESS, payload: res.order });
                dispatch({ type: ConstructorTypes.CLEAR});
            })
            .catch((error) => {
                dispatch({ type: OrderDetailsTypes.GET_FAILED });
            });
    };
};

export type TOrderActions = 
    IGetOrderSuccessAction |
    IGetOrderFailedAction |
    IGetOrderRequestAction |
    IOrderClearAction
