import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { TConstructorActions } from "./constructor/actions";
import store from "./store";

import { TIngredientsActions } from "./ingredients/actions";
import { TOrderActions } from "./order-details/actions";
import { TUserActions } from "./user/actions";
import { TWSActions } from "./feed/actions";
import { TWSUserActions } from "./user-orders/actions";

export type TApplicationActions = TConstructorActions | TIngredientsActions | TOrderActions | TUserActions | TWSActions | TWSUserActions;

export type RootStore = ReturnType<typeof store.getState>;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootStore, TApplicationActions>>;

export type AppDispatch = typeof store.dispatch; 