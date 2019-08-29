import { TOnChange, TOnInput, TOnInputExt } from '../typings/utils';

// decorator for onchange events
export const onChangeHelper = (onInput: TOnInput | TOnInputExt, id?: number): TOnChange => evt => {
  const str = (evt.target as HTMLInputElement).value;
  if (id !== null && id !== undefined) {
    onInput(str, id);
  } else {
    (onInput as TOnInput)(str);
  }
};