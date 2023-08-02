import { ThunkAction } from "redux-thunk";
import { TConstructorActions } from "./constructor/actions";

import store from "./store";
import { TIngredientsActions } from "./ingredients/actions";
import { TOrderActions } from "./order-details/actions";
import { TUserActions } from "./user/actions";

type TApplicationActions = TConstructorActions | TIngredientsActions | TOrderActions | TUserActions;

export type RootStore = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStore, unknown, TApplicationActions>;

export type AppDispatch<TReturnType = void> = (action: TApplicationActions | AppThunk<TReturnType>) => TReturnType;
