import React from 'react';

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import styled from 'styled-components';

import ChatMembersList from 'Pages/Chat/Components/ChatMembersList.tsx';
import ClientsConversationList from 'Pages/Chat/Components/ClientsConversationList';
import TeamsConversationList from 'Pages/Chat/Components/TeamsConversationList';

const CustomTabs = styled(Tabs)`
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
      children: <ChatMembersList />,
    },
    {
      key: '3',
      label: 'Urls',
      children: <ChatMembersList />,
    },
  ];
  return (
    <>
      <CustomTabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        centered={true}
        type={'line'}
        animated={{ inkBar: true, tabPane: true }}
        style={{ overflow: 'auto', height: '100%' }}
        tabBarStyle={{}}
      />
    </>
  );
};

export default RightPanelTabs;
