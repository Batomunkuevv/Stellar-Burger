import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients/reducer";
import { constructorReducer } from "./constructor/reducer";
import { orderDetailsReducer } from "./order-details/reducer";
import { dndReducer } from "./dnd/reducer";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burgerConstructor: constructorReducer,
    orderDetails: orderDetailsReducer,
    dnd: dndReducer,
    auth: userReducer
});
