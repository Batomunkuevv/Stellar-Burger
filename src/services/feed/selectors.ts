import { RootStore } from "../types";
import { name } from "./constants";

export const getFeedOrders = (store: RootStore) => store[name].orders;
export const getFeedTotal = (store: RootStore) => store[name].total;
export const getFeedTotalToday = (store: RootStore) => store[name].totalToday;
