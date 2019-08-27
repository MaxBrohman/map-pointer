import { getBeforeIdxArray, getAfterIdxArray } from './';

// replace point in points array with updated one
export const updateArrayWithNewItem = (oldArr: any[], newItem: any, idx: number): any[] => {
    return [...getBeforeIdxArray(oldArr, idx), newItem, ...getAfterIdxArray(oldArr, idx)];
};