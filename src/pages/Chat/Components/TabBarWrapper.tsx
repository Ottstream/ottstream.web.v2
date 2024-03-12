import React from 'react';

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import ConversationList from '@/pages/Chat/Components/ConversationList.tsx';

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
        // size={'large'}
        // indicator={{ size: 200, align: 'center' }}
        // tabBarGutter={100}
        animated={{ inkBar: true, tabPane: true }}
        style={{
          backgroundColor: '#d5d5d5',
          // color: '#01B2B8',
          // color: '#01B2B8',
        }}
        tabBarStyle={{
          display: 'flex',
          justifyContent: 'space-between',
          // backgroundColor: '#9daa5d',
          // border: '1px solid blue',
          // color: '#01B2B8',
          // borderBottom: '1px solid darkmagenta',
        }}
      />
    </>
  );
};

export default TabBarWrapper;
