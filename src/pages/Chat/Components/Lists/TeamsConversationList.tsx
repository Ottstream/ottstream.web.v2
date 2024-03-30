import React from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import styled from 'styled-components';

import InfiniteList, {
  defaultEndMessage,
  defaultLoader,
} from '@/components/InfiniteList/InfiniteList';
import InfiniteListItem from '@/components/InfiniteList/InfiniteListItem';
import ChatIcon from 'Pages/Chat/Components/ChatIcon';
import SearchInput from 'Pages/Chat/Components/SearchInput';
import ToggleSwitch from 'Pages/Chat/Components/ToggleSwitch';
import useMockUsersData from 'Pages/Chat/Hooks/useMockUsersData';

interface ConversationListPropsI {}

const TeamsConversationListWrapper = styled(Layout)`
  height: 100%;
  overflow: hidden;
  padding: 0 10px;
`;
const Button = styled(ChatIcon)`
  margin: 10px 0;
`;
const TeamsConversationList = ({}: ConversationListPropsI) => {
  const { users, hasMore, fetchMoreData } = useMockUsersData({});

  return (
    <>
      <TeamsConversationListWrapper>
        <Button
          block
          shape={'default'}
          type={'primary'}
          icon={<PlusOutlined />}
          onClick={() => {}}>
          <p> Create Group</p>
        </Button>

        <SearchInput placeholder="search" />
        <ToggleSwitch />
        <InfiniteList
          next={fetchMoreData}
          hasMore={hasMore}
          dataLength={users.length}
          endMessage={defaultEndMessage()}
          loader={defaultLoader()}
          children={users.map((user, index) => (
            <InfiniteListItem
              key={index}
              index={index}
              name={user.name}
              social={user.social}
              unreadCount={user.unreadCount}
              status={user.status}
            />
          ))}
        />
      </TeamsConversationListWrapper>
    </>
  );
};

export default TeamsConversationList;
