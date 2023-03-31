import React from 'react';
import Inputbox from './Inputbox';
import Trigger from './Trigger';

type PropsType = {
  children: React.ReactNode;
};
function TextArea({ children }: PropsType) {
  return <>{children}</>;
}

TextArea.Trigger = Trigger;
TextArea.Inputbox = Inputbox;
export default TextArea;
export { TextArea };
