import Sider from 'antd/es/layout/Sider';
import styled from 'styled-components';

export const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 10px;
`;

export const SiderContainer = styled(Sider)`
  .ant-layout {
    background-color: ${props => props.theme.colorPalette.light};
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
