import { name } from './';

export const getOrder = store => store[name].order;
export const getOrderRequest = store => store[name].orderRequest;
export const getOrderFailed = store => store[name].orderFailed;