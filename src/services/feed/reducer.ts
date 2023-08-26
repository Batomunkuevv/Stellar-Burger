import { TOrder } from "../../types";
import { TWSActions } from "./actions";
import { FeedWsTypes as Types } from "./constants";

type TWsStore = {
    wsConnected: boolean;
    orders: TOrder[];
    error?: Event;
    total: number | null;
    totalToday: number | null;
};

const initialStore: TWsStore = {
    wsConnected: false,
    orders: [],
    total: null,
    totalToday: null,
};

export const wsReducer = (store = initialStore, action: TWSActions): TWsStore => {
    switch (action.type) {
        case Types.CONNECTION_START: {
            return {
                ...store,
                wsConnected: true,
                error: undefined,
            };
        }
        case Types.CONNECTION_ERROR: {
            return {
                ...store,
                wsConnected: false,
                error: action.payload,
            };
        }
        case Types.CONNECTION_CLOSED: {
            return {
                ...store,
                wsConnected: false,
                error: undefined,
            };
        }
        case Types.GET_MESSAGE: {

            return {
                ...store,
                error: undefined,
                orders: [...action.payload.orders],
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            };
        }
        default: {
            return store;
        }
    }
};
