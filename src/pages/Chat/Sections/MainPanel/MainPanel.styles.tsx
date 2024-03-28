import { Content, Footer, Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

import ChatIcon from 'Pages/Chat/Components/ChatIcon';

export const MainPanelWrapper = styled(Content)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .ant-layout-header {
    height: auto;
    line-height: unset;
    padding: 0 20px;
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
`;
export const MainPanelFooterWrapper = styled(Footer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border: 4px solid #01b2b81a;

  .input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 6px;
    border: 4px solid #06b2b826;
  }
  .typing-user-wrapper {
    margin: 10px 0 0 0;
    .typing-user-wrapper {
      display: flex;
      align-items: center;
      justify-content: start;
      font-style: italic;
      margin-left: 8px;
    }
    .typing-avatar-wrapper {
      margin-right: 10px;
    }
    p {
      font-size: 10px;
      font-weight: 400;
      color: #a5aac6;
    }
  }
`;

export const MainPanelChatIcon = styled(ChatIcon)`
  margin: 0;
`;
