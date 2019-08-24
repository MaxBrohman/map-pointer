import { TKeydownCallback, TOnKeyDown } from '../typings/utils';

// decorator for keydown event
export const onKeydownHelper = (id: number, key: string,
  onKeyDown: TKeydownCallback): TOnKeyDown => evt => {
  if (evt.key === key) {
    evt.preventDefault();
    onKeyDown(id);
  }
};
