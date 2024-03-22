import { Content, Footer, Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

export const MainPanelWrapper = styled(Content)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .ant-layout {
  }
  .ant-layout-header {
    height: auto;
    line-height: unset;
    padding: 0 20px;
  }
  .ant-layout-sider {
  }
  .ant-layout-content {
  }
  .ant-layout-footer {
    padding: 10px 20px;
    box-shadow: none;
    border: none;
  }
`;
export const MainPanelHeaderWrapper = styled(Header)`
  display: flex;
  justify-content: space-between;
  text-align: center;
  //width: 100%;
`;
export const MainPanelFooterWrapper = styled(Footer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border: 4px solid #01b2b81a;
`;
