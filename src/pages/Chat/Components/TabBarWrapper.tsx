import React from 'react';

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import styled from 'styled-components';

import ConversationList from '@/pages/Chat/Components/ConversationList';

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

const TabBarWrapper = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Clients',
      children: <ConversationList type={'Clients'} />,
    },
    {
      key: '2',
      label: 'Teams',
      children: <ConversationList type={'Teams'} />,
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

export default TabBarWrapper;
