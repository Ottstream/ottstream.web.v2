import React from 'react';
import { Tabs } from 'antd';
import { TabProps } from './types';
const { TabPane } = Tabs;
const Tab: React.FC<TabProps> = ({ items }: TabProps) => {
  return (
    <Tabs defaultActiveKey="1" tabPosition="left" style={{ height: 220 }}>
      {items.map((item, index) => (
        <TabPane tab={item.title} key={index}></TabPane>
      ))}
    </Tabs>
  );
};

export default Tab;
