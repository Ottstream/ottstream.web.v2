import React from 'react';

import type { TabsProps } from 'antd';

import ChatTabs from 'Pages/Chat/Components/ChatTabs';
import ChatFilesList from 'Pages/Chat/Components/Lists/ChatFilesList';
import ChatMembersList from 'Pages/Chat/Components/Lists/ChatMembersList';
import ChatUrlsList from 'Pages/Chat/Components/Lists/ChatUrlsList';

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
    <>
      <ChatTabs items={items} onChange={onChange} />
    </>
  );
};

export default RightPanelTabs;
