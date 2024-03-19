import React, { ReactElement } from 'react';

import { Badge } from 'antd';
import styled from 'styled-components';

const CustomBadgeComponent = styled(Badge)``;
const CustomBadge = ({
  count,
  children,
  size = 'small',
}: {
  count?: number;
  children: ReactElement<any, any>;
  size?: 'default' | 'small';
}) => {
  return (
    <CustomBadgeComponent
      count={count}
      size={size}
      color="#ffb800"
      offset={[10, -10]}>
      {children}
    </CustomBadgeComponent>
  );
};

export default CustomBadge;
