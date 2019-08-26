// helper function to find index of needed element in array
export const getIndex = (addresses: any[], id: number): number => addresses.findIndex(item => item.id === id);