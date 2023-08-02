import { AppDispatch } from './../services/types';
import { useDispatch as dispatchHook } from "react-redux";

export const useDispatch: () => AppDispatch = dispatchHook;
