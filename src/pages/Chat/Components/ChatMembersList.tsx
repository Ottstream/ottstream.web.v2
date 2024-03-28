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
import useMockInfiniteListData from 'Pages/Chat/Hooks/useMockInfiniteListData';

interface MembersListPropsI {}

const ChatMembersList = ({}: MembersListPropsI) => {
  const { items, hasMore, fetchMoreData } = useMockInfiniteListData();
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
          dataLength={items.length}
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
              {items.map((_, index) => (
                <ChatMembersListItem key={index} index={20 + index} />
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
