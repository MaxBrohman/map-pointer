// export const debounce = (func: any, delay: number): () => void => {
//     let timeout: NodeJS.Timeout | null;
//     return (...args) => {
//         if (timeout) {
//             return;
//         }
//         func(...args);
//         timeout = setTimeout(() => {
//             timeout = null;
//         }, delay);
//     };
// };

export const debounce = (callback: Function, time: number) => {
    let interval: NodeJS.Timeout | null;
    return (...args: any) => {
      clearTimeout((interval as NodeJS.Timeout));
      interval = setTimeout(() => {
        interval = null;
        callback(...args);
      }, time);
    };
  };