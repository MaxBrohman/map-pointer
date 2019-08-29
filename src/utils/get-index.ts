// helper function to find index of needed element in array
export const getIndex = (arr: any[], id: number): number => arr.findIndex(item => item.id === id);