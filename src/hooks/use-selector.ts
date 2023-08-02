import { TypedUseSelectorHook, useSelector as selectorHook} from "react-redux";
import { RootStore } from "../services/types";

export const useSelector: TypedUseSelectorHook<RootStore> = selectorHook;
