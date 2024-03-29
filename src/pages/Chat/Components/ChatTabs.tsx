import React from 'react';

import { Tabs as AntTabs, TabsProps } from 'antd';
import styled from 'styled-components';

const Tabs = styled(AntTabs)`
  height: 100%;
  overflow: auto;

  .ant-tabs-content {
    height: 100%;
  }
  .ant-tabs-tabpane {
    height: 100%;
  }
  .infinite-scroll-component__outerdiv {
    margin-top: 10px;
    height: 100%;
    overflow: auto;
  }
`;

interface ChatTabsPropsI extends TabsProps {}
const ChatTabs = ({ items, onChange, ...props }: ChatTabsPropsI) => {
  return (
    <>
      <div></div>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        centered={true}
        type={'line'}
        animated={{ inkBar: true, tabPane: true }}
        {...props}
      />
    </>
  );
};

export default ChatTabs;
