import React from 'react';
import Textarea from './Textarea';
import Title from './Title';
import Trigger from './Trigger';

type PropsType = {
  children: React.ReactNode;
};

function Modify({ children }: PropsType) {
  return <>{children}</>;
}

Modify.Title = Title;
Modify.Textarea = Textarea;
Modify.Trigger = Trigger;
export default Modify;
export { Modify };
