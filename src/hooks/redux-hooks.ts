import { AppDispatch, AppThunk, RootStore } from "./../services/types";
import { useDispatch as dispatchHook, TypedUseSelectorHook, useSelector as selectorHook } from "react-redux";
import type {} from "redux-thunk/extend-redux";

export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
export const useSelector: TypedUseSelectorHook<RootStore> = selectorHook;

