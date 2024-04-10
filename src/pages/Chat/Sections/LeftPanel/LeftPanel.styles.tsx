import Sider from 'antd/es/layout/Sider';
import styled from 'styled-components';

export const SiderContainer = styled(Sider)`
  .ant-layout {
    background-color: ${props => props.theme.colorPalette.white};
    .layout-with-shadow {
      box-shadow: 0 4px 6px 0 #0a3c6840;
    }
  }
  .ant-collapse-content-box {
    padding-block: 0 !important;
  }
`;
