import React, { Fragment } from 'react';
import { IButton } from './types';
import { Gradient } from './Button.styles';

const Button: React.FC<IButton> = ({ variant, children }) => {
  return (
    <Fragment>
      {variant === 'gradient' && <Gradient>{children}</Gradient>}
    </Fragment>
  );
};

export default Button;
