import React from 'react';

import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button/button';
import styled from 'styled-components';

interface ChatIconPropsI extends ButtonProps {}

const StyledButton = styled(Button)`
  border: none;
  color: ${props => props.theme.colorPalette.blueGreen};
  background-color: transparent;
  box-shadow: none;

  &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover,
  &.ant-btn-link:not(:disabled):not(.ant-btn-disabled):hover,
  &.ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover,
  &.ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover,
  &.ant-btn-dashed:not(:disabled):not(.ant-btn-disabled):hover {
    color: ${props => props.theme.colorPalette.blueGreen};
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
`;

const ChatIcon = ({ ...props }: ChatIconPropsI) => {
  return (
    <>
      <StyledButton className={'chat-icon'} shape={'circle'} {...props} />
    </>
  );
};

export default ChatIcon;
