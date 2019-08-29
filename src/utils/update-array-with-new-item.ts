import { getBeforeIdxArray, getAfterIdxArray } from './';

// replace point in points array with updated one
export const updateArrayWithNewItem = <T>(oldArr: T[], newItem: T, idx: number): T[] => {
    return [...getBeforeIdxArray(oldArr, idx), newItem, ...getAfterIdxArray(oldArr, idx)];
};