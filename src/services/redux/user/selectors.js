import { name } from './';

export const getUser = store => store[name].data;
export const getIsAuthChecked = store => store[name].isAuthChecked;