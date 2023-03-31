import React from 'react';
import Input from './Input';
import Trigger from './Trigger';

type PropsType = {
  children: React.ReactNode;
};
function LoginForm({ children }: PropsType) {
  return <>{children}</>;
}

LoginForm.Input = Input;
LoginForm.Trigger = Trigger;
export default LoginForm;
export { LoginForm };
