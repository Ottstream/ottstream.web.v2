import { Badge, Button } from 'antd';
import styled from 'styled-components';
import { IOTTSIconButtonProps } from '../types';

export const OTTSIconButtonWrapper = styled.div`
  height: 100%;
  .ant-badge {
    height: 100%;
  }
`;

export const OTTSBadge = styled(Badge)``;

export const OTTSIconButtonComponent = styled(Button)<IOTTSIconButtonProps>`
  padding: 0 10px;
  margin: 0;
  height: 100%;
  border-radius: 0;
  ${({ hasLeftBorder }) => hasLeftBorder && 'border-left: 1px solid #C7C7C7;'}
  ${({ hasRightBorder }) =>
    hasRightBorder && ' border-right: 1px solid #C7C7C7;'}

  &.ant-btn.ant-btn-icon-only {
    width: auto;
    padding: 0 20px;
  }
`;
