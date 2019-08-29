export const getBeforeIdxArray = <T>(arr: T[], idx: number): T[] => {
    if (idx < 0) {
        return [];
    }
    return arr.slice(0, idx);
};