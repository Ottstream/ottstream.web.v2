import React from 'react';

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import ConversationList from '@/pages/Chat/Components/ConversationList';

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
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        centered={true}
        type={'line'}
        animated={{ inkBar: true, tabPane: true }}
        style={{}}
        tabBarStyle={{}}
      />
    </>
  );
};

export default TabBarWrapper;
