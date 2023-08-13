import { TOrder } from "../../types";
import { UserOrdersWsTypes as Types } from "./constants";

export interface IWSUserOrdersConnectionStart {
    readonly type: typeof Types.CONNECTION_START;
}

export interface IWSUserOrdersConnectionSuccessAction {
    readonly type: typeof Types.CONNECTION_SUCCESS;
}

export interface IWSUserOrdersConnectionErrorAction {
    readonly type: typeof Types.CONNECTION_ERROR;
    readonly payload: Event;
}

export interface IWSUserOrdersConnectionClosedAction {
    readonly type: typeof Types.CONNECTION_CLOSED;
}

export interface IWSUserOrdersGetMessageAction {
    readonly type: typeof Types.GET_MESSAGE;
    readonly payload: {
        success: boolean;
        orders: TOrder[];
        total: number;
        totalToday: number;
    };
}

export interface IWSUserOrdersSendMessageAction {
    readonly type: typeof Types.SEND_MESSAGE;
    readonly payload: { message: string };
}

export type TWSUserActions = IWSUserOrdersConnectionStart | IWSUserOrdersConnectionSuccessAction | IWSUserOrdersConnectionErrorAction | IWSUserOrdersConnectionClosedAction | IWSUserOrdersGetMessageAction | IWSUserOrdersSendMessageAction;
