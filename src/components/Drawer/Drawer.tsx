import React, { CSSProperties } from 'react';

import styled, { css } from 'styled-components';

interface Props {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  styles?: CSSProperties;
}

const Drawer: React.FC<Props> = ({
  open,
  onClose,
  children,
  styles = { width: 378 },
}) => {
  return (
    <DrawerWrapper open={open} customStyles={styles}>
      {onClose && <CloseBtn onClick={onClose}>X</CloseBtn>}
      {children}
    </DrawerWrapper>
  );
};

export default Drawer;

const DrawerWrapper = styled.div<{
  open: boolean;
  customStyles?: CSSProperties;
}>`
  padding: 24px;
  position: relative;
  transition: 0.3s;
  background-color: #ffffff;
  width: ${props => (props.open ? props.customStyles?.width : 0)}px;
  overflow-y: scroll;
  ${props =>
    props.customStyles &&
    css`
      ${props.customStyles as string}
    `}
`;

const CloseBtn = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;
