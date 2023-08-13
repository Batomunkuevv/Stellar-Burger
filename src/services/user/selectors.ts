import { name } from './constants';
import { RootStore } from '../types';

export const getUser = (store: RootStore) => store[name].data;
export const getIsAuthChecked = (store: RootStore) => store[name].isAuthChecked;