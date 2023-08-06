import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import { socketFeedMiddleware } from "./feed/middleware";
import { socketUserOrdersMiddleware } from "./user-orders/middleware";
import { getCookie } from "../utils/cookie";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(thunk, socketFeedMiddleware('wss://norma.nomoreparties.space/orders/all'), socketUserOrdersMiddleware(`wss://norma.nomoreparties.space/orders?token=${getCookie('accessToken')}`)));

const store = createStore(rootReducer, enhancers);

export default store;
