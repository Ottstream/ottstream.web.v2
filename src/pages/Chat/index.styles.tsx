import styled from 'styled-components';

export const ChatWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  /*------------------------------ General Ant ------------------------------*/

  .ant-layout {
    background-color: ${props => props.theme.colorPalette.white};
    box-shadow: none;
  }

  .ant-layout-header {
    background-color: ${props => props.theme.colorPalette.white};
    box-shadow: none;
    //border-bottom: 2px solid #f0f0f0; //!!TODO: should be removed
    //border-top: 2px solid #f0f0f0; //!!TODO: should be removed
  }

  .ant-layout-content {
    background-color: ${props => props.theme.colorPalette.white};
    box-shadow: none;
  }

  .ant-layout-footer {
    background-color: ${props => props.theme.colorPalette.white};
    box-shadow: none;
    //border-top: 2px solid #f0f0f0; //!!TODO: should be removed
  }

  .ant-layout-sider {
    background-color: ${props => props.theme.colorPalette.white};
    //box-shadow: none;
  }

  /*---------------------------------- END ----------------------------------*/

  /*------------------------------ For Ant Tabs ------------------------------*/

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

  /*---------------------------------- END ----------------------------------*/

  /*------------------------------ General ------------------------------*/

  /*---------------------------------- END ----------------------------------*/
`;

export const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 10px;
`;
