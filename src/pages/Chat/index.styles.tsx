import styled from 'styled-components';

export const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 10px;
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  //border: 1px solid red;

  .ant-layout {
    box-shadow: none;
  }

  .ant-layout-header {
    background-color: ${props => props.theme.colorPalette.white};
    box-shadow: none;
    border-bottom: 2px solid #f0f0f0;
    border-top: 2px solid #f0f0f0; //!!TODO: should be removed
  }
  .ant-layout .ant-layout-sider {
    background-color: ${props => props.theme.colorPalette.white};
    //box-shadow: none;
  }
  .ant-layout-content {
    background-color: ${props => props.theme.colorPalette.white};
    box-shadow: none;
  }
  .ant-layout-footer {
    background-color: ${props => props.theme.colorPalette.white};
    box-shadow: none;
    border-top: 2px solid #f0f0f0; //!!TODO: should be removed
  }

  /*----------------------- For tabs -----------------------*/
  .ant-tabs-nav-list {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
  .ant-tabs-tab {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .ant-tabs-ink-bar {
    border-bottom: 2px solid #01b2b8;
    width: 100%;
  }
  .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #01b2b8;
  }
`;
