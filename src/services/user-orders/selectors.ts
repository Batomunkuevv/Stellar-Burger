import { RootStore } from "../types";
import { name } from "./constants";

export const getUserOrders = (store: RootStore) => store[name].orders;
