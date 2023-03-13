import { FocusEvent, MouseEvent } from 'react';

const useMouseEvent = setOverId => {
  const onMouseOver = (ev: MouseEvent<HTMLLIElement>) => {
    setOverId(ev.currentTarget.id);
  };
  const onMouseOut = (ev: MouseEvent<HTMLLIElement>) => {
    setOverId(null);
  };
  const onFocus = (ev: FocusEvent<HTMLLIElement>) => {};
  const onBlur = (ev: FocusEvent<HTMLLIElement>) => {};

  return { onMouseOver, onFocus, onMouseOut, onBlur };
};

export default useMouseEvent;
