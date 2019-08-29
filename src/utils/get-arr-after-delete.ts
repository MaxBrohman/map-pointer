import { getIndex, getBeforeIdxArray, getAfterIdxArray } from './';

// get new array of map points without deleted point
export const getArrAfterDelete = <T>(id: number, arr: T[]): T[] => {
    const idx = getIndex(arr, id);
    return [...getBeforeIdxArray(arr, idx), ...getAfterIdxArray(arr, idx)];
};