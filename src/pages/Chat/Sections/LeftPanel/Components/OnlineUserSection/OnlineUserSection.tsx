import React, { useState } from 'react';

import { Collapse as AntCollapse, CollapseProps } from 'antd';
import styled from 'styled-components';

import ChatAvatarRow from 'Pages/Chat/Components/ChatAvatarRow';
import useMockUsersData from 'Pages/Chat/Hooks/useMockUsersData';
import CollapsedChild from 'Pages/Chat/Sections/LeftPanel/Components/OnlineUserSection/CollapsedChild';
import CollapsedLabel from 'Pages/Chat/Sections/LeftPanel/Components/OnlineUserSection/CollapsedLabel';

const Collapse = styled(AntCollapse)``;

const OnlineUserSection: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { users, hasMore, fetchMoreData } = useMockUsersData({
    initialNumber: 30,
  });

  const onChange = () => {
    setIsCollapsed(!isCollapsed);
  };
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <CollapsedLabel
          isVisible={!isCollapsed}
          badgeColor={'#52C41A'}
          text={'Users Online'}
        />
      ),
      children: (
        <>
          <CollapsedChild
            isCollapsed={isCollapsed}
            onlineUsersList={users.slice(0, 8)}
            offlineUsersList={users.slice(9)}
          />
        </>
      ),
      extra: <p>{'All Users'}</p>,
    },
  ];

  return (
    <>
      <Collapse
        items={items}
        onChange={onChange}
        expandIconPosition={'end'}
        ghost
      />
      <ChatAvatarRow users={users.slice(0, 4)} />
    </>
  );
};

export default OnlineUserSection;
