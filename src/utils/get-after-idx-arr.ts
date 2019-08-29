export const getAfterIdxArray = <T>(arr: T[], idx: number): T[] => {
    if (idx + 1 >= arr.length) {
        return [];
    }
    return arr.slice(idx + 1);
};