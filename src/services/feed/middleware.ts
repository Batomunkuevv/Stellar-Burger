import type { Middleware, MiddlewareAPI } from "redux";

import { TApplicationActions, AppThunk, RootStore } from "../types";
import { FeedWsTypes as Types } from "./constants";

export const socketFeedMiddleware = (wsUrl: string): Middleware => {
    return ((store: MiddlewareAPI<AppThunk, RootStore>) => {
        let socket: WebSocket | null = null;

        return (next) => (action: TApplicationActions) => {
            const { dispatch } = store;
            const { type } = action;

            if (type === Types.CONNECTION_START) {
                socket = new WebSocket(wsUrl);
            }

            if (socket) {
                socket.onopen = (event) => {
                    dispatch({ type: Types.CONNECTION_SUCCESS, payload: event });
                };

                socket.onerror = (event) => {
                    dispatch({ type: Types.CONNECTION_ERROR, payload: event });
                };

                socket.onmessage = (event) => {
                    const { data } = event;
                    
                    dispatch({ type: Types.GET_MESSAGE, payload: JSON.parse(data) });
                };

                socket.onclose = (event) => {
                    dispatch({ type: Types.CONNECTION_CLOSED, payload: event });
                };

                if (type === Types.SEND_MESSAGE) {
                    const message = action.payload;
                    
                    socket.send(JSON.stringify(message));
                }
            }

            next(action);
        };
    }) as Middleware;
};
