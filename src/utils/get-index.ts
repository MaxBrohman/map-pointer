import { IAdress } from '../typings/reducer';

// helper function to find index of needed element in array
export const getIndex = (addresses: IAdress[], id: number): number => addresses.findIndex(item => item.id === id);
