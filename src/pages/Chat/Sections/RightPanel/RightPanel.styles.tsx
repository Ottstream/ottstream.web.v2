import Sider from 'antd/es/layout/Sider';
import styled from 'styled-components';

export const SiderContainer = styled(Sider)`
  .ant-layout-sider {
    background-color: ${props => props.theme.colorPalette.white};
    box-shadow: 0 4px 6px 0 rgba(10, 60, 104, 0.25);
  }
`;
