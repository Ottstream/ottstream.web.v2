import React from 'react';

import { Button as AntButton } from 'antd';
// eslint-disable-next-line import/named
import { ButtonProps } from 'antd/es/button/button';
import styled from 'styled-components';

interface ChatIconPropsI extends ButtonProps {}

const Button = styled(AntButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

const ChatIcon = ({ ...props }: ChatIconPropsI) => {
  return (
    <>
      <Button
        type={'default'}
        className={'chat-icon'}
        shape={'circle'}
        {...props}>
        {props.children}
      </Button>
    </>
  );
};

export default ChatIcon;
