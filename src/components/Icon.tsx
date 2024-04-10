import React from 'react';

import styled from 'styled-components';

import Icons from '../assets/icons/icon-map';

interface IconProps {
  name: string;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  fill?: string;
  stroke?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 14,
  width,
  height,
  color = 'transparent',
  fill = '',
  stroke = '',
  style,
  onClick,
  ...rest
}) => {
  const SelectedIcon = Icons[name];

  if (!Icons) {
    return null; // or any other fallback if needed
  }

  const StyledContainer = styled(SelectedIcon)``;

  const SVG = styled(SelectedIcon)<{
    $stroke: string;
    $fill: string;
    $color: string;
  }>`
    path {
      stroke: ${props => props.$stroke};
      fill: ${props => props.$fill};
      color: ${props => props.$color};
    }
  `;
  return (
    <SVG
      onClick={onClick}
      $fill={stroke}
      $color={color}
      $stroke={stroke}
      style={{
        ...style,
        width: width ? width : size,
        height: height ? height : size,
      }}
      {...rest}
    />
  );
};

export default Icon;
