import { ButtonProps } from 'antd';

export interface IOTTSIconButtonProps extends IOTTSButtonProps {
  hasLeftBorder?: boolean;
  hasRightBorder?: boolean;
  count?: number;
}

export interface IOTTSButtonProps extends ButtonProps {}
