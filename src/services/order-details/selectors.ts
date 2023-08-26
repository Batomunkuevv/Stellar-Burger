import { RootStore } from './../types';
import { name } from './constants';

export const getOrder = (store: RootStore) => store[name].order;
export const getOrderRequest = (store: RootStore) => store[name].orderRequest;
export const getOrderFailed = (store: RootStore) => store[name].orderFailed;