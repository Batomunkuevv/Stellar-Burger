import { combineReducers } from "redux";
import { ingredientsReducer, name as ingredientsName } from "./ingredients";
import { constructorReducer, name as constructorName } from "./constructor";
import { orderDetailsReducer, name as orderDetailsName } from "./order-details";
import { userReducer, name as userName } from "./user";

export const rootReducer = combineReducers({
    [ingredientsName]: ingredientsReducer,
    [constructorName]: constructorReducer,
    [orderDetailsName]: orderDetailsReducer,
    [userName]: userReducer
});
