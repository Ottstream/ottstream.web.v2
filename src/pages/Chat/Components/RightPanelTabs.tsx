import React from 'react';

import { Tabs as AntTabs } from 'antd';
import type { TabsProps } from 'antd';
import styled from 'styled-components';

import ChatFilesList from 'Pages/Chat/Components/ChatFilesList';
import ChatMembersList from 'Pages/Chat/Components/ChatMembersList';
import ChatUrlsList from 'Pages/Chat/Components/ChatUrlsList';

const TabsWrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

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

const RightPanelTabs = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Members',
      children: <ChatMembersList />,
    },
    {
      key: '2',
      label: 'Files',
      children: <ChatFilesList />,
    },
    {
      key: '3',
      label: 'Urls',
      children: <ChatUrlsList />,
    },
  ];
  return (
    <TabsWrapper>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        centered={true}
        type={'line'}
        animated={{ inkBar: true, tabPane: true }}
        tabBarStyle={{}}
      />
    </TabsWrapper>
  );
};

export default RightPanelTabs;
