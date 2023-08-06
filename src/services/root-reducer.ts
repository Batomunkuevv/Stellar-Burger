import { combineReducers } from "redux";
import { ingredientsReducer, name as ingredientsName } from "./ingredients";
import { constructorReducer, name as constructorName } from "./constructor";
import { orderDetailsReducer, name as orderDetailsName } from "./order-details";
import { userReducer, name as userName } from "./user";
import { wsReducer, name as wsName } from "./feed";
import { wsUserOrdersReducer, name as wsUserOrdersName } from "./user-orders";

export const rootReducer = combineReducers({
    [ingredientsName]: ingredientsReducer,
    [constructorName]: constructorReducer,
    [orderDetailsName]: orderDetailsReducer,
    [userName]: userReducer,
    [wsUserOrdersName]: wsUserOrdersReducer,
    [wsName]: wsReducer
});
