import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { Card } from 'antd';
import Icon from '../Icon';

interface Props {
  open: boolean;
  title?: React.ReactNode;
  onClose?: () => void;
  children: React.ReactNode;
  styles?: CSSProperties;
}

const Drawer: React.FC<Props> = ({
  open,
  onClose,
  children,
  styles,
  title,
}) => {
  return (
    <DrawerWrapper open={open} customStyles={styles}>
      <DrawerCard
        title={title}
        extra={<Icon name="close" size={14} onClick={onClose} />}>
        {children}
      </DrawerCard>
    </DrawerWrapper>
  );
};

export default Drawer;

const DrawerWrapper = styled.div<{
  open: boolean;
  customStyles?: CSSProperties;
}>`
  position: relative;
  transition: 0.3s;
  min-width: ${props => (props.open ? '392px' : 0)};
  max-width: 0;
  overflow-y: scroll;
  overflow: hidden;
  ${props =>
    props.customStyles &&
    css`
      ${props.customStyles as string}
    `}
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    min-width: ${props => (props.open ? '300px' : 0)};
  }
`;

const DrawerCard = styled(Card)`
  margin: 24px 24px 0 0;
  height: calc(100% - 24px);
  .ant-card-head {
    border-bottom: 0;
    color: #0a3c68;
    font-size: 15px;
    font-weight: 700;
  }
  svg {
    cursor: pointer;
    margin-left: 16px;
  }
`;
