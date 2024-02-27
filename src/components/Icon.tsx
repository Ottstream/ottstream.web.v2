import React from 'react';
import Icons from '../assets/icons/icon-map';


interface IconProps {
  name: string;
  size?: number;
  color?: string;
  fill?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ name, size = 16, color, fill='transparent', style, ...rest }) => {
  const SelectedIcon = Icons[name]

  if (!Icons) {
    return null; // or any other fallback if needed
  }

  return (
    <SelectedIcon
      fill={fill}
      color={color}
      style={{ ...style, fill: color, color, width: size, height: size }}
      {...rest}
    />
  );
};

export default Icon;