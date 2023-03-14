import { FocusEvent, MouseEvent } from 'react';

const useMouseEvent = () => {
  const onFocus = (ev: FocusEvent<HTMLDivElement>) => {};
  const onBlur = (ev: FocusEvent<HTMLDivElement>) => {};

  return { onFocus, onBlur };
};

export default useMouseEvent;
