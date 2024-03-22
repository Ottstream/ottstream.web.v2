import React from 'react';

import { red } from '@ant-design/colors';
import { Button } from 'antd';
import styled from 'styled-components';

interface ChatIconPropsI {
  type?: 'link' | 'text' | 'primary' | 'default' | 'dashed' | undefined;
  shape?: 'default' | 'circle' | 'round' | undefined;
  size?: 'small' | 'middle' | 'large' | undefined;
  icon?: JSX.Element;
}

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

const ChatIcon = ({
  type = 'primary',
  shape = 'circle',
  size = undefined,
  icon = <p>Button</p>,
}: ChatIconPropsI) => {
  return (
    <>
      <StyledButton
        className={'chat-icon'}
        type={type}
        shape={shape}
        size={size}
        icon={icon}
      />
    </>
  );
};

export default ChatIcon;
