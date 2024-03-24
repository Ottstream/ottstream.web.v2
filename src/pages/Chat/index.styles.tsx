import styled from 'styled-components';

export const ChatWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  //border: 1px solid red;

  .ant-layout {
    box-shadow: none;
  }

  .ant-layout-header {
    background-color: ${props => props.theme.colorPalette.light};
    box-shadow: none;
    border-bottom: 2px solid #f0f0f0;
    border-top: 2px solid #f0f0f0; //!!TODO: should be removed
  }
  .ant-layout .ant-layout-sider {
    background-color: ${props => props.theme.colorPalette.light};
    //box-shadow: none;
  }
  .ant-layout-content {
    background-color: ${props => props.theme.colorPalette.light};
    box-shadow: none;
  }
  .ant-layout-footer {
    background-color: ${props => props.theme.colorPalette.light};
    box-shadow: none;
    border-top: 2px solid #f0f0f0; //!!TODO: should be removed
  }
`;
