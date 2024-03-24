import Sider from 'antd/es/layout/Sider';
import styled from 'styled-components';

export const SiderContainer = styled(Sider)`
  .ant-layout {
    background-color: ${props => props.theme.colorPalette.white};
    .layout-with-shadow {
      box-shadow: 0 4px 6px 0 #0a3c6840;
    }
  }
  .ant-layout-header {
    width: 100%;
    display: flex;
    padding: 0;
  }
  .ant-layout-sider {
  }
`;
