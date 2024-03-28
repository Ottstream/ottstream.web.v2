import React from 'react';

import { Layout } from 'antd';
import styled from 'styled-components';

import ChatUrlsListItem from '@/components/InfiniteList/ChatUrlsListItem';
import InfiniteList, {
  defaultEndMessage,
  defaultLoader,
} from '@/components/InfiniteList/InfiniteList';
import ChatIcon from 'Pages/Chat/Components/ChatIcon';
import useMockInfiniteListData from 'Pages/Chat/Hooks/useMockInfiniteListData';

interface FilesListPropsI {}

const ChatUrlsListWrapper = styled(Layout)`
  height: 100%;
  overflow: hidden;
`;

const ChatUrlsList = ({}: FilesListPropsI) => {
  const { items, hasMore, fetchMoreData } = useMockInfiniteListData();
  return (
    <ChatUrlsListWrapper>
      <InfiniteList
        next={fetchMoreData}
        hasMore={hasMore}
        dataLength={items.length}
        endMessage={defaultEndMessage()}
        loader={defaultLoader()}
        children={
          <>
            {items.map((_, index) => (
              <ChatUrlsListItem key={index} index={20 + index} />
            ))}
          </>
        }
      />
    </ChatUrlsListWrapper>
  );
};
const Button = styled(ChatIcon)`
  margin: 0;
`;

export default ChatUrlsList;
