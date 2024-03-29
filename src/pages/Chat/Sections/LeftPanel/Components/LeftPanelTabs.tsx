import React from 'react';

import type { TabsProps } from 'antd';

import ChatTabs from 'Pages/Chat/Components/ChatTabs';
import ClientsConversationList from 'Pages/Chat/Components/Lists/ClientsConversationList';
import TeamsConversationList from 'Pages/Chat/Components/Lists/TeamsConversationList';

const LeftPanelTabs = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Clients',
      children: <ClientsConversationList />,
    },
    {
      key: '2',
      label: 'Teams',
      children: <TeamsConversationList />,
    },
  ];
  return (
    <>
      <ChatTabs items={items} onChange={onChange} />
    </>
  );
};

export default LeftPanelTabs;
