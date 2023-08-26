import { TOrder } from "../../types";
import { FeedWsTypes as Types } from "./constants";

export interface IWSFeedConnectionStart {
    readonly type: typeof Types.CONNECTION_START;
}

export interface IWSFeedConnectionSuccessAction {
    readonly type: typeof Types.CONNECTION_SUCCESS;
}

export interface IWSFeedConnectionErrorAction {
    readonly type: typeof Types.CONNECTION_ERROR;
    readonly payload: Event;
}

export interface IWSFeedConnectionClosedAction {
    readonly type: typeof Types.CONNECTION_CLOSED;
}

export interface IWSFeedGetMessageAction {
    readonly type: typeof Types.GET_MESSAGE;
    readonly payload: {
        success: boolean;
        orders: TOrder[];
        total: number;
        totalToday: number;
    };
}

export interface IWSFeedSendMessageAction {
    readonly type: typeof Types.SEND_MESSAGE;
    readonly payload: { message: string };
}

export type TWSActions = IWSFeedConnectionStart | IWSFeedConnectionSuccessAction | IWSFeedConnectionErrorAction | IWSFeedConnectionClosedAction | IWSFeedGetMessageAction | IWSFeedSendMessageAction;
