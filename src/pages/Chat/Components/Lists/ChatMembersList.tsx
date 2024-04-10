import React from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import styled from 'styled-components';

import ChatMembersListItem from '@/components/InfiniteList/ChatMembersListItem';
import InfiniteList, {
  defaultEndMessage,
  defaultLoader,
} from '@/components/InfiniteList/InfiniteList';
import ChatIcon from 'Pages/Chat/Components/ChatIcon';
import useMockUsersData from 'Pages/Chat/Hooks/useMockUsersData';

interface ChatMembersListPropsI {}

const ChatMembersList = ({}: ChatMembersListPropsI) => {
  const { users, hasMore, fetchMoreData } = useMockUsersData({});
  return (
    <>
      <Layout
        style={{
          height: '100%',
          overflow: 'hidden',
        }}>
        <InfiniteList
          next={fetchMoreData}
          hasMore={hasMore}
          dataLength={users.length}
          endMessage={defaultEndMessage()}
          loader={defaultLoader()}
          children={
            <>
              <Button
                block
                shape={'default'}
                type={'primary'}
                icon={<PlusOutlined />}
                onClick={() => {}}>
                <p> Add Member</p>
              </Button>
              {users.map((user, index) => (
                <ChatMembersListItem name={user.name} key={index} />
              ))}
            </>
          }
        />
      </Layout>
    </>
  );
};
const Button = styled(ChatIcon)`
  margin: 0;
`;

export default ChatMembersList;
